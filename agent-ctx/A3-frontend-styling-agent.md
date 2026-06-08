# Task A3: Localize Date Picker in Event Filters

## Summary
Localized the native date input in the event filters component by adding a Calendar icon, i18n placeholder, RTL-safe padding, and dark-mode-aware calendar picker indicator styling.

## Changes Made

### 1. `src/components/features/events/event-filters.tsx`
- **Import**: Added `Calendar` to the `lucide-react` import
- **Date input section** (lines 114-127):
  - Added `<Calendar>` icon with `absolute start-3 top-1/2 -translate-y-1/2` positioning (RTL-safe)
  - Added `pointer-events-none` to icon so clicks pass through to input
  - Added `placeholder={t("filterDate")}` for localized placeholder
  - Added `ps-9` class (logical inline-start padding) to Input component

### 2. `src/app/globals.css`
- Added date picker indicator CSS after the scrollbar section (after line 216):
  - Light mode: `filter: invert(0.5)`, `opacity: 0.7`, hover `opacity: 1`
  - Dark mode: `filter: invert(1) opacity(0.6)`, hover `filter: invert(1) opacity(0.9)`
  - `cursor: pointer` and smooth transition

## i18n Keys Used
- `events.filterDate`: Already exists — "التاريخ" (Arabic), "Date" (English)

## Verification
- `bun run lint`: 0 errors, 2 pre-existing warnings only
