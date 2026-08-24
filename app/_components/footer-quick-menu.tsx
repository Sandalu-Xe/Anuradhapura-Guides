"use client";

import { useState } from "react";
import { navigation } from "../_data/site";

export function FooterQuickMenu() {
  const [openExplore, setOpenExplore] = useState(false);
  const [openStartHere, setOpenStartHere] = useState(false);

  return (
    <div className="footer-quick-menu">
      {/* 1. Explore Dropdown Menu */}
      <div className={`footer-accordion-item ${openExplore ? "is-open" : ""}`}>
        <button
          type="button"
          className="footer-accordion-btn"
          onClick={() => setOpenExplore((prev) => !prev)}
          aria-expanded={openExplore}
        >
          <span>Explore</span>
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

        <div className="footer-accordion-body">
          <div className="footer-links-list">
            {navigation.slice(0, 4).map((item) => (
              <a href={item.href} key={item.href} className="footer-nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Start Here Dropdown Menu */}
      <div className={`footer-accordion-item ${openStartHere ? "is-open" : ""}`}>
        <button
          type="button"
          className="footer-accordion-btn"
          onClick={() => setOpenStartHere((prev) => !prev)}
          aria-expanded={openStartHere}
        >
          <span>Start here</span>
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

        <div className="footer-accordion-body">
          <div className="footer-links-list">
            <a href="/contact" className="footer-nav-link">Plan your tour</a>
            <a href="/stay" className="footer-nav-link">Where to Stay</a>
            <a
              href="https://green-village-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link footer-ext-link"
            >
              Green Village Homestay <span className="footer-ext-arrow">↗</span>
            </a>
            <a href="mailto:hello@anuradhapuraguidance.com" className="footer-nav-link">Email us</a>
            <p className="footer-location-tag">📍 Anuradhapura, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  );
}
