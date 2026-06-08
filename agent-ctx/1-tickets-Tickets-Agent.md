# Task 1-tickets: Fix TicketSelector i18n and Arabic numerals

## Work Completed

### File Modified
- `src/components/features/events/ticket-selector.tsx`

### Changes Made
1. **Added `useLocale` import** from `next-intl` and added `const locale = useLocale()` inside component
2. **Replaced hardcoded `tier.nameAr`** with `locale === "ar" ? tier.nameAr : (tier.nameEn || tier.nameAr)` for locale-aware tier names
3. **Added `formatLocalizedNumber` import** from `@/lib/format-number`
4. **Applied Arabic-Indic numerals** to all number displays:
   - Quantity display: `{qty}` → `{formatLocalizedNumber(qty, locale)}`
   - Availability: `{tier.quantityAvailable}` → `{formatLocalizedNumber(tier.quantityAvailable, locale)}`
   - Max per booking: `{tier.maxPerBooking}` → `{formatLocalizedNumber(tier.maxPerBooking, locale)}`
   - Total tickets: `{totalTickets}` → `{formatLocalizedNumber(totalTickets, locale)}`
5. **Replaced `gradient-text` with `price-gold`** class on both price displays (tier price and total price)

### Lint Result
- 0 errors, 2 pre-existing warnings only
