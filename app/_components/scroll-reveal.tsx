"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Add js-ready class to document root to enable scroll animations
    document.documentElement.classList.add("js-ready");

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
      ".cta-strip-inner",
      ".guide-note",
      ".ritual-layout",
      ".tailor-grid",
      ".tour-overview-list li",
      ".guide-highlight-card",
      ".editorial-place-card",
      ".review-card-item",
      ".page-directory-card",
      ".place-card",
      ".package-card",
      ".stay-grid article",
      ".explorer-package-card",
      ".booking-form-wrapper",
      ".visit-card",
      ".next-place",
    ];

    const elements = document.querySelectorAll<HTMLElement>(targetSelectors.join(", "));

    elements.forEach((el) => {
      if (!el.classList.contains("reveal-item")) {
        el.classList.add("reveal-item");
      }

      // Auto-assign stagger delay for sibling cards within grids
      const parentGrid = el.parentElement;
      if (
        parentGrid &&
        (parentGrid.classList.contains("guide-highlights-grid") ||
          parentGrid.classList.contains("reviews-editorial-grid") ||
          parentGrid.classList.contains("editorial-places-grid") ||
          parentGrid.classList.contains("tour-overview-list") ||
          parentGrid.classList.contains("places-grid") ||
          parentGrid.classList.contains("package-grid") ||
          parentGrid.classList.contains("stay-grid") ||
          parentGrid.classList.contains("page-directory-grid") ||
          parentGrid.classList.contains("package-result-grid") ||
          parentGrid.classList.contains("reviews-grid"))
      ) {
        const siblingIndex = Array.from(parentGrid.children).indexOf(el);
        if (siblingIndex > 0) {
          el.style.setProperty("--reveal-stagger", `${Math.min(siblingIndex * 0.1, 0.5)}s`);
        }
      }
    });

    // IntersectionObserver to reveal elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Small timeout so initial visible items fade in smoothly on page transition
        setTimeout(() => {
          el.classList.add("is-revealed");
        }, 60);
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
