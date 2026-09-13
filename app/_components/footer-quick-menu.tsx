"use client";

import { useId, useState, type ReactNode } from "react";
import { greenVillageHomestay, navigation } from "../_data/site";

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={`footer-accordion-item${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="footer-accordion-btn"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <span className="footer-accordion-icon" aria-hidden="true">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div id={contentId} className="footer-accordion-body">
        <div className="footer-links-list">{children}</div>
      </div>
    </div>
  );
}

export function FooterQuickMenu() {
  return (
    <div className="footer-quick-menu">
      <FooterGroup title="Explore">
        {navigation.slice(0, 4).map((item) => (
          <a href={item.href} key={item.href} className="footer-nav-link">
            {item.label}
          </a>
        ))}
      </FooterGroup>
      <FooterGroup title="Start here">
        <a href="/contact" className="footer-nav-link">
          Plan your tour
        </a>
        <a href="/stay" className="footer-nav-link">
          Where to Stay
        </a>
        <a
          href={greenVillageHomestay.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-nav-link footer-ext-link"
        >
          Green Village Homestay
        </a>
        <a
          href="mailto:hello@anuradhapuraguidance.com"
          className="footer-nav-link"
        >
          Email us
        </a>
        <p className="footer-location-tag">📍 Anuradhapura, Sri Lanka</p>
      </FooterGroup>
    </div>
  );
}
