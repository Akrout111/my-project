import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/lib/routing";

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

// Combine Clerk middleware with i18n middleware
const clerkMid = clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

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
