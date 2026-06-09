// ██╗███╗   ██╗███████╗████████╗ █████╗ ██╗     ██╗███████╗██████╗ ███████╗
// ██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║     ██║██╔════╝██╔══██╗██╔════╝
// ██║██╔██╗ ██║███████╗   ██║   ███████║██║     ██║█████╗  ██║  ██║█████╗  
// ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║     ██║██╔══╝  ██║  ██║██╔══╝  
// ██║██║ ╚████║███████║   ██║   ██║  ██║███████╗██║███████╗██████╔╝███████╗
// ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝╚═════╝ ╚══════╝
//
// KUWAIT EVENTS PLATFORM — MERGED UI/UX DESIGN ANALYSIS FILE
// This file is for ANALYSIS ONLY and will NOT be compiled.
// Generated from the complete project source code.
//

// ██████████████████████████████████████████████████████████████
// ██  Section 1: GLOBAL STYLES & CONFIG
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/globals.css
// ═══════════════════════════════════════════════════════════════
const _globals_css = `
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-noto-arabic), var(--font-geist-sans), sans-serif;
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

/* ──────────────────────────────────────────────
   PREMIUM DESIGN SYSTEM — Kuwait Events Platform
   Gold & Navy luxury palette
   ────────────────────────────────────────────── */

:root {
  --radius: 0.625rem;

  /* Core palette — light mode: warm whites + gold + navy text */
  --background: oklch(0.995 0.004 85);
  --foreground: oklch(0.15 0.03 260);

  --card: oklch(1 0.003 85);
  --card-foreground: oklch(0.15 0.03 260);

  --popover: oklch(1 0.003 85);
  --popover-foreground: oklch(0.15 0.03 260);

  --primary: oklch(0.76 0.13 85);
  --primary-foreground: oklch(0.15 0.03 260);

  --secondary: oklch(0.955 0.012 85);
  --secondary-foreground: oklch(0.2 0.03 260);

  --muted: oklch(0.955 0.012 85);
  --muted-foreground: oklch(0.5 0.02 260);

  --accent: oklch(0.93 0.05 85);
  --accent-foreground: oklch(0.2 0.03 260);

  --destructive: oklch(0.577 0.245 27.325);

  --border: oklch(0.92 0.01 85);
  --input: oklch(0.92 0.01 85);
  --ring: oklch(0.76 0.13 85);

  /* Chart palette — warm gold-to-navy spectrum */
  --chart-1: oklch(0.76 0.13 85);
  --chart-2: oklch(0.68 0.10 65);
  --chart-3: oklch(0.55 0.08 45);
  --chart-4: oklch(0.42 0.06 260);
  --chart-5: oklch(0.25 0.04 260);

  /* Sidebar — light mode */
  --sidebar: oklch(0.98 0.006 85);
  --sidebar-foreground: oklch(0.15 0.03 260);
  --sidebar-primary: oklch(0.76 0.13 85);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.93 0.05 85);
  --sidebar-accent-foreground: oklch(0.2 0.03 260);
  --sidebar-border: oklch(0.92 0.01 85);
  --sidebar-ring: oklch(0.76 0.13 85);
}

.dark {
  /* Core palette — dark mode: deep navy + gold accents */
  --background: oklch(0.15 0.03 260);
  --foreground: oklch(0.955 0.01 85);

  --card: oklch(0.19 0.035 260);
  --card-foreground: oklch(0.955 0.01 85);

  --popover: oklch(0.19 0.035 260);
  --popover-foreground: oklch(0.955 0.01 85);

  --primary: oklch(0.76 0.13 85);
  --primary-foreground: oklch(0.15 0.03 260);

  --secondary: oklch(0.25 0.035 260);
  --secondary-foreground: oklch(0.955 0.01 85);

  --muted: oklch(0.25 0.035 260);
  --muted-foreground: oklch(0.65 0.04 85);

  --accent: oklch(0.25 0.05 260);
  --accent-foreground: oklch(0.955 0.01 85);

  --destructive: oklch(0.704 0.191 22.216);

  --border: oklch(1 0.02 260 / 10%);
  --input: oklch(1 0.02 260 / 15%);
  --ring: oklch(0.76 0.13 85);

  /* Chart palette — gold-dominant dark theme */
  --chart-1: oklch(0.76 0.13 85);
  --chart-2: oklch(0.72 0.11 65);
  --chart-3: oklch(0.65 0.09 45);
  --chart-4: oklch(0.60 0.16 300);
  --chart-5: oklch(0.55 0.20 25);

  /* Sidebar — dark mode */
  --sidebar: oklch(0.17 0.035 260);
  --sidebar-foreground: oklch(0.955 0.01 85);
  --sidebar-primary: oklch(0.76 0.13 85);
  --sidebar-primary-foreground: oklch(0.15 0.03 260);
  --sidebar-accent: oklch(0.25 0.05 260);
  --sidebar-accent-foreground: oklch(0.955 0.01 85);
  --sidebar-border: oklch(1 0.02 260 / 10%);
  --sidebar-ring: oklch(0.76 0.13 85);
}

/* ──────────────────────────────────────────────
   Base layer — borders, body, font smoothing
   ────────────────────────────────────────────── */

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    @apply bg-background text-foreground;
  }

  /* Selection — gold highlight with navy text */
  ::selection {
    background-color: oklch(0.76 0.13 85 / 35%);
    color: oklch(0.15 0.03 260);
  }

  .dark ::selection {
    background-color: oklch(0.76 0.13 85 / 40%);
    color: oklch(0.99 0.004 85);
  }
}

/* ──────────────────────────────────────────────
   Custom scrollbar — thin, gold accent
   ────────────────────────────────────────────── */

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: oklch(0.76 0.13 85 / 30%);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: oklch(0.76 0.13 85 / 55%);
}

.dark ::-webkit-scrollbar-thumb {
  background: oklch(0.76 0.13 85 / 25%);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.76 0.13 85 / 45%);
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: oklch(0.76 0.13 85 / 30%) transparent;
}

.dark * {
  scrollbar-color: oklch(0.76 0.13 85 / 25%) transparent;
}

/* ──────────────────────────────────────────────
   Date picker — dark theme calendar indicator
   ────────────────────────────────────────────── */

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

.dark input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1) opacity(0.6);
}

.dark input[type="date"]::-webkit-calendar-picker-indicator:hover {
  filter: invert(1) opacity(0.9);
}

/* ──────────────────────────────────────────────
   .gradient-text — Gold gradient text effect
   ────────────────────────────────────────────── */

.gradient-text {
  background: linear-gradient(
    135deg,
    oklch(0.82 0.14 90) 0%,
    oklch(0.76 0.13 85) 30%,
    oklch(0.70 0.11 75) 60%,
    oklch(0.76 0.13 85) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* ──────────────────────────────────────────────
   .glass-card — Glassmorphism card style
   ────────────────────────────────────────────── */

.glass-card {
  background: oklch(1 0.003 85 / 70%);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid oklch(0.76 0.13 85 / 15%);
  border-radius: var(--radius-lg);
  box-shadow:
    0 4px 24px oklch(0.15 0.03 260 / 6%),
    0 1px 2px oklch(0.15 0.03 260 / 4%);
}

.dark .glass-card {
  background: oklch(0.19 0.035 260 / 60%);
  border: 1px solid oklch(0.76 0.13 85 / 12%);
  box-shadow:
    0 4px 24px oklch(0 0 0 / 20%),
    0 1px 2px oklch(0.76 0.13 85 / 5%);
}

/* ──────────────────────────────────────────────
   .glow-gold — Subtle gold glow / shadow
   ────────────────────────────────────────────── */

.glow-gold {
  box-shadow:
    0 0 20px oklch(0.76 0.13 85 / 15%),
    0 0 40px oklch(0.76 0.13 85 / 8%),
    0 4px 16px oklch(0.15 0.03 260 / 8%);
}

.dark .glow-gold {
  box-shadow:
    0 0 20px oklch(0.76 0.13 85 / 20%),
    0 0 40px oklch(0.76 0.13 85 / 10%),
    0 4px 16px oklch(0 0 0 / 30%);
}

/* Intense variant for hero elements */
.glow-gold-lg {
  box-shadow:
    0 0 30px oklch(0.76 0.13 85 / 25%),
    0 0 60px oklch(0.76 0.13 85 / 12%),
    0 0 100px oklch(0.76 0.13 85 / 6%),
    0 8px 32px oklch(0.15 0.03 260 / 10%);
}

.dark .glow-gold-lg {
  box-shadow:
    0 0 30px oklch(0.76 0.13 85 / 30%),
    0 0 60px oklch(0.76 0.13 85 / 15%),
    0 0 100px oklch(0.76 0.13 85 / 8%),
    0 8px 32px oklch(0 0 0 / 40%);
}

/* ──────────────────────────────────────────────
   .shimmer — Shimmer / loading animation
   ────────────────────────────────────────────── */

.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    oklch(0.76 0.13 85 / 8%) 40%,
    oklch(0.76 0.13 85 / 18%) 50%,
    oklch(0.76 0.13 85 / 8%) 60%,
    transparent 100%
  );
  animation: shimmer-slide 2s ease-in-out infinite;
  pointer-events: none;
}

.dark .shimmer::after {
  background: linear-gradient(
    90deg,
    transparent 0%,
    oklch(0.76 0.13 85 / 5%) 40%,
    oklch(0.76 0.13 85 / 12%) 50%,
    oklch(0.76 0.13 85 / 5%) 60%,
    transparent 100%
  );
}

[dir="rtl"] .shimmer::after {
  animation-name: shimmer-slide-rtl;
}

@keyframes shimmer-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes shimmer-slide-rtl {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* ──────────────────────────────────────────────
   Utility — gold border accent
   ────────────────────────────────────────────── */

.border-gold {
  border-color: oklch(0.76 0.13 85 / 40%);
}

.dark .border-gold {
  border-color: oklch(0.76 0.13 85 / 30%);
}

/* ──────────────────────────────────────────────
   Utility — gold bottom line accent
   ────────────────────────────────────────────── */

.gold-underline {
  position: relative;
}

.gold-underline::after {
  content: "";
  position: absolute;
  bottom: -2px;
  inset-inline-start: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    oklch(0.76 0.13 85),
    oklch(0.82 0.14 90),
    oklch(0.76 0.13 85)
  );
  border-radius: 1px;
}

/* ──────────────────────────────────────────────
   Utility — gold gradient text (alias for contexts)
   ────────────────────────────────────────────── */

.text-gradient-gold {
  background: linear-gradient(
    135deg,
    oklch(0.82 0.14 90) 0%,
    oklch(0.76 0.13 85) 30%,
    oklch(0.70 0.11 75) 60%,
    oklch(0.76 0.13 85) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* ──────────────────────────────────────────────
   Premium Glass — darker glass variant
   ────────────────────────────────────────────── */

.premium-glass {
  background: oklch(0.19 0.035 260 / 50%);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid oklch(1 0.02 260 / 10%);
  border-radius: var(--radius-lg);
}

.dark .premium-glass {
  background: oklch(0.15 0.03 260 / 60%);
  border: 1px solid oklch(1 0.02 260 / 8%);
}

/* ──────────────────────────────────────────────
   Animations — mesh blob morph & mesh move
   ────────────────────────────────────────────── */

@keyframes morph-blob {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
  }
  75% {
    border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%;
  }
}

@keyframes mesh-move {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(20px, 40px) scale(1.05);
  }
}

.animate-morph-blob {
  animation: morph-blob 8s ease-in-out infinite;
}

.animate-mesh-move {
  animation: mesh-move 20s ease-in-out infinite;
}

/* ──────────────────────────────────────────────
   Gold focus rings for accessibility
   ────────────────────────────────────────────── */

.focus-gold {
  outline: none;
}

.focus-gold:focus-visible {
  outline: 2px solid oklch(0.76 0.13 85);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px oklch(0.76 0.13 85 / 20%);
}

/* ──────────────────────────────────────────────
   Global focus-visible — gold ring for all interactive elements
   ────────────────────────────────────────────── */

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid oklch(0.76 0.13 85);
  outline-offset: 2px;
  border-radius: 4px;
  box-shadow: 0 0 0 4px oklch(0.76 0.13 85 / 15%);
}

/* ──────────────────────────────────────────────
   Custom scrollbar — dark theme enhanced
   ────────────────────────────────────────────── */

.dark ::-webkit-scrollbar-track {
  background: oklch(0.12 0.02 260 / 50%);
}

.dark ::-webkit-scrollbar-corner {
  background: transparent;
}

/* ──────────────────────────────────────────────
   Skeleton shimmer — dark glassmorphic
   ────────────────────────────────────────────── */

.skeleton-shimmer {
  background: oklch(0.19 0.035 260 / 60%);
  border: 1px solid oklch(1 0.02 260 / 6%);
  position: relative;
  overflow: hidden;
}

.skeleton-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    oklch(0.76 0.13 85 / 4%) 40%,
    oklch(0.76 0.13 85 / 10%) 50%,
    oklch(0.76 0.13 85 / 4%) 60%,
    transparent 100%
  );
  animation: shimmer-slide 2s ease-in-out infinite;
  pointer-events: none;
}

[dir="rtl"] .skeleton-shimmer::after {
  animation-name: shimmer-slide-rtl;
}

/* ──────────────────────────────────────────────
   Button shine effect — gold sweep on hover
   ────────────────────────────────────────────── */

.btn-shine {
  position: relative;
  overflow: hidden;
}

.btn-shine::after {
  content: "";
  position: absolute;
  top: 0;
  inset-inline-start: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    oklch(1 0 0 / 15%),
    transparent
  );
  transition: none;
  pointer-events: none;
}

.btn-shine:hover::after {
  animation: btn-shine-sweep 0.6s ease-out;
}

@keyframes btn-shine-sweep {
  0% {
    inset-inline-start: -100%;
  }
  100% {
    inset-inline-start: 200%;
  }
}

/* ──────────────────────────────────────────────
   Button press effect — subtle scale down
   ────────────────────────────────────────────── */

.btn-press:active {
  transform: scale(0.97);
}

/* ──────────────────────────────────────────────
   Touch targets — minimum 44px for mobile
   ────────────────────────────────────────────── */

.touch-target {
  min-width: 44px;
  min-height: 44px;
}

/* ──────────────────────────────────────────────
   Skip to content — accessibility link
   ────────────────────────────────────────────── */

.skip-to-content {
  position: absolute;
  top: -100%;
  inset-inline-start: 0;
  z-index: 9999;
  padding: 0.5rem 1rem;
  background: oklch(0.76 0.13 85);
  color: oklch(0.15 0.03 260);
  font-weight: 700;
  border-radius: 0 0 0.5rem 0;
  transition: top 0.2s ease;
}

.skip-to-content:focus {
  top: 0;
}

/* ──────────────────────────────────────────────
   Price typography — gold with subtle glow
   ────────────────────────────────────────────── */

.price-gold {
  color: oklch(0.76 0.13 85);
  text-shadow: 0 0 12px oklch(0.76 0.13 85 / 25%);
  font-variant-numeric: tabular-nums;
}

.dark .price-gold {
  text-shadow: 0 0 16px oklch(0.76 0.13 85 / 35%);
}

/* ──────────────────────────────────────────────
   Featured shimmer border — animated gold border
   ────────────────────────────────────────────── */

.featured-shimmer-border {
  position: relative;
}

.featured-shimmer-border::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    var(--shimmer-angle, 135deg),
    oklch(0.76 0.13 85 / 0%) 0%,
    oklch(0.76 0.13 85 / 50%) 25%,
    oklch(0.82 0.14 90 / 60%) 50%,
    oklch(0.76 0.13 85 / 50%) 75%,
    oklch(0.76 0.13 85 / 0%) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: shimmer-border-rotate 4s linear infinite;
  pointer-events: none;
}

@keyframes shimmer-border-rotate {
  0% { --shimmer-angle: 0deg; }
  100% { --shimmer-angle: 360deg; }
}

@property --shimmer-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

`;

// ═══════════════════════════════════════════════════════════════
// FILE: tailwind.config.ts
// ═══════════════════════════════════════════════════════════════
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/fonts.ts
// ═══════════════════════════════════════════════════════════════
import { Noto_Sans_Arabic } from "next/font/google";

/**
 * Shared font configuration for the Kuwait Events Platform.
 * Used by both main and dashboard locale layouts.
 */
export const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/constants.ts
// ═══════════════════════════════════════════════════════════════
// App constants for Kuwait Events Platform

export const ROLES = {
  ATTENDEE: "ATTENDEE",
  ORGANIZER: "ORGANIZER",
  ADMIN: "ADMIN",
} as const;

export const EVENT_STATUSES = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  CANCELLED: "CANCELLED",
  SOLD_OUT: "SOLD_OUT",
  COMPLETED: "COMPLETED",
} as const;

export const BOOKING_STATUSES = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
  REFUNDED: "REFUNDED",
} as const;

export const PAYMENT_STATUSES = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED",
} as const;

export const TICKET_TYPES = {
  STANDARD: "STANDARD",
  VIP: "VIP",
  EARLY_BIRD: "EARLY_BIRD",
  GROUP: "GROUP",
} as const;

export const CURRENCY = {
  code: "KWD",
  nameAr: "دينار كويتي",
  nameEn: "Kuwaiti Dinar",
  symbolAr: "د.ك",
  decimals: 3,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const BOOKING_EXPIRY_MINUTES = 15;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/utils.ts
// ═══════════════════════════════════════════════════════════════
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as KWD currency
 * KWD has 3 decimal places (e.g., 12.500 KWD)
 */
export function formatKWD(
  amount: number | string,
  locale: string = "en"
) {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  const formatter = new Intl.NumberFormat(
    locale === "ar" ? "ar-KW" : "en-KW",
    {
      style: "currency",
      currency: "KWD",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }
  );
  return formatter.format(value);
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/format-number.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Localized number and date formatting utilities
 * Supports Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) for Arabic locale
 */

/**
 * Format a number using locale-appropriate numerals
 * Arabic locale: ٠١٢٣٤٥٦٧٨٩
 * English locale: 0123456789
 */
export function formatLocalizedNumber(value: number, locale: string): string {
  if (locale === "ar") {
    return new Intl.NumberFormat("ar-KW", {
      maximumFractionDigits: 0,
      useGrouping: true,
    }).format(value);
  }
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(value);
}

/**
 * Format a price value with currency
 * Uses KWD currency for both locales
 */
export function formatPrice(value: number | string, locale: string): string {
  const numValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numValue)) return locale === "ar" ? "٠ د.ك" : "0 KWD";

  if (locale === "ar") {
    return new Intl.NumberFormat("ar-KW", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(numValue) + " د.ك";
  }
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
    style: "currency",
    currency: "KWD",
  }).format(numValue);
}

/**
 * Format a date in the appropriate locale
 * Arabic: ١٥ مارس ٢٠٢٥
 * English: March 15, 2025
 */
export function formatLocalizedDate(
  date: Date | string,
  locale: string
): string {
  const d = typeof date === "string" ? new Date(date) : date;

  if (isNaN(d.getTime())) return "";

  if (locale === "ar") {
    return new Intl.DateTimeFormat("ar-KW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/**
 * Format a short date (day + month only)
 * Arabic: ١٥ مارس
 * English: Mar 15
 */
export function formatShortDate(
  date: Date | string,
  locale: string
): string {
  const d = typeof date === "string" ? new Date(date) : date;

  if (isNaN(d.getTime())) return "";

  if (locale === "ar") {
    return new Intl.DateTimeFormat("ar-KW", {
      month: "short",
      day: "numeric",
    }).format(d);
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(d);
}


// ██████████████████████████████████████████████████████████████
// ██  Section 2: ROOT LAYOUT & THEME
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/layout.tsx
// ═══════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import { AuthProvider } from "@/components/features/auth/auth-provider";
import { QueryProvider } from "@/components/layout/query-provider";
import { notoSansArabic } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuwait Events Platform — منصة فعاليات الكويت",
  description: "Discover and book the best events in Kuwait — اكتشف واحجز أفضل الفعاليات في الكويت",
  keywords: ["events", "Kuwait", "tickets", "booking", "فعاليات", "الكويت", "حجز", "تذاكر"],
  authors: [{ name: "Kuwait Events Platform" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${notoSansArabic.variable} font-sans antialiased bg-background text-foreground`}>
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/layout/theme-provider.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/layout/query-provider.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000, retry: 1 },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/layout/locale-updater.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useEffect } from "react";

export function LocaleUpdater({ locale }: { locale: string }) {
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  return null;
}


// ██████████████████████████████████████████████████████████████
// ██  Section 3: shadcn/ui BASE COMPONENTS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/alert.tsx
// ═══════════════════════════════════════════════════════════════
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/animated-counter.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLocale } from "next-intl";
import { formatLocalizedNumber } from "@/lib/format-number";

/** Premium cubic-bezier easing — consistent with MotionSection / AnimatedSection */
const PREMIUM_CUBIC = (t: number): number => {
  // Approximates CSS cubic-bezier(0.22, 1, 0.36, 1) via Bernstein polynomial
  const cx = 0.22;
  const cy = 1.0;
  const bx = 0.36;
  const by = 1.0;
  const ax = 1.0 - 3 * bx + 3 * cx;
  const ay = 1.0 - 3 * by + 3 * cy;
  const bxb = 3 * bx - 6 * cx;
  const byb = 3 * by - 6 * cy;
  const cxc = 3 * cx;
  const cyc = 3 * cy;

  // Newton-Raphson to find t for given x, then compute y
  let guess = t;
  for (let i = 0; i < 8; i++) {
    const x = ((ax * guess + bxb) * guess + cxc) * guess - t;
    if (Math.abs(x) < 1e-6) break;
    const dx = (3 * ax * guess + 2 * bxb) * guess + cxc;
    if (Math.abs(dx) < 1e-6) break;
    guess -= x / dx;
  }
  return ((ay * guess + byb) * guess + cyc) * guess;
};

interface AnimatedCounterProps {
  /** Number to count up to */
  target: number;
  /** Animation duration in milliseconds (default 1800) */
  duration?: number;
  /** Optional suffix displayed after the number (e.g. "+" for "150+") */
  suffix?: string;
  /** Optional prefix displayed before the number (e.g. "$" for "$150") */
  prefix?: string;
  /** CSS class for the span wrapper */
  className?: string;
  /** Locale for number formatting (defaults to current locale from next-intl) */
  locale?: string;
}

/**
 * AnimatedCounter — shared component for counting up to a target number.
 * Uses requestAnimationFrame with premium cubic-bezier easing for a luxury feel.
 * Only starts animating when scrolled into view (once: true).
 */
export function AnimatedCounter({
  target,
  duration = 1800,
  suffix,
  prefix,
  className,
  locale: localeProp,
}: AnimatedCounterProps) {
  const currentLocale = useLocale();
  const locale = localeProp ?? currentLocale;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView || target === 0) return;

    startTimeRef.current = null;

    function step(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Premium cubic-bezier easing for luxury feel
      const eased = PREMIUM_CUBIC(progress);
      const current = Math.round(eased * target);
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatLocalizedNumber(count, locale)}
      {suffix}
    </span>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/animated-section.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

function getOffset(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case "up":
      return { x: 0, y: 40 };
    case "down":
      return { x: 0, y: -40 };
    case "left":
      return { x: 60, y: 0 };
    case "right":
      return { x: -60, y: 0 };
    case "none":
      return { x: 0, y: 0 };
    default:
      return { x: 0, y: 40 };
  }
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offset = getOffset(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/avatar.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/badge.tsx
// ═══════════════════════════════════════════════════════════════
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/button.tsx
// ═══════════════════════════════════════════════════════════════
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md btn-shine btn-press",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:-translate-y-0.5",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/card.tsx
// ═══════════════════════════════════════════════════════════════
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/dialog.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/dropdown-menu.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/form.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/hero-section-3d.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThreeHeroBg } from "@/components/ui/three-hero-bg";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Search, Compass, ChevronDown, Sparkles } from "lucide-react";

/* ──────────────────────────────────────────────
   Reduced-motion detection hook
   ────────────────────────────────────────────── */

const emptySubscribe = () => () => {};

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/* ──────────────────────────────────────────────
   Animation config — premium cubic-bezier
   ────────────────────────────────────────────── */

const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: CUBIC_PREMIUM,
    },
  },
};

const fadeSlideUpSmall = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: CUBIC_PREMIUM,
    },
  },
};

/* ──────────────────────────────────────────────
   HeroSection3D — Interactive 3D Hero with Canvas
   Replaces ScrollVideoHero with pure 3D scene.
   ────────────────────────────────────────────── */

interface HeroSection3DProps {
  /** Number of upcoming events for stats display */
  upcomingCount?: number;
}

export function HeroSection3D({ upcomingCount }: HeroSection3DProps) {
  const t = useTranslations("home");

  /* ── Refs ── */
  const containerRef = useRef<HTMLElement>(null);

  /* ── Accessibility ── */
  const prefersReducedMotion = usePrefersReducedMotion();

  /* ── Scroll tracking ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* ── Content parallax transforms ── */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  /* ── Mouse position for 3D scene ── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      mouseX.set(nx);
      mouseY.set(ny);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  /* ── Scroll progress for 3D scene ── */
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  /* ── Fallback gradient ── */
  const fallbackGradient =
    "linear-gradient(to bottom, oklch(0.15 0.03 260) 0%, oklch(0.12 0.04 260) 50%, oklch(0.10 0.02 260) 100%)";

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.12 0.04 260) 0%, oklch(0.10 0.03 260) 50%, oklch(0.15 0.03 260) 100%)",
      }}
    >
      {/* ── Sticky container that stays in view while scrolling ── */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── 3D Three.js Background ── */}
        <ThreeHeroBg
          scrollProgress={scrollProgress}
          mouseX={mouseX.get()}
          mouseY={mouseY.get()}
        />

        {/* ── Fallback: gradient on reduced motion ── */}
        {prefersReducedMotion && (
          <div
            className="absolute inset-0"
            style={{ background: fallbackGradient }}
          />
        )}

        {/* ── Gradient overlay: darker at top/bottom ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.12 0.04 260 / 65%) 0%, oklch(0.12 0.04 260 / 10%) 30%, oklch(0.12 0.04 260 / 5%) 60%, oklch(0.12 0.04 260 / 55%) 100%)",
          }}
        />

        {/* ── Subtle grain texture ── */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── Main hero content — scroll-driven parallax fade ── */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Sparkle badge */}
            {upcomingCount !== undefined && upcomingCount > 0 && (
              <motion.div variants={fadeSlideUpSmall} className="flex justify-center">
                <div className="inline-flex items-center gap-2 ps-4 pe-5 py-2 rounded-full glass-card text-sm font-medium text-white/90 dark:text-white/90">
                  <Sparkles className="h-4 w-4 text-primary shrink-0" />
                  <span>
                    <AnimatedCounter target={upcomingCount} /> {t("upcomingEventsCount")}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Main heading — gold gradient text */}
            <motion.h1
              variants={fadeSlideUp}
              className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              {t("heroTitle")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeSlideUp}
              className="text-lg sm:text-xl md:text-2xl text-white/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeSlideUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <MagneticButton asChild strength={0.25}>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg glow-gold transition-all duration-300 hover:brightness-110"
                >
                  <Search className="h-5 w-5 shrink-0" />
                  <span>{t("browseEvents")}</span>
                </Link>
              </MagneticButton>

              <MagneticButton asChild strength={0.25}>
                <Link
                  href="/events#categories"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass-card text-white dark:text-white font-semibold text-base sm:text-lg border border-white/10 transition-all duration-300 hover:border-primary/30 hover:bg-white/5"
                >
                  <Compass className="h-5 w-5 shrink-0" />
                  <span>{t("exploreCategories")}</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stats bar ── */}
        <motion.div
          className="relative z-10 absolute bottom-20 inset-x-0 pb-6 sm:pb-8 md:pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: CUBIC_PREMIUM }}
          style={{ opacity: contentOpacity }}
        >
          {upcomingCount !== undefined && upcomingCount > 0 && (
            <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  <AnimatedCounter target={upcomingCount} />
                </span>
                <span className="text-white/50 dark:text-white/50 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                  {t("upcomingEventsCount")}
                </span>
              </div>

              <div className="w-px h-12 bg-white/10 hidden sm:block" />

              <div className="hidden sm:flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 dark:text-white/90">
                  <AnimatedCounter target={8} />
                </span>
                <span className="text-white/50 dark:text-white/50 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                  {t("categoriesCount")}
                </span>
              </div>

              <div className="w-px h-12 bg-white/10 hidden sm:block" />

              <div className="hidden sm:flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 dark:text-white/90">
                  <AnimatedCounter target={3} />
                </span>
                <span className="text-white/50 dark:text-white/50 text-xs sm:text-sm mt-1 tracking-wider uppercase">
                  {t("venuesCount")}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="relative z-10 absolute bottom-4 sm:bottom-6 inset-x-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ opacity: contentOpacity }}
        >
          <motion.button
            type="button"
            className="flex flex-col items-center gap-1 cursor-pointer text-white/30 hover:text-white/60 transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
            }}
            aria-label={t("discoverMore")}
          >
            <span className="text-[10px] sm:text-xs tracking-widest uppercase">
              {t("discoverMore")}
            </span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/image-with-fallback.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority = false,
  sizes,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const locale = useLocale();

  // Generate a dark placeholder SVG with gold accent text
  // Using encodeURIComponent instead of btoa to safely handle Arabic characters
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <rect width="100%" height="100%" fill="#0A0F1C"/>
      <circle cx="200" cy="120" r="30" fill="#D4AF37" opacity="0.15"/>
      <path d="M185 120 L200 105 L215 120 L205 120 L205 140 L195 140 L195 120 Z" fill="#D4AF37" opacity="0.3"/>
      <text x="50%" y="185" dominant-baseline="middle" text-anchor="middle" 
            fill="#D4AF37" font-size="12" font-family="sans-serif" opacity="0.5">
        ${locale === "ar" ? "الصورة غير متوفرة" : "Image unavailable"}
      </text>
    </svg>`;
  const placeholderSvg = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

  return (
    <div className={cn("relative overflow-hidden", fill && "h-full w-full", className)}>
      {/* Shimmer loading state */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 skeleton-shimmer" />
      )}
      <Image
        src={hasError ? placeholderSvg : src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoading && !hasError ? "opacity-0" : "opacity-100",
          hasError && "opacity-70"
        )}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
        priority={priority}
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/input.tsx
// ═══════════════════════════════════════════════════════════════
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/label.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/loader-3d.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────
   Loader3D — Premium 3D loading screen with
   rotating 8-pointed Islamic star (Rub el Hizb ☸),
   orbiting gold particles, and progress ring.
   Replaces the VideoLoader with pure code animation.
   ────────────────────────────────────────────── */

// ── Types ────────────────────────────────────────
interface Loader3DProps {
  /** Whether the app is still loading */
  isLoading: boolean;
  /** Maximum time to show loader (ms), even if isLoading is true */
  maxDuration?: number;
  /** App name to display (locale-aware) */
  appName?: string;
}

// ── Deterministic particle configs ───────────────
// 8 particles, each offset by 45°, with varying sizes for depth illusion
const PARTICLE_COUNT = 8;
const PARTICLE_ANGLES = Array.from(
  { length: PARTICLE_COUNT },
  (_, i) => i * 45
);
const PARTICLE_SIZES = [5, 4, 6, 4, 5, 4, 6, 4]; // px — deterministic
const PARTICLE_OPACITIES = [0.9, 0.6, 1, 0.7, 0.8, 0.5, 0.9, 0.6]; // varying depth

// ── SVG 8-pointed star clip-path ─────────────────
// Creates a proper 8-pointed Islamic star (Rub el Hizb)
const STAR_CLIP_PATH =
  "polygon(50% 0%, 62.5% 25%, 100% 25%, 75% 50%, 100% 75%, 62.5% 75%, 50% 100%, 37.5% 75%, 0% 75%, 25% 50%, 0% 25%, 37.5% 25%)";

// ── Gradient IDs (unique to avoid SVG collisions) ──
const GOLD_GRADIENT_ID = "loader3d-gold-gradient";
const RING_GRADIENT_ID = "loader3d-ring-gradient";

// ── Elliptical orbit parameters ──────────────────
const ORBIT_RADIUS_X = 80; // px — horizontal radius
const ORBIT_RADIUS_Y = 40; // px — vertical radius (perspective squish)
const ORBIT_DURATION = 4; // seconds per full orbit

// ── Generate smooth elliptical keyframes ─────────
// Pre-computes X/Y positions along the ellipse at regular intervals
function generateEllipseKeyframes(
  radiusX: number,
  radiusY: number,
  steps: number
): { x: number[]; y: number[] } {
  const xValues: number[] = [];
  const yValues: number[] = [];

  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    xValues.push(Math.cos(angle) * radiusX);
    yValues.push(Math.sin(angle) * radiusY);
  }

  return { x: xValues, y: yValues };
}

const ORBIT_KEYFRAMES = generateEllipseKeyframes(
  ORBIT_RADIUS_X,
  ORBIT_RADIUS_Y,
  36 // 36 steps = smooth 10° increments
);

/* ──────────────────────────────────────────────
   Loader3D Component
   ────────────────────────────────────────────── */
export function Loader3D({
  isLoading,
  maxDuration = 4000,
  appName = "فعاليات الكويت",
}: Loader3DProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  // Detect prefers-reduced-motion for accessibility
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // If reduced motion is preferred, progress is always 100% (static display)
  const [progress, setProgress] = useState(prefersReducedMotion ? 100 : 0);

  // ── Auto-dismiss after maxDuration ────────────
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      setFadeOut(true);
    }, maxDuration);
    return () => clearTimeout(maxTimer);
  }, [maxDuration]);

  // ── Dismiss when loading completes ────────────
  useEffect(() => {
    if (!isLoading) {
      // Buffer: let the page render underneath before fading
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 600);
      return () => clearTimeout(fadeTimer);
    }
  }, [isLoading]);

  // ── Remove from DOM after exit animation ──────
  useEffect(() => {
    if (fadeOut) {
      const hideTimer = setTimeout(() => {
        setShowLoader(false);
      }, 800); // Match exit animation duration
      return () => clearTimeout(hideTimer);
    }
  }, [fadeOut]);

  // ── Progress ring animation (0% → 100% over 2.5s) ──
  useEffect(() => {
    // Skip animation if reduced motion is preferred (progress starts at 100%)
    if (prefersReducedMotion) return;

    const duration = 2500; // ms — matches the spec
    const startTime = Date.now();
    let rafId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReducedMotion]);

  // ── SVG progress ring calculations ────────────
  const ringRadius = 72;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringStrokeDashoffset =
    ringCircumference - (progress / 100) * ringCircumference;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "oklch(0.10 0.02 260)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
          }}
        >
          {/* ── Background: Radial vignette ────────── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 20%, oklch(0.06 0.02 260 / 80%) 100%)",
            }}
          />

          {/* ── Background: Faint grain texture ────── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* ── Center content ─────────────────────── */}
          <div className="relative flex flex-col items-center justify-center">
            {/* ── Star + Ring + Particles wrapper ──── */}
            <div className="relative" style={{ width: 180, height: 180 }}>
              {/* ── Pulsing gold glow behind the star ── */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  width: 140,
                  height: 140,
                  left: "50%",
                  top: "50%",
                  marginLeft: -70,
                  marginTop: -70,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, oklch(0.76 0.13 85 / 30%) 0%, oklch(0.76 0.13 85 / 8%) 50%, transparent 70%)",
                }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.5 }
                    : {
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.1, 1],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ── Central 8-pointed star ──────────── */}
              <motion.div
                className="absolute"
                style={{
                  width: 120,
                  height: 120,
                  left: "50%",
                  top: "50%",
                  marginLeft: -60,
                  marginTop: -60,
                  willChange: "transform",
                }}
                animate={
                  prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 8, // 8 seconds per revolution
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
              >
                <svg
                  viewBox="0 0 100 100"
                  width="120"
                  height="120"
                  style={{
                    clipPath: STAR_CLIP_PATH,
                    filter:
                      "drop-shadow(0 0 16px oklch(0.76 0.13 85 / 50%)) drop-shadow(0 0 4px oklch(0.82 0.14 90 / 80%))",
                  }}
                >
                  <defs>
                    <linearGradient
                      id={GOLD_GRADIENT_ID}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="oklch(0.82 0.14 90)" />
                      <stop offset="40%" stopColor="oklch(0.76 0.13 85)" />
                      <stop offset="70%" stopColor="oklch(0.70 0.11 75)" />
                      <stop offset="100%" stopColor="oklch(0.82 0.14 90)" />
                    </linearGradient>
                  </defs>
                  {/* Two overlapping squares rotated 45° = 8-pointed star */}
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill={`url(#${GOLD_GRADIENT_ID})`}
                    transform="rotate(0 50 50)"
                  />
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill={`url(#${GOLD_GRADIENT_ID})`}
                    transform="rotate(45 50 50)"
                  />
                </svg>
              </motion.div>

              {/* ── Progress ring (SVG) ─────────────── */}
              <svg
                className="absolute inset-0 pointer-events-none"
                viewBox="0 0 180 180"
                width="180"
                height="180"
                style={{ transform: "rotate(-90deg)" }} // Start from top
              >
                <defs>
                  <linearGradient
                    id={RING_GRADIENT_ID}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="oklch(0.82 0.14 90)" />
                    <stop offset="100%" stopColor="oklch(0.76 0.13 85)" />
                  </linearGradient>
                </defs>
                {/* Background track */}
                <circle
                  cx="90"
                  cy="90"
                  r={ringRadius}
                  fill="none"
                  stroke="oklch(0.76 0.13 85 / 8%)"
                  strokeWidth="2"
                />
                {/* Progress arc */}
                <circle
                  cx="90"
                  cy="90"
                  r={ringRadius}
                  fill="none"
                  stroke={`url(#${RING_GRADIENT_ID})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringStrokeDashoffset}
                  style={{
                    transition: prefersReducedMotion
                      ? "none"
                      : "stroke-dashoffset 0.08s linear",
                  }}
                />
              </svg>

              {/* ── Orbiting particles ──────────────── */}
              {!prefersReducedMotion &&
                PARTICLE_ANGLES.map((angleOffset, i) => {
                  // Each particle starts at a different point on the ellipse
                  // by offsetting the keyframe array
                  const offsetSteps = Math.round(
                    (angleOffset / 360) * ORBIT_KEYFRAMES.x.length
                  );
                  const rotatedX = [
                    ...ORBIT_KEYFRAMES.x.slice(offsetSteps),
                    ...ORBIT_KEYFRAMES.x.slice(0, offsetSteps),
                  ];
                  const rotatedY = [
                    ...ORBIT_KEYFRAMES.y.slice(offsetSteps),
                    ...ORBIT_KEYFRAMES.y.slice(0, offsetSteps),
                  ];

                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute"
                      style={{
                        width: PARTICLE_SIZES[i],
                        height: PARTICLE_SIZES[i],
                        borderRadius: "50%",
                        backgroundColor: `oklch(0.82 0.14 90 / ${PARTICLE_OPACITIES[i]})`,
                        left: "50%",
                        top: "50%",
                        marginLeft: -(PARTICLE_SIZES[i] / 2),
                        marginTop: -(PARTICLE_SIZES[i] / 2),
                        boxShadow: `0 0 ${PARTICLE_SIZES[i] + 3}px oklch(0.76 0.13 85 / ${PARTICLE_OPACITIES[i] * 0.7}), 0 0 ${PARTICLE_SIZES[i] + 8}px oklch(0.76 0.13 85 / ${PARTICLE_OPACITIES[i] * 0.25})`,
                        willChange: "transform",
                      }}
                      animate={{
                        x: rotatedX,
                        y: rotatedY,
                      }}
                      transition={{
                        duration: ORBIT_DURATION,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Subtle trail effect — larger, faded copy behind */}
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: PARTICLE_SIZES[i] * 2.5,
                          height: PARTICLE_SIZES[i] * 2.5,
                          top: -(PARTICLE_SIZES[i] * 0.75),
                          left: -(PARTICLE_SIZES[i] * 0.75),
                          backgroundColor: `oklch(0.82 0.14 90 / ${PARTICLE_OPACITIES[i] * 0.2})`,
                          filter: "blur(3px)",
                        }}
                      />
                    </motion.div>
                  );
                })}
            </div>

            {/* ── App name with gold gradient text ─── */}
            <motion.div
              className="gradient-text text-2xl sm:text-3xl font-bold mt-8 select-none"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              {appName}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader3D;


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/magnetic-button.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  asChild = false,
  onClick,
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current || disabled) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      // Clamp displacement to max 8px
      const maxDisplacement = 8;
      const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX));
      const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY));

      setPosition({ x: clampedX, y: clampedY });
    },
    [strength, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const Comp = asChild ? Slot : "button";

  return (
    <motion.button
      ref={ref}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {asChild ? <Comp>{children}</Comp> : children}
    </motion.button>
  );
}

export default MagneticButton;


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/motion-section.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ReactNode } from "react";

/* ──────────────────────────────────────────────
   Premium easing — consistent across the app
   ────────────────────────────────────────────── */
const PREMIUM_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ──────────────────────────────────────────────
   Direction-specific variants
   ────────────────────────────────────────────── */
const directionVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: PREMIUM_CUBIC },
    },
  },
  down: {
    hidden: { opacity: 0, y: -32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: PREMIUM_CUBIC },
    },
  },
  start: {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: PREMIUM_CUBIC },
    },
  },
  end: {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: PREMIUM_CUBIC },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: PREMIUM_CUBIC },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: PREMIUM_CUBIC },
    },
  },
};

/* ──────────────────────────────────────────────
   MotionSection — Scroll-triggered reveal
   ────────────────────────────────────────────── */

interface MotionSectionProps {
  children: ReactNode;
  direction?: "up" | "down" | "start" | "end" | "fade" | "scale";
  delay?: number;
  className?: string;
  /** Override reduced motion behavior */
  forceAnimate?: boolean;
}

export function MotionSection({
  children,
  direction = "up",
  delay = 0,
  className,
  forceAnimate = false,
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  // Skip animation entirely if reduced motion preferred (unless forced)
  if (prefersReducedMotion && !forceAnimate) {
    return <div className={className}>{children}</div>;
  }

  const variants = directionVariants[direction] ?? directionVariants.up;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        ...variants,
        visible: {
          ...(variants.visible as Record<string, unknown>),
          transition: {
            ...((variants.visible as Record<string, unknown>).transition as Record<string, unknown>),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   StaggerContainer — Stagger children animations
   ────────────────────────────────────────────── */

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  /** Delay before first child animates */
  delayChildren?: number;
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0.1,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        ...staggerContainerVariants,
        visible: {
          ...staggerContainerVariants.visible,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   StaggerItem — Individual stagger child
   ────────────────────────────────────────────── */

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: PREMIUM_CUBIC },
  },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/navbar-3d-bg.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────
interface Navbar3DBgProps {
  isScrolled: boolean;
}

// ─── Theme Detection (SSR-safe) ──────────────────────────────
const themeQuery =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

function subscribeTheme(callback: () => void) {
  const mql = themeQuery;
  if (!mql) return () => {};
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getThemeSnapshot(): boolean {
  if (typeof document !== "undefined") {
    const html = document.documentElement;
    if (html.classList.contains("dark")) return true;
    if (html.classList.contains("light")) return false;
  }
  return themeQuery?.matches ?? false;
}

function getThemeServerSnapshot(): boolean {
  return false;
}

function useIsDark(): boolean {
  return useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
}

// ─── Reduced Motion Detection (SSR-safe) ─────────────────────
const reducedMotionQuery =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;

function subscribeReducedMotion(callback: () => void) {
  const mql = reducedMotionQuery;
  if (!mql) return () => {};
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  return reducedMotionQuery?.matches ?? false;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

// ─── Gradient Mesh Spot Configs (Deterministic) ──────────────
// Each spot is a radial gradient circle that slowly drifts across the navbar.
// Positions animate between keyframes over 10-20 seconds.

interface GradientSpot {
  // Sequence of positions the spot drifts through (percentage coordinates)
  keyframes: { x: string; y: string }[];
  // Duration for one full cycle through all keyframes (seconds)
  duration: number;
  // Size of the gradient spot (percentage of container)
  size: string;
  // Color of the gradient spot (oklch)
  color: string;
}

/** Dark mode gradient spots — navy base with gold accents */
const DARK_SPOTS: GradientSpot[] = [
  {
    keyframes: [
      { x: "15%", y: "30%" },
      { x: "40%", y: "50%" },
      { x: "70%", y: "30%" },
      { x: "40%", y: "20%" },
      { x: "15%", y: "30%" },
    ],
    duration: 18,
    size: "70%",
    color: "oklch(0.15 0.03 260 / 60%)",
  },
  {
    keyframes: [
      { x: "80%", y: "20%" },
      { x: "60%", y: "60%" },
      { x: "30%", y: "40%" },
      { x: "60%", y: "10%" },
      { x: "80%", y: "20%" },
    ],
    duration: 14,
    size: "50%",
    color: "oklch(0.76 0.13 85 / 15%)",
  },
  {
    keyframes: [
      { x: "50%", y: "70%" },
      { x: "20%", y: "40%" },
      { x: "80%", y: "50%" },
      { x: "50%", y: "30%" },
      { x: "50%", y: "70%" },
    ],
    duration: 20,
    size: "60%",
    color: "oklch(0.15 0.03 260 / 40%)",
  },
  {
    keyframes: [
      { x: "25%", y: "50%" },
      { x: "70%", y: "40%" },
      { x: "50%", y: "70%" },
      { x: "10%", y: "30%" },
      { x: "25%", y: "50%" },
    ],
    duration: 16,
    size: "40%",
    color: "oklch(0.76 0.13 85 / 10%)",
  },
];

/** Light mode gradient spots — white base with subtle gold accents */
const LIGHT_SPOTS: GradientSpot[] = [
  {
    keyframes: [
      { x: "15%", y: "30%" },
      { x: "40%", y: "50%" },
      { x: "70%", y: "30%" },
      { x: "40%", y: "20%" },
      { x: "15%", y: "30%" },
    ],
    duration: 18,
    size: "70%",
    color: "oklch(0.995 0.004 85 / 60%)",
  },
  {
    keyframes: [
      { x: "80%", y: "20%" },
      { x: "60%", y: "60%" },
      { x: "30%", y: "40%" },
      { x: "60%", y: "10%" },
      { x: "80%", y: "20%" },
    ],
    duration: 14,
    size: "50%",
    color: "oklch(0.76 0.13 85 / 8%)",
  },
  {
    keyframes: [
      { x: "50%", y: "70%" },
      { x: "20%", y: "40%" },
      { x: "80%", y: "50%" },
      { x: "50%", y: "30%" },
      { x: "50%", y: "70%" },
    ],
    duration: 20,
    size: "60%",
    color: "oklch(0.995 0.004 85 / 40%)",
  },
  {
    keyframes: [
      { x: "25%", y: "50%" },
      { x: "70%", y: "40%" },
      { x: "50%", y: "70%" },
      { x: "10%", y: "30%" },
      { x: "25%", y: "50%" },
    ],
    duration: 16,
    size: "40%",
    color: "oklch(0.76 0.13 85 / 6%)",
  },
];

// ─── Noise Texture Overlay ───────────────────────────────────
// Inline SVG feTurbulence for a subtle grain texture effect.
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ─── Mesh Gradient Background ────────────────────────────────
function MeshGradient({ isDark, prefersReducedMotion }: { isDark: boolean; prefersReducedMotion: boolean }) {
  const spots = isDark ? DARK_SPOTS : LIGHT_SPOTS;

  // Base background color
  const baseBg = isDark
    ? "oklch(0.15 0.03 260 / 85%)"
    : "oklch(0.995 0.004 85 / 85%)";

  return (
    <div
      className="absolute inset-0"
      style={{ backgroundColor: baseBg }}
    >
      {/* ── Animated gradient spots ── */}
      {spots.map((spot, i) => {
        // Build Framer Motion keyframes for x and y positions
        const xKeyframes = spot.keyframes.map((kf) => kf.x);
        const yKeyframes = spot.keyframes.map((kf) => kf.y);

        return (
          <motion.div
            key={`spot-${i}`}
            animate={
              prefersReducedMotion
                ? { x: spot.keyframes[0].x, y: spot.keyframes[0].y }
                : { x: xKeyframes, y: yKeyframes }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: spot.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              position: "absolute",
              width: spot.size,
              height: spot.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${spot.color}, transparent 70%)`,
              filter: "blur(40px)",
              transform: "translate(-50%, -50%)",
              willChange: prefersReducedMotion ? "auto" : "transform",
            }}
          />
        );
      })}

      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          opacity: 0.03,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* ── Glassmorphism backdrop blur layer ── */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────
function Navbar3DBg({ isScrolled }: Navbar3DBgProps) {
  const isDark = useIsDark();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          key="navbar-3d-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
          role="presentation"
        >
          <MeshGradient isDark={isDark} prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Navbar3DBg };
export type { Navbar3DBgProps };
export default Navbar3DBg;


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/popover.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/scroll-area.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/section-3d-bg.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

/**
 * Section3DBg — Delegates to ThreeSectionBg (WebGL-based 3D backgrounds)
 * Maintains the same interface as the original Canvas 2D implementation
 * for backward compatibility with all existing imports.
 */

import { ThreeSectionBg } from "@/components/ui/three-section-bg";
import type { SectionTheme as ThreeSectionTheme } from "@/components/ui/three-section-bg";

// Re-export with the original interface name
export type SectionTheme = ThreeSectionTheme;

interface Section3DBgProps {
  theme?: SectionTheme;
  className?: string;
}

function Section3DBg({ theme = "hero", className }: Section3DBgProps) {
  return <ThreeSectionBg theme={theme} className={className} />;
}

export { Section3DBg };
export type { Section3DBgProps };
export default Section3DBg;


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/select.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/separator.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/sheet.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/sidebar.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/skeleton.tsx
// ═══════════════════════════════════════════════════════════════
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/slider.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/sonner.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/table.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/tabs.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/textarea.tsx
// ═══════════════════════════════════════════════════════════════
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/three-hero-bg.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ThreeCanvasManager } from "@/lib/three/three-canvas";
import { createEnvironmentMap } from "@/lib/three/environment";
import { fbm, mulberry32 } from "@/lib/three/fbm";
import {
  makeStar,
  makeOctFrame,
  makeOctPrism,
  makeArmillary,
  makeArabesque,
  makeCrossPlanes,
  makeRoseRing,
  createLattice3D,
  mkCookie,
} from "@/lib/three/geometry";
import { glassArr, solidArr, metalGoldMat, wireGold, tealGlass } from "@/lib/three/materials";
import { SkyShader, OrbShader, BeamShader, CausticShader, ParticleShader, CinematicShader } from "@/lib/three/shaders";

/* ─── Constants ─── */
const EPS = 0.001;
const BAND = 150;
const CAM_SPD = 0.014;
const PI = Math.PI;

/* ─── Reduced motion detection ─── */
const emptySubscribe = () => () => {};

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

interface ThreeHeroBgProps {
  scrollProgress: number;
  mouseX: number;
  mouseY: number;
}

export function ThreeHeroBg({ scrollProgress, mouseX, mouseY }: ThreeHeroBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const managerRef = useRef<ThreeCanvasManager | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Refs for reactive props
  const scrollRef = useRef(scrollProgress);
  const mouseRef = useRef({ x: mouseX, y: mouseY });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => { scrollRef.current = scrollProgress; }, [scrollProgress]);
  useEffect(() => { targetMouseRef.current = { x: mouseX, y: mouseY }; }, [mouseX, mouseY]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || managerRef.current) return;

    const manager = new ThreeCanvasManager(canvas, {
      fogColor: 0x030209,
      fogDensity: 0.009,
      toneMappingExposure: 1.15,
    });
    managerRef.current = manager;

    const { scene, camera } = manager;

    // ── Environment Map ──
    scene.environment = createEnvironmentMap(manager.renderer);

    // ── Sky Background ──
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      vertexShader: SkyShader.vertexShader,
      fragmentShader: SkyShader.fragmentShader,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(380, 32, 32), skyMat));

    // ── Line material for lattice (reusable) ──
    const latticeLineMat = new THREE.LineBasicMaterial({ color: 0xdaa520, transparent: true, opacity: 0.55 });

    // ── Lattice Screens ──
    const lattices: THREE.Group[] = [];
    const latticeConfigs = [
      { x: -4.5, y: 0.5, z: 22, size: 6, gridN: 3, layers: 4, rotY: 0.18 },
      { x: 4, y: -0.5, z: 55, size: 7, gridN: 4, layers: 4, rotY: -0.15 },
      { x: -3, y: 1, z: 88, size: 5, gridN: 3, layers: 3, rotY: 0.25 },
      { x: 3.5, y: -0.3, z: 120, size: 6.5, gridN: 3, layers: 4, rotY: -0.12 },
    ];
    latticeConfigs.forEach((cfg) => {
      const l = createLattice3D(cfg.x, cfg.y, cfg.z, cfg.size, cfg.gridN, cfg.layers, cfg.rotY, latticeLineMat);
      lattices.push(l);
      scene.add(l);
    });

    // ── Scene Shapes ──
    const allShapes: THREE.Object3D[] = [];
    const clusterZ = [5, 30, 58, 85, 112, 140];
    const rng = mulberry32(42);

    function addAnim(obj: THREE.Object3D, type: string) {
      const sp = type === "glass" ? 0.5 : type === "wire" ? 1.2 : 0.9;
      obj.userData = {
        rotSpd: new THREE.Vector3(
          (rng() - 0.5) * 0.004 * sp,
          (rng() - 0.5) * 0.004 * sp,
          (rng() - 0.5) * 0.003 * sp
        ),
        fSpd: 0.08 + rng() * 0.25,
        fAmp: 0.1 + rng() * 0.4,
        bSpd: [0.08 + rng() * 0.15, 0.09 + rng() * 0.17, 0.06 + rng() * 0.14],
        bAmp: 0.008 + rng() * 0.025,
        initY: obj.position.y,
        seeds: [rng() * 100, rng() * 100, rng() * 100],
        type,
      };
    }

    const starPts = [8, 6, 10, 12, 8, 10];
    const innerRatios = [0.42, 0.5, 0.68, 0.78, 0.42, 0.68];

    clusterZ.forEach((cz, ci) => {
      const cx = (rng() - 0.5) * 4;
      const cy = (rng() - 0.5) * 2;

      // Central large glass star
      const cR = 1.2 + rng() * 0.4;
      const cG = makeStar(starPts[ci], cR, cR * innerRatios[ci], cR * 0.12);
      const cM = new THREE.Mesh(cG, glassArr[ci % 5]);
      cM.position.set(cx, cy, cz);
      cM.rotation.set(rng() * PI, rng() * PI, rng() * PI);
      addAnim(cM, "glass");
      scene.add(cM);
      allShapes.push(cM);

      // Surrounding shapes
      const count = 4 + Math.floor(rng() * 3);
      for (let j = 0; j < count; j++) {
        const s = 0.3 + rng() * 0.8;
        const tp = Math.floor(rng() * 9);
        let geo: THREE.BufferGeometry;

        switch (tp) {
          case 0: geo = makeStar(8, s, s * 0.42, s * 0.1); break;
          case 1: geo = makeStar(6, s, s * 0.5, s * 0.08); break;
          case 2: geo = makeStar(10, s, s * 0.68, s * 0.07); break;
          case 3: geo = makeStar(12, s, s * 0.78, s * 0.06); break;
          case 4: geo = makeOctPrism(s * 0.5, s * 0.3); break;
          case 5: geo = makeArabesque(s * 0.4, s * 0.08, 2 + Math.floor(rng() * 2), 3 + Math.floor(rng() * 3)); break;
          case 6: geo = makeOctFrame(s * 1.2, s * 0.4, s * 0.04, s * 0.06); break;
          case 7: {
            const grp = makeCrossPlanes(s, 3, glassArr[Math.floor(rng() * 5)]);
            grp.position.set(cx + (rng() - 0.5) * 14, cy + (rng() - 0.5) * 8, cz + (rng() - 0.5) * 16);
            grp.rotation.set(rng() * PI, rng() * PI, rng() * PI);
            addAnim(grp, "glass");
            scene.add(grp);
            allShapes.push(grp);
            continue;
          }
          default: geo = makeStar(8, s, s * 0.42, s * 0.06); break;
        }

        const r = rng();
        const mat = r < 0.5 ? glassArr[Math.floor(rng() * 5)] : r < 0.82 ? solidArr[Math.floor(rng() * 2)] : wireGold;
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(cx + (rng() - 0.5) * 14, cy + (rng() - 0.5) * 8, cz + (rng() - 0.5) * 16);
        mesh.rotation.set(rng() * PI * 2, rng() * PI * 2, rng() * PI * 2);
        addAnim(mesh, r < 0.5 ? "glass" : r < 0.82 ? "solid" : "wire");
        scene.add(mesh);
        allShapes.push(mesh);
      }

      // Octagonal frame accent
      const fs = 1.3 + rng() * 1.0;
      const fM = new THREE.Mesh(makeOctFrame(fs, fs * 0.35, 0.04, 0.06), metalGoldMat);
      fM.position.set(cx + (rng() - 0.5) * 5, cy + (rng() - 0.5) * 3, cz + (rng() - 0.5) * 6);
      fM.rotation.set(rng() * PI, rng() * PI, 0);
      addAnim(fM, "solid");
      scene.add(fM);
      allShapes.push(fM);

      // Armillary (alternating)
      if (ci % 2 === 0) {
        const arm = makeArmillary(0.7 + rng() * 0.5, 5, metalGoldMat);
        arm.position.set(cx + (rng() - 0.5) * 8, cy + (rng() - 0.5) * 4, cz + (rng() - 0.5) * 8);
        arm.rotation.set(rng() * PI, rng() * PI, rng() * PI);
        addAnim(arm, "solid");
        scene.add(arm);
        allShapes.push(arm);
      }

      // Rose ring (alternating)
      if (ci % 2 === 1) {
        const rr = makeRoseRing(0.6 + rng() * 0.4, 0.15, 8, metalGoldMat);
        rr.position.set(cx + (rng() - 0.5) * 7, cy + (rng() - 0.5) * 3, cz + (rng() - 0.5) * 7);
        rr.rotation.set(rng() * PI, rng() * PI, rng() * PI);
        addAnim(rr, "solid");
        scene.add(rr);
        allShapes.push(rr);
      }

      // Close foreground accent
      if (ci % 3 === 0) {
        const fgs = 0.5 + rng() * 0.6;
        const fgG = makeStar(8, fgs, fgs * 0.42, fgs * 0.06);
        const fgM = new THREE.Mesh(fgG, tealGlass);
        fgM.position.set(cx + (rng() - 0.5) * 3, cy + (rng() - 0.5) * 2, cz - 7 - rng() * 4);
        fgM.rotation.set(rng() * PI, rng() * PI, rng() * PI);
        addAnim(fgM, "glass");
        scene.add(fgM);
        allShapes.push(fgM);
      }
    });

    // ── Floating Light Orbs ──
    const orbUni = { uTime: { value: 0 } };
    const orbs: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const isTeal = i < 3;
      const geo = new THREE.SphereGeometry(Math.max(EPS, 0.05 + rng() * 0.03), 10, 10);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        uniforms: { uTime: orbUni.uTime, uColor: { value: new THREE.Color(isTeal ? 0x1affcc : 0xffd080) } },
        vertexShader: OrbShader.vertexShader,
        fragmentShader: OrbShader.fragmentShader,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const bx = (rng() - 0.5) * 10;
      const by = (rng() - 0.5) * 5;
      const bz = 5 + rng() * 100;
      mesh.position.set(bx, by, bz);
      mesh.userData = {
        baseX: bx, baseY: by, baseZ: bz,
        spdX: 0.06 + rng() * 0.12, spdY: 0.05 + rng() * 0.1, spdZ: 0.03 + rng() * 0.06,
        ampX: 2 + rng() * 3, ampY: 1.5 + rng() * 2.5, ampZ: 0.8 + rng() * 1.5,
        seed: rng() * 100,
      };
      scene.add(mesh);
      orbs.push(mesh);

      // Point light on orb
      const pl = new THREE.PointLight(isTeal ? 0x1affcc : 0xffbb55, isTeal ? 6 : 10, isTeal ? 18 : 25);
      mesh.add(pl);

      // Glow sphere
      const gMat = new THREE.MeshBasicMaterial({
        color: isTeal ? 0x1affcc : 0xffaa44,
        transparent: true,
        opacity: 0.02,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.BackSide,
      });
      mesh.add(new THREE.Mesh(new THREE.SphereGeometry(Math.max(EPS, 1.2 + rng() * 0.8), 10, 10), gMat));
    }

    // ── Atmospheric Glow Volumes ──
    [8, 35, 68, 98].forEach((z, i) => {
      const isTeal = i % 3 === 0;
      const gMat = new THREE.MeshBasicMaterial({
        color: isTeal ? 0x1affcc : 0xffaa44,
        transparent: true,
        opacity: 0.012,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.BackSide,
      });
      const s = new THREE.Mesh(new THREE.SphereGeometry(Math.max(EPS, 7 + rng() * 5), 14, 14), gMat);
      s.position.set((rng() - 0.5) * 8, (rng() - 0.5) * 4, z);
      scene.add(s);
      allShapes.push(s);
      addAnim(s, "glass");
    });

    // ── Volumetric Light Beams ──
    const beamUni = { uTime: { value: 0 } };
    const beams: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const geo = new THREE.PlaneGeometry(Math.max(EPS, 2 + rng() * 4), Math.max(EPS, 25 + rng() * 35), 1, 20);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: { uTime: beamUni.uTime, uColor: { value: new THREE.Color(0xffd080) }, uOp: { value: 0.03 + rng() * 0.035 } },
        vertexShader: BeamShader.vertexShader,
        fragmentShader: BeamShader.fragmentShader,
      });
      const m = new THREE.Mesh(geo, mat);
      m.position.set((rng() - 0.5) * 20, 7 + rng() * 10, 3 + rng() * 85);
      m.rotation.set(-0.2 - rng() * 0.5, 0, (rng() - 0.5) * 0.3);
      scene.add(m);
      beams.push(m);
    }

    // ── Caustic Light Patterns ──
    const causUni = { uTime: { value: 0 } };
    const caustics: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const sz = Math.max(EPS, 4 + rng() * 4);
      const geo = new THREE.PlaneGeometry(sz, sz);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: { uTime: causUni.uTime, uColor: { value: new THREE.Color(0xffcc66) } },
        vertexShader: CausticShader.vertexShader,
        fragmentShader: CausticShader.fragmentShader,
      });
      const m = new THREE.Mesh(geo, mat);
      m.position.set((rng() - 0.5) * 12, -2.5 + rng() * 3, 3 + rng() * 60);
      m.rotation.set(-PI / 2 + (rng() - 0.5) * 0.3, 0, rng() * PI);
      scene.add(m);
      caustics.push(m);
    }

    // ── Dust Particles ──
    const PC = 2500;
    const pGeo = new THREE.BufferGeometry();
    const pP = new Float32Array(PC * 3);
    const pSz = new Float32Array(PC);
    const pPh = new Float32Array(PC);
    const pBr = new Float32Array(PC);
    const pTp = new Float32Array(PC);

    for (let i = 0; i < PC; i++) {
      pP[i * 3] = (rng() - 0.5) * 55;
      pP[i * 3 + 1] = (rng() - 0.5) * 30;
      pP[i * 3 + 2] = rng() * BAND - 18;
      const isSpark = rng() < 0.06;
      const isTeal = rng() < 0.1;
      pSz[i] = isSpark ? 1.8 + rng() * 3 : 0.2 + rng() * 0.8;
      pPh[i] = rng() * PI * 2;
      pBr[i] = isSpark ? 0.8 + rng() * 0.2 : 0.1 + rng() * 0.4;
      pTp[i] = isTeal ? 1 : 0;
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pP, 3));
    pGeo.setAttribute("aSize", new THREE.BufferAttribute(pSz, 1));
    pGeo.setAttribute("aPhase", new THREE.BufferAttribute(pPh, 1));
    pGeo.setAttribute("aBright", new THREE.BufferAttribute(pBr, 1));
    pGeo.setAttribute("aType", new THREE.BufferAttribute(pTp, 1));

    const pMat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uGold: { value: new THREE.Color(0xffd700) },
        uTeal: { value: new THREE.Color(0x1affcc) },
        uWarm: { value: new THREE.Color(0xfff0c0) },
      },
      vertexShader: ParticleShader.vertexShader,
      fragmentShader: ParticleShader.fragmentShader,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    // ── Spot Light Cookies ──
    const ck1 = mkCookie(512);
    const ck2 = mkCookie(256);
    const spotCfg = [
      { pos: [3, 14, 35] as const, tgt: [0, 0, 28] as const, col: 0xffd080, int: 80, ang: 0.45, pen: 0.6, dist: 55, tex: ck1 },
      { pos: [-4, 12, 70] as const, tgt: [-1, 0, 62] as const, col: 0xffaa44, int: 60, ang: 0.4, pen: 0.5, dist: 50, tex: ck2 },
      { pos: [1, 15, 100] as const, tgt: [0, 0, 92] as const, col: 0x1affcc, int: 18, ang: 0.5, pen: 0.7, dist: 45, tex: ck1 },
    ];
    const spotLights: THREE.SpotLight[] = [];
    spotCfg.forEach((c) => {
      const sl = new THREE.SpotLight(c.col, c.int, c.dist, c.ang, c.pen, 1.5);
      sl.map = c.tex;
      sl.position.set(c.pos[0], c.pos[1], c.pos[2]);
      sl.target.position.set(c.tgt[0], c.tgt[1], c.tgt[2]);
      scene.add(sl);
      scene.add(sl.target);
      spotLights.push(sl);
    });

    // ── Standard Lighting ──
    scene.add(new THREE.AmbientLight(0x1a0f05, 0.5));
    const keyL = new THREE.DirectionalLight(0xffd090, 1.4);
    keyL.position.set(5, 12, 10);
    scene.add(keyL);

    const warmCfg = [
      { col: 0xffaa44, int: 25, dist: 40, pos: [6, 3, 15] as const },
      { col: 0xff8800, int: 18, dist: 36, pos: [-7, 2, 30] as const },
      { col: 0xffd700, int: 22, dist: 35, pos: [0, -3, 50] as const },
      { col: 0xffcc66, int: 14, dist: 42, pos: [4, 5, 70] as const },
      { col: 0xff9933, int: 16, dist: 38, pos: [-5, -2, 90] as const },
      { col: 0x1affcc, int: 5, dist: 28, pos: [2, 1, 42] as const },
    ];
    const warmLts: THREE.PointLight[] = [];
    warmCfg.forEach((c) => {
      const pl = new THREE.PointLight(c.col, c.int, c.dist);
      pl.position.set(c.pos[0], c.pos[1], c.pos[2]);
      scene.add(pl);
      warmLts.push(pl);
    });

    // ── Post-Processing ──
    const rect = canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    const composer = new EffectComposer(manager.renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), 0.35, 0.3, 0.6));

    const cinePass = new ShaderPass({
      uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(W, H) },
      },
      vertexShader: CinematicShader.vertexShader,
      fragmentShader: CinematicShader.fragmentShader,
    });
    composer.addPass(cinePass);
    composer.addPass(new OutputPass());

    // ── Reduced Motion Scale ──
    const MS = prefersReducedMotion ? 0.12 : 1.0;

    // ── Animation Loop ──
    manager.start((_dt, t) => {
      // Mouse smoothing
      const mx = targetMouseRef.current.x;
      const my = targetMouseRef.current.y;
      currentMouseRef.current.x += (mx - currentMouseRef.current.x) * 0.025;
      currentMouseRef.current.y += (my - currentMouseRef.current.y) * 0.025;

      // Camera drift — noise-based organic sway
      camera.position.z += CAM_SPD * MS;
      const cx = fbm(t * 0.04 * MS, 0) * 3.5 + currentMouseRef.current.x * 1.8;
      const cy = fbm(t * 0.03 * MS, 3) * 2.2 - currentMouseRef.current.y * 1.2;
      camera.position.x += (cx - camera.position.x) * 0.012;
      camera.position.y += (cy - camera.position.y) * 0.012;
      camera.lookAt(
        camera.position.x * 0.12 + currentMouseRef.current.x * 0.6,
        camera.position.y * 0.12 - currentMouseRef.current.y * 0.3,
        camera.position.z + 35
      );

      // Shapes animation + recycle
      allShapes.forEach((m) => {
        if (m.position.z < camera.position.z - 28) {
          m.position.z += BAND;
          m.position.x = (rng() - 0.5) * 26;
          m.position.y = (rng() - 0.5) * 14;
          if (m.userData) m.userData.initY = m.position.y;
        }
        const u = m.userData;
        if (!u?.rotSpd) return;
        m.rotation.x += u.rotSpd.x * MS;
        m.rotation.y += u.rotSpd.y * MS;
        m.rotation.z += u.rotSpd.z * MS;
        m.position.y = u.initY + fbm(t * u.fSpd * MS, u.seeds[0]) * u.fAmp * 2;
        const sx = 1 + fbm(t * u.bSpd[0] * MS, u.seeds[0]) * u.bAmp * 2;
        const sy = 1 + fbm(t * u.bSpd[1] * MS, u.seeds[1]) * u.bAmp * 2;
        const sz = 1 + fbm(t * u.bSpd[2] * MS, u.seeds[2]) * u.bAmp * 2;
        m.scale.set(sx, sy, sz);
      });

      // Lattices — recycle and gently rotate
      lattices.forEach((l) => {
        if (l.position.z < camera.position.z - 25) l.position.z += BAND;
        l.rotation.y += 0.0003 * MS;
        l.rotation.x = Math.sin(t * 0.05) * 0.02;
      });

      // Light orbs
      orbs.forEach((o) => {
        const u = o.userData;
        o.position.x = u.baseX + fbm(t * u.spdX, u.seed) * u.ampX;
        o.position.y = u.baseY + fbm(t * u.spdY, u.seed + 50) * u.ampY;
        o.position.z = u.baseZ + fbm(t * u.spdZ, u.seed + 100) * u.ampZ;
        if (o.position.z < camera.position.z - 20) {
          o.position.z += BAND;
          u.baseZ += BAND;
        }
      });

      // Particles — recycle
      const pa = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < PC; i++) {
        if (pa[i * 3 + 2] < camera.position.z - 22) {
          pa[i * 3 + 2] += BAND;
          pa[i * 3] = (rng() - 0.5) * 55;
          pa[i * 3 + 1] = (rng() - 0.5) * 30;
        }
      }
      pGeo.attributes.position.needsUpdate = true;

      // Uniforms
      pMat.uniforms.uTime.value = t;
      beamUni.uTime.value = t;
      causUni.uTime.value = t;
      orbUni.uTime.value = t;
      cinePass.uniforms.uTime.value = t;

      // Recycle volumetric elements
      beams.forEach((b) => {
        if (b.position.z < camera.position.z - 28) b.position.z += BAND;
      });
      caustics.forEach((c) => {
        if (c.position.z < camera.position.z - 22) c.position.z += BAND;
      });

      // Move lights with camera
      warmLts.forEach((pl, i) => {
        pl.position.z = warmCfg[i].pos[2] + camera.position.z;
        pl.position.x = warmCfg[i].pos[0] + Math.sin(t * 0.18 + i * 1.5) * 2;
        pl.position.y = warmCfg[i].pos[1] + Math.cos(t * 0.14 + i * 2.0) * 1.5;
      });
      spotLights.forEach((sl, i) => {
        sl.position.z = spotCfg[i].pos[2] + camera.position.z;
        sl.target.position.z = spotCfg[i].tgt[2] + camera.position.z;
      });
      keyL.position.z = 10 + camera.position.z;

      // Render with post-processing
      composer.render();
    });
  }, [prefersReducedMotion]);

  const cleanup = useCallback(() => {
    if (managerRef.current) {
      managerRef.current.dispose();
      managerRef.current = null;
    }
  }, []);

  useEffect(() => {
    init();
    return cleanup;
  }, [init, cleanup]);

  // Static fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, oklch(0.15 0.03 260) 0%, oklch(0.12 0.04 260) 50%, oklch(0.10 0.02 260) 100%)",
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/three-section-bg.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import * as THREE from "three";
import { ThreeCanvasManager } from "@/lib/three/three-canvas";
import { createEnvironmentMap } from "@/lib/three/environment";
import { fbm, mulberry32 } from "@/lib/three/fbm";
import {
  makeStar,
  makeOctFrame,
  makeOctPrism,
  makeArmillary,
  makeArabesque,
  makeCrossPlanes,
  makeRoseRing,
} from "@/lib/three/geometry";
import { metalGoldMat } from "@/lib/three/materials";
import { ParticleShader, SkyShader } from "@/lib/three/shaders";

/* ─── Types ─── */
export type SectionTheme = "hero" | "events" | "stats" | "testimonials" | "cta" | "categories" | "footer";

interface ThreeSectionBgProps {
  theme?: SectionTheme;
  className?: string;
}

/* ─── Simpler materials for section backgrounds (better performance) ─── */
function createSectionMaterials() {
  const goldStd = new THREE.MeshStandardMaterial({
    color: 0xdaa520,
    metalness: 0.9,
    roughness: 0.15,
    emissive: 0x3a2500,
    emissiveIntensity: 0.15,
    side: THREE.DoubleSide,
  });

  const amberStd = new THREE.MeshStandardMaterial({
    color: 0xc47f17,
    metalness: 0.85,
    roughness: 0.2,
    emissive: 0x2a1a00,
    emissiveIntensity: 0.1,
    side: THREE.DoubleSide,
  });

  const goldTrans = new THREE.MeshStandardMaterial({
    color: 0xd4a843,
    metalness: 0.3,
    roughness: 0.1,
    transparent: true,
    opacity: 0.55,
    emissive: 0x5a4000,
    emissiveIntensity: 0.08,
    side: THREE.DoubleSide,
  });

  const tealTrans = new THREE.MeshStandardMaterial({
    color: 0x1a7a6d,
    metalness: 0.2,
    roughness: 0.15,
    transparent: true,
    opacity: 0.45,
    emissive: 0x0a3a30,
    emissiveIntensity: 0.08,
    side: THREE.DoubleSide,
  });

  const roseTrans = new THREE.MeshStandardMaterial({
    color: 0xc4836a,
    metalness: 0.25,
    roughness: 0.12,
    transparent: true,
    opacity: 0.5,
    emissive: 0x4a2a10,
    emissiveIntensity: 0.08,
    side: THREE.DoubleSide,
  });

  return {
    metals: [goldStd, amberStd],
    glass: [goldTrans, tealTrans, roseTrans],
  };
}

const SECTION_MATS = createSectionMaterials();

/* ─── Reduced motion detection (SSR-safe) ─── */
const reducedMotionQuery =
  typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

function subscribeReducedMotion(cb: () => void) {
  const mql = reducedMotionQuery;
  if (!mql) return () => {};
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
function getReducedMotionSnapshot() {
  return reducedMotionQuery?.matches ?? false;
}
function getReducedMotionServerSnapshot() {
  return false;
}
function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot);
}

/* ─── Scene Configuration per Theme ─── */
interface ShapePlacement {
  type: "star8" | "star6" | "star10" | "octFrame" | "armillary" | "arabesque" | "cross" | "rose";
  x: number; y: number; z: number;
  scale: number;
  matType: "metal" | "glass";
  rotation: [number, number, number];
}

interface LightPlacement {
  type: "ambient" | "directional" | "point";
  color: number;
  intensity: number;
  position?: [number, number, number];
}

interface SceneConfig {
  particleCount: number;
  particleSeed: number;
  fogDensity: number;
  fogColor: number;
  cameraZ: number;
  shapes: ShapePlacement[];
  lights: LightPlacement[];
}

const PI = Math.PI;

const THEME_CONFIGS: Record<SectionTheme, SceneConfig> = {
  hero: {
    particleCount: 600, particleSeed: 42,
    fogDensity: 0.012, fogColor: 0x050210, cameraZ: 12,
    shapes: [
      { type: "star8", x: -3, y: 1.5, z: 5, scale: 1.8, matType: "glass", rotation: [0.3, 0.5, 0] },
      { type: "star8", x: 3, y: -1, z: 8, scale: 1.4, matType: "glass", rotation: [0.8, 0.2, 0.5] },
      { type: "octFrame", x: 0, y: 0, z: 10, scale: 2.2, matType: "metal", rotation: [0.1, 0.3, 0] },
      { type: "armillary", x: -2, y: -1.5, z: 6, scale: 1.0, matType: "metal", rotation: [0.5, 0.8, 0.3] },
      { type: "star6", x: 4, y: 2, z: 4, scale: 1.0, matType: "glass", rotation: [0.2, 0.7, 0.1] },
      { type: "rose", x: -4, y: -2, z: 7, scale: 0.9, matType: "metal", rotation: [0.6, 0.1, 0.4] },
      { type: "cross", x: 2, y: 2.5, z: 3, scale: 1.2, matType: "glass", rotation: [0.4, 0.6, 0.2] },
      { type: "star10", x: -1, y: 3, z: 9, scale: 0.8, matType: "glass", rotation: [0.7, 0.3, 0.5] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.5 },
      { type: "directional", color: 0xffd090, intensity: 1.4, position: [5, 12, 10] },
      { type: "point", color: 0xffaa44, intensity: 25, position: [6, 3, 8] },
      { type: "point", color: 0x1affcc, intensity: 5, position: [2, 1, 6] },
    ],
  },
  events: {
    particleCount: 400, particleSeed: 43,
    fogDensity: 0.015, fogColor: 0x040108, cameraZ: 10,
    shapes: [
      { type: "star8", x: -2, y: 1, z: 6, scale: 1.5, matType: "glass", rotation: [0.2, 0.4, 0] },
      { type: "octFrame", x: 2, y: -0.5, z: 8, scale: 2.0, matType: "metal", rotation: [0.5, 0.1, 0.3] },
      { type: "arabesque", x: 0, y: 2, z: 4, scale: 0.8, matType: "metal", rotation: [0.3, 0.6, 0.1] },
      { type: "star6", x: -3, y: -1.5, z: 7, scale: 1.2, matType: "glass", rotation: [0.8, 0.2, 0.4] },
      { type: "cross", x: 3, y: 1.5, z: 5, scale: 1.0, matType: "glass", rotation: [0.1, 0.5, 0.2] },
      { type: "armillary", x: 0, y: -2, z: 9, scale: 0.7, matType: "metal", rotation: [0.4, 0.8, 0.6] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.4 },
      { type: "directional", color: 0xffd090, intensity: 1.2, position: [4, 10, 8] },
      { type: "point", color: 0xffaa44, intensity: 20, position: [5, 2, 6] },
      { type: "point", color: 0xffd700, intensity: 15, position: [-4, 3, 10] },
    ],
  },
  stats: {
    particleCount: 300, particleSeed: 44,
    fogDensity: 0.014, fogColor: 0x030108, cameraZ: 10,
    shapes: [
      { type: "star8", x: 0, y: 0, z: 7, scale: 2.5, matType: "glass", rotation: [0.1, 0.2, 0] },
      { type: "star8", x: -3, y: 1.5, z: 5, scale: 1.2, matType: "metal", rotation: [0.4, 0.6, 0.2] },
      { type: "star8", x: 3, y: -1, z: 9, scale: 1.0, matType: "glass", rotation: [0.7, 0.3, 0.5] },
      { type: "octFrame", x: -1, y: -2, z: 6, scale: 1.8, matType: "metal", rotation: [0.2, 0.5, 0.1] },
      { type: "rose", x: 2, y: 2, z: 4, scale: 0.8, matType: "metal", rotation: [0.5, 0.1, 0.3] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.4 },
      { type: "directional", color: 0xffd090, intensity: 1.0, position: [3, 8, 10] },
      { type: "point", color: 0xffd700, intensity: 18, position: [0, 3, 8] },
    ],
  },
  testimonials: {
    particleCount: 250, particleSeed: 45,
    fogDensity: 0.016, fogColor: 0x040108, cameraZ: 10,
    shapes: [
      { type: "star6", x: -2, y: 1, z: 6, scale: 1.3, matType: "glass", rotation: [0.3, 0.5, 0.1] },
      { type: "rose", x: 2, y: -0.5, z: 8, scale: 1.0, matType: "metal", rotation: [0.5, 0.2, 0.4] },
      { type: "star8", x: 0, y: 2, z: 4, scale: 1.5, matType: "glass", rotation: [0.1, 0.4, 0.2] },
      { type: "cross", x: -3, y: -1.5, z: 7, scale: 0.9, matType: "glass", rotation: [0.6, 0.1, 0.3] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.35 },
      { type: "directional", color: 0xffd090, intensity: 1.0, position: [4, 8, 6] },
      { type: "point", color: 0xffcc66, intensity: 14, position: [-3, 2, 8] },
    ],
  },
  cta: {
    particleCount: 400, particleSeed: 46,
    fogDensity: 0.012, fogColor: 0x050210, cameraZ: 10,
    shapes: [
      { type: "star8", x: 0, y: 0, z: 6, scale: 2.2, matType: "glass", rotation: [0.2, 0.3, 0] },
      { type: "octFrame", x: -3, y: 1.5, z: 8, scale: 2.0, matType: "metal", rotation: [0.4, 0.6, 0.2] },
      { type: "armillary", x: 3, y: -1, z: 5, scale: 1.0, matType: "metal", rotation: [0.6, 0.2, 0.4] },
      { type: "star10", x: -1, y: -2, z: 4, scale: 0.9, matType: "glass", rotation: [0.3, 0.7, 0.1] },
      { type: "arabesque", x: 2, y: 2, z: 9, scale: 0.7, matType: "metal", rotation: [0.5, 0.3, 0.6] },
      { type: "cross", x: -2, y: 0.5, z: 7, scale: 1.1, matType: "glass", rotation: [0.1, 0.4, 0.3] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.45 },
      { type: "directional", color: 0xffd090, intensity: 1.3, position: [5, 10, 8] },
      { type: "point", color: 0xffaa44, intensity: 22, position: [4, 2, 6] },
      { type: "point", color: 0xffd700, intensity: 18, position: [-5, -1, 10] },
    ],
  },
  categories: {
    particleCount: 350, particleSeed: 47,
    fogDensity: 0.014, fogColor: 0x040108, cameraZ: 10,
    shapes: [
      { type: "star6", x: -2, y: 1, z: 6, scale: 1.4, matType: "glass", rotation: [0.4, 0.6, 0.2] },
      { type: "star8", x: 2, y: -1, z: 8, scale: 1.8, matType: "metal", rotation: [0.2, 0.4, 0.1] },
      { type: "octFrame", x: 0, y: 0, z: 5, scale: 1.6, matType: "metal", rotation: [0.5, 0.1, 0.3] },
      { type: "arabesque", x: -3, y: -1.5, z: 7, scale: 0.8, matType: "metal", rotation: [0.3, 0.7, 0.5] },
      { type: "rose", x: 3, y: 1.5, z: 4, scale: 0.9, matType: "metal", rotation: [0.6, 0.2, 0.4] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.4 },
      { type: "directional", color: 0xffd090, intensity: 1.1, position: [4, 9, 7] },
      { type: "point", color: 0xffaa44, intensity: 18, position: [3, 2, 8] },
    ],
  },
  footer: {
    particleCount: 150, particleSeed: 48,
    fogDensity: 0.018, fogColor: 0x030108, cameraZ: 10,
    shapes: [
      { type: "star8", x: -1, y: 0.5, z: 7, scale: 1.2, matType: "glass", rotation: [0.1, 0.3, 0] },
      { type: "octFrame", x: 2, y: -0.5, z: 9, scale: 1.5, matType: "metal", rotation: [0.3, 0.5, 0.2] },
      { type: "star6", x: -2, y: -1, z: 5, scale: 0.8, matType: "glass", rotation: [0.5, 0.2, 0.4] },
    ],
    lights: [
      { type: "ambient", color: 0x1a0f05, intensity: 0.3 },
      { type: "directional", color: 0xffd090, intensity: 0.8, position: [3, 6, 8] },
      { type: "point", color: 0xffaa44, intensity: 12, position: [0, 2, 6] },
    ],
  },
};

/* ─── Main Component ─── */
function ThreeSectionBg({ theme = "hero", className }: ThreeSectionBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const managerRef = useRef<ThreeCanvasManager | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  // Mouse handler
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || managerRef.current) return;

    const config = THEME_CONFIGS[theme] ?? THEME_CONFIGS.hero;
    const rng = mulberry32(config.particleSeed);

    const manager = new ThreeCanvasManager(canvas, {
      fogColor: config.fogColor,
      fogDensity: config.fogDensity,
      toneMappingExposure: 1.0,
    });
    managerRef.current = manager;

    const { scene, camera } = manager;
    camera.position.set(0, 0, config.cameraZ);

    // Environment
    scene.environment = createEnvironmentMap(manager.renderer);

    // Sky (dark gradient)
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      vertexShader: SkyShader.vertexShader,
      fragmentShader: SkyShader.fragmentShader,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(200, 16, 16), skyMat));

    // ── Add Shapes ──
    const animShapes: THREE.Object3D[] = [];

    config.shapes.forEach((shapeCfg) => {
      let obj: THREE.Object3D;
      const s = shapeCfg.scale;

      const getMaterial = (type: string) => {
        const arr = type === "metal" ? SECTION_MATS.metals : SECTION_MATS.glass;
        return arr[Math.floor(rng() * arr.length)];
      };
      const mat = getMaterial(shapeCfg.matType);

      switch (shapeCfg.type) {
        case "star8": obj = new THREE.Mesh(makeStar(8, s, s * 0.42, s * 0.1), mat); break;
        case "star6": obj = new THREE.Mesh(makeStar(6, s, s * 0.5, s * 0.08), mat); break;
        case "star10": obj = new THREE.Mesh(makeStar(10, s, s * 0.68, s * 0.07), mat); break;
        case "octFrame": obj = new THREE.Mesh(makeOctFrame(s, s * 0.35, s * 0.04, s * 0.06), mat); break;
        case "armillary": obj = makeArmillary(s * 0.7, 5, metalGoldMat); break;
        case "arabesque": obj = new THREE.Mesh(makeArabesque(s * 0.4, s * 0.08, 2, 3), mat); break;
        case "cross": obj = makeCrossPlanes(s, 3, mat); break;
        case "rose": obj = makeRoseRing(s * 0.6, s * 0.15, 8, metalGoldMat); break;
        default: obj = new THREE.Mesh(makeStar(8, s, s * 0.42, s * 0.1), mat); break;
      }

      obj.position.set(shapeCfg.x, shapeCfg.y, shapeCfg.z);
      obj.rotation.set(...shapeCfg.rotation);

      // Animation data
      const sp = shapeCfg.matType === "glass" ? 0.5 : 0.9;
      obj.userData = {
        rotSpd: new THREE.Vector3(
          (rng() - 0.5) * 0.006 * sp,
          (rng() - 0.5) * 0.006 * sp,
          (rng() - 0.5) * 0.004 * sp
        ),
        fSpd: 0.12 + rng() * 0.2,
        fAmp: 0.15 + rng() * 0.5,
        initY: shapeCfg.y,
        seeds: [rng() * 100, rng() * 100, rng() * 100],
      };

      scene.add(obj);
      animShapes.push(obj);
    });

    // ── Particles ──
    const PC = config.particleCount;
    const pGeo = new THREE.BufferGeometry();
    const pP = new Float32Array(PC * 3);
    const pSz = new Float32Array(PC);
    const pPh = new Float32Array(PC);
    const pBr = new Float32Array(PC);
    const pTp = new Float32Array(PC);

    for (let i = 0; i < PC; i++) {
      pP[i * 3] = (rng() - 0.5) * 30;
      pP[i * 3 + 1] = (rng() - 0.5) * 20;
      pP[i * 3 + 2] = (rng() - 0.5) * 30 + config.cameraZ;
      const isSpark = rng() < 0.08;
      const isTeal = rng() < 0.12;
      pSz[i] = isSpark ? 1.5 + rng() * 2.5 : 0.2 + rng() * 0.6;
      pPh[i] = rng() * Math.PI * 2;
      pBr[i] = isSpark ? 0.7 + rng() * 0.3 : 0.1 + rng() * 0.35;
      pTp[i] = isTeal ? 1 : 0;
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pP, 3));
    pGeo.setAttribute("aSize", new THREE.BufferAttribute(pSz, 1));
    pGeo.setAttribute("aPhase", new THREE.BufferAttribute(pPh, 1));
    pGeo.setAttribute("aBright", new THREE.BufferAttribute(pBr, 1));
    pGeo.setAttribute("aType", new THREE.BufferAttribute(pTp, 1));

    const pMat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uGold: { value: new THREE.Color(0xffd700) },
        uTeal: { value: new THREE.Color(0x1affcc) },
        uWarm: { value: new THREE.Color(0xfff0c0) },
      },
      vertexShader: ParticleShader.vertexShader,
      fragmentShader: ParticleShader.fragmentShader,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    // ── Lights ──
    config.lights.forEach((lCfg) => {
      if (lCfg.type === "ambient") {
        scene.add(new THREE.AmbientLight(lCfg.color, lCfg.intensity));
      } else if (lCfg.type === "directional" && lCfg.position) {
        const dl = new THREE.DirectionalLight(lCfg.color, lCfg.intensity);
        dl.position.set(...lCfg.position);
        scene.add(dl);
      } else if (lCfg.type === "point" && lCfg.position) {
        const pl = new THREE.PointLight(lCfg.color, lCfg.intensity, 40);
        pl.position.set(...lCfg.position);
        scene.add(pl);
      }
    });

    // ── Reduced Motion Scale ──
    const MS = prefersReducedMotion ? 0.12 : 1.0;

    // ── Animation Loop ──
    manager.start((_dt, elapsed) => {
      const t = elapsed * MS;

      // Camera subtle sway
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      camera.position.x += (fbm(t * 0.03, 0) * 2 + (mx - 0.5) * 1.5 - camera.position.x) * 0.01;
      camera.position.y += (fbm(t * 0.025, 3) * 1.5 - (my - 0.5) * 0.8 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, config.cameraZ + 10);

      // Animate shapes
      animShapes.forEach((obj) => {
        const u = obj.userData;
        if (!u?.rotSpd) return;
        obj.rotation.x += u.rotSpd.x * MS;
        obj.rotation.y += u.rotSpd.y * MS;
        obj.rotation.z += u.rotSpd.z * MS;
        obj.position.y = u.initY + fbm(t * u.fSpd, u.seeds[0]) * u.fAmp;

        // Gentle breathing scale
        const s = 1 + fbm(t * 0.15, u.seeds[1]) * 0.03;
        obj.scale.set(s, s, s);
      });

      // Particle time uniform
      pMat.uniforms.uTime.value = t;
    });
  }, [theme, prefersReducedMotion]);

  const cleanup = useCallback(() => {
    if (managerRef.current) {
      managerRef.current.dispose();
      managerRef.current = null;
    }
  }, []);

  useEffect(() => {
    init();
    return cleanup;
  }, [init, cleanup]);

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={className}
        aria-hidden="true"
        role="presentation"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
          background: "linear-gradient(to bottom, oklch(0.15 0.03 260) 0%, oklch(0.12 0.04 260) 100%)",
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      role="presentation"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}

export { ThreeSectionBg };
export type { SectionTheme as ThreeSectionTheme };


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/tilt-card.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glowColor?: string;
}

export function TiltCard({
  children,
  className,
  tiltAmount = 10,
  glowColor = "rgba(201, 168, 76, 0.15)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate percentage position within card
      const percentX = ((e.clientX - rect.left) / rect.width) * 100;
      const percentY = ((e.clientY - rect.top) / rect.height) * 100;

      // Calculate rotation (invert Y axis for natural tilt direction)
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltAmount;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * tiltAmount;

      setTilt({ rotateX, rotateY });
      setGlowPosition({ x: percentX, y: percentY });
    },
    [tiltAmount]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        {children}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`
            : "none",
          opacity: isHovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
}

export default TiltCard;


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/toast.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

// ═══════════════════════════════════════════════════════════════
// FILE: src/components/ui/tooltip.tsx
// ═══════════════════════════════════════════════════════════════
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }


// ██████████████████████████████████████████████████████████████
// ██  Section 4: 3D / THREE.JS BACKGROUND LIB
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/three/environment.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Three.js Environment Map Generator
 * Creates a warm gold environment for material reflections
 */

import * as THREE from "three";

export function createEnvironmentMap(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envS = new THREE.Scene();
  envS.background = new THREE.Color(0x0d0800);

  const ePos = [
    [6, 6, 6], [-6, 4, -6], [0, 12, 0], [6, -4, 6], [-6, -6, 6], [0, 0, -10],
    [5, 3, -5], [-5, -3, 5], [0, 8, 4], [4, -6, -4], [-4, 5, 2], [3, 1, 8],
    [-3, 7, -3], [2, -5, 6], [0, -8, 0], [-8, 2, 3], [7, -3, -7],
  ];

  ePos.forEach((p) => {
    const pl = new THREE.PointLight(0xffd080, 40, 30);
    pl.position.set(p[0], p[1], p[2]);
    envS.add(pl);
  });

  envS.add(new THREE.AmbientLight(0x1a0f00, 3));

  const envMap = pmrem.fromScene(envS, 0.04).texture;
  pmrem.dispose();

  return envMap;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/three/fbm.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Multi-octave sine noise for organic motion
 * Ported from the Golden Geometric Visions reference
 */

export function fbm(t: number, s = 0): number {
  return (
    Math.sin(t + s) * 0.38 +
    Math.sin(t * 2.37 + s * 1.73) * 0.27 +
    Math.sin(t * 4.13 + s * 0.31) * 0.17 +
    Math.sin(t * 7.29 + s * 2.41) * 0.1 +
    Math.sin(t * 11.07 + s * 3.67) * 0.05 +
    Math.sin(t * 16.3 + s * 5.1) * 0.03
  );
}

/** Deterministic PRNG — Mulberry32 seeded */
export function mulberry32(seed: number): () => number {
  let state = seed;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/three/geometry.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Islamic Geometric Geometry Generators for Three.js
 * Ported from the Golden Geometric Visions reference
 * All radii/dimensions clamped with EPS for safety
 */

import * as THREE from "three";

const EPS = 0.001;
const PI = Math.PI;

/* ─── N-pointed star polygon with correct Islamic proportions ─── */
export function makeStar(pts: number, outerR: number, innerR: number, depth: number): THREE.ExtrudeGeometry {
  outerR = Math.max(EPS, outerR);
  innerR = Math.max(EPS, innerR);
  depth = Math.max(EPS, depth);

  const n = pts * 2;
  const shape = new THREE.Shape();
  for (let i = 0; i < n; i++) {
    const a = (i / n) * PI * 2 - PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();

  const g = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.035,
    bevelSegments: 2,
  });
  g.computeVertexNormals();
  g.translate(0, 0, -depth / 2);
  return g;
}

/* ─── Octagonal frame ring ─── */
export function makeOctFrame(oR: number, iR: number, d: number, th: number): THREE.ExtrudeGeometry {
  oR = Math.max(EPS, oR);
  iR = Math.max(EPS, iR);
  d = Math.max(EPS, d);
  th = Math.max(EPS, th);

  const mR = (oR + iR) / 2;
  const shape = new THREE.Shape();
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * PI * 2 - PI / 2;
    const r = i % 2 === 0 ? mR + th : mR - th;
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();

  const g = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false });
  g.computeVertexNormals();
  g.translate(0, 0, -d / 2);
  return g;
}

/* ─── Octagonal prism — 8-sided column ─── */
export function makeOctPrism(radius: number, height: number): THREE.CylinderGeometry {
  radius = Math.max(EPS, radius);
  height = Math.max(EPS, height);
  return new THREE.CylinderGeometry(radius, radius, height, 8);
}

/* ─── Armillary sphere — concentric tilted rings ─── */
export function makeArmillary(rad: number, n: number, metalMat: THREE.Material): THREE.Group {
  const grp = new THREE.Group();
  const rng = () => Math.random(); // intentional random for visual variety
  for (let i = 0; i < n; i++) {
    const r = Math.max(EPS, rad * (0.4 + i * 0.22));
    const tube = Math.max(EPS, 0.022 + rng() * 0.018);
    const geo = new THREE.TorusGeometry(r, tube, 10, 80);
    const ring = new THREE.Mesh(geo, metalMat);
    ring.rotation.x = (i / n) * PI + rng() * 0.5;
    ring.rotation.y = (i / n) * PI * 0.7 + rng() * 0.6;
    grp.add(ring);
  }
  return grp;
}

/* ─── Arabesque torus knot ─── */
export function makeArabesque(rad: number, tube: number, p: number, q: number): THREE.TorusKnotGeometry {
  return new THREE.TorusKnotGeometry(Math.max(EPS, rad), Math.max(EPS, tube), 140, 18, p, q);
}

/* ─── Intersecting planes — thin glass planes at regular angular intervals ─── */
export function makeCrossPlanes(radius: number, count: number, mat: THREE.Material): THREE.Group {
  const grp = new THREE.Group();
  const h = Math.max(EPS, radius * 2);
  const w = Math.max(EPS, radius * 2);
  for (let i = 0; i < count; i++) {
    const geo = new THREE.PlaneGeometry(w, h);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.y = (i / count) * PI;
    grp.add(mesh);
  }
  return grp;
}

/* ─── Geometric rose ring ─── */
export function makeRoseRing(majorR: number, minorR: number, petals: number, metalMat: THREE.Material): THREE.Group {
  const grp = new THREE.Group();
  for (let i = 0; i < petals; i++) {
    const angle = (i / petals) * PI * 2;
    const petalR = Math.max(EPS, minorR * 0.5);
    const geo = new THREE.SphereGeometry(petalR, 8, 8);
    const mesh = new THREE.Mesh(geo, metalMat);
    mesh.position.set(Math.cos(angle) * majorR, 0, Math.sin(angle) * majorR);
    mesh.scale.set(1, 0.4, 0.6);
    grp.add(mesh);
  }
  // Central ring
  const ringGeo = new THREE.TorusGeometry(Math.max(EPS, majorR), Math.max(EPS, minorR * 0.12), 10, 64);
  grp.add(new THREE.Mesh(ringGeo, metalMat));
  return grp;
}

/* ─── 3D Volumetric Lattice Screen ─── */
export function createLattice3D(
  x: number, y: number, z: number,
  size: number, gridN: number, layers: number,
  rotY: number, lineMat: THREE.LineBasicMaterial
): THREE.Group {
  const grp = new THREE.Group();
  const cellW = size / gridN;
  const layerGap = 0.2;

  for (let l = 0; l < layers; l++) {
    const pts: number[] = [];
    const zOff = (l - (layers - 1) / 2) * layerGap;

    for (let gi = 0; gi < gridN; gi++) {
      for (let gj = 0; gj < gridN; gj++) {
        const cx = (gi - gridN / 2 + 0.5) * cellW;
        const cy = (gj - gridN / 2 + 0.5) * cellW;
        const oR = cellW * 0.38;
        const iR = cellW * 0.16;

        /* 8-pointed star outline */
        for (let k = 0; k < 16; k++) {
          const a1 = (k / 16) * PI * 2 - PI / 2;
          const a2 = ((k + 1) / 16) * PI * 2 - PI / 2;
          const r1 = k % 2 === 0 ? oR : iR;
          const r2 = (k + 1) % 2 === 0 ? oR : iR;
          pts.push(cx + Math.cos(a1) * r1, cy + Math.sin(a1) * r1, zOff);
          pts.push(cx + Math.cos(a2) * r2, cy + Math.sin(a2) * r2, zOff);
        }

        /* Connecting ribs */
        if (gi < gridN - 1) {
          pts.push(cx + oR, cy, zOff, cx + cellW - oR, cy, zOff);
        }
        if (gj < gridN - 1) {
          pts.push(cx, cy + oR, zOff, cx, cy + cellW - oR, zOff);
        }
        /* Diagonal ribs */
        const dR = oR * 0.72;
        if (gi < gridN - 1 && gj < gridN - 1) {
          pts.push(cx + dR * 0.707, cy + dR * 0.707, zOff, cx + cellW - dR * 0.707, cy + cellW - dR * 0.707, zOff);
        }
        if (gi < gridN - 1 && gj > 0) {
          pts.push(cx + dR * 0.707, cy - dR * 0.707, zOff, cx + cellW - dR * 0.707, cy - cellW + dR * 0.707, zOff);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    const opacity = 0.55 - l * 0.07;
    const mat = new THREE.LineBasicMaterial({ color: 0xdaa520, transparent: true, opacity });
    grp.add(new THREE.LineSegments(geo, mat));
  }

  /* Inter-layer vertical connections */
  const cPts: number[] = [];
  for (let gi = 0; gi < gridN; gi++) {
    for (let gj = 0; gj < gridN; gj++) {
      const cx = (gi - gridN / 2 + 0.5) * cellW;
      const cy = (gj - gridN / 2 + 0.5) * cellW;
      cPts.push(cx, cy, -((layers - 1) / 2) * layerGap);
      cPts.push(cx, cy, ((layers - 1) / 2) * layerGap);
    }
  }
  const cGeo = new THREE.BufferGeometry();
  cGeo.setAttribute("position", new THREE.Float32BufferAttribute(cPts, 3));
  grp.add(new THREE.LineSegments(cGeo, new THREE.LineBasicMaterial({ color: 0xdaa520, transparent: true, opacity: 0.18 })));

  grp.position.set(x, y, z);
  grp.rotation.y = rotY || 0;
  return grp;
}

/* ─── Spot Light Cookie Texture (Islamic star pattern) ─── */
export function mkCookie(sz: number): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = sz;
  const x = c.getContext("2d")!;
  x.fillStyle = "#000";
  x.fillRect(0, 0, sz, sz);
  x.fillStyle = "#fff";

  const g = 5;
  const cl = sz / g;
  const oR = cl * 0.36;
  const iR = cl * 0.15;

  for (let gi = 0; gi < g; gi++) {
    for (let gj = 0; gj < g; gj++) {
      const cx = cl * 0.5 + gi * cl;
      const cy = cl * 0.5 + gj * cl;
      x.beginPath();
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * PI * 2;
        const r = k % 2 === 0 ? oR : iR;
        if (k === 0) x.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        else x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
      x.closePath();
      x.fill();
    }
  }

  x.strokeStyle = "#fff";
  x.lineWidth = sz * 0.006;
  for (let gi = 0; gi < g; gi++) {
    for (let gj = 0; gj < g; gj++) {
      const cx = cl * 0.5 + gi * cl;
      const cy = cl * 0.5 + gj * cl;
      if (gi < g - 1) {
        x.beginPath();
        x.moveTo(cx, cy);
        x.lineTo(cx + cl, cy);
        x.stroke();
      }
      if (gj < g - 1) {
        x.beginPath();
        x.moveTo(cx, cy);
        x.lineTo(cx, cy + cl);
        x.stroke();
      }
    }
  }
  return new THREE.CanvasTexture(c);
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/three/materials.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Three.js Material Definitions for Islamic Geometric 3D Scenes
 * Premium glass and metal materials with environment mapping
 */

import * as THREE from "three";

/* ═══════════════════════════════
   Glass Materials — Transmission, IOR, Dispersion
   ═══════════════════════════════ */

export const goldGlass = new THREE.MeshPhysicalMaterial({
  color: 0xd4a843,
  metalness: 0.05,
  roughness: 0.05,
  transmission: 0.82,
  thickness: 1.5,
  ior: 1.45,
  dispersion: 0.1,
  attenuationColor: new THREE.Color(0xd4a843),
  attenuationDistance: 1.5,
  envMapIntensity: 2.8,
  transparent: true,
  side: THREE.DoubleSide,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0xffe8b0),
});

export const amberGlass = new THREE.MeshPhysicalMaterial({
  color: 0xb8722d,
  metalness: 0.08,
  roughness: 0.06,
  transmission: 0.78,
  thickness: 2.0,
  ior: 1.52,
  dispersion: 0.07,
  attenuationColor: new THREE.Color(0xb8722d),
  attenuationDistance: 1.3,
  envMapIntensity: 2.2,
  transparent: true,
  side: THREE.DoubleSide,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0xffcc80),
});

export const roseGoldGlass = new THREE.MeshPhysicalMaterial({
  color: 0xc4836a,
  metalness: 0.06,
  roughness: 0.05,
  transmission: 0.8,
  thickness: 1.6,
  ior: 1.48,
  dispersion: 0.06,
  attenuationColor: new THREE.Color(0xc4836a),
  attenuationDistance: 1.6,
  iridescence: 0.3,
  iridescenceIOR: 1.3,
  envMapIntensity: 2.5,
  transparent: true,
  side: THREE.DoubleSide,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0xffd0b0),
});

export const deepAmberGlass = new THREE.MeshPhysicalMaterial({
  color: 0x8b5a2b,
  metalness: 0.1,
  roughness: 0.07,
  transmission: 0.72,
  thickness: 2.5,
  ior: 1.55,
  dispersion: 0.12,
  attenuationColor: new THREE.Color(0x8b5a2b),
  attenuationDistance: 0.9,
  envMapIntensity: 1.8,
  transparent: true,
  side: THREE.DoubleSide,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0xffb860),
});

export const tealGlass = new THREE.MeshPhysicalMaterial({
  color: 0x1a7a6d,
  metalness: 0.05,
  roughness: 0.04,
  transmission: 0.8,
  thickness: 1.8,
  ior: 1.5,
  dispersion: 0.08,
  attenuationColor: new THREE.Color(0x1a7a6d),
  attenuationDistance: 1.3,
  iridescence: 0.2,
  iridescenceIOR: 1.25,
  envMapIntensity: 2.3,
  transparent: true,
  side: THREE.DoubleSide,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0x80ffd0),
});

/* ═══════════════════════════════
   Metal Materials
   ═══════════════════════════════ */

export const metalGoldMat = new THREE.MeshPhysicalMaterial({
  color: 0xdaa520,
  metalness: 0.93,
  roughness: 0.08,
  envMapIntensity: 3.5,
  side: THREE.DoubleSide,
  emissive: 0x3a2500,
  emissiveIntensity: 0.2,
  clearcoat: 0.4,
  clearcoatRoughness: 0.15,
});

export const metalAmberMat = new THREE.MeshPhysicalMaterial({
  color: 0xc47f17,
  metalness: 0.88,
  roughness: 0.12,
  envMapIntensity: 2.8,
  side: THREE.DoubleSide,
  emissive: 0x2a1a00,
  emissiveIntensity: 0.12,
});

export const wireGold = new THREE.MeshBasicMaterial({
  color: 0xffd700,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
});

/* ═══════════════════════════════
   Material Arrays for Random Selection
   ═══════════════════════════════ */

export const glassArr = [goldGlass, amberGlass, roseGoldGlass, deepAmberGlass, tealGlass];
export const solidArr = [metalGoldMat, metalAmberMat];


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/three/shaders.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Custom GLSL Shaders for Three.js Post-Processing
 * Cinematic color grading, caustics, volumetric beams, particles, orbs
 */

export const SkyShader = {
  vertexShader: `
    varying vec3 vP;
    void main() {
      vP = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vP;
    void main() {
      float y = normalize(vP).y;
      vec3 top = vec3(0.02, 0.04, 0.12);
      vec3 mid = vec3(0.008, 0.015, 0.05);
      vec3 bot = vec3(0.001, 0.001, 0.005);
      float t = y * 0.5 + 0.5;
      vec3 c = mix(bot, mid, smoothstep(0.0, 0.4, t));
      c = mix(c, top, smoothstep(0.4, 1.0, t));
      gl_FragColor = vec4(c, 1.0);
    }
  `,
};

export const OrbShader = {
  vertexShader: `
    varying vec3 vN;
    void main() {
      vN = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vN;
    uniform vec3 uColor;
    void main() {
      float rim = pow(1.0 - abs(vN.z), 3.0);
      float core = 1.0 - smoothstep(0.0, 0.5, 1.0 - abs(vN.z));
      gl_FragColor = vec4(uColor * 2.0, rim * 0.7 + core * 0.3);
    }
  `,
};

export const BeamShader = {
  vertexShader: `
    varying vec2 vUv;
    varying float vD;
    void main() {
      vUv = uv;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vD = -mv.z;
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying float vD;
    uniform float uTime;
    uniform float uOp;
    uniform vec3 uColor;
    void main() {
      float hF = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
      float vF = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.4, vUv.y);
      float pulse = 0.55 + 0.45 * sin(uTime * 0.3 + vUv.y * 3.0);
      float dF = smoothstep(150.0, 4.0, vD);
      float a = hF * vF * pulse * dF * uOp;
      gl_FragColor = vec4(uColor, a);
    }
  `,
};

export const CausticShader = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uColor;

    vec2 h2(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
      return fract(sin(p) * 43758.5);
    }

    float vor(vec2 p, float t) {
      vec2 n = floor(p), f = fract(p);
      float d = 1.0;
      for (int j = -1; j <= 1; j++)
        for (int i = -1; i <= 1; i++) {
          vec2 g = vec2(float(i), float(j)), o = h2(n + g);
          o = 0.5 + 0.5 * sin(t * 0.35 + 6.28 * o);
          d = min(d, length(g + o - f));
        }
      return d;
    }

    void main() {
      vec2 p = vUv * 5.0;
      float v1 = vor(p, uTime), v2 = vor(p * 1.5 + 3.0, uTime * 1.3);
      float c = pow(max(1.0 - v1, 0.0), 3.5) * 0.6 + pow(max(1.0 - v2, 0.0), 3.5) * 0.4;
      float e = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) *
                smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
      gl_FragColor = vec4(uColor, c * e * 0.08);
    }
  `,
};

export const ParticleShader = {
  vertexShader: `
    attribute float aSize;
    attribute float aPhase;
    attribute float aBright;
    attribute float aType;
    uniform float uTime;
    varying float vAlpha;
    varying float vBr;
    varying float vType;

    void main() {
      vec3 pos = position;
      float t = uTime;
      pos.y += sin(t * 0.22 + aPhase) * 0.7 + sin(t * 0.57 + aPhase * 1.7) * 0.3 + sin(t * 1.1 + aPhase * 0.4) * 0.12;
      pos.x += cos(t * 0.17 + aPhase * 1.3) * 0.5 + cos(t * 0.43 + aPhase * 0.6) * 0.2;
      pos.z += sin(t * 0.1 + aPhase * 0.7) * 0.25;
      vec4 mv = modelViewMatrix * vec4(pos, 1.0);
      float dist = -mv.z;
      vBr = aBright;
      vType = aType;
      float twSpd = mix(0.7, 2.5, step(1.5, aSize));
      vAlpha = aBright * (0.35 + 0.65 * sin(t * twSpd + aPhase * 3.0));
      gl_PointSize = max(aSize * (200.0 / max(dist, 1.0)), 0.5);
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: `
    uniform vec3 uGold;
    uniform vec3 uTeal;
    uniform vec3 uWarm;
    varying float vAlpha;
    varying float vBr;
    varying float vType;

    void main() {
      float d = length(gl_PointCoord - 0.5) * 2.0;
      float alpha = pow(max(1.0 - d, 0.0), 2.0) * vAlpha * 0.8;
      vec3 col = vType > 0.5 ? mix(uTeal, uWarm, vBr) : mix(uGold, uWarm, vBr);
      gl_FragColor = vec4(col, alpha);
    }
  `,
};

export const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null as import("three").Texture | null },
    uTime: { value: 0 },
    uRes: { value: [0, 0] as number[] },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 ctr = uv - 0.5;
      float dist = length(ctr);

      /* Chromatic aberration at edges */
      float ab = dist * dist * 0.003;
      float cr = texture2D(tDiffuse, uv + ctr * ab).r;
      float cg = texture2D(tDiffuse, uv).g;
      float cb = texture2D(tDiffuse, uv - ctr * ab).b;
      vec3 col = vec3(cr, cg, cb);

      /* Anamorphic streak on brights */
      vec3 flare = vec3(0.0);
      const int FS = 16;
      float fW = 0.03;
      for (int i = -FS; i <= FS; i++) {
        float fi = float(i);
        vec2 fUV = uv + vec2(fi * fW / float(FS), 0.0);
        vec3 fc = texture2D(tDiffuse, fUV).rgb;
        float lum = dot(fc, vec3(0.299, 0.587, 0.114));
        float w = 1.0 - abs(fi) / float(FS);
        w *= w;
        flare += fc * w * step(0.7, lum);
      }
      flare /= float(FS * 2 + 1);
      col += flare * 0.08;

      /* Color grading */
      col = pow(col, vec3(0.97));
      col.r += 0.006 * (1.0 - dist);
      col.b += 0.008 * dist;
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, col * vec3(0.96, 1.015, 1.05), smoothstep(0.25, 0.75, lum) * 0.12);

      /* Vignette */
      float vig = smoothstep(0.92, 0.3, dist);
      col *= mix(0.5, 1.0, vig);

      /* Film grain */
      float grain = (fract(sin(dot(uv * (uTime * 0.3 + 0.5), vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.018;
      col += grain;

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/three/three-canvas.ts
// ═══════════════════════════════════════════════════════════════
/**
 * Core Three.js Canvas Manager
 * Handles renderer, resize, animation loop, IntersectionObserver
 * Shared by all Three.js background components
 */

import * as THREE from "three";

export interface ThreeCanvasConfig {
  antialias?: boolean;
  dpr?: number;
  fogColor?: number;
  fogDensity?: number;
  toneMappingExposure?: number;
}

export class ThreeCanvasManager {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  clock: THREE.Clock;
  animationId: number | null = null;
  isInView = false;
  isRunning = false;
  private config: Required<ThreeCanvasConfig>;
  private observer: IntersectionObserver | null = null;

  constructor(
    private canvas: HTMLCanvasElement,
    config: ThreeCanvasConfig = {}
  ) {
    this.config = {
      antialias: config.antialias ?? true,
      dpr: config.dpr ?? Math.min(window.devicePixelRatio, 2),
      fogColor: config.fogColor ?? 0x030209,
      fogDensity: config.fogDensity ?? 0.009,
      toneMappingExposure: config.toneMappingExposure ?? 1.15,
    };

    const rect = canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: this.config.antialias,
      powerPreference: "high-performance",
      alpha: true,
    });
    this.renderer.setSize(W, H);
    this.renderer.setPixelRatio(this.config.dpr);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = this.config.toneMappingExposure;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(this.config.fogColor, this.config.fogDensity);

    // Camera
    this.camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 500);
    this.camera.position.set(0, 0, 0);

    // Clock
    this.clock = new THREE.Clock();

    // Resize
    this.handleResize();
    window.addEventListener("resize", this.onResize);

    // IntersectionObserver
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isInView = entry.isIntersecting;
      },
      { rootMargin: "200px", threshold: 0 }
    );
    this.observer.observe(canvas);
    this.isInView = true; // assume visible initially
  }

  private onResize = () => {
    this.handleResize();
  };

  handleResize() {
    const rect = this.canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(W, H);
  }

  start(updateFn: (dt: number, elapsed: number) => void) {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();

    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      if (!this.isInView) return;
      const dt = this.clock.getDelta();
      const elapsed = this.clock.getElapsedTime();
      updateFn(dt, elapsed);
      this.renderer.render(this.scene, this.camera);
    };

    this.animationId = requestAnimationFrame(animate);
  }

  stop() {
    this.isRunning = false;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  dispose() {
    this.stop();
    window.removeEventListener("resize", this.onResize);
    this.observer?.disconnect();
    this.renderer.dispose();
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material?.dispose();
        }
      }
    });
  }
}


// ██████████████████████████████████████████████████████████████
// ██  Section 5: LAYOUT COMPONENTS (Navbar, Footer)
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/layout/navbar.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useSafeAuth } from "@/hooks/use-safe-auth";
import { NavbarUserButton } from "@/components/features/auth/user-button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu,
  Calendar,
  LayoutDashboard,
  TicketCheck,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { Navbar3DBg } from "@/components/ui/navbar-3d-bg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

/* ──────────────────────────────────────────────
   Helpers for hydration-safe client detection
   ────────────────────────────────────────────── */

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/* ──────────────────────────────────────────────
   Nav link data
   ────────────────────────────────────────────── */

interface NavLink {
  href: string;
  labelKey: string;
  icon: React.ElementType;
  authOnly: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: "/events", labelKey: "events", icon: Search, authOnly: false },
  { href: "/bookings", labelKey: "bookings", icon: TicketCheck, authOnly: true },
  { href: "/profile", labelKey: "profile", icon: Calendar, authOnly: true },
  { href: "/dashboard", labelKey: "dashboard", icon: LayoutDashboard, authOnly: true },
];

/* ──────────────────────────────────────────────
   Desktop nav link with gold underline animation
   ────────────────────────────────────────────── */

function DesktopNavLink({
  href,
  label,
  icon: Icon,
  isActive,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors duration-300"
    >
      <Icon className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <span
        className={
          isActive
            ? "text-primary"
            : "text-muted-foreground group-hover:text-foreground"
        }
      >
        {label}
      </span>
      {/* Gold underline — slides in from center on hover, always visible when active */}
      <span
        className={`absolute bottom-0 start-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* ──────────────────────────────────────────────
   Mobile nav link with stagger animation
   ────────────────────────────────────────────── */

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 * i + 0.15,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  exit: { opacity: 0, x: 24, transition: { duration: 0.2 } },
};

function MobileNavLink({
  href,
  label,
  icon: Icon,
  isActive,
  index,
  onClose,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  index: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={mobileItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link
        href={href}
        onClick={onClose}
        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
        }`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
        {isActive && (
          <span className="ms-auto h-1.5 w-1.5 rounded-full bg-primary" />
        )}
      </Link>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Theme toggle button
   ────────────────────────────────────────────── */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const t = useTranslations("nav");

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-11 w-11" aria-label={t("toggleTheme")}>
        <Sun className="h-4 w-4 opacity-50" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-11 w-11 relative overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={t("toggleTheme")}
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 0 : 1,
          rotate: theme === "light" ? -90 : 0,
          opacity: theme === "light" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
    </Button>
  );
}

/* ──────────────────────────────────────────────
   Main Navbar Component
   ────────────────────────────────────────────── */

export function Navbar() {
  const { isLoaded, isSignedIn } = useSafeAuth();
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Filter links based on auth
  const visibleLinks = NAV_LINKS.filter((link) => !link.authOnly || isSignedIn);

  // Check if a link is active
  const isActive = useCallback(
    (href: string) => {
      if (href === "/events") {
        return pathname === "/events" || pathname.startsWith("/events/");
      }
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? "h-18 bg-background/70 backdrop-blur-xl border-b border-border shadow-[0_1px_12px_oklch(0.15_0.03_260/6%)]"
          : "h-18 bg-transparent border-b border-transparent"
      }`}
    >
      {/* ── 3D Gradient Mesh Background (visible when scrolled) ── */}
      <Navbar3DBg isScrolled={scrolled} />

      <div className="relative z-10 container mx-auto flex h-full items-center justify-between px-4 lg:px-6">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 shrink-0"
        >
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center justify-center"
          >
            <Calendar className="h-6 w-6 text-primary" />
          </motion.div>
          <span className="gradient-text text-xl font-bold tracking-tight">
            {tCommon("appName")}
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {visibleLinks.map((link) => (
            <DesktopNavLink
              key={link.href}
              href={link.href}
              label={t(link.labelKey)}
              icon={link.icon}
              isActive={isActive(link.href)}
            />
          ))}
        </nav>

        {/* ── Desktop Right Section ── */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Auth state */}
          {!isLoaded && (
            <div className="h-9 w-28 animate-pulse rounded-md bg-muted/50" />
          )}
          {isLoaded && !isSignedIn && (
            <>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                <Link href="/login">
                  {t("login")}
                </Link>
              </Button>
              <MagneticButton asChild strength={0.25} className="glow-gold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 px-3 text-sm font-medium transition-all">
                <Link href="/register">
                  {t("register")}
                </Link>
              </MagneticButton>
            </>
          )}
          {isLoaded && isSignedIn && <NavbarUserButton />}
        </div>

        {/* ── Mobile Right Section ── */}
        <div className="flex lg:hidden items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 touch-target"
            onClick={() => setMobileOpen(true)}
            aria-label={t("openMenu")}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* ── Mobile Sheet Menu ── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] bg-[oklch(0.15_0.03_260/95%)] backdrop-blur-2xl border-s-white/10 p-0"
        >
          <SheetHeader className="ps-6 pe-6 pt-6 pb-2">
            <SheetTitle className="flex items-center gap-2.5">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="gradient-text text-lg font-bold">{tCommon("appName")}</span>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <AnimatePresence mode="wait">
              <motion.nav className="space-y-1">
                {visibleLinks.map((link, i) => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    label={t(link.labelKey)}
                    icon={link.icon}
                    isActive={isActive(link.href)}
                    index={i}
                    onClose={closeMobile}
                  />
                ))}
              </motion.nav>
            </AnimatePresence>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Language Switcher */}
            <motion.div
              custom={visibleLinks.length}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="px-1"
            >
              <LanguageSwitcher />
            </motion.div>

            {/* Auth Section */}
            <motion.div
              custom={visibleLinks.length + 1}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4 space-y-2 px-1"
            >
              {!isLoaded && (
                <div className="h-9 w-full animate-pulse rounded-md bg-muted/50" />
              )}
              {isLoaded && !isSignedIn && (
                <>
                  <Button variant="ghost" size="sm" className="w-full justify-center" asChild>
                    <Link href="/login" onClick={closeMobile}>
                      {t("login")}
                    </Link>
                  </Button>
                  <MagneticButton asChild strength={0.2} className="glow-gold inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 text-sm font-medium transition-all">
                    <Link href="/register" onClick={closeMobile}>
                      {t("register")}
                    </Link>
                  </MagneticButton>
                </>
              )}
              {isLoaded && isSignedIn && (
                <div className="flex items-center gap-3 px-3 py-2">
                  <NavbarUserButton />
                </div>
              )}
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/layout/footer.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, type FormEvent } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter / X" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
    { label: t("careers"), href: "/careers" },
  ];

  const legalLinks = [
    { label: t("terms"), href: "/terms" },
    { label: t("privacy"), href: "/privacy" },
    { label: t("cookiePolicy"), href: "/cookie-policy" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-card border-t border-border/50">
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="footer" />

      {/* Main Footer Content */}
      <div className="relative z-20">
        {/* Gold accent line at top */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.76 0.13 85 / 40%) 20%, oklch(0.82 0.14 90 / 60%) 50%, oklch(0.76 0.13 85 / 40%) 80%, transparent 100%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* ─── Brand Section ─── */}
            <div className="space-y-5 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span className="gradient-text text-xl font-bold tracking-tight">
                  {tCommon("appName")}
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t("description")}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Button key={label} variant="ghost" size="icon" asChild>
                    <a
                      href={href}
                      aria-label={label}
                      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-primary/5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_0_16px_oklch(0.76_0.13_85/20%)]"
                    >
                      <Icon className="h-4 w-4 text-foreground/70 transition-colors duration-300 group-hover:text-primary" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* ─── Quick Links ─── */}
            <div className="space-y-5">
              <h3 className="gold-underline inline-block text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("quickLinks")}
              </h3>
              <nav className="flex flex-col gap-3">
                {quickLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:ps-1"
                  >
                    <span
                      className="inline-block h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ─── Legal ─── */}
            <div className="space-y-5">
              <h3 className="gold-underline inline-block text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("legal")}
              </h3>
              <nav className="flex flex-col gap-3">
                {legalLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:ps-1"
                  >
                    <span
                      className="inline-block h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ─── Newsletter ─── */}
            <div className="space-y-5">
              <h3 className="gold-underline inline-block text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("newsletter")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("newsletterDesc")}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletterPlaceholder")}
                    className="h-11 ps-10 pe-3 bg-muted/20 border-border/50 placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/30 transition-all duration-300"
                    dir="ltr"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-11 w-full font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_oklch(0.76_0.13_85/30%)]"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.76 0.13 85), oklch(0.70 0.11 75), oklch(0.76 0.13 85))",
                  }}
                >
                  {subscribed ? t("subscribed") : t("subscribe")}
                </Button>
              </form>
            </div>
          </div>

          {/* ─── Bottom Bar ─── */}
          <div className="pb-6 pt-4">
            {/* Gold divider */}
            <div
              className="mb-6 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, oklch(0.76 0.13 85 / 25%) 15%, oklch(0.76 0.13 85 / 50%) 50%, oklch(0.76 0.13 85 / 25%) 85%, transparent 100%)",
              }}
            />

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-muted-foreground/80">
                © {new Date().getFullYear()}{" "}
                <span className="text-primary/80 font-medium">{tCommon("appName")}</span>{" "}
                — {t("rights")}
              </p>

              {/* Back to top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                aria-label={t("backToTop")}
                className="group flex items-center gap-2 text-xs text-muted-foreground/60 transition-colors duration-300 hover:text-primary h-auto py-2 px-3"
              >
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>{t("backToTop")}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/layout/site-loader.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from "react";
import { useLocale } from "next-intl";
import { Loader3D } from "@/components/ui/loader-3d";

const emptySubscribe = () => () => {};

/**
 * SiteLoader — Shows the 3D animated loader on first visit,
 * then stores in sessionStorage so it doesn't repeat on navigation.
 */
export function SiteLoader() {
  const locale = useLocale();
  const alreadyLoaded = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("site-loaded") === "true",
    () => false
  );

  const [isLoading, setIsLoading] = useState(!alreadyLoaded);
  const markLoadedRef = useRef(false);

  const markLoaded = useCallback(() => {
    if (!markLoadedRef.current) {
      markLoadedRef.current = true;
      sessionStorage.setItem("site-loaded", "true");
    }
  }, []);

  useEffect(() => {
    if (alreadyLoaded) return;

    // Mark as loaded after a minimum display time
    const timer = setTimeout(() => {
      setIsLoading(false);
      markLoaded();
    }, 2500);

    return () => clearTimeout(timer);
  }, [alreadyLoaded, markLoaded]);

  if (alreadyLoaded) return null;

  const appName = locale === "en" ? "Kuwait Events" : "فعاليات الكويت";

  return <Loader3D isLoading={isLoading} maxDuration={3500} appName={appName} />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/layout/language-switcher.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSwitching, setIsSwitching] = useState(false);
  const t = useTranslations("nav");

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    setIsSwitching(true);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      // Small delay to let the transition feel smooth
      setTimeout(() => setIsSwitching(false), 300);
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      disabled={isPending}
      aria-label={t("switchLanguage")}
      className="relative gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      <Globe className="h-4 w-4" />
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium"
        >
          {locale === "ar" ? "EN" : "عربي"}
        </motion.span>
      </AnimatePresence>
      {isPending && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-3 w-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </Button>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 6: AUTH PAGES
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(auth)/layout.tsx
// ═══════════════════════════════════════════════════════════════
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export default async function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C] relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top-right gold glow */}
            <div className="absolute -top-40 -end-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            {/* Bottom-left gold glow */}
            <div className="absolute -bottom-40 -start-40 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full">
            {children}
          </div>
        </div>
        <Toaster position="top-center" />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(auth)/[locale]/login/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInInput } from "@/lib/validators/auth-schema";
import { useSafeAuth } from "@/hooks/use-safe-auth";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Calendar, Mail, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useLocale } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("auth");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const { signIn } = useSafeAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data: SignInInput) {
    if (!signIn) return;
    setIsLoading(true);
    try {
      await signIn(data.email, data.password);
      toast.success(t("signInSuccess"));
      router.push("/");
      router.refresh();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : t("signInFailed");
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  const BackArrow = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-6 group"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Calendar className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="gradient-text text-2xl font-bold tracking-tight">
              {tCommon("appName")}
            </span>
          </Link>
        </div>

        <Card className="bg-white/[0.03] border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/20">
          <CardHeader className="text-center pb-2 pt-6 px-6">
            <h1 className="text-2xl font-bold text-white">
              {t("welcomeBack")}
            </h1>
            <p className="text-white/50 text-sm mt-1.5">
              {t("signInSubtitle")}
            </p>
          </CardHeader>

          <CardContent className="px-6 pb-6 pt-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">
                        {t("email")}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            type="email"
                            placeholder={t("emailPlaceholder")}
                            dir="ltr"
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-white/70 text-sm">
                          {t("password")}
                        </FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-xs text-primary/70 hover:text-primary transition-colors"
                        >
                          {t("forgotPassword")}
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            type="password"
                            placeholder={t("passwordPlaceholder")}
                            dir="ltr"
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full glow-gold bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-semibold transition-all"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    t("signInButton")
                  )}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-transparent text-white/30">
                  {t("orSeparator")}
                </span>
              </div>
            </div>

            {/* Sign up link */}
            <div className="text-center">
              <span className="text-white/40 text-sm">
                {t("noAccount")}{" "}
              </span>
              <Link
                href="/register"
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                {t("noAccountLink")}
              </Link>
            </div>

            {/* Back to home */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/50 text-xs transition-colors"
              >
                <BackArrow className="h-3 w-3" />
                {tCommon("home")}
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(auth)/[locale]/register/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpInput } from "@/lib/validators/auth-schema";
import { useSafeAuth } from "@/hooks/use-safe-auth";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Calendar, Mail, Lock, User, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

export default function RegisterPage() {
  const t = useTranslations("auth");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const { signUp } = useSafeAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  async function onSubmit(data: SignUpInput) {
    if (!signUp) return;
    setIsLoading(true);
    try {
      await signUp(data.name, data.email, data.password, data.phone || undefined);
      toast.success(t("signUpSuccess"));
      router.push("/");
      router.refresh();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : t("signUpFailed");
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  const BackArrow = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-6 group"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Calendar className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="gradient-text text-2xl font-bold tracking-tight">
              {tCommon("appName")}
            </span>
          </Link>
        </div>

        <Card className="bg-white/[0.03] border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/20">
          <CardHeader className="text-center pb-2 pt-6 px-6">
            <h1 className="text-2xl font-bold text-white">
              {t("createAccount")}
            </h1>
            <p className="text-white/50 text-sm mt-1.5">
              {t("signUpSubtitle")}
            </p>
          </CardHeader>

          <CardContent className="px-6 pb-6 pt-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">
                        {t("name")}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            placeholder={t("namePlaceholder")}
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">
                        {t("email")}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            type="email"
                            placeholder={t("emailPlaceholder")}
                            dir="ltr"
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Phone (optional) */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">
                        {t("phoneOptional")}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            placeholder={t("phonePlaceholder")}
                            dir="ltr"
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">
                        {t("password")}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            type="password"
                            placeholder={t("passwordPlaceholder")}
                            dir="ltr"
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                      <p className="text-white/25 text-[11px] mt-1">
                        {t("passwordRequirements")}
                      </p>
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">
                        {t("confirmPassword")}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <Input
                            {...field}
                            type="password"
                            placeholder={t("passwordPlaceholder")}
                            dir="ltr"
                            className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full glow-gold bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-semibold transition-all"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    t("signUpButton")
                  )}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-transparent text-white/30">
                  {t("orSeparator")}
                </span>
              </div>
            </div>

            {/* Sign in link */}
            <div className="text-center">
              <span className="text-white/40 text-sm">
                {t("hasAccount")}{" "}
              </span>
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                {t("hasAccountLink")}
              </Link>
            </div>

            {/* Back to home */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/50 text-xs transition-colors"
              >
                <BackArrow className="h-3 w-3" />
                {tCommon("home")}
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(auth)/[locale]/forgot-password/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/lib/validators/auth-schema";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Calendar, Mail, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const t = useTranslations("auth");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: ForgotPasswordInput) {
    setIsLoading(true);
    try {
      const res = await fetch("/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!result.success) {
        throw new Error(result.error?.message || "Failed to send reset link");
      }

      setIsSent(true);
      toast.success(t("resetLinkSent"));
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : t("resetFailed");
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  const BackArrow = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-6 group"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Calendar className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="gradient-text text-2xl font-bold tracking-tight">
              {tCommon("appName")}
            </span>
          </Link>
        </div>

        <Card className="bg-white/[0.03] border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/20">
          <CardHeader className="text-center pb-2 pt-6 px-6">
            <h1 className="text-2xl font-bold text-white">
              {t("forgotPassword")}
            </h1>
            <p className="text-white/50 text-sm mt-1.5">
              {t("forgotPasswordSubtitle")}
            </p>
          </CardHeader>

          <CardContent className="px-6 pb-6 pt-4">
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t("resetEmailSent")}
                </p>
                <Link
                  href="/login"
                  className="mt-6 inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  <BackArrow className="h-3.5 w-3.5" />
                  {t("backToSignIn")}
                </Link>
              </motion.div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-sm">
                          {t("email")}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                            <Input
                              {...field}
                              type="email"
                              placeholder="name@example.com"
                              dir="ltr"
                              className="ps-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus:border-primary/50 focus:ring-primary/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full glow-gold bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-semibold transition-all"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      t("forgotPasswordButton")
                    )}
                  </Button>
                </form>
              </Form>
            )}

            {/* Back to sign in */}
            {!isSent && (
              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/50 text-xs transition-colors"
                >
                  <BackArrow className="h-3 w-3" />
                  {t("backToSignIn")}
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/auth/auth-provider.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { ClerkProvider, useAuth as useClerkAuth } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { SafeAuthContext, SafeUserProvider } from "@/hooks/use-safe-auth";

/** Cookie name for custom auth token */
const AUTH_COOKIE_NAME = "auth_token";

/** Check if Clerk publishable key is properly configured */
function isClerkConfigured(): boolean {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return !!(key && key.startsWith("pk_") && !key.includes("placeholder"));
}

/** Set a cookie with the given name, value, and max-age (days) */
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`;
}

/** Delete a cookie by name */
function deleteCookie(name: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax${secure}`;
}

/**
 * ClerkAuthBridge — reads real Clerk auth state and provides it via SafeAuthContext.
 * Also fetches the user's role from the API.
 */
function ClerkAuthBridge({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn, userId } = useClerkAuth();
  const [fetchedRole, setFetchedRole] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<{ name: string | null; email: string | null; avatarUrl: string | null; phone: string | null }>({
    name: null, email: null, avatarUrl: null, phone: null,
  });

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !userId) return;

    let cancelled = false;

    fetch("/api/v1/users/me")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && data?.data) {
          setFetchedRole(data.data.role);
          setUserInfo({
            name: data.data.name ?? null,
            email: data.data.email ?? null,
            avatarUrl: data.data.avatarUrl ?? null,
            phone: null,
          });
        }
      })
      .catch(() => {
        // Silently fail — fetchedRole stays null
      });

    return () => { cancelled = true; };
  }, [isLoaded, isSignedIn, userId]);

  const userRole = isSignedIn ? fetchedRole : null;

  return (
    <SafeAuthContext.Provider
      value={{
        isLoaded: isLoaded ?? false,
        isSignedIn: isSignedIn ?? false,
        userId: userId ?? null,
        userRole,
      }}
    >
      <SafeUserProvider value={userInfo}>
        {children}
      </SafeUserProvider>
    </SafeAuthContext.Provider>
  );
}

/**
 * CustomAuthBridge — handles JWT-based custom authentication.
 * Stores token in localStorage AND a cookie (for server-side access).
 * Provides auth state via SafeAuthContext.
 */
function CustomAuthBridge({ children }: { children: React.ReactNode }) {
  // Use ref to track if initial validation has been done
  const validatedRef = useRef(false);
  const [authState, setAuthState] = useState<{
    isLoaded: boolean;
    isSignedIn: boolean;
    userId: string | null;
    userRole: string | null;
  }>({
    isLoaded: false,
    isSignedIn: false,
    userId: null,
    userRole: null,
  });
  const [userInfo, setUserInfo] = useState<{ name: string | null; email: string | null; avatarUrl: string | null; phone: string | null }>({
    name: null, email: null, avatarUrl: null, phone: null,
  });

  // Validate stored token on mount
  useEffect(() => {
    if (validatedRef.current) return;
    validatedRef.current = true;

    const token = localStorage.getItem(AUTH_COOKIE_NAME);
    if (!token) {
      // No token — mark as loaded immediately
      requestAnimationFrame(() => {
        setAuthState({ isLoaded: true, isSignedIn: false, userId: null, userRole: null });
      });
      return;
    }

    fetch("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Token invalid");
        return res.json();
      })
      .then((data) => {
        if (data?.data) {
          setAuthState({
            isLoaded: true,
            isSignedIn: true,
            userId: data.data.id,
            userRole: data.data.role,
          });
          setUserInfo({
            name: data.data.name ?? null,
            email: data.data.email ?? null,
            avatarUrl: null,
            phone: null,
          });
          // Ensure cookie is set for server-side access
          setCookie(AUTH_COOKIE_NAME, token, 7);
        } else {
          localStorage.removeItem(AUTH_COOKIE_NAME);
          deleteCookie(AUTH_COOKIE_NAME);
          setAuthState({ isLoaded: true, isSignedIn: false, userId: null, userRole: null });
        }
      })
      .catch(() => {
        localStorage.removeItem(AUTH_COOKIE_NAME);
        deleteCookie(AUTH_COOKIE_NAME);
        setAuthState({ isLoaded: true, isSignedIn: false, userId: null, userRole: null });
      });
  }, []);

  /** Sign in with email/password */
  const signIn = useCallback(async (email: string, password: string) => {
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error?.message || "Sign in failed");
    }

    const { token, user } = data.data;
    // Store in both localStorage (client-side) and cookie (server-side)
    localStorage.setItem(AUTH_COOKIE_NAME, token);
    setCookie(AUTH_COOKIE_NAME, token, 7);
    setAuthState({
      isLoaded: true,
      isSignedIn: true,
      userId: user.id,
      userRole: user.role,
    });
    setUserInfo({
      name: user.name ?? null,
      email: user.email ?? null,
      avatarUrl: null,
      phone: null,
    });

    return user;
  }, []);

  /** Sign up with name/email/password */
  const signUp = useCallback(async (name: string, email: string, password: string, phone?: string) => {
    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, confirmPassword: password, phone: phone || "" }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error?.message || "Sign up failed");
    }

    const { token, user } = data.data;
    // Store in both localStorage (client-side) and cookie (server-side)
    localStorage.setItem(AUTH_COOKIE_NAME, token);
    setCookie(AUTH_COOKIE_NAME, token, 7);
    setAuthState({
      isLoaded: true,
      isSignedIn: true,
      userId: user.id,
      userRole: user.role,
    });
    setUserInfo({
      name: user.name ?? null,
      email: user.email ?? null,
      avatarUrl: null,
      phone: null,
    });

    return user;
  }, []);

  /** Sign out */
  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_COOKIE_NAME);
    deleteCookie(AUTH_COOKIE_NAME);
    setAuthState({
      isLoaded: true,
      isSignedIn: false,
      userId: null,
      userRole: null,
    });
    setUserInfo({ name: null, email: null, avatarUrl: null, phone: null });
  }, []);

  return (
    <SafeAuthContext.Provider
      value={{
        ...authState,
        signIn: isClerkConfigured() ? undefined : signIn,
        signUp: isClerkConfigured() ? undefined : signUp,
        signOut: isClerkConfigured() ? undefined : signOut,
      }}
    >
      <SafeUserProvider value={userInfo}>
        {children}
      </SafeUserProvider>
    </SafeAuthContext.Provider>
  );
}

/**
 * AuthProvider — wraps the app with the appropriate auth system.
 * Uses Clerk when keys are configured, otherwise falls back to custom JWT auth.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  if (isClerkConfigured()) {
    return (
      <ClerkProvider localization={arSA} afterSignOutUrl="/login">
        <ClerkAuthBridge>{children}</ClerkAuthBridge>
      </ClerkProvider>
    );
  }

  return <CustomAuthBridge>{children}</CustomAuthBridge>;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/auth/profile-form.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import type { User } from "@prisma/client";

interface ProfileFormProps {
  user: User;
}

export function ProfileForm({ user }: ProfileFormProps) {
  const t = useTranslations("profile");
  const tCommon = useTranslations("common");
  const [phone, setPhone] = useState(user.phone ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleLabels: Record<string, string> = {
    ATTENDEE: t("roleAttendee"),
    ORGANIZER: t("roleOrganizer"),
    ADMIN: t("roleAdmin"),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/v1/users/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(t("profileUpdated"));
      } else {
        toast.error(data.error?.message || tCommon("error"));
      }
    } catch {
      toast.error(tCommon("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Account Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t("accountInfo")}</CardTitle>
          <CardDescription>
            {t("accountInfoDesc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("name")}</Label>
              <Input
                type="text"
                value={user.name}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                {t("nameChangeNote")}
              </p>
            </div>
            <div className="space-y-2">
              <Label>{t("email")}</Label>
              <Input
                type="email"
                value={user.email}
                disabled
                className="bg-muted"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>{t("role")}</Label>
            <Badge
              variant={
                user.role === "ADMIN"
                  ? "default"
                  : user.role === "ORGANIZER"
                    ? "secondary"
                    : "outline"
              }
              className="text-sm"
            >
              {roleLabels[user.role] || user.role}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Editable Fields Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t("editProfile")}</CardTitle>
          <CardDescription>{t("editProfileDesc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="965XXXXXXXX"
                dir="ltr"
                className="text-start"
              />
              <p className="text-xs text-muted-foreground">
                {t("phoneHint")}
              </p>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("saving") : t("saveChanges")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/auth/profile-page-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { User, Sparkles } from "lucide-react";

export function ProfilePageClient() {
  const t = useTranslations("profile");
  const tCommon = useTranslations("common");

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="footer" />

      {/* Theme-aware gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-background/70"
      />

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        {/* Gold decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
              <User className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl gradient-text">{t("title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-muted/50 p-4 text-center">
              <p className="text-sm text-muted-foreground">
                {t("clerkSetupMessage")}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {t("clerkSetupHint")}
              </p>
            </div>
            <div className="text-center">
              <Link href="/">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50">
                  {tCommon("home")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/auth/user-button.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useSafeAuth } from "@/hooks/use-safe-auth";

export function NavbarUserButton() {
  const { isSignedIn, signOut } = useSafeAuth();

  // When Clerk is configured, ClerkUserButton is rendered by the auth provider.
  // This component provides a fallback user button for custom auth.
  if (!isSignedIn) return null;

  return (
    <button
      onClick={signOut}
      className="inline-flex items-center justify-center rounded-full w-9 h-9 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
      aria-label="Sign out"
    >
      خروج
    </button>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 7: MAIN LAYOUT & HOMEPAGE
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/layout.tsx
// ═══════════════════════════════════════════════════════════════
// This layout is a pass-through.
// The actual layout with Navbar + Footer is in [locale]/layout.tsx
// because NextIntlClientProvider is only available inside [locale].
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/layout.tsx
// ═══════════════════════════════════════════════════════════════
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";
import { Navbar } from "@/components/features/layout/navbar";
import { Footer } from "@/components/features/layout/footer";
import { SiteLoader } from "@/components/features/layout/site-loader";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleUpdater } from "@/components/layout/locale-updater";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
      <LocaleUpdater locale={locale} />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteLoader />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/page.tsx
// ═══════════════════════════════════════════════════════════════
import { db } from "@/lib/db";
import { HeroSection3D } from "@/components/ui/hero-section-3d";
import { FeaturedEventsGrid } from "@/components/features/events/featured-events-grid";
import { StatsBentoGrid } from "@/components/features/home/stats-bento-grid";
import { TestimonialsSection } from "@/components/features/home/testimonials-section";
import { CTATrustSection } from "@/components/features/events/cta-trust-section";
import { CategoryCarousel } from "@/components/features/events/category-carousel";

export default async function HomePage() {
  const [featuredEvents, categories, upcomingCount, venuesCount, featuredCount] = await Promise.all([
    db.event.findMany({
      where: { isFeatured: true, status: "PUBLISHED", deletedAt: null },
      include: {
        venue: { select: { nameAr: true, nameEn: true, city: true } },
        category: { select: { nameAr: true, nameEn: true, slug: true } },
        ticketTiers: {
          select: { price: true, quantityTotal: true, quantitySold: true },
        },
      },
      take: 6,
      orderBy: { startDate: "asc" },
    }),
    db.category.findMany({
      include: {
        _count: { select: { events: { where: { status: "PUBLISHED", deletedAt: null } } } },
      },
    }),
    db.event.count({
      where: {
        status: "PUBLISHED",
        deletedAt: null,
        startDate: { gte: new Date() },
      },
    }),
    db.venue.count(),
    db.event.count({ where: { isFeatured: true, status: "PUBLISHED", deletedAt: null } }),
  ]);

  const categoriesCount = categories.length;

  // Compute total ticket count across all tiers
  const ticketAgg = await db.ticketTier.aggregate({ _sum: { quantityTotal: true } });
  const ticketCount = ticketAgg._sum.quantityTotal ?? 0;

  return (
    <>
      <HeroSection3D
        upcomingCount={upcomingCount}
      />
      <FeaturedEventsGrid events={featuredEvents} />
      <StatsBentoGrid
        eventCount={upcomingCount}
        categoryCount={categoriesCount}
        venueCount={venuesCount}
        ticketCount={ticketCount}
        featuredCount={featuredCount}
      />
      <TestimonialsSection />
      <CTATrustSection
        upcomingCount={upcomingCount}
        categoriesCount={categoriesCount}
        venuesCount={venuesCount}
      />
      <CategoryCarousel categories={categories} />
    </>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/loading.tsx
// ═══════════════════════════════════════════════════════════════
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/error.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("common");

  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center ps-4 pe-4">
        <h2 className="text-2xl font-bold">{t("error")}</h2>
        <p className="text-muted-foreground max-w-md">
          {t("unexpectedError")}
        </p>
        <Button onClick={reset} variant="outline">
          {t("retry")}
        </Button>
      </div>
    </div>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 8: HOME SECTION COMPONENTS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/home/stats-bento-grid.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Calendar, Grid3X3, MapPin, Ticket, Building2, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section3DBg } from "@/components/ui/section-3d-bg";

// ── Animation config — premium cubic-bezier ────────────────
const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Types ────────────────────────────────────────────────────
interface StatsBentoGridProps {
  eventCount: number;
  categoryCount: number;
  venueCount: number;
  ticketCount: number;
  featuredCount: number;
}

interface StatCardConfig {
  icon: LucideIcon;
  labelKey: string;
  value: number | string;
  colSpan: 1 | 2;
  /** Suffix after the number (e.g. "+" for "150+") */
  suffix?: string;
}

// ── Stat Card Component ──────────────────────────────────────
function StatCard({
  config,
  index,
  isInView,
}: {
  config: StatCardConfig;
  index: number;
  isInView: boolean;
}) {
  const t = useTranslations("home");
  const Icon = config.icon;
  const isLarge = config.colSpan === 2;
  const isStringValue = typeof config.value === "string";

  return (
    <motion.div
      className={`relative group rounded-2xl overflow-hidden transition-all duration-300 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isLarge ? "col-span-2 md:col-span-2" : "col-span-1 md:col-span-1"
      }`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: CUBIC_PREMIUM,
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Hover glow effect - Royal Gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.76 0.13 85 / 8%), transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Card content */}
      <div
        className={`relative z-10 p-4 md:p-6 ${
          isLarge ? "flex items-center gap-4 md:gap-5" : ""
        }`}
      >
        {/* Icon with Royal Gold gradient background */}
        <div
          className={`flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
            isLarge ? "mb-0" : "mb-3"
          }`}
          style={{
            background: "linear-gradient(135deg, oklch(0.76 0.13 85), oklch(0.82 0.14 90))",
            boxShadow: "0 4px 14px oklch(0.76 0.13 85 / 25%)",
          }}
        >
          <Icon className="h-5 w-5 md:h-6 md:w-6 text-white drop-shadow-sm" />
        </div>

        {/* Text content */}
        <div className={isLarge ? "flex-1 min-w-0" : ""}>
          <p className={`font-bold text-foreground ${
            isLarge ? "text-2xl sm:text-3xl md:text-5xl" : "text-2xl md:text-3xl"
          } mb-0.5 md:mb-1 leading-tight`}>
            {isStringValue ? (
              config.value
            ) : (
              <AnimatedCounter target={config.value as number} suffix={config.suffix} />
            )}
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-medium">
            {t(config.labelKey as Parameters<typeof t>[0])}
          </p>
        </div>
      </div>

      {/* Subtle top-edge highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────
export function StatsBentoGrid({
  eventCount,
  categoryCount,
  venueCount,
  ticketCount,
  featuredCount,
}: StatsBentoGridProps) {
  const t = useTranslations("home");
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Stat cards configuration
  const statCards: StatCardConfig[] = [
    {
      icon: Calendar,
      labelKey: "statsUpcomingEvents",
      value: eventCount,
      colSpan: 2,
      suffix: "+",
    },
    {
      icon: Grid3X3,
      labelKey: "statsCategories",
      value: categoryCount,
      colSpan: 1,
      suffix: "+",
    },
    {
      icon: MapPin,
      labelKey: "statsVenues",
      value: venueCount,
      colSpan: 1,
      suffix: "+",
    },
    {
      icon: Ticket,
      labelKey: "statsTicketsAvailable",
      value: ticketCount,
      colSpan: 2,
      suffix: "+",
    },
    {
      icon: Building2,
      labelKey: "statsCity",
      value: t("statsCityValue"),
      colSpan: 1,
    },
    {
      icon: Star,
      labelKey: "statsFeatured",
      value: featuredCount,
      colSpan: 1,
      suffix: "+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-background"
      aria-label={t("statsTitle")}
    >
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="stats" />

      {/* ── Subtle decorative blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Gold accent blob */}
        <div
          className="absolute -top-1/4 -start-1/4 w-[60vw] h-[60vw] rounded-full animate-morph-blob opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 12%) 0%, transparent 70%)",
          }}
        />

        {/* Secondary blob */}
        <div
          className="absolute -bottom-1/4 -end-1/4 w-[50vw] h-[50vw] rounded-full animate-morph-blob opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 8%) 0%, transparent 70%)",
            animationDelay: "-3s",
            animationDuration: "12s",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: CUBIC_PREMIUM }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {t("statsTitle")}
          </h2>
          {/* Royal Gold accent line */}
          <div
            className="mx-auto w-16 h-1 rounded-full"
            style={{
              background: "linear-gradient(to right, oklch(0.76 0.13 85), oklch(0.82 0.14 90))",
            }}
          />
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-4">
            {t("statsSubtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((card, index) => (
            <StatCard
              key={card.labelKey}
              config={card}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/home/testimonials-section.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { Button } from "@/components/ui/button";
import { Quote, Star, Search, ArrowLeft, Sparkles } from "lucide-react";

// ── Animation config — premium cubic-bezier ────────────────
const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Animation Variants ─────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: CUBIC_PREMIUM,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: CUBIC_PREMIUM,
    },
  },
};

// ── Star Rating Component ──────────────────────────────
function StarRating({ rating }: { rating: number }) {
  const t = useTranslations("home");
  return (
    <div className="flex gap-0.5" aria-label={t("outOf5Stars", { rating })}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-[oklch(0.76_0.13_85)] text-[oklch(0.76_0.13_85)]"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

// ── Testimonial Card ──────────────────────────────
interface TestimonialData {
  id: number;
  textKey: string;
  authorKey: string;
  roleKey: string;
  rating: number;
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialData;
}) {
  const t = useTranslations("home");
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to subtle 3D rotation
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 1]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        rotateX,
        rotateZ,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative rounded-2xl p-6 transition-shadow duration-300"
    >
      {/* Card background — theme-aware */}
      <div className="absolute inset-0 rounded-2xl bg-card border border-border/50" />

      {/* Decorative Quote Icon (faded Royal Gold) */}
      <Quote
        className="absolute top-4 end-4 h-10 w-10 transition-colors duration-300 text-primary/[0.05]"
      />
      {/* Hover state for quote icon */}
      <Quote
        className="absolute top-4 end-4 h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/10"
      />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Star Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Testimonial Text */}
        <p className="leading-relaxed text-sm md:text-base text-foreground/85">
          &ldquo;{t(testimonial.textKey as Parameters<typeof t>[0])}&rdquo;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-2 border-t border-border/30">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
            style={{
              background: "linear-gradient(to bottom right, oklch(0.76 0.13 85), oklch(0.82 0.14 90))",
              color: "oklch(0.25 0.05 85)",
            }}
          >
            {t(testimonial.authorKey as Parameters<typeof t>[0]).charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">
              {t(testimonial.authorKey as Parameters<typeof t>[0])}
            </p>
            <p className="text-xs text-muted-foreground">
              {t(testimonial.roleKey as Parameters<typeof t>[0])}
            </p>
          </div>
        </div>
      </div>

      {/* Hover glow effect — Royal Gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.76 0.13 85 / 8%), transparent 60%)",
          inset: "-2px",
          borderRadius: "1rem",
          filter: "blur(16px)",
        }}
      />
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────
export function TestimonialsSection() {
  const t = useTranslations("home");

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      textKey: "testimonial1Text",
      authorKey: "testimonial1Author",
      roleKey: "testimonial1Role",
      rating: 5,
    },
    {
      id: 2,
      textKey: "testimonial2Text",
      authorKey: "testimonial2Author",
      roleKey: "testimonial2Role",
      rating: 5,
    },
    {
      id: 3,
      textKey: "testimonial3Text",
      authorKey: "testimonial3Author",
      roleKey: "testimonial3Role",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-background overflow-hidden" aria-label={t("testimonialsTitle")}>
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="testimonials" />

      <div className="relative z-10 container mx-auto px-4">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: CUBIC_PREMIUM }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full premium-glass text-xs font-medium text-muted-foreground tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t("testimonialsTitle")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            {t("testimonialsTitle")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-base">
            {t("testimonialsSubtitle")}
          </p>
        </motion.div>

        {/* ── Testimonial Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </motion.div>

        {/* ── CTA Section ── */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl px-6 py-14 md:px-12 md:py-20 text-center bg-card border border-border/50">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -top-1/4 -start-1/4 w-[60%] h-[60%] rounded-full animate-mesh-move opacity-20 z-0"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.76 0.13 85 / 15%) 0%, transparent 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-1/4 -end-1/4 w-[50%] h-[50%] rounded-full animate-mesh-move opacity-15 z-0"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.76 0.13 85 / 10%) 0%, transparent 70%)",
                animationDelay: "-7s",
                animationDuration: "25s",
              }}
            />

            {/* CTA Content */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 backdrop-blur-sm text-xs font-medium text-muted-foreground tracking-wide">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {t("ctaTitle")}
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto">
                {t("ctaTitle")}
              </h3>

              <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed">
                {t("ctaSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="relative h-12 px-8 text-base font-semibold rounded-xl border-0 transition-all duration-300"
                    style={{
                      background: "oklch(0.76 0.13 85)",
                      color: "oklch(0.25 0.05 85)",
                      boxShadow: "0 10px 25px oklch(0.76 0.13 85 / 25%)",
                    }}
                  >
                    <Link href="/events">
                      <Search className="h-5 w-5 me-2" />
                      {t("ctaBrowse")}
                    </Link>
                  </Button>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    asChild
                    variant="outline"
                    className="h-12 px-8 text-base font-semibold rounded-xl transition-all duration-300"
                  >
                    <Link href="/register">
                      <ArrowLeft className="h-5 w-5 me-2" />
                      {t("ctaRegister")}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 9: EVENT COMPONENTS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/featured-events-grid.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { EventCard } from "./event-card";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { EventItem } from "@/types/api";

interface FeaturedEventsGridProps {
  events: EventItem[];
}

export function FeaturedEventsGrid({ events }: FeaturedEventsGridProps) {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  // Empty state with premium design
  if (events.length === 0) {
    return (
      <section className="relative container mx-auto px-4 py-16 overflow-hidden">
        {/* 3D shapes background */}
        <Section3DBg theme="events" />

        {/* Decorative gold line */}
        <div className="relative z-10 flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <AnimatedSection direction="up">
          <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent max-w-md mx-auto overflow-hidden">
            <CardContent className="p-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
              >
                <Calendar className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 gradient-text">
                {t("noFeaturedTitle")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("noFeaturedSubtitle")}
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <section className="relative container mx-auto px-4 py-16 overflow-hidden">
      {/* 3D shapes background */}
      <Section3DBg theme="events" />

      {/* Decorative gold line above section */}
      <div className="relative z-10 flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <Sparkles className="h-5 w-5 text-primary/60" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Section header */}
      <AnimatedSection direction="up" delay={0}>
        <div className="relative z-10 flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight">
              {tCommon("featuredEvents")}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {t("featuredSubtitle")}
            </p>
          </div>
          <Link href="/events" className="hidden sm:block">
            <Button
              variant="ghost"
              className="group gap-2 text-primary hover:text-primary hover:bg-primary/10 transition-colors"
            >
              {t("viewAll")}
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      {/* Events grid */}
      <AnimatedSection direction="up" delay={0.15}>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event: EventItem, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <EventCard event={event} variant="featured" />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Mobile "View All" link */}
      <div className="relative z-10 mt-8 text-center sm:hidden">
        <Link href="/events">
          <Button
            variant="outline"
            className="gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
          >
            {t("viewAll")}
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/event-card.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { Link } from "@/i18n/routing";
import { TiltCard } from "@/components/ui/tilt-card";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Badge } from "@/components/ui/badge";
import { formatKWD } from "@/lib/utils";
import { formatLocalizedNumber, formatLocalizedDate } from "@/lib/format-number";
import { useLocale, useTranslations } from "next-intl";
import { Calendar, MapPin, Clock, Users, Crown } from "lucide-react";

/* ──────────────────────────────────────────────
   Props
   ────────────────────────────────────────────── */
interface EventCardProps {
  event: {
    id: string;
    titleAr: string;
    titleEn?: string | null;
    slug: string;
    coverImageUrl: string;
    startDate: string | Date;
    startTime?: string;
    venue?: { nameAr: string; nameEn?: string | null; city?: string } | null;
    category?: { nameAr: string; nameEn?: string | null; slug: string } | null;
    ticketTiers: {
      price: string;
      quantityAvailable?: number;
      quantityTotal?: number;
      quantitySold?: number;
    }[];
    isFeatured?: boolean;
  };
  variant?: "default" | "compact" | "featured";
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export function EventCard({ event, variant = "default" }: EventCardProps) {
  const locale = useLocale();
  const tCommon = useTranslations("common");

  /* ── Derived data ── */
  const lowestPrice =
    event.ticketTiers.length > 0
      ? Math.min(...event.ticketTiers.map((t) => parseFloat(t.price)))
      : 0;
  const isFree = lowestPrice === 0;
  const date = new Date(event.startDate);

  const availableTickets = event.ticketTiers.reduce((sum, t) => {
    if (t.quantityAvailable !== undefined) return sum + t.quantityAvailable;
    if (t.quantityTotal !== undefined && t.quantitySold !== undefined)
      return sum + (t.quantityTotal - t.quantitySold);
    return sum;
  }, 0);

  /* ────────────────────────────────────────────
     Featured variant — cinematic overlay card
     ──────────────────────────────────────────── */
  if (variant === "featured") {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
      >
        <TiltCard className="rounded-xl" tiltAmount={8}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            {/* Image */}
            <ImageWithFallback
              src={event.coverImageUrl}
              alt={locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Cinematic gradient overlay — darker at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/20 group-hover:to-transparent" />

            {/* Gold border on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-primary/40" />

            {/* Category badge — top-start, gold background */}
            {event.category && (
              <Badge className="absolute top-4 start-4 bg-primary text-primary-foreground border-0 shadow-lg text-xs font-semibold px-3 py-1">
                {locale === "ar" ? event.category.nameAr : (event.category.nameEn || event.category.nameAr)}
              </Badge>
            )}

            {/* Featured crown badge — top-end */}
            {event.isFeatured && (
              <div className="absolute top-4 end-4 flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-yellow-300 border border-yellow-500/20">
                <Crown className="h-3 w-3" />
                <span>{tCommon("featured")}</span>
              </div>
            )}

            {/* Bottom content area */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-2 line-clamp-2">
                {locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  {formatLocalizedDate(date, locale)}
                </span>
                {event.venue && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {locale === "ar" ? event.venue.nameAr : (event.venue.nameEn || event.venue.nameAr)}
                  </span>
                )}
              </div>

              {/* Price — gold gradient at bottom-end */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm text-white/60">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{event.startTime ?? ""}</span>
                </div>
                <span className="price-gold text-base sm:text-lg font-bold">
                  {isFree ? tCommon("free") : `${tCommon("from")} ${formatKWD(lowestPrice, locale)}`}
                </span>
              </div>
            </div>
          </div>
        </TiltCard>
      </Link>
    );
  }

  /* ────────────────────────────────────────────
     Default / Compact variant — elegant card + hover video
     ──────────────────────────────────────────── */
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
    >
      <TiltCard
        className="rounded-xl"
        tiltAmount={variant === "compact" ? 5 : 8}
      >
        <div className="overflow-hidden rounded-xl bg-card border border-border/60 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/40">
          {/* ── Image section ── */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <ImageWithFallback
              src={event.coverImageUrl}
              alt={locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gold shimmer hover overlay — pure CSS, no video needed */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent" />
              <div className="absolute inset-0 shimmer" />
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

            {/* Subtle gradient at bottom of image for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/40 to-transparent" />

            {/* Featured badge */}
            {event.isFeatured && (
              <div className="absolute top-3 start-3 z-10 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-lg border-0">
                <Crown className="h-3 w-3" />
                <span>{tCommon("featured")}</span>
              </div>
            )}
          </div>

          {/* ── Content section ── */}
          <div className={variant === "compact" ? "p-3" : "p-4"}>
            {/* Category badge */}
            {event.category && (
              <Badge
                variant="secondary"
                className="mb-2 text-[0.68rem] font-medium"
              >
                {locale === "ar" ? event.category.nameAr : (event.category.nameEn || event.category.nameAr)}
              </Badge>
            )}

            {/* Title */}
            <h3
              className={`font-semibold leading-tight line-clamp-2 mb-2 ${
                variant === "compact" ? "text-sm" : "text-base"
              }`}
            >
              {locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
            </h3>

            {/* Date / Time / Venue */}
            <div
              className={`space-y-1.5 text-muted-foreground ${
                variant === "compact" ? "text-xs" : "text-sm"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                <span>{formatLocalizedDate(date, locale)}</span>
                <span className="mx-1 text-border">·</span>
                <Clock className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                <span>{event.startTime ?? ""}</span>
              </div>
              {event.venue && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                  <span className="truncate">{locale === "ar" ? event.venue.nameAr : (event.venue.nameEn || event.venue.nameAr)}</span>
                </div>
              )}
            </div>

            {/* Bottom section — price & tickets */}
            <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between">
              <span
                className={`font-bold price-gold ${
                  variant === "compact" ? "text-sm" : "text-base"
                }`}
              >
                {isFree ? tCommon("free") : `${tCommon("from")} ${formatKWD(lowestPrice, locale)}`}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                {formatLocalizedNumber(availableTickets, locale)} {tCommon("remaining")}
              </span>
            </div>
          </div>
        </div>
      </TiltCard>
    </Link>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/event-card-skeleton.tsx
// ═══════════════════════════════════════════════════════════════
export function EventCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card">
      <div className="aspect-[16/10] skeleton-shimmer" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-16 rounded bg-muted/40 animate-pulse" />
        <div className="h-5 w-3/4 rounded bg-muted/40 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-muted/40 animate-pulse" />
        <div className="flex justify-between pt-2">
          <div className="h-5 w-20 rounded bg-muted/40 animate-pulse" />
          <div className="h-5 w-24 rounded bg-muted/40 animate-pulse" />
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/event-grid-skeleton.tsx
// ═══════════════════════════════════════════════════════════════
import { EventCardSkeleton } from "./event-card-skeleton";

export function EventGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/cta-trust-section.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Zap,
  Star,
  ArrowLeft,
  MapPin,
  Calendar,
  Tag,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Animation config — premium cubic-bezier
   ────────────────────────────────────────────── */

const CUBIC_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: CUBIC_PREMIUM,
    },
  },
};

/* ──────────────────────────────────────────────
   Feature card data
   ────────────────────────────────────────────── */

interface FeatureItem {
  icon: React.ElementType;
  emoji: string;
  titleKey: string;
  descKey: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: ShieldCheck,
    emoji: "🎫",
    titleKey: "ctaSecureTitle",
    descKey: "ctaSecureDesc",
  },
  {
    icon: Zap,
    emoji: "⚡",
    titleKey: "ctaFastTitle",
    descKey: "ctaFastDesc",
  },
  {
    icon: Star,
    emoji: "🌟",
    titleKey: "ctaBestTitle",
    descKey: "ctaBestDesc",
  },
];

/* ──────────────────────────────────────────────
   CTA/Trust Section — "Why Kuwait Events?"
   Uses 3D floating shapes instead of video
   ────────────────────────────────────────────── */

interface CTATrustSectionProps {
  upcomingCount?: number;
  categoriesCount?: number;
  venuesCount?: number;
}

export function CTATrustSection({
  upcomingCount = 0,
  categoriesCount = 0,
  venuesCount = 0,
}: CTATrustSectionProps) {
  const t = useTranslations("home");

  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* ── Interactive 3D shapes background (replaces video) ── */}
      <Section3DBg theme="cta" />

      {/* ── Decorative gradient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-1/4 -start-1/4 w-[60vw] h-[60vw] rounded-full animate-morph-blob opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 10%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -end-1/4 w-[50vw] h-[50vw] rounded-full animate-morph-blob opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 8%) 0%, transparent 70%)",
            animationDelay: "-3s",
            animationDuration: "12s",
          }}
        />
      </div>

      {/* ── Gold accent line at top ── */}
      <div
        className="absolute top-0 inset-x-0 h-px z-[2]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.76 0.13 85 / 40%) 30%, oklch(0.76 0.13 85 / 60%) 50%, oklch(0.76 0.13 85 / 40%) 70%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection direction="up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
            {t("ctaTitle")}
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            {t("ctaSubtitle")}
          </p>
        </AnimatedSection>

        {/* Feature cards — staggered reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                variants={cardVariant}
                className="rounded-2xl p-6 sm:p-8 text-center group transition-all duration-500 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Gold icon / emoji */}
                <div className="flex justify-center mb-5">
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <span className="text-2xl sm:text-3xl">{feature.emoji}</span>
                    <Icon className="absolute -bottom-1 -end-1 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA button */}
        <AnimatedSection direction="up" delay={0.3} className="text-center mb-14 sm:mb-18">
          <MagneticButton asChild strength={0.25}>
            <Button size="lg" asChild>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg glow-gold transition-all duration-300 hover:brightness-110 hover:glow-gold-lg"
              >
                <span>{t("ctaButton")}</span>
                <ArrowLeft className="h-5 w-5 shrink-0 -scale-x-100" />
              </Link>
            </Button>
          </MagneticButton>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Upcoming events */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-5 w-5 text-primary/70" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  {upcomingCount > 0 ? (
                    <AnimatedCounter target={upcomingCount} />
                  ) : (
                    "0"
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                {t("upcomingEventsCount")}
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-border hidden sm:block" />

            {/* Categories */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Tag className="h-5 w-5 text-primary/70" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  {categoriesCount > 0 ? (
                    <AnimatedCounter target={categoriesCount} />
                  ) : (
                    "0"
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                {t("categoriesCount")}
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-border hidden sm:block" />

            {/* Venues */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-5 w-5 text-primary/70" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  {venuesCount > 0 ? (
                    <AnimatedCounter target={venuesCount} />
                  ) : (
                    "0"
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                {t("venuesCount")}
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Gold accent line at bottom ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-px z-[2]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.76 0.13 85 / 30%) 30%, oklch(0.76 0.13 85 / 50%) 50%, oklch(0.76 0.13 85 / 30%) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/category-carousel.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { formatLocalizedNumber } from "@/lib/format-number";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { CategoryItem } from "@/types/api";

// Fallback emoji map for categories without icons
const CATEGORY_EMOJIS: Record<string, string> = {
  music: "🎵",
  sport: "⚽",
  tech: "💻",
  food: "🍽️",
  culture: "🎭",
  business: "💼",
  art: "🎨",
};

function getCategoryEmoji(category: CategoryItem): string {
  if (category.iconUrl) return "";
  const slug = category.slug?.toLowerCase() ?? "";
  const nameEn = category.nameEn?.toLowerCase() ?? "";
  return (
    CATEGORY_EMOJIS[slug] ??
    CATEGORY_EMOJIS[nameEn] ??
    "📅"
  );
}

interface CategoryCarouselProps {
  categories: CategoryItem[];
}

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  // Embla carousel setup — RTL-aware
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    direction: locale === "ar" ? "rtl" : "ltr",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    /* eslint-disable react-hooks/set-state-in-effect -- initial sync required after embla carousel mounts */
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    /* eslint-enable react-hooks/set-state-in-effect */
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 sm:py-20 bg-background overflow-hidden">
      {/* ── Interactive 3D shapes background ── */}
      <Section3DBg theme="categories" />

      {/* Subtle decorative blobs — theme-aware */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-1/4 -start-1/4 w-[50vw] h-[50vw] rounded-full animate-morph-blob opacity-20 dark:opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 8%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -end-1/4 w-[40vw] h-[40vw] rounded-full animate-morph-blob opacity-15 dark:opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.13 85 / 6%) 0%, transparent 70%)",
            animationDelay: "-4s",
            animationDuration: "14s",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                <span className="gradient-text">{tCommon("categories")}</span>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                {t("categoriesSubtitle")}
              </p>
            </div>

            {/* Desktop navigation arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="h-10 w-10 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:text-primary disabled:opacity-30 transition-all"
                aria-label={t("prevCategory")}
              >
                {locale === "ar" ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronLeft className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="h-10 w-10 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:text-primary disabled:opacity-30 transition-all"
                aria-label={t("nextCategory")}
              >
                {locale === "ar" ? (
                  <ChevronLeft className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Embla Carousel */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="relative">
            {/* Carousel viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-5" style={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
                {categories.map((cat, index: number) => {
                  const emoji = getCategoryEmoji(cat);
                  const eventCount =
                    cat._count?.events ?? cat.eventCount ?? 0;
                  const displayName = locale === "ar" ? cat.nameAr : (cat.nameEn || cat.nameAr);

                  return (
                    <div
                      key={cat.id}
                      className="flex-none w-[160px] sm:w-[180px] lg:w-[200px]"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link href={`/categories/${cat.slug}`}>
                          <TiltCard tiltAmount={6} className="h-full">
                            <Card className="h-full border-primary/10 bg-card hover:border-primary/40 transition-colors duration-300 cursor-pointer overflow-hidden group shadow-sm hover:shadow-md">
                              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                                {/* Category icon / emoji */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                  {cat.iconUrl ? (
                                    <ImageWithFallback
                                      src={cat.iconUrl}
                                      alt={displayName}
                                      width={32}
                                      height={32}
                                      className="h-8 w-8"
                                    />
                                  ) : (
                                    <span className="text-2xl">{emoji}</span>
                                  )}
                                </div>

                                {/* Category name */}
                                <h3 className="font-bold text-sm leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                                  {displayName}
                                </h3>

                                {/* Event count */}
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  <span>
                                    {eventCount}{" "}
                                    {eventCount === 1
                                      ? t("eventSingular")
                                      : t("eventPlural")}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          </TiltCard>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Edge fade gradients — RTL-safe using CSS variables */}
            <div className="pointer-events-none absolute inset-y-0 start-0 w-12 [background:linear-gradient(to_right,var(--color-background),transparent)]" />
            <div className="pointer-events-none absolute inset-y-0 end-0 w-12 [background:linear-gradient(to_left,var(--color-background),transparent)]" />
          </div>
        </AnimatedSection>

        {/* Mobile dots indicator */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={() => scrollTo(index)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center p-0 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 h-6 bg-primary hover:bg-primary"
                  : "w-3 h-3 bg-primary/25 hover:bg-primary/40"
              }`}
              aria-label={t("goToSlide", { number: formatLocalizedNumber(index + 1, locale) })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/browse-events-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useEvents } from "@/hooks/use-events";
import { EventCard } from "./event-card";
import { EventFilters } from "./event-filters";
import { useTranslations, useLocale } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { motion } from "framer-motion";
import type { CategoryItem, EventItem } from "@/types/api";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertTriangle,
  X,
  SearchX,
} from "lucide-react";

interface BrowseEventsClientProps {
  categories: CategoryItem[];
}

export function BrowseEventsClient({ categories }: BrowseEventsClientProps) {
  const t = useTranslations("events");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [filters, setFilters] = useState({
    page: 1,
    limit: 20,
    category: "",
    search: "",
    startDateFrom: "",
    startDateTo: "",
    sortBy: "startDate",
    sortOrder: "asc" as "asc" | "desc",
  });

  const { data, isLoading, error } = useEvents(filters);

  const handleFilterChange = (newFilters: Record<string, unknown>) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setFilters({
      page: 1,
      limit: 20,
      category: "",
      search: "",
      startDateFrom: "",
      startDateTo: "",
      sortBy: "startDate",
      sortOrder: "asc",
    });
  };

  const hasActiveFilters =
    filters.category || filters.search || filters.startDateFrom || filters.startDateTo;

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="events" />

      {/* Theme-aware gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-background/70"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Gold decorative line divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Section header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight">
              {t("pageTitle")}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {t("subtitle")}
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <EventFilters
          categories={categories}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={clearFilters}
        />

        {/* Loading state with shimmer */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden glass-card"
              >
                <Skeleton className="aspect-[16/10] w-full shimmer" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4 shimmer" />
                  <Skeleton className="h-4 w-1/2 shimmer" />
                  <Skeleton className="h-4 w-1/3 shimmer" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state with premium styling */}
        {error && (
          <AnimatedSection direction="up">
            <Card className="border-destructive/20 bg-gradient-to-b from-destructive/5 to-transparent max-w-lg mx-auto mt-8">
              <CardContent className="p-10 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10"
                >
                  <AlertTriangle className="h-10 w-10 text-destructive" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {tc("error")}
                </h3>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                >
                  {tc("retry")}
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        )}

        {/* Empty state with premium styling */}
        {data?.data?.events && data.data.events.length === 0 && (
          <AnimatedSection direction="up">
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent max-w-md mx-auto mt-8">
              <CardContent className="p-10 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                >
                  <SearchX className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {t("noEvents")}
                </h3>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="mt-4 gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                  >
                    <X className="h-4 w-4" />
                    {tc("clearFilters")}
                  </Button>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        )}

        {/* Events grid with stagger animation */}
        {data?.data?.events && data.data.events.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {data.data.events.map((event: EventItem, index: number) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>

            {/* Premium Pagination */}
            {data.meta && data.meta.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-10">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(filters.page - 1)}
                  disabled={filters.page <= 1}
                  className="gap-1.5 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 disabled:opacity-40 disabled:hover:bg-transparent"
                  size="sm"
                >
                  {locale === "ar" ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  {t("prev")}
                </Button>

                <span className="text-sm text-muted-foreground px-3 font-medium">
                  {t("pageOf", {
                    page: data.meta.page,
                    total: data.meta.totalPages,
                  })}
                </span>

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(filters.page + 1)}
                  disabled={filters.page >= data.meta.totalPages}
                  className="gap-1.5 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 disabled:opacity-40 disabled:hover:bg-transparent"
                  size="sm"
                >
                  {t("next")}
                  {locale === "ar" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/event-filters.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useLocale, useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Search, X, SlidersHorizontal, Calendar } from "lucide-react";
import type { CategoryItem } from "@/types/api";

interface EventFiltersProps {
  categories: CategoryItem[];
  filters: {
    category: string;
    search: string;
    startDateFrom: string;
    startDateTo: string;
    sortBy: string;
    sortOrder: string;
  };
  onFilterChange: (filters: Record<string, unknown>) => void;
  onClear: () => void;
}

const PREMIUM_CUBIC = [0.22, 1, 0.36, 1] as const;

export function EventFilters({ categories, filters, onFilterChange, onClear }: EventFiltersProps) {
  const t = useTranslations("events");
  const locale = useLocale();

  const hasActiveFilters = filters.category || filters.search || filters.startDateFrom || filters.startDateTo;

  const currentSortValue = `${filters.sortBy}-${filters.sortOrder}`;

  return (
    <AnimatedSection direction="up" delay={0.1}>
      <div className="glass-card rounded-2xl p-4 sm:p-5">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {t("filterSort")}
            </span>
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            >
              <X className="h-3.5 w-3.5 me-1.5" />
              {t("clear")}
            </Button>
          )}
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder={t("filterSearch")}
              value={filters.search}
              onChange={(e) => onFilterChange({ search: e.target.value })}
              className={`ps-9 bg-background/50 border-border/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300 ${
                filters.search ? "border-primary/40 bg-primary/5" : ""
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            />
            {filters.search && (
              <div className="absolute end-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
            )}
          </div>

          {/* Category Select */}
          <Select
            value={filters.category}
            onValueChange={(value) => onFilterChange({ category: value === "__all__" ? "" : value })}
          >
            <SelectTrigger
              className={`w-full sm:w-[180px] bg-background/50 border-border/50 transition-all duration-300 ${
                filters.category ? "border-primary/40 bg-primary/5" : ""
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            >
              <SelectValue placeholder={t("allCategories")} />
            </SelectTrigger>
            <SelectContent className="glass-card">
              <SelectItem value="__all__">{t("allCategories")}</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.slug}>
                  {locale === "ar" ? cat.nameAr : (cat.nameEn || cat.nameAr)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Date From */}
          <div className="relative">
            <Calendar className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="date"
              value={filters.startDateFrom}
              onChange={(e) => onFilterChange({ startDateFrom: e.target.value })}
              placeholder={t("filterDate")}
              className={`ps-9 w-full sm:w-auto bg-background/50 border-border/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300 ${
                filters.startDateFrom ? "border-primary/40 bg-primary/5" : ""
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            />
          </div>

          {/* Sort Select */}
          <Select
            value={currentSortValue}
            onValueChange={(value) => {
              const [sortBy, sortOrder] = value.split("-");
              onFilterChange({ sortBy, sortOrder });
            }}
          >
            <SelectTrigger className="w-full sm:w-[180px] bg-background/50 border-border/50 transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass-card">
              <SelectItem value="startDate-asc">{t("sortDateAsc")}</SelectItem>
              <SelectItem value="startDate-desc">{t("sortDateDesc")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active filter indicators */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/30">
            {filters.search && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Search className="h-3 w-3" />
                {filters.search}
              </span>
            )}
            {filters.category && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {(() => {
                  const cat = categories.find((c) => c.slug === filters.category);
                  return cat ? (locale === "ar" ? cat.nameAr : (cat.nameEn || cat.nameAr)) : filters.category;
                })()}
              </span>
            )}
            {filters.startDateFrom && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {filters.startDateFrom}
              </span>
            )}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/event-detail-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Star,
  User,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Crown,
} from "lucide-react";

import { BookingForm } from "./booking-form";
import { EventCard } from "./event-card";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatKWD } from "@/lib/utils";
import { formatLocalizedNumber } from "@/lib/format-number";

/* ──────────────────────────────────────────────
   Props
   ────────────────────────────────────────────── */
interface EventDetailClientProps {
  event: {
    id: string;
    titleAr: string;
    titleEn?: string | null;
    descriptionAr: string;
    descriptionEn?: string | null;
    coverImageUrl: string;
    startDate: string;
    startTime: string;
    endTime?: string | null;
    isFeatured: boolean;
    category: { id: string; nameAr: string; nameEn?: string | null; slug: string };
    venue: {
      id: string;
      nameAr: string;
      nameEn?: string | null;
      address: string;
      city: string;
      capacity?: number | null;
    } | null;
    organizer: { id: string; name: string; avatarUrl?: string | null } | null;
    ticketTiers: {
      id: string;
      nameAr: string;
      type: string;
      price: string;
      quantityTotal: number;
      quantitySold: number;
      quantityAvailable: number;
      maxPerBooking: number;
    }[];
    reviews: {
      averageRating: number;
      totalReviews: number;
      recent: {
        id: string;
        rating: number;
        comment?: string | null;
        user: { name: string };
      }[];
    };
    relatedEvents: {
      id: string;
      titleAr: string;
      slug: string;
      coverImageUrl: string;
      startDate: string;
      startTime: string;
      venue: { nameAr: string; nameEn?: string; city: string };
      category: { nameAr: string; slug: string };
      lowestPrice: string;
      isFeatured?: boolean;
      ticketTiers: { price: string; quantityAvailable?: number; quantityTotal?: number; quantitySold?: number }[];
    }[];
  };
}

/* ──────────────────────────────────────────────
   Gold accent divider
   ────────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Sparkles className="h-4 w-4 text-primary/40" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export function EventDetailClient({ event }: EventDetailClientProps) {
  const t = useTranslations("eventDetail");
  const tc = useTranslations("common");
  const locale = useLocale();

  const date = new Date(event.startDate);
  const isFree = event.ticketTiers.every((tier) => tier.price === "0.000");

  const localeCode = locale === "ar" ? "ar-KW" : "en-US";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="cta" />

      {/* Theme-aware gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-background/70"
      />

      <div className="relative z-10 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          {/* ── Breadcrumb ── */}
          <AnimatedSection direction="down" delay={0}>
            <nav
              className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="transition-colors hover:text-primary"
              >
                {tc("home")}
              </Link>
              {locale === "ar" ? <ChevronLeft className="h-3.5 w-3.5 text-primary/50" /> : <ChevronRight className="h-3.5 w-3.5 text-primary/50" />}
              <Link
                href="/events"
                className="transition-colors hover:text-primary"
              >
                {tc("events")}
              </Link>
              {event.category && (
                <>
                  {locale === "ar" ? <ChevronLeft className="h-3.5 w-3.5 text-primary/50" /> : <ChevronRight className="h-3.5 w-3.5 text-primary/50" />}
                  <Link
                    href={`/categories/${event.category.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {locale === "ar" ? event.category.nameAr : (event.category.nameEn || event.category.nameAr)}
                  </Link>
                </>
              )}
              {locale === "ar" ? <ChevronLeft className="h-3.5 w-3.5 text-primary/50" /> : <ChevronRight className="h-3.5 w-3.5 text-primary/50" />}
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
              </span>
            </nav>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ── Main Content ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cover Image */}
              <AnimatedSection direction="up" delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden group aspect-[21/9]">
                  <ImageWithFallback
                    src={event.coverImageUrl}
                    alt={locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-primary/40" />
                  {/* Bottom gradient for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </AnimatedSection>

              {/* Title + Quick Info */}
              <AnimatedSection direction="up" delay={0.2}>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                      {locale === "ar" ? event.category?.nameAr : (event.category?.nameEn || event.category?.nameAr)}
                    </span>
                    {event.isFeatured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                        <Crown className="h-3 w-3" />
                        {t("featured")}
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">
                    {locale === "ar" ? event.titleAr : (event.titleEn || event.titleAr)}
                  </h1>
                  {(locale === "ar" ? event.titleEn : event.titleAr) && (
                    <p className="text-muted-foreground text-lg mb-4">
                      {locale === "ar" ? event.titleEn : event.titleAr}
                    </p>
                  )}

                  {/* Quick info pills */}
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1.5 text-foreground/80 border border-border">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>
                        {date.toLocaleDateString(localeCode, {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1.5 text-foreground/80 border border-border">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>
                        {event.startTime}
                        {event.endTime ? ` — ${event.endTime}` : ""}
                      </span>
                    </div>
                    {event.venue && (
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1.5 text-foreground/80 border border-border">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>
                          {locale === "ar" ? event.venue.nameAr : (event.venue.nameEn || event.venue.nameAr)}{locale === "ar" ? "، " : ", "}{event.venue.city}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              <GoldDivider />

              {/* About Section */}
              <AnimatedSection direction="up" delay={0.25}>
                <div>
                  <h2 className="gradient-text text-xl font-semibold mb-4">
                    {t("about")}
                  </h2>
                  <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line leading-relaxed">
                    {locale === "ar" ? event.descriptionAr : (event.descriptionEn || event.descriptionAr)}
                  </div>
                </div>
              </AnimatedSection>

              <GoldDivider />

              {/* Venue Section */}
              {event.venue && (
                <AnimatedSection direction="up" delay={0.3}>
                  <div>
                    <h2 className="gradient-text text-xl font-semibold mb-4">
                      {t("venue")}
                    </h2>
                    <motion.div
                      className="glass-card rounded-2xl p-6"
                      whileHover={{
                        borderColor: "oklch(0.76 0.13 85 / 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 border border-primary/20">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-lg">
                            {locale === "ar" ? event.venue.nameAr : (event.venue.nameEn || event.venue.nameAr)}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {event.venue.address}{locale === "ar" ? "، " : ", "}{event.venue.city}
                          </p>
                          {event.venue.capacity && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {t("capacity")}:{" "}
                              {event.venue.capacity.toLocaleString(localeCode)}{" "}
                              {t("person")}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              )}

              {/* Organizer Section */}
              {event.organizer && (
                <AnimatedSection direction="up" delay={0.35}>
                  <div>
                    <h2 className="gradient-text text-xl font-semibold mb-4">
                      {t("organizer")}
                    </h2>
                    <motion.div
                      className="glass-card rounded-2xl p-6"
                      whileHover={{
                        borderColor: "oklch(0.76 0.13 85 / 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/20">
                          {event.organizer.avatarUrl ? (
                            <Image
                              src={event.organizer.avatarUrl}
                              alt={event.organizer.name}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <User className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-lg">
                            {event.organizer.name}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              )}

              {/* Reviews Section */}
              {event.reviews.totalReviews > 0 && (
                <>
                  <GoldDivider />
                  <AnimatedSection direction="up" delay={0.4}>
                    <div>
                      <h2 className="gradient-text text-xl font-semibold mb-4">
                        {t("reviews")}
                      </h2>

                      {/* Rating summary */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.round(event.reviews.averageRating)
                                  ? "text-primary fill-primary"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Intl.NumberFormat(locale === "ar" ? "ar-KW" : "en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(event.reviews.averageRating)} (
                          {formatLocalizedNumber(event.reviews.totalReviews, locale)} {t("review")})
                        </span>
                      </div>

                      {/* Recent reviews */}
                      <div className="space-y-4">
                        {event.reviews.recent.map((review) => (
                          <motion.div
                            key={review.id}
                            className="glass-card rounded-xl p-4"
                            whileHover={{
                              borderColor: "oklch(0.76 0.13 85 / 0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium text-sm text-foreground">
                                {review.user.name}
                              </span>
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className="h-3 w-3 text-primary fill-primary"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                            {review.comment && (
                              <p className="text-sm text-muted-foreground">
                                {review.comment}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </>
              )}
            </div>

            {/* ── Sidebar — Booking Form ── */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="left" delay={0.3}>
                <div className="sticky top-20">
                  <div className="rounded-2xl border border-primary/20 p-1.5 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/5">
                    <BookingForm
                      eventId={event.id}
                      ticketTiers={event.ticketTiers}
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* ── Similar Events ── */}
          {event.relatedEvents && event.relatedEvents.length > 0 && (
            <>
              <div className="mt-16">
                <GoldDivider />
              </div>

              <AnimatedSection direction="up" delay={0.2} className="mt-8">
                <h2 className="gradient-text text-2xl font-bold mb-8">
                  {t("similarEvents")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.relatedEvents.map((related, idx) => (
                    <AnimatedSection
                      key={related.id}
                      direction="up"
                      delay={0.1 + idx * 0.08}
                    >
                      <EventCard
                        event={{
                          id: related.id,
                          titleAr: related.titleAr,
                          slug: related.slug,
                          coverImageUrl: related.coverImageUrl,
                          startDate: related.startDate,
                          startTime: related.startTime,
                          venue: related.venue,
                          category: related.category,
                          ticketTiers: related.ticketTiers,
                          isFeatured: related.isFeatured,
                        }}
                        variant="compact"
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </>
          )}
        </div>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/booking-form.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useCallback } from "react";
import { useSafeAuth } from "@/hooks/use-safe-auth";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { TicketSelector } from "./ticket-selector";
import { useCreateBooking } from "@/hooks/use-booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatKWD } from "@/lib/utils";
import { Loader2, AlertCircle, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TicketTier {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  type: string;
  price: string;
  quantityTotal: number;
  quantitySold: number;
  quantityAvailable: number;
  maxPerBooking: number;
}

interface BookingFormProps {
  eventId: string;
  ticketTiers: TicketTier[];
}

export function BookingForm({ eventId, ticketTiers }: BookingFormProps) {
  const { isSignedIn, isLoaded } = useSafeAuth();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("booking");
  const createBooking = useCreateBooking();

  const [ticketSelection, setTicketSelection] = useState<
    { ticketTierId: string; quantity: number }[]
  >([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeePhone, setAttendeePhone] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSelectionChange = useCallback(
    (selection: { ticketTierId: string; quantity: number }[], total: number) => {
      setTicketSelection(selection);
      setTotalAmount(total);
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push("/login");
      return;
    }

    if (ticketSelection.length === 0) {
      setError(t("mustSelectOne"));
      return;
    }

    if (!attendeeName.trim() || !attendeePhone.trim() || !attendeeEmail.trim()) {
      setError(t("fillAllFields"));
      return;
    }

    try {
      const result = await createBooking.mutateAsync({
        eventId,
        attendeeName: attendeeName.trim(),
        attendeePhone: attendeePhone.trim(),
        attendeeEmail: attendeeEmail.trim(),
        tickets: ticketSelection,
      });

      if (result.data?.booking?.id) {
        try {
          const paymentRes = await fetch("/api/v1/payments/initiate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId: result.data.booking.id, method: "KNET" }),
          });
          const paymentData = await paymentRes.json();

          if (paymentData.data?.redirectUrl) {
            window.location.href = paymentData.data.redirectUrl;
          } else {
            router.push(`/bookings/${result.data.booking.id}?pending=true`);
          }
        } catch {
          router.push(`/bookings/${result.data.booking.id}?pending=true`);
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t("bookingError");
      setError(message);
    }
  };

  const isFree =
    totalAmount === 0 &&
    ticketSelection.length > 0 &&
    ticketTiers.every((t) => t.price === "0.000");

  return (
    <div className="glass-card rounded-2xl p-6">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4 gradient-text">{t("selectTickets")}</h2>

      <TicketSelector ticketTiers={ticketTiers} onSelectionChange={handleSelectionChange} />

      {(totalAmount > 0 || isFree) && ticketSelection.length > 0 && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="border-t border-primary/10 pt-4">
            <h3 className="font-semibold mb-3 text-foreground">
              <span className="gold-underline">{t("attendeeInfo")}</span>
            </h3>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="attendee-name"
                  className="block text-sm font-medium mb-1 text-foreground/80"
                >
                  {t("fullName")}
                </label>
                <Input
                  id="attendee-name"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder={t("namePlaceholder")}
                  required
                  className="focus-visible:ring-primary/50 focus-visible:border-primary/50"
                />
              </div>
              <div>
                <label
                  htmlFor="attendee-phone"
                  className="block text-sm font-medium mb-1 text-foreground/80"
                >
                  {t("phone")}
                </label>
                <Input
                  id="attendee-phone"
                  value={attendeePhone}
                  onChange={(e) => setAttendeePhone(e.target.value)}
                  placeholder={t("phonePlaceholder")}
                  dir="ltr"
                  required
                  className="focus-visible:ring-primary/50 focus-visible:border-primary/50"
                />
              </div>
              <div>
                <label
                  htmlFor="attendee-email"
                  className="block text-sm font-medium mb-1 text-foreground/80"
                >
                  {t("email")}
                </label>
                <Input
                  id="attendee-email"
                  type="email"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                  placeholder={t("emailPlaceholder")}
                  dir="ltr"
                  required
                  className="focus-visible:ring-primary/50 focus-visible:border-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Error state with animation */}
          <AnimatePresence>
            {error && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 flex items-center gap-2"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Booking button with gold gradient */}
          <Button
            type="submit"
            className="w-full glow-gold bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground font-semibold text-base hover:opacity-95 transition-opacity"
            size="lg"
            disabled={createBooking.isPending || ticketSelection.length === 0}
          >
            {createBooking.isPending ? (
              <>
                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                {t("bookingInProgress")}
              </>
            ) : (
              `${t("bookNow")} — ${formatKWD(totalAmount, locale)}`
            )}
          </Button>

          {/* Login required notice */}
          {!isSignedIn && isLoaded && (
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
              <LogIn className="h-3.5 w-3.5" />
              {t("mustLogin")}
            </p>
          )}
        </form>
      )}

      {totalAmount === 0 && !isFree && ticketSelection.length === 0 && (
        <p className="text-sm text-muted-foreground text-center mt-4">
          {t("selectTicketsFirst")}
        </p>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/ticket-selector.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useMemo, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { formatKWD } from "@/lib/utils";
import { formatLocalizedNumber } from "@/lib/format-number";
import { Minus, Plus, Ticket, Sparkles, Bird, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TicketTier {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  type: string;
  price: string;
  quantityTotal: number;
  quantitySold: number;
  quantityAvailable: number;
  maxPerBooking: number;
}

interface TicketSelectorProps {
  ticketTiers: TicketTier[];
  onSelectionChange: (selection: { ticketTierId: string; quantity: number }[], total: number) => void;
}

const PREMIUM_CUBIC = [0.22, 1, 0.36, 1] as const;

function getTypeBadge(type: string, t: (key: string) => string) {
  switch (type) {
    case "VIP":
      return (
        <Badge className="bg-primary/15 text-primary border-primary/25 hover:bg-primary/20 gap-1">
          <Sparkles className="h-3 w-3" />
          {t("vip")}
        </Badge>
      );
    case "EARLY_BIRD":
      return (
        <Badge className="bg-primary/15 text-primary border-primary/25 hover:bg-primary/20 gap-1">
          <Bird className="h-3 w-3" />
          {t("earlyBird")}
        </Badge>
      );
    case "GROUP":
      return (
        <Badge className="bg-primary/15 text-primary border-primary/25 hover:bg-primary/20 gap-1">
          <Users className="h-3 w-3" />
          {t("group")}
        </Badge>
      );
    default:
      return null;
  }
}

export function TicketSelector({ ticketTiers, onSelectionChange }: TicketSelectorProps) {
  const t = useTranslations("tickets");
  const locale = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const { selection, totalAmount } = useMemo(() => {
    const sel: { ticketTierId: string; quantity: number }[] = [];
    let total = 0;
    for (const [tierId, qty] of Object.entries(quantities)) {
      if (qty > 0) {
        sel.push({ ticketTierId: tierId, quantity: qty });
        const tier = ticketTiers.find((t) => t.id === tierId);
        if (tier) total += parseFloat(tier.price) * qty;
      }
    }
    return { selection: sel, totalAmount: total };
  }, [quantities, ticketTiers]);

  // Fix: Use useEffect instead of useMemo for side effect
  useEffect(() => {
    onSelectionChange(selection, totalAmount);
  }, [selection, totalAmount, onSelectionChange]);

  const updateQuantity = (tierId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[tierId] ?? 0;
      const tier = ticketTiers.find((t) => t.id === tierId);
      if (!tier) return prev;
      const newQty = Math.max(0, Math.min(current + delta, tier.maxPerBooking, tier.quantityAvailable));
      return { ...prev, [tierId]: newQty };
    });
  };

  const totalTickets = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  if (ticketTiers.length === 0) {
    return (
      <AnimatedSection direction="up" delay={0.1}>
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
            <Ticket className="h-7 w-7 text-primary" />
          </div>
          <p className="text-muted-foreground">{t("noTickets")}</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <div className="space-y-3">
      <AnimatedSection direction="up" delay={0.1}>
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Ticket className="h-5 w-5 text-primary" />
          {t("selectTickets")}
        </h3>
      </AnimatedSection>

      {ticketTiers.map((tier, index) => {
        const qty = quantities[tier.id] ?? 0;
        const isSoldOut = tier.quantityAvailable <= 0;
        const isSelected = qty > 0;
        const typeBadge = getTypeBadge(tier.type, t);

        return (
          <AnimatedSection key={tier.id} direction="up" delay={0.15 + index * 0.08}>
            <motion.div
              layout={!prefersReducedMotion}
              className={`glass-card rounded-xl p-4 sm:p-5 transition-all duration-300 ${
                isSoldOut
                  ? "opacity-40"
                  : isSelected
                    ? "border-primary/50 bg-primary/5 glow-gold"
                    : "hover:border-primary/20"
              }`}
              style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {/* Tier name + type badge */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-semibold text-base">{locale === "ar" ? tier.nameAr : (tier.nameEn || tier.nameAr)}</span>
                    {typeBadge}
                    {isSoldOut && (
                      <Badge variant="destructive" className="text-[10px]">
                        {t("soldOut")}
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <div className="price-gold text-xl font-bold mb-1.5">
                    {tier.price === "0.000" ? t("free") : formatKWD(tier.price, locale)}
                  </div>

                  {/* Availability info */}
                  {!isSoldOut && (
                    <div className="text-xs text-muted-foreground">
                      <span>
                        {t("available")} {formatLocalizedNumber(tier.quantityAvailable, locale)}{" "}
                        {tier.quantityAvailable === 1 ? t("ticket") : t("tickets")}
                      </span>
                      {tier.maxPerBooking < 10 && (
                        <span className="ms-1">
                          • {t("maxPerBooking")} {formatLocalizedNumber(tier.maxPerBooking, locale)} {t("perBooking")}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Quantity controls */}
                {!isSoldOut && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:hover:scale-100"
                      onClick={() => updateQuantity(tier.id, -1)}
                      disabled={qty <= 0}
                      aria-label={t("decreaseQuantity")}
                      style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={qty}
                        initial={prefersReducedMotion ? false : { scale: 1.3, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-9 text-center font-bold text-base tabular-nums"
                      >
                        {formatLocalizedNumber(qty, locale)}
                      </motion.span>
                    </AnimatePresence>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:hover:scale-100"
                      onClick={() => updateQuantity(tier.id, 1)}
                      disabled={qty >= tier.maxPerBooking || qty >= tier.quantityAvailable}
                      aria-label={t("increaseQuantity")}
                      style={{ transitionTimingFunction: `cubic-bezier(${PREMIUM_CUBIC.join(",")})` }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        );
      })}

      {/* Total section */}
      {totalTickets > 0 && (
        <AnimatedSection direction="up" delay={0.15 + ticketTiers.length * 0.08}>
          <div
            className="rounded-xl p-4 sm:p-5 mt-2 border border-primary/30"
            style={{
              background: `linear-gradient(135deg, oklch(0.76 0.13 85 / 0.08) 0%, oklch(0.15 0.03 85 / 0.05) 100%)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-muted-foreground">{t("total")}</span>
                <div className="text-sm mt-0.5">
                  {formatLocalizedNumber(totalTickets, locale)} {totalTickets === 1 ? t("ticket") : t("tickets")}
                </div>
              </div>
              <div className="price-gold text-2xl font-bold">
                {formatKWD(totalAmount, locale)}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/category-page-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { EventCard } from "./event-card";
import { useTranslations, useLocale } from "next-intl";
import { Calendar, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import type { CategoryItem, EventItem } from "@/types/api";

interface CategoryPageClientProps {
  category: CategoryItem;
  events: EventItem[];
}

export function CategoryPageClient({ category, events }: CategoryPageClientProps) {
  const t = useTranslations("category");
  const locale = useLocale();

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="categories" />

      {/* Theme-aware gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-background/70"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Gold decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight">
              {t("eventsIn")} {locale === "ar" ? category.nameAr : (category.nameEn || category.nameAr)}
            </h1>
            {(locale === "ar" ? category.nameEn : category.nameAr) && (
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                {locale === "ar" ? category.nameEn : category.nameAr}
              </p>
            )}
          </div>
        </AnimatedSection>

        {events.length === 0 ? (
          <AnimatedSection direction="up">
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent max-w-md mx-auto">
              <CardContent className="p-10 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                >
                  <Calendar className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {t("noEventsInCategory")}
                </h3>
              </CardContent>
            </Card>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index: number) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/events/venue-page-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { EventCard } from "./event-card";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Users, Sparkles, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Card, CardContent } from "@/components/ui/card";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import type { VenueDetail, EventItem, TicketTierItem } from "@/types/api";

interface VenuePageClientProps {
  venue: VenueDetail;
}

export function VenuePageClient({ venue }: VenuePageClientProps) {
  const t = useTranslations("venue");
  const locale = useLocale();

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="stats" />

      {/* Theme-aware gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-background/70"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Gold decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Venue Header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-8">
            {venue.imageUrl && (
              <div className="relative rounded-2xl overflow-hidden group aspect-[21/9] mb-4">
                <ImageWithFallback
                  src={venue.imageUrl}
                  alt={locale === "ar" ? venue.nameAr : (venue.nameEn || venue.nameAr)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight mb-2">
              {locale === "ar" ? venue.nameAr : (venue.nameEn || venue.nameAr)}
            </h1>
            {(locale === "ar" ? venue.nameEn : venue.nameAr) && <p className="text-muted-foreground mb-3">{locale === "ar" ? venue.nameEn : venue.nameAr}</p>}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 border border-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{venue.address}{locale === "ar" ? "، " : ", "}{venue.city}</span>
              </div>
              {venue.capacity && (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 border border-primary/20">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{t("capacity")}: {venue.capacity.toLocaleString(locale === "ar" ? "ar-KW" : "en-US")}</span>
                </div>
              )}
            </div>
            {venue.description && (
              <p className="mt-3 text-muted-foreground">{venue.description}</p>
            )}
          </div>
        </AnimatedSection>

        {/* Upcoming Events */}
        <AnimatedSection direction="up" delay={0.15}>
          <h2 className="text-2xl font-bold gradient-text mb-4">{t("upcomingEvents")}</h2>
        </AnimatedSection>

        {venue.events.length === 0 ? (
          <AnimatedSection direction="up">
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent max-w-md mx-auto">
              <CardContent className="p-10 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                >
                  <Calendar className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {t("noUpcomingEvents")}
                </h3>
              </CardContent>
            </Card>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venue.events.map((event: EventItem, index: number) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <EventCard
                  event={{
                    ...event,
                    coverImageUrl: event.coverImageUrl ?? "",
                    startTime: event.startTime ?? "",
                    ticketTiers: event.ticketTiers.map((tier: TicketTierItem) => ({
                      ...tier,
                      quantityAvailable: Math.max(0, tier.quantityTotal - tier.quantitySold),
                    })),
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 10: EVENT PAGES
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/events/page.tsx
// ═══════════════════════════════════════════════════════════════
import { db } from "@/lib/db";
import { BrowseEventsClient } from "@/components/features/events/browse-events-client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "الفعاليات — منصة فعاليات الكويت" : "Events — Kuwait Events Platform",
    description: locale === "ar" ? "تصفح جميع الفعاليات في الكويت — فلتر بالتصنيف والتاريخ والبحث" : "Browse all events in Kuwait — filter by category, date, and search",
  };
}

export default async function EventsPage() {
  const categories = await db.category.findMany({
    include: {
      _count: { select: { events: { where: { status: "PUBLISHED", deletedAt: null } } } },
    },
    orderBy: { nameAr: "asc" },
  });

  return <BrowseEventsClient categories={categories} />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/events/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { EventDetailClient } from "@/components/features/events/event-detail-client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await db.event.findUnique({
    where: { slug, deletedAt: null },
    include: { category: true, venue: true },
  });
  if (!event) return { title: "فعالية غير موجودة" };

  return {
    title: `${event.titleAr} — منصة فعاليات الكويت`,
    description: event.descriptionAr?.slice(0, 160) ?? "تفاصيل الفعالية",
    openGraph: {
      title: event.titleAr,
      description: event.descriptionAr?.slice(0, 160),
      images: [{ url: event.coverImageUrl }],
      type: "article",
    },
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = await db.event.findUnique({
    where: { slug, deletedAt: null, status: "PUBLISHED" },
    include: {
      venue: true,
      category: { select: { id: true, nameAr: true, nameEn: true, slug: true } },
      organizer: { select: { id: true, name: true, avatarUrl: true } },
      ticketTiers: {
        orderBy: { price: "asc" },
      },
      reviews: {
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      },
    },
  });

  if (!event) notFound();

  // إحصائيات التقييمات
  const reviewStats = await db.review.aggregate({
    where: { eventId: event.id },
    _avg: { rating: true },
    _count: { rating: true },
  });

  // فعاليات مشابهة
  const relatedEvents = await db.event.findMany({
    where: {
      categoryId: event.categoryId,
      status: "PUBLISHED",
      deletedAt: null,
      id: { not: event.id },
    },
    include: {
      venue: { select: { nameAr: true, nameEn: true, city: true } },
      category: { select: { nameAr: true, nameEn: true, slug: true } },
      ticketTiers: {
        select: { price: true },
        take: 1,
        orderBy: { price: "asc" },
      },
    },
    take: 3,
    orderBy: { startDate: "asc" },
  });

  // Serialize Date objects to ISO strings for client component
  const eventData = {
    id: event.id,
    titleAr: event.titleAr,
    titleEn: event.titleEn,
    descriptionAr: event.descriptionAr,
    descriptionEn: event.descriptionEn,
    coverImageUrl: event.coverImageUrl,
    startDate: event.startDate.toISOString(),
    startTime: event.startTime,
    endTime: event.endTime,
    isFeatured: event.isFeatured,
    category: event.category,
    venue: event.venue,
    organizer: event.organizer,
    ticketTiers: event.ticketTiers.map((tier) => ({
      id: tier.id,
      nameAr: tier.nameAr,
      type: tier.type,
      price: tier.price,
      quantityTotal: tier.quantityTotal,
      quantitySold: tier.quantitySold,
      quantityAvailable: tier.quantityTotal - tier.quantitySold,
      maxPerBooking: tier.maxPerBooking,
    })),
    reviews: {
      averageRating: reviewStats._avg.rating ?? 0,
      totalReviews: reviewStats._count.rating,
      recent: event.reviews.map((r) => ({
        id: r.id,
        rating: r.rating,
        comment: r.comment,
        user: r.user,
      })),
    },
    relatedEvents: relatedEvents.map((e) => ({
      id: e.id,
      titleAr: e.titleAr,
      slug: e.slug,
      coverImageUrl: e.coverImageUrl,
      startDate: e.startDate.toISOString(),
      startTime: e.startTime,
      venue: e.venue
        ? { nameAr: e.venue.nameAr, nameEn: e.venue.nameEn ?? undefined, city: e.venue.city }
        : { nameAr: "", nameEn: undefined, city: "" },
      category: e.category,
      lowestPrice: e.ticketTiers[0]?.price ?? "0.000",
      isFeatured: false,
      ticketTiers: e.ticketTiers.map((t) => ({
        price: t.price,
      })),
    })),
  };

  return <EventDetailClient event={eventData} />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/events/[slug]/loading.tsx
// ═══════════════════════════════════════════════════════════════
export default function Loading() {
  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumb skeleton */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-muted/30 animate-pulse" />
          <div className="h-3 w-3 rounded bg-muted/30 animate-pulse" />
          <div className="h-4 w-16 rounded bg-muted/30 animate-pulse" />
          <div className="h-3 w-3 rounded bg-muted/30 animate-pulse" />
          <div className="h-4 w-24 rounded bg-muted/30 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content skeleton */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-[21/9] rounded-2xl skeleton-shimmer" />
            <div className="space-y-3">
              <div className="h-6 w-24 rounded bg-muted/30 animate-pulse" />
              <div className="h-8 w-3/4 rounded bg-muted/30 animate-pulse" />
              <div className="flex gap-3">
                <div className="h-8 w-32 rounded-full bg-muted/30 animate-pulse" />
                <div className="h-8 w-28 rounded-full bg-muted/30 animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-muted/30 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-muted/30 animate-pulse" />
              <div className="h-4 w-4/6 rounded bg-muted/30 animate-pulse" />
            </div>
          </div>
          {/* Sidebar skeleton */}
          <div className="space-y-4">
            <div className="h-64 rounded-2xl skeleton-shimmer" />
          </div>
        </div>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/events/loading.tsx
// ═══════════════════════════════════════════════════════════════
import { EventGridSkeleton } from "@/components/features/events/event-grid-skeleton";

export default function Loading() {
  return (
    <section className="relative py-8 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="h-9 w-48 rounded bg-muted/30 animate-pulse" />
          <div className="mt-2 h-5 w-72 rounded bg-muted/30 animate-pulse" />
        </div>
        <div className="mb-6 h-24 rounded-2xl skeleton-shimmer" />
        <EventGridSkeleton count={6} />
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/categories/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { CategoryPageClient } from "@/components/features/events/category-page-client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = await db.category.findUnique({ where: { slug } });
  if (!category) return { title: "تصنيف غير موجود" };
  return {
    title: `${category.nameAr} — منصة فعاليات الكويت`,
    description: `تصفح فعاليات ${category.nameAr} في الكويت`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await db.category.findUnique({ where: { slug } });
  if (!category) notFound();

  const events = await db.event.findMany({
    where: { category: { slug }, status: "PUBLISHED", deletedAt: null },
    include: {
      venue: { select: { nameAr: true, nameEn: true, city: true } },
      category: { select: { nameAr: true, nameEn: true, slug: true } },
      ticketTiers: {
        select: { price: true, quantityTotal: true, quantitySold: true },
      },
    },
    orderBy: { startDate: "asc" },
  });

  return <CategoryPageClient category={category} events={events} />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/venues/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { VenuePageClient } from "@/components/features/events/venue-page-client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const venue = await db.venue.findUnique({ where: { slug } });
  if (!venue) return { title: "مكان غير موجود" };
  return {
    title: `${venue.nameAr} — منصة فعاليات الكويت`,
    description: `فعاليات في ${venue.nameAr} — ${venue.address}`,
  };
}

export default async function VenuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = await db.venue.findUnique({
    where: { slug },
    include: {
      events: {
        where: { status: "PUBLISHED", deletedAt: null, startDate: { gte: new Date() } },
        include: {
          category: { select: { nameAr: true, nameEn: true, slug: true } },
          ticketTiers: {
            select: { price: true, quantityTotal: true, quantitySold: true },
            take: 1,
            orderBy: { price: "asc" },
          },
        },
        orderBy: { startDate: "asc" },
        take: 10,
      },
    },
  });
  if (!venue) notFound();

  return <VenuePageClient venue={venue} />;
}


// ██████████████████████████████████████████████████████████████
// ██  Section 11: BOOKINGS & PROFILE PAGES
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/bookings/page.tsx
// ═══════════════════════════════════════════════════════════════
import { requireServerUser } from "@/lib/server-auth";
import { MyBookingsClient } from "@/components/features/bookings/my-bookings-client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "حجوزاتي — منصة فعاليات الكويت" : "My Bookings — Kuwait Events Platform",
  };
}

export default async function MyBookingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // This ensures the user is authenticated before rendering the page
  await requireServerUser(locale);

  return <MyBookingsClient />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/bookings/[id]/page.tsx
// ═══════════════════════════════════════════════════════════════
import { db } from "@/lib/db";
import { getServerUser } from "@/lib/server-auth";
import { notFound, redirect } from "next/navigation";
import { BookingDetailClient } from "@/components/features/bookings/booking-detail-client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "تفاصيل الحجز — منصة فعاليات الكويت" : "Booking Details — Kuwait Events Platform",
  };
}

export default async function BookingDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<{ pending?: string; payment?: string }>;
}) {
  const { id, locale } = await params;
  const dbUser = await getServerUser();
  if (!dbUser) redirect(`/${locale}/login`);

  const booking = await db.booking.findUnique({
    where: { id, deletedAt: null },
    include: {
      event: {
        select: {
          id: true,
          titleAr: true,
          slug: true,
          coverImageUrl: true,
          startDate: true,
          startTime: true,
          venue: { select: { nameAr: true, nameEn: true, address: true, city: true } },
        },
      },
      tickets: {
        include: {
          ticketTier: { select: { nameAr: true, type: true, price: true } },
        },
      },
      payment: true,
    },
  });

  if (!booking || (booking.userId !== dbUser.id && dbUser.role !== "ADMIN")) {
    notFound();
  }

  const { pending } = await searchParams;

  // Serialize Date objects to ISO strings for client component
  const bookingData = {
    ...booking,
    createdAt: booking.createdAt.toISOString(),
    updatedAt: booking.updatedAt.toISOString(),
    deletedAt: booking.deletedAt?.toISOString() ?? null,
    event: {
      ...booking.event,
      startDate: booking.event.startDate.toISOString(),
    },
    tickets: booking.tickets.map((t) => ({
      id: t.id,
      ticketNumber: t.ticketNumber,
      qrCodeUrl: t.qrCodeUrl,
      ticketTier: { ...t.ticketTier },
    })),
    payment: booking.payment
      ? {
          id: booking.payment.id,
          amount: booking.payment.amount,
          status: booking.payment.status,
          method: booking.payment.method,
        }
      : null,
  };

  return <BookingDetailClient booking={bookingData} isPending={pending === "true"} />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/profile/page.tsx
// ═══════════════════════════════════════════════════════════════
import { requireServerUser } from "@/lib/server-auth";
import { ProfilePageClient } from "@/components/features/auth/profile-page-client";

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // This ensures the user is authenticated before rendering the page
  await requireServerUser(locale);

  return <ProfilePageClient />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(main)/[locale]/notifications/page.tsx
// ═══════════════════════════════════════════════════════════════
import { Suspense } from "react";
import { requireServerUser } from "@/lib/server-auth";
import { NotificationList } from "@/components/features/notifications/notification-list";

export default async function NotificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // This ensures the user is authenticated before rendering the page
  await requireServerUser(locale);

  return (
    <div className="container mx-auto ps-4 pe-4 py-8 max-w-2xl">
      <Suspense fallback={<div className="flex justify-center py-12"><div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" /></div>}>
        <NotificationList />
      </Suspense>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/bookings/booking-detail-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCancelBooking } from "@/hooks/use-booking";
import { formatKWD } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Ticket, AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { TicketQR } from "./ticket-qr";
import { Link } from "@/i18n/routing";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

interface BookingDetailClientProps {
  booking: {
    id: string;
    bookingNumber: string;
    status: string;
    totalAmount: string;
    quantity: number;
    attendeeName: string;
    attendeePhone: string;
    attendeeEmail: string;
    createdAt: string;
    event: {
      id: string;
      titleAr: string;
      titleEn?: string | null;
      slug: string;
      coverImageUrl: string;
      startDate: string;
      startTime: string;
      venue: { nameAr: string; nameEn?: string | null; address: string; city: string } | null;
    };
    tickets: {
      id: string;
      ticketNumber: string;
      qrCodeUrl?: string | null;
      ticketTier: { nameAr: string; nameEn?: string | null; type: string; price: string };
    }[];
    payment: {
      id: string;
      amount: string;
      status: string;
      method: string;
    } | null;
  };
  isPending: boolean;
}

function BookingDetailContent({ booking, isPending }: BookingDetailClientProps) {
  const locale = useLocale();
  const t = useTranslations("bookingDetail");
  const tBooking = useTranslations("booking");
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("payment");
  const cancelBooking = useCancelBooking();
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [paying, setPaying] = useState(false);

  const eventTitle = locale === "ar" ? booking.event.titleAr : (booking.event.titleEn ?? booking.event.titleAr);
  const venueName = booking.event.venue
    ? (locale === "ar" ? booking.event.venue.nameAr : (booking.event.venue.nameEn ?? booking.event.venue.nameAr))
    : null;

  const paymentStatusLabels: Record<string, string> = {
    SUCCESS: t("paymentSuccess"),
    PENDING: t("paymentPending"),
    REFUNDED: t("paymentRefunded"),
    FAILED: t("paymentFailed"),
  };

  const paymentStatusColors: Record<string, string> = {
    SUCCESS: "text-green-600",
    PENDING: "text-yellow-600",
    REFUNDED: "text-amber-600 dark:text-amber-400",
    FAILED: "text-red-600",
  };

  // Countdown timer — 15 minutes
  useEffect(() => {
    if (booking.status !== "PENDING") return;

    const createdAt = new Date(booking.createdAt).getTime();
    const expiryTime = createdAt + 15 * 60 * 1000;

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = expiryTime - now;

      if (diff <= 0) {
        setTimeLeft(t("expired"));
        clearInterval(timer);
        window.location.reload();
        return;
      }

      const minutes = Math.floor(diff / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [booking.status, booking.createdAt, t]);

  const isExpired = timeLeft === t("expired");

  const handlePayNow = async () => {
    setPaying(true);
    try {
      const res = await fetch("/api/v1/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking.id, method: "KNET" }),
      });
      const data = await res.json();
      if (data.data?.redirectUrl) {
        window.location.href = data.data.redirectUrl;
      } else {
        toast.error(data.error?.message ?? t("payNowFailed"));
        setPaying(false);
      }
    } catch {
      toast.error(t("payNowError"));
      setPaying(false);
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Payment success message */}
        {paymentStatus === "success" && booking.status === "CONFIRMED" && (
          <div className="mb-6 rounded-lg border-2 border-green-400 bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <div>
                <h3 className="font-semibold text-green-800 text-lg">{t("paymentCompleteTitle")}</h3>
                <p className="text-sm text-green-700">{t("paymentCompleteDesc")}</p>
              </div>
            </div>
          </div>
        )}

        {/* Payment failed message */}
        {paymentStatus === "failed" && (
          <div className="mb-6 rounded-lg border-2 border-red-400 bg-red-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">❌</span>
              <div>
                <h3 className="font-semibold text-red-800">{t("paymentFailTitle")}</h3>
                <p className="text-sm text-red-700">{t("paymentFailDesc")}</p>
              </div>
            </div>
          </div>
        )}

        {/* Pending booking alert */}
        {booking.status === "PENDING" && !isExpired && (
          <div className="mb-6 rounded-lg border-2 border-yellow-400 bg-yellow-50 p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-yellow-800">{t("pendingAlertTitle")}</h3>
                <p className="text-sm text-yellow-700">
                  {t("timeRemaining")} <span className="font-bold text-lg">{timeLeft}</span> {t("toCompletePayment")}
                </p>
              </div>
            </div>
            <Button
              className="w-full mt-3"
              size="lg"
              onClick={handlePayNow}
              disabled={paying}
            >
              {paying ? (
                <>
                  <Loader2 className="h-4 w-4 me-2 animate-spin" />
                  {t("redirectingToPayment")}
                </>
              ) : (
                `💳 ${t("payViaKNet")} — ${formatKWD(booking.totalAmount, locale)}`
              )}
            </Button>
            <p className="text-xs text-yellow-600 text-center mt-2">
              {t("testModeNotice")}
            </p>
          </div>
        )}

        {isExpired && (
          <div className="mb-6 rounded-lg border-2 border-red-400 bg-red-50 p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">{t("paymentExpiredTitle")}</h3>
                <p className="text-sm text-red-700">{t("paymentExpiredDesc")}</p>
              </div>
            </div>
          </div>
        )}

        {booking.status === "CANCELLED" && paymentStatus !== "failed" && (
          <div className="mb-6 rounded-lg border bg-muted p-4">
            <p className="font-medium text-muted-foreground">{t("bookingCancelled")}</p>
          </div>
        )}

        {booking.status === "CONFIRMED" && paymentStatus !== "success" && (
          <div className="mb-6 rounded-lg border-2 border-green-400 bg-green-50 p-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <h3 className="font-semibold text-green-800">{t("bookingConfirmed")}</h3>
            </div>
          </div>
        )}

        {booking.status === "REFUNDED" && (
          <div className="mb-6 rounded-lg border-2 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 p-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">{t("bookingRefunded")}</h3>
            </div>
          </div>
        )}

        {/* Booking details card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{t("bookingDetails")}</CardTitle>
              <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                {booking.bookingNumber}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Event */}
            <div className="flex gap-3">
              <ImageWithFallback
                src={booking.event.coverImageUrl}
                alt={eventTitle}
                className="h-16 w-24 rounded-md object-cover"
              />
              <div>
                <Link
                  href={`/events/${booking.event.slug}`}
                  className="font-medium hover:text-primary"
                >
                  {eventTitle}
                </Link>
                {venueName && (
                  <div className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{venueName}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t" />

            {/* Tickets */}
            <div>
              <h4 className="font-medium flex items-center gap-1.5 mb-2">
                <Ticket className="h-4 w-4" /> {t("tickets")}
              </h4>
              <div className="space-y-2">
                {booking.tickets.map((ticket) => {
                  const tierName = locale === "ar" ? ticket.ticketTier.nameAr : (ticket.ticketTier.nameEn ?? ticket.ticketTier.nameAr);
                  return (
                    <div key={ticket.id} className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                          {ticket.ticketNumber}
                        </span>
                        <span className="ms-2">{tierName}</span>
                      </div>
                      <span className="font-medium">{formatKWD(ticket.ticketTier.price, locale)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t" />

            {/* Attendee info */}
            <div>
              <h4 className="font-medium mb-2">{t("attendeeInfo")}</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>{t("nameLabel")}: {booking.attendeeName}</p>
                <p dir="ltr" className="text-start">{t("phoneLabel")}: {booking.attendeePhone}</p>
                <p dir="ltr" className="text-start">{t("emailLabel")}: {booking.attendeeEmail}</p>
              </div>
            </div>

            {/* Payment status */}
            {booking.payment && (
              <>
                <div className="border-t" />
                <div>
                  <h4 className="font-medium mb-2">{t("paymentStatus")}</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{t("paymentMethod")}</span>
                      <span className="font-medium">{booking.payment.method}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{t("paymentStatusLabel")}</span>
                      <span className={`font-medium ${paymentStatusColors[booking.payment.status] ?? ""}`}>
                        {paymentStatusLabels[booking.payment.status] ?? booking.payment.status}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="border-t" />

            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span>{t("total")}</span>
              <span className="text-primary">{formatKWD(booking.totalAmount, locale)}</span>
            </div>
          </CardContent>
        </Card>

        {/* QR Codes — only for confirmed bookings */}
        {booking.status === "CONFIRMED" && booking.tickets.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-lg">{t("yourTickets")}</h3>
            <div className="space-y-3">
              {booking.tickets.map((ticket) => {
                const tierName = locale === "ar" ? ticket.ticketTier.nameAr : (ticket.ticketTier.nameEn ?? ticket.ticketTier.nameAr);
                return (
                  <TicketQR
                    key={ticket.id}
                    ticketNumber={ticket.ticketNumber}
                    qrData={ticket.qrCodeUrl ?? `{"tn":"${ticket.ticketNumber}","bid":"${booking.id}","v":1}`}
                    tierName={tierName}
                    eventTitle={eventTitle}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-4 flex gap-3">
          {booking.status === "PENDING" && !isExpired && (
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => cancelBooking.mutate(booking.id)}
              disabled={cancelBooking.isPending}
            >
              {cancelBooking.isPending ? (
                <><Loader2 className="h-4 w-4 me-2 animate-spin" /> {t("cancelling")}</>
              ) : (
                tBooking("cancelBooking")
              )}
            </Button>
          )}
          <Button variant="outline" asChild>
            <Link href="/bookings">{t("myBookings")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function BookingDetailClient({ booking, isPending }: BookingDetailClientProps) {
  const t = useTranslations("bookingDetail");
  return (
    <Suspense fallback={<div className="py-8 text-center text-muted-foreground">{t("loading")}</div>}>
      <BookingDetailContent booking={booking} isPending={isPending} />
    </Suspense>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/bookings/my-bookings-client.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useBookings, useCancelBooking } from "@/hooks/use-booking";
import { formatKWD } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Section3DBg } from "@/components/ui/section-3d-bg";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import type { BookingItem } from "@/types/api";

export function MyBookingsClient() {
  const locale = useLocale();
  const t = useTranslations("bookings");
  const tCommon = useTranslations("common");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "cancelled">("upcoming");
  const cancelBooking = useCancelBooking();

  const statusMap = {
    upcoming: "CONFIRMED",
    past: "CONFIRMED",
    cancelled: "CANCELLED",
  };

  const { data, isLoading } = useBookings({
    status: statusMap[activeTab],
  });

  const bookings = data?.data?.bookings ?? [];

  const tabLabels: Record<string, string> = {
    upcoming: t("tabs.upcoming"),
    past: t("tabs.past"),
    cancelled: t("tabs.cancelled"),
  };

  const statusLabels: Record<string, string> = {
    CONFIRMED: t("status.confirmed"),
    PENDING: t("status.pending"),
    CANCELLED: t("status.cancelled"),
    REFUNDED: t("status.refunded"),
  };

  const statusColors: Record<string, string> = {
    CONFIRMED: "text-green-600",
    PENDING: "text-yellow-600",
    CANCELLED: "text-red-600",
    REFUNDED: "text-amber-600 dark:text-amber-400",
  };

  const emptyMessages: Record<string, string> = {
    upcoming: t("noUpcoming"),
    past: t("noPast"),
    cancelled: t("noCancelled"),
  };

  return (
    <section className="relative py-8 overflow-hidden min-h-screen">
      {/* ── Interactive 3D Background ── */}
      <Section3DBg theme="testimonials" />

      {/* Theme-aware gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-background/70"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Gold decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="h-5 w-5 text-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <h1 className="text-3xl font-bold gradient-text mb-6">{t("title")}</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b pb-2">
          {(["upcoming", "past", "cancelled"] as const).map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tabLabels[tab]}
            </Button>
          ))}
        </div>

        {isLoading && (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border p-4 flex gap-4">
                <Skeleton className="h-20 w-32 rounded-md" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && bookings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              {emptyMessages[activeTab]}
            </p>
            <Button asChild>
              <Link href="/events">{t("browseEvents")}</Link>
            </Button>
          </div>
        )}

        {!isLoading && bookings.length > 0 && (
          <div className="space-y-4">
            {bookings.map((booking: BookingItem) => {
              const date = new Date(booking.event.startDate);
              const eventTitle = locale === "ar" ? booking.event.titleAr : (booking.event.titleEn ?? booking.event.titleAr);
              const venueName = booking.event.venue
                ? (locale === "ar" ? booking.event.venue.nameAr : (booking.event.venue.nameEn ?? booking.event.venue.nameAr))
                : null;

              return (
                <Link
                  key={booking.id}
                  href={`/bookings/${booking.id}`}
                  className="block rounded-xl border p-4 hover:shadow-md transition-shadow bg-card/80 backdrop-blur-sm"
                >
                  <div className="flex gap-4">
                    <ImageWithFallback
                      src={booking.event.coverImageUrl}
                      alt={eventTitle}
                      className="h-20 w-32 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium truncate">{eventTitle}</h3>
                        <span className={`text-xs font-medium whitespace-nowrap ${statusColors[booking.status] ?? "text-muted-foreground"}`}>
                          {statusLabels[booking.status] ?? booking.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-0.5 mt-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          <span>{date.toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")}</span>
                        </div>
                        {venueName && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" />
                            <span>{venueName}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">
                          {t("ticketCount", { count: booking.quantity })} • {t("bookingNumber")}: {booking.bookingNumber}
                        </span>
                        <span className="font-semibold text-primary">
                          {formatKWD(booking.totalAmount, locale)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/bookings/ticket-qr.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { QRCodeSVG } from "qrcode.react";
import { useTranslations } from "next-intl";

interface TicketQRProps {
  ticketNumber: string;
  qrData: string;
  tierName: string;
  eventTitle: string;
}

export function TicketQR({ ticketNumber, qrData, tierName, eventTitle }: TicketQRProps) {
  const t = useTranslations("bookingDetail");

  return (
    <div className="rounded-xl border p-4 bg-card">
      <div className="flex items-start gap-4">
        {/* QR Code */}
        <div className="bg-white p-2 rounded-lg shrink-0">
          <QRCodeSVG
            value={qrData}
            size={120}
            level="M"
            includeMargin={false}
          />
        </div>

        {/* Ticket Info */}
        <div className="flex-1 min-w-0">
          <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-2">
            {ticketNumber}
          </p>
          <p className="font-medium text-sm">{tierName}</p>
          <p className="text-xs text-muted-foreground mt-1 truncate">{eventTitle}</p>
          <p className="text-xs text-green-600 mt-2 font-medium">
            ✅ {t("ticketConfirmed")}
          </p>
        </div>
      </div>
    </div>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 12: NOTIFICATIONS & REVIEWS COMPONENTS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/notifications/notification-item.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  TicketCheck,
  CreditCard,
  XCircle,
  Clock,
  ShoppingCart,
  Star,
  CheckCircle,
  RotateCcw,
  ScanLine,
  Bell,
} from "lucide-react";
import { NOTIFICATION_ICONS, NOTIFICATION_COLORS, NotificationType } from "@/lib/notifications/types";
import { useMarkAsRead, type NotificationData } from "@/hooks/use-notifications";

// Map icon name strings to actual Lucide React icon names
const ICON_NAME_SET = new Set<string>([
  "TicketCheck",
  "CreditCard",
  "XCircle",
  "Clock",
  "ShoppingCart",
  "Star",
  "CheckCircle",
  "RotateCcw",
  "ScanLine",
]);

function getColorClasses(type: string): string {
  return NOTIFICATION_COLORS[type as NotificationType] ?? "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
}

function NotificationIcon({ type }: { type: string }) {
  const iconName = NOTIFICATION_ICONS[type as NotificationType];
  const isValidIcon = iconName && ICON_NAME_SET.has(iconName);

  if (!isValidIcon) {
    return <Bell className="size-4" />;
  }

  switch (iconName) {
    case "TicketCheck":
      return <TicketCheck className="size-4" />;
    case "CreditCard":
      return <CreditCard className="size-4" />;
    case "XCircle":
      return <XCircle className="size-4" />;
    case "Clock":
      return <Clock className="size-4" />;
    case "ShoppingCart":
      return <ShoppingCart className="size-4" />;
    case "Star":
      return <Star className="size-4" />;
    case "CheckCircle":
      return <CheckCircle className="size-4" />;
    case "RotateCcw":
      return <RotateCcw className="size-4" />;
    case "ScanLine":
      return <ScanLine className="size-4" />;
    default:
      return <Bell className="size-4" />;
  }
}

function timeAgo(dateStr: string, locale: string, t: ReturnType<typeof useTranslations<"notifications">>): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) {
    return t("now");
  }
  if (diffMinutes < 60) {
    return t("minutesAgo", { count: diffMinutes });
  }
  if (diffHours < 24) {
    return t("hoursAgo", { count: diffHours });
  }
  if (diffDays < 7) {
    return t("daysAgo", { count: diffDays });
  }

  // Format the date for older notifications
  return date.toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

interface NotificationItemProps {
  notification: NotificationData;
  onClick?: () => void;
}

export function NotificationItem({ notification, onClick }: NotificationItemProps) {
  const t = useTranslations("notifications");
  const locale = useLocale();
  const markAsRead = useMarkAsRead();

  const colorClasses = getColorClasses(notification.type);
  const isArabic = locale === "ar";

  const title = isArabic ? notification.titleAr : notification.titleEn;
  const body = isArabic ? notification.bodyAr : notification.bodyEn;

  const handleClick = () => {
    if (!notification.isRead) {
      markAsRead.mutate(notification.id);
    }
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative flex w-full items-start gap-3 px-4 py-3 text-start transition-colors hover:bg-accent/50 ${
        !notification.isRead ? "bg-primary/5" : ""
      }`}
    >
      {/* Unread indicator dot */}
      {!notification.isRead && (
        <span className="absolute top-4 start-2 h-2 w-2 rounded-full bg-primary" />
      )}

      {/* Icon */}
      <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${colorClasses}`}>
        <NotificationIcon type={notification.type} />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-1 overflow-hidden ps-1">
        <p className={`text-sm leading-snug ${!notification.isRead ? "font-semibold" : "font-medium"}`}>
          {title}
        </p>
        <p className="text-xs text-muted-foreground line-clamp-2">{body}</p>
        <p className="text-xs text-muted-foreground/70">{timeAgo(notification.createdAt, locale, t)}</p>
      </div>
    </button>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/notifications/notification-list.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Bell, CheckCheck, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNotifications, useMarkAllAsRead } from "@/hooks/use-notifications";
import { NotificationItem } from "./notification-item";

export function NotificationList() {
  const t = useTranslations("notifications");
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useNotifications(filter, page);
  const markAllAsRead = useMarkAllAsRead();

  const notifications = data?.data ?? [];
  const meta = data?.meta;
  const totalPages = meta?.totalPages ?? 1;

  const handleMarkAllRead = () => {
    markAllAsRead.mutate();
  };

  const handleFilterChange = (value: string) => {
    setFilter(value as "all" | "unread");
    setPage(1);
  };

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        {notifications.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleMarkAllRead}
            disabled={markAllAsRead.isPending}
          >
            <CheckCheck className="me-2 size-4" />
            {t("markAllRead")}
          </Button>
        )}
      </div>

      <Separator />

      {/* Tabs */}
      <Tabs value={filter} onValueChange={handleFilterChange}>
        <TabsList>
          <TabsTrigger value="all">{t("all")}</TabsTrigger>
          <TabsTrigger value="unread">{t("unread")}</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="flex flex-col items-center justify-center gap-3 py-12">
          <AlertCircle className="size-8 text-destructive" />
          <p className="text-sm text-muted-foreground">{t("error")}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page)}
          >
            {t("retry")}
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 py-12">
          <Bell className="size-12 text-muted-foreground/40" />
          <p className="text-sm text-muted-foreground">{t("noNotifications")}</p>
        </div>
      )}

      {/* Notification List */}
      {!isLoading && !isError && notifications.length > 0 && (
        <>
          <ScrollArea className="max-h-[600px]">
            <div className="flex flex-col rounded-lg border">
              {notifications.map((notification, index) => (
                <div key={notification.id}>
                  <NotificationItem notification={notification} />
                  {index < notifications.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                {t("previous")}
              </Button>
              <span className="text-sm text-muted-foreground">
                {t("page", { current: page, total: totalPages })}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
              >
                {t("next")}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/reviews/rating-display.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingDisplayProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  count?: number;
}

const sizeMap = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function RatingDisplay({
  rating,
  maxRating = 5,
  size = "md",
  showValue = true,
  count,
}: RatingDisplayProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center" dir="ltr">
        {Array.from({ length: maxRating }).map((_, i) => {
          const starValue = i + 1;
          return (
            <Star
              key={i}
              className={cn(
                sizeMap[size],
                starValue <= Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : starValue - 0.5 <= rating
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "fill-transparent text-gray-300"
              )}
            />
          );
        })}
      </div>

      {showValue && (
        <span className="text-sm font-medium text-gray-700">
          {rating.toFixed(1)}
        </span>
      )}

      {count !== undefined && (
        <span className="text-sm text-gray-500">({count})</span>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/reviews/review-card.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { RatingDisplay } from "@/components/features/reviews/rating-display";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ReviewCardProps {
  review: {
    id: string;
    rating: number;
    comment: string | null;
    organizerReply?: string | null;
    organizerRepliedAt?: string | null;
    createdAt: string;
    user: {
      id: string;
      name: string;
      avatarUrl: string | null;
    };
  };
  showOrganizerReply?: boolean;
}

export function ReviewCard({
  review,
  showOrganizerReply = true,
}: ReviewCardProps) {
  const t = useTranslations("reviews");
  const locale = useLocale();

  const timeAgo = getTimeAgo(review.createdAt, locale);

  return (
    <div className="py-4 border-b last:border-0">
      {/* Review Header */}
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={review.user.avatarUrl || undefined} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {review.user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="font-medium text-sm">{review.user.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <RatingDisplay
                  rating={review.rating}
                  size="sm"
                  showValue={false}
                />
                <span className="text-xs text-gray-400">{timeAgo}</span>
              </div>
            </div>
          </div>

          {/* Comment */}
          {review.comment && (
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              {review.comment}
            </p>
          )}

          {/* Organizer Reply */}
          {showOrganizerReply && review.organizerReply && (
            <div className="mt-3 bg-gray-50 rounded-lg p-3 border-s-2 border-s-primary/30">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-xs">
                  {t("organizerReply")}
                </Badge>
                {review.organizerRepliedAt && (
                  <span className="text-xs text-gray-400">
                    {getTimeAgo(review.organizerRepliedAt, locale)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                {review.organizerReply}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getTimeAgo(dateString: string, locale: string = "ar"): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  const rtf = new Intl.RelativeTimeFormat(locale === "ar" ? "ar" : "en", { numeric: "auto" });

  if (diffSeconds < 60) return rtf.format(0, "second");
  if (diffMinutes < 60) return rtf.format(-diffMinutes, "minute");
  if (diffHours < 24) return rtf.format(-diffHours, "hour");
  if (diffDays < 7) return rtf.format(-diffDays, "day");
  if (diffWeeks < 4) return rtf.format(-diffWeeks, "week");
  if (diffMonths < 12) return rtf.format(-diffMonths, "month");
  return date.toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US");
}


// ██████████████████████████████████████████████████████████████
// ██  Section 13: DASHBOARD PAGES & COMPONENTS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/layout.tsx
// ═══════════════════════════════════════════════════════════════
// This layout is a pass-through.
// The actual layout with sidebar/header is in [locale]/layout.tsx
// because NextIntlClientProvider is only available inside [locale].
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/layout.tsx
// ═══════════════════════════════════════════════════════════════
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleUpdater } from "@/components/layout/locale-updater";

export default async function DashboardLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
      <LocaleUpdater locale={locale} />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/loading.tsx
// ═══════════════════════════════════════════════════════════════
export default function DashboardLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" />
        ))}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/page.tsx
// ═══════════════════════════════════════════════════════════════
import { StatsCards } from "@/components/features/dashboard/stats-cards";
import { RevenueChart } from "@/components/features/dashboard/revenue-chart";
import { RecentBookingsTable } from "@/components/features/dashboard/recent-bookings-table";
import { UpcomingEventsList } from "@/components/features/dashboard/upcoming-events-list";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function DashboardPage() {
  const t = await getTranslations("dashboard");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">{t("overview.title")}</h1>
        <p className="text-gray-500 mt-1">{t("overview.subtitle")}</p>
      </div>

      <StatsCards />

      <div className="grid gap-8 lg:grid-cols-2">
        <RevenueChart />
        <UpcomingEventsList />
      </div>

      <RecentBookingsTable />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/bookings/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useOrganizerBookings, useOrganizerEvents } from "@/hooks/use-dashboard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

const bookingStatusColors: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
  REFUNDED: "bg-purple-100 text-purple-700",
};

export default function DashboardBookingsPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const [eventFilter, setEventFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const { data: eventsData } = useOrganizerEvents({ limit: 100 });
  const { data: bookingsData, isLoading } = useOrganizerBookings({
    eventId: eventFilter || undefined,
    status: statusFilter || undefined,
  });

  const bookings = bookingsData?.data?.bookings ?? [];
  const events = eventsData?.data?.events ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("bookings.title")}</h1>
        <p className="text-gray-500 mt-1">{t("bookings.subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select onValueChange={setEventFilter} value={eventFilter}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder={t("bookings.filterByEvent")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("bookings.allEvents")}</SelectItem>
            {events.map((e: Record<string, unknown>) => (
              <SelectItem key={e.id as string} value={e.id as string}>
                {e.titleAr as string}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setStatusFilter} value={statusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder={t("bookings.filterByStatus")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("bookings.allStatuses")}</SelectItem>
            <SelectItem value="PENDING">{t("bookings.status.PENDING")}</SelectItem>
            <SelectItem value="CONFIRMED">{t("bookings.status.CONFIRMED")}</SelectItem>
            <SelectItem value="CANCELLED">{t("bookings.status.CANCELLED")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bookings Table */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : bookings.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>{t("bookings.noBookings")}</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("bookings.table.number")}</TableHead>
              <TableHead>{t("bookings.table.event")}</TableHead>
              <TableHead>{t("bookings.table.attendee")}</TableHead>
              <TableHead>{t("bookings.table.quantity")}</TableHead>
              <TableHead>{t("bookings.table.amount")}</TableHead>
              <TableHead>{t("bookings.table.status")}</TableHead>
              <TableHead>{t("bookings.table.date")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking: Record<string, unknown>) => (
              <TableRow key={booking.id as string}>
                <TableCell className="font-mono text-sm">
                  {booking.bookingNumber as string}
                </TableCell>
                <TableCell>{(booking.event as Record<string, string>)?.titleAr}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{booking.attendeeName as string}</p>
                    <p className="text-xs text-gray-500">{booking.attendeeEmail as string}</p>
                  </div>
                </TableCell>
                <TableCell>{booking.quantity as number}</TableCell>
                <TableCell dir="ltr" className="text-end">
                  {booking.totalAmount as string} KWD
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={bookingStatusColors[booking.status as string] || ""}
                  >
                    {t(`bookings.status.${booking.status as string}`)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(booking.createdAt as string).toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/events/page.tsx
// ═══════════════════════════════════════════════════════════════
import { EventTable } from "@/components/features/dashboard/event-table";
import { CreateEventButton } from "@/components/features/dashboard/create-event-button";
import { getTranslations } from "next-intl/server";

export default async function MyEventsPage() {
  const t = await getTranslations("dashboard");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("events.myEvents")}</h1>
          <p className="text-gray-500 mt-1">{t("events.manageSubtitle")}</p>
        </div>
        <CreateEventButton />
      </div>

      <EventTable />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/events/new/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateEvent } from "@/hooks/use-event-mutations";
import { createEventSchema, type CreateEventInput } from "@/lib/validators/event-schema";
import { useCategories } from "@/hooks/use-categories";
import { ImageUploader } from "@/components/features/dashboard/image-uploader";
import { TicketTierBuilder } from "@/components/features/dashboard/ticket-tier-builder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, ArrowLeft, ArrowRight, Check } from "lucide-react";

const STEPS = ["basic", "media", "tickets", "review"] as const;

export default function CreateEventPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const router = useRouter();
  const createEvent = useCreateEvent();
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<CreateEventInput>({
    resolver: zodResolver(createEventSchema) as unknown as Resolver<CreateEventInput>,
    defaultValues: {
      titleAr: "",
      descriptionAr: "",
      coverImageUrl: "",
      galleryUrls: "[]",
      startDate: "",
      startTime: "18:00",
      categoryId: "",
      ticketTiers: [
        {
          nameAr: "",
          type: "STANDARD",
          price: "0.000",
          quantityTotal: 100,
          maxPerBooking: 10,
        },
      ],
    },
  });

  const { data: categoriesData } = useCategories();
  const categories = categoriesData?.data?.categories ?? [];

  const stepTitles = [
    t("events.steps.basic"),
    t("events.steps.media"),
    t("events.steps.tickets"),
    t("events.steps.review"),
  ];

  const nextStep = async () => {
    let fieldsToValidate: (keyof CreateEventInput)[] = [];
    if (currentStep === 0) {
      fieldsToValidate = [
        "titleAr",
        "descriptionAr",
        "startDate",
        "startTime",
        "categoryId",
      ];
    } else if (currentStep === 1) {
      fieldsToValidate = ["coverImageUrl"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["ticketTiers"];
    }

    const valid = await form.trigger(fieldsToValidate);
    if (valid && currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit = async (data: CreateEventInput) => {
    try {
      await createEvent.mutateAsync(data);
      router.push(`/${locale}/dashboard/events`);
    } catch (error: unknown) {
      console.error("Create event failed:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("events.createTitle")}</h1>
        <p className="text-gray-500 mt-1">{t("events.createSubtitle")}</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-2">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center">
            <div
              className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium ${
                i < currentStep
                  ? "bg-primary text-white"
                  : i === currentStep
                  ? "bg-primary/10 text-primary border-2 border-primary"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-0.5 w-12 mx-1 ${
                  i < currentStep ? "bg-primary" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Step 1: Basic Info */}
        {currentStep === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>{stepTitles[0]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("events.titleAr")}</label>
                  <Input
                    {...form.register("titleAr")}
                  />
                  {form.formState.errors.titleAr && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.titleAr.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("events.titleEn")}</label>
                  <Input
                    {...form.register("titleEn")}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.descriptionAr")}</label>
                <Textarea
                  {...form.register("descriptionAr")}
                  rows={4}
                />
                {form.formState.errors.descriptionAr && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.descriptionAr.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.descriptionEn")}</label>
                <Textarea
                  {...form.register("descriptionEn")}
                  rows={4}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("events.startDate")}</label>
                  <Input
                    type="date"
                    {...form.register("startDate")}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("events.startTime")}</label>
                  <Input
                    type="time"
                    {...form.register("startTime")}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("events.endDate")}</label>
                  <Input
                    type="date"
                    {...form.register("endDate")}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    {t("events.category")}
                  </label>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("categoryId", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("events.selectCategory")} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat: Record<string, unknown>) => (
                        <SelectItem key={cat.id as string} value={cat.id as string}>
                          {cat.nameAr as string}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.categoryId && (
                    <p className="text-sm text-red-500 mt-1">
                      {form.formState.errors.categoryId.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Media */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>{stepTitles[1]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ImageUploader
                value={form.watch("coverImageUrl")}
                onChange={(url) => form.setValue("coverImageUrl", url)}
                label={t("events.coverImage")}
              />
              {form.formState.errors.coverImageUrl && (
                <p className="text-sm text-red-500">{form.formState.errors.coverImageUrl.message}</p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 3: Ticket Tiers */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>{stepTitles[2]}</CardTitle>
            </CardHeader>
            <CardContent>
              <TicketTierBuilder form={form} />
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>{stepTitles[3]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">{t("events.titleAr")}:</span>
                  <span className="font-medium">
                    {form.watch("titleAr")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    {t("events.startDate")}:
                  </span>
                  <span className="font-medium">
                    {form.watch("startDate")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    {t("events.tierCount")}:
                  </span>
                  <span className="font-medium">
                    {form.watch("ticketTiers")?.length}
                  </span>
                </div>
                {form.watch("coverImageUrl") && (
                  <div className="mt-4">
                    <img
                      src={form.watch("coverImageUrl")}
                      alt="Cover preview"
                      className="w-full max-w-sm rounded-lg object-cover aspect-video"
                    />
                  </div>
                )}
              </div>

              <div className="p-4 bg-amber-50 rounded-lg text-amber-800 text-sm">
                {t("events.draftNotice")}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            <ArrowRight className="h-4 w-4 me-2" />
            {t("events.prevStep")}
          </Button>

          {currentStep < STEPS.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              {t("events.nextStep")}
              <ArrowLeft className="h-4 w-4 ms-2" />
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={createEvent.isPending}
                onClick={form.handleSubmit(async (data) => {
                  await createEvent.mutateAsync({ ...data, status: "DRAFT" } as CreateEventInput);
                  router.push(`/${locale}/dashboard/events`);
                })}
              >
                {t("events.saveDraft")}
              </Button>
              <Button
                type="submit"
                disabled={createEvent.isPending}
              >
                {createEvent.isPending && (
                  <Loader2 className="h-4 w-4 me-2 animate-spin" />
                )}
                {t("events.publish")}
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/events/[id]/edit/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useForm, type UseFormReturn, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateEvent } from "@/hooks/use-event-mutations";
import { updateEventSchema, type UpdateEventInput } from "@/lib/validators/event-schema";
import type { CreateEventInput } from "@/lib/validators/event-schema";
import { ImageUploader } from "@/components/features/dashboard/image-uploader";
import { TicketTierBuilder } from "@/components/features/dashboard/ticket-tier-builder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function EditEventPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;
  const updateEvent = useUpdateEvent();

  const { data: eventData, isLoading } = useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      const res = await fetch(`/api/v1/events/${eventId}`);
      if (!res.ok) throw new Error("Event not found");
      return res.json();
    },
  });

  const event = eventData?.data?.event;

  const form = useForm<UpdateEventInput>({
    resolver: zodResolver(updateEventSchema) as unknown as Resolver<UpdateEventInput>,
    values: event
      ? {
          titleAr: event.titleAr ?? "",
          titleEn: event.titleEn || "",
          descriptionAr: event.descriptionAr ?? "",
          descriptionEn: event.descriptionEn || "",
          coverImageUrl: event.coverImageUrl ?? "",
          galleryUrls: typeof event.galleryUrls === "string" ? event.galleryUrls : JSON.stringify(event.galleryUrls ?? []),
          startDate: event.startDate?.split("T")[0] ?? "",
          startTime: event.startTime ?? "",
          categoryId: event.categoryId ?? "",
          venueId: event.venueId || "",
          ticketTiers: event.ticketTiers?.map((tier: Record<string, unknown>) => ({
            nameAr: (tier.nameAr as string) ?? "",
            nameEn: (tier.nameEn as string) || "",
            type: (tier.type as string) ?? "STANDARD",
            price: (tier.price as string) ?? "0.000",
            quantityTotal: (tier.quantityTotal as number) ?? 100,
            maxPerBooking: (tier.maxPerBooking as number) ?? 10,
            description: (tier.description as string) || "",
          })),
        }
      : undefined,
  });

  const onSubmit = async (data: UpdateEventInput) => {
    try {
      await updateEvent.mutateAsync({ id: eventId, data });
      router.push(`/${locale}/dashboard/events`);
    } catch (error: unknown) {
      console.error("Update failed:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{t("events.notFound")}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{t("events.editTitle")}</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("events.basicInfo")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.titleAr")}</label>
                <Input {...form.register("titleAr")} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.titleEn")}</label>
                <Input {...form.register("titleEn")} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">{t("events.descriptionAr")}</label>
              <Textarea {...form.register("descriptionAr")} rows={4} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.startDate")}</label>
                <Input type="date" {...form.register("startDate")} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.startTime")}</label>
                <Input type="time" {...form.register("startTime")} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("events.endDate")}</label>
                <Input type="date" {...form.register("endDate")} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("events.media")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUploader
              value={form.watch("coverImageUrl") || ""}
              onChange={(url) => form.setValue("coverImageUrl", url)}
              label={t("events.coverImage")}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("events.ticketTiers")}</CardTitle>
          </CardHeader>
          <CardContent>
            <TicketTierBuilder form={form as unknown as UseFormReturn<CreateEventInput>} />
          </CardContent>
        </Card>

        {/* Status Change */}
        <Card>
          <CardHeader>
            <CardTitle>{t("events.publishStatus")}</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button
              type="button"
              variant={event.status === "DRAFT" ? "default" : "outline"}
              onClick={() => form.setValue("status", "DRAFT")}
            >
              {t("events.status.DRAFT")}
            </Button>
            <Button
              type="button"
              variant={event.status === "PUBLISHED" ? "default" : "outline"}
              onClick={() => form.setValue("status", "PUBLISHED")}
            >
              {t("events.status.PUBLISHED")}
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            {t("events.cancel")}
          </Button>
          <Button type="submit" disabled={updateEvent.isPending}>
            {updateEvent.isPending && (
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
            )}
            {t("events.saveChanges")}
          </Button>
        </div>
      </form>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/reviews/page.tsx
// ═══════════════════════════════════════════════════════════════
import { OrganizerReviews } from "@/components/features/dashboard/organizer-reviews";

export default function OrganizerReviewsPage() {
  return <OrganizerReviews />;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/tickets/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useValidateTicket } from "@/hooks/use-ticket-validation";
import { QRScanner } from "@/components/features/dashboard/qr-scanner";
import { ManualEntry } from "@/components/features/dashboard/manual-entry";
import { ValidationResult } from "@/components/features/dashboard/validation-result";
import { RecentValidations } from "@/components/features/dashboard/recent-validations";
import { CheckInStats } from "@/components/features/dashboard/check-in-stats";
import { EventSelector } from "@/components/features/dashboard/event-selector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Keyboard } from "lucide-react";

interface ValidationState {
  valid: boolean;
  ticket: {
    id: string;
    ticketNumber: string;
    isUsed: boolean;
    usedAt: string | null;
    ticketTier: {
      nameAr: string;
      nameEn: string | null;
      type: string;
      price: string;
    };
    booking: {
      attendeeName: string;
      attendeeEmail: string;
      attendeePhone: string;
      status: string;
      bookingNumber: string;
      quantity: number;
    };
    event: {
      id: string;
      titleAr: string;
      titleEn: string | null;
      startDate: string;
      startTime: string;
    } | null;
  } | null;
  reason: string | null;
}

export default function TicketScannerPage() {
  const t = useTranslations("dashboard");
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>();
  const [scannerActive, setScannerActive] = useState(true);
  const [validationResult, setValidationResult] = useState<ValidationState | null>(null);
  const [lastScannedNumber, setLastScannedNumber] = useState<string>("");

  const validateMutation = useValidateTicket();

  // Handle QR scan result
  const handleQRScan = useCallback(
    (scannedData: string) => {
      if (!selectedEventId) return;

      // Prevent duplicate scans of the same code rapidly
      if (scannedData === lastScannedNumber && validationResult) return;

      // Extract ticket number from QR data
      // QR data format: just the ticketNumber string (e.g., "TCK-1234-5678")
      // or a URL like "https://kuwaitevents.com/tickets/TCK-1234-5678"
      let ticketNumber = scannedData;

      // If it's a URL, extract the ticket number from the end
      if (scannedData.startsWith("http")) {
        const parts = scannedData.split("/");
        const lastPart = parts[parts.length - 1];
        if (lastPart.startsWith("TCK-")) {
          ticketNumber = lastPart;
        }
      }

      // Validate format before making API call
      if (!ticketNumber.startsWith("TCK-")) {
        setValidationResult({
          valid: false,
          ticket: null,
          reason: "TICKET_NOT_FOUND",
        });
        return;
      }

      setLastScannedNumber(ticketNumber);

      validateMutation.mutate(
        { ticketNumber, eventId: selectedEventId },
        {
          onSuccess: (response) => {
            setValidationResult({
              valid: response.data.valid,
              ticket: response.data.ticket,
              reason: response.data.reason,
            });

            // If valid, play success sound/vibration
            if (response.data.valid) {
              try {
                navigator.vibrate?.([100, 50, 100]);
              } catch {
                // Vibration not supported
              }
            }
          },
          onError: () => {
            setValidationResult({
              valid: false,
              ticket: null,
              reason: "TICKET_NOT_FOUND",
            });
          },
        }
      );
    },
    [selectedEventId, lastScannedNumber, validationResult, validateMutation]
  );

  // Handle manual entry
  const handleManualEntry = useCallback(
    (ticketNumber: string) => {
      if (!selectedEventId) return;

      setLastScannedNumber(ticketNumber);

      validateMutation.mutate(
        { ticketNumber, eventId: selectedEventId },
        {
          onSuccess: (response) => {
            setValidationResult({
              valid: response.data.valid,
              ticket: response.data.ticket,
              reason: response.data.reason,
            });
          },
          onError: () => {
            setValidationResult({
              valid: false,
              ticket: null,
              reason: "TICKET_NOT_FOUND",
            });
          },
        }
      );
    },
    [selectedEventId, validateMutation]
  );

  // Reset validation state to scan next ticket
  const handleReset = useCallback(() => {
    setValidationResult(null);
    setLastScannedNumber("");
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("tickets.title")}</h1>
        <p className="text-gray-500 mt-1">{t("tickets.subtitle")}</p>
      </div>

      {/* Event Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">
          {t("tickets.selectEventLabel")}:
        </span>
        <EventSelector value={selectedEventId} onChange={setSelectedEventId} />
      </div>

      {!selectedEventId ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Camera className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">{t("tickets.selectEventFirst")}</p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Check-in Stats */}
          <CheckInStats eventId={selectedEventId} />

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left: Scanner / Manual Entry */}
            <div className="space-y-4">
              <Tabs defaultValue="scanner" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="scanner" className="flex-1">
                    <Camera className="h-4 w-4 me-2" />
                    {t("tabs.scanner")}
                  </TabsTrigger>
                  <TabsTrigger value="manual" className="flex-1">
                    <Keyboard className="h-4 w-4 me-2" />
                    {t("tabs.manual")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="scanner" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        {t("tickets.scanQR")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <QRScanner
                        onScan={handleQRScan}
                        isActive={scannerActive && !validationResult}
                        onError={(err) =>
                          console.error("Scanner error:", err)
                        }
                      />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="manual" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        {t("tickets.manualTitle")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ManualEntry
                        onSubmit={handleManualEntry}
                        isLoading={validateMutation.isPending}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Validation Result */}
              {validationResult && (
                <ValidationResult
                  valid={validationResult.valid}
                  ticket={validationResult.ticket}
                  reason={validationResult.reason}
                  onReset={handleReset}
                />
              )}

              {/* Loading overlay */}
              {validateMutation.isPending && !validationResult && (
                <Card className="border-amber-200 bg-amber-50 dark:bg-amber-900/20">
                  <CardContent className="py-8 text-center">
                    <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-sm text-gray-600">
                      {t("tickets.validating")}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right: Recent Validations */}
            <RecentValidations eventId={selectedEventId} />
          </div>
        </>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/admin/admin-nav.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Users, CalendarDays, Tag, BarChart3 } from "lucide-react";

export function AdminNav() {
  const t = useTranslations("admin");
  const pathname = usePathname();
  const basePath = "/dashboard/admin";

  const items = [
    {
      href: `${basePath}/overview`,
      label: t("nav.overview"),
      icon: BarChart3,
    },
    {
      href: `${basePath}/users`,
      label: t("nav.users"),
      icon: Users,
    },
    {
      href: `${basePath}/events`,
      label: t("nav.events"),
      icon: CalendarDays,
    },
    {
      href: `${basePath}/categories`,
      label: t("nav.categories"),
      icon: Tag,
    },
  ];

  return (
    <nav className="flex gap-1 border-b pb-px">
      {items.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors",
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/stats-cards.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useDashboardStats } from "@/hooks/use-dashboard";
import {
  CalendarDays,
  ClipboardList,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatKWD } from "@/lib/utils";

export function StatsCards() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const stats = data?.data?.stats;

  const cards = [
    {
      title: t("stats.totalEvents"),
      value: stats?.totalEvents ?? 0,
      icon: CalendarDays,
      subtitle: `${stats?.publishedEvents ?? 0} ${t("stats.published")}`,
    },
    {
      title: t("stats.totalBookings"),
      value: stats?.confirmedBookings ?? 0,
      icon: ClipboardList,
      subtitle: `${t("stats.from")} ${stats?.totalBookings ?? 0}`,
    },
    {
      title: t("stats.totalRevenue"),
      value: formatKWD(stats?.totalRevenue ?? "0.000", locale),
      icon: DollarSign,
      subtitle: t("stats.confirmedRevenue"),
    },
    {
      title: t("stats.draftEvents"),
      value: stats?.draftEvents ?? 0,
      icon: TrendingUp,
      subtitle: t("stats.awaitingPublish"),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/revenue-chart.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useDashboardStats } from "@/hooks/use-dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatKWD } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function RevenueChart() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-40" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    );
  }

  const monthlyData = (data?.data?.monthlyRevenue ?? []).map((item: { month: string; revenue: string }) => ({
    month: item.month,
    revenue: parseFloat(item.revenue),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("revenueChart.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        {monthlyData.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-gray-400">
            {t("revenueChart.noData")}
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => [formatKWD(value, locale), t("revenueChart.revenue")]}
              />
              <Bar
                dataKey="revenue"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/upcoming-events-list.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useDashboardStats } from "@/hooks/use-dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function UpcomingEventsList() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-40" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const events = data?.data?.upcomingEvents ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("upcomingEvents.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        {events.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            {t("upcomingEvents.noUpcoming")}
          </p>
        ) : (
          <div className="space-y-3">
            {events.map((event: Record<string, unknown>) => (
              <Link
                key={event.id as string}
                href={`/dashboard/events/${event.id as string}/edit`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {!!event.coverImageUrl && (
                  <Image
                    src={event.coverImageUrl as string}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">
                    {event.titleAr as string}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(event.startDate as string).toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")} —{" "}
                    {event.startTime as string}
                  </p>
                </div>
                <div className="text-end shrink-0">
                  <p className="text-sm font-medium">
                    {(event._count as Record<string, number>)?.bookings ?? 0}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t("upcomingEvents.bookings")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/recent-bookings-table.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations } from "next-intl";
import { useDashboardStats } from "@/hooks/use-dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export function RecentBookingsTable() {
  const t = useTranslations("dashboard");
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-40" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const bookings = data?.data?.recentBookings ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("recentBookings.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        {bookings.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            {t("recentBookings.noBookings")}
          </p>
        ) : (
          <div className="space-y-3">
            {bookings.map((booking: Record<string, unknown>) => (
              <div
                key={booking.id as string}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                    {(booking.attendeeName as string)?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{booking.attendeeName as string}</p>
                    <p className="text-xs text-gray-500">
                      {(booking.event as Record<string, string>)?.titleAr}
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <p className="font-medium text-sm" dir="ltr">
                    {booking.totalAmount as string} KWD
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {booking.quantity as number} {t("recentBookings.tickets")}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/event-selector.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useOrganizerEvents } from "@/hooks/use-dashboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

interface EventSelectorProps {
  value: string | undefined;
  onChange: (eventId: string) => void;
}

interface EventItem {
  id: string;
  titleAr: string;
  titleEn: string | null;
  startDate: string;
  status: string;
}

export function EventSelector({ value, onChange }: EventSelectorProps) {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { data, isLoading } = useOrganizerEvents({ limit: 100 });

  if (isLoading) {
    return <Skeleton className="h-10 w-64" />;
  }

  const events: EventItem[] = data?.data?.events ?? [];

  // Only show published events with upcoming dates (for check-in)
  const activeEvents = events.filter(
    (e) =>
      e.status === "PUBLISHED" &&
      new Date(e.startDate) <=
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  );

  return (
    <Select onValueChange={onChange} value={value || ""}>
      <SelectTrigger className="w-64">
        <SelectValue placeholder={t("tickets.selectEvent")} />
      </SelectTrigger>
      <SelectContent>
        {activeEvents.length === 0 ? (
          <SelectItem value="none" disabled>
            {t("tickets.noActiveEvents")}
          </SelectItem>
        ) : (
          activeEvents.map((event) => (
            <SelectItem key={event.id} value={event.id}>
              {event.titleAr + " — " + new Date(event.startDate).toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/create-event-button.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CreateEventButton() {
  const t = useTranslations("dashboard");

  return (
    <Link href="/dashboard/events/new">
      <Button>
        <Plus className="h-4 w-4 me-2" />
        {t("events.create")}
      </Button>
    </Link>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/event-table.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useOrganizerEvents } from "@/hooks/use-dashboard";
import { useDeleteEvent } from "@/hooks/use-event-mutations";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react";

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-100 text-gray-700",
  PUBLISHED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
  SOLD_OUT: "bg-yellow-100 text-yellow-700",
  COMPLETED: "bg-amber-100 text-amber-700",
};

export function EventTable() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { data, isLoading } = useOrganizerEvents();
  const deleteEvent = useDeleteEvent();

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  const events = data?.data?.events ?? [];

  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">{t("events.noEvents")}</p>
        <Link href={`/dashboard/events/new`}>
          <Button className="mt-4">{t("events.createFirst")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("events.table.title")}</TableHead>
          <TableHead>{t("events.table.status")}</TableHead>
          <TableHead>{t("events.table.date")}</TableHead>
          <TableHead>{t("events.table.bookings")}</TableHead>
          <TableHead>{t("events.table.category")}</TableHead>
          <TableHead className="text-end">{t("events.table.actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event: Record<string, unknown>) => (
          <TableRow key={event.id as string}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                {!!event.coverImageUrl && (
                  <Image
                    src={event.coverImageUrl as string}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded object-cover"
                  />
                )}
                <div>
                  <p className="font-medium">{event.titleAr as string}</p>
                  {!!event.titleEn && (
                    <p className="text-xs text-gray-500">{event.titleEn as string}</p>
                  )}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="secondary"
                className={statusColors[event.status as string] || ""}
              >
                {t(`events.status.${event.status as string}`)}
              </Badge>
            </TableCell>
            <TableCell>
              {new Date(event.startDate as string).toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")}
            </TableCell>
            <TableCell>{event.bookingsCount as number}</TableCell>
            <TableCell>{(event.category as Record<string, string>)?.nameAr}</TableCell>
            <TableCell className="text-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/events/${event.slug as string}`}>
                      <Eye className="h-4 w-4 me-2" />
                      {t("events.actions.view")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/dashboard/events/${event.id as string}/edit`}
                    >
                      <Pencil className="h-4 w-4 me-2" />
                      {t("events.actions.edit")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => {
                      if (confirm(t("events.actions.confirmDelete"))) {
                        deleteEvent.mutate(event.id as string);
                      }
                    }}
                    disabled={deleteEvent.isPending}
                  >
                    <Trash2 className="h-4 w-4 me-2" />
                    {t("events.actions.delete")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/image-uploader.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useUploadFile } from "@/hooks/use-upload";
import { Button } from "@/components/ui/button";
import { Upload, X, Loader2 } from "lucide-react";

interface ImageUploaderProps {
  value?: string;
  onChange: (url: string) => void;
  folder?: "events" | "avatars" | "categories";
  label?: string;
}

export function ImageUploader({
  value,
  onChange,
  folder = "events",
  label,
}: ImageUploaderProps) {
  const t = useTranslations("dashboard");
  const upload = useUploadFile();
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) return;
      if (file.size > 5 * 1024 * 1024) {
        alert(t("events.imageTooLarge"));
        return;
      }

      try {
        const result = await upload.mutateAsync({ file, folder });
        onChange(result.publicUrl);
      } catch (error: unknown) {
        console.error("Upload error:", error);
      }
    },
    [upload, folder, onChange, t]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      {value ? (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
          <Image
            src={value}
            alt="Cover"
            fill
            className="object-cover"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 end-2 h-8 w-8"
            onClick={() => onChange("")}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center w-full aspect-video rounded-lg border-2 border-dashed transition-colors cursor-pointer ${
            dragOver
              ? "border-primary bg-primary/5"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = (e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (file) handleFile(file);
            };
            input.click();
          }}
        >
          {upload.isPending ? (
            <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
          ) : (
            <>
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">
                {t("events.dragOrClick")}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {t("events.maxSize")}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/ticket-tier-builder.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useFieldArray, UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import type { CreateEventInput } from "@/lib/validators/event-schema";

interface TicketTierBuilderProps {
  form: UseFormReturn<CreateEventInput>;
}

export function TicketTierBuilder({ form }: TicketTierBuilderProps) {
  const t = useTranslations("dashboard");
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticketTiers",
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{t("events.ticketTiers")}</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            append({
              nameAr: "",
              type: "STANDARD",
              price: "0.000",
              quantityTotal: 100,
              maxPerBooking: 10,
              description: "",
            })
          }
        >
          <Plus className="h-4 w-4 me-2" />
          {t("events.addTier")}
        </Button>
      </div>

      {fields.map((field, index) => (
        <Card key={field.id}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Input
                  placeholder={t("events.tierNameAr")}
                  {...form.register(`ticketTiers.${index}.nameAr`)}
                />
                <Select
                  onValueChange={(value) =>
                    form.setValue(`ticketTiers.${index}.type`, value as "STANDARD" | "VIP" | "EARLY_BIRD" | "GROUP")
                  }
                  defaultValue={field.type}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("events.tierType")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="STANDARD">
                      {t("events.tierTypes.STANDARD")}
                    </SelectItem>
                    <SelectItem value="VIP">
                      {t("events.tierTypes.VIP")}
                    </SelectItem>
                    <SelectItem value="EARLY_BIRD">
                      {t("events.tierTypes.EARLY_BIRD")}
                    </SelectItem>
                    <SelectItem value="GROUP">
                      {t("events.tierTypes.GROUP")}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="0.000 KWD"
                  {...form.register(`ticketTiers.${index}.price`)}
                  type="text"
                  dir="ltr"
                />
                <Input
                  placeholder={t("events.tierQuantity")}
                  {...form.register(`ticketTiers.${index}.quantityTotal`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  min={1}
                />
                <Input
                  placeholder={t("events.tierMaxPerBooking")}
                  {...form.register(`ticketTiers.${index}.maxPerBooking`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  min={1}
                  max={50}
                />
              </div>

              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-red-500 shrink-0"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            {form.formState.errors.ticketTiers?.[index] && (
              <p className="text-sm text-red-500 mt-2">
                {String(form.formState.errors.ticketTiers[index]?.message ?? "")}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/organizer-reviews.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useOrganizerEvents } from "@/hooks/use-dashboard";
import { useEventReviews, useReplyToReview } from "@/hooks/use-reviews";
import { RatingDisplay } from "@/components/features/reviews/rating-display";
import { ReviewCard } from "@/components/features/reviews/review-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare, Reply } from "lucide-react";

interface EventItem {
  id: string;
  titleAr: string;
  titleEn: string | null;
}

interface ReviewItem {
  id: string;
  rating: number;
  comment: string | null;
  organizerReply: string | null;
  organizerRepliedAt: string | null;
  createdAt: string;
  user: {
    id: string;
    name: string;
    avatarUrl: string | null;
  };
}

export function OrganizerReviews() {
  const t = useTranslations("dashboard");
  const tReviews = useTranslations("reviews");
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>();
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const { data: eventsData } = useOrganizerEvents({ limit: 100 });
  const events: EventItem[] = eventsData?.data?.events ?? [];

  const { data: reviewsData, isLoading } = useEventReviews(
    selectedEventId || "",
    { limit: 20, sortBy: "recent" }
  );

  const replyMutation = useReplyToReview();
  const reviews: ReviewItem[] = reviewsData?.data?.reviews ?? [];
  const stats = reviewsData?.data?.stats;

  const handleReply = (reviewId: string) => {
    if (!replyText.trim()) return;

    replyMutation.mutate(
      { reviewId, reply: replyText.trim() },
      {
        onSuccess: () => {
          setReplyingTo(null);
          setReplyText("");
        },
      }
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("reviews.title")}</h1>
        <p className="text-gray-500 mt-1">{t("reviews.subtitle")}</p>
      </div>

      {/* Event Selector */}
      <div className="flex items-center gap-4">
        <Select
          onValueChange={setSelectedEventId}
          value={selectedEventId || ""}
        >
          <SelectTrigger className="w-64">
            <SelectValue placeholder={t("reviews.selectEvent")} />
          </SelectTrigger>
          <SelectContent>
            {events.map((event) => (
              <SelectItem key={event.id} value={event.id}>
                {event.titleAr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!selectedEventId ? (
        <Card>
          <CardContent className="py-16 text-center">
            <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">
              {t("reviews.selectEventFirst")}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Summary Stats */}
          {stats && (
            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold">
                    {stats.averageRating.toFixed(1)}
                  </p>
                  <RatingDisplay
                    rating={stats.averageRating}
                    size="sm"
                    showValue={false}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {t("reviews.averageRating")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold">
                    {stats.totalReviews}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("reviews.totalReviews")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold">
                    {stats.distribution[5] || 0}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("reviews.fiveStarReviews")}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reviews List with Reply */}
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>{t("reviews.noReviews")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <ReviewCard
                      review={review}
                      showOrganizerReply={true}
                    />

                    {/* Reply Button / Form */}
                    <div className="mt-3 ps-13">
                      {!review.organizerReply && (
                        <>
                          {replyingTo === review.id ? (
                            <div className="flex gap-2 mt-2">
                              <Input
                                value={replyText}
                                onChange={(e) =>
                                  setReplyText(e.target.value)
                                }
                                placeholder={t(
                                  "reviews.replyPlaceholder"
                                )}
                                maxLength={500}
                              />
                              <Button
                                size="sm"
                                onClick={() =>
                                  handleReply(review.id)
                                }
                                disabled={
                                  replyMutation.isPending ||
                                  !replyText.trim()
                                }
                              >
                                {replyMutation.isPending
                                  ? "..."
                                  : t("reviews.sendReply")}
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setReplyingTo(null);
                                  setReplyText("");
                                }}
                              >
                                {tReviews("cancel")}
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setReplyingTo(review.id);
                                setReplyText("");
                              }}
                            >
                              <Reply className="h-3.5 w-3.5 me-1.5" />
                              {t("reviews.reply")}
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/qr-scanner.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Camera, CameraOff, Loader2 } from "lucide-react";

interface QRScannerProps {
  onScan: (data: string) => void;
  isActive: boolean;
  onError?: (error: string) => void;
}

export function QRScanner({ onScan, isActive, onError }: QRScannerProps) {
  const t = useTranslations("dashboard");
  const scannerRef = useRef<unknown>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [hasCamera, setHasCamera] = useState(true);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    setIsStarting(true);
    setCameraError(null);

    try {
      // Dynamically import html5-qrcode
      const { Html5Qrcode } = await import("html5-qrcode");

      // Create scanner instance
      const scannerId = "qr-reader-" + Date.now();

      // Create the container div if it doesn't exist
      let container = document.getElementById("qr-reader-container");
      if (!container) return;

      container.innerHTML = "";
      const scannerDiv = document.createElement("div");
      scannerDiv.id = scannerId;
      container.appendChild(scannerDiv);

      const scanner = new Html5Qrcode(scannerId);
      scannerRef.current = scanner;

      // Start scanning
      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        (decodedText: string) => {
          // Successfully scanned — call onScan
          onScan(decodedText);
        },
        () => {
          // QR code not found in this frame — ignore
        }
      );

      setHasCamera(true);
    } catch (error: unknown) {
      const err = error as Error & { name?: string };
      console.error("Camera error:", err);
      setHasCamera(false);

      if (err.name === "NotAllowedError") {
        setCameraError(t("tickets.cameraDenied"));
        onError?.(t("tickets.cameraDenied"));
      } else if (err.name === "NotFoundError") {
        setCameraError(t("tickets.noCamera"));
        onError?.(t("tickets.noCamera"));
      } else {
        setCameraError(t("tickets.cameraError"));
        onError?.(t("tickets.cameraError"));
      }
    } finally {
      setIsStarting(false);
    }
  }, [onScan, onError, t]);

  const stopCamera = useCallback(async () => {
    try {
      if (scannerRef.current) {
        const scanner = scannerRef.current as {
          stop: () => Promise<void>;
          clear: () => void;
        };
        await scanner.stop();
        scanner.clear();
        scannerRef.current = null;
      }
    } catch {
      // Ignore stop errors
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isActive, startCamera, stopCamera]);

  return (
    <div className="space-y-4">
      {/* Container for html5-qrcode scanner — this renders the video feed */}
      <div
        id="qr-reader-container"
        className="relative w-full aspect-square max-w-sm mx-auto rounded-xl overflow-hidden bg-black"
      />

      {/* Overlay while starting camera */}
      {isStarting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/80 rounded-xl">
          <Loader2 className="h-8 w-8 animate-spin mb-2" />
          <p className="text-sm">{t("tickets.startingCamera")}</p>
        </div>
      )}

      {/* Camera error overlay */}
      {cameraError && (
        <div className="w-full max-w-sm mx-auto bg-gray-100 rounded-xl p-6 text-center">
          <CameraOff className="h-12 w-12 mx-auto mb-3 text-red-400" />
          <p className="text-sm text-center mb-4">{cameraError}</p>
          <Button variant="outline" size="sm" onClick={startCamera}>
            {t("tickets.retryCamera")}
          </Button>
        </div>
      )}

      {/* No camera available */}
      {!hasCamera && !cameraError && (
        <div className="w-full max-w-sm mx-auto bg-gray-100 rounded-xl p-6 text-center">
          <CameraOff className="h-12 w-12 mx-auto mb-3 text-gray-400" />
          <p className="text-sm text-center">
            {t("tickets.useManualEntry")}
          </p>
        </div>
      )}

      {/* Camera toggle */}
      {hasCamera && !cameraError && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={isActive ? stopCamera : startCamera}
          >
            {isActive ? (
              <>
                <CameraOff className="h-4 w-4 me-2" />
                {t("tickets.stopCamera")}
              </>
            ) : (
              <>
                <Camera className="h-4 w-4 me-2" />
                {t("tickets.startCamera")}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/manual-entry.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ManualEntryProps {
  onSubmit: (ticketNumber: string) => void;
  isLoading: boolean;
}

export function ManualEntry({ onSubmit, isLoading }: ManualEntryProps) {
  const t = useTranslations("dashboard");
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = ticketNumber.trim().toUpperCase();
    if (trimmed) {
      onSubmit(trimmed);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="text-sm font-medium">
        {t("tickets.manualEntryLabel")}
      </label>
      <div className="flex gap-2">
        <Input
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value.toUpperCase())}
          placeholder="TCK-XXXX-XXXX"
          dir="ltr"
          className="font-mono text-center text-lg tracking-wider"
          maxLength={13}
        />
        <Button
          type="submit"
          disabled={isLoading || ticketNumber.trim().length < 13}
        >
          {isLoading ? "..." : t("tickets.validate")}
        </Button>
      </div>
      <p className="text-xs text-gray-500">
        {t("tickets.manualEntryHint")}
      </p>
    </form>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/validation-result.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  User,
  Ticket,
  Calendar,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TicketData {
  id: string;
  ticketNumber: string;
  isUsed: boolean;
  usedAt: string | null;
  ticketTier: {
    nameAr: string;
    nameEn: string | null;
    type: string;
    price: string;
  };
  booking: {
    attendeeName: string;
    attendeeEmail: string;
    attendeePhone: string;
    status: string;
    bookingNumber: string;
    quantity: number;
  };
  event: {
    id: string;
    titleAr: string;
    titleEn: string | null;
    startDate: string;
    startTime: string;
  } | null;
}

interface ValidationResultProps {
  valid: boolean;
  ticket: TicketData | null;
  reason: string | null;
  onReset: () => void;
}

const reasonLabels: Record<
  string,
  { icon: LucideIcon; color: string }
> = {
  TICKET_NOT_FOUND: { icon: XCircle, color: "text-red-500" },
  WRONG_EVENT: { icon: AlertTriangle, color: "text-orange-500" },
  ALREADY_USED: { icon: AlertTriangle, color: "text-orange-500" },
  BOOKING_NOT_CONFIRMED: { icon: XCircle, color: "text-red-500" },
};

export function ValidationResult({
  valid,
  ticket,
  reason,
  onReset,
}: ValidationResultProps) {
  const t = useTranslations("dashboard");
  const locale = useLocale();

  // ── Success state ──
  if (valid && ticket) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6 space-y-4">
          {/* Success Header */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-green-700">
                {t("tickets.validTicket")}
              </p>
              <p className="text-sm text-green-600">
                {t("tickets.checkInSuccess")}
              </p>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="grid gap-3 bg-white rounded-lg p-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                {t("tickets.attendee")}:
              </span>
              <span className="font-medium">
                {ticket.booking.attendeeName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Ticket className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                {t("tickets.tier")}:
              </span>
              <Badge variant="secondary">
                {ticket.ticketTier.nameAr}
              </Badge>
              <Badge variant="outline">{ticket.ticketTier.type}</Badge>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                {t("tickets.booking")}:
              </span>
              <span className="font-mono text-sm">
                {ticket.booking.bookingNumber}
              </span>
            </div>

            {ticket.event && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">
                  {t("tickets.eventTime")}:
                </span>
                <span className="text-sm">
                  {new Date(ticket.event.startDate).toLocaleDateString(
                    locale === "ar" ? "ar-KW" : "en-US"
                  )}{" "}
                  — {ticket.event.startTime}
                </span>
              </div>
            )}

            <div className="pt-2 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {t("tickets.ticketNumber")}:
                </span>
                <span className="font-mono font-medium" dir="ltr">
                  {ticket.ticketNumber}
                </span>
              </div>
            </div>
          </div>

          <Button
            onClick={onReset}
            className="w-full"
            variant="outline"
          >
            {t("tickets.scanNext")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ── Failure state ──
  const ReasonIcon = reason
    ? reasonLabels[reason]?.icon || XCircle
    : XCircle;
  const reasonColor = reason
    ? reasonLabels[reason]?.color || "text-red-500"
    : "text-red-500";

  const reasonMessages: Record<string, string> = {
    TICKET_NOT_FOUND: t("tickets.reasonNotFound"),
    WRONG_EVENT: t("tickets.reasonWrongEvent"),
    ALREADY_USED: t("tickets.reasonAlreadyUsed"),
    BOOKING_NOT_CONFIRMED: t("tickets.reasonNotConfirmed"),
  };

  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="pt-6 space-y-4">
        {/* Failure Header */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <ReasonIcon className={`h-7 w-7 ${reasonColor}`} />
          </div>
          <div>
            <p className="text-lg font-bold text-red-700">
              {t("tickets.invalidTicket")}
            </p>
            <p className="text-sm text-red-600">
              {reason
                ? reasonMessages[reason] || reason
                : t("tickets.unknownError")}
            </p>
          </div>
        </div>

        {/* Ticket details if available */}
        {ticket && (
          <div className="grid gap-2 bg-white rounded-lg p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {t("tickets.ticketNumber")}:
              </span>
              <span className="font-mono font-medium" dir="ltr">
                {ticket.ticketNumber}
              </span>
            </div>
            {ticket.booking && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {t("tickets.attendee")}:
                </span>
                <span className="font-medium">
                  {ticket.booking.attendeeName}
                </span>
              </div>
            )}
            {ticket.isUsed && ticket.usedAt && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {t("tickets.usedAt")}:
                </span>
                <span className="text-orange-600">
                  {new Date(ticket.usedAt).toLocaleString(locale === "ar" ? "ar-KW" : "en-US")}
                </span>
              </div>
            )}
          </div>
        )}

        <Button
          onClick={onReset}
          className="w-full"
          variant="outline"
        >
          {t("tickets.tryAgain")}
        </Button>
      </CardContent>
    </Card>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/check-in-stats.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations } from "next-intl";
import { useTicketStats } from "@/hooks/use-ticket-validation";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Ticket, TrendingUp, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CheckInStatsProps {
  eventId: string | undefined;
}

export function CheckInStats({ eventId }: CheckInStatsProps) {
  const t = useTranslations("dashboard");
  const { data, isLoading } = useTicketStats(eventId);

  if (isLoading || !eventId) {
    return (
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-16" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const stats = data?.data?.stats;

  const cards: {
    label: string;
    value: string | number;
    icon: LucideIcon;
    color: string;
  }[] = [
    {
      label: t("tickets.stats.totalTickets"),
      value: stats?.totalTickets ?? 0,
      icon: Ticket,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      label: t("tickets.stats.checkedIn"),
      value: stats?.usedTickets ?? 0,
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      label: t("tickets.stats.remaining"),
      value: stats?.unusedTickets ?? 0,
      icon: Users,
      color: "text-orange-600",
    },
    {
      label: t("tickets.stats.checkInRate"),
      value: `${stats?.checkInRate ?? "0.0"}%`,
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <card.icon className={`h-4 w-4 ${card.color}`} />
              <span className="text-xs text-gray-500">{card.label}</span>
            </div>
            <p className="text-2xl font-bold">{card.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/components/features/dashboard/recent-validations.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useValidationHistory } from "@/hooks/use-ticket-validation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, Clock } from "lucide-react";

interface RecentValidationsProps {
  eventId: string | undefined;
}

interface HistoryTicket {
  id: string;
  ticketNumber: string;
  usedAt: string;
  ticketTier: {
    nameAr: string;
    type: string;
    price: string;
  };
  booking: {
    attendeeName: string;
    attendeeEmail: string;
    bookingNumber: string;
  };
}

export function RecentValidations({ eventId }: RecentValidationsProps) {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { data, isLoading } = useValidationHistory(eventId);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-40" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const tickets: HistoryTicket[] = data?.data?.tickets ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {t("tickets.recentValidations")}
          {tickets.length > 0 && (
            <Badge variant="secondary" className="ms-auto">
              {tickets.length}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tickets.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            {t("tickets.noValidationsYet")}
          </p>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm truncate">
                      {ticket.booking.attendeeName}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-xs shrink-0"
                    >
                      {ticket.ticketTier.type}
                    </Badge>
                  </div>
                  <p
                    className="text-xs text-gray-500 font-mono"
                    dir="ltr"
                  >
                    {ticket.ticketNumber}
                  </p>
                </div>
                <div className="text-end shrink-0">
                  <p className="text-xs text-gray-500">
                    {ticket.usedAt
                      ? new Date(ticket.usedAt).toLocaleTimeString(
                          locale === "ar" ? "ar-KW" : "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 14: DASHBOARD ADMIN PAGES
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/admin/layout.tsx
// ═══════════════════════════════════════════════════════════════
import { redirect } from "next/navigation";
import { getServerUser } from "@/lib/server-auth";
import { AdminNav } from "@/components/features/admin/admin-nav";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const user = await getServerUser();

  if (!user || user.role !== "ADMIN") {
    redirect(`/${locale}/login`);
  }

  return (
    <div className="space-y-6">
      <AdminNav />
      {children}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/admin/overview/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useAdminStats } from "@/hooks/use-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Users,
  CalendarDays,
  ClipboardList,
  DollarSign,
  Tag,
  Star,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatsCard {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle: string;
  color: string;
}

function formatKWD(amount: number | string, locale: string): string {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  return new Intl.NumberFormat(locale === "ar" ? "ar-KW" : "en-US", {
    style: "currency",
    currency: "KWD",
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(value);
}

export default function AdminOverviewPage() {
  const t = useTranslations("admin");
  const locale = useLocale();
  const { data, isLoading } = useAdminStats();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const stats = data?.data;

  const cards: StatsCard[] = [
    {
      title: t("stats.totalUsers"),
      value: stats?.users.total ?? 0,
      icon: Users,
      subtitle: `+${stats?.users.newLastWeek ?? 0} ${t("stats.thisWeek")}`,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      title: t("stats.organizers"),
      value: stats?.users.organizers ?? 0,
      icon: TrendingUp,
      subtitle: t("stats.activeOrganizers"),
      color: "text-green-600",
    },
    {
      title: t("stats.totalEvents"),
      value: stats?.events.total ?? 0,
      icon: CalendarDays,
      subtitle: `${stats?.events.published ?? 0} ${t("stats.published")}`,
      color: "text-purple-600",
    },
    {
      title: t("stats.totalBookings"),
      value: stats?.bookings.confirmed ?? 0,
      icon: ClipboardList,
      subtitle: `${t("stats.from")} ${stats?.bookings.total ?? 0}`,
      color: "text-orange-600",
    },
    {
      title: t("stats.totalRevenue"),
      value: formatKWD(stats?.bookings.totalRevenue ?? "0.000", locale),
      icon: DollarSign,
      subtitle: t("stats.allTime"),
      color: "text-emerald-600",
    },
    {
      title: t("stats.last30DaysRevenue"),
      value: formatKWD(stats?.bookings.last30DaysRevenue ?? "0.000", locale),
      icon: DollarSign,
      subtitle: t("stats.last30Days"),
      color: "text-teal-600",
    },
    {
      title: t("stats.categories"),
      value: stats?.categories ?? 0,
      icon: Tag,
      subtitle: t("stats.activeCategories"),
      color: "text-pink-600",
    },
    {
      title: t("stats.reviews"),
      value: stats?.reviews ?? 0,
      icon: Star,
      subtitle: t("stats.totalReviews"),
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("overview.title")}</h1>
        <p className="text-gray-500 mt-1">{t("overview.subtitle")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {card.title}
              </CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/admin/users/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  useAdminUsers,
  useChangeUserRole,
  useToggleUserActive,
} from "@/hooks/use-admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal, Search, Shield, UserCheck, UserX } from "lucide-react";
import type { ChangeUserRoleInput, ToggleUserActiveInput } from "@/lib/validators/admin-schema";

interface AdminUser {
  id: string;
  clerkId: string;
  email: string;
  name: string;
  phone: string | null;
  avatarUrl: string | null;
  role: "ATTENDEE" | "ORGANIZER" | "ADMIN";
  isActive: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  eventsCount: number;
  bookingsCount: number;
  reviewsCount: number;
}

const roleColors: Record<string, string> = {
  ATTENDEE: "bg-amber-100 text-amber-700",
  ORGANIZER: "bg-green-100 text-green-700",
  ADMIN: "bg-purple-100 text-purple-700",
};

interface ConfirmDialogState {
  type: "role" | "active";
  userId: string;
  userName: string;
  newValue: string | boolean;
}

export default function AdminUsersPage() {
  const t = useTranslations("admin");
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("");
  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState | null>(null);

  const { data, isLoading } = useAdminUsers({
    search: search || undefined,
    role: roleFilter || undefined,
    limit: 20,
  });

  const changeRole = useChangeUserRole();
  const toggleActive = useToggleUserActive();

  const users: AdminUser[] = data?.data?.users ?? [];
  const roleStats: Record<string, number> = data?.data?.roleStats ?? {};

  const handleConfirm = () => {
    if (!confirmDialog) return;

    if (confirmDialog.type === "role") {
      changeRole.mutate(
        {
          userId: confirmDialog.userId,
          data: { role: confirmDialog.newValue as ChangeUserRoleInput["role"] },
        },
        { onSuccess: () => setConfirmDialog(null) }
      );
    } else {
      toggleActive.mutate(
        {
          userId: confirmDialog.userId,
          data: { isActive: confirmDialog.newValue as ToggleUserActiveInput["isActive"] },
        },
        { onSuccess: () => setConfirmDialog(null) }
      );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("users.title")}</h1>
        <p className="text-gray-500 mt-1">{t("users.subtitle")}</p>
      </div>

      {/* Role Stats */}
      <div className="flex gap-4 text-sm">
        <Badge variant="secondary">
          {t("users.attendees")}: {roleStats.ATTENDEE ?? 0}
        </Badge>
        <Badge variant="secondary">
          {t("users.organizers")}: {roleStats.ORGANIZER ?? 0}
        </Badge>
        <Badge variant="secondary">
          {t("users.admins")}: {roleStats.ADMIN ?? 0}
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("users.searchPlaceholder")}
            className="ps-9"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder={t("users.allRoles")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("users.allRoles")}</SelectItem>
            <SelectItem value="ATTENDEE">{t("users.role.ATTENDEE")}</SelectItem>
            <SelectItem value="ORGANIZER">{t("users.role.ORGANIZER")}</SelectItem>
            <SelectItem value="ADMIN">{t("users.role.ADMIN")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Users Table */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("users.table.name")}</TableHead>
              <TableHead>{t("users.table.email")}</TableHead>
              <TableHead>{t("users.table.role")}</TableHead>
              <TableHead>{t("users.table.status")}</TableHead>
              <TableHead>{t("users.table.events")}</TableHead>
              <TableHead>{t("users.table.bookings")}</TableHead>
              <TableHead>{t("users.table.joined")}</TableHead>
              <TableHead className="text-end">{t("users.table.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className={!user.isActive ? "opacity-60" : ""}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{user.email}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={roleColors[user.role] || ""}>
                    {t(`users.role.${user.role}`)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.isActive ? "default" : "destructive"} className="text-xs">
                    {user.isActive ? t("users.active") : t("users.inactive")}
                  </Badge>
                </TableCell>
                <TableCell>{user.eventsCount}</TableCell>
                <TableCell>{user.bookingsCount}</TableCell>
                <TableCell className="text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")}
                </TableCell>
                <TableCell className="text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {/* Role Changes */}
                      <DropdownMenuItem
                        onClick={() =>
                          setConfirmDialog({
                            type: "role",
                            userId: user.id,
                            userName: user.name,
                            newValue: "ORGANIZER",
                          })
                        }
                        disabled={user.role === "ORGANIZER"}
                      >
                        <Shield className="h-4 w-4 me-2" />
                        {t("users.makeOrganizer")}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          setConfirmDialog({
                            type: "role",
                            userId: user.id,
                            userName: user.name,
                            newValue: "ATTENDEE",
                          })
                        }
                        disabled={user.role === "ATTENDEE"}
                      >
                        <UserCheck className="h-4 w-4 me-2" />
                        {t("users.makeAttendee")}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          setConfirmDialog({
                            type: "role",
                            userId: user.id,
                            userName: user.name,
                            newValue: "ADMIN",
                          })
                        }
                        disabled={user.role === "ADMIN"}
                      >
                        <Shield className="h-4 w-4 me-2" />
                        {t("users.makeAdmin")}
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      {/* Active Toggle */}
                      {user.isActive ? (
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() =>
                            setConfirmDialog({
                              type: "active",
                              userId: user.id,
                              userName: user.name,
                              newValue: false,
                            })
                          }
                        >
                          <UserX className="h-4 w-4 me-2" />
                          {t("users.deactivate")}
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() =>
                            setConfirmDialog({
                              type: "active",
                              userId: user.id,
                              userName: user.name,
                              newValue: true,
                            })
                          }
                        >
                          <UserCheck className="h-4 w-4 me-2" />
                          {t("users.activate")}
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Confirm Dialog */}
      <Dialog open={!!confirmDialog} onOpenChange={() => setConfirmDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("users.confirmTitle")}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            {confirmDialog?.type === "role"
              ? t("users.confirmRoleChange", {
                  name: confirmDialog?.userName ?? "",
                  role: t(`users.role.${confirmDialog?.newValue}`),
                })
              : confirmDialog?.newValue
              ? t("users.confirmActivate", { name: confirmDialog?.userName ?? "" })
              : t("users.confirmDeactivate", { name: confirmDialog?.userName ?? "" })}
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialog(null)}>
              {t("cancel")}
            </Button>
            <Button
              onClick={handleConfirm}
              variant={confirmDialog?.newValue === false ? "destructive" : "default"}
              disabled={changeRole.isPending || toggleActive.isPending}
            >
              {t("confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/admin/events/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import {
  useAdminEvents,
  useFeatureEvent,
  useChangeEventStatus,
} from "@/hooks/use-admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  MoreHorizontal,
  Search,
  Star,
  StarOff,
  Eye,
  Ban,
  CheckCircle2,
} from "lucide-react";

interface EventOrganizer {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface EventCategory {
  id: string;
  nameAr: string;
  nameEn: string | null;
  slug: string;
}

interface EventVenue {
  id: string;
  nameAr: string;
  city: string;
}

interface AdminEvent {
  id: string;
  titleAr: string;
  titleEn: string | null;
  slug: string;
  status: string;
  isFeatured: boolean;
  startDate: string;
  startTime: string | null;
  coverImageUrl: string | null;
  deletedAt: string | null;
  createdAt: string;
  organizer: EventOrganizer;
  category: EventCategory | null;
  venue: EventVenue | null;
  ticketTiers: Array<{
    price: string;
    quantityTotal: number;
    quantitySold: number;
    quantityAvailable: number;
  }>;
  bookingsCount: number;
  reviewsCount: number;
  totalCapacity: number;
  totalSold: number;
}

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-100 text-gray-700",
  PUBLISHED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
  SOLD_OUT: "bg-yellow-100 text-yellow-700",
  COMPLETED: "bg-amber-100 text-amber-700",
};

export default function AdminEventsPage() {
  const t = useTranslations("admin");
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const { data, isLoading } = useAdminEvents({
    search: search || undefined,
    status: statusFilter || undefined,
    limit: 20,
  });

  const featureEvent = useFeatureEvent();
  const changeStatus = useChangeEventStatus();

  const events: AdminEvent[] = data?.data?.events ?? [];
  const statusStats: Record<string, number> = data?.data?.statusStats ?? {};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("events.title")}</h1>
        <p className="text-gray-500 mt-1">{t("events.subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("events.searchPlaceholder")}
            className="ps-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder={t("events.allStatuses")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("events.allStatuses")}</SelectItem>
            <SelectItem value="DRAFT">{t("events.status.DRAFT")}</SelectItem>
            <SelectItem value="PUBLISHED">
              {t("events.status.PUBLISHED")}
            </SelectItem>
            <SelectItem value="CANCELLED">
              {t("events.status.CANCELLED")}
            </SelectItem>
            <SelectItem value="COMPLETED">
              {t("events.status.COMPLETED")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Events Table */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("events.table.title")}</TableHead>
              <TableHead>{t("events.table.organizer")}</TableHead>
              <TableHead>{t("events.table.status")}</TableHead>
              <TableHead>{t("events.table.featured")}</TableHead>
              <TableHead>{t("events.table.capacity")}</TableHead>
              <TableHead>{t("events.table.bookings")}</TableHead>
              <TableHead>{t("events.table.date")}</TableHead>
              <TableHead className="text-end">
                {t("events.table.actions")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    {event.coverImageUrl && (
                      <Image
                        src={event.coverImageUrl}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded object-cover shrink-0"
                      />
                    )}
                    <div>
                      <p className="font-medium text-sm">{event.titleAr}</p>
                      {event.titleEn && (
                        <p className="text-xs text-gray-400">
                          {event.titleEn}
                        </p>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">
                  <p>{event.organizer?.name}</p>
                  <p className="text-xs text-gray-400">
                    {event.organizer?.email}
                  </p>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[event.status] || ""}
                  >
                    {t(`events.status.${event.status}`)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {event.isFeatured ? (
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <StarOff className="h-4 w-4 text-gray-300" />
                  )}
                </TableCell>
                <TableCell className="text-sm">
                  {event.totalSold}/{event.totalCapacity}
                </TableCell>
                <TableCell className="text-sm">
                  {event.bookingsCount}
                </TableCell>
                <TableCell className="text-sm text-gray-500">
                  {new Date(event.startDate).toLocaleDateString(locale === "ar" ? "ar-KW" : "en-US")}
                </TableCell>
                <TableCell className="text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/events/${event.slug}`}>
                          <Eye className="h-4 w-4 me-2" />
                          {t("events.view")}
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      {/* Feature Toggle */}
                      {event.isFeatured ? (
                        <DropdownMenuItem
                          onClick={() =>
                            featureEvent.mutate({
                              eventId: event.id,
                              data: { isFeatured: false },
                            })
                          }
                        >
                          <StarOff className="h-4 w-4 me-2" />
                          {t("events.unfeature")}
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() =>
                            featureEvent.mutate({
                              eventId: event.id,
                              data: { isFeatured: true },
                            })
                          }
                        >
                          <Star className="h-4 w-4 me-2" />
                          {t("events.feature")}
                        </DropdownMenuItem>
                      )}

                      <DropdownMenuSeparator />

                      {/* Status Changes */}
                      {event.status !== "PUBLISHED" && (
                        <DropdownMenuItem
                          onClick={() =>
                            changeStatus.mutate({
                              eventId: event.id,
                              data: { status: "PUBLISHED" },
                            })
                          }
                        >
                          <CheckCircle2 className="h-4 w-4 me-2 text-green-600" />
                          {t("events.publish")}
                        </DropdownMenuItem>
                      )}
                      {event.status !== "CANCELLED" && (
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() =>
                            changeStatus.mutate({
                              eventId: event.id,
                              data: { status: "CANCELLED" },
                            })
                          }
                        >
                          <Ban className="h-4 w-4 me-2" />
                          {t("events.cancel")}
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/(dashboard)/[locale]/dashboard/admin/categories/page.tsx
// ═══════════════════════════════════════════════════════════════
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  useAdminCategories,
  useCreateCategory,
  useUpdateCategory,
  useDeleteCategory,
} from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface CategoryItem {
  id: string;
  nameAr: string;
  nameEn: string | null;
  slug: string;
  iconUrl: string | null;
  description: string | null;
  eventsCount: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminCategoriesPage() {
  const t = useTranslations("admin");
  const { data, isLoading } = useAdminCategories();

  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<CategoryItem | null>(null);

  // Form state
  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [slug, setSlug] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [description, setDescription] = useState("");

  const openCreate = () => {
    setEditingCategory(null);
    setNameAr("");
    setNameEn("");
    setSlug("");
    setIconUrl("");
    setDescription("");
    setDialogOpen(true);
  };

  const openEdit = (category: CategoryItem) => {
    setEditingCategory(category);
    setNameAr(category.nameAr);
    setNameEn(category.nameEn || "");
    setSlug(category.slug);
    setIconUrl(category.iconUrl || "");
    setDescription(category.description || "");
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (editingCategory) {
      updateCategory.mutate(
        {
          categoryId: editingCategory.id,
          data: {
            nameAr,
            nameEn: nameEn || undefined,
            slug,
            iconUrl: iconUrl || undefined,
            description: description || undefined,
          },
        },
        { onSuccess: () => setDialogOpen(false) }
      );
    } else {
      createCategory.mutate(
        {
          nameAr,
          nameEn: nameEn || undefined,
          slug,
          iconUrl: iconUrl || undefined,
          description: description || undefined,
        },
        { onSuccess: () => setDialogOpen(false) }
      );
    }
  };

  const categories: CategoryItem[] = data?.data?.categories ?? [];

  // Auto-generate slug from nameEn or nameAr
  const generateSlug = () => {
    const source = nameEn || nameAr;
    if (!source) return;
    const generated = source
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 100);
    setSlug(generated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("categories.title")}</h1>
          <p className="text-gray-500 mt-1">{t("categories.subtitle")}</p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4 me-2" />
          {t("categories.create")}
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("categories.table.nameAr")}</TableHead>
              <TableHead>{t("categories.table.nameEn")}</TableHead>
              <TableHead>{t("categories.table.slug")}</TableHead>
              <TableHead>{t("categories.table.events")}</TableHead>
              <TableHead className="text-end">
                {t("categories.table.actions")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.nameAr}</TableCell>
                <TableCell className="text-gray-600">
                  {category.nameEn || "—"}
                </TableCell>
                <TableCell>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                    {category.slug}
                  </code>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{category.eventsCount}</Badge>
                </TableCell>
                <TableCell className="text-end">
                  <div className="flex justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEdit(category)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={() => setDeleteDialog(category)}
                      disabled={category.eventsCount > 0}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Create / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingCategory
                ? t("categories.editCategory")
                : t("categories.createCategory")}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  {t("categories.nameAr")} *
                </label>
                <Input
                  value={nameAr}
                  onChange={(e) => setNameAr(e.target.value)}
                  placeholder="مثال: موسيقى"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  {t("categories.nameEn")}
                </label>
                <Input
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  placeholder="e.g. Music"
                  onBlur={generateSlug}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                {t("categories.slug")} *
              </label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="music"
                dir="ltr"
                className="font-mono"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                {t("categories.iconUrl")}
              </label>
              <Input
                value={iconUrl}
                onChange={(e) => setIconUrl(e.target.value)}
                placeholder="https://cdn.example.com/icons/music.svg"
                dir="ltr"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                {t("categories.description")}
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                maxLength={500}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              {t("cancel")}
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={
                !nameAr.trim() ||
                !slug.trim() ||
                createCategory.isPending ||
                updateCategory.isPending
              }
            >
              {editingCategory ? t("save") : t("categories.create")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <Dialog open={!!deleteDialog} onOpenChange={() => setDeleteDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("categories.deleteTitle")}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            {t("categories.deleteConfirm", { name: deleteDialog?.nameAr ?? "" })}
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog(null)}>
              {t("cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (deleteDialog) {
                  deleteCategory.mutate(deleteDialog.id, {
                    onSuccess: () => setDeleteDialog(null),
                  });
                }
              }}
              disabled={deleteCategory.isPending}
            >
              {t("delete")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}


// ██████████████████████████████████████████████████████████████
// ██  Section 15: HOOKS (UI-related)
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-mobile.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-reduced-motion.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * useReducedMotion — SSR-safe hook for detecting prefers-reduced-motion.
 * Returns true if the user prefers reduced motion.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false // SSR fallback
  );
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-toast.ts
// ═══════════════════════════════════════════════════════════════
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 10000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
    type: ActionType["ADD_TOAST"]
    toast: ToasterToast
  }
  | {
    type: ActionType["UPDATE_TOAST"]
    toast: Partial<ToasterToast>
  }
  | {
    type: ActionType["DISMISS_TOAST"]
    toastId?: ToasterToast["id"]
  }
  | {
    type: ActionType["REMOVE_TOAST"]
    toastId?: ToasterToast["id"]
  }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
              ...t,
              open: false,
            }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-safe-auth.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { createContext, useContext } from "react";

/**
 * Safe auth state interface.
 * Works both when Clerk is configured and when it's not.
 */
interface SafeAuthState {
  isLoaded: boolean;
  isSignedIn: boolean;
  userId: string | null;
  userRole: string | null;
  /** Custom auth sign in (available when Clerk is not configured) */
  signIn?: (email: string, password: string) => Promise<{ id: string; name: string; email: string; role: string }>;
  /** Custom auth sign up (available when Clerk is not configured) */
  signUp?: (name: string, email: string, password: string, phone?: string) => Promise<{ id: string; name: string; email: string; role: string }>;
  /** Custom auth sign out (available when Clerk is not configured) */
  signOut?: () => void;
}

/** Default state when Clerk is not configured (demo/preview mode) */
const DEFAULT_AUTH_STATE: SafeAuthState = {
  isLoaded: true,
  isSignedIn: false,
  userId: null,
  userRole: null,
};

/**
 * Context that bridges auth state to consumers.
 */
export const SafeAuthContext = createContext<SafeAuthState>(DEFAULT_AUTH_STATE);

/**
 * Safe auth hook that works even when Clerk is not configured.
 * Returns mock auth state when Clerk keys are missing.
 * Returns real Clerk auth state when Clerk keys are present.
 */
export function useSafeAuth(): SafeAuthState {
  return useContext(SafeAuthContext);
}

/**
 * Safe user info interface.
 * Basic user profile data available when signed in.
 */
interface SafeUserInfo {
  name: string | null;
  email: string | null;
  avatarUrl: string | null;
  phone: string | null;
}

const DEFAULT_USER_INFO: SafeUserInfo = {
  name: null,
  email: null,
  avatarUrl: null,
  phone: null,
};

const SafeUserContext = createContext<SafeUserInfo>(DEFAULT_USER_INFO);

export const SafeUserProvider = SafeUserContext.Provider;

/**
 * Safe user hook that provides basic user info.
 * Works with both Clerk and custom auth systems.
 */
export function useSafeUser(): SafeUserInfo {
  return useContext(SafeUserContext);
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-search.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export interface SearchFiltersState {
  search?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  priceFrom?: string;
  priceTo?: string;
  venueId?: string;
  organizerId?: string;
  city?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export function useSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read filters from URL
  const filters: SearchFiltersState = useMemo(() => {
    const params: SearchFiltersState = {};
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");
    const venueId = searchParams.get("venueId");
    const organizerId = searchParams.get("organizerId");
    const city = searchParams.get("city");
    const sortBy = searchParams.get("sortBy");
    const sortOrder = searchParams.get("sortOrder") as "asc" | "desc" | null;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    if (search) params.search = search;
    if (category) params.category = category;
    if (dateFrom) params.dateFrom = dateFrom;
    if (dateTo) params.dateTo = dateTo;
    if (priceFrom) params.priceFrom = priceFrom;
    if (priceTo) params.priceTo = priceTo;
    if (venueId) params.venueId = venueId;
    if (organizerId) params.organizerId = organizerId;
    if (city) params.city = city;
    if (sortBy) params.sortBy = sortBy;
    if (sortOrder) params.sortOrder = sortOrder;
    if (page) params.page = parseInt(page, 10);
    if (limit) params.limit = parseInt(limit, 10);

    return params;
  }, [searchParams]);

  // Update URL with new filters (shallow routing)
  const updateFilters = useCallback(
    (newFilters: Partial<SearchFiltersState>) => {
      const params = new URLSearchParams(searchParams.toString());

      // Reset page to 1 when filters change (unless changing page itself)
      if (!("page" in newFilters)) {
        params.set("page", "1");
      }

      for (const [key, value] of Object.entries(newFilters)) {
        if (value === undefined || value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  // Clear all filters
  const clearFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  // Remove a single filter
  const removeFilter = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  // Build query string for API
  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    }
    return params.toString();
  }, [filters]);

  // React Query for search results
  const {
    data: searchResult,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["events-search", queryString],
    queryFn: async () => {
      const res = await fetch(`/api/v1/events?${queryString}`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(
          (err as Record<string, unknown>)?.error
            ? String((err as Record<string, { message: string }>).error.message)
            : "Failed to search events"
        );
      }
      return res.json();
    },
    staleTime: 30 * 1000,
  });

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category) count++;
    if (filters.dateFrom || filters.dateTo) count++;
    if (filters.priceFrom || filters.priceTo) count++;
    if (filters.venueId) count++;
    if (filters.organizerId) count++;
    if (filters.city) count++;
    return count;
  }, [filters]);

  return {
    filters,
    updateFilters,
    clearFilters,
    removeFilter,
    searchResult,
    isLoading,
    isError,
    error,
    activeFilterCount,
  };
}

// Suggestions hook with debounce
export function useFetchSuggestions(query: string) {
  return useQuery({
    queryKey: ["search-suggestions", query],
    queryFn: async () => {
      if (query.length < 2) return [];
      const res = await fetch(
        `/api/v1/search/suggestions?q=${encodeURIComponent(query)}&limit=5`
      );
      if (!res.ok) return [];
      const json = await res.json();
      return (json as { data?: unknown[] }).data ?? [];
    },
    enabled: query.length >= 2,
    staleTime: 10 * 1000,
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-events.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useQuery } from "@tanstack/react-query";

interface EventFilters {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  startDateFrom?: string;
  startDateTo?: string;
  venueId?: string;
  isFeatured?: boolean;
  sortBy?: string;
  sortOrder?: string;
}

export function useEvents(filters: EventFilters = {}) {
  return useQuery({
    queryKey: ["events", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters.page) params.set("page", String(filters.page));
      if (filters.limit) params.set("limit", String(filters.limit));
      if (filters.category) params.set("category", filters.category);
      if (filters.search) params.set("search", filters.search);
      if (filters.startDateFrom) params.set("startDateFrom", filters.startDateFrom);
      if (filters.startDateTo) params.set("startDateTo", filters.startDateTo);
      if (filters.venueId) params.set("venueId", filters.venueId);
      if (filters.isFeatured !== undefined) params.set("isFeatured", String(filters.isFeatured));
      if (filters.sortBy) params.set("sortBy", filters.sortBy);
      if (filters.sortOrder) params.set("sortOrder", filters.sortOrder);

      const res = await fetch(`/api/v1/events?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
    staleTime: 60 * 1000,
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-event-mutations.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateEventInput, UpdateEventInput } from "@/lib/validators/event-schema";

export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateEventInput) => {
      const res = await fetch("/api/v1/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to create event");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard", "events"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
    },
  });
}

export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateEventInput }) => {
      const res = await fetch(`/api/v1/events/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to update event");
      }
      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["dashboard", "events"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
      queryClient.invalidateQueries({ queryKey: ["event", variables.id] });
    },
  });
}

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/v1/events/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to delete event");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard", "events"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "stats"] });
    },
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-booking.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreateBookingInput } from "@/lib/validators/booking-schema";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateBookingInput) => {
      const res = await fetch("/api/v1/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message ?? "Failed to create booking");
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useBookings(filters?: { status?: string; page?: number }) {
  return useQuery({
    queryKey: ["bookings", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters?.status) params.set("status", filters.status);
      if (filters?.page) params.set("page", String(filters.page));
      const res = await fetch(`/api/v1/bookings?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useBooking(id: string) {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: async () => {
      const res = await fetch(`/api/v1/bookings/${id}`);
      if (!res.ok) throw new Error("Failed to fetch booking");
      return res.json();
    },
    enabled: !!id,
    staleTime: 30 * 1000,
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (bookingId: string) => {
      const res = await fetch(`/api/v1/bookings/${bookingId}/cancel`, {
        method: "PATCH",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message ?? "Failed to cancel booking");
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-categories.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/api/v1/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-dashboard.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useQuery } from "@tanstack/react-query";

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: async () => {
      const res = await fetch("/api/v1/dashboard/stats");
      if (!res.ok) throw new Error("Failed to fetch dashboard stats");
      return res.json();
    },
    staleTime: 30 * 1000, // 30 seconds
  });
}

export function useOrganizerEvents(params?: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.status) query.set("status", params.status);
  if (params?.search) query.set("search", params.search);

  return useQuery({
    queryKey: ["dashboard", "events", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/dashboard/events?${query}`);
      if (!res.ok) throw new Error("Failed to fetch organizer events");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useOrganizerBookings(params?: {
  page?: number;
  limit?: number;
  eventId?: string;
  status?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.eventId) query.set("eventId", params.eventId);
  if (params?.status) query.set("status", params.status);

  return useQuery({
    queryKey: ["dashboard", "bookings", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/dashboard/bookings?${query}`);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-notifications.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSafeAuth } from "@/hooks/use-safe-auth";

// API response type
interface NotificationData {
  id: string;
  userId: string;
  type: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  data: Record<string, unknown> | null;
  isRead: boolean;
  readAt: string | null;
  createdAt: string;
}

interface NotificationsResponse {
  success: boolean;
  data: NotificationData[];
  message: string;
  meta?: { page: number; limit: number; total: number; totalPages: number };
}

interface UnreadCountResponse {
  success: boolean;
  data: { unreadCount: number };
  message: string;
}

export function useNotifications(filter: "all" | "unread" = "all", page = 1) {
  const { isSignedIn } = useSafeAuth();
  return useQuery({
    queryKey: ["notifications", filter, page],
    queryFn: async (): Promise<NotificationsResponse> => {
      const res = await fetch(`/api/v1/notifications?filter=${filter}&page=${page}&limit=20`);
      if (!res.ok) throw new Error("Failed to fetch notifications");
      return res.json();
    },
    enabled: isSignedIn,
    staleTime: 30 * 1000,
  });
}

export function useUnreadCount() {
  const { isSignedIn } = useSafeAuth();
  return useQuery({
    queryKey: ["notifications-unread-count"],
    queryFn: async (): Promise<UnreadCountResponse> => {
      const res = await fetch("/api/v1/notifications/count");
      if (!res.ok) throw new Error("Failed to fetch count");
      return res.json();
    },
    enabled: isSignedIn,
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
  });
}

export function useMarkAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (notificationId: string) => {
      const res = await fetch(`/api/v1/notifications/${notificationId}/read`, { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to mark as read");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["notifications-unread-count"] });
    },
  });
}

export function useMarkAllAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/v1/notifications", { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to mark all as read");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["notifications-unread-count"] });
    },
  });
}

export type { NotificationData, NotificationsResponse, UnreadCountResponse };


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-reviews.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreateReviewInput } from "@/lib/validators/review-schema";

export function useEventReviews(
  eventId: string,
  params?: { page?: number; limit?: number; sortBy?: string }
) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.sortBy) query.set("sortBy", params.sortBy);

  return useQuery({
    queryKey: ["reviews", eventId, params],
    queryFn: async () => {
      const res = await fetch(
        `/api/v1/events/${eventId}/reviews/list?${query}`
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");
      return res.json();
    },
    staleTime: 60 * 1000, // 1 minute
    enabled: !!eventId,
  });
}

export function useReviewEligibility(eventId: string) {
  return useQuery({
    queryKey: ["review-eligibility", eventId],
    queryFn: async () => {
      const res = await fetch(
        `/api/v1/events/${eventId}/reviews/eligibility`
      );
      if (!res.ok) throw new Error("Failed to check eligibility");
      return res.json();
    },
    staleTime: 30 * 1000, // 30 seconds
    enabled: !!eventId,
  });
}

export function useCreateReview(eventId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateReviewInput) => {
      const res = await fetch(`/api/v1/events/${eventId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          error.error?.message || "Failed to create review"
        );
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", eventId] });
      queryClient.invalidateQueries({
        queryKey: ["review-eligibility", eventId],
      });
      queryClient.invalidateQueries({ queryKey: ["event", eventId] }); // refresh event detail
    },
  });
}

export function useReplyToReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      reviewId,
      reply,
      eventId,
    }: {
      reviewId: string;
      reply: string;
      eventId: string;
    }) => {
      const res = await fetch(`/api/v1/reviews/${reviewId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to reply");
      }
      return res.json();
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["event", variables.eventId] });
    },
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-admin.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ChangeUserRoleInput,
  ToggleUserActiveInput,
  CreateCategoryInput,
  UpdateCategoryInput,
  FeatureEventInput,
  ChangeEventStatusInput,
} from "@/lib/validators/admin-schema";

// ── Users ──
export function useAdminUsers(params?: {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  isActive?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.search) query.set("search", params.search);
  if (params?.role) query.set("role", params.role);
  if (params?.isActive) query.set("isActive", params.isActive);

  return useQuery({
    queryKey: ["admin", "users", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/admin/users?${query}`);
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useChangeUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      data,
    }: {
      userId: string;
      data: ChangeUserRoleInput;
    }) => {
      const res = await fetch(`/api/v1/admin/users/${userId}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to change role");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });
}

export function useToggleUserActive() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      data,
    }: {
      userId: string;
      data: ToggleUserActiveInput;
    }) => {
      const res = await fetch(`/api/v1/admin/users/${userId}/active`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to toggle active");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
    },
  });
}

// ── Events ──
export function useAdminEvents(params?: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
  isFeatured?: string;
}) {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", params.page.toString());
  if (params?.limit) query.set("limit", params.limit.toString());
  if (params?.status) query.set("status", params.status);
  if (params?.search) query.set("search", params.search);
  if (params?.isFeatured) query.set("isFeatured", params.isFeatured);

  return useQuery({
    queryKey: ["admin", "events", params],
    queryFn: async () => {
      const res = await fetch(`/api/v1/admin/events?${query}`);
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
    staleTime: 30 * 1000,
  });
}

export function useFeatureEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      eventId,
      data,
    }: {
      eventId: string;
      data: FeatureEventInput;
    }) => {
      const res = await fetch(`/api/v1/admin/events/${eventId}/feature`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to feature event");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
    },
  });
}

export function useChangeEventStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      eventId,
      data,
    }: {
      eventId: string;
      data: ChangeEventStatusInput;
    }) => {
      const res = await fetch(`/api/v1/admin/events/${eventId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to change status");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
    },
  });
}

// ── Categories ──
export function useAdminCategories() {
  return useQuery({
    queryKey: ["admin", "categories"],
    queryFn: async () => {
      const res = await fetch("/api/v1/admin/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
    staleTime: 60 * 1000,
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateCategoryInput) => {
      const res = await fetch("/api/v1/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to create category");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "categories"] });
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      categoryId,
      data,
    }: {
      categoryId: string;
      data: UpdateCategoryInput;
    }) => {
      const res = await fetch(`/api/v1/admin/categories/${categoryId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to update category");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "categories"] });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryId: string) => {
      const res = await fetch(`/api/v1/admin/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Failed to delete category");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "categories"] });
    },
  });
}

// ── Stats ──
export function useAdminStats() {
  return useQuery({
    queryKey: ["admin", "stats"],
    queryFn: async () => {
      const res = await fetch("/api/v1/admin/stats");
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    staleTime: 60 * 1000,
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-ticket-validation.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ValidateTicketInput } from "@/lib/validators/ticket-schema";

export function useValidateTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ValidateTicketInput) => {
      const res = await fetch("/api/v1/tickets/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          error.error?.message || "Failed to validate ticket"
        );
      }
      return res.json();
    },
    onSuccess: () => {
      // Invalidate stats and history so they refresh
      queryClient.invalidateQueries({ queryKey: ["ticket-stats"] });
      queryClient.invalidateQueries({ queryKey: ["validation-history"] });
    },
  });
}

export function useTicketStats(eventId: string | undefined) {
  return useQuery({
    queryKey: ["ticket-stats", eventId],
    queryFn: async () => {
      if (!eventId) return null;
      const res = await fetch(`/api/v1/tickets/stats?eventId=${eventId}`);
      if (!res.ok) throw new Error("Failed to fetch ticket stats");
      return res.json();
    },
    enabled: !!eventId,
    staleTime: 10 * 1000, // 10 seconds — stats change frequently during check-in
  });
}

export function useValidationHistory(eventId: string | undefined) {
  return useQuery({
    queryKey: ["validation-history", eventId],
    queryFn: async () => {
      if (!eventId) return null;
      const res = await fetch(`/api/v1/tickets/history?eventId=${eventId}`);
      if (!res.ok) throw new Error("Failed to fetch validation history");
      return res.json();
    },
    enabled: !!eventId,
    staleTime: 5 * 1000, // 5 seconds — refresh often during active scanning
  });
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/hooks/use-upload.ts
// ═══════════════════════════════════════════════════════════════
"use client";

import { useMutation } from "@tanstack/react-query";

export function usePresignedUpload() {
  return useMutation({
    mutationFn: async ({
      filename,
      contentType,
      folder,
    }: {
      filename: string;
      contentType: string;
      folder?: "events" | "avatars" | "categories";
    }) => {
      const params = new URLSearchParams({ filename, contentType });
      if (folder) params.set("folder", folder);

      const res = await fetch(`/api/v1/upload/presigned?${params}`);
      if (!res.ok) throw new Error("Failed to get upload URL");
      return res.json();
    },
  });
}

export function useUploadFile() {
  const presignedMutation = usePresignedUpload();

  return useMutation({
    mutationFn: async ({
      file,
      folder,
    }: {
      file: File;
      folder?: "events" | "avatars" | "categories";
    }) => {
      // Step 1: Get presigned URL
      const { data } = await presignedMutation.mutateAsync({
        filename: file.name,
        contentType: file.type,
        folder,
      });

      // Step 2: Upload to R2 via presigned URL
      const uploadRes = await fetch(data.presignedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!uploadRes.ok) throw new Error("Upload failed");

      // Step 3: Return public URL
      return { publicUrl: data.publicUrl, key: data.key };
    },
  });
}


// ██████████████████████████████████████████████████████████████
// ██  Section 16: i18n & TRANSLATIONS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/i18n/routing.ts
// ═══════════════════════════════════════════════════════════════
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/routing.ts
// ═══════════════════════════════════════════════════════════════
export { routing } from "@/i18n/routing";


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/i18n.ts
// ═══════════════════════════════════════════════════════════════
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "ar" | "en")) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});


// ═══════════════════════════════════════════════════════════════
// FILE: src/messages/en.json
// ═══════════════════════════════════════════════════════════════
const _en_json = `
{
  "common": {
    "appName": "Kuwait Events Platform",
    "loading": "Loading...",
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "create": "Create",
    "search": "Search",
    "noResults": "No results found",
    "error": "An error occurred",
    "unexpectedError": "An unexpected error occurred. Please try again.",
    "retry": "Retry",
    "back": "Back",
    "home": "Home",
    "events": "Events",
    "categories": "Categories",
    "login": "Login",
    "register": "Register",
    "logout": "Logout",
    "profile": "Profile",
    "loadMore": "Load More",
    "tryAgain": "Try Again",
    "currency": "KWD",
    "viewDetails": "View Details",
    "allEvents": "All Events",
    "featuredEvents": "Featured Events",
    "upcomingEvents": "Upcoming Events",
    "clearFilters": "Clear Filters",
    "featured": "Featured",
    "free": "Free",
    "from": "From",
    "remaining": "Remaining",
    "selectDate": "Select date"
  },
  "auth": {
    "signIn": "Sign In",
    "signUp": "Sign Up",
    "signOut": "Sign Out",
    "forgotPassword": "Forgot Password?",
    "orContinueWith": "Or continue with",
    "noAccount": "Don't have an account?",
    "hasAccount": "Already have an account?",
    "welcomeBack": "Welcome Back",
    "createAccount": "Create Account",
    "email": "Email",
    "password": "Password",
    "confirmPassword": "Confirm Password",
    "name": "Full Name",
    "phone": "Phone Number",
    "phoneOptional": "Phone Number (optional)",
    "signInButton": "Sign In",
    "signUpButton": "Create Account",
    "forgotPasswordButton": "Send Reset Link",
    "backToSignIn": "Back to Sign In",
    "noAccountLink": "Create a new account",
    "hasAccountLink": "Sign in to your account",
    "signingIn": "Signing in...",
    "signingUp": "Creating account...",
    "sendingReset": "Sending...",
    "resetEmailSent": "If an account exists with this email, you will receive a password reset link",
    "passwordRequirements": "Must be at least 8 characters with an uppercase letter, lowercase letter, and number",
    "orSeparator": "or",
    "termsAgreement": "By clicking Create Account, you agree to our",
    "termsOfService": "Terms of Service",
    "privacyPolicy": "Privacy Policy",
    "signInSubtitle": "Enter your credentials to access your account",
    "signUpSubtitle": "Create your account to discover and book the best events",
    "forgotPasswordSubtitle": "Enter your email and we'll send you a password reset link",
    "signInSuccess": "Signed in successfully",
    "signUpSuccess": "Account created successfully",
    "resetLinkSent": "Reset link sent",
    "signInFailed": "Sign in failed",
    "signUpFailed": "Sign up failed",
    "resetFailed": "Failed to send reset link",
    "namePlaceholder": "Ahmed Mohammed",
    "emailPlaceholder": "name@example.com",
    "passwordPlaceholder": "••••••••",
    "phonePlaceholder": "965XXXXXXXX",
    "previewMode": "Preview Mode",
    "clerkNotConfigured": "Clerk keys are not configured. To activate authentication, add",
    "and": "and",
    "inEnvLocal": "in .env.local file"
  },
  "profile": {
    "title": "Profile",
    "name": "Name",
    "email": "Email",
    "phone": "Phone",
    "role": "Role",
    "avatar": "Avatar",
    "saveChanges": "Save Changes",
    "saving": "Saving...",
    "updateSuccess": "Profile updated successfully",
    "updateError": "Error updating profile",
    "editClerkNote": "Edit from account settings",
    "clerkSetupMessage": "To view and edit your profile, please configure Clerk keys first",
    "clerkSetupHint": "Add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY in .env.local",
    "accountInfo": "Account Information",
    "accountInfoDesc": "Your basic information managed through the authentication system",
    "nameChangeNote": "Edit from account settings",
    "editProfile": "Edit Profile",
    "editProfileDesc": "Update your personal information",
    "phoneHint": "Kuwaiti phone number (starts with 965)",
    "profileUpdated": "Profile updated successfully",
    "roleAttendee": "Attendee",
    "roleOrganizer": "Organizer",
    "roleAdmin": "Admin"
  },
  "role": {
    "attendee": "Attendee",
    "organizer": "Organizer",
    "admin": "Admin"
  },
  "nav": {
    "home": "Home",
    "events": "Events",
    "bookings": "My Bookings",
    "dashboard": "Dashboard",
    "profile": "Profile",
    "login": "Sign In",
    "register": "Sign Up",
    "menu": "Menu",
    "toggleTheme": "Toggle theme",
    "switchLanguage": "Switch language",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "search": "Search"
  },
  "home": {
    "heroTitle": "Discover the Best Events in Kuwait",
    "heroSubtitle": "Fast and secure ticket booking for amazing events",
    "browseEvents": "Browse Events",
    "exploreCategories": "Explore Categories",
    "upcomingEventsCount": "Upcoming Events",
    "categoriesCount": "Categories",
    "venuesCount": "Venues",
    "discoverMore": "Discover More",
    "newsletterTitle": "Subscribe to stay updated",
    "newsletterPlaceholder": "Your email",
    "newsletterButton": "Subscribe",
    "ctaTitle": "Why Kuwait Events?",
    "ctaSubtitle": "Your trusted platform to discover and book the best events in Kuwait",
    "ctaSecureTitle": "Secure Guaranteed Tickets",
    "ctaSecureDesc": "Your booking is secured with 100% guaranteed official tickets",
    "ctaFastTitle": "Easy Fast Booking",
    "ctaFastDesc": "Book your ticket in under a minute with secure KNet payment",
    "ctaBestTitle": "Best Events",
    "ctaBestDesc": "We curate the finest events in Kuwait for you",
    "ctaButton": "Explore Events Now",
    "noFeaturedTitle": "No Events Yet",
    "noFeaturedSubtitle": "Stay tuned for amazing featured events coming soon!",
    "featuredSubtitle": "Discover handpicked events curated just for you",
    "viewAll": "View All",
    "categoriesSubtitle": "Browse events by your interests",
    "eventSingular": "event",
    "eventPlural": "events",
    "statsTitle": "Kuwait in Numbers",
    "statsSubtitle": "Kuwait Events Platform in Numbers",
    "statsUpcomingEvents": "Upcoming Events",
    "statsCategories": "Categories",
    "statsVenues": "Venues",
    "statsTicketsAvailable": "Tickets Available",
    "statsCity": "City",
    "statsFeatured": "Featured Events",
    "statsCityValue": "Kuwait",
    "testimonialsTitle": "What People Say",
    "testimonialsSubtitle": "Discover what our users say about Kuwait Events Platform",
    "ctaBrowse": "Browse Events",
    "ctaRegister": "Create Account",
    "testimonial1Text": "Amazing experience! I was able to book tickets for a stunning concert in seconds. The platform is easy to use and beautifully designed.",
    "testimonial1Author": "Sarah Al-Ahmad",
    "testimonial1Role": "Events Enthusiast",
    "testimonial2Text": "The best event booking platform in Kuwait. The variety of events and reasonable prices make it my first choice always.",
    "testimonial2Author": "Mohammed Al-Otaibi",
    "testimonial2Role": "Businessman",
    "testimonial3Text": "I used the platform to organize our company event and the results were excellent. Fast support and professional service.",
    "testimonial3Author": "Noura Al-Shamri",
    "testimonial3Role": "Event Organizer",
    "prevCategory": "Previous category",
    "nextCategory": "Next category",
    "outOf5Stars": "{rating} out of 5 stars",
    "goToSlide": "Go to slide {number}"
  },
  "events": {
    "pageTitle": "Events",
    "filterCategory": "Category",
    "filterDate": "Date",
    "filterSearch": "Search events...",
    "filterSort": "Sort",
    "sortDate": "Date",
    "sortPrice": "Price",
    "noEvents": "No matching events",
    "fromPrice": "From",
    "remaining": "remaining",
    "ticket": "ticket",
    "tickets": "tickets",
    "subtitle": "Discover the best events in Kuwait",
    "prev": "Previous",
    "next": "Next",
    "pageOf": "Page {page} of {total}",
    "allCategories": "All Categories",
    "sortDateAsc": "Nearest Date",
    "sortDateDesc": "Farthest Date",
    "clear": "Clear"
  },
  "category": {
    "eventsIn": "Events in",
    "noEventsInCategory": "No events in this category yet"
  },
  "venue": {
    "upcomingEvents": "Upcoming Events",
    "noUpcomingEvents": "No upcoming events at this venue",
    "capacity": "Capacity"
  },
  "eventDetail": {
    "about": "About the Event",
    "venue": "Venue",
    "organizer": "Organizer",
    "reviews": "Reviews",
    "review": "review",
    "similarEvents": "Similar Events",
    "featured": "Featured",
    "capacity": "Capacity",
    "person": "person",
    "fromPrice": "From"
  },
  "footer": {
    "about": "About",
    "contact": "Contact",
    "careers": "Careers",
    "terms": "Terms & Conditions",
    "privacy": "Privacy Policy",
    "cookiePolicy": "Cookie Policy",
    "rights": "All rights reserved",
    "quickLinks": "Quick Links",
    "legal": "Legal",
    "newsletter": "Newsletter",
    "newsletterDesc": "Subscribe to get the latest events and exclusive offers delivered to you",
    "newsletterPlaceholder": "Your email address",
    "subscribe": "Subscribe",
    "subscribed": "Subscribed ✓",
    "backToTop": "Back to top",
    "description": "The leading event ticketing platform in Kuwait. Discover amazing events and book your tickets easily and securely."
  },
  "booking": {
    "pageTitle": "My Bookings",
    "pending": "Pending",
    "confirmed": "Confirmed",
    "cancelled": "Cancelled",
    "refunded": "Refunded",
    "cancelBooking": "Cancel Booking",
    "cancelConfirm": "Are you sure you want to cancel?",
    "expiryWarning": "remaining to complete payment",
    "expired": "Expired",
    "noBookings": "No bookings yet",
    "bookingCreated": "Tickets reserved successfully",
    "selectTickets": "Select Tickets",
    "totalPrice": "Total",
    "attendeeInfo": "Attendee Information",
    "fullName": "Full Name",
    "phone": "Phone Number",
    "email": "Email",
    "bookNow": "Book Now",
    "mustLogin": "Login required to complete booking",
    "ticketsLabel": "ticket",
    "ticketsPlural": "tickets",
    "selectTicketsFirst": "Select tickets above to continue",
    "mustSelectOne": "Must select at least one ticket",
    "fillAllFields": "Please fill all attendee information",
    "bookingError": "An error occurred creating the booking",
    "bookingInProgress": "Booking in progress...",
    "namePlaceholder": "Mohammed Ahmed",
    "phonePlaceholder": "965XXXXXXXX",
    "emailPlaceholder": "mohammed@example.com"
  },
  "tickets": {
    "selectTickets": "Select Tickets",
    "free": "Free",
    "soldOut": "Sold Out",
    "available": "Available",
    "maxPerBooking": "Max per booking",
    "perBooking": "per booking",
    "total": "Total",
    "ticket": "ticket",
    "tickets": "tickets",
    "noTickets": "No tickets available at this time",
    "vip": "VIP",
    "earlyBird": "Early Bird",
    "group": "Group",
    "decreaseQuantity": "Decrease quantity",
    "increaseQuantity": "Increase quantity"
  },
  "payment": {
    "initiate": "Initiate Payment",
    "payWithKnet": "Pay with KNet",
    "processing": "Processing payment...",
    "success": "Payment Successful!",
    "successMessage": "Your booking is confirmed and tickets have been sent to your email",
    "failed": "Payment Failed",
    "failedMessage": "Payment was not completed. You can try again.",
    "refund": "Refund",
    "refundConfirm": "Are you sure you want to refund? The booking will be cancelled.",
    "refundReason": "Refund reason",
    "refunded": "Refunded",
    "testMode": "Test mode — no real charges",
    "totalDue": "Amount Due"
  },
  "error": {
    "unauthorized": "Authentication required",
    "forbidden": "Access denied",
    "notFound": "Not found",
    "internal": "Internal error",
    "validation": "Invalid data"
  },
  "search": {
    "placeholder": "Search events...",
    "clear": "Clear",
    "minPrice": "Min Price",
    "maxPrice": "Max Price",
    "priceInKWD": "Price in KWD",
    "searchLabel": "Search",
    "categoryLabel": "Category",
    "cityLabel": "City",
    "dateLabel": "Date",
    "priceLabel": "Price",
    "venueLabel": "Venue",
    "activeFilters": "Active Filters",
    "remove": "Remove"
  },
  "notifications": {
    "title": "Notifications",
    "markAllRead": "Mark all as read",
    "all": "All",
    "unread": "Unread",
    "error": "Failed to load notifications",
    "retry": "Retry",
    "noNotifications": "No notifications yet",
    "previous": "Previous",
    "page": "Page",
    "next": "Next",
    "loading": "Loading...",
    "viewAll": "View all notifications",
    "now": "Just now",
    "minutesAgo": "{count} min ago",
    "hoursAgo": "{count}h ago",
    "daysAgo": "{count}d ago"
  },
  "dashboard": {
    "overview": {
      "title": "Dashboard",
      "subtitle": "Overview of your events and bookings"
    },
    "nav": {
      "overview": "Overview",
      "events": "Events",
      "bookings": "Bookings",
      "tickets": "Tickets",
      "reviews": "Reviews",
      "settings": "Settings",
      "admin": "Admin"
    },
    "stats": {
      "totalEvents": "Total Events",
      "published": "Published",
      "totalBookings": "Total Bookings",
      "from": "from",
      "totalRevenue": "Total Revenue",
      "confirmedRevenue": "Confirmed Revenue",
      "draftEvents": "Draft Events",
      "awaitingPublish": "Awaiting Publish"
    },
    "revenueChart": {
      "title": "Revenue Overview",
      "noData": "No revenue data available",
      "revenue": "Revenue"
    },
    "events": {
      "myEvents": "My Events",
      "manageSubtitle": "Manage and organize your events",
      "create": "Create Event",
      "createFirst": "Create Your First Event",
      "createTitle": "Create New Event",
      "createSubtitle": "Fill in the details to create a new event",
      "editTitle": "Edit Event",
      "noEvents": "No events yet",
      "notFound": "Event not found",
      "basicInfo": "Basic Information",
      "titleAr": "Title (Arabic)",
      "titleEn": "Title (English)",
      "descriptionAr": "Description (Arabic)",
      "descriptionEn": "Description (English)",
      "startDate": "Start Date",
      "startTime": "Start Time",
      "endDate": "End Date",
      "media": "Media",
      "coverImage": "Cover Image",
      "imageTooLarge": "Image size must be less than 5MB",
      "dragOrClick": "Drag & drop or click to upload",
      "maxSize": "Max 5MB",
      "ticketTiers": "Ticket Tiers",
      "addTier": "Add Tier",
      "tierNameAr": "Tier Name (Arabic)",
      "tierType": "Tier Type",
      "tierTypes": {
        "VIP": "VIP",
        "STANDARD": "Standard",
        "EARLY_BIRD": "Early Bird",
        "PREMIUM": "Premium",
        "GROUP": "Group"
      },
      "tierQuantity": "Quantity",
      "tierMaxPerBooking": "Max Per Booking",
      "steps": {
        "basic": "Basic Info",
        "tickets": "Tickets",
        "media": "Media",
        "review": "Review"
      },
      "selectCategory": "Select Category",
      "tierCount": "{count} tiers",
      "draftNotice": "This event is a draft and not visible to the public",
      "prevStep": "Previous",
      "nextStep": "Next",
      "saveDraft": "Save Draft",
      "publish": "Publish",
      "publishStatus": "Publish Status",
      "cancel": "Cancel",
      "saveChanges": "Save Changes",
      "category": "Category",
      "table": {
        "title": "Event",
        "organizer": "Organizer",
        "status": "Status",
        "featured": "Featured",
        "capacity": "Capacity",
        "bookings": "Bookings",
        "date": "Date",
        "category": "Category",
        "actions": "Actions"
      },
      "status": {
        "DRAFT": "Draft",
        "PUBLISHED": "Published",
        "CANCELLED": "Cancelled",
        "SOLD_OUT": "Sold Out",
        "COMPLETED": "Completed"
      },
      "actions": {
        "view": "View",
        "edit": "Edit",
        "delete": "Delete",
        "confirmDelete": "Are you sure you want to delete this event?"
      }
    },
    "tickets": {
      "title": "Ticket Scanner",
      "subtitle": "Scan and validate tickets",
      "selectEventLabel": "Select Event",
      "selectEventFirst": "Please select an event first",
      "scanQR": "Scan QR Code",
      "manualTitle": "Manual Entry",
      "validating": "Validating...",
      "stats": {
        "scanned": "Scanned",
        "valid": "Valid",
        "invalid": "Invalid",
        "total": "Total",
        "totalTickets": "Total Tickets",
        "checkedIn": "Checked In",
        "remaining": "Remaining",
        "checkInRate": "Check-in Rate"
      },
      "camera": {
        "start": "Start Camera",
        "stop": "Stop Camera",
        "switch": "Switch Camera",
        "error": "Camera error",
        "noAccess": "Camera access denied",
        "scanning": "Scanning...",
        "noCamera": "No camera available"
      },
      "validation": {
        "valid": "Valid Ticket",
        "invalid": "Invalid Ticket",
        "alreadyUsed": "Already Used",
        "expired": "Expired",
        "wrongEvent": "Wrong Event",
        "ticketNumber": "Ticket Number",
        "tier": "Ticket Tier",
        "holder": "Holder",
        "scannedAt": "Scanned At",
        "event": "Event",
        "status": "Status",
        "details": "Details",
        "lastScanned": "Last Scanned",
        "noRecentScans": "No recent scans",
        "enterTicketNumber": "Enter ticket number",
        "validateButton": "Validate",
        "clearHistory": "Clear History"
      },
      "selectEvent": "Select Event",
      "noActiveEvents": "No active events",
      "manualEntryLabel": "Manual Entry",
      "validate": "Validate",
      "manualEntryHint": "Enter ticket number manually",
      "recentValidations": "Recent Validations",
      "noValidationsYet": "No validations yet",
      "validTicket": "Valid Ticket",
      "checkInSuccess": "Check-in successful!",
      "attendee": "Attendee",
      "tier": "Tier",
      "booking": "Booking",
      "eventTime": "Event Time",
      "ticketNumber": "Ticket Number",
      "scanNext": "Scan Next",
      "reasonNotFound": "Ticket not found in our system",
      "invalidTicket": "Invalid Ticket",
      "unknownError": "Unknown error occurred",
      "usedAt": "Used At",
      "tryAgain": "Try Again",
      "cameraDenied": "Camera access denied",
      "noCamera": "No camera found",
      "cameraError": "Camera error",
      "startingCamera": "Starting camera...",
      "retryCamera": "Retry",
      "useManualEntry": "Enter ticket number manually",
      "stopCamera": "Stop Camera",
      "startCamera": "Start Camera"
    },
    "tabs": {
      "scanner": "Scanner",
      "manual": "Manual"
    },
    "upcomingEvents": {
      "title": "Upcoming Events",
      "noUpcoming": "No upcoming events",
      "bookings": "bookings"
    },
    "recentBookings": {
      "title": "Recent Bookings",
      "noBookings": "No recent bookings",
      "tickets": "tickets"
    },
    "reviews": {
      "title": "Reviews",
      "subtitle": "Manage event reviews",
      "selectEvent": "Select Event",
      "selectEventFirst": "Please select an event first",
      "averageRating": "Average Rating",
      "totalReviews": "Total Reviews",
      "fiveStarReviews": "5-Star Reviews",
      "noReviews": "No reviews yet",
      "replyPlaceholder": "Write a reply...",
      "sendReply": "Send Reply",
      "reply": "Reply"
    },
    "bookings": {
      "title": "Bookings",
      "subtitle": "Manage event bookings",
      "filterByEvent": "Filter by Event",
      "allEvents": "All Events",
      "filterByStatus": "Filter by Status",
      "allStatuses": "All Statuses",
      "noBookings": "No bookings found",
      "status": {
        "CONFIRMED": "Confirmed",
        "PENDING": "Pending",
        "CANCELLED": "Cancelled",
        "REFUNDED": "Refunded"
      },
      "table": {
        "number": "Booking #",
        "event": "Event",
        "customer": "Customer",
        "attendee": "Attendee",
        "quantity": "Quantity",
        "amount": "Amount",
        "status": "Status",
        "date": "Date",
        "actions": "Actions"
      }
    }
  },
  "reviews": {
    "title": "Reviews",
    "reviewSingle": "review",
    "reviewPlural": "reviews",
    "totalReviewsLabel": "total reviews",
    "writeReview": "Write a Review",
    "alreadyReviewed": "You've already reviewed this event",
    "showingReviews": "Showing {count} of {total} reviews",
    "sortRecent": "Most Recent",
    "sortHighest": "Highest Rated",
    "sortLowest": "Lowest Rated",
    "noReviews": "No reviews yet",
    "beFirst": "Be the first to share your experience!",
    "previous": "Previous",
    "next": "Next",
    "organizerReply": "Organizer Response",
    "lockedTitle": "Sign in to review",
    "lockedDescription": "Only verified attendees can leave reviews",
    "ratingRequired": "Please select a rating",
    "submitError": "Failed to submit review",
    "yourRating": "Your Rating",
    "yourComment": "Your Comment",
    "optional": "(optional)",
    "commentPlaceholder": "Share your experience...",
    "submitReview": "Submit Review",
    "star": "star",
    "cancel": "Cancel",
    "ratingLabels": {
      "1": "Terrible",
      "2": "Poor",
      "3": "Average",
      "4": "Good",
      "5": "Excellent"
    }
  },
  "admin": {
    "nav": {
      "overview": "Overview",
      "users": "Users",
      "events": "Events",
      "categories": "Categories"
    },
    "overview": {
      "title": "Admin Overview",
      "subtitle": "Platform management dashboard"
    },
    "stats": {
      "totalUsers": "Total Users",
      "thisWeek": "This Week",
      "organizers": "Organizers",
      "activeOrganizers": "Active Organizers",
      "totalEvents": "Total Events",
      "published": "Published",
      "totalBookings": "Total Bookings",
      "from": "from",
      "totalRevenue": "Total Revenue",
      "allTime": "All Time",
      "last30DaysRevenue": "Last 30 Days Revenue",
      "last30Days": "Last 30 Days",
      "categories": "Categories",
      "activeCategories": "Active Categories",
      "reviews": "Reviews",
      "totalReviews": "Total Reviews"
    },
    "users": {
      "title": "User Management",
      "subtitle": "Manage platform users and roles",
      "attendees": "Attendees",
      "organizers": "Organizers",
      "admins": "Admins",
      "searchPlaceholder": "Search users...",
      "allRoles": "All Roles",
      "role": {
        "ATTENDEE": "Attendee",
        "ORGANIZER": "Organizer",
        "ADMIN": "Admin"
      },
      "table": {
        "name": "Name",
        "email": "Email",
        "role": "Role",
        "status": "Status",
        "joined": "Joined",
        "events": "Events",
        "bookings": "Bookings",
        "actions": "Actions",
        "phone": "Phone"
      },
      "active": "Active",
      "inactive": "Inactive",
      "makeOrganizer": "Make Organizer",
      "makeAttendee": "Make Attendee",
      "makeAdmin": "Make Admin",
      "deactivate": "Deactivate",
      "activate": "Activate",
      "confirmTitle": "Confirm Action",
      "confirmRoleChange": "Are you sure you want to change this user's role?",
      "confirmActivate": "Are you sure you want to activate this user?",
      "confirmDeactivate": "Are you sure you want to deactivate this user?"
    },
    "categories": {
      "title": "Category Management",
      "subtitle": "Manage event categories",
      "create": "Create Category",
      "table": {
        "nameAr": "Name (Arabic)",
        "nameEn": "Name (English)",
        "slug": "Slug",
        "events": "Events",
        "actions": "Actions"
      },
      "editCategory": "Edit Category",
      "createCategory": "Create Category",
      "nameAr": "Name (Arabic)",
      "nameEn": "Name (English)",
      "slug": "Slug",
      "iconUrl": "Icon URL",
      "description": "Description",
      "deleteTitle": "Delete Category",
      "deleteConfirm": "Are you sure you want to delete this category?"
    },
    "events": {
      "title": "Manage Events",
      "subtitle": "Review and manage all platform events",
      "searchPlaceholder": "Search events...",
      "allStatuses": "All Statuses",
      "status": {
        "DRAFT": "Draft",
        "PUBLISHED": "Published",
        "CANCELLED": "Cancelled",
        "SOLD_OUT": "Sold Out",
        "COMPLETED": "Completed"
      },
      "table": {
        "title": "Event",
        "organizer": "Organizer",
        "status": "Status",
        "featured": "Featured",
        "capacity": "Capacity",
        "bookings": "Bookings",
        "date": "Date",
        "actions": "Actions"
      },
      "view": "View",
      "feature": "Feature",
      "unfeature": "Unfeature",
      "publish": "Publish",
      "cancel": "Cancel"
    },
    "cancel": "Cancel",
    "confirm": "Confirm",
    "save": "Save",
    "delete": "Delete"
  },
  "bookings": {
    "title": "My Bookings",
    "browseEvents": "Browse Events",
    "ticketCount": "{count} ticket(s)",
    "bookingNumber": "Booking #",
    "tabs": {
      "upcoming": "Upcoming",
      "past": "Past",
      "cancelled": "Cancelled"
    },
    "status": {
      "confirmed": "Confirmed ✅",
      "pending": "Pending ⏳",
      "cancelled": "Cancelled ❌",
      "refunded": "Refunded 💰"
    },
    "noUpcoming": "You have no upcoming bookings",
    "noPast": "You have no past bookings",
    "noCancelled": "You have no cancelled bookings"
  },
  "bookingDetail": {
    "loading": "Loading...",
    "expired": "Expired",
    "payNowFailed": "Failed to initiate payment",
    "payNowError": "An error occurred initiating payment",
    "paymentCompleteTitle": "Payment Successful!",
    "paymentCompleteDesc": "Your booking has been confirmed and ticket details have been sent to your email",
    "paymentFailTitle": "Payment Failed",
    "paymentFailDesc": "The payment was not completed. You can try again.",
    "pendingAlertTitle": "Pending Booking — Please Complete Payment",
    "timeRemaining": "Time remaining:",
    "toCompletePayment": "to complete payment",
    "redirectingToPayment": "Redirecting to payment...",
    "payViaKNet": "Pay via KNet",
    "testModeNotice": "Test mode — no real amount will be charged",
    "paymentExpiredTitle": "Payment Time Expired",
    "paymentExpiredDesc": "Your booking has been automatically cancelled and tickets released",
    "bookingCancelled": "This booking has been cancelled",
    "bookingConfirmed": "Booking Confirmed!",
    "bookingRefunded": "Amount Refunded",
    "bookingDetails": "Booking Details",
    "tickets": "Tickets",
    "attendeeInfo": "Attendee Information",
    "nameLabel": "Name",
    "phoneLabel": "Phone",
    "emailLabel": "Email",
    "paymentStatus": "Payment Status",
    "paymentMethod": "Payment Method",
    "paymentStatusLabel": "Payment Status",
    "paymentSuccess": "Successful ✅",
    "paymentPending": "Pending ⏳",
    "paymentRefunded": "Refunded 💰",
    "paymentFailed": "Failed ❌",
    "total": "Total",
    "yourTickets": "Your Tickets — Show QR code at the gate",
    "cancelling": "Cancelling...",
    "myBookings": "My Bookings",
    "ticketConfirmed": "Confirmed Ticket"
  }
}

`;

// ═══════════════════════════════════════════════════════════════
// FILE: src/messages/ar.json
// ═══════════════════════════════════════════════════════════════
const _ar_json = `
{
  "common": {
    "appName": "منصة فعاليات الكويت",
    "loading": "جارٍ التحميل...",
    "save": "حفظ",
    "cancel": "إلغاء",
    "delete": "حذف",
    "edit": "تعديل",
    "create": "إنشاء",
    "search": "بحث",
    "noResults": "لا توجد نتائج",
    "error": "حدث خطأ",
    "unexpectedError": "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
    "retry": "إعادة المحاولة",
    "back": "رجوع",
    "home": "الرئيسية",
    "events": "الفعاليات",
    "categories": "التصنيفات",
    "login": "تسجيل الدخول",
    "register": "إنشاء حساب",
    "logout": "تسجيل الخروج",
    "profile": "الملف الشخصي",
    "loadMore": "تحميل المزيد",
    "tryAgain": "حاول مرة أخرى",
    "currency": "د.ك",
    "viewDetails": "عرض التفاصيل",
    "allEvents": "جميع الفعاليات",
    "featuredEvents": "فعاليات مميزة",
    "upcomingEvents": "فعاليات قادمة",
    "clearFilters": "مسح الفلاتر",
    "featured": "مميز",
    "free": "مجاني",
    "from": "من",
    "remaining": "متبقي",
    "selectDate": "اختر التاريخ"
  },
  "auth": {
    "signIn": "تسجيل الدخول",
    "signUp": "إنشاء حساب",
    "signOut": "تسجيل الخروج",
    "forgotPassword": "نسيت كلمة المرور؟",
    "orContinueWith": "أو المتابعة بواسطة",
    "noAccount": "ليس لديك حساب؟",
    "hasAccount": "لديك حساب بالفعل؟",
    "welcomeBack": "مرحباً بعودتك",
    "createAccount": "إنشاء حساب جديد",
    "email": "البريد الإلكتروني",
    "password": "كلمة المرور",
    "confirmPassword": "تأكيد كلمة المرور",
    "name": "الاسم الكامل",
    "phone": "رقم الهاتف",
    "phoneOptional": "رقم الهاتف (اختياري)",
    "signInButton": "تسجيل الدخول",
    "signUpButton": "إنشاء حساب",
    "forgotPasswordButton": "إرسال رابط الاستعادة",
    "backToSignIn": "العودة لتسجيل الدخول",
    "noAccountLink": "إنشاء حساب جديد",
    "hasAccountLink": "تسجيل الدخول",
    "signingIn": "جارٍ تسجيل الدخول...",
    "signingUp": "جارٍ إنشاء الحساب...",
    "sendingReset": "جارٍ الإرسال...",
    "resetEmailSent": "إذا كان هناك حساب مرتبط بهذا البريد، ستستلم رابط استعادة كلمة المرور",
    "passwordRequirements": "يجب أن تحتوي على 8 أحرف على الأقل، بما في ذلك حرف كبير وحرف صغير ورقم",
    "orSeparator": "أو",
    "termsAgreement": "بالنقر على إنشاء حساب، أنت توافق على",
    "termsOfService": "شروط الخدمة",
    "privacyPolicy": "سياسة الخصوصية",
    "signInSubtitle": "أدخل بياناتك لتسجيل الدخول إلى حسابك",
    "signUpSubtitle": "أنشئ حسابك لاستكشاف وحجز أفضل الفعاليات",
    "forgotPasswordSubtitle": "أدخل بريدك الإلكتروني وسنرسل لك رابط استعادة كلمة المرور",
    "signInSuccess": "تم تسجيل الدخول بنجاح",
    "signUpSuccess": "تم إنشاء الحساب بنجاح",
    "resetLinkSent": "تم إرسال رابط الاستعادة",
    "signInFailed": "فشل تسجيل الدخول",
    "signUpFailed": "فشل إنشاء الحساب",
    "resetFailed": "فشل إرسال رابط الاستعادة",
    "namePlaceholder": "أحمد محمد",
    "emailPlaceholder": "name@example.com",
    "passwordPlaceholder": "••••••••",
    "phonePlaceholder": "965XXXXXXXX",
    "previewMode": "وضع المعاينة",
    "clerkNotConfigured": "مفاتيح Clerk غير مُكوّنة. لتشغيل نظام المصادقة، أضف",
    "and": "و",
    "inEnvLocal": "في ملف .env.local"
  },
  "profile": {
    "title": "الملف الشخصي",
    "name": "الاسم",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "role": "الدور",
    "avatar": "الصورة الشخصية",
    "saveChanges": "حفظ التغييرات",
    "saving": "جارٍ الحفظ...",
    "updateSuccess": "تم تحديث الملف الشخصي",
    "updateError": "حدث خطأ في التحديث",
    "editClerkNote": "يُعدّل من إعدادات الحساب",
    "clerkSetupMessage": "لعرض وتعديل بياناتك الشخصية، يرجى تكوين مفاتيح Clerk أولاً",
    "clerkSetupHint": "أضف NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY و CLERK_SECRET_KEY في ملف .env.local",
    "accountInfo": "معلومات الحساب",
    "accountInfoDesc": "معلوماتك الأساسية التي يتم إدارتها من خلال نظام المصادقة",
    "nameChangeNote": "يُعدّل من إعدادات الحساب",
    "editProfile": "تعديل البيانات",
    "editProfileDesc": "قم بتعديل بياناتك الشخصية",
    "phoneHint": "رقم الهاتف الكويتي (يبدأ بـ 965)",
    "profileUpdated": "تم تحديث الملف الشخصي",
    "roleAttendee": "حاضر",
    "roleOrganizer": "منظم",
    "roleAdmin": "مدير"
  },
  "role": {
    "attendee": "حاضر",
    "organizer": "منظم",
    "admin": "مدير"
  },
  "nav": {
    "home": "الرئيسية",
    "events": "الفعاليات",
    "bookings": "حجوزاتي",
    "dashboard": "لوحة التحكم",
    "profile": "الملف الشخصي",
    "login": "تسجيل الدخول",
    "register": "إنشاء حساب",
    "menu": "القائمة",
    "toggleTheme": "تبديل المظهر",
    "switchLanguage": "تغيير اللغة",
    "openMenu": "فتح القائمة",
    "closeMenu": "إغلاق القائمة",
    "search": "بحث"
  },
  "home": {
    "heroTitle": "اكتشف أفضل الفعاليات في الكويت",
    "heroSubtitle": "حجز تذاكر سريع وآمن لأروع الفعاليات",
    "browseEvents": "تصفح الفعاليات",
    "exploreCategories": "استكشف التصنيفات",
    "upcomingEventsCount": "فعاليات قادمة",
    "categoriesCount": "تصنيفات",
    "venuesCount": "أماكن",
    "discoverMore": "اكتشف المزيد",
    "newsletterTitle": "اشترك ليصلك كل جديد",
    "newsletterPlaceholder": "بريدك الإلكتروني",
    "newsletterButton": "اشتراك",
    "ctaTitle": "لماذا فعاليات الكويت؟",
    "ctaSubtitle": "منصتك الموثوقة لاكتشاف وحجز أفضل الفعاليات في الكويت",
    "ctaSecureTitle": "تذاكر آمنة مضمونة",
    "ctaSecureDesc": "حجزك مؤمن وبتذاكر رسمية مضمونة 100%",
    "ctaFastTitle": "حجز سهل وسريع",
    "ctaFastDesc": "احجز تذكرتك في أقل من دقيقة مع دفع آمن عبر كي نت",
    "ctaBestTitle": "أفضل الفعاليات",
    "ctaBestDesc": "نختار لك أجمل الفعاليات في الكويت",
    "ctaButton": "استكشف الفعاليات الآن",
    "noFeaturedTitle": "لا توجد فعاليات حالياً",
    "noFeaturedSubtitle": "ترقبوا فعاليات مميزة قريباً!",
    "featuredSubtitle": "اكتشف أبرز الفعاليات المختارة بعناية لكم",
    "viewAll": "عرض الكل",
    "categoriesSubtitle": "تصفح الفعاليات حسب الاهتمام",
    "eventSingular": "فعالية",
    "eventPlural": "فعاليات",
    "statsTitle": "الكويت بالأرقام",
    "statsSubtitle": "منصة فعاليات الكويت بالأرقام",
    "statsUpcomingEvents": "الفعاليات القادمة",
    "statsCategories": "الفئات المتنوعة",
    "statsVenues": "المواقع",
    "statsTicketsAvailable": "تذاكر متاحة",
    "statsCity": "المدينة",
    "statsFeatured": "فعاليات مميزة",
    "statsCityValue": "الكويت",
    "testimonialsTitle": "آراء العملاء",
    "testimonialsSubtitle": "اكتشف تجارب مستخدمينا مع منصة فعاليات الكويت",
    "ctaBrowse": "تصفح الفعاليات",
    "ctaRegister": "إنشاء حساب",
    "testimonial1Text": "تجربة رائعة! تمكنت من حجز تذاكر لحفل موسيقي مذهل في ثوانٍ. المنصة سهلة الاستخدام وتصميمها جميل جداً.",
    "testimonial1Author": "سارة الأحمد",
    "testimonial1Role": "محبة للفعاليات",
    "testimonial2Text": "أفضل منصة لحجز الفعاليات في الكويت. التنوع في الفعاليات والأسعار المناسبة يجعلها خياري الأول دائماً.",
    "testimonial2Author": "محمد العتيبي",
    "testimonial2Role": "رجل أعمال",
    "testimonial3Text": "استخدمت المنصة لتنظيم فعالية شركاتنا وكانت النتائج ممتازة. الدعم سريع والخدمة احترافية.",
    "testimonial3Author": "نورة الشمري",
    "testimonial3Role": "منظمة فعاليات",
    "prevCategory": "التصنيف السابق",
    "nextCategory": "التصنيف التالي",
    "outOf5Stars": "{rating} من أصل ٥ نجوم",
    "goToSlide": "الانتقال إلى الشريحة {number}"
  },
  "events": {
    "pageTitle": "الفعاليات",
    "filterCategory": "التصنيف",
    "filterDate": "التاريخ",
    "filterSearch": "ابحث عن فعالية...",
    "filterSort": "ترتيب",
    "sortDate": "التاريخ",
    "sortPrice": "السعر",
    "noEvents": "لا توجد فعاليات مطابقة",
    "fromPrice": "ابتداءً من",
    "remaining": "متبقية",
    "ticket": "تذكرة",
    "tickets": "تذاكر",
    "subtitle": "اكتشف أفضل الفعاليات في الكويت",
    "prev": "السابق",
    "next": "التالي",
    "pageOf": "صفحة {page} من {total}",
    "allCategories": "كل التصنيفات",
    "sortDateAsc": "الأقرب تاريخاً",
    "sortDateDesc": "الأبعد تاريخاً",
    "clear": "مسح"
  },
  "category": {
    "eventsIn": "فعاليات في",
    "noEventsInCategory": "لا توجد فعاليات في هذا التصنيف حالياً"
  },
  "venue": {
    "upcomingEvents": "فعاليات قادمة",
    "noUpcomingEvents": "لا توجد فعاليات قادمة في هذا المكان",
    "capacity": "السعة"
  },
  "eventDetail": {
    "about": "عن الفعالية",
    "venue": "المكان",
    "organizer": "المنظم",
    "reviews": "التقييمات",
    "review": "تقييم",
    "similarEvents": "فعاليات مشابهة",
    "featured": "مميزة",
    "capacity": "السعة",
    "person": "شخص",
    "fromPrice": "من"
  },
  "footer": {
    "about": "عن المنصة",
    "contact": "تواصل معنا",
    "careers": "الوظائف",
    "terms": "الشروط والأحكام",
    "privacy": "سياسة الخصوصية",
    "cookiePolicy": "سياسة ملفات تعريف الارتباط",
    "rights": "جميع الحقوق محفوظة",
    "quickLinks": "روابط سريعة",
    "legal": "قانوني",
    "newsletter": "النشرة البريدية",
    "newsletterDesc": "اشترك ليصلك كل جديد عن أحدث الفعاليات والعروض الحصرية",
    "newsletterPlaceholder": "بريدك الإلكتروني",
    "subscribe": "اشتراك",
    "subscribed": "تم الاشتراك ✓",
    "backToTop": "العودة للأعلى",
    "description": "منصة حجز تذاكر الفعاليات الرائدة في الكويت. اكتشف أروع الفعاليات واحجز تذاكرك بسهولة وأمان."
  },
  "booking": {
    "pageTitle": "حجوزاتي",
    "pending": "معلق",
    "confirmed": "مؤكد",
    "cancelled": "ملغى",
    "refunded": "مسترد",
    "cancelBooking": "إلغاء الحجز",
    "cancelConfirm": "هل أنت متأكد من إلغاء الحجز؟",
    "expiryWarning": "متبقي لإتمام الدفع",
    "expired": "انتهت المهلة",
    "noBookings": "ليس لديك حجوزات بعد",
    "bookingCreated": "تم حجز التذاكر مبدئياً",
    "selectTickets": "اختر التذاكر",
    "totalPrice": "المجموع",
    "attendeeInfo": "بيانات الحضور",
    "fullName": "الاسم الكامل",
    "phone": "رقم الهاتف",
    "email": "البريد الإلكتروني",
    "bookNow": "احجز الآن",
    "mustLogin": "يجب تسجيل الدخول لإتمام الحجز",
    "ticketsLabel": "تذكرة",
    "ticketsPlural": "تذاكر",
    "selectTicketsFirst": "اختر التذاكر أعلاه للمتابعة",
    "mustSelectOne": "يجب اختيار تذكرة واحدة على الأقل",
    "fillAllFields": "يجب ملء جميع بيانات الحضور",
    "bookingError": "حدث خطأ في إنشاء الحجز",
    "bookingInProgress": "جارٍ الحجز...",
    "namePlaceholder": "محمد أحمد",
    "phonePlaceholder": "965XXXXXXXX",
    "emailPlaceholder": "mohammed@example.com"
  },
  "tickets": {
    "selectTickets": "اختر التذاكر",
    "free": "مجاني",
    "soldOut": "نفدت التذاكر",
    "available": "متوفر",
    "maxPerBooking": "حد أقصى",
    "perBooking": "للحجز",
    "total": "المجموع",
    "ticket": "تذكرة",
    "tickets": "تذاكر",
    "noTickets": "لا توجد تذاكر متوفرة حالياً",
    "vip": "VIP",
    "earlyBird": "مبكر",
    "group": "مجموعة",
    "decreaseQuantity": "إنقاص الكمية",
    "increaseQuantity": "زيادة الكمية"
  },
  "payment": {
    "initiate": "بدء الدفع",
    "payWithKnet": "الدفع عبر KNet",
    "processing": "جارٍ معالجة الدفع...",
    "success": "تم الدفع بنجاح!",
    "successMessage": "تم تأكيد حجزك وإرسال التذاكر لبريدك الإلكتروني",
    "failed": "فشل الدفع",
    "failedMessage": "لم تتم عملية الدفع. يمكنك المحاولة مرة أخرى.",
    "refund": "استرداد المبلغ",
    "refundConfirm": "هل أنت متأكد من استرداد المبلغ؟ سيتم إلغاء الحجز.",
    "refundReason": "سبب الاسترداد",
    "refunded": "تم الاسترداد",
    "testMode": "وضع الاختبار — لن يتم خصم مبلغ حقيقي",
    "totalDue": "المبلغ المطلوب"
  },
  "error": {
    "unauthorized": "يجب تسجيل الدخول",
    "forbidden": "ليس لديك صلاحية",
    "notFound": "غير موجود",
    "internal": "خطأ داخلي",
    "validation": "بيانات غير صالحة"
  },
  "search": {
    "placeholder": "ابحث عن فعاليات...",
    "clear": "مسح",
    "minPrice": "أقل سعر",
    "maxPrice": "أعلى سعر",
    "priceInKWD": "السعر بالدينار",
    "searchLabel": "بحث",
    "categoryLabel": "التصنيف",
    "cityLabel": "المدينة",
    "dateLabel": "التاريخ",
    "priceLabel": "السعر",
    "venueLabel": "المكان",
    "activeFilters": "الفلاتر النشطة",
    "remove": "إزالة"
  },
  "notifications": {
    "title": "الإشعارات",
    "markAllRead": "تعليم الكل كمقروء",
    "all": "الكل",
    "unread": "غير مقروء",
    "error": "فشل تحميل الإشعارات",
    "retry": "إعادة المحاولة",
    "noNotifications": "لا توجد إشعارات بعد",
    "previous": "السابق",
    "page": "صفحة",
    "next": "التالي",
    "loading": "جارٍ التحميل...",
    "viewAll": "عرض جميع الإشعارات",
    "now": "الآن",
    "minutesAgo": "منذ {count} دقيقة",
    "hoursAgo": "منذ {count} ساعة",
    "daysAgo": "منذ {count} يوم"
  },
  "dashboard": {
    "overview": {
      "title": "لوحة التحكم",
      "subtitle": "نظرة عامة على فعالياتك وحجوزاتك"
    },
    "nav": {
      "overview": "نظرة عامة",
      "events": "الفعاليات",
      "bookings": "الحجوزات",
      "tickets": "التذاكر",
      "reviews": "التقييمات",
      "settings": "الإعدادات",
      "admin": "الإدارة"
    },
    "stats": {
      "totalEvents": "إجمالي الفعاليات",
      "published": "منشورة",
      "totalBookings": "إجمالي الحجوزات",
      "from": "من",
      "totalRevenue": "إجمالي الإيرادات",
      "confirmedRevenue": "الإيرادات المؤكدة",
      "draftEvents": "فعاليات مسودة",
      "awaitingPublish": "بانتظار النشر"
    },
    "revenueChart": {
      "title": "نظرة عامة على الإيرادات",
      "noData": "لا توجد بيانات إيرادات",
      "revenue": "الإيرادات"
    },
    "events": {
      "myEvents": "فعالياتي",
      "manageSubtitle": "إدارة وتنظيم فعالياتك",
      "create": "إنشاء فعالية",
      "createFirst": "أنشئ أول فعالية",
      "createTitle": "إنشاء فعالية جديدة",
      "createSubtitle": "أدخل التفاصيل لإنشاء فعالية جديدة",
      "editTitle": "تعديل الفعالية",
      "noEvents": "لا توجد فعاليات بعد",
      "notFound": "الفعالية غير موجودة",
      "basicInfo": "المعلومات الأساسية",
      "titleAr": "العنوان (عربي)",
      "titleEn": "العنوان (إنجليزي)",
      "descriptionAr": "الوصف (عربي)",
      "descriptionEn": "الوصف (إنجليزي)",
      "startDate": "تاريخ البداية",
      "startTime": "وقت البداية",
      "endDate": "تاريخ الانتهاء",
      "media": "الوسائط",
      "coverImage": "صورة الغلاف",
      "imageTooLarge": "حجم الصورة يجب أن يكون أقل من 5 ميجابايت",
      "dragOrClick": "اسحب وأفلت أو انقر للرفع",
      "maxSize": "الحد الأقصى 5 ميجابايت",
      "ticketTiers": "فئات التذاكر",
      "addTier": "إضافة فئة",
      "tierNameAr": "اسم الفئة (عربي)",
      "tierType": "نوع الفئة",
      "tierTypes": {
        "VIP": "في آي بي",
        "STANDARD": "قياسي",
        "EARLY_BIRD": "حجز مبكر",
        "PREMIUM": "مميز",
        "GROUP": "مجموعة"
      },
      "tierQuantity": "الكمية",
      "tierMaxPerBooking": "الحد الأقصى للحجز",
      "steps": {
        "basic": "معلومات أساسية",
        "tickets": "التذاكر",
        "media": "الوسائط",
        "review": "مراجعة"
      },
      "selectCategory": "اختر التصنيف",
      "tierCount": "{count} فئات",
      "draftNotice": "هذه الفعالية مسودة وغير مرئية للجمهور",
      "prevStep": "السابق",
      "nextStep": "التالي",
      "saveDraft": "حفظ المسودة",
      "publish": "نشر",
      "publishStatus": "حالة النشر",
      "cancel": "إلغاء",
      "saveChanges": "حفظ التغييرات",
      "category": "التصنيف",
      "table": {
        "title": "الفعالية",
        "organizer": "المنظم",
        "status": "الحالة",
        "featured": "مميزة",
        "capacity": "السعة",
        "bookings": "الحجوزات",
        "date": "التاريخ",
        "category": "التصنيف",
        "actions": "الإجراءات"
      },
      "status": {
        "DRAFT": "مسودة",
        "PUBLISHED": "منشورة",
        "CANCELLED": "ملغاة",
        "SOLD_OUT": "نفدت التذاكر",
        "COMPLETED": "مكتملة"
      },
      "actions": {
        "view": "عرض",
        "edit": "تعديل",
        "delete": "حذف",
        "confirmDelete": "هل أنت متأكد من حذف هذه الفعالية؟"
      }
    },
    "tickets": {
      "title": "ماسح التذاكر",
      "subtitle": "مسح والتحقق من التذاكر",
      "selectEventLabel": "اختر الفعالية",
      "selectEventFirst": "يرجى اختيار فعالية أولاً",
      "scanQR": "مسح رمز QR",
      "manualTitle": "إدخال يدوي",
      "validating": "جارٍ التحقق...",
      "stats": {
        "scanned": "تم المسح",
        "valid": "صالحة",
        "invalid": "غير صالحة",
        "total": "الإجمالي",
        "totalTickets": "إجمالي التذاكر",
        "checkedIn": "تم التسجيل",
        "remaining": "المتبقي",
        "checkInRate": "نسبة التسجيل"
      },
      "camera": {
        "start": "تشغيل الكاميرا",
        "stop": "إيقاف الكاميرا",
        "switch": "تبديل الكاميرا",
        "error": "خطأ في الكاميرا",
        "noAccess": "تم رفض الوصول للكاميرا",
        "scanning": "جارٍ المسح...",
        "noCamera": "لا توجد كاميرا متاحة"
      },
      "validation": {
        "valid": "تذكرة صالحة",
        "invalid": "تذكرة غير صالحة",
        "alreadyUsed": "مستخدمة بالفعل",
        "expired": "منتهية الصلاحية",
        "wrongEvent": "فعالية خاطئة",
        "ticketNumber": "رقم التذكرة",
        "tier": "فئة التذكرة",
        "holder": "حامل التذكرة",
        "scannedAt": "وقت المسح",
        "event": "الفعالية",
        "status": "الحالة",
        "details": "التفاصيل",
        "lastScanned": "آخر مسح",
        "noRecentScans": "لا توجد عمليات مسح حديثة",
        "enterTicketNumber": "أدخل رقم التذكرة",
        "validateButton": "تحقق",
        "clearHistory": "مسح السجل"
      },
      "selectEvent": "اختر الفعالية",
      "noActiveEvents": "لا توجد فعاليات نشطة",
      "manualEntryLabel": "إدخال يدوي",
      "validate": "تحقق",
      "manualEntryHint": "أدخل رقم التذكرة يدوياً",
      "recentValidations": "التحققات الأخيرة",
      "noValidationsYet": "لا توجد تحققات بعد",
      "validTicket": "تذكرة صالحة",
      "checkInSuccess": "تم تسجيل الحضور بنجاح!",
      "attendee": "الحضور",
      "tier": "الفئة",
      "booking": "الحجز",
      "eventTime": "وقت الفعالية",
      "ticketNumber": "رقم التذكرة",
      "scanNext": "مسح التالي",
      "reasonNotFound": "التذكرة غير موجودة في نظامنا",
      "invalidTicket": "تذكرة غير صالحة",
      "unknownError": "حدث خطأ غير معروف",
      "usedAt": "استُخدمت في",
      "tryAgain": "حاول مرة أخرى",
      "cameraDenied": "تم رفض الوصول للكاميرا",
      "noCamera": "لم يتم العثور على كاميرا",
      "cameraError": "خطأ في الكاميرا",
      "startingCamera": "جارٍ تشغيل الكاميرا...",
      "retryCamera": "إعادة المحاولة",
      "useManualEntry": "أدخل رقم التذكرة يدوياً",
      "stopCamera": "إيقاف الكاميرا",
      "startCamera": "تشغيل الكاميرا"
    },
    "tabs": {
      "scanner": "الماسح",
      "manual": "يدوي"
    },
    "upcomingEvents": {
      "title": "الفعاليات القادمة",
      "noUpcoming": "لا توجد فعاليات قادمة",
      "bookings": "حجوزات"
    },
    "recentBookings": {
      "title": "الحجوزات الأخيرة",
      "noBookings": "لا توجد حجوزات أخيرة",
      "tickets": "تذاكر"
    },
    "reviews": {
      "title": "التقييمات",
      "subtitle": "إدارة تقييمات الفعاليات",
      "selectEvent": "اختر الفعالية",
      "selectEventFirst": "يرجى اختيار فعالية أولاً",
      "averageRating": "متوسط التقييم",
      "totalReviews": "إجمالي التقييمات",
      "fiveStarReviews": "تقييمات ٥ نجوم",
      "noReviews": "لا توجد تقييمات بعد",
      "replyPlaceholder": "اكتب رداً...",
      "sendReply": "إرسال الرد",
      "reply": "رد"
    },
    "bookings": {
      "title": "الحجوزات",
      "subtitle": "إدارة حجوزات الفعاليات",
      "filterByEvent": "تصفية حسب الفعالية",
      "allEvents": "جميع الفعاليات",
      "filterByStatus": "تصفية حسب الحالة",
      "allStatuses": "جميع الحالات",
      "noBookings": "لا توجد حجوزات",
      "status": {
        "CONFIRMED": "مؤكد",
        "PENDING": "معلق",
        "CANCELLED": "ملغى",
        "REFUNDED": "مسترد"
      },
      "table": {
        "number": "رقم الحجز",
        "event": "الفعالية",
        "customer": "العميل",
        "attendee": "الحضور",
        "quantity": "الكمية",
        "amount": "المبلغ",
        "status": "الحالة",
        "date": "التاريخ",
        "actions": "إجراءات"
      }
    }
  },
  "reviews": {
    "title": "التقييمات",
    "reviewSingle": "تقييم",
    "reviewPlural": "تقييمات",
    "totalReviewsLabel": "إجمالي التقييمات",
    "writeReview": "اكتب تقييماً",
    "alreadyReviewed": "لقد قمت بتقييم هذه الفعالية مسبقاً",
    "showingReviews": "عرض {count} من {total} تقييم",
    "sortRecent": "الأحدث",
    "sortHighest": "الأعلى تقييماً",
    "sortLowest": "الأقل تقييماً",
    "noReviews": "لا توجد تقييمات بعد",
    "beFirst": "كن أول من يشارك تجربته!",
    "previous": "السابق",
    "next": "التالي",
    "organizerReply": "رد المنظم",
    "lockedTitle": "سجّل الدخول لإضافة تقييم",
    "lockedDescription": "فقط الحضور الموثقون يمكنهم إضافة تقييمات",
    "ratingRequired": "يرجى اختيار تقييم",
    "submitError": "فشل إرسال التقييم",
    "yourRating": "تقييمك",
    "yourComment": "تعليقك",
    "optional": "(اختياري)",
    "commentPlaceholder": "شارك تجربتك...",
    "submitReview": "إرسال التقييم",
    "star": "نجمة",
    "cancel": "إلغاء",
    "ratingLabels": {
      "1": "سيء جداً",
      "2": "سيء",
      "3": "متوسط",
      "4": "جيد",
      "5": "ممتاز"
    }
  },
  "admin": {
    "nav": {
      "overview": "نظرة عامة",
      "users": "المستخدمون",
      "events": "الفعاليات",
      "categories": "التصنيفات"
    },
    "overview": {
      "title": "نظرة عامة على الإدارة",
      "subtitle": "لوحة إدارة المنصة"
    },
    "stats": {
      "totalUsers": "إجمالي المستخدمين",
      "thisWeek": "هذا الأسبوع",
      "organizers": "المنظمون",
      "activeOrganizers": "المنظمون النشطون",
      "totalEvents": "إجمالي الفعاليات",
      "published": "منشورة",
      "totalBookings": "إجمالي الحجوزات",
      "from": "من",
      "totalRevenue": "إجمالي الإيرادات",
      "allTime": "كل الأوقات",
      "last30DaysRevenue": "إيرادات آخر ٣٠ يوم",
      "last30Days": "آخر ٣٠ يوم",
      "categories": "التصنيفات",
      "activeCategories": "التصنيفات النشطة",
      "reviews": "التقييمات",
      "totalReviews": "إجمالي التقييمات"
    },
    "users": {
      "title": "إدارة المستخدمين",
      "subtitle": "إدارة مستخدمي المنصة والأدوار",
      "attendees": "الحاضرون",
      "organizers": "المنظمون",
      "admins": "المديرون",
      "searchPlaceholder": "البحث عن مستخدمين...",
      "allRoles": "جميع الأدوار",
      "role": {
        "ATTENDEE": "حاضر",
        "ORGANIZER": "منظم",
        "ADMIN": "مدير"
      },
      "table": {
        "name": "الاسم",
        "email": "البريد الإلكتروني",
        "role": "الدور",
        "status": "الحالة",
        "joined": "تاريخ الانضمام",
        "events": "الفعاليات",
        "bookings": "الحجوزات",
        "actions": "إجراءات",
        "phone": "الهاتف"
      },
      "active": "نشط",
      "inactive": "غير نشط",
      "makeOrganizer": "جعله منظماً",
      "makeAttendee": "جعله حاضراً",
      "makeAdmin": "جعله مديراً",
      "deactivate": "تعطيل",
      "activate": "تفعيل",
      "confirmTitle": "تأكيد الإجراء",
      "confirmRoleChange": "هل أنت متأكد من تغيير دور هذا المستخدم؟",
      "confirmActivate": "هل أنت متأكد من تفعيل هذا المستخدم؟",
      "confirmDeactivate": "هل أنت متأكد من تعطيل هذا المستخدم؟"
    },
    "categories": {
      "title": "إدارة التصنيفات",
      "subtitle": "إدارة تصنيفات الفعاليات",
      "create": "إنشاء تصنيف",
      "table": {
        "nameAr": "الاسم (عربي)",
        "nameEn": "الاسم (إنجليزي)",
        "slug": "الرابط",
        "events": "الفعاليات",
        "actions": "إجراءات"
      },
      "editCategory": "تعديل التصنيف",
      "createCategory": "إنشاء تصنيف",
      "nameAr": "الاسم (عربي)",
      "nameEn": "الاسم (إنجليزي)",
      "slug": "الرابط",
      "iconUrl": "رابط الأيقونة",
      "description": "الوصف",
      "deleteTitle": "حذف التصنيف",
      "deleteConfirm": "هل أنت متأكد من حذف هذا التصنيف؟"
    },
    "events": {
      "title": "إدارة الفعاليات",
      "subtitle": "مراجعة وإدارة جميع فعاليات المنصة",
      "searchPlaceholder": "ابحث عن فعالية...",
      "allStatuses": "جميع الحالات",
      "status": {
        "DRAFT": "مسودة",
        "PUBLISHED": "منشورة",
        "CANCELLED": "ملغاة",
        "SOLD_OUT": "نفدت التذاكر",
        "COMPLETED": "مكتملة"
      },
      "table": {
        "title": "الفعالية",
        "organizer": "المنظم",
        "status": "الحالة",
        "featured": "مميزة",
        "capacity": "السعة",
        "bookings": "الحجوزات",
        "date": "التاريخ",
        "actions": "الإجراءات"
      },
      "view": "عرض",
      "feature": "تمييز",
      "unfeature": "إلغاء التمييز",
      "publish": "نشر",
      "cancel": "إلغاء"
    },
    "cancel": "إلغاء",
    "confirm": "تأكيد",
    "save": "حفظ",
    "delete": "حذف"
  },
  "bookings": {
    "title": "حجوزاتي",
    "browseEvents": "تصفح الفعاليات",
    "ticketCount": "{count} تذكرة",
    "bookingNumber": "رقم الحجز",
    "tabs": {
      "upcoming": "قادمة",
      "past": "سابقة",
      "cancelled": "ملغاة"
    },
    "status": {
      "confirmed": "مؤكد ✅",
      "pending": "معلق ⏳",
      "cancelled": "ملغى ❌",
      "refunded": "مسترد 💰"
    },
    "noUpcoming": "ليس لديك حجوزات قادمة",
    "noPast": "ليس لديك حجوزات سابقة",
    "noCancelled": "ليس لديك حجوزات ملغاة"
  },
  "bookingDetail": {
    "loading": "جارٍ التحميل...",
    "expired": "انتهت المهلة",
    "payNowFailed": "فشل بدء الدفع",
    "payNowError": "حدث خطأ في بدء الدفع",
    "paymentCompleteTitle": "تم الدفع بنجاح!",
    "paymentCompleteDesc": "تم تأكيد حجزك وإرسال تفاصيل التذاكر لبريدك الإلكتروني",
    "paymentFailTitle": "فشل الدفع",
    "paymentFailDesc": "لم تتم عملية الدفع. يمكنك المحاولة مرة أخرى.",
    "pendingAlertTitle": "حجز معلق — يرجى إتمام الدفع",
    "timeRemaining": "متبقي",
    "toCompletePayment": "لإتمام الدفع",
    "redirectingToPayment": "جارٍ التحويل لصفحة الدفع...",
    "payViaKNet": "الدفع عبر KNet",
    "testModeNotice": "وضع الاختبار — لن يتم خصم مبلغ حقيقي",
    "paymentExpiredTitle": "انتهت مهلة الدفع",
    "paymentExpiredDesc": "تم إلغاء الحجز تلقائياً وتحرير التذاكر",
    "bookingCancelled": "تم إلغاء هذا الحجز",
    "bookingConfirmed": "تم تأكيد الحجز!",
    "bookingRefunded": "تم استرداد المبلغ",
    "bookingDetails": "تفاصيل الحجز",
    "tickets": "التذاكر",
    "attendeeInfo": "بيانات الحضور",
    "nameLabel": "الاسم",
    "phoneLabel": "الهاتف",
    "emailLabel": "البريد",
    "paymentStatus": "حالة الدفع",
    "paymentMethod": "طريقة الدفع",
    "paymentStatusLabel": "حالة الدفع",
    "paymentSuccess": "ناجح ✅",
    "paymentPending": "معلق ⏳",
    "paymentRefunded": "مسترد 💰",
    "paymentFailed": "فاشل ❌",
    "total": "المجموع",
    "yourTickets": "تذاكرك — اعرض QR code عند البوابة",
    "cancelling": "جارٍ الإلغاء...",
    "myBookings": "حجوزاتي",
    "ticketConfirmed": "تذكرة مؤكدة"
  }
}

`;

// ██████████████████████████████████████████████████████████████
// ██  Section 17: TYPES & VALIDATORS
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/types/index.ts
// ═══════════════════════════════════════════════════════════════
// Type definitions for Kuwait Events Platform

export type Role = "ATTENDEE" | "ORGANIZER" | "ADMIN";
export type EventStatus =
  | "DRAFT"
  | "PUBLISHED"
  | "CANCELLED"
  | "SOLD_OUT"
  | "COMPLETED";
export type TicketType = "STANDARD" | "VIP" | "EARLY_BIRD" | "GROUP";
export type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "REFUNDED";
export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";
export type PaymentMethod = "KNET" | "CREDIT_CARD";

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    field?: string | null;
    details?: unknown;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;


// ═══════════════════════════════════════════════════════════════
// FILE: src/types/api.ts
// ═══════════════════════════════════════════════════════════════
// API response types for Kuwait Events Platform

// Re-export the discriminated union ApiResponse from index.ts
export type { ApiResponse, ApiSuccessResponse, ApiErrorResponse } from "./index";

// ───────────────────────────────────────────────
// Domain types used in client components
// (derived from Prisma schema + API include shapes)
// ───────────────────────────────────────────────

/** Category as returned by API (with optional _count for events) */
export interface CategoryItem {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  slug: string;
  iconUrl?: string | null;
  description?: string | null;
  _count?: { events: number };
  eventCount?: number;
}

/** Ticket tier as returned in event listings */
export interface TicketTierItem {
  id?: string;
  nameAr?: string;
  nameEn?: string | null;
  type?: string;
  price: string;
  quantityTotal: number;
  quantitySold: number;
  quantityAvailable?: number;
  maxPerBooking?: number;
  description?: string | null;
}

/** Venue as returned in event listings */
export interface VenueItem {
  id?: string;
  nameAr: string;
  nameEn?: string | null;
  address?: string;
  city?: string;
  capacity?: number | null;
  description?: string | null;
  imageUrl?: string | null;
  slug?: string;
  coordinates?: string | null;
}

/** Event as returned by list/search API (used in grids & cards) */
export interface EventItem {
  id: string;
  titleAr: string;
  titleEn?: string | null;
  slug: string;
  coverImageUrl: string;
  startDate: string | Date;
  startTime: string;
  endTime?: string | null;
  status?: string;
  isFeatured?: boolean;
  descriptionAr?: string;
  descriptionEn?: string | null;
  category?: { id: string; nameAr: string; nameEn?: string | null; slug: string } | null;
  venue?: VenueItem | null;
  organizer?: { id: string; name: string } | null;
  ticketTiers: TicketTierItem[];
}

/** Venue detail as returned by venue page API (includes events) */
export interface VenueDetail {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  slug: string;
  address: string;
  city: string;
  capacity?: number | null;
  description?: string | null;
  imageUrl?: string | null;
  coordinates?: string | null;
  events: EventItem[];
}

/** Booking as returned by user bookings API */
export interface BookingItem {
  id: string;
  bookingNumber: string;
  status: string;
  totalAmount: string;
  quantity: number;
  attendeeName: string;
  attendeePhone: string;
  attendeeEmail: string;
  createdAt: string;
  event: {
    id: string;
    titleAr: string;
    titleEn?: string | null;
    slug?: string;
    coverImageUrl: string;
    startDate: string;
    startTime: string;
    venue?: { nameAr: string } | null;
  };
  tickets?: Array<{
    id: string;
    ticketNumber: string;
    ticketTier?: { nameAr: string; nameEn?: string | null; price: string };
  }>;
  payment?: { id: string; status: string } | null;
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/auth-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

/** Sign In validation schema */
export const signInSchema = z.object({
  email: z
    .string({ message: "البريد الإلكتروني مطلوب" })
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "يرجى إدخال بريد إلكتروني صالح" }),
  password: z
    .string({ message: "كلمة المرور مطلوبة" })
    .min(1, { message: "كلمة المرور مطلوبة" })
    .min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
});

/** Sign Up validation schema */
export const signUpSchema = z.object({
  name: z
    .string({ message: "الاسم مطلوب" })
    .min(1, { message: "الاسم مطلوب" })
    .min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" })
    .max(100, { message: "الاسم يجب أن يكون أقل من 100 حرف" }),
  email: z
    .string({ message: "البريد الإلكتروني مطلوب" })
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "يرجى إدخال بريد إلكتروني صالح" }),
  password: z
    .string({ message: "كلمة المرور مطلوبة" })
    .min(1, { message: "كلمة المرور مطلوبة" })
    .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" })
    .regex(/[A-Z]/, { message: "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل" })
    .regex(/[a-z]/, { message: "كلمة المرور يجب أن تحتوي على حرف صغير واحد على الأقل" })
    .regex(/[0-9]/, { message: "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل" }),
  confirmPassword: z
    .string({ message: "يرجى تأكيد كلمة المرور" })
    .min(1, { message: "يرجى تأكيد كلمة المرور" }),
  phone: z
    .string()
    .regex(/^965\d{8}$/, { message: "رقم الهاتف يجب أن يبدأ بـ 965 ويتكون من 11 رقم" })
    .optional()
    .or(z.literal("")),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمتا المرور غير متطابقتين",
  path: ["confirmPassword"],
});

/** Forgot Password validation schema */
export const forgotPasswordSchema = z.object({
  email: z
    .string({ message: "البريد الإلكتروني مطلوب" })
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "يرجى إدخال بريد إلكتروني صالح" }),
});

/** Reset Password validation schema */
export const resetPasswordSchema = z.object({
  password: z
    .string({ message: "كلمة المرور مطلوبة" })
    .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" })
    .regex(/[A-Z]/, { message: "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل" })
    .regex(/[a-z]/, { message: "كلمة المرور يجب أن تحتوي على حرف صغير واحد على الأقل" })
    .regex(/[0-9]/, { message: "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل" }),
  confirmPassword: z
    .string({ message: "يرجى تأكيد كلمة المرور" })
    .min(1, { message: "يرجى تأكيد كلمة المرور" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمتا المرور غير متطابقتين",
  path: ["confirmPassword"],
});

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/booking-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

export const createBookingSchema = z.object({
  eventId: z.string({ message: "يجب اختيار الفعالية" }).min(1, { message: "يجب اختيار الفعالية" }),
  attendeeName: z.string({ message: "الاسم مطلوب" }).min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }).max(100, { message: "الاسم يجب أن يكون أقل من 100 حرف" }),
  attendeePhone: z.string({ message: "رقم الهاتف مطلوب" }).regex(/^965\d{8}$/, { message: "رقم الهاتف يجب أن يبدأ بـ 965 ويتكون من 11 رقم" }),
  attendeeEmail: z.string({ message: "البريد الإلكتروني مطلوب" }).email({ message: "البريد الإلكتروني غير صالح" }),
  tickets: z.array(
    z.object({
      ticketTierId: z.string({ message: "فئة التذكرة مطلوبة" }).min(1, { message: "فئة التذكرة مطلوبة" }),
      quantity: z.number({ message: "الكمية مطلوبة" }).int({ message: "الكمية يجب أن تكون عدداً صحيحاً" }).min(1, { message: "يجب اختيار تذكرة واحدة على الأقل" }).max(50, { message: "الحد الأقصى 50 تذكرة للحجز الواحد" }),
    })
  ).min(1, { message: "يجب اختيار تذكرة واحدة على الأقل" }),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/event-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

export const createEventSchema = z.object({
  titleAr: z.string({ message: "عنوان الفعالية بالعربية مطلوب" }).min(3, { message: "عنوان الفعالية يجب أن يكون 3 أحرف على الأقل" }).max(200, { message: "عنوان الفعالية يجب أن يكون أقل من 200 حرف" }),
  titleEn: z.string({ message: "عنوان الفعالية بالإنجليزية مطلوب" }).min(3, { message: "Event title must be at least 3 characters" }).max(200, { message: "Event title must be less than 200 characters" }).optional(),
  descriptionAr: z.string({ message: "وصف الفعالية بالعربية مطلوب" }).min(10, { message: "الوصف يجب أن يكون 10 أحرف على الأقل" }),
  descriptionEn: z.string({ message: "وصف الفعالية بالإنجليزية مطلوب" }).optional(),
  coverImageUrl: z.string({ message: "صورة الغلاف مطلوبة" }).url({ message: "رابط الصورة غير صالح" }),
  galleryUrls: z.string().default("[]"), // JSON array stored as string
  startDate: z.string({ message: "تاريخ البداية مطلوب" }).regex(/^\d{4}-\d{2}-\d{2}$/, { message: "صيغة التاريخ غير صحيحة" }),
  startTime: z.string({ message: "وقت البداية مطلوب" }).regex(/^\d{2}:\d{2}$/, { message: "صيغة الوقت غير صحيحة" }),
  endTime: z.string().regex(/^\d{2}:\d{2}$/, { message: "صيغة وقت الانتهاء غير صحيحة" }).optional(),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "صيغة تاريخ الانتهاء غير صحيحة" }).optional(),
  categoryId: z.string({ message: "التصنيف مطلوب" }).min(1, { message: "يجب اختيار التصنيف" }),
  venueId: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "CANCELLED", "SOLD_OUT", "COMPLETED"], { message: "حالة الفعالية غير صالحة" }).default("DRAFT"),
  metadata: z.record(z.string(), z.unknown()).optional(),
  ticketTiers: z.array(
    z.object({
      nameAr: z.string({ message: "اسم التذكرة بالعربية مطلوب" }).min(1, { message: "اسم التذكرة مطلوب" }),
      nameEn: z.string().optional(),
      type: z.enum(["STANDARD", "VIP", "EARLY_BIRD", "GROUP"], { message: "نوع التذكرة غير صالح" }),
      price: z.string({ message: "السعر مطلوب" }).regex(/^\d+\.\d{3}$/, { message: "صيغة السعر غير صحيحة (مثال: 15.000)" }),
      quantityTotal: z.number({ message: "الكمية مطلوبة" }).int({ message: "الكمية يجب أن تكون عدداً صحيحاً" }).positive({ message: "الكمية يجب أن تكون أكبر من 0" }),
      maxPerBooking: z.number({ message: "الحد الأقصى للحجز مطلوب" }).int({ message: "يجب أن يكون عدداً صحيحاً" }).min(1, { message: "الحد الأدنى 1 تذكرة للحجز" }).max(50, { message: "الحد الأقصى 50 تذكرة للحجز" }).default(10),
      description: z.string().optional(),
    })
  ).min(1, { message: "يجب إضافة فئة تذكرة واحدة على الأقل" }),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;

export const updateEventSchema = createEventSchema.partial();
export type UpdateEventInput = z.infer<typeof updateEventSchema>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/review-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

export const createReviewSchema = z.object({
  rating: z
    .number({ message: "التقييم مطلوب" })
    .int({ message: "التقييم يجب أن يكون رقم صحيح" })
    .min(1, { message: "الحد الأدنى للتقييم هو 1" })
    .max(5, { message: "الحد الأقصى للتقييم هو 5" }),
  comment: z
    .string()
    .max(1000, { message: "التعليق يجب أن يكون أقل من 1000 حرف" })
    .optional()
    .or(z.literal("")),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/ticket-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

export const validateTicketSchema = z.object({
  ticketNumber: z
    .string()
    .regex(/^TCK-[A-Z0-9]{4}-[A-Z0-9]{4}$/, { message: "صيغة رقم التذكرة غير صالحة (TCK-XXXX-XXXX)" }),
  eventId: z.string().cuid({ message: "معرف الفعالية غير صالح" }),
});

export type ValidateTicketInput = z.infer<typeof validateTicketSchema>;

export const validateTicketResponseSchema = z.object({
  valid: z.boolean(),
  ticket: z
    .object({
      id: z.string(),
      ticketNumber: z.string(),
      isUsed: z.boolean(),
      usedAt: z.string().nullable(),
      ticketTier: z.object({
        nameAr: z.string(),
        nameEn: z.string().nullable(),
        type: z.string(),
        price: z.string(),
      }),
      booking: z.object({
        attendeeName: z.string(),
        attendeeEmail: z.string(),
        attendeePhone: z.string(),
        status: z.string(),
        bookingNumber: z.string(),
        quantity: z.number(),
      }),
      event: z
        .object({
          id: z.string(),
          titleAr: z.string(),
          titleEn: z.string().nullable(),
          startDate: z.string(),
          startTime: z.string(),
        })
        .nullable(),
    })
    .nullable(),
  reason: z.string().nullable(),
});

export type ValidateTicketResponse = z.infer<
  typeof validateTicketResponseSchema
>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/user-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

export const userUpdateSchema = z.object({
  phone: z
    .string()
    .regex(/^965\d{8}$/, { message: "رقم الهاتف يجب أن يبدأ بـ 965 ويتكون من 11 رقم" })
    .optional(),
  avatarUrl: z.string().url({ message: "رابط الصورة غير صالح" }).optional(),
});

export type UserUpdateInput = z.infer<typeof userUpdateSchema>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/admin-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

// ── User Management ──
export const changeUserRoleSchema = z.object({
  role: z.enum(["ATTENDEE", "ORGANIZER", "ADMIN"], {
    message: "الدور مطلوب",
  }),
});

export const toggleUserActiveSchema = z.object({
  isActive: z.boolean({
    message: "حالة التفعيل مطلوبة",
  }),
});

export type ChangeUserRoleInput = z.infer<typeof changeUserRoleSchema>;
export type ToggleUserActiveInput = z.infer<typeof toggleUserActiveSchema>;

// ── Category Management ──
export const createCategorySchema = z.object({
  nameAr: z
    .string({ message: "اسم التصنيف بالعربية مطلوب" })
    .min(2, { message: "اسم التصنيف بالعربية يجب أن يكون حرفين على الأقل" })
    .max(100, { message: "اسم التصنيف يجب أن يكون أقل من 100 حرف" }),
  nameEn: z
    .string({ message: "اسم التصنيف بالإنجليزية مطلوب" })
    .min(2, { message: "Category name must be at least 2 characters" })
    .max(100, { message: "Category name must be less than 100 characters" })
    .optional(),
  slug: z
    .string({ message: "الرابط المختصر مطلوب" })
    .min(2, { message: "الرابط المختصر يجب أن يكون حرفين على الأقل" })
    .max(100, { message: "الرابط المختصر يجب أن يكون أقل من 100 حرف" })
    .regex(
      /^[a-z0-9-]+$/,
      { message: "الرابط المختصر يجب أن يحتوي على أحرف إنجليزية صغيرة وأرقام وشرطات فقط" }
    ),
  iconUrl: z
    .string()
    .url({ message: "رابط الأيقونة غير صالح" })
    .optional()
    .or(z.literal("")),
  description: z.string().max(500, { message: "الوصف يجب أن يكون أقل من 500 حرف" }).optional(),
});

export const updateCategorySchema = createCategorySchema.partial().extend({
  nameAr: z.string().min(2, { message: "اسم التصنيف بالعربية يجب أن يكون حرفين على الأقل" }).max(100, { message: "اسم التصنيف يجب أن يكون أقل من 100 حرف" }).optional(),
  slug: z
    .string()
    .min(2, { message: "الرابط المختصر يجب أن يكون حرفين على الأقل" })
    .max(100, { message: "الرابط المختصر يجب أن يكون أقل من 100 حرف" })
    .regex(/^[a-z0-9-]+$/, { message: "الرابط المختصر يجب أن يحتوي على أحرف إنجليزية صغيرة وأرقام وشرطات فقط" })
    .optional(),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;

// ── Event Moderation ──
export const featureEventSchema = z.object({
  isFeatured: z.boolean({
    message: "حالة التمييز مطلوبة",
  }),
});

export const changeEventStatusSchema = z.object({
  status: z.enum(["DRAFT", "PUBLISHED", "CANCELLED", "SOLD_OUT", "COMPLETED"], {
    message: "حالة الفعالية مطلوبة",
  }),
});

export type FeatureEventInput = z.infer<typeof featureEventSchema>;
export type ChangeEventStatusInput = z.infer<typeof changeEventStatusSchema>;


// ═══════════════════════════════════════════════════════════════
// FILE: src/lib/validators/payment-schema.ts
// ═══════════════════════════════════════════════════════════════
import { z } from "zod";

export const initiatePaymentSchema = z.object({
  bookingId: z.string({ message: "يجب تحديد الحجز" }).min(1, { message: "يجب تحديد الحجز" }),
  method: z.enum(["KNET"], { message: "طريقة الدفع غير صالحة" }).default("KNET"),
});

export type InitiatePaymentInput = z.infer<typeof initiatePaymentSchema>;

export const refundPaymentSchema = z.object({
  reason: z.string({ message: "سبب الاسترداد مطلوب" }).min(3, { message: "يجب ذكر سبب الاسترداد" }).max(500, { message: "سبب الاسترداد يجب أن يكون أقل من 500 حرف" }),
});

export type RefundPaymentInput = z.infer<typeof refundPaymentSchema>;


// ██████████████████████████████████████████████████████████████
// ██  Section 18: OTHER PAGES
// ██████████████████████████████████████████████████████████████

// ═══════════════════════════════════════════════════════════════
// FILE: src/app/page.tsx
// ═══════════════════════════════════════════════════════════════
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/ar");
}


// ═══════════════════════════════════════════════════════════════
// FILE: src/app/not-found.tsx
// ═══════════════════════════════════════════════════════════════
import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
        <p className="text-xl mb-6 text-foreground">الصفحة غير موجودة / Page Not Found</p>
        <Link
          href="/"
          className="text-primary underline hover:text-primary/80 transition-colors"
        >
          الرئيسية / Home
        </Link>
      </div>
    </div>
  );
}


