# P1 Fixes Batch 1 — Agent Work Record

**Task ID**: p1-fixes-batch1
**Agent**: General Purpose
**Date**: 2025-03-04

## Work Completed

### FIX 1.1: Zod v4 `required_error` / `invalid_type_error` Removal
- Replaced `src/lib/validators/review-schema.ts` entirely:
  - `{ required_error: "..." }` → `{ message: "..." }` on `z.number()`
  - Added missing `eventId` field per task spec
  - `.int()` now uses `{ message: "..." }` syntax
  - `.min()`, `.max()` use `{ message: "..." }` syntax
  - `.max(1000)` on comment uses `{ message: "..." }` syntax
- Replaced `src/lib/validators/admin-schema.ts` entirely:
  - `z.enum(["ATTENDEE", "ORGANIZER", "ADMIN"], { required_error, invalid_type_error })` → `{ message: "الدور مطلوب ويجب أن يكون صالحاً" }`
  - `z.boolean({ required_error })` → `z.boolean({ message })` in 2 schemas
  - `z.enum([...], { required_error })` → `z.enum([...], { message })` in changeEventStatusSchema
  - All `.min()`, `.url()`, `.regex()` validators use `{ message: "..." }` syntax
- Verified: `grep required_error|invalid_type_error src/lib/validators/` returns 0 results

### FIX 1.2: Replace `catch(error)` with `catch(error: unknown)`
- Fixed 14 catch blocks across 11 files:
  - `src/app/api/v1/venues/route.ts` — 1 catch block
  - `src/app/api/v1/venues/[slug]/route.ts` — 1 catch block
  - `src/app/api/v1/categories/route.ts` — 1 catch block
  - `src/app/api/v1/payments/mock-redirect/route.ts` — 1 catch block
  - `src/app/api/v1/payments/callback/route.ts` — 1 catch block
  - `src/app/api/v1/bookings/[id]/route.ts` — 1 catch block
  - `src/app/api/v1/bookings/[id]/cancel/route.ts` — 1 catch block
  - `src/lib/knet.ts` — 2 catch blocks
  - `src/lib/email.ts` — 1 catch block
  - `src/app/(dashboard)/[locale]/dashboard/events/new/page.tsx` — 1 catch block
  - `src/app/(dashboard)/[locale]/dashboard/events/[id]/edit/page.tsx` — 1 catch block
  - `src/components/features/dashboard/image-uploader.tsx` — 1 catch block
- Verified: `grep 'catch\s*\(\s*(error|e|err)\)\s*\{' src/` returns 0 results
- Verified: `grep 'catch\s*\(\s*(error|e|err)\s*:\s*any\s*\)' src/` returns 0 results

### FIX 1.5: Replace raw `useAuth()` with `useSafeAuth()` in client components
- Enhanced `src/hooks/use-safe-auth.ts` to properly delegate to Clerk when configured:
  - When Clerk keys are present: calls `useAuth()` from `@clerk/nextjs` (real auth state)
  - When Clerk keys are absent: returns safe mock state via `useSyncExternalStore` (no crash)
  - Added `useSafeUser()` hook following same pattern (delegates to Clerk's `useUser()` when available)
- Updated 3 client component files:
  - `src/hooks/use-notifications.ts`: `import { useAuth } from "@clerk/nextjs"` → `import { useSafeAuth } from "@/hooks/use-safe-auth"`, `useAuth()` → `useSafeAuth()` (2 instances)
  - `src/components/features/reviews/reviews-section.tsx`: `import { useAuth } from "@clerk/nextjs"` → `import { useSafeAuth } from "@/hooks/use-safe-auth"`, `useAuth()` → `useSafeAuth()`
  - `src/components/features/auth/role-gate.tsx`: `import { useAuth, useUser } from "@clerk/nextjs"` → `import { useSafeAuth } from "@/hooks/use-safe-auth"`, `useAuth()` → `useSafeAuth()` (useUser was imported but never used — removed)

### FIX 1.6: Add Server-Side Role Protection for Admin API Routes
- Created `src/lib/admin-guard.ts` with `requireAdmin()` function:
  - Checks `auth()` from Clerk for userId
  - Looks up user in DB by clerkId
  - Verifies role === "ADMIN"
  - Returns typed result: `{ success: true, user }` or `{ success: false, response: NextResponse }`
  - Returns 401 for unauthenticated, 403 for non-admin
- Updated ALL 9 admin route files to use `requireAdmin()`:
  1. `src/app/api/v1/admin/events/route.ts` — Replaced `requireRole(["ADMIN"])` with `requireAdmin()`, removed catch-based auth error handling
  2. `src/app/api/v1/admin/events/[id]/status/route.ts` — Same
  3. `src/app/api/v1/admin/events/[id]/feature/route.ts` — Same
  4. `src/app/api/v1/admin/categories/route.ts` — Same (2 handlers: GET + POST)
  5. `src/app/api/v1/admin/categories/[id]/route.ts` — Same (2 handlers: PATCH + DELETE)
  6. `src/app/api/v1/admin/stats/route.ts` — Replaced inline `auth()` + DB check with `requireAdmin()`
  7. `src/app/api/v1/admin/users/route.ts` — Replaced `requireRole(["ADMIN"])` with `requireAdmin()`
  8. `src/app/api/v1/admin/users/[id]/active/route.ts` — Replaced `requireRole(["ADMIN"])` with `requireAdmin()`, uses `adminCheck.user.id` for self-check
  9. `src/app/api/v1/admin/users/[id]/role/route.ts` — Same as above
- All handlers now add `requireAdmin()` as first line before try block
- Removed `requireRole` imports from `@/lib/clerk` in admin routes (replaced with `requireAdmin` from `@/lib/admin-guard`)
- Removed catch-based auth error handling (UNAUTHORIZED/FORBIDDEN checks) since `requireAdmin()` handles it early-return style

## Verification
- `bun run lint`: 0 errors, 2 pre-existing warnings only
- Dev server: No compilation errors, pages serve 200 status
