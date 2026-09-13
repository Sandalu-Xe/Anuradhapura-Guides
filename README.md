# Anuradhapura Guide

A responsive travel website for private tours of Anuradhapura, Mihintale, and Wilpattu, with a Green Village homestay page.

## Local development

Use Node.js 20 or newer and the existing npm lockfile.

```sh
npm ci
npm run dev -- --port 3001
```

Open http://localhost:3001. No database or sign-in is required for the public pages.

## Checks

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

The smoke tests require the running development server on port 3001. Override it with `TEST_BASE_URL` when testing another server. They check all main routes, a place detail, shared navigation, and a missing route. They do not replace interactive or visual testing.

## Structure

- `app/page.tsx` — homepage composition.
- `app/places/`, `stay/`, `packages/`, `contact/`, `reviews/` — route components and route-local interactions.
- `app/_components/` — shared header, footer, photo dialog, page hero, and animation behavior.
- `app/_data/site.ts` — shared navigation, places, homestay information, and reviews.
- `app/_data/home.ts` — homepage editorial content.
- `app/_data/packages.ts` — active package catalogue and destination filters.
- `app/_data/stay-gallery.ts` — homestay gallery images and captions.
- `app/booking-form.tsx` — validated enquiry form that prepares an email draft; no automatic sending.
- `app/globals.css` — ordered stylesheet entry point.
- `app/_styles/` — shared foundations, route styles, buttons, and responsive styles.
- `public/` — existing photographs and brand assets.
- `tests/` — HTTP route smoke tests.

## Styling conventions

The stylesheet imports deliberately retain the existing cascade order, so the refactor does not redesign the site. Foundational rules load first, editorial refinements next, and mobile overrides last. Edit the relevant stylesheet rather than appending unrelated overrides to the entry point. Component-specific photo styles remain in `hero-photo.module.css`.

## Content maintenance

Edit package content in `app/_data/packages.ts`, place information in `app/_data/site.ts`, and home-specific stories in `app/_data/home.ts`. Gallery controls are manual and keep the selected photo visible. Review copy remains explicitly marked as sample content on the reviews page.

## Hosting compatibility

Local scripts run Next.js. The repository also retains its existing Sites/Cloudflare adapter (`vite.config.ts`, `worker/`, `.openai/hosting.json`), optional database scaffolding, and ChatGPT authentication helpers. These are hosting integration boundaries, not part of the public-page runtime. Do not delete them or change the hosting manifest without deliberately migrating the deployment setup.

This refactor does not deploy or change hosting configuration.
