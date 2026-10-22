# Turbo Reference Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Kobalto's site in Next.js 15 using the measured Turbo layout and interactions while retaining verified Kobalto content and assets.

**Architecture:** App Router server pages render typed content; small client components own the modal, drawer and scroll response. Tailwind utilities and a single token sheet express the measured grid. Existing Kobalto routes remain available because the reference has no case-study routes.

**Tech Stack:** Next.js 15, React, strict TypeScript, Tailwind CSS, Motion, native browser scrolling.

**Spec:** `docs/reference-audit.md`

## Global Constraints

- All visible copy, labels and metadata are Italian.
- Use Kobalto's local logo and project images, not Turbo's clients, testimonials, photos or booking data.
- Preserve the unrelated uncommitted work in the main checkout; implement in this isolated worktree.
- Use the measured desktop rail and gallery geometry; mobile composition follows the measured screenshots.
- Reduced-motion preferences and keyboard access apply to every interactive overlay.

## Review Focus

- At 1024px the layout remains single-column; at 1200px it becomes split.
- Direct entry and browser back/forward work for every retained Kobalto route.
- Escape and focus management work in modal and drawer.
- Project images load locally with descriptive Italian alt text.
- New code does not claim unverified clients, testimonials, contact data or commercial terms.

---

### Task 1: Typed Next foundation and content

**Files:** `package.json`, `tsconfig.json`, `postcss.config.mjs`, `app/layout.tsx`, `src/content/site.ts`, `src/content/projects.ts`, `tests/content.test.mjs`.

**Interfaces:** Export `studio`, `projects`, `services`, `navigation`, `manifesto` as typed data; page components consume these exports.

- [ ] Add failing content assertions: Italian navigation, six local projects, no invented Kobalto email, no branding or marketing service.
- [ ] Run `npm test`; confirm assertions fail because the typed modules do not exist.
- [ ] Install pinned Next 15, TypeScript, Tailwind and Motion, add typed content preserving verified data from the existing repo.
- [ ] Run `npm test`; confirm pass.

### Task 2: Measured homepage and layout

**Files:** `app/page.tsx`, `app/globals.css`, `components/IntroRail.tsx`, `components/ProjectGallery.tsx`, `components/ProjectCard.tsx`, `components/Footer.tsx`, `tests/layout.test.mjs`.

**Interfaces:** `IntroRail` receives `variant`; `ProjectGallery` receives typed `projects`; tokens expose `--background`, rail width and gallery gap.

- [ ] Add failing layout assertions for the 327px rail, 417px gallery start, 16px card gap and <=1024px single column.
- [ ] Run `npm test`; confirm failure.
- [ ] Implement hero, rail, gallery, footer and responsive styles using local images and Italian content.
- [ ] Run `npm test` and production build; confirm pass.

### Task 3: Modal, drawer and motion

**Files:** `components/StudioModal.tsx`, `components/ContactDrawer.tsx`, `components/InteractiveIntro.tsx`, `src/motion.ts`, `tests/motion.test.mjs`.

**Interfaces:** `InteractiveIntro` owns overlay state; motion constants exported from `src/motion.ts`.

- [ ] Add failing assertions for observed entrance, modal and drawer tokens plus reduced-motion behavior.
- [ ] Run `npm test`; confirm failure.
- [ ] Implement animated word entrance, studio modal and contact drawer with Escape, focus return, inert background and reduced-motion handling.
- [ ] Run tests and build; confirm pass.

### Task 4: Lower sections and existing routes

**Files:** `components/ScrollStatement.tsx`, `components/ServicesSection.tsx`, `app/competenze/page.tsx`, `app/manifesto/page.tsx`, `app/contatti/page.tsx`, `app/progetti/page.tsx`, `app/progetti/[slug]/page.tsx`, `app/not-found.tsx`, `tests/routes.test.mjs`.

**Interfaces:** Server routes consume typed content; Kobalto project detail slugs are generated statically.

- [ ] Add failing assertions for required routes and Italian metadata/copy.
- [ ] Run `npm test`; confirm failure.
- [ ] Implement scroll statement, services and retained routes with the reference's sparse dark secondary-page treatment.
- [ ] Run tests and build; confirm pass.

### Task 5: Browser validation and visual iteration

**Files:** implementation styles/components only when screenshots identify mismatch; add `docs/validation.md`.

- [ ] Start local Next server and capture matching screenshot states at 390, 768, 1024, 1440 and 1728.
- [ ] Compare against reference screenshots using overlays/diffs; correct major measurable geometry and wrapping mismatches.
- [ ] Test modal/drawer, project links, keyboard access, direct routes and reduced motion in browser.
- [ ] Run production build, typecheck, lint and available tests; document limits and remaining differences.
