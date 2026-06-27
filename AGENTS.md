# AGENTS.md — OneElementScroll Next.js Conversion

## Project Overview
Conversion of a Codrops "One Element Scroll" demo to Next.js 16 (App Router) with TypeScript, Tailwind CSS v4, GSAP 3, and Lenis smooth scrolling.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP 3.15 (ScrollTrigger + Flip plugins)
- **Smooth Scroll:** Lenis 1.3
- **Package Manager:** pnpm
- **Linting:** ESLint 9 + eslint-config-next
- **React Compiler:** babel-plugin-react-compiler

## Project Structure
```
src/
├── app/
│   ├── globals.css         # Tailwind imports + custom keyframes
│   ├── layout.tsx          # Root layout with fonts + metadata
│   └── page.tsx            # Main page composing all sections
├── components/
│   ├── Frame.tsx           # Fixed top navigation bar
│   ├── HeroSection.tsx     # Full-screen hero with .one element
│   ├── CenterSection.tsx   # "Seraph Kamos" title + portrait
│   ├── ColumnSection.tsx   # 5-column image layout
│   ├── LinesSection.tsx    # Inline images with text
│   ├── SidesSection.tsx    # Image + text side layout
│   ├── CenterTallSection.tsx # Tall centered content
│   ├── GridSection.tsx     # 3x3 image grid
│   ├── OutroSection.tsx    # Related demos cards
│   └── ScrollAnimations.tsx # All GSAP ScrollTrigger logic
└── lib/
    └── utils.ts            # preloadImages utility
```

## Key Architecture Decisions
- GSAP animation logic lives in a single `ScrollAnimations` client component to keep imperative DOM access isolated from React's declarative rendering.
- Section components are purely presentational — they render markup and accept props.
- The `.one` element and `[data-step]` elements use `data-*` attributes for GSAP selectors, matching the original approach.
- Images are served from `/public/img/` and referenced as background images via inline styles.

## Animation Flow
1. Page loads → images preload → loading class removed → ScrollAnimations mounts
2. ScrollAnimations sets up 6 scroll-driven effects:
   - Flip animation across 5 waypoints
   - Span text slide-in (alternating directions)
   - Image scale + filter reveal
   - Text parallax
   - Column image parallax (intensity-based)
   - Related demos stagger scale-in
3. On window resize, Flip animation states are recaptured

## Common Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint
- `pnpm start` — Start production server
