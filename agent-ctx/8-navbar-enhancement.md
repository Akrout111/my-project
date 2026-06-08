# Task 8 — Navbar Enhancement Agent

## Task
Enhance the Navbar with scroll morphing, progress indicator, full-screen mobile menu, and magnetic hover effects.

## Summary of Changes

### File Modified
- `src/components/features/layout/navbar.tsx`

### Enhancements Implemented

1. **Scroll Morphing**
   - Added `useState` for `scrolled` (boolean) and `scrollProgress` (number)
   - Added `useEffect` with scroll listener (passive) tracking `window.scrollY > 50` and calculating scroll percentage
   - When scrolled > 50px:
     - Background: `bg-white/70` → `bg-white/90` (dark: `bg-black/50` → `bg-black/80`)
     - Shadow: adds `shadow-sm`
     - Height: `h-18` → `h-16`
   - All transitions use `transition-all duration-500 ease-out`

2. **Progress Indicator**
   - Replaced static gradient accent line with dynamic progress bar
   - Uses `motion.div` with width based on `scrollProgress` (0-100%)
   - Gradient: `from-[oklch(0.55_0.2_270)] to-[oklch(0.65_0.2_330)]`
   - Positioned `absolute top-0 start-0 end-0 h-[2px] z-50`

3. **Full-Screen Mobile Menu**
   - Replaced slide-down `AnimatePresence` with fixed overlay
   - Dark backdrop: `bg-black/60 backdrop-blur-xl`
   - Content vertically centered with `flex flex-col items-center justify-center h-full`
   - Navigation links with larger text (`text-xl font-semibold`) and y-axis stagger (0.1s delay per item)
   - Close button (X icon) positioned at `absolute top-5 end-5`
   - Language switcher, divider, and auth buttons preserved with matching stagger animations

4. **Magnetic Hover on Desktop Nav Links**
   - `AnimatedNavLink` now uses `motion.span` with `whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary-rgb, 139 92 246) / 0.08)" }}`
   - Spring transition: `stiffness: 400, damping: 20`
   - Added `rounded-lg px-3 py-1.5` for visible background highlight area

### Preserved
- `useTranslations("nav")` for i18n
- `Link` from `@/i18n/routing`
- `LanguageSwitcher` component
- Auth buttons (login/register/NavbarUserButton)
- Glassmorphism base style (`backdrop-blur-xl`)
- RTL logical properties (start, end, ms, me)
- No `Math.random()` usage

### Lint
- `bun run lint` passes with 0 errors
