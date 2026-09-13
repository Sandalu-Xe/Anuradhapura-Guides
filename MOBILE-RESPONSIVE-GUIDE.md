# Anuradhapura Guide — Mobile Responsive Guide

## Purpose

Use this document as the design specification and review checklist for a consistent mobile experience across the website. Preserve existing content, routes, photographs, and working features while making them easy to read and use on smaller screens.

This is a proposed standard, not a report that every item has already been implemented or tested. The project currently has responsive rules at 390px, 620px, 860px, and approximately 1050–1060px.

## 1. Shared design rules

| Viewport width | Target layout |
| --- | --- |
| 320–390px | Small phone: single column, compact spacing, wrapping text |
| 391–620px | Phone: single column with comfortable touch controls |
| 621–860px | Tablet: mobile navigation; two columns only where content fits |
| 861–1060px | Small desktop: desktop navigation if it fits; flexible grids |
| Above 1060px | Desktop: wider grids and side-by-side hero layouts |

- Use fluid widths, not fixed screen dimensions. Viewport measurements refer to CSS pixels.
- Keep page gutters around 16–20px on phones and 24–32px on tablets.
- Use a consistent spacing scale: 8, 12, 16, 24, 32, 48, and 64px.
- Use approximately 48–72px between major mobile sections.
- Keep body copy around 16px with a 1.5–1.7 line height. Use smaller text only for secondary metadata.
- Scale headings with `clamp()`; allow natural wrapping and avoid forced desktop line breaks on phones.
- Keep interactive targets at least 44 × 44px where practical.
- Use the same capsule button shape, typography, and primary-action color across all pages.
- Do not depend on hover to reveal essential content or actions.
- Prevent page-wide horizontal overflow by fixing overflowing components, not merely hiding them.
- Keep images proportional. Use `object-fit: cover` for intentional crops and `contain` for full-photo previews.
- Preserve visible keyboard focus, descriptive labels, and readable text contrast.

## 2. Header and navigation — every page

Relevant file: `app/_components/site-header.tsx`

- Keep the mobile header compact, with the logo and menu button on one row.
- Show Home, Places, Stay, Packages, and Contact Us inside the mobile menu.
- Highlight the current route consistently.
- Close the menu after navigation, when Escape is pressed, or when its backdrop is selected.
- Prevent background scrolling while the menu is open; restore it on close.
- Keep hidden menu links out of keyboard navigation.
- Ensure the menu remains usable in landscape orientation and at enlarged text sizes.

## 3. Home

Relevant files: `app/page.tsx`, `app/_components/hero-photo.tsx`, `app/_components/hero-photo.module.css`

- Place the introduction before the hero photo on mobile; use text-left/photo-right on wider screens.
- Keep the Ruwanweli Maha Seya photo in a wide, approximately 2:1 frame matching the reference design.
- Scale the frame to its container without stretching the photograph.
- Keep captions readable without covering the main subject. Shorten secondary coordinates or hide them if space is limited.
- Make the photo a clearly labelled button that opens the full-image popup.
- Fit the popup photograph inside the viewport without cropping it.
- Support closing with the close button, Escape, and backdrop interaction; restore focus to the image trigger.
- Keep the primary tour action prominent and place secondary actions nearby.
- Stack destination cards or use an intentional swipe region with a visible next-card preview.
- Keep tour highlights, reviews, and page-directory cards readable in a single column.

## 4. Places

Relevant files: `app/places/page.tsx`, `app/_components/place-card.tsx`

- Present the three destination categories clearly: Ancient Anuradhapura, Mihintale, and Wilpattu.
- Use one card per row on phones; increase columns only when names and descriptions fit comfortably.
- Maintain consistent image proportions, card padding, and action placement.
- Allow long names such as Ruwanweli Maha Seya and Abhayagiri Vihara to wrap naturally.
- Keep all sacred-place content accessible, including Sri Maha Bodhi, Isurumuniya, Thuparamaya, and Lankarama.
- Do not require hover to see a place name, description, or link.

### Individual place pages

Relevant file: `app/places/[slug]/page.tsx`

- Stack the photograph, introduction, historical information, and visiting tips.
- Move sidebars beneath the main content on phones.
- Keep back navigation easy to find and touch.
- Wrap facts and labels cleanly; avoid narrow fixed-width text columns.
- Check at least one long-title place page and one page with substantial body copy.

## 5. Stay

Relevant files: `app/stay/page.tsx`, `app/stay/stay-hero-interactive.tsx`

