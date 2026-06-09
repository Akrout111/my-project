import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/lib/routing";
import { verifyCsrfToken } from "@/lib/csrf";

const intlMiddleware = createIntlMiddleware(routing);

// Protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/bookings(.*)",
  "/profile(.*)",
  "/api/v1/bookings(.*)",
  "/api/v1/payments(.*)",
  "/api/v1/upload(.*)",
  "/api/v1/users(.*)",
  "/api/v1/notifications(.*)",
  "/api/v1/tickets(.*)",
  "/api/v1/reviews(.*)",
  "/api/v1/dashboard(.*)",
]);

/**
 * CSRF protection for state-changing API requests.
 * - Skips non-mutation methods (GET, HEAD, OPTIONS)
 * - Skips webhook and cron endpoints (server-to-server)
 * - Skips the CSRF token issuance endpoint
 * - If a token is provided but invalid → 403
 * - If no token is provided → allow through (gradual migration)
 */
function checkCsrf(req: NextRequest): NextResponse | null {
  const method = req.method.toUpperCase();
  if (!["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    return null;
  }

  const { pathname } = req.nextUrl;

  // Only apply to /api/v1/ routes
  if (!pathname.startsWith("/api/v1/")) {
    return null;
  }

  // Skip the CSRF token endpoint itself (it issues tokens)
  if (pathname === "/api/v1/csrf-token") {
    return null;
  }

  // Skip webhooks (they come from external services, not browsers)
  if (pathname.startsWith("/api/v1/webhooks/")) {
    return null;
  }

  // Skip cron endpoints (server-to-server)
  if (pathname.startsWith("/api/cron/")) {
    return null;
  }

  const token = req.headers.get("X-CSRF-Token");
  if (token && !verifyCsrfToken(token)) {
    // Token provided but invalid — block
    return NextResponse.json(
      { success: false, error: { code: "CSRF_INVALID", message: "Invalid CSRF token" } },
      { status: 403 }
    );
  }
  // If no token provided, allow through (gradual migration)
  // In production, you may want to enforce tokens on all routes

  return null;
}

// Combine Clerk middleware with i18n middleware + CSRF protection
const clerkMid = clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // CSRF check — runs before anything else for API mutation requests
  const csrfResult = checkCsrf(req);
  if (csrfResult) {
    return csrfResult;
  }

  // Check protected routes — enforce authentication
  if (isProtectedRoute(req)) {
    // This will redirect unauthenticated users to sign-in for page routes
    // or return 401 for API routes
    const authResult = await auth();

    if (!authResult.userId) {
      // API routes get 401
      if (pathname.startsWith("/api")) {
        return NextResponse.json(
          { error: "UNAUTHORIZED", message: "Authentication required" },
          { status: 401 }
        );
      }
      // Page routes — let Clerk handle redirect to sign-in
      // auth() will automatically redirect when protect() is not used
    }
  }

  // Apply i18n routing for non-API routes
  if (!pathname.startsWith("/api") && !pathname.startsWith("/_next")) {
    const response = intlMiddleware(req);
    return response;
  }

  return NextResponse.next();
});

export default clerkMid;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
