# Validation record — 22 October 2026

## Completed

- Reference inspected in the browser at 390, 768, 1024, 1200, 1440 and 1728 CSS pixels. Initial viewport screenshots: `/private/tmp/kobalto-reference/home-{390,768,1024,1440,1728}.png`.
- Reference About panel and contact drawer opened at desktop and mobile sizes; Escape close behavior observed.
- Reference homepage routes, same-page project anchors, footer routes, type styles, key geometry, colors and media inventory inspected.
- Kobalto production build passed with Next.js 15.5.6; 15 static pages generated, including six project detail routes.
- TypeScript strict typecheck passed.
- ESLint 9 with TypeScript ESLint and the Next.js recommended rules passed.
- Content test passed.
- Generated HTML checked for `lang="it"`, unique page titles, internal links and nonempty image alt text. All seven sampled routes passed.
- Local project and founder image files inspected; all nine sampled images load as valid WebP/JPEG and the six heroes measure 1881×1272.

## Browser validation limit

The local command `npm run dev` was denied by the runtime sandbox with `listen EPERM` on `127.0.0.1:3000`. Browser navigation to the generated `file://` HTML was also rejected by the browser security policy. Therefore no local implementation screenshots, overlays, pixel diffs, live hover verification, Lighthouse scores or local URL could be produced in this session. The reference screenshots and measured geometry informed the CSS, but pixel-perfect fidelity is unverified.

## Differences from the reference

- Kobalto's six local project visuals replace Turbo's 31 images; page length and composition cannot be identical.
- Kobalto has no verified testimonial, client-logo roster, booking account, social profiles or legal-policy copy. Those sections are omitted or replaced by Kobalto's verified project, studio and service information.
- The reference uses Neue Montreal, whose redistribution permission was not established. The implementation uses a system grotesk fallback. Typography metrics may differ.
- Existing Kobalto routes are retained even though the reference's gallery has no case-study routes.

## Next browser checks

Run `npm ci && npm run dev` in a terminal with network and local socket access, then compare `http://127.0.0.1:3000` with the saved reference screenshots at the five requested widths. Check the first viewport, About panel, contact drawer, gallery hover, lower sections, direct project routes and reduced motion. Run Lighthouse for performance and accessibility after visual correction.
