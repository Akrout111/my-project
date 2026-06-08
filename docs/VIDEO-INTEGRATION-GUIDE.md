# Video Integration: Comprehensive Technical Guide for Next.js 16 + Framer Motion

> **Production-ready patterns** for integrating video backgrounds, interactive effects, scroll-driven animations, and performance optimization in Next.js App Router with Framer Motion (now Motion).

---

## Table of Contents

1. [HTML5 Video Background Best Practices](#1-html5-video-background-best-practices)
2. [CSS Video Overlay Techniques](#2-css-video-overlay-techniques)
3. [Mouse-Tracking Interactive Video Effects](#3-mouse-tracking-interactive-video-effects)
4. [Scroll-Driven Video Effects](#4-scroll-driven-video-effects)
5. [Video Hover Effects on Cards](#5-video-hover-effects-on-cards)
6. [Loading/Transition Video Animations](#6-loadingtransition-video-animations)
7. [Performance Optimization](#7-performance-optimization)
8. [Mobile & Accessibility Considerations](#8-mobile--accessibility-considerations)
9. [Canvas-Based Video Effects](#9-canvas-based-video-effects)
10. [Framer Motion + Video Integration](#10-framer-motion--video-integration)
11. [Key Libraries & Resources](#11-key-libraries--resources)

---

## 1. HTML5 Video Background Best Practices

### Core Video Attributes

The `<video>` element requires specific attributes for autoplay background usage:

```tsx
<video
  autoPlay    // Start playing immediately
  loop        // Loop continuously
  muted       // REQUIRED for autoplay in all modern browsers
  playsInline // REQUIRED for iOS Safari inline playback
  preload="auto" // or "metadata" for lazy approach
  poster="/images/hero-poster.webp" // Fallback image while loading
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

**Critical rule**: `muted` is **mandatory** for autoplay. Chrome, Firefox, and Safari all block autoplay of unmuted video. `playsInline` prevents iOS from going fullscreen.

### Autoplay Policy Summary (2025)

| Browser      | Autoplay Muted | Autoplay Unmuted | Notes |
|-------------|---------------|-----------------|-------|
| Chrome 66+  | Always        | Never           | Media Engagement Index can override |
| Firefox 66+ | Always        | Never           | Block autoplay setting available |
| Safari 11+  | Always        | Never           | Power saving may pause off-screen |
| iOS Safari  | With playsInline | Never       | Low power mode blocks autoplay |

### Full Production VideoBackground Component

```tsx
"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface VideoBackgroundProps {
  webmSrc: string;
  mp4Src: string;
  poster?: string;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  preload?: "auto" | "metadata" | "none";
}

export function VideoBackground({
  webmSrc,
  mp4Src,
  poster,
  overlayOpacity = 0.4,
  className,
  children,
  preload = "auto",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleCanPlay = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => setHasError(true), []);

  // Attempt autoplay, fall back gracefully
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError || prefersReducedMotion) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented — show poster
        video.pause();
      });
    }
  }, [hasError, prefersReducedMotion]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Loading state — poster or shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-900 to-gray-800" />
      )}

      {/* Fallback: poster image on error or reduced motion */}
      {(hasError || prefersReducedMotion) && poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}

      {/* Video element */}
      {!hasError && !prefersReducedMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload={preload}
          poster={poster}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

### Poster Image Strategy

Always provide a poster image. It:
- Shows instantly before video loads (prevents layout shift)
- Acts as fallback on error/reduced motion
- Is the LCP candidate for Core Web Vitals

```bash
# Optimize poster with ffmpeg
ffmpeg -i hero-bg.mp4 -vframes 1 -q:v 2 -vf "scale=1280:-1" hero-poster.webp
```

### Preload Strategies

```tsx
// Hero/above-fold: preload="auto" — load immediately
<video preload="auto" ... />

// Below-fold: preload="metadata" — load only dimensions/duration
<video preload="metadata" ... />

// Far below-fold: preload="none" — load nothing until visible
// Then swap to "auto" via IntersectionObserver (see Section 7)
<video preload="none" ... />
```

---

## 2. CSS Video Overlay Techniques

### mix-blend-mode

`mix-blend-mode` determines how video pixels blend with underlying layers. This is the most powerful CSS technique for seamless video integration.

```css
/* Multiply: darkens — great for darkening video under text */
.video-overlay-multiply {
  mix-blend-mode: multiply;
}

/* Screen: lightens — great for light-on-dark effects */
.video-overlay-screen {
  mix-blend-mode: screen;
}

/* Overlay: contrast boost — most versatile for video */
.video-overlay-blend {
  mix-blend-mode: overlay;
}

/* Color-dodge: bright, neon effects */
.video-overlay-dodge {
  mix-blend-mode: color-dodge;
}
```

### Production Pattern: Gradient + mix-blend-mode

```tsx
function BlendedVideoHero() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Video layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay loop muted playsInline
      >
        <source src="/hero.webm" type="video/webm" />
      </video>

      {/* Gradient overlay with mix-blend-mode — blends INTO the video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #0a0a2e 0%, transparent 50%, #1a0a2e 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Text readability layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <div className="relative z-10">{/* Content */}</div>
    </div>
  );
}
```

### mask-image: Reveal Video Through Shapes

```tsx
function MaskedVideoReveal() {
  return (
    <div className="relative h-[80vh]">
      {/* Solid background */}
      <div className="absolute inset-0 bg-[oklch(0.12_0.04_260)]" />

      {/* Video revealed through a radial mask */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay loop muted playsInline
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Content */}
    </div>
  );
}
```

### Animated mask-image with Framer Motion

```tsx
function AnimatedMaskVideo() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 600, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maskSize = 20 + scrollProgress * 80; // 20% -> 100%

  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay loop muted playsInline
      style={{
        maskImage: `radial-gradient(circle ${maskSize}% at 50% 50%, black 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle ${maskSize}% at 50% 50%, black 0%, transparent 100%)`,
        transition: "mask-image 0.1s linear",
      }}
    />
  );
}
```

### Text Knockout Effect with mask-image

```tsx
function VideoTextKnockout() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/hero.webm" type="video/webm" />
      </video>

      <h1
        className="relative z-10 text-[15vw] font-black leading-none text-center"
        style={{
          color: "transparent",
          WebkitTextFillColor: "transparent",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        EVENTS
      </h1>
    </div>
  );
}
```

---

## 3. Mouse-Tracking Interactive Video Effects

### 3A. Parallax + 3D Tilt + Light Spot (Production Component)

This is the pattern already implemented in the project's `ParallaxVideo` component. Here's the enhanced version with all best practices:

```tsx
"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface InteractiveVideoProps {
  src: string;
  poster?: string;
  overlayOpacity?: number;
  /** Parallax speed multiplier (0-0.15 recommended) */
  speed?: number;
  tiltEffect?: boolean;
  lightEffect?: boolean;
  scrollParallax?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function InteractiveVideo({
  src,
  poster,
  overlayOpacity = 0.4,
  speed = 0.05,
  tiltEffect = true,
  lightEffect = true,
  scrollParallax = true,
  className,
  children,
}: InteractiveVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Motion Values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 120, damping: 30, mass: 0.5 };
  const rawOffsetX = useMotionValue(0);
  const rawOffsetY = useMotionValue(0);
  const offsetX = useSpring(rawOffsetX, springConfig);
  const offsetY = useSpring(rawOffsetY, springConfig);

  // 3D tilt (+-4 degrees)
  const tiltX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), springConfig);

  // Light spot
  const lightX = useSpring(useTransform(mouseX, [0, 1], [20, 80]), {
    stiffness: 80,
    damping: 25,
  });
  const lightY = useSpring(useTransform(mouseY, [0, 1], [20, 80]), {
    stiffness: 80,
    damping: 25,
  });

  const lightGradient = useTransform(
    [lightX, lightY] as [typeof lightX, typeof lightY],
    ([lx, ly]: number[]) =>
      `radial-gradient(ellipse 600px 400px at ${lx}% ${ly}%, oklch(0.76 0.13 85 / 6%), transparent 70%)`
  );

  // Scroll parallax
  const scrollYMotion = useMotionValue(0);
  const scrollOffset = useTransform(scrollYMotion, [0, 2000], [0, -60]);

  // Combined transform
  const videoTransform = useTransform(
    [offsetX, offsetY, scrollOffset, tiltX, tiltY] as [
      typeof offsetX, typeof offsetY, typeof scrollOffset, typeof tiltX, typeof tiltY
    ],
    ([ox, oy, so, tx, ty]: number[]) => {
      const scrollPart = scrollParallax ? `translateY(${so}px)` : "";
      const tiltPart = tiltEffect ? `rotateX(${tx}deg) rotateY(${ty}deg)` : "";
      return `translateX(${ox}px) translateY(${oy}px) ${scrollPart} scale(1.15) ${tiltPart}`;
    }
  );

  useEffect(() => {
    if (!scrollParallax) return;
    const handleScroll = () => scrollYMotion.set(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollParallax, scrollYMotion]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      mouseX.set(nx);
      mouseY.set(ny);
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      rawOffsetX.set((e.clientX - centerX) * speed);
      rawOffsetY.set((e.clientY - centerY) * speed);
    },
    [speed, mouseX, mouseY, rawOffsetX, rawOffsetY]
  );

  const handleMouseLeave = useCallback(() => {
    rawOffsetX.set(0);
    rawOffsetY.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [rawOffsetX, rawOffsetY, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltEffect ? { perspective: "1200px" } : undefined}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-900 to-gray-800" />
      )}

      {hasError ? (
        poster ? (
          <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        )
      ) : (
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: videoTransform,
            ...(tiltEffect ? { transformStyle: "preserve-3d" } : {}),
          }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onError={() => setHasError(true)}
            onCanPlay={() => setIsLoaded(true)}
            poster={poster}
          >
            <source src={src} />
          </video>
        </motion.div>
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Interactive light spot */}
      {lightEffect && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: lightGradient }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

**Key implementation notes**:
- `useSpring` smooths all motion values, prevents jitter
- `will-change-transform` on the video wrapper for GPU compositing
- `scale(1.15)` prevents edge gaps during parallax movement
- `perspective: 1200px` on the parent enables 3D tilt
- Spring config `{ stiffness: 120, damping: 30, mass: 0.5 }` gives responsive but smooth feel

### 3B. Touch Support for Mobile

```tsx
// Add touch event handlers alongside mouse events
const handleTouchMove = useCallback(
  (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (touch.clientX - rect.left) / rect.width;
    const ny = (touch.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, nx)));
    mouseY.set(Math.max(0, Math.min(1, ny)));
    // Reduce parallax intensity on touch (fingers are less precise)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rawOffsetX.set((touch.clientX - centerX) * speed * 0.5);
    rawOffsetY.set((touch.clientY - centerY) * speed * 0.5);
  },
  [speed, mouseX, mouseY, rawOffsetX, rawOffsetY]
);

// In JSX:
<div
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleMouseLeave}
>
```

---

## 4. Scroll-Driven Video Effects

### 4A. Video Playback Synced to Scroll Position

This technique maps scroll position to `video.currentTime` for cinematic scroll experiences (like Apple product pages).

```tsx
"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollVideoProps {
  src: string;
  className?: string;
}

export function ScrollVideo({ src, className }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  useEffect(() => {
    if (!duration) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Calculate scroll progress (0 to 1) as container moves through viewport
      const scrollStart = containerTop - viewportHeight;
      const scrollEnd = containerTop + containerHeight;
      const scrollRange = scrollEnd - scrollStart;
      const currentScroll = -scrollStart;
      const progress = Math.max(0, Math.min(1, currentScroll / scrollRange));

      // Map progress to video time
      video.currentTime = progress * duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, [duration]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className ?? ""}`}
      style={{ height: "300vh" }} // Tall container for scroll room
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          style={{ pointerEvents: "none" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
```

**Critical performance tip**: Pre-encode the video with intra-frame only (all keyframes) for smooth seeking:

```bash
# Re-encode with all keyframes for smooth seeking
ffmpeg -i input.mp4 -g 1 -keyint_min 1 -c:v libx264 -crf 23 -an output-scroll.mp4
```

Without this, seeking between keyframes causes stuttering.

### 4B. CSS Scroll-Driven Animations (Modern API)

The CSS Scroll-Driven Animations API (Chrome 115+, Edge 115+) enables declarative scroll-linked animations without JavaScript:

```css
/* WAAPI + Scroll Timeline — no JS needed */
@keyframes video-reveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
}

.scroll-video-reveal {
  animation: video-reveal linear both;
  animation-timeline: scroll();
  animation-range: entry 0% entry 100%;
}
```

```tsx
// React wrapper with progressive enhancement
function CSSScrollVideoReveal() {
  return (
    <div className="h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <video
          className="scroll-video-reveal max-w-4xl rounded-2xl"
          autoPlay loop muted playsInline
        >
          <source src="/reveal.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
```

### 4C. GSAP ScrollTrigger for Video (Advanced)

For production sites needing precise scroll-video sync with buttery smoothness:

```tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPScrollVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const onLoaded = () => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Smooth delay
        onUpdate: (self) => {
          video.currentTime = self.progress * video.duration;
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video ref={videoRef} className="w-full h-full object-cover" muted playsInline preload="auto">
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
```

### 4D. Video Playback Speed Synced to Scroll Velocity

```tsx
function VelocityVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.5; // Default slow rate

    const handleScroll = () => {
      const now = Date.now();
      const deltaY = Math.abs(window.scrollY - lastScrollY.current);
      const deltaTime = now - lastTime.current;
      const velocity = deltaY / deltaTime; // px/ms

      // Map velocity to playback rate (0.5 -> 3.0)
      const rate = Math.min(3, Math.max(0.5, velocity * 2));
      video.playbackRate = rate;

      lastScrollY.current = window.scrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
      <source src={src} type="video/mp4" />
    </video>
  );
}
```

---

## 5. Video Hover Effects on Cards

### 5A. Disney+/Netflix Style Video Hover Card

```tsx
"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoSrc: string;
  description?: string;
}

export function VideoCard({ title, thumbnail, videoSrc, description }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Delay video play to avoid accidental triggers
  const handleMouseEnter = useCallback(() => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 300); // 300ms delay before playing
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHovered(false);
  }, []);

  // Play/pause based on hover state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideoReady) return;

    if (isHovered) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isHovered, isVideoReady]);

  return (
    <motion.div
      className="relative group cursor-pointer rounded-xl overflow-hidden bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Thumbnail (always rendered as fallback) */}
      <motion.img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover"
        animate={{ opacity: isHovered && isVideoReady ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Video (plays on hover) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlayThrough={() => setIsVideoReady(true)}
        style={{ opacity: isHovered && isVideoReady ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Info overlay */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        {description && (
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-white/60 text-xs mt-1"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
```

### 5B. Grid of Video Cards with IntersectionObserver

Only load video sources when cards are near the viewport:

```tsx
function LazyVideoCard({ videoSrc, thumbnail, title }: VideoCardProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect(); // Only load once
        }
      },
      { rootMargin: "200px" } // Start loading 200px before visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef}>
      {shouldLoadVideo ? (
        <VideoCard videoSrc={videoSrc} thumbnail={thumbnail} title={title} />
      ) : (
        // Placeholder with thumbnail only
        <div className="rounded-xl overflow-hidden bg-gray-900">
          <img src={thumbnail} alt={title} className="w-full aspect-video object-cover" />
        </div>
      )}
    </div>
  );
}
```

### 5C. Touch-Friendly Hover Alternative

For mobile, use tap-to-preview instead of hover:

```tsx
// On mobile, tap toggles video playback
const handleTap = useCallback(() => {
  if (isHovered) {
    setIsHovered(false);
  } else {
    setIsHovered(true);
    // Auto-dismiss after 3 seconds
    setTimeout(() => setIsHovered(false), 3000);
  }
}, [isHovered]);

// In JSX, add:
<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={handleTap}
  role="button"
  tabIndex={0}
  aria-label={`${isHovered ? 'Stop' : 'Play'} preview of ${title}`}
/>
```

---

## 6. Loading/Transition Video Animations

### 6A. Video Page Loader

```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface VideoLoaderProps {
  videoSrc: string;
  isLoading: boolean;
}

export function VideoLoader({ videoSrc, isLoading }: VideoLoaderProps) {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowVideo(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {showVideo && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <source src={videoSrc} type="video/mp4" />
          </motion.video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### 6B. Section Transition with Video Wipe

```tsx
function VideoWipeTransition({ src, trigger }: { src: string; trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <video autoPlay muted playsInline className="w-full h-full object-cover">
            <source src={src} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### 6C. Next.js App Router Page Transition with Video

```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function VideoPageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Video curtain wipe on enter */}
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transformOrigin: "left" }}
        >
          <video
            autoPlay muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/transitions/wipe.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 7. Performance Optimization

### 7A. IntersectionObserver: Play/Pause When Visible

The single most impactful optimization — only play video when it's actually visible:

```tsx
"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  threshold?: number; // 0-1, how much must be visible
  rootMargin?: string; // Buffer zone
}

export function LazyVideo({
  src,
  poster,
  className,
  threshold = 0.25,
  rootMargin = "100px",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // Start loading when near viewport
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, shouldLoad]);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/webm" />
          <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
        </video>
      ) : (
        poster && (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )
      )}
    </div>
  );
}
```

### 7B. Video Format Strategy

| Format | Codec | Size | Browser Support | Use Case |
|--------|-------|------|----------------|----------|
| WebM | VP9 | ~30-50% smaller than H.264 | Chrome, Firefox, Edge, Android | Primary source |
| MP4 | H.264 | Baseline compatibility | ALL browsers | Fallback source |
| WebM | AV1 | ~50-70% smaller than H.264 | Chrome 70+, Firefox 80+ | Optional premium source |
| MP4 | HEVC/H.265 | ~40% smaller than H.264 | Safari, iOS | Optional Apple source |

**Optimal `<source>` ordering** (browser picks first supported):

```html
<video>
  <!-- AV1 first (smallest, newest) -->
  <source src="hero.av1.webm" type="video/webm; codecs=av01.0.05M.08" />
  <!-- VP9 second (good compression, wide support) -->
  <source src="hero.vp9.webm" type="video/webm; codecs=vp9" />
  <!-- H.264 last (universal fallback) -->
  <source src="hero.h264.mp4" type="video/mp4; codecs=avc1.64001F" />
