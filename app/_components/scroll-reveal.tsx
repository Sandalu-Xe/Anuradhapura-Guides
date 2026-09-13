"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const staggerGroups = [
  "guide-highlights-grid",
  "reviews-editorial-grid",
  "experience-collage-grid",
  "destination-overview-grid",
  "editorial-places-grid",
  "places-grid",
  "stay-grid",
  "stay-why-grid",
  "stay-room-grid",
  "stay-photo-mosaic",
  "stay-reviews-grid",
  "page-directory-grid",
  "package-result-grid",
  "reviews-grid",
];

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !("IntersectionObserver" in window)
    ) {
      document.documentElement.classList.remove("js-ready");
      return;
    }
    // Add js-ready class to document root to enable scroll animations
    const syncMotionPreference = () => {
      document.documentElement.classList.toggle("js-ready", !motionPreference.matches);
    };
    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);

    const targetSelectors = [
      ".section-heading",
      ".tour-overview-heading",
      ".welcome-grid",
      ".itinerary-header",
      ".section-head-simple",
      ".page-directory-heading",
      ".stay-intro",
      ".stay-feature-grid",
      ".contact-grid > div",
      ".package-app-hero-grid",
      ".package-app-heading",
      ".reviews-summary",
      ".listing-intro",
      ".story-grid",
      ".itinerary-cta-banner",
      ".premium-hero-visual",
      ".experience-collage-card",
      ".destination-overview-card",
      ".cta-strip-inner",
      ".guide-note",
      ".ritual-layout",
      ".tailor-grid",
      ".guide-highlight-card",
      ".editorial-place-card",
      ".review-card-item",
      ".page-directory-card",
      ".place-card",
      ".stay-grid article",
      ".explorer-package-card",
      ".booking-form-wrapper",
      ".visit-card",
      ".next-place",
      ".stay-section-header",
      ".stay-why-card",
      ".stay-host-media",
      ".stay-host-content",
      ".stay-room-card",
      ".stay-gallery-top",
      ".stay-photo-card",
      ".stay-review-card",
      ".stay-direct-banner-grid",
    ];

    const selector = targetSelectors.join(", ");
    // Reveal a section or its cards, never two nested layers at once.
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
      .filter((element) => !element.parentElement?.closest(selector));

    elements.forEach((el) => {
      if (!el.classList.contains("reveal-item")) {
        el.classList.add("reveal-item");
      }

      // Auto-assign stagger delay for sibling cards within grids
      const parentGrid = el.parentElement;
      if (
        parentGrid &&
        staggerGroups.some((className) =>
          parentGrid.classList.contains(className),
        )
      ) {
        const siblingIndex = Array.from(parentGrid.children).indexOf(el);
        if (siblingIndex > 0) {
          el.style.setProperty(
            "--reveal-stagger",
            `${Math.min(siblingIndex * 0.07, 0.21)}s`,
          );
        }
      }
    });

    // IntersectionObserver to reveal elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else if (!entry.target.contains(document.activeElement)) {
            const element = entry.target as HTMLElement;
            // Reset only outside the viewport, ready for either scroll direction.
            element.style.setProperty("--reveal-y", entry.boundingClientRect.bottom <= 0 ? "-24px" : "24px");
            element.classList.remove("is-revealed");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", syncMotionPreference);
      elements.forEach((el) => {
        el.classList.remove("reveal-item", "is-revealed");
        el.style.removeProperty("--reveal-y");
        el.style.removeProperty("--reveal-stagger");
      });
      document.documentElement.classList.remove("js-ready");
    };
  }, [pathname]);

  return null;
}
