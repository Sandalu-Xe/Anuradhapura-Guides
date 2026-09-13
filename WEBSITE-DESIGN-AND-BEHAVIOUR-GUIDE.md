# Anuradhapura Guide — Design, Structure & Behaviour

Source-code snapshot: 13 September 2026. This document describes the current implementation and provides a reusable specification for another project. It is not a browser-verified visual audit. Values can vary by component and breakpoint because later styles override earlier ones.

## 1. Design concept

A warm, editorial travel website combining generous spacing, strong sans-serif headings, occasional italic serif phrases, destination photography, rounded cards, capsule buttons, and restrained motion.

- Light surfaces: warm off-white, muted sage, and soft stone.
- Dark surfaces: near-black and forest green.
- Orange and gold are action/accent colours, not large orange section backgrounds.
- Photography carries the visual identity; avoid excessive decorative icons.
- Content order: introduce the experience, explain the value, show destinations, offer a clear enquiry action.
- Desktop is spacious and often two-column; phone layouts prioritise readable text and straightforward actions.

## 2. Technology and folder structure

The current application uses Next.js App Router, React, TypeScript, Next Image, Next Font, global CSS and a photo CSS Module. Tailwind is imported, but much of the visual design uses named CSS classes.

```text
app/
  layout.tsx                    Shared font, metadata, header, footer, scroll observer
  globals.css                   Ordered stylesheet imports
  page.tsx                      Home page composition
  not-found.tsx                 Missing-route page
  booking-form.tsx              Client-side enquiry form and email draft
  chatgpt-auth.ts               Environment-specific integration helper
  _components/
    site-header.tsx             Desktop navigation and mobile menu
    site-footer.tsx             Shared footer composition
    footer-quick-menu.tsx       Collapsible footer link groups
    page-hero.tsx               Reusable editorial page introduction
    hero-photo.tsx              Homepage photo and native image dialog
    hero-photo.module.css       Photo/dialog presentation
    place-card.tsx              Reusable destination card
    cta-strip.tsx               Shared closing call to action
    scroll-reveal.tsx           Shared intersection-based animation controller
  _data/
    site.ts                    Navigation, places, homestay and shared content
    home.ts                    Homepage content collections
    packages.ts                Destination filters and package catalogue
    stay-gallery.ts            Accommodation gallery content
  _styles/
    base.css                   Tokens, resets, base typography and shared UI
    home.css                   Original homepage and animation foundations
    shared-sections.css        Shared sections and route foundations
    stay.css                   Accommodation page styles
    forms-and-breakpoints.css  Form styles and earlier responsive rules
    home-editorial.css         Homepage editorial presentation
    route-editorial.css        Places/packages/stay/contact editorial presentation
    buttons.css                Shared capsule action shapes
    mobile-layouts.css         Mobile/tablet layout adaptations
    responsive.css             Final shared responsive/accessibility adjustments
    mobile-hero.css            Phone-only photographic homepage hero
  places/
    page.tsx                   Places directory
    [slug]/page.tsx             Individual place, story and visit details
  packages/
    page.tsx                   Packages page
    package-explorer.tsx       Interactive filtering/search
  stay/
    page.tsx                   Accommodation page
    stay-hero-interactive.tsx  Manual photo gallery
  contact/page.tsx              Enquiry page
  reviews/page.tsx              Reviews page
public/                        Images, brand mark and social assets
tests/rendered-html.test.mjs    Route/HTML smoke tests
```

Other root files include `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs` and `eslint.config.mjs`. The repository also contains Vite/worker/database integration files. Those are not required merely to reuse the visual concept; review their purpose before copying them into a new project.

### CSS cascade

`globals.css` imports Tailwind, then the `_styles` files in the exact order listed above. Later editorial/mobile rules intentionally override earlier foundations. Do not alphabetically reorder them.

For a new project, consolidate the final rules into tokens, base styles, component styles and responsive rules instead of copying every historical override.

## 3. Page layouts

| Route | Main composition |
| --- | --- |
| `/` | Introductory hero, destination experiences, tour overview, guide introduction and feature cards, itinerary, reviews, page directory, footer |
| `/places` | Editorial hero followed by destination cards and shared calls to action |
| `/places/[slug]` | Place title/intro alongside photo, story, planning information, next-place navigation and CTA |
| `/packages` | Intro and statistics, destination filters, search, result cards and enquiry actions |
| `/stay` | Accommodation introduction/gallery, features, host, rooms/photos, reviews and reservation links |
| `/contact` | Introductory information and a structured enquiry form |
| `/reviews` | Review summary and testimonial cards |