</video>
```

### 7C. FFmpeg Encoding Recipes

```bash
# VP9 WebM — best quality/size ratio for web
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 \
  -an -movflags +faststart output.webm

# H.264 MP4 — universal fallback
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow \
  -an -movflags +faststart -pix_fmt yuv420p output.mp4

# AV1 WebM — next-gen, smallest files
ffmpeg -i input.mp4 -c:v libaom-av1 -crf 32 -b:v 0 \
  -an -cpu-used 4 output.av1.webm

# Resize for background (1080p is enough, 4K wastes bandwidth)
ffmpeg -i input.mp4 -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 30 output.webm

# Strip audio for background videos
ffmpeg -i input.mp4 -an -c:v copy output-no-audio.mp4

# Fast-start flag (moov atom at beginning for streaming)
# Already included above: -movflags +faststart

# All-keyframes encoding for scroll-synced video
ffmpeg -i input.mp4 -g 1 -keyint_min 1 -c:v libx264 -crf 23 -an scroll-video.mp4
```

### 7D. Layout Shift Prevention (CLS)

```tsx
// Always set explicit dimensions on the video container
function CLSSafeVideo() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay loop muted playsInline
        width={1920}
        height={1080}
        poster="/poster.webp"
      >
        <source src="/hero.webm" type="video/webm" />
      </video>
    </div>
  );
}
```

### 7E. Connection-Aware Video Loading

```tsx
function useConnectionSpeed() {
  const [effectiveType, setEffectiveType] = useState("4g");

  useEffect(() => {
    const nav = navigator as any; // NetworkInformation not in types
    if (nav.connection) {
      setEffectiveType(nav.connection.effectiveType);
      const handler = () => setEffectiveType(nav.connection.effectiveType);
      nav.connection.addEventListener("change", handler);
      return () => nav.connection.removeEventListener("change", handler);
    }
  }, []);

  return effectiveType; // "slow-2g" | "2g" | "3g" | "4g"
}

