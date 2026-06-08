import { db } from "@/lib/db";
import type { Prisma } from "@prisma/client";

export interface SearchEventsParams {
  query?: string;
  category?: string;
  city?: string;
  startDateFrom?: string;
  startDateTo?: string;
  sortBy?: "startDate" | "price" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

/**
 * Search and filter events with sorting support.
 *
 * Note: Prisma with SQLite does not support sorting by a related model's
 * field value (e.g. min ticket price). When sortBy is "price", we fetch
 * all matching events and sort in JavaScript, then apply pagination manually.
 */
export async function searchEvents({
  query,
  category,
  city,
  startDateFrom,
  startDateTo,
  sortBy = "startDate",
  sortOrder = "asc",
  page = 1,
  limit = 20,
}: SearchEventsParams) {
  const startDateFilter: Prisma.DateTimeFilter = {};
  if (startDateFrom) startDateFilter.gte = new Date(startDateFrom);
  if (startDateTo) startDateFilter.lte = new Date(startDateTo);

  const where: Prisma.EventWhereInput = {
    deletedAt: null,
    status: "PUBLISHED",
    ...(Object.keys(startDateFilter).length > 0 ? { startDate: startDateFilter } : {}),
  };

  if (query) {
    where.OR = [
      { titleAr: { contains: query } },
      { titleEn: { contains: query } },
      { descriptionAr: { contains: query } },
    ];
  }

  if (category) {
    where.category = { slug: category };
  }

  if (city) {
    where.venue = { city };
  }

  // When sorting by price, we need all events to sort in JS
  // then paginate manually, since SQLite can't sort by related model field.
  if (sortBy === "price") {
    const [allEvents, totalCount] = await Promise.all([
      db.event.findMany({
        where,
        include: {
          venue: { select: { id: true, nameAr: true, nameEn: true, city: true } },
          category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
          ticketTiers: {
            select: { id: true, type: true, price: true, quantityTotal: true, quantitySold: true },
          },
          organizer: { select: { id: true, name: true } },
        },
      }),
      db.event.count({ where }),
    ]);

    // Calculate min price for each event and sort
    const eventsWithPrice = allEvents.map((event) => {
      const prices = event.ticketTiers.map((t) => parseFloat(t.price));
      const minPrice = prices.length > 0 ? Math.min(...prices) : Infinity;
      return { ...event, _minPrice: minPrice };
    });

    eventsWithPrice.sort((a, b) => {
      return sortOrder === "asc" ? a._minPrice - b._minPrice : b._minPrice - a._minPrice;
    });

    // Manual pagination
    const skip = (page - 1) * limit;
    const paginatedEvents = eventsWithPrice.slice(skip, skip + limit);

    const eventsWithAvailability = paginatedEvents.map(({ _minPrice, ...event }) => ({
      ...event,
      ticketTiers: event.ticketTiers.map((tier) => ({
        ...tier,
        quantityAvailable: tier.quantityTotal - tier.quantitySold,
      })),
    }));

    return {
      events: eventsWithAvailability,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    };
  }

  // Standard sorting (non-price)
  const prismaOrderBy = { [sortBy]: sortOrder };
  const skip = (page - 1) * limit;

  const [events, total] = await Promise.all([
    db.event.findMany({
      where,
      include: {
        venue: { select: { id: true, nameAr: true, nameEn: true, city: true } },
        category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
        ticketTiers: {
          select: { id: true, type: true, price: true, quantityTotal: true, quantitySold: true },
        },
        organizer: { select: { id: true, name: true } },
      },
      orderBy: prismaOrderBy,
      skip,
      take: limit,
    }),
    db.event.count({ where }),
  ]);

  const eventsWithAvailability = events.map((event) => ({
    ...event,
    ticketTiers: event.ticketTiers.map((tier) => ({
      ...tier,
      quantityAvailable: tier.quantityTotal - tier.quantitySold,
    })),
  }));

  return {
    events: eventsWithAvailability,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}
