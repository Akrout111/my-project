# Task 4-event-card: Golden Particle Hover Video Overlay for EventCard

## Task
Add golden particle hover video overlay to the default/compact variant of the EventCard component.

## Work Log

1. **Read existing event-card.tsx** — Component had no "use client" directive, used TiltCard wrapper, had featured and default/compact variants. Featured variant already had cinematic overlay.

2. **Added "use client" directive** — Required because the component now uses React hooks (useState, useEffect, useRef, useCallback, useSyncExternalStore).

3. **Created `useMediaQuery` hook** — SSR-safe hook using `useSyncExternalStore` to avoid the `react-hooks/set-state-in-effect` lint error. Used for:
   - `(prefers-reduced-motion: reduce)` — disables video when user prefers reduced motion
   - `(hover: none)` — detects touch/mobile devices

4. **Implemented IntersectionObserver for lazy loading** — Video source is only set when the card enters the viewport (200px rootMargin for pre-loading). Before that, no `<video>` element is rendered at all.

5. **Desktop hover behavior** — `onMouseEnter` with 300ms `setTimeout` delay to prevent accidental triggers. `onMouseLeave` clears timeout and deactivates video. Only activates on non-mobile devices (`hover: none` check).

6. **Mobile touch behavior** — `onTouchStart` toggles video on/off. When activated, auto-dismiss timer fires after 3 seconds. The video element has `pointer-events: none` so Link navigation is not blocked.

7. **Video element configuration**:
   - `src="/videos/event-hover-overlay.mp4"` (loaded lazily via IntersectionObserver)
   - `muted`, `loop`, `playsInline`, `preload="none"`
   - `mix-blend-mode: screen` for golden particles blending over dark image areas
   - `opacity-50` when active (0.5 — within the 0.4-0.6 range for subtlety)
   - `opacity-0` when inactive with `transition-opacity duration-500` for smooth crossfade
   - `pointer-events-none` so it doesn't interfere with Link clicks
   - `aria-hidden="true"` for accessibility
   - Positioned absolutely over the image area only (`inset-0 w-full h-full object-cover`)
   - Does NOT cover the text content section

8. **Featured badge z-index** — Added `z-10` to the featured Crown badge so it stays above the video overlay.

9. **Kept ALL existing functionality** — TiltCard wrapper, badges, gradient overlays, price display, etc. all remain unchanged. Featured variant is completely untouched (already has cinematic overlay).

## Technical Details

- **No new dependencies** — all hooks are from React, framer-motion not needed for this implementation
- **Lint clean** — 0 new errors from event-card.tsx (3 pre-existing errors from other files remain)
- **Dev server compiles** — pages return 200 status
- **SSR-safe** — `useSyncExternalStore` with server snapshot fallbacks (`false` for both media queries)

## File Changed
- `/home/z/my-project/src/components/features/events/event-card.tsx` — Complete rewrite with "use client", useMediaQuery hook, hover video overlay logic, and video element
