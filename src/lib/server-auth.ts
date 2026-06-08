/**
 * Server-side authentication helper.
 * Supports both Clerk and custom JWT auth (from cookie).
 * Use this in server components and API routes to get the current user.
 */

import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";

const AUTH_COOKIE_NAME = "auth_token";

/**
 * Get the current user ID from either Clerk or custom JWT auth.
 * Returns null if not authenticated.
 */
export async function getServerUserId(): Promise<string | null> {
  // Try Clerk auth first
  try {
    const { userId } = await auth();
    if (userId) return userId;
  } catch {
    // Clerk not configured — fall through to custom auth
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
 * Get the current authenticated user from either Clerk or custom JWT auth.
 * Returns the full user record or null if not authenticated / not found.
 */
export async function getServerUser() {
  const userId = await getServerUserId();
  if (!userId) return null;

  // Try finding by clerkId first (Clerk auth), then by id (custom auth)
  const user = (await db.user.findUnique({
    where: { clerkId: userId, isActive: true, deletedAt: null },
    select: {
      id: true,
      clerkId: true,
      name: true,
      email: true,
      role: true,
      avatarUrl: true,
      phone: true,
    },
  })) ?? (await db.user.findUnique({
    where: { id: userId, isActive: true, deletedAt: null },
    select: {
      id: true,
      clerkId: true,
      name: true,
      email: true,
      role: true,
      avatarUrl: true,
      phone: true,
    },
  }));

  return user;
}

/**
 * Require authentication — redirects to login if not authenticated.
 * Use in server components that require a logged-in user.
 */
export async function requireServerUser(locale: string) {
  const user = await getServerUser();
  if (!user) {
    const { redirect } = await import("next/navigation");
    redirect(`/${locale}/login`);
  }
  return user;
}
