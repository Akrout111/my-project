# Task 3-auth-ratelimit — Auth Rate-Limit Fix Agent

## Task
Fix auth route rate limiting and related issues (H-01, M-01, M-09, M-03, M-21, M-18)

## Changes Made

### H-01: Rate limiting on auth endpoints
- Added `checkRateLimit(getClientIdentifier(req), { limit: 5, windowSeconds: 60 })` to:
  - `src/app/api/v1/auth/login/route.ts`
  - `src/app/api/v1/auth/register/route.ts`
  - `src/app/api/v1/auth/forgot-password/route.ts`
- Returns 429 with `RATE_LIMITED` error code when exceeded

### M-01: API route.ts raw NextResponse
- `src/app/api/route.ts`: Replaced `NextResponse.json()` with `successResponse({ status: "ok" }, "API is running")`

### M-09: Hardcoded error messages in login
- Changed error codes: `UNAUTHORIZED` → `INVALID_CREDENTIALS` and `SOCIAL_LOGIN_ONLY`
- Shortened social login message

### M-03: Notification query schema .message()
- Added `{ message: "..." }` params to all Zod validation rules in `src/app/api/v1/notifications/route.ts`

### M-21: Vercel Cron signature verification
- Added `verifyVercelCronSignature()` using HMAC-SHA256 in `src/app/api/v1/cron/reminders/route.ts`
- Checks `x-vercel-signature` header in Vercel production environments

### M-18: NotificationService try/catch
- try/catch already existed; upgraded `console.error` → `logger.error` from `@/lib/logger`

## Verification
- `bun run lint`: 0 errors, 131 pre-existing warnings
- Dev server compiles successfully
