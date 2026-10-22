# Turbo — pixel-perfect recreation

A faithful rebuild of the [turbodesign.co](https://turbodesign.co/) homepage in
Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

The goal was behavioural and visual parity with the live site, not a redesign:
every measurement below was taken from the production DOM with a headless
browser and then re-verified against the rebuild at 390 / 768 / 1024 / 1440 /
1728 px.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Design specification (extracted from the reference)

**Palette** — page and cards `#0b0b0f`, raised tab `#18181a`, hairline `#222`,
muted copy `rgba(255,255,255,.5–.71)`.

**Type** — `Neue Montreal` (400 regular / 500 medium, self-hosted),
`Geist Mono` 13/26 for eyebrow labels, `Inter Display` 14/16.8 for the
Brooklyn clock.

| Element | Desktop (≥1200px) | Below 1200px |
| --- | --- | --- |
| Hero rail | 375px sticky column, 24/24/32 padding | 320px header, 16px padding |
| Hero headline | 46/50.6, ls −0.03em | 43/47.3 |
| Manifesto | 48/52.8, 800px block | 32/35.2, 95px padding |
| Section headings | 39/42.9 | 39/42.9 (CTA 48/52.8) |
| Work tiles | 991×615 (ratio 1.61261), 16px gutter, 32px frame | 8px gutter/frame |
| CTA band | 450px | 50vh |
| Footer | 48px padding, 3 columns, 1024px grid | 24px padding, 2-col grid, 56px gap |

**Layout shell** — the page is a flex column with a 10px gap between sections;
the hero + work grid form a single row (10px gap) above the breakpoint so the
rail can stay pinned while 31 tiles scroll past.

## Motion inventory

| Behaviour | Spec |
| --- | --- |
| Hero words | per-word `opacity .001→1`, `y 10→0`, `blur 10→0`, 60ms stagger, 2.1s tween, `cubic-bezier(.44,0,.56,1)` |
| Logo / subtitle / nav / logo wall | fade in, 0.8s delay, 1.5s, same easing (subtitle settles at `.7`) |
| Manifesto | scroll-driven line highlight (1 vs .3) stepping every `height/8`px once the block is 38.3% into the viewport |
| Testimonials | 5s auto-advance, hard cut (no crossfade), 3px linear progress underline |
| Pill button | label stack springs up 29px (`stiffness 400 / damping 30`) |
| About pill | background eases `8% → 14.8%` white over 300ms |
| Booking sheet | scrim `0.43` black over 0.5s, white panel fades in over 1.5s; scroll lock; esc/scrim close |
| Card hover | none (the reference has no card-level hover state) |

## Architecture

```
app/                 layout, page, globals (fonts, tokens, desktop breakpoint)
components/
  motion/            Reveal, SplitWords — motion logic kept out of presentation
  sections/          hero-rail, trusted-brands, work-grid, manifesto,
                     how-we-help, testimonials, cta, footer
  ui/                shadcn-style Button + PillButton (clipped label stack)
  booking-provider   Cal.com booker sheet + scroll lock
lib/content.ts       all copy, work tiles, testimonials, nav
public/              self-hosted fonts + artwork
```

`<BookingProvider>` owns the dialog state and hosts `LazyMotion`, so only the
`domAnimation` feature bundle ships.

## Verification

- DOM geometry diffed element-by-element against the live site: 0px deviation
  at 390/768/1024/1440 (text, tiles, sections, footer).
- Hero, About and copy blocks pixel-diff at **0.00%** against the reference at
  2× DPR; remaining diffs are image resampling from differently sized sources.
- Lighthouse (mobile, simulated slow 4G): **98 performance / 96 accessibility /
  100 best practices / 100 SEO**, CLS 0.003. For reference the live site scores
  67 / 89 / 100 / 92 on the same run.

Secondary routes in the footer (contact, policies) link to the live site —
only the homepage was in scope.
