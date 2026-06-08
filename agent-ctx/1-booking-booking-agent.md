# Task 1-booking: Fix BookingForm and CategoryCarousel i18n/styling

## Work Completed

### BookingForm (`src/components/features/events/booking-form.tsx`)
- **Fixed hardcoded Arabic placeholder**: Changed `placeholder="محمد أحمد"` to `placeholder={locale === "ar" ? "محمد أحمد" : "Mohammed Ahmed"}` on the attendee name input (line 140)
- The `gradient-text` class was NOT found on the booking button area or price display — it's only on the section title (`<h2>`), which is not a price/button element, so it was left as-is

### CategoryCarousel (`src/components/features/events/category-carousel.tsx`)
- **Fixed edge fade gradients**: Replaced invalid Tailwind classes (`bg-gradient-to-e`, `bg-gradient-to-s`) with CSS variable approach:
  - Start edge: `[background:linear-gradient(to_right,var(--color-background),transparent)]`
  - End edge: `[background:linear-gradient(to_left,var(--color-background),transparent)]`
- This approach is RTL-safe because the gradient directions are physical (to_right, to_left) which always fade correctly regardless of document direction
- Verified carousel arrow buttons are already well-styled — no changes needed

### Lint Results
- `bun run lint`: 0 errors, 2 pre-existing warnings only
