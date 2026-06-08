# Task E1, E2, E3: Focus Rings, Scrollbar, ARIA Labels

## Summary
Completed all three accessibility tasks: global focus-visible rings, scrollbar verification, and ARIA label i18n-ization.

## Changes Made

### E1: Focus Rings (globals.css)
- Added global `focus-visible` rule after `.focus-gold` section (lines 502-516)
- Gold outline + box-shadow for: button, a, input, select, textarea, [tabindex]
- No conflict with `.focus-gold` class (different shadow opacity)

### E2: Custom Scrollbar (verified, no changes)
- Scrollbar already styled: thin (6px), gold accent, webkit + Firefox, dark theme enhanced

### E3: ARIA Labels (i18n-ized)

#### navbar.tsx
- ThemeToggle: `aria-label={t("toggleTheme")}` (was hardcoded English)
- Mobile menu: `aria-label={t("openMenu")}` (was `t("menu") || "Open menu"`)
- Added `useTranslations("nav")` to ThemeToggle sub-component

#### language-switcher.tsx
- Added `aria-label={t("switchLanguage")}` (was missing)
- Added `useTranslations` import from next-intl

#### category-carousel.tsx
- Prev button: `aria-label={t("prevCategory")}` (was hardcoded `"Previous categories"`)
- Next button: `aria-label={t("nextCategory")}` (was hardcoded `"Next categories"`)

#### Translation Keys Added
- `nav.toggleTheme`, `nav.switchLanguage`, `nav.openMenu`, `nav.closeMenu`, `nav.search`
- `home.prevCategory`, `home.nextCategory`
- Both en.json and ar.json updated

## Lint Result
0 errors, 2 pre-existing warnings (React Hook Form `watch()` in dashboard)
