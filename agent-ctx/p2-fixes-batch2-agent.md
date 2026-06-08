# Task: p2-fixes-batch2 - P2 Fixes 2.5, 2.6, 2.9, 2.10, 3.13

## Work Log

### FIX 2.5: Missing `try/catch` in `users/me` PATCH — Unhandled P2025
- **File**: `src/app/api/v1/users/me/route.ts`
- Wrapped the entire request body parsing + DB update in `try/catch`
- Added specific P2025 (record not found) error handling returning 404
- Added generic error handling with 500 response
- Replaced manual Zod error formatting with `zodErrorResponse()` helper
- Added `ZodError` import and `zodErrorResponse` import

### FIX 2.6: Auth Layout Hardcodes Arabic/RTL — Breaks English Auth Pages
- **File**: `src/app/(auth)/layout.tsx`
- Changed from synchronous `function AuthLayout` to `async function AuthLayout`
- Added `params: Promise<{ locale?: string }>` prop with destructured `locale` and `dir`
- Replaced hardcoded `lang="ar" dir="rtl"` with dynamic `lang={locale} dir={dir}`
- Defaults to `locale="ar"` when no locale param is provided (backward compatible)

### FIX 2.9: Carousel RTL/Physical CSS Violations (Rule 6)
- **File**: `src/components/ui/carousel.tsx`
- Line 147: `"-ml-4"` → `"-ms-4"` (margin-inline-start for RTL)
- Line 166: `"pl-4"` → `"ps-4"` (padding-inline-start for RTL)
- Line 190: `"-left-12"` → `"-start-12"` (inset-inline-start for RTL)
- Line 220: `"-right-12"` → `"-end-12"` (inset-inline-end for RTL)

### FIX 2.10: Home Page Sequential DB Query After Promise.all
- **File**: `src/app/(main)/[locale]/page.tsx`
- Moved `db.ticketTier.aggregate` from sequential query into `Promise.all`
- Changed destructuring from 5 to 6 elements to include `ticketAgg`
- Eliminates one sequential DB round-trip on every homepage load

### FIX 3.13: Filter Empty Categories
- **File**: `src/app/(main)/[locale]/page.tsx` (same file as 2.10)
- Added `where: { events: { some: { status: "PUBLISHED", deletedAt: null } } }` to `db.category.findMany`
- Categories with zero published events are now excluded from the query results
- Expanded the `_count` include to use explicit `where` clause for consistency

## Verification
- `bun run lint`: 0 errors, 2 pre-existing warnings only
- Dev server: Compiling and serving 200 status correctly
