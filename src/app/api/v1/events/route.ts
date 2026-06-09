import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";
import { NextRequest } from "next/server";
import type { Prisma } from "@prisma/client";
import { logger } from "@/lib/logger";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1") || 1);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20") || 20));
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const startDateFrom = searchParams.get("startDateFrom");
    const startDateTo = searchParams.get("startDateTo");
    const venueId = searchParams.get("venueId");
    const isFeatured = searchParams.get("isFeatured") === "true";
    const allowedSortBy = ["startDate", "createdAt", "titleAr", "titleEn", "minPrice"];
    const allowedSortOrder = ["asc", "desc"];
    const sortByParam = searchParams.get("sortBy") ?? "startDate";
    const sortOrderParam = searchParams.get("sortOrder") ?? "asc";
    const sortBy = allowedSortBy.includes(sortByParam) ? sortByParam : "startDate";
    const sortOrder = allowedSortOrder.includes(sortOrderParam) ? (sortOrderParam as "asc" | "desc") : "asc";

    const skip = (page - 1) * limit;

    const where: Prisma.EventWhereInput = {
      deletedAt: null,
      status: "PUBLISHED",
    };

    if (category) {
      where.category = { slug: category };
    }

    if (search) {
      // SQLite doesn't support mode: "insensitive", use contains
      where.OR = [
        { titleAr: { contains: search } },
        { titleEn: { contains: search } },
        { descriptionAr: { contains: search } },
      ];
    }

    if (startDateFrom || startDateTo) {
      where.startDate = {};
      if (startDateFrom) where.startDate.gte = new Date(startDateFrom);
      if (startDateTo) where.startDate.lte = new Date(startDateTo);
    }

    if (venueId) {
      where.venueId = venueId;
    }

    if (searchParams.get("isFeatured") !== null) {
      where.isFeatured = isFeatured;
    }

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
        orderBy: { [sortBy]: sortOrder },
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

    return successResponse(
      { events: eventsWithAvailability },
      "تم جلب الفعاليات بنجاح",
      { page, limit, total, totalPages: Math.ceil(total / limit) }
    );
  } catch (error: unknown) {
    logger.error("events", "Error fetching events", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ في جلب الفعاليات", undefined, 500);
  }
}
