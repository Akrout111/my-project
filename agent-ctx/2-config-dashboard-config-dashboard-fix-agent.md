# Task 2-config-dashboard: Config & Dashboard Auth Fix Agent

## Summary
Fixed all 9 config and dashboard authentication issues in the Next.js 16 project.

## Changes Made

### Config Fixes
1. **next.config.ts**: Removed `typescript.ignoreBuildErrors`, set `reactStrictMode: true`
2. **tsconfig.json**: Changed `noImplicitAny: false` → `true`
3. **eslint.config.mjs**: Re-enabled 5 ESLint rules (no-explicit-any, no-unused-vars, exhaustive-deps, prefer-const, no-console) from "off" to "warn"

### Dashboard Auth Protection (H-03)
- 3 server component pages: added `requireServerUser(locale)` directly with params prop
- 3 client component pages: created server component wrappers that call `requireServerUser(locale)` before rendering the client component
  - bookings: `bookings-client-page.tsx` + server `page.tsx`
  - events/new: `new-event-client-page.tsx` + server `page.tsx`
  - tickets: `ticket-scanner-client-page.tsx` + server `page.tsx`

### API Route Security
4. **admin/stats**: Replaced `getCurrentUser()` + manual role check with `requireAdmin()` from `@/lib/admin-guard`
5. **dashboard/stats**: Added `ORGANIZER`/`ADMIN` role check after authentication
6. **mock-redirect**: Changed condition to block in all non-development environments unless `PAYMENT_MODE=mock`

### UI Fix
7. **ThemeProvider**: Changed `defaultTheme="light"` → `"system"` and `enableSystem={false}` → `enableSystem` in main and dashboard layouts

## Verification
- `bun run lint`: 0 errors, 115 warnings (all pre-existing)
- Dev server: compiles successfully
