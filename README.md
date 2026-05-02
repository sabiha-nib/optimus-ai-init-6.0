# Perfect Merge

A user experience showcase featuring three distinct visual experiences built with React, Vite, and Tailwind CSS.

---

## Overview

This project is a collection of experimental UI designs exploring modern web interactions, scroll-driven animations, and immersive visual storytelling. Each page demonstrates different approaches to user experience design.

---

## Pages

### Home (Agentic)
A minimalist, cream-toned landing experience featuring:
- **Cinematic intro animation** with text reveal and fade-in sequencing
- **Bento grid layout** with hover-reactive glow effects
- **Live counter animations** that animate on scroll into view
- **Agent interface demo** with simulated terminal-style interactions
- **Stacking card animations** triggered by scroll position
- **Smooth reveal text** that fades in word-by-word as you scroll

### Deep Dive (PetalSphere)
A nature-inspired, editorial-style page with:
- **Full-bleed hero sections** with parallax imagery
- **Chapter-based navigation** with scientific article formatting
- **AI thinking visualization** with animated processing states
- **Observation cards** with hover lift effects
- **Ecological data displays** with animated metrics
- **Testimonial carousels** with smooth transitions

### Atlas
A dark, cinematic long-form reading experience featuring:
- **Scroll-scrubbed video playback** - videos play forward/backward based on scroll position
- **Reading progress indicator** - thin progress bar at the top of the viewport
- **Pull quotes and margin notes** - editorial typography components
- **Chapter headings** with decorative dividers
- **Stacking research cards** that layer as you scroll
- **Parallax video sections** with pinned playback

---

## UI Features

### Animations
- Intersection Observer-based reveal animations
- Scroll-driven video scrubbing with frame-accurate seeking
- Counter animations with easing
- Staggered fade-in sequences
- Hover glow effects with mouse position tracking

### Typography
- Display fonts for headlines with tight tracking
- Monospace accents for labels and metadata
- Balanced line heights for long-form reading
- Pull quotes with decorative borders

### Layout
- Responsive bento grids
- Full-bleed hero sections
- Sticky navigation with backdrop blur
- Max-width containers for readability

### Interactions
- Smooth scroll-to-top on page navigation
- Eager image loading for instant display
- Debounced scroll handlers for performance
- Touch-friendly mobile navigation

---

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Three.js / React Three Fiber** - 3D graphics (where applicable)
- **GSAP** - Advanced scroll animations
- **Tanstack Query** - Data fetching and caching

---

## Project Structure

```
src/
├── aiweb/           # Home page (Agentic) components
├── petalsphere/     # Deep Dive page components
├── atlas/           # Atlas page components
├── components/      # Shared UI components
├── pages/           # Route entry points
└── lib/             # Utilities
```

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

---

## Notes

This project is a design exploration and user experience showcase. It demonstrates various UI patterns, animation techniques, and visual design approaches without any commercial functionality.
