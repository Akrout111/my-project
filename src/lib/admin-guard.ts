import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";
import { errorResponse } from "@/lib/api-response";

const AUTH_COOKIE_NAME = "auth_token";

/**
 * Resolves the current user ID from either Clerk or custom JWT auth.
 */
async function resolveUserId(): Promise<string | null> {
  // Try Clerk auth first
  try {
    const { userId } = await auth();
    if (userId) return userId;
  } catch {
    // Clerk not configured — fall through
  }

  // Try custom JWT auth from cookie
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    if (token) {
      const payload = verifyToken(token);
      if (payload) return payload.userId;
    }
  } catch {
    // Cookie not available — fall through
  }

  return null;
}

/**
 * Verifies that the current user has ADMIN role.
 * Supports both Clerk and custom JWT authentication.
 * Call this at the top of every admin API route handler.
 * Returns the user record on success, or an error Response on failure.
 */
export async function requireAdmin(): Promise<
  | { success: true; user: { id: string; clerkId: string; role: string; email: string } }
  | { success: false; response: Response }
> {
  const userId = await resolveUserId();

  if (!userId) {
    return {
      success: false,
      response: errorResponse("UNAUTHORIZED", "Authentication required", undefined, 401),
    };
  }

  // Try finding by clerkId first, then by id
  const user = (await db.user.findUnique({
    where: { clerkId: userId, isActive: true, deletedAt: null },
    select: { id: true, clerkId: true, role: true, email: true },
  })) ?? (await db.user.findUnique({
    where: { id: userId, isActive: true, deletedAt: null },
    select: { id: true, clerkId: true, role: true, email: true },
  }));

  if (!user || user.role !== "ADMIN") {
    return {
      success: false,
      response: errorResponse("FORBIDDEN", "Admin access required", undefined, 403),
    };
  }

  return { success: true, user };
}
