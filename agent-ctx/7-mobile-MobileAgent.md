# Task 7-mobile: Fix hero text and enhance mobile navbar

## Work Completed

1. **Hero text verification**: Confirmed hero heading already has responsive text sizing (`text-4xl sm:text-5xl md:text-6xl lg:text-7xl`) - no changes needed.

2. **Mobile Sheet drawer dark glass enhancement**: Changed `SheetContent` className from `bg-background/80` to `bg-[oklch(0.15_0.03_260/95%)]` for deep navy dark glass background.

3. **Hamburger button touch-target**: Added `touch-target` class to the mobile hamburger `<Button>` for better touch accessibility.

4. **i18n aria-label**: Changed `aria-label="Open menu"` to `aria-label={t("menu") || "Open menu"}` for locale-aware accessibility.

5. **Translation keys added**:
   - `ar.json` nav: `"menu": "القائمة"`
   - `en.json` nav: `"menu": "Menu"`

6. **Lint**: 0 errors, 2 pre-existing warnings only.

## Files Modified
- `src/components/features/layout/navbar.tsx` (Sheet bg + button class + aria-label)
- `src/messages/ar.json` (added menu key)
- `src/messages/en.json` (added menu key)