### Shared layout rules

- Base content shell: `min(1180px, calc(100% - 48px))`, centred.
- Some editorial shells expand to 1240px; desktop homepage hero reaches 1320px with 48px side gutters.
- Base section spacing: 118px vertically; individual editorial sections adjust this.
- Large-screen homepage hero: two balanced columns with a 48–96px gap.
- Use CSS Grid for layouts and Flexbox for actions, metadata and navigation.
- Avoid fixed text-container heights that truncate translated or longer content.
- Typical card corners are 18–28px; primary actions use fully rounded ends.

## 4. Colours

### Defined tokens

| Token | Value | Typical role |
| --- | --- | --- |
| `--ink` | `#1c2a22` | Main dark text |
| `--deep` | `#183126` | Deep-green buttons/surfaces |
| `--forest` | `#234638` | Forest sections and labels |
| `--moss` | `#4c6555` | Secondary green |
| `--paper` | `#f8f3e9` | Base warm page background |
| `--cream` | `#eadfcb` | Warm supporting surface |
| `--gold` | `#d3a34d` | Gold action/accent |
| `--gold-dark` | `#96672d` | Dark gold text/details |
| `--clay` | `#b76345` | Supporting earth tone |
| `--muted` | `#69736b` | Secondary text |
| `--line` | `rgba(23,35,28,.16)` | Light-surface borders |
| `--light-line` | `rgba(255,255,255,.2)` | Dark-surface borders |
| `--signal` | `#ef6d3f` | Orange action/accent |
| `--night` | `#11130f` | Near-black surfaces/actions |
| `--soft-white` | `#f5f3ed` | Editorial light background |

Additional current surface values: sage `#e4e8df`, soft stone `#d9ded3`, and grey-stone `#deded5`. The stay banner uses forest green; its italic heading uses `#ead7ad`. The shared CTA strip uses sage.

Bright lime `#dff06b` still exists in selected UI accents, including the desktop active package filter; it is no longer the main CTA section background. Orange also remains in some headings and small details. The recent surface recolouring did not globally remove accent colours.

### Contrast rules

- Light card → ink heading and dark muted supporting text.
- Dark section → white heading and readable light supporting text.
- Phone inactive package filter → ink title, `#526057` count on pale background.
- Phone active package filter → white title, `#d4dbd5` count on near-black.
- Do not inherit white desktop-sidebar text into pale mobile pills.
- Audit actual colour pairs for WCAG contrast when adapting this design.

## 5. Fonts and typography

**Primary font: Inter**, loaded through `next/font/google` in `app/layout.tsx`, with Latin subset, `display: swap`, and CSS variable `--font-inter`.

**Editorial accent: Georgia**, normally italic for selected heading phrases. Georgia is a system serif, not an additional downloaded font.

The base fallback stack also mentions Apple system fonts, Segoe UI, Roboto, Helvetica and Arial. This does not mean the website downloads or primarily uses Apple's SF Pro font. When Inter loads successfully, Inter is the principal sans-serif.

| Element | Current design pattern |
| --- | --- |
| Main editorial headings | Inter, bold/heavy; component rules frequently use 700–790 |
| Emphasised heading phrase | Georgia italic, usually weight 400 |
| Body text | Inter, generally 16–18px, comfortable line height |
| Eyebrow labels | Small uppercase, bold, increased letter spacing |
| Buttons | Inter, approximately 12–14px, bold |
| Phone hero title | `clamp(32px, 8.5vw, 44px)`, line-height 1.12 |
| Phone hero paragraph | 16px, line-height 1.6 |

The base `h1/h2` rule is serif, but later editorial selectors change many headings to Inter. Read the complete cascade when reproducing a particular heading. Heading letter spacing is usually tighter than body text; use fluid `clamp()` sizing rather than one fixed size for every screen.

## 6. Buttons, navigation and icons

### Buttons

- Capsule silhouette: `border-radius: 999px`.
- Shared action minimum height: 54px; generic `.button`: 58px with 30px horizontal padding.
- Mobile homepage primary action: 48px tall and full width; secondary action: at least 44px.
- Variants: dark/white text, gold/dark text, orange/white text, and transparent outline.
- Base hover: 2px upward movement, with 200ms background/text/transform transitions.
- Focus-visible: 3px orange outline with 4px offset.
- Button elements perform actions; links navigate to routes or external destinations.
- Keep labels readable during every state, including selected, hover and focus.

### Header and navigation

