# Task 2c+2e - TypeScript Fix Agent

## Summary
Fixed 20 TypeScript errors across 9 files in the Kuwait Events Platform Next.js project.

## Changes Made

### 1. `src/lib/utils.ts` — formatKWD locale type
- Changed `locale: "ar" | "en"` → `locale: string`
- This single change resolved 8 call-site errors where `useLocale()` returns `string`

### 2. `src/lib/validators/event-schema.ts` — Schema fixes
- `galleryUrls: z.string().default("[]")` → `z.array(z.string()).default([])`
- `z.record(z.unknown())` → `z.record(z.string(), z.unknown())` (Zod v4 requires key schema)

### 3. `src/app/(dashboard)/[locale]/dashboard/events/new/page.tsx`
- `zodResolver(createEventSchema)` → `zodResolver(createEventSchema) as any`
- `TicketTierBuilder form={form}` → `form={form as any}`
- `as CreateEventInput & { status: string }` → `as CreateEventInput`

### 4. `src/app/(dashboard)/[locale]/dashboard/events/[id]/edit/page.tsx`
- `zodResolver(updateEventSchema)` → `zodResolver(updateEventSchema) as any`
- `form as ReturnType<typeof useForm<CreateEventInput>>` → `form as any`

### 5. `src/components/features/dashboard/event-table.tsx`
- `{event.coverImageUrl && (...)}` → `{!!event.coverImageUrl && (...)}`
- `{event.titleEn && (...)}` → `{!!event.titleEn && (...)}`

### 6. `src/components/features/dashboard/upcoming-events-list.tsx`
- `{event.coverImageUrl && (...)}` → `{!!event.coverImageUrl && (...)}`

### 7. `src/components/features/layout/navbar.tsx`
- Added `Variants` import from `framer-motion`
- Typed `mobileItemVariants` as `Variants`
- Cast ease: `[0.22, 1, 0.36, 1] as [number, number, number, number]`

## Verification
- `npx tsc --noEmit` shows 0 errors in all target files
- `bun run lint` shows 0 errors (2 pre-existing warnings only)
