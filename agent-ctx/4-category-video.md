# Task 4-category-video: Integrate category-bg.mp4 video into Category Carousel

## Work Summary

Replaced the simple gradient background (`bg-gradient-to-b from-primary/5 to-transparent`) in the Category Carousel section with a `ParallaxVideo` background using `/videos/category-bg.mp4`.

## Changes Made

### File: `/src/components/features/events/category-carousel.tsx`

1. **Added import**: `ParallaxVideo` from `@/components/ui/parallax-video`

2. **Replaced section background**: 
   - Before: `<section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">`
   - After: `<section className="relative">` wrapping a `ParallaxVideo` component

3. **ParallaxVideo props** (all as specified):
   - `src="/videos/category-bg.mp4"`
   - `overlayOpacity={0.75}` (dark enough for text readability)
   - `tiltEffect={false}` (subtle, no tilt for categories)
   - `lightEffect={true}` (cursor-following light spot)
   - `scrollParallax={true}` (scroll-based parallax depth)
   - `preload="metadata"` (below fold, lazy load)
   - `blendMode="multiply"` (blend with content)

4. **Added gradient overlay**: `bg-gradient-to-b from-background/90 via-background/70 to-background` on top of ParallaxVideo for text readability

5. **Preserved all existing functionality**:
   - Gold gradient title using `gradient-text` class
   - Embla carousel with loop, drag-free, snap scrolling
   - Desktop circular gold navigation arrows
   - Mobile dots indicator
   - TiltCard wrappers on category cards
   - Fallback emoji system
   - RTL-compatible (logical CSS properties maintained)
   - AnimatedSection wrappers

## Verification

- ESLint: No new errors introduced (pre-existing warning about unused eslint-disable directive remains)
- Both `/ar` and `/en` routes return HTTP 200
- Dev server compiles cleanly
