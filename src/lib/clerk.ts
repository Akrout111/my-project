import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { db } from "./db";

const AUTH_COOKIE_NAME = "auth_token";

/**
 * Resolves the current user ID from either Clerk or custom JWT auth.
 * Checks Clerk first, then falls back to the auth cookie.
 */
async function resolveUserId(): Promise<string | null> {
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
 * Find a user by either clerkId (Clerk auth) or id (custom auth).
 */
async function findUserByIdentifier(userId: string) {
  return (await db.user.findUnique({
    where: { clerkId: userId, isActive: true, deletedAt: null },
  })) ?? (await db.user.findUnique({
    where: { id: userId, isActive: true, deletedAt: null },
  }));
}

export async function getCurrentUser() {
  const userId = await resolveUserId();
  if (!userId) return null;

  return findUserByIdentifier(userId);
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) throw new Error("UNAUTHORIZED");
  return user;
}

export async function requireRole(roles: string[]) {
  const user = await requireAuth();
  if (!roles.includes(user.role)) throw new Error("FORBIDDEN");
  return user;
}
