# Task: p2-fixes-batch1 — Implement P2 Fixes 2.2, 2.3, 2.4

## Work Log

### FIX 2.2: Fix Three.js Memory Leaks — Proper Dispose Pattern

1. **Updated `src/lib/three/three-canvas.ts`** — `ThreeCanvasManager.dispose()`:
   - Added `THREE.Points` geometry/material disposal in traverse (was missing before — particle systems leaked)
   - Added `this.scene.clear()` after traverse to remove all children from scene
   - Moved `this.renderer.dispose()` AFTER scene cleanup (proper order)
   - Added `this.renderer.forceContextLoss()` to fully release WebGL context (critical for GPU memory)

2. **Updated `src/components/ui/three-section-bg.tsx`** — Lazy material initialization:
   - Replaced `const SECTION_MATS = createSectionMaterials();` (module-scope eager init) with lazy getter pattern:
     ```typescript
     let _sectionMats: ReturnType<typeof createSectionMaterials> | null = null;
     function getSectionMaterials() {
       if (!_sectionMats) { _sectionMats = createSectionMaterials(); }
       return _sectionMats;
     }
     ```
   - Updated `SECTION_MATS.metals` → `getSectionMaterials().metals` and `SECTION_MATS.glass` → `getSectionMaterials().glass`
   - This avoids creating Three.js materials at module import time (which could happen during SSR)

### FIX 2.3: Add loading.tsx and error.tsx for Route Segments

Created 3 new route segment files:

1. **`src/app/(main)/[locale]/loading.tsx`** — Global loading state for locale routes with Arabic spinner text
2. **`src/app/(main)/[locale]/error.tsx`** — Error boundary with Arabic error message and retry button (uses `"use client"` as required by Next.js)
3. **`src/app/(dashboard)/[locale]/dashboard/loading.tsx`** — Dashboard skeleton with 4-column grid of pulse placeholders

Note: `events/loading.tsx` and `events/[slug]/loading.tsx` already existed with good skeleton-based designs, so they were not overwritten.

Note: The dashboard is under the `(dashboard)` route group, not `(main)`, so the loading.tsx was placed at the correct path.

### FIX 2.4: Add Basic Rate Limiting

1. **Created `src/lib/rate-limit.ts`** — Simple in-memory rate limiter:
   - `checkRateLimit(identifier, options)` — returns `{ allowed, remaining, resetAt }`
   - `getClientIdentifier(req)` — extracts IP from `x-forwarded-for` header
   - Default: 30 requests per 60 seconds
   - Auto-cleanup of expired entries every 5 minutes
   - SSR-safe (uses `typeof setInterval !== "undefined"` check)

2. **Added rate limiting to booking creation** — `src/app/api/v1/bookings/route.ts`:
   - POST handler: 5 requests/min per IP (after auth check)

3. **Added rate limiting to review creation** — `src/app/api/v1/events/[id]/reviews/route.ts`:
   - POST handler: 5 requests/min per IP (after auth check)

4. **Added rate limiting to ALL admin routes** (30 requests/min):
   - `src/app/api/v1/admin/events/route.ts` — GET handler
   - `src/app/api/v1/admin/stats/route.ts` — GET handler (no req param, uses static identifier "admin-stats")
   - `src/app/api/v1/admin/users/route.ts` — GET handler
   - `src/app/api/v1/admin/categories/route.ts` — GET + POST handlers
   - `src/app/api/v1/admin/categories/[id]/route.ts` — PATCH + DELETE handlers (renamed `_req` to `req` for DELETE)
   - `src/app/api/v1/admin/events/[id]/status/route.ts` — PATCH handler
   - `src/app/api/v1/admin/events/[id]/feature/route.ts` — PATCH handler
   - `src/app/api/v1/admin/users/[id]/role/route.ts` — PATCH handler
   - `src/app/api/v1/admin/users/[id]/active/route.ts` — PATCH handler

All rate limits are placed AFTER the admin/auth check to avoid counting unauthenticated requests.

## Lint Results
- 0 errors, 2 pre-existing warnings only (React Hook Form `watch()` in dashboard edit/new pages)

## Dev Server
- Pages compile and serve 200 status correctly
