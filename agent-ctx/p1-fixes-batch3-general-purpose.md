# Task: p1-fixes-batch3 — Implement P1 Fixes 1.7, 1.11 and P2 Fix 2.1

## Summary
All three fixes implemented successfully.

## Changes Made

### FIX 1.7: Clerk Auth in Middleware (`src/proxy.ts`)
- Replaced placeholder with actual `auth()` from `@clerk/nextjs/server`
- Protected page routes redirect to /sign-in; protected API routes return 401 JSON
- Fixed import from `@/lib/routing` to `@/i18n/routing`
- Made proxy function async

### FIX 1.11: Sort Param Sanitization
- `src/app/api/v1/events/route.ts`: Added ALLOWED_SORT_FIELDS/ORDERS allowlists + sanitizeSortParams()
- `src/lib/search.ts`: Same allowlist pattern, runtime validation of sortBy/sortOrder
- Both files default to "startDate"/"asc" for invalid inputs

### FIX 2.1: zodErrorResponse Helper (`src/lib/api-response.ts`)
- Added ZodError import and zodErrorResponse function
- Maps error.issues to { field, message } objects
- Returns standardized 400 response

## Lint: 0 errors, 2 pre-existing warnings
