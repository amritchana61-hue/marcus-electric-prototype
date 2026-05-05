# Marcus Electric — Motion & Glow Pass

Add a disciplined motion system to the prototype. No new libraries — pure CSS keyframes + a tiny IntersectionObserver hook. Everything respects `prefers-reduced-motion`.

---

## Motion tiers

### Tier 1 — Ambient (always on, very subtle)

- Header live-status dot + hero "ESA Licensed" badge dot: amber pulse, 2.4s loop (extend existing `pulse-soft`)
- Emergency banner: red dot pulse + faint red glow breathing (low opacity, 2.4s)
- Phone CTA: every ~6s, a one-shot ring-ripple around the phone icon (signals "tap me")
- Hero background image: slow ken-burns, scale 1.0 → 1.04, 20s loop

### Tier 2 — Scroll reveals (one-shot on enter viewport)

- Section headings: fade + 16px rise, 500ms
- Cards (services, portfolio, testimonials): fade + 20px rise, 80ms stagger
- Trust strip icons: fade + scale 0.9→1, left-to-right 80ms stagger
- "Meet Marcus" stats: count-up animation (e.g. 0 → 12 years, 0 → 500+ jobs)

### Tier 3 — Hover / interaction (snappy, 150–250ms)

- Primary button: glow intensifies + 1px lift + arrow icon translates 4px right
- Phone button: phone icon does a quick 8° wiggle once on hover
- Service cards: border → amber, 4px lift, top-right arrow rotates 45° + slides, icon tile gains faint amber inner glow
- Portfolio cards: image zoom (existing) + dark gradient fades in + "View project →" slides up + chip's amber dot pulses
- Nav links: animated underline (left-to-right wipe)
- Testimonial dots: active dot expands circle → pill (8px → 24px wide)
- Footer icons: scale 1.1 + amber tint
- Header on scroll: transparent → `surface-1/80` + backdrop-blur, height shrinks 72→60px, bottom border fades in

---

## Glow moments (only 4)

1. Primary CTA on hover (already shipped)
2. Emergency banner red glow breathing
3. Service card icon tile on hover (faint amber, 12px blur)
4. Active testimonial card edge (1px amber border + 16px outer glow)

No glow on: portfolio cards, headings, trust strip, nav, footer, secondary buttons.

---

## Build steps

1. **Tokens & keyframes** — extend `tailwind.config.ts` with `fade-up`, `fade-in`, `scale-in`, `pulse-ring`, `wiggle`, `ken-burns`, `pulse-glow`. Add matching animation utilities. Add a `motion-safe:` discipline so reduced-motion users get zero ambient/reveal motion.
2. **Hooks & primitives**
  - `src/hooks/use-in-view.ts` — IntersectionObserver, ~20 lines
  - `src/components/Reveal.tsx` — wrapper that toggles `opacity-0 translate-y-4` → animated state on enter, accepts `delay` prop
  - `src/components/CountUp.tsx` — animates a number from 0 to target when in view
3. **Button** — extend variants in `src/components/ui/button.tsx`:
  - default: add `[&_svg:last-child]:transition-transform hover:[&_svg:last-child]:translate-x-1`
  - new `phone` variant or modifier: phone icon wiggle on hover via group + keyframe
4. **Header** (`Header.tsx`) — `useEffect` scroll listener, toggles classes for blur/border/shrink past 24px. Animated underline on nav links.
5. **Hero** (`Hero.tsx`) — add `animate-ken-burns` to img, keep `fade-up` on text, add ring-ripple span around phone icon in CTA.
6. **TrustStrip** — wrap each item in `<Reveal delay={i * 80} />`, add scale-in to icons.
7. **Services** — wrap cards in `<Reveal>`, stagger; add inner amber glow to icon tile on `group-hover`; arrow rotates 45° + translates.
8. **Portfolio** — add gradient overlay div + "View project →" label that translates from `translate-y-4 opacity-0` to visible on `group-hover`; chip dot gets `animate-pulse-soft` on hover.
9. **About** — replace static stat numbers with `<CountUp end={12} />` etc., wrapped in Reveal so count starts when scrolled to.
10. **Emergency** — wrap red dot in pulse-ring; add `animate-pulse-glow` to banner background (very low opacity red breathing).
11. **Testimonials** — auto-advance every 6s (pausable on hover); active dot animates width; active card gets amber edge glow.
12. **Footer** — icons get `transition-transform hover:scale-110 hover:text-primary`.
13. **Reduced motion** — global CSS rule: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }` — kills ambient loops, keeps interactions instant.

---

## Files touched

```text
tailwind.config.ts                    extend keyframes + animations
src/index.css                         reduced-motion rule, glow utility
src/hooks/use-in-view.ts              NEW
src/components/Reveal.tsx             NEW
src/components/CountUp.tsx            NEW
src/components/ui/button.tsx          icon-translate, wiggle hooks
src/components/sections/Header.tsx    scroll morph, animated underline
src/components/sections/Hero.tsx      ken-burns, ring-ripple on phone
src/components/sections/TrustStrip.tsx  staggered reveal
src/components/sections/Services.tsx  staggered reveal, icon glow, arrow motion
src/components/sections/Portfolio.tsx overlay + "View project" reveal on hover
src/components/sections/About.tsx     CountUp stats
src/components/sections/Emergency.tsx pulse-ring + breathing glow
src/components/sections/Testimonials.tsx  auto-advance, pill dot, edge glow
src/components/sections/Footer.tsx    icon hover
```

No new dependencies. No content changes. No layout changes.

---

## Out of scope

- Framer Motion / GSAP / Lenis — not needed at this scale
- Custom cursor, magnetic buttons, scroll-jacking
- Page/route transitions
- Scroll-driven progress indicators
- Replacing the design system or color tokens (already approved)

---

## QA checklist

- All 4 glow moments visible, nothing else glows
- Reduced-motion mode: no pulses, no ken-burns, no reveals — page is instantly static, hover still works
- Scroll reveals fire once and don't re-trigger
- Count-up only starts when section enters viewport
- 390 / 768 / 1366 widths: no layout shift caused by reveals (use `will-change: opacity, transform`)
- Lighthouse performance score doesn't drop more than 2 points
- make it mobile and tablet responsive too.
- change the font headline font use something else that looks professional.