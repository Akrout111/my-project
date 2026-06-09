import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

const AUTH_COOKIE_NAME = "auth_token";

/**
 * Resolves the current user ID from either Clerk or custom JWT auth.
 * Checks Clerk first, then falls back to the auth cookie.
 * Returns null if no authenticated user is found.
 */
export async function resolveUserId(): Promise<string | null> {
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

export { AUTH_COOKIE_NAME };
