"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors avoid a vinext RSC prefetch runtime failure. */

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "../_data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="site-brand" href="/" aria-label="Anuradhapura Guidance home">
          <Image src="/anuradhapura-guidance-logo.png" alt="" width={58} height={58} priority />
          <span><strong>Anuradhapura</strong><small>Guidance · Sri Lanka</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a className={isActive(item.href) ? "is-active" : ""} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="/contact">Plan a journey <span aria-hidden="true">↗</span></a>
        <button className={`mobile-menu-button${menuOpen ? " is-open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </div>
      <button className={`mobile-menu-backdrop${menuOpen ? " is-open" : ""}`} type="button" aria-label="Close navigation" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu-panel${menuOpen ? " is-open" : ""}`} id="mobile-site-navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <nav className="shell" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a className={isActive(item.href) ? "is-active" : ""} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setMenuOpen(false)} key={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
            </a>
          ))}
          <a className="mobile-menu-cta" href="/contact" onClick={() => setMenuOpen(false)}>Tell us about your trip <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
