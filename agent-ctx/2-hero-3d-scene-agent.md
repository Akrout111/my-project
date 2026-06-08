# Task 2 — Hero3DScene Component

## Agent: Frontend Canvas Specialist
## Task: Build Hero3DScene — Interactive Canvas-Based 3D Hero Background

### Work Log:

- Created `/home/z/my-project/src/components/ui/hero-3d-scene.tsx` — a fully self-contained "use client" component
- Implemented all 6 scene elements as specified:

1. **Geometric Hexagonal Grid** — 6×5 perspective-projected hexagonal wireframe with:
   - Y-axis rotation at 0.1 rad/sec
   - Painter's algorithm depth sorting (farthest first)
   - Depth-based brightness: closer hexagons are brighter (8-25% opacity range)
   - Honeycomb offset for odd rows
   - Line width varies with depth (0.5-1.5px)

2. **8-Pointed Star (Rub el Hizb)** — Two overlapping squares rotated 45°:
   - 3 glow layers (outermost at 1.12× scale, 10% alpha; middle at 1.06×, 20% alpha; inner at 1.0×, 30% alpha)
   - Slow rotation (0.05 rad/sec base)
   - Scroll-driven speed multiplier (1.0× to 3.0×)

3. **Gold Particle System** — 100 particles with:
   - Mulberry32 PRNG seeded with 42 (fully deterministic, no Math.random)
   - Upward float with wrap-around
   - Horizontal sine oscillation with individual phase
   - Varying sizes (1-3px), speeds (0.015-0.05), opacity (0.2-0.6)
   - Radial gradient glow (bright gold center → gold → transparent)

4. **Mouse-Following Light** — Radial gradient spotlight:
   - 300px radius
   - Gold color at 8% opacity center, 3% mid, 0% edge
   - Follows mouseX/mouseY props (normalized 0-1)

5. **Scroll-Driven Depth** — Camera zoom effect:
   - Scale increases from 1.0 to 1.5 as scrollProgress goes 0→1
   - Star rotation speed increases proportionally
   - Applied to perspective projection scale factor

6. **Connecting Lines** — Constellation/network effect:
   - 100px connection distance threshold
   - Opacity fades with distance (max 5% at closest)
   - O(n²) pair check with early distance culling

### Technical Implementation:
- `useRef<HTMLCanvasElement>` + `requestAnimationFrame` render loop
- `devicePixelRatio` for Retina display crispness (ResizeObserver for responsive canvas)
- RAF cleanup on unmount via cleanup return function
- `prefers-reduced-motion` support — renders single static frame at time=0
- Props: `scrollProgress`, `mouseX`, `mouseY` — all passed via refs to avoid stale closures
- Canvas styled: `position: absolute; inset: 0; width: 100%; height: 100%`
- `aria-hidden="true"` on canvas element

### Color Constants:
- `GOLD = "oklch(0.76 0.13 85)"` — Primary gold
- `GOLD_BRIGHT = "oklch(0.82 0.14 90)"` — Bright gold for highlights
- `NAVY = "oklch(0.15 0.03 260)"` — Deep navy background

### Verification:
- ESLint: 0 errors, 0 warnings for hero-3d-scene.tsx
- TypeScript: 0 errors (full project tsc --noEmit passes)
- No new lint errors introduced to the project
