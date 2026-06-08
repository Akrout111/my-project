# Task A2 & A5: Locale-aware event detail cards + breadcrumb fixes

## Summary
Made all content in `src/components/features/events/event-detail-client.tsx` locale-aware using `useLocale()` from next-intl.

## Changes Made (single file)
- **Props interface**: Added `nameEn?: string | null` to venue type (main + relatedEvents)
- **Import**: Added `ChevronRight` from lucide-react
- **Breadcrumb**: 3 separators now use `ChevronLeft` (Arabic/RTL) vs `ChevronRight` (English/LTR)
- **Breadcrumb category**: `event.category.nameAr` → locale-aware with `nameEn` fallback
- **Breadcrumb event name**: `event.titleAr` → locale-aware with `titleEn` fallback
- **Category badge**: `event.category?.nameAr` → locale-aware
- **Title**: `event.titleAr` → locale-aware
- **Subtitle**: Shows OTHER language (Arabic locale→English subtitle, English locale→Arabic subtitle)
- **Quick info pills venue**: Locale-aware name + comma (Arabic `،` vs English `, `)
- **Description**: `event.descriptionAr` → locale-aware with `descriptionEn` fallback
- **Venue card name**: Locale-aware with `nameEn` fallback
- **Venue card address**: Locale-aware comma separator

## Pattern Used
```tsx
{locale === "ar" ? fieldAr : (fieldEn || fieldAr)}
{locale === "ar" ? "، " : ", "}
{locale === "ar" ? <ChevronLeft /> : <ChevronRight />}
```

## Lint: 0 errors, 2 pre-existing warnings