- Stack introduction, gallery, amenities, rooms, host information, and booking actions.
- Keep gallery controls visible and large enough to tap.
- If swipe interaction is available, preserve normal vertical page scrolling.
- Never make auto-advancing media the only way to access a photograph.
- Use a single column for room cards on narrow phones; use two only when descriptions fit.
- Keep ratings and information badges from overflowing their containers.
- Make external homestay links clearly understandable from their labels.

## 6. Packages

Relevant files: `app/packages/page.tsx`, `app/packages/package-explorer.tsx`, `app/_components/package-card.tsx`

- Move desktop sidebar filters above the results on mobile.
- Use wrapping filter chips or an explicitly scrollable filter row.
- Make search full-width with readable input text and a clear accessible label.
- Keep the active destination/category visible.
- Display packages in one column on phones.
- Keep destination, duration, price, inclusions, and inquiry action together.
- Allow price labels to wrap without separating them from their values.
- Show a useful empty state with a way to clear filters.
- Preserve the selected package when navigating to an inquiry if that behavior is supported by the existing flow.

## 7. Contact Us and booking form

Relevant files: `app/contact/page.tsx`, `app/booking-form.tsx`

- Stack contact information and the form.
- Use a single column of labelled fields on phones.
- Use at least 16px input text to avoid unwanted focus zoom on iOS.
- Choose appropriate input types and autocomplete values for names, email, and telephone numbers.
- Keep labels visible; placeholders must not replace labels.
- Display validation errors next to the relevant fields and announce submission status accessibly.
- Keep entered values when validation fails.
- Allow long email addresses and URLs to wrap.
- Ensure the on-screen keyboard does not make the submit action unreachable.
- Distinguish a successful submission from a loading state; never display success before the existing submission mechanism confirms it.

## 8. Reviews and supporting pages

Relevant files: `app/reviews/page.tsx`, `app/not-found.tsx`, `app/_components/cta-strip.tsx`

- Stack review cards and summary information on phones.
- Let review text determine card height rather than clipping it.
- Keep rating labels understandable without relying only on color.
- Wrap call-to-action content and buttons with consistent spacing.
- Keep the not-found message and return-home action visible at small screen sizes.

## 9. Footer

Relevant files: `app/_components/site-footer.tsx`, `app/_components/footer-quick-menu.tsx`

- Stack brand information, navigation, and the journey action on mobile.
- Use the same font family and button shapes as the rest of the website.
- If navigation groups collapse, use accessible accordion buttons with correct expanded states.
- Hidden accordion links must not remain focusable.
- Keep copyright text readable and allow it to wrap.
- Avoid excessive empty space between footer sections.

## 10. Animation and image performance

- Use short fade-and-rise entrances, around 250–600ms, for interface content.
- Keep image hover zoom subtle, around 1.02–1.04 scale.
- Animate the full-photo popup with a gentle fade and scale; avoid dramatic bouncing.
- Animate `transform` and `opacity` rather than dimensions or layout positions.
- Respect `prefers-reduced-motion: reduce`: remove decorative zoom, panning, and entrance movement.
- Keep content visible if JavaScript or animation initialization fails.
- Reserve image space using dimensions or aspect ratios to prevent layout shifts.
- Give responsive images accurate `sizes` values.
- Load the main above-the-fold photograph eagerly; lazy-load below-the-fold photographs.
- Avoid downloading large popup-only assets until needed where practical.

## 11. Acceptance checklist

Run this checklist on Home, Places, a place detail page, Stay, Packages, Contact Us, and Reviews.

- [ ] No unintended horizontal page scrolling at 320, 375, 390, 430, 768, 860, and 1024px widths.
- [ ] Headings and long place names wrap without clipping.
- [ ] Images preserve their proportions and show the intended subject.
- [ ] Navigation opens, closes, and reaches every main page.
- [ ] Photo popup opens by touch and keyboard and closes reliably.
- [ ] Popup and menu restore focus and background scrolling on close.
- [ ] Package filters, search, empty state, and inquiry links work.
- [ ] Stay gallery controls work without hover.
- [ ] Contact fields remain usable with the mobile keyboard open.
- [ ] Validation and submission feedback are understandable.
- [ ] Layout remains usable with 200% text enlargement.
- [ ] Reduced-motion settings remove decorative movement.
- [ ] Portrait and landscape layouts remain usable.
- [ ] No new console errors or missing images appear.
- [ ] Check representative pages in both iOS Safari and Android Chrome when devices are available.

## Implementation notes

Global responsive styling is in `app/globals.css`; the interactive hero image has a separate CSS module. The global stylesheet currently repeats several breakpoint blocks. When implementing future changes, inspect the cascade and consolidate related rules carefully rather than adding conflicting overrides.

Keep changes scoped to the requested pages or shared components. Do not replace existing content or redesign unrelated sections simply to achieve responsiveness.