- Desktop header is sticky, translucent, blurred and capsule-shaped; editorial width is up to 1240px.
- Primary links: Home, Places, Stay, Packages and Contact Us; separate “Plan a journey” action.
- Active route uses `aria-current="page"`; nested place routes keep Places active.
- Mobile navigation opens from a two-line menu button, with an animated open state and backdrop.
- Escape/backdrop close the menu; background scrolling locks while open.
- Closed menu is inert; keyboard focus cycles through its links and toggle while open.
- Internal navigation currently uses native anchors. Existing source comments reference a historical vinext prefetch issue; do not automatically carry that workaround to another framework.

### Icons and branding

- No general-purpose icon package is imported by the inspected shared components.
- Brand mark: `/anuradhapura-guide-mark.png`, a simple white stupa on orange.
- Hamburger: CSS-styled spans; footer chevron: inline SVG using `currentColor`.
- Search/close/check/directional symbols include Unicode glyphs.
- Some location/security details use emoji; appearance varies by operating system.
- For a new project, prefer a consistent SVG icon set for predictable rendering. This is a recommendation, not the current universal implementation.
- Decorative icons should be hidden from assistive technology; icon-only actions need accessible names.

## 7. Images

- Public images are referenced through stable local paths, with descriptive alt text.
- Next Image is used with responsive `sizes`; important hero media is prioritised/eagerly loaded.
- Homepage desktop uses a portrait-style photo preview with a caption and enlargement control.
- Its native dialog presents the full image; close button, backdrop and Escape dismiss it, restoring page scrolling.
- Phone homepage replaces the separate photo card with a background photograph and hides the enlargement control.
- Place-detail photos now use natural proportions (`width:100%; height:auto; object-fit:contain`) with uniform 24px corners.
- Place-detail corner label and category/date eyebrow were removed. Historic-period information remains in the separate planning card.
- Package/listing images may use `cover` to fill consistent card frames. Do not assume every website image is uncropped.
- Stay gallery changes via previous/next controls, dots and thumbnails. It is manually controlled; do not describe it as autoplay or swipe-enabled without implementing those features.

## 8. Mobile and responsive behaviour

Key breakpoints include 1060px, 860px and 620px, with other component-specific widths. They are not a single universal three-breakpoint system.

- Above 1060px: roomy multi-column editorial layouts.
- At/below 860px: mobile navigation and substantial layout adaptation.
- At/below 620px: dedicated phone homepage hero and compact controls.
- Cards and form columns stack as space decreases.
- Package filters become pale, wrapping pills rather than a dark desktop sidebar.
- Inputs use readable mobile sizes; important touch controls target at least 44px.
- Footer link groups support collapsible presentation.
- Long text wraps instead of forcing horizontal page overflow.

### Phone homepage hero

- Photograph: `/places/ruwanweliseya.jpg`, `cover`, positioned at `51% center`.
- Overlay: `linear-gradient(180deg, #09201966 0%, #0920198c 55%, #092019b3 100%)`.
- White heading with pale-gold `#f2d99a` italic accent.
- Left-aligned text, 20px side gutters and compact spacing.
- Private-tours badge, duplicated journey facts and trust row are hidden.
- Primary and secondary actions stack vertically.
- Background `cover` intentionally crops differently from full-photo detail pages.

## 9. Interaction and state behaviour

| Feature | Current behaviour |
| --- | --- |
| Package destination pills | Local React state; one destination selected at a time; `aria-pressed` |
| Package search | Trimmed, case-insensitive match against name, destination label and summary |
| Combined filters | Search and destination conditions both apply |
| Result count | Updates with the visible catalogue |
| Empty results | Clear message and “Show all packages” reset action |
| Package enquiry | Navigates to `/contact?journey=<slug>` |
| Place enquiry | Navigates to `/contact?place=<slug>` |
| Contact form | Collects details and prepares an email draft after browser validation |
| Email sending | User opens their email application and sends manually; no automatic send/payment/booking confirmation |
| Edit enquiry | Returns to editing without intentionally clearing the entered form values |
| Reservation links | Navigate to the dedicated homestay website or Airbnb |
| Footer groups | Independent open/closed state and `aria-expanded` |
| Four guide feature cards | Black with white text by default; hover temporarily inverts colours; no click selection |

The four feature cards use `guide-highlights.tsx` and its CSS Module. All cards start black with white text. Colours transition over 350ms to white with black text on hover, then reset when the pointer leaves. Hover inversion is limited to precise hover-capable pointers. Cards are static articles with no click selection or unnecessary button controls. Reduced-motion mode disables the transition.

## 10. Animation system

