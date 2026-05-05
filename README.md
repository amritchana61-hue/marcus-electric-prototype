# Marcus Electric — Refined Dark Theme (Lovable prototype)

This Lovable project is a **design reference build** for the Marcus Electric Next.js
site. It applies every fix from the design critique on the live Vercel site so you can
preview the system, then port the tokens, fonts and component patterns back to your
Next.js + v0 repo.

---

## What changed vs. the original Vercel site

1. **Yellow demoted.** Pure `#FFFF00` everywhere → amber `#FACC15`, restricted to
   primary CTA, logo bolt, 5-star ratings, emergency pin, eyebrow labels.
2. **Font pairing.** Inter-only → **Bricolage Grotesque** (display) + **Inter** (UI/body).
3. **3-tier dark surfaces** (`#0A0A0B` / `#111114` / `#15151A`) for visual rhythm.
4. **No glow on cards** — replaced with border color shift + 2px lift.
5. **Trust strip directly under hero** (Licensed · Insured · 30-min response · Projects).
6. **Phone-first hero CTA** — yellow primary is now "Call …", form is the ghost button.
7. **Emergency banner uses red as the only accent** (no yellow competing).
8. **Footer credentials promoted** out of fine-print into a dedicated row.

---

## Porting to Next.js (`marcus-electric-toronto-456`)

### 1. Fonts
Add to `app/layout.tsx`:
```tsx
import { Bricolage_Grotesque, Inter } from "next/font/google";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const sans    = Inter({ subsets: ["latin"], variable: "--font-sans" });
```
Then in `app/globals.css`:
```css
body { font-family: var(--font-sans); }
h1,h2,h3,h4,h5 { font-family: var(--font-display); letter-spacing:-0.02em; line-height:1.05; }
```

### 2. Tokens
Copy the `:root` block from `src/index.css` (this repo) into `app/globals.css`. All
tokens are HSL strings — they map 1:1 to Tailwind v4 `@theme` or v3 config.

### 3. Component patterns
The section components in `src/components/sections/` are framework-agnostic JSX +
Tailwind. Drop them into `components/sections/` in your Next repo (only changes:
`<a href>` stays, image imports become `next/image`).

### 4. Button variants
See `src/components/ui/button.tsx`. Notable: `default` (amber + glow on hover),
`outline` (ghost), `emergency` (red). Add the same `cva` variants to your repo.

---

## Out of scope here (keep as-is in the Next repo)
- Framer Motion scroll-reveal — your repo already has it; this prototype uses CSS only.
- Form submission, routing beyond `/`, image optimization (`next/image`).
