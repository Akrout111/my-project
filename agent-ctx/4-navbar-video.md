# Task 4-navbar-video: Integrate nav-scroll-bg.mp4 Video into Navbar

## Task Summary
Added a subtle video background that plays behind the navbar when scrolled, using `/videos/nav-scroll-bg.mp4`.

## Changes Made

### File: `/src/components/features/layout/navbar.tsx`

**1. Added `useRef` import**
- Changed: `import { useState, useEffect, useCallback, useSyncExternalStore }` → added `useRef`

**2. Added state and refs inside Navbar component**
- `isVisible` state (`useState(true)`) — tracks whether navbar is in viewport via IntersectionObserver
- `videoRef` (`useRef<HTMLVideoElement>(null)`) — ref for the video element to control play/pause
- `headerRef` (`useRef<HTMLElement>(null)`) — ref for the header element for IntersectionObserver

**3. Added `prefersReducedMotion` detection via `useSyncExternalStore`**
- Subscribes to `window.matchMedia("(prefers-reduced-motion: reduce)")`
- Server snapshot returns `false` (SSR safe)
- When reduced motion is preferred, video is not rendered at all

**4. Added IntersectionObserver effect**
- Observes the `headerRef` element
- Updates `isVisible` state based on intersection
- Only plays video when navbar is visible in viewport

**5. Added play/pause control effect**
- Depends on `[scrolled, isVisible, prefersReducedMotion]`
- Plays video when `scrolled && isVisible` (and not reduced motion)
- Pauses video otherwise
- Uses `video.play().catch(() => {})` for safe promise handling

**6. Added `ref={headerRef}` to the `<header>` element**

**7. Added video element with AnimatePresence**
- `motion.video` with `key="nav-scroll-bg"` for AnimatePresence tracking
- `src="/videos/nav-scroll-bg.mp4"` — uses the 855KB, 8s loop video
- `muted`, `loop`, `playsInline` — autoplay-compatible attributes
- `preload="metadata"` — lazy loading, only loads metadata initially
- `initial={{ opacity: 0 }}` → `animate={{ opacity: 0.15 }}` → `exit={{ opacity: 0 }}` — smooth fade in/out
- `transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}` — premium easing curve
- `className="absolute inset-0 h-full w-full object-cover mix-blend-overlay pointer-events-none"`
  - `absolute inset-0` — fills entire header
  - `mix-blend-overlay` — blends with glass morphism background
  - `pointer-events-none` — does NOT block pointer events
  - `object-cover` — covers the header area
- Conditional rendering: `scrolled && !prefersReducedMotion`
  - Video only visible when scrolled past 50px AND no reduced motion preference

**8. Added `relative z-10` to container div**
- Ensures navbar content (logo, links, buttons) stays above the video layer

## Requirements Verification
- ✅ Video only visible when `scrolled === true` (AnimatePresence fade in/out)
- ✅ Video is subtle: muted, loop, playsInline, opacity 0.15
- ✅ `mix-blend-mode: overlay` for blending with glass morphism
- ✅ Lazy loaded with `preload="metadata"`, pauses when not scrolled
- ✅ IntersectionObserver pattern — only plays when visible
- ✅ `prefers-reduced-motion` media query — no video when reduced motion preferred
- ✅ Video does NOT block pointer events (`pointer-events-none`)
- ✅ Existing glass morphism styling preserved (`bg-background/70 backdrop-blur-xl`)
- ✅ RTL-compatible (no directional CSS, `inset-0` is direction-agnostic)
- ✅ No new dependencies (uses existing framer-motion, React APIs)
- ✅ ESLint passes with 0 new errors for navbar.tsx
