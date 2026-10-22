# Turbo reference audit for Kobalto

Inspected 22 October 2026 with the in-app browser at 390, 768, 1024, 1200, 1440 and 1728 CSS pixels. Screenshots are in `/private/tmp/kobalto-reference/`. Measurements below come from screenshots and read-only DOM/computed-style inspection. The reference content and client imagery belong to Turbo; Kobalto will use its own logo, copy, projects and verified details.

## Routes and structure

The public reference has `/`, `/contact`, `/fulfillment-policy`, `/privacy-policy`, and `/terms-and-conditions`. Its project gallery uses same-page hash anchors, not accessible case-study routes. The homepage consists of a left introduction and 31 right-hand project visuals, then a six-line scroll statement, a two-column services section, a testimonial panel, a centered CTA and footer. Kobalto's existing project, Competenze, Manifesto and contact routes should stay available, because the reference has no equivalents that could be measured.

## Verified design tokens and geometry

| Property | Verified value |
| --- | --- |
| Homepage background | `#0b0b0f` |
| Secondary page background | `#020113` |
| Main text | white; supporting copy ~90% white |
| Main face | Neue Montreal Medium, weight 500 |
| Hero heading | 43px at 390–1440, 46px at 1728; 1.1 line height; `-0.03em` tracking |
| Hero supporting copy | 20px / 24px |
| Mono labels | Geist Mono / SF Mono, small uppercase |
| Desktop left column | x=24, width=327; sticky/fixed as right gallery scrolls |
| Desktop gallery | x=417, right gutter=32; first card top=32 |
| Gallery cards | aspect ratio ~1.61; 8px radius; 16px vertical gap |
| Mobile/tablet gallery | x=8, width=viewport−16; first card top=330 at 390, 258 at 768 and 1024 |
| Single-column breakpoint | greater than 1024 and at most 1200; exact CSS breakpoint not verified |
| Desktop heading position | x=24 y=89; 3 lines in 327px column |
| Mobile heading position | x=16 y=81; 2 lines at 390 |
| Pill CTAs | white primary and dark secondary, fully rounded |
| About modal | desktop x=414 y=133, 612×635 at 1440×900; 16px radius; white ~17% backdrop and 71px blur; dim overlay ~43% black |
| Contact drawer | right edge, 375px wide at 1440; full screen at 390 |

The 1440px first gallery card is 991×615. At 1728px it is 1279×793. At 1024px, the single-column card is 1008×625. Section boundaries were measured after lazy loading, so their absolute document positions are approximate: statement near y=19,793; services near y=20,610; testimonial section near y=21,191; CTA near y=22,003.

## Component inventory

`IntroRail`, `PillActions`, `ProjectGallery`, `ProjectVisual`, `StudioModal`, `ContactDrawer`, `ScrollStatement`, `ServicesSection`, `Footer`, and simple secondary-page layout are present in the reference. Client-logo anchors and testimonials exist there, but must not be represented as Kobalto client evidence. Kobalto's own six project images and founder content can fill those positions without claiming Turbo's work.

## Motion and interactions

| Element | Trigger | Initial | Final | Observed timing | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero words | Page entry | opacity ~0.001, translateY 10px | opacity 1, translateY 0 | ~1.5s observed across samples | split by word, staggered; exact easing not measured |
| About modal | About pill click | absent; background undimmed | glass panel centered; overlay dimmed | ~300–500ms on close | Escape and close bar dismiss |
| Contact drawer | Start a project click | absent | right-side/full-screen panel | transition visible; precise curve unmeasured | embeds an external Cal.com booking widget owned by Turbo |
| Client anchor | Logo click | inactive grey | white active; scroll to gallery group | scroll duration unmeasured | URL hash changes |
| Statement lines | Scroll | dark grey | white active line | tied to scroll position | six lines, 48px/52.8px at 1440 |
| Project visuals | Scroll | below viewport | visible | no reliable separate reveal animation observed | lazy-loaded image resources |

The first gallery image did not navigate on click. No videos were found in the page DOM or loaded-asset inventory. There was no evidence that Lenis or GSAP is needed. Exact page-entry spring parameters, frame-by-frame card transforms and project hover opacity beyond the sampled state remain unverified.

## Assets and content constraints

The reference loads Neue Montreal, Inter Display and mono faces from Framer/Google and approximately 80 images. Redistribution rights for the reference's fonts and client imagery were not established. Use local Kobalto logo and project imagery; use a licensed/open substitute with similar metrics if Neue Montreal cannot be reused. Do not copy Turbo's testimonials, clients, booking account, social profiles, policies or English copy. Kobalto's repo contains a 1619×367 transparent logo image, six project hero images, two additional BLP images and founder portraits. Kobalto content remains Italian.

## Validation targets

Compare the first viewport, gallery, About modal, contact drawer, lower sections and footer at all requested widths. The pixel-diff target is the layout/typography geometry; image content necessarily differs because the Kobalto brand and portfolio replace Turbo's. Preserve semantic routes and keyboard access, with reduced-motion overrides.
