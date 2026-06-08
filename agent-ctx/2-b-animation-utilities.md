---
Task ID: 2-b
Agent: Animation Utilities Agent
Task: Create premium animation utility components

Work Log:
- Created `/src/components/ui/animated-section.tsx`: Scroll-triggered reveal animation using Framer Motion's useInView with once:true, margin:"-100px". Supports directional animations (up/down/left/right/none) with configurable delay. Uses custom cubic bezier [0.22, 1, 0.36, 1] for premium feel. Offsets: 40px vertical, 60px horizontal. Duration: 0.6s.
- Created `/src/components/ui/stagger-children.tsx`: Staggered child animation container using Framer Motion's staggerChildren. Each child automatically wrapped in motion.div with fade+slide-up. Configurable staggerDelay (default 0.1) and delay (default 0). Uses whileInView with once:true.
- Created `/src/components/ui/parallax-video.tsx`: Video background with mouse-tracking parallax. AutoPlay/loop/muted/playsInline video element. Dark overlay with configurable opacity (default 0.4). Video scaled 1.1x to allow parallax movement. Smooth transform transitions. Gradient fallback when video fails to load.
- Created `/src/components/ui/magnetic-button.tsx`: Button that subtly follows cursor on hover. Configurable strength (default 0.3). Max 8px displacement clamped. Spring-back animation on mouse leave (spring stiffness:350, damping:15). Supports asChild pattern via Radix Slot.
- Created `/src/components/ui/tilt-card.tsx`: Card with 3D tilt effect on hover. Configurable tiltAmount (default 10 degrees). Gold glow effect that follows cursor position (default rgba(201,168,76,0.15)). Uses CSS perspective + rotateX/rotateY. Smooth spring animation on enter/leave.
- All 5 components are "use client" as required
- ESLint passes with 0 errors (only pre-existing warnings from other files)

Stage Summary:
- ✅ animated-section.tsx - scroll-triggered reveal with direction support
- ✅ stagger-children.tsx - staggered children animation container
- ✅ parallax-video.tsx - video with parallax mouse tracking + fallback
- ✅ magnetic-button.tsx - cursor-following magnetic button effect
- ✅ tilt-card.tsx - 3D tilt card with cursor-tracking glow
