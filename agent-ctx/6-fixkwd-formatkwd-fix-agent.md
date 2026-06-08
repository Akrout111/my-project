# Task 6-fixkwd — formatKWD Fix Agent

## Task
Fix all `formatKWD()` calls to pass the current locale so prices display correctly in both English and Arabic.

## Work Done

### Files Modified (7 files, 10 formatKWD calls fixed)

1. **`src/components/features/events/event-card.tsx`** — Already had `useLocale()`
   - `formatKWD(lowestPrice)` → `formatKWD(lowestPrice, locale)` (2 occurrences, replaced all)

2. **`src/components/features/events/ticket-selector.tsx`** — Already had `useLocale()`
   - `formatKWD(tier.price)` → `formatKWD(tier.price, locale)`
   - `formatKWD(totalAmount)` → `formatKWD(totalAmount, locale)`

3. **`src/components/features/events/booking-form.tsx`** — Already had `useLocale()`
   - `formatKWD(totalAmount)` → `formatKWD(totalAmount, locale)`

4. **`src/components/features/bookings/booking-detail-client.tsx`** — Added `import { useLocale } from "next-intl"` and `const locale = useLocale()`
   - `formatKWD(booking.totalAmount)` → `formatKWD(booking.totalAmount, locale)` (2 occurrences, replaced all)
   - `formatKWD(ticket.ticketTier.price)` → `formatKWD(ticket.ticketTier.price, locale)`

5. **`src/components/features/bookings/my-bookings-client.tsx`** — Added `import { useLocale } from "next-intl"` and `const locale = useLocale()`
   - `formatKWD(booking.totalAmount)` → `formatKWD(booking.totalAmount, locale)`

6. **`src/components/features/dashboard/stats-cards.tsx`** — Added `useLocale` import and hook
   - `formatKWD(stats?.totalRevenue ?? "0.000")` → `formatKWD(stats?.totalRevenue ?? "0.000", locale)`

7. **`src/components/features/dashboard/revenue-chart.tsx`** — Added `useLocale` import and hook
   - `formatKWD(value)` → `formatKWD(value, locale)`

## Verification
- `bun run lint`: 0 errors, 2 pre-existing warnings only
- Grep confirmed: All `formatKWD(` calls in `src/components/features/` now include `locale` parameter
