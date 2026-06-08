# Task: p1-fixes-batch2 — P1 Critical Fixes 1.3, 1.4, 1.8, 1.9, 1.10

## Agent: Backend Fix Agent

## Summary
Implemented 5 critical backend fixes for the Kuwait Events Platform.

## Changes Made

### FIX 1.3: Replace Math.random() in Booking Number Generation
- **File**: `src/lib/booking-utils.ts` — Complete rewrite
- `generateBookingNumber()` now async, uses `crypto.randomUUID()` with DB uniqueness check (5 retries, fallback to Date.now().toString(36))
- `generateTicketNumber()` now async, same pattern
- Format changed: `EVT-YYYY-XXXXXX` for bookings, `TKT-XXXXXXXX` for tickets

### FIX 1.4: Deduplicate & Fix Booking Utility Functions
- **File**: `src/lib/booking-expiry.ts` — Complete rewrite
- Fixed import: `from "./db"` → `from "@/lib/db"`
- Wrapped each booking release in its own `$transaction` for atomicity
- Aggregated tickets by tier before decrementing quantitySold
- Added per-booking try/catch so one failure doesn't block others

### FIX 1.8: Unauthenticated Cron Endpoint
- **File**: `src/app/api/cron/release-expired/route.ts` — Complete rewrite
  - Added `x-cron-secret` header validation against `CRON_SECRET` env var
  - Returns 401 if secret missing or mismatched
- **File**: `src/app/api/v1/bookings/release-expired/route.ts` — Complete rewrite
  - Added `requireAdmin()` guard (imported from `@/lib/admin-guard`, to be created by another agent)

### FIX 1.9: Notification Schema Mismatch
- **File**: `prisma/schema.prisma` — Added `data String?` and `readAt DateTime?` to Notification model
- **File**: `src/lib/notifications/types.ts` — Expanded NotificationType enum (9 types), added NotificationPayload and EmailPayload interfaces
- **File**: `src/lib/notifications/notification-service.ts` — Fixed relative imports to absolute (`./types` → `@/lib/notifications/types`, `./email-sender` → `@/lib/notifications/email-sender`)
- Ran `npx prisma db push` successfully

### FIX 1.10: Booking Creation Race Condition
- **File**: `src/app/api/v1/bookings/route.ts` — Complete rewrite of POST handler
- Moved ticket availability check INSIDE `$transaction` for race condition safety
- Throws `Error("TICKETS_UNAVAILABLE:{tierId}")` caught by outer catch handler → returns 409
- Added `await` for async `generateBookingNumber()` and `generateTicketNumber()`
- Removed unused `releaseExpiredBookings` import
- Removed inline `releaseExpiredBookings()` call from GET handler
- Removed unnecessary `bookingsWithStringAmounts` mapping

## Verification
- `npx prisma db push` — Schema sync successful
- `bun run lint` — 0 errors, 2 pre-existing warnings only
- Dev server running without errors
