# Task 3: Build Enhanced Section 3D Backgrounds

## Agent: Frontend 3D Specialist

## Task: Create two new enhanced 3D background components

### Work Log:

#### File 1: `src/components/ui/section-3d-bg.tsx` (589 lines)
- Created `Section3DBg` component with section-specific theming
- **6 shape types**: hexagon, pyramid, star8, cube, ring, diamond
  - **HexagonShape**: 3D prism with 2 hex faces + 6 side faces using clip-path and CSS 3D transforms
  - **PyramidShape**: 4 triangular faces using CSS border trick arranged in 3D
  - **Star8Shape**: 8-pointed Islamic star outline using SVG polygon (front + back face with depth)
  - **CubeShape**: 6-face cube with CSS 3D transforms (same pattern as existing FloatingShapes3D)
  - **RingShape**: Circular rings with depth perspective (rotated on X axis)
  - **DiamondShape**: Rotated square with front/back faces
- **7 section themes**: hero, events, stats, testimonials, cta, categories, footer
  - Each theme has 8-13 deterministic shape configs
  - Different shape type distributions (stats → more hexagons, testimonials → more stars, cta → more rings, categories → more diamonds/cubes)
  - Different density (footer has fewer, smaller, more subtle shapes)
  - Different opacity ranges per theme
- **Constellation connections**: SVG lines between nearby shapes
  - Pre-computed pairs based on shape positions (within 35% distance)
  - Uses SVG `<line>` elements with `preserveAspectRatio="none"` for proper scaling
  - Faint gold color: oklch(0.76 0.13 85 / 4-6%) depending on dark mode
- **Mouse proximity glow**: Shapes within ~200px of cursor respond
  - Proximity factor (0→1) computed via `useTransform` on mouse motion values
  - Scale: 1.0 (far) → 1.2 (within proximity)
  - Box-shadow glow: `oklch(0.76 0.13 85 / 25%)` intensity scales with proximity
  - Opacity boost from proximity
- **Color palette**: Gold oklch(0.76 0.13 85) at varying opacities (5-15%)
  - Dark mode reduces all opacities by 30%
  - Face colors and border colors vary per index for depth
- **Accessibility**: 
  - Respects `prefers-reduced-motion` — static shapes with no animation
  - `aria-hidden="true"` and `role="presentation"`
- **Deterministic**: All configs hardcoded, no Math.random

#### File 2: `src/components/ui/navbar-3d-bg.tsx` (295 lines)
- Created `Navbar3DBg` component with dynamic gradient mesh background
- **When not scrolled**: Transparent (no background rendered)
- **When scrolled**: Shows animated mesh gradient background
  - 4 gradient spots that slowly drift across the navbar (10-20 second cycles)
  - Each spot has 5 keyframe positions for smooth looping animation
  - Spots use Framer Motion `animate` with position keyframes
  - Spots are blurred (40px) radial gradients
- **Dark mode**: Navy base oklch(0.15 0.03 260 / 85%) with gold accent spots oklch(0.76 0.13 85 / 15%)
- **Light mode**: White base oklch(0.995 0.004 85 / 85%) with subtle gold accents
- **Noise texture overlay**: Inline SVG feTurbulence at 3% opacity with mix-blend-mode overlay
- **Glassmorphism**: `backdrop-filter: blur(16px)` + `WebkitBackdropFilter: blur(16px)`
- **AnimatePresence**: Smooth fade in/out when scrolling starts/stops
  - Transition: 0.5s with premium cubic-bezier [0.22, 1, 0.36, 1]
- **Accessibility**: 
  - Respects `prefers-reduced-motion` — spots stay at initial position
  - `aria-hidden="true"` and `role="presentation"`

### Technical Details:
- Both files are "use client" components
- All animations use deterministic values (no Math.random in render)
- SSR-safe with `useSyncExternalStore` for theme and motion preference detection
- Framer Motion used for all animations (consistent with existing codebase)
- TypeScript throughout with strict typing
- Exported types: `SectionTheme`, `Section3DBgProps`, `Navbar3DBgProps`

### Lint: 0 errors, 6 pre-existing warnings only