The site uses CSS transitions/keyframes and browser observers, not a Framer Motion dependency.

### Scroll reveals

`ScrollReveal` runs on pathname changes and observes a selector list of section headings, card groups, media and content blocks.

1. Without JavaScript or IntersectionObserver, content remains visible.
2. With motion enabled, the root receives `js-ready` and targets receive `reveal-item`.
3. Entering the viewport adds `is-revealed`, fading and translating content into place.
4. Leaving the viewport removes that state, allowing another reveal on return.
5. Offscreen targets above the viewport use a -24px vertical offset; targets below use +24px.
6. Already visible targets are revealed immediately on setup.
7. Nested target layers are filtered out to avoid double fades.
8. Elements containing keyboard focus are not reset to hidden by the observer.

Main transition: 700ms, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Grid staggering advances by 70ms per sibling, capped at 210ms. Phone reveals use 500ms and no stagger, lateral offset or rotation.

Some desktop cards also have component-specific lateral/rotation offsets. The existing global observer registers targets at route-effect setup; newly inserted filtered results are not automatically enrolled by a MutationObserver. Keep newly rendered content visible, or add explicit component-based reveal handling in a future implementation.

### Other motion

- Hero text/media have arrival keyframes.
- Photo preview has an approximately 800ms arrival, 1s image transform transition and 600ms shadow transition.
- Photo dialog has an approximately 350ms arrival.
- Cards, links, menu elements and buttons use component-specific hover/open transitions.
- Anchor scrolling uses `scroll-behavior:smooth`.
- Place-detail full-photo images intentionally have their zoom animation disabled to retain the complete composition.
- There is no need to add scroll hijacking, continuous bouncing or autoplay to reproduce this concept.

### Reduced motion

`prefers-reduced-motion:reduce` disables animation/transitions and smooth scrolling. The reveal controller also responds to preference changes. Preserve visible content and usable controls when motion is off.

## 11. Reuse in another project

Recommended new-project structure:

```text
src/
  app/ or routes/          Page composition and routing
  components/
    layout/                Header, footer, shell
    ui/                    Button, card, badge, icon, dialog
    sections/              Hero, directory, feature grid, CTA
    features/              Filters, enquiry form, gallery
  data/                    Typed content collections
  styles/
    tokens.css             Colour, spacing, radius and motion tokens
    base.css               Reset, typography, focus rules
    components/            Scoped component styles
public/images/             Your project's licensed photography
```

Implementation order:

1. Define semantic colour, font, spacing and motion tokens.
2. Build shell, header, footer and consistent button variants.
3. Build static, readable mobile layouts before adding motion.
4. Add desktop grids using the same components/content.
5. Implement filtering, navigation, dialog and form states explicitly.
6. Add lightweight reveal/hover transitions and reduced-motion fallbacks.
7. Test mobile, tablet, desktop, keyboard navigation and long content.

Reuse the design language, not the project's literal business data. Replace the logo, photographs, email recipient, metadata, external reservation URLs, prices and destination names. Do not copy authentication/database/deployment integration code just to reproduce the layout.

## 12. Copyable brief for another project

> Build a warm editorial website with Inter as the primary font and Georgia italic for selected heading accents. Use off-white and muted sage surfaces, forest and near-black contrast sections, large authentic photography, generous whitespace, rounded cards and capsule buttons. Reserve orange/gold for deliberate accents and actions. Use balanced desktop columns and readable mobile stacks. Include a compact accessible mobile menu, clear active states, working search/filter/empty states, and an honest enquiry flow. Add subtle 500–700ms viewport reveals that replay on re-entry, short staggered card motion and restrained hover feedback. Respect reduced motion and keyboard focus. Avoid cropped text, low contrast, oversized phone typography, scroll hijacking and unnecessary animation libraries.

## 13. Verification checklist

- Check 360px, 390px, 620px, 860px, 1060px and wide desktop layouts.
- No page-level horizontal overflow or clipped words.
- Active/inactive/hover/focus text stays legible.
- Menu can open/close with touch and keyboard; Escape works.
- Images have intentional cropping, correct alt text and responsive sizes.
- Search, filters, zero results and reset work together.
- Enquiry states never falsely claim a message has been sent.
- Scroll down/up and confirm content reappears without disappearing under focus.
- Reduced-motion mode keeps all content visible.
- Verify newly rendered filtered content, not only initial page content.
- In this repository: run `npm run typecheck`, `npm run lint`, `npm test` (with the expected local server), and a production build when appropriate.

This guide is documentation only; creating it does not change the site's design or implement pending interaction requests.
