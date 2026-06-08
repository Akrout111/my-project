# Task 6 — Fix StatsBentoGrid, TestimonialsSection, Homepage Integration, Shared AnimatedCounter

## Work Done

### 1. StatsBentoGrid — hex → oklch + shared AnimatedCounter + easing fix
- Replaced ALL hex colors with oklch equivalents:
  - `#e9c349` → `oklch(0.76 0.13 85)`
  - `#dcc75a` → `oklch(0.82 0.14 90)`
  - `#eaddff` → `oklch(0.9 0.03 300)` (via inline style)
  - `#170f29` → `oklch(0.15 0.03 260)`
  - `rgba(233,195,73,0.15)` → `oklch(0.76 0.13 85 / 15%)`
  - `rgba(233,195,73,0.25)` → `oklch(0.76 0.13 85 / 25%)`
  - `rgba(45,27,105,0.6)` → `oklch(0.25 0.06 300 / 60%)`
  - `rgba(203,190,255,0.12)` → `oklch(0.8 0.05 300 / 12%)`
  - `rgba(45,27,105,0.1)` → `oklch(0.25 0.06 300 / 10%)`
  - `rgba(46,37,65,0.2)` → `oklch(0.2 0.03 300 / 20%)`
  - `#1e1535` → `oklch(0.17 0.035 280)` (intermediate navy)
  - `rgba(255,255,255,0.06)` → `oklch(1 0 0 / 6%)`
- Removed local `useAnimatedCounter` hook and `AnimatedCounter` component
- Imported shared `AnimatedCounter` from `@/components/ui/animated-counter`
- Updated StatCard usage: `<AnimatedCounter target={config.value as number} />`
- Replaced custom easing `[0.25, 0.46, 0.45, 0.94]` with `[0.22, 1, 0.36, 1]` (CUBIC_PREMIUM)
- Removed unused `useEffect`, `useState` imports

### 2. TestimonialsSection — hex → oklch + easing fix + CSS class verification
- Replaced ALL hex colors with oklch equivalents:
  - `#e9c349` → `oklch(0.76 0.13 85)` (via inline style for Tailwind bracket compatibility)
  - `#dcc75a` → `oklch(0.82 0.14 90)`
  - `#231b36` → `oklch(0.19 0.035 260)`
  - `#eaddff` → `oklch(0.9 0.03 300)`
  - `#170f29` → `oklch(0.15 0.03 260)`
  - `#3c2f00` → `oklch(0.25 0.05 85)`
  - `rgba(233,195,73,0.12)` → `oklch(0.76 0.13 85 / 12%)`
  - `rgba(233,195,73,0.2)` → `oklch(0.76 0.13 85 / 20%)`
  - `rgba(45,27,105,0.45)` → `oklch(0.25 0.06 300 / 45%)`
  - `rgba(233,195,73,0.15)` → `oklch(0.76 0.13 85 / 15%)`
- Replaced `[0.25, 0.46, 0.45, 0.94]` with `[0.22, 1, 0.36, 1]` in all variant definitions
- Verified `premium-glass`, `text-gradient-gold`, `animate-mesh-move` classes are correctly used
- Verified `testimonialsTitle` and `testimonialsSubtitle` keys are used from `home.*` namespace
- Restructured TestimonialCard: moved card background to a separate absolute-positioned div (since className cannot contain both motion style and static bg)
- Replaced Tailwind bracket hex classes (`text-[#e9c349]`, `fill-[#e9c349]`, `bg-[#231b36]`, `text-[#eaddff]`, `text-[#eaddff]/85`, `text-[#eaddff]/50`) with inline styles using oklch

### 3. Homepage Integration
- Imported `StatsBentoGrid` from `@/components/features/home/stats-bento-grid`
- Imported `TestimonialsSection` from `@/components/features/home/testimonials-section`
- Added `ticketCount` query: `await db.ticketTier.aggregate({ _sum: { quantityTotal: true } })` with `ticketCount = ticketAgg._sum.quantityTotal ?? 0`
- Moved `venuesCount` into `Promise.all` to fix waterfall query
- Added `featuredCount` query inside `Promise.all`
- New section order: HeroSection → FeaturedEventsGrid → StatsBentoGrid → TestimonialsSection → CTATrustSection → CategoryCarousel
- Passes all required props to StatsBentoGrid (eventCount, categoryCount, venueCount, ticketCount, featuredCount)

### 4. Hero Section & CTA Section — Shared AnimatedCounter
- hero-section.tsx: Removed local `AnimatedCounter` function and `useEffect`, `useState`, `useInView` imports; imported shared `AnimatedCounter` from `@/components/ui/animated-counter`
- cta-trust-section.tsx: Same changes — removed local AnimatedCounter, imported shared one
- Both files now use `<AnimatedCounter target={value} />` API consistently

### Verification
- ESLint: 0 errors, 6 warnings (all pre-existing)
- /ar returns 200, /en returns 200
- All sections render: "الكويت بالأرقام", "آراء العملاء", "تذاكر متاحة", "فعاليات مميزة"
- English sections render: "Kuwait in Numbers", "What People Say", "Tickets Available", "Featured Events"
