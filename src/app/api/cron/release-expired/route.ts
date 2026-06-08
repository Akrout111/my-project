import { releaseExpiredBookings } from "@/lib/booking-expiry";
import { successResponse, errorResponse } from "@/lib/api-response";

/**
 * GET /api/cron/release-expired
 * Called from an external cron job (e.g. Vercel Cron or GitHub Actions)
 * to periodically release expired bookings
 */
export async function GET(request: Request) {
  try {
    // Verify cron secret for security
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret && (!authHeader || authHeader !== `Bearer ${cronSecret}`)) {
      return errorResponse("UNAUTHORIZED", "Missing or invalid cron secret", undefined, 401);
    }

    const result = await releaseExpiredBookings();
    console.log(`[Cron] Released ${result.released} expired bookings`);
    return successResponse(result, `Released ${result.released} expired bookings`);
  } catch (error: unknown) {
    console.error("Cron release-expired error:", error);
    return errorResponse("INTERNAL_ERROR", "Failed to release expired bookings", undefined, 500);
  }
}

export const dynamic = "force-dynamic";