// Usage: skip video on slow connections
function AdaptiveVideo() {
  const connection = useConnectionSpeed();
  const showVideo = connection === "4g" || connection === "3g";

  return showVideo ? (
    <video autoPlay loop muted playsInline>
      <source src="/hero.webm" type="video/webm" />
    </video>
  ) : (
    <img src="/hero-poster.webp" alt="" className="w-full h-full object-cover" />
  );
}
```

### 7F. Data Saver Mode

```tsx
function useDataSaver() {
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    const nav = navigator as any;
    if (nav.connection?.saveData) {
      setSaveData(true);
    }
  }, []);

  return saveData;
}
```

---

## 8. Mobile & Accessibility Considerations

### 8A. prefers-reduced-motion (Critical)

**The most important accessibility consideration for video backgrounds.**

From web.dev and Josh Comeau's guide:

> "Animations should be an enhancement, not critical to a user's understanding."

#### CSS Approach

```css
/* Respect reduced motion globally */
@media (prefers-reduced-motion: reduce) {
  video[autoplay] {
    display: none;
  }

  /* Or pause the video instead of hiding */
  video {
    animation: none !important;
    transition: none !important;
  }
}
```

#### React Hook (from Framer Motion / Motion.dev)

```tsx
import { useReducedMotion } from "framer-motion";

