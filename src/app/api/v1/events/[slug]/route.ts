import { db } from "@/lib/db";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const event = await db.event.findUnique({
      where: { slug, deletedAt: null, status: "PUBLISHED" },
      include: {
        venue: true,
        category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
        organizer: { select: { id: true, name: true, avatarUrl: true } },
        ticketTiers: {},
        reviews: {
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { user: { select: { name: true } } },
        },
      },
    });

    if (!event) {
      return errorResponse("EVENT_NOT_FOUND", "الفعالية غير موجودة", undefined, 404);
    }

    // Calculate review stats
    const reviewStats = await db.review.aggregate({
      where: { eventId: event.id },
      _avg: { rating: true },
      _count: { rating: true },
    });

    const eventWithStats = {
      ...event,
      ticketTiers: event.ticketTiers.map((tier) => ({
        ...tier,
        quantityAvailable: tier.quantityTotal - tier.quantitySold,
      })),
      reviews: {
        averageRating: reviewStats._avg.rating ?? 0,
        totalReviews: reviewStats._count.rating,
        recent: event.reviews,
      },
    };

    return successResponse({ event: eventWithStats }, "تم جلب الفعالية بنجاح");
  } catch (error) {
    console.error("Error fetching event:", error);
    return errorResponse("INTERNAL_ERROR", "حدث خطأ", undefined, 500);
  }
}
