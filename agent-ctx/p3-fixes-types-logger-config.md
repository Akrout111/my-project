# Task: p3-fixes-types-logger-config

## FIX 3.2: Remove All `any` Types

- Created `src/types/api.ts` with shared types:
  - `ApiResponse<T>` — Generic API response wrapper with success/data/message/meta/error
  - `CategoryItem` — Category as returned by API (with optional _count for events)
  - `TicketTierItem` — Ticket tier as returned in event listings
  - `VenueItem` — Venue as returned in event listings
  - `EventItem` — Event as returned by list/search API
  - `VenueDetail` — Venue detail with included events
  - `BookingItem` — Booking as returned by user bookings API

- Fixed `: any` in 7 component files:
  - `category-carousel.tsx`: `category: any` → `CategoryItem`, `categories: any[]` → `CategoryItem[]`, `(cat: any)` → `(cat)`
  - `browse-events-client.tsx`: `categories: any[]` → `CategoryItem[]`, `(event: any)` → `(event: EventItem)`, `Record<string, any>` → `Record<string, unknown>`
  - `category-page-client.tsx`: `category: any` → `CategoryItem`, `events: any[]` → `EventItem[]`, `(event: any)` → `(event: EventItem)`
  - `venue-page-client.tsx`: `venue: any` → `VenueDetail`, `(event: any)` → `(event: EventItem)`, `(tier: any)` → `(tier: TicketTierItem)`
  - `featured-events-grid.tsx`: `events: any[]` → `EventItem[]`, `(event: any)` → `(event: EventItem)`
  - `event-filters.tsx`: `categories: any[]` → `CategoryItem[]`, `Record<string, any>` → `Record<string, unknown>`, `(cat: any)` → `(cat: CategoryItem)`, `(c: any)` → `(c: CategoryItem)`
  - `my-bookings-client.tsx`: `(booking: any)` → `(booking: BookingItem)`

## FIX 3.3: Replace Console Logs with Structured Logger

- Created `src/lib/logger.ts`:
  - Structured logger with `debug`, `info`, `warn`, `error` methods
  - Format: `[LEVEL] [Context] Message`
  - Debug/info only log in development mode
  - Warn/error always log

- Replaced `console.error`/`console.warn` in 6 files:
  - `src/app/api/v1/bookings/route.ts`: 2 console.error → logger.error("Booking", ...)
  - `src/app/api/v1/events/route.ts`: 1 console.error → logger.error("Events", ...)
  - `src/app/api/v1/notifications/route.ts`: 2 console.error → logger.error("Notifications", ...)
  - `src/app/api/v1/users/me/route.ts`: 1 console.error → logger.error("User", ...)
  - `src/lib/notifications/notification-service.ts`: 2 console.error → logger.error("NotificationService", ...), 1 console.warn → logger.warn("NotificationService", ...)
  - `src/lib/booking-expiry.ts`: 1 console.error → logger.error("BookingExpiry", ...)

- Note: `src/app/api/cron/release-expired/route.ts` had no console calls to replace

## FIX 3.7: Remove `noImplicitAny: false` from tsconfig.json

- Removed `"noImplicitAny": false,` line from tsconfig.json
- `strict: true` already enables `noImplicitAny`, so this override was hiding type issues

## FIX 3.8: Enable `reactStrictMode` in next.config.ts

- Changed `reactStrictMode: false` → `reactStrictMode: true`
- Removed `typescript: { ignoreBuildErrors: true }` block entirely

## FIX 3.16 (partial): Fix Relative Import Paths in src/lib/

- `src/lib/slug.ts`: `import { db } from "./db"` → `import { db } from "@/lib/db"`
- `src/lib/qr-utils.ts`: `import { db } from "./db"` → `import { db } from "@/lib/db"`
- `src/lib/i18n.ts`: `import { routing } from "./routing"` → `import { routing } from "@/i18n/routing"`
- `src/lib/clerk.ts`: `import { db } from "./db"` → `import { db } from "@/lib/db"`
- Did NOT touch `src/lib/notifications/notification-service.ts` (already fixed by another agent)

## Verification

- `bun run lint`: 0 errors, 2 pre-existing warnings only
- Dev server compiles successfully, pages serve 200 status
- Zero `: any` or `as any` remaining in src/ TypeScript files
- Zero `console.error`/`console.log`/`console.warn` in the 7 target API/lib files