function AccessibleVideoBackground() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <img src="/poster.webp" alt="" className="w-full h-full object-cover" />;
  }

  return (
    <video autoPlay loop muted playsInline poster="/poster.webp">
      <source src="/hero.webm" type="video/webm" />
    </video>
  );
}
```

#### Custom Hook (without Framer Motion dependency)

```tsx
function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
```

#### No-Motion-First Approach (Best Practice)

Design the static poster image to be the primary experience, with video as progressive enhancement:

```tsx
function NoMotionFirstVideo({ src, poster }: { src: string; poster: string }) {
  const prefersReduced = usePrefersReducedMotion();
  const connection = useConnectionSpeed();
  const dataSaver = useDataSaver();

  const showVideo = !prefersReduced && !dataSaver && (connection === "4g" || connection === "3g");

  return (
    <div className="relative overflow-hidden">
      {/* Poster is always rendered as base layer */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Video overlays poster when conditions are met */}
      {showVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source src={src} type="video/webm" />
        </video>
      )}
    </div>
  );
}
```

### 8B. iOS-Specific Considerations

```tsx
// iOS Low Power Mode blocks autoplay
// Handle gracefully with play() promise
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const attemptPlay = async () => {
    try {
      await video.play();
    } catch {
      // iOS Low Power Mode or user hasn't interacted yet
      // Show play button overlay
      setShowPlayButton(true);
    }
  };

  attemptPlay();
}, []);
```

### 8C. WCAG Compliance Checklist

- [ ] Video backgrounds must not auto-play with audio (WCAG 1.4.2)
- [ ] Provide pause/stop/hide mechanism for moving content (WCAG 2.2.2)
- [ ] Respect `prefers-reduced-motion` (WCAG 2.3.3)
- [ ] Text over video must meet contrast ratio 4.5:1 (WCAG 1.4.3)
- [ ] Don't convey information solely through video animation (WCAG 1.1.1)
- [ ] Add `aria-hidden="true"` to decorative video elements

---

## 9. Canvas-Based Video Effects

### 9A. Real-Time Video Filter Pipeline

```tsx
"use client";

