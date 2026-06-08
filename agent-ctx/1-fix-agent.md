# Task ID: 1 — Fix Agent

## Task
Fix missing CSS classes, RTL issue, and create shared components/hooks

## Work Completed

### 1. globals.css — Added missing CSS classes and keyframes
- `.text-gradient-gold` — Gold gradient text alias
- `.premium-glass` — Darker glassmorphism variant
- `@keyframes morph-blob` + `.animate-morph-blob`
- `@keyframes mesh-move` + `.animate-mesh-move`

### 2. globals.css — Fixed RTL issue
- Changed `left: 0` to `inset-inline-start: 0` in `.gold-underline::after`

### 3. Created AnimatedCounter component
- `/src/components/ui/animated-counter.tsx`
- requestAnimationFrame + ease-out cubic + scroll-triggered via Framer Motion useInView

### 4. Created useReducedMotion hook
- `/src/hooks/use-reduced-motion.ts`
- SSR-safe via useSyncExternalStore

### 5. Created useMediaQuery hook
- `/src/hooks/use-media-query.ts`
- SSR-safe via useSyncExternalStore with useCallback

## Verification
- ESLint: 0 errors
- Dev server: compiles cleanly
