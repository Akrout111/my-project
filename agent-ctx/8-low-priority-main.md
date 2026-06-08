# Task 8-low-priority: Fix All Low-Priority Issues

## Summary
Fixed 6 low-priority issues (L-04, L-07, L-08, L-09, L-10, L-11) across ~15 files.

## Changes Made

### L-04: Semantic design tokens for status colors
- Added `--warning`, `--success`, `--info` CSS custom properties to globals.css (both light and dark themes)
- Added `--color-warning`, `--color-success`, `--color-info` to Tailwind @theme inline
- Updated 6 files: bookings-client-page.tsx, event-table.tsx, admin/events/page.tsx, admin/users/page.tsx, my-bookings-client.tsx, booking-detail-client.tsx

### L-07: Removed dangerouslySetInnerHTML
- Replaced with safe renderMarkedText() function using regex parsing of <mark> tags
- Updated highlight mark styles to use semantic warning tokens

### L-08: Replaced <img> with Next.js <Image>
- scroll-video-hero.tsx: poster fallback image
- category-carousel.tsx: category icon image
- video-hover-card.tsx: thumbnail image (was motion.img)

### L-09: Calendar Arabic locale support
- Added useLocale() from next-intl, date-fns ar and enUS locales
- Conditionally passes locale prop to DayPicker

### L-10: ChartTooltipContent aria-label
- Added aria-label prop and role="tooltip" to tooltip container

### L-11: Page metadata
- Added metadata to 3 pages: home, profile, notifications

## Verification
- lint: 0 errors
- dev server: compiling successfully
