# Task 4-a: EventCard Premium Rewrite

## Agent: Event Card Design Agent

## Work Done:
- Read existing event-card.tsx (basic design with `<img>`, `next/link`, no TiltCard wrapper)
- Read TiltCard component API (className, tiltAmount, glowColor props)
- Read premium design system globals.css (gradient-text, glass-card, glow-gold, border-gold classes)
- Read i18n routing (Link named export from @/i18n/routing)
- Read consuming components (featured-events-grid, browse-events-client, category-page-client, venue-page-client) for compatibility check
- Completely rewrote `/src/components/features/events/event-card.tsx` with premium design:

### Featured Variant:
- TiltCard wrapper with tiltAmount={8} for 3D hover tilt + gold glow
- next/image with fill + object-cover for performance
- Cinematic gradient overlay (from-black/80 via-black/30 to-black/5) that lightens on hover
- Category badge at top-start with bg-primary (gold) styling
- Featured crown badge at top-end with glass background (bg-black/40 backdrop-blur-sm)
- Title at bottom with white text (text-lg → text-xl responsive)
- Date and venue in white/80 text with Calendar and MapPin icons
- Time with Clock icon on the left
- Price in gradient-text (gold gradient) at bottom-end, large and bold
- Gold border on hover (border-primary/40 transition)
- Image zooms to scale-110 on hover (duration-500)
- Overlay lightens on hover (duration-500)

### Default/Compact Variant:
- TiltCard wrapper with tiltAmount={8} (compact: 5)
- Rounded-xl with overflow-hidden
- next/image with fill + object-cover, aspect-[16/10]
- Subtle gradient at bottom of image for smooth transition to card content
- Featured "مميز" badge with Crown icon in gold (bg-primary) at top-start
- Content section with:
  - Category badge (secondary variant)
  - Title (font-semibold, line-clamp-2, compact: text-sm, default: text-base)
  - Date/time with Calendar + Clock icons, pipe separator
  - Venue with MapPin icon (truncate for long names)
  - Bottom section with border-t, price in gradient-text, remaining tickets with Users icon
- Hover: lift up (-translate-y-1) with shadow-xl + primary/5 shadow, gold border accent (border-primary/30)
- Icons in muted-foreground with primary/70 tint for visual hierarchy

### General:
- No "use client" directive (TiltCard is already client component)
- Link from @/i18n/routing (named import, NOT default)
- Proper focus-visible ring styles for keyboard accessibility
- RTL support with logical CSS properties (start-, end-)
- All images use next/image with fill + object-cover + sizes prop
- Smooth transitions: duration-500 for image upscale, duration-300 for shadows/borders
- Gold accents: price in gradient-text, featured badge in bg-primary, gold borders on hover
- ESLint passes with 0 errors
