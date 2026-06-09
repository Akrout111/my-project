import { resolveUserId } from "@/lib/auth-utils";
import { db } from "./db";

/**
 * Find a user by either clerkId (Clerk auth) or id (custom auth).
 * Uses a single OR query instead of two sequential findUnique calls.
 */
async function findUserByIdentifier(userId: string) {
  return db.user.findFirst({
    where: {
      OR: [{ clerkId: userId }, { id: userId }],
      isActive: true,
      deletedAt: null,
    },
  });
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