import { useRef, useEffect, useCallback } from "react";

interface CanvasVideoProps {
  src: string;
  filter?: "grayscale" | "sepia" | "invert" | "glitch" | "duotone" | "none";
  intensity?: number; // 0-1
}

export function CanvasVideo({
  src,
  filter = "none",
  intensity = 1,
}: CanvasVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const renderFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.paused || video.ended) {
      animationRef.current = requestAnimationFrame(renderFrame);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw video frame to canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Apply filter
    if (filter !== "none" && intensity > 0) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      switch (filter) {
        case "grayscale":
          for (let i = 0; i < data.length; i += 4) {
            const avg = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
            data[i] = data[i] + (avg - data[i]) * intensity;
            data[i + 1] = data[i + 1] + (avg - data[i + 1]) * intensity;
            data[i + 2] = data[i + 2] + (avg - data[i + 2]) * intensity;
          }
          break;

        case "sepia":
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2];
            const sr = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
            const sg = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
            const sb = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
            data[i] = r + (sr - r) * intensity;
            data[i + 1] = g + (sg - g) * intensity;
            data[i + 2] = b + (sb - b) * intensity;
          }
          break;

        case "invert":
          for (let i = 0; i < data.length; i += 4) {
            data[i] = data[i] + (255 - 2 * data[i]) * intensity;
            data[i + 1] = data[i + 1] + (255 - 2 * data[i + 1]) * intensity;
            data[i + 2] = data[i + 2] + (255 - 2 * data[i + 2]) * intensity;
          }
          break;

        case "duotone":
          // Dark color: deep navy, Light color: gold
          const dark = [10, 10, 46];
          const light = [201, 168, 76];
          for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            const t = avg / 255;
            const dr = dark[0] + (light[0] - dark[0]) * t;
            const dg = dark[1] + (light[1] - dark[1]) * t;
            const db = dark[2] + (light[2] - dark[2]) * t;
            data[i] = data[i] + (dr - data[i]) * intensity;
            data[i + 1] = data[i + 1] + (dg - data[i + 1]) * intensity;
            data[i + 2] = data[i + 2] + (db - data[i + 2]) * intensity;
          }
          break;

        case "glitch":
          // RGB channel shift
          const shift = Math.floor(intensity * 8);
          const tempData = new Uint8ClampedArray(data);
          for (let i = 0; i < data.length; i += 4) {
            const redIdx = Math.min(data.length - 4, i + shift * 4);
            data[i] = tempData[redIdx];
            const blueIdx = Math.max(0, i - shift * 4);
            data[i + 2] = tempData[blueIdx + 2];
          }
          break;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    animationRef.current = requestAnimationFrame(renderFrame);
  }, [filter, intensity]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(animationRef.current);
  }, [renderFrame]);

  return (
    <div className="relative">
      {/* Hidden video source */}
      <video
        ref={videoRef}
        className="sr-only"
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Visible canvas output */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
```

### 9B. WebGL Video Effects with vfx.js

[vfx-js](https://github.com/nickyline/vfx.js) (from Codrops) provides a high-level API for WebGL effects on any DOM element including video:

```bash
npm install @nicolo-ribaudo/vfx-js
```

```tsx
import { VFX } from "@nicolo-ribaudo/vfx-js";

function WebGLVideo() {
  const vfxRef = useRef<VFX | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    vfxRef.current = new VFX();
    vfxRef.current.add(videoRef.current, {
      shader: "glitch",
      overflow: 50,
    });

    return () => vfxRef.current?.destroy();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay loop muted playsInline
      className="w-full h-full object-cover"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
```

### 9C. CSS filter() on Video (Simple Alternative)

For basic effects without canvas overhead:

```tsx
function CSSFilteredVideo() {
  return (
    <div className="relative overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay loop muted playsInline
        style={{
          filter: "brightness(0.7) contrast(1.1) saturate(0.8)",
        }}
      >
        <source src="/hero.webm" type="video/webm" />
      </video>
    </div>
  );
}
```

Available CSS filters: `brightness()`, `contrast()`, `saturate()`, `blur()`, `grayscale()`, `sepia()`, `hue-rotate()`, `invert()`, `drop-shadow()`.

---

## 10. Framer Motion + Video Integration

### 10A. Motion.dev (Framer Motion v12+) Scroll-Linked Video

The modern Motion library provides `useScroll` and `useTransform` for declarative scroll-linked video:

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function MotionScrollVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to video opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity, scale, y }}
          className="max-w-5xl w-full rounded-2xl"
        >
          <source src={src} type="video/mp4" />
        </motion.video>
      </div>
    </motion.div>
  );
}
```

### 10B. AnimatePresence with Video Page Transitions

```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
  exit: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function AnimatedRoutes({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### 10C. Video Container Animation (Keep Playback Smooth)

**Critical**: When animating the video container with Framer Motion, always animate the **wrapper div**, not the `<video>` element directly. Animating the video element causes frame drops.

```tsx
// BAD: Animating the video element directly
<motion.video animate={{ scale: 1.5 }} ...>

// GOOD: Animating the wrapper, video stays stable inside
<motion.div animate={{ scale: 1.5 }}>
  <video ... />
</motion.div>
```

### 10D. Motion + Video Reveal on Scroll

```tsx
function VideoRevealOnScroll({ src, poster }: { src: string; poster: string }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
      initial={{ clipPath: "inset(10% 10% 10% 10% round 20px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <video autoPlay loop muted playsInline poster={poster}>
        <source src={src} type="video/webm" />
      </video>
    </motion.div>
  );
}
```

### 10E. useReducedMotion with Motion Animations

```tsx
import { motion, useReducedMotion } from "framer-motion";

function AccessibleMotionVideo({ src }: { src: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <video autoPlay={!shouldReduceMotion} loop muted playsInline>
        <source src={src} type="video/webm" />
      </video>
    </motion.div>
  );
}
```

---

## 11. Key Libraries & Resources

### Recommended Libraries

| Library | Stars | Purpose | Link |
|---------|-------|---------|------|
| `@mux/next-video` | ~700+ | Best-in-class video for Next.js (background, player, upload) | [github.com/muxinc/next-video](https://github.com/muxinc/next-video) |
| `react-hover-video-player` | ~300+ | Video playback on hover with loading/sizing states | [github.com/Gyanreyer/react-hover-video-player](https://github.com/Gyanreyer/react-hover-video-player) |
| `vfx-js` | ~1.5k+ | WebGL visual effects on any DOM element (including video) | [github.com/nicolo-ribaudo/vfx-js](https://github.com/nicolo-ribaudo/vfx-js) |
| `gsap` + `ScrollTrigger` | ~20k+ | Production scroll-linked video playback | [gsap.com](https://gsap.com) |
| `motion` (framer-motion) | ~26k+ | React animation primitives, `useReducedMotion`, `useScroll` | [motion.dev](https://motion.dev) |
| `glitchGL` | ~50+ | Universal WebGL glitch effects for any DOM element | [github.com/naughtyduk/glitchGL](https://github.com/naughtyduk/glitchGL) |

### Award-Winning Video Background Sites (Awwwards)

Browse [awwwards.com/websites/video](https://www.awwwards.com/websites/video) for inspiration. Notable patterns:
- **Apple product pages**: Scroll-driven video frame-by-frame playback
- **Aristide Benoist portfolio**: Video with mix-blend-mode multiply for seamless text integration
- **Locomotive.ca**: Canvas-based distortion effects on video
- **Active-Theory**: WebGL video manipulation with custom shaders

### Key Documentation

- **Next.js Videos Guide**: [nextjs.org/docs/app/guides/videos](https://nextjs.org/docs/app/guides/videos)
- **web.dev Lazy Loading Video**: [web.dev/articles/lazy-loading-video](https://web.dev/articles/lazy-loading-video)
- **web.dev Video Performance**: [web.dev/learn/performance/video-performance](https://web.dev/learn/performance/video-performance)
- **web.dev prefers-reduced-motion**: [web.dev/articles/prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion)
- **MDN Canvas Video Manipulation**: [developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- **Motion.dev Scroll Animations**: [motion.dev/docs/react-scroll-animations](https://motion.dev/docs/react-scroll-animations)
- **CSS Scroll-Driven Animations**: [scroll-driven-animations.style](https://scroll-driven-animations.style)
- **Josh Comeau's prefers-reduced-motion**: [joshwcomeau.com/react/prefers-reduced-motion](https://www.joshwcomeau.com/react/prefers-reduced-motion)
- **web.dev CSS Blend Modes**: [web.dev/learn/css/blend-modes](https://web.dev/learn/css/blend-modes)
- **Sara Soueidan Compositing & Blending**: [sarasoueidan.com/blog/compositing-and-blending-in-css](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css)
- **ImageKit Next.js Video Background**: [imagekit.io/blog/nextjs-video-background](https://imagekit.io/blog/nextjs-video-background)
- **Cinematic Scroll-Driven Video in React**: [medium.com/@maskanati](https://medium.com/@maskanati/cinematic-scroll-driven-video-experiences-in-react-fe33f7749b26)

### Performance Benchmarks (web.dev Guidelines)

| Metric | Target | How to Achieve |
|--------|--------|---------------|
| Video file size (hero) | < 2MB (VP9) | `ffmpeg -crf 30 -an`, 1080p max |
| Video file size (card) | < 500KB | Short clips (3-5s), lower resolution |
| LCP (with video bg) | < 2.5s | Poster image as LCP candidate |
| CLS (video) | < 0.1 | `aspect-ratio` on container, poster image |
| First frame display | < 1s | `preload="auto"`, `poster`, `faststart` |
| CPU usage (idle video) | < 5% | Pause off-screen, reduce resolution |

---

## Quick Reference: Decision Tree

```
Need video on your page?
|
+-- Is it a hero/background?
|   +-- Yes -> Use VideoBackground component (Section 1)
|   |       +-- Add poster image (always!)
|   |       +-- Add prefers-reduced-motion check (Section 8)
|   |       +-- Add IntersectionObserver play/pause (Section 7)
|   |       +-- Add mix-blend-mode overlay (Section 2)
|   |       +-- Add mouse-tracking parallax if premium (Section 3)
|   |
|   +-- Is it a card/grid?
|       +-- Use VideoCard hover component (Section 5)
|           +-- Lazy-load video source (Section 7)
|           +-- 300ms hover delay before playing
|           +-- Touch alternative for mobile (Section 5C)
|
+-- Need scroll-driven video?
|   +-- Frame-by-frame sync -> ScrollVideo component (Section 4A)
|   |                        +-- Encode with all-keyframes!
|   +-- Simple reveal -> Framer Motion clipPath (Section 10D)
|   +-- Complex timeline -> GSAP ScrollTrigger (Section 4C)
|
+-- Need video effects?
|   +-- Basic (grayscale, blur, etc.) -> CSS filter (Section 9C)
|   +-- Advanced (glitch, duotone) -> Canvas 2D (Section 9A)
|   +-- Premium (distortion, shaders) -> vfx.js / WebGL (Section 9B)
|
+-- Need page transitions?
    +-- Simple fade -> Framer Motion AnimatePresence (Section 10B)
    +-- Video wipe -> VideoWipeTransition (Section 6B)
    +-- Cinematic -> Video page loader (Section 6A)
```

---

*Last updated: March 2026 — Research from web.dev, MDN, Next.js docs, Awwwards, GitHub, and production implementation experience.*
