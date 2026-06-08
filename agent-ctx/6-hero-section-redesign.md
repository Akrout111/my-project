# Task 6: Hero Section Redesign — "Majestic Kuwait" Design System

## Summary
Completely rewrote `/home/z/my-project/src/components/features/events/hero-section.tsx` with a professional, world-class design following the "Majestic Kuwait" design system. Also updated CSS utility classes in `globals.css`.

## Changes Made

### hero-section.tsx (Full Rewrite)
**Removed:**
- `MorphOrb` interface and `MORPH_ORBS` configuration (7 morphing orbs)
- `FloatingShape` interface and `FLOATING_SHAPES` configuration (8 floating shapes)
- `mulberry32` PRNG function
- `MagneticButton` component (too flashy)
- `ShapeRenderer` component
- `ParallaxShape` component
- `ParallaxOrb` component
- `perspective-1000` / `preserve-3d` 3D title effects
- `rotateX` and `filter: blur()` from title animations
- Complex multi-gradient background blobs (5 mesh blobs)
- Side accent gradients

**Added/Changed:**
- Kuwait City skyline image (`/images/hero-bg-kuwait.jpg`) as base background
- Dark purple overlay (#170f29 at 72% opacity) over the skyline
- Only 2 subtle mesh gradient blobs (one purple, one gold/amber) — barely visible
- Grid pattern overlay (64px grid, very subtle)
- Noise/grain texture overlay
- Vignette effect (radial gradient, darker edges) for cinematic feel
- Professional animation variants: clean fade-up (no rotateX, no blur)
- Gold gradient title (#e9c349 → #dcc75a) — the ONLY gold element
- Primary CTA: Solid Royal Gold (#e9c349) background with dark text (#3c2f00), gold-glow shadow
- Secondary CTA: Glass outline with white border
- Stats with gold accent numbers and gold icon containers
- `premium-glass` class for glass elements (badge, countdown, stats)
- Mouse parallax reduced from 30-40 to 12/15 (much more subtle)
- Spring config adjusted for smoother, calmer feel (damping: 40, stiffness: 80)
- Scroll parallax content fade preserved
- All text uses `useTranslations("home")` — no hardcoded strings
- Responsive design with mobile-first approach

### globals.css Updates
- Updated `text-gradient-gold`: Changed from `#e9c349, #dcc75a, #af8d11` to `#e9c349, #dcc75a, #e9c349` (softer, more uniform gold)
- Updated `gold-glow`: Changed from distant glow to button-appropriate shadow with hover state
- Existing `premium-glass`, `bg-midnight` classes were already present — no changes needed

## Design Philosophy Applied
- **RESTRAINT** — White space is a feature, not every element needs an effect
- **CLEAR HIERARCHY** — Title is dominant with gold gradient, everything else is supporting
- **PURPOSEFUL ANIMATION** — Only subtle parallax and clean fade-ups
- **PROFESSIONAL TYPOGRAPHY** — Proper sizing with responsive breakpoints
- **SUBTLE EFFECTS** — Gentle mesh blobs instead of 7 morphing orbs
- **REAL IMAGERY** — Kuwait City skyline as hero background

## Verification
- ✅ No lint errors (`bun run lint` passes)
- ✅ No dev server errors (checked dev.log)
- ✅ Component interface unchanged — compatible with existing page.tsx usage
- ✅ All translation keys preserved
- ✅ All required imports maintained
