import Image from "next/image";
import { FooterQuickMenu } from "./footer-quick-menu";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Image
            src="/anuradhapura-guide-mark.png"
            alt="Anuradhapura Guide stupa logo"
            width={82}
            height={82}
          />
          <p>
            Private, unhurried journeys through Sri Lanka&apos;s first kingdom.
          </p>
        </div>

        {/* Interactive Dropdown Quick Menu */}
        <FooterQuickMenu />

        <div className="footer-callout">
          <span>Travel slowly</span>
          <h2>Let the ancient city unfold.</h2>
          <a href="/contact">Create your journey</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Anuradhapura Guidance</span>
        <span>Private heritage journeys · Sri Lanka</span>
      </div>
    </footer>
  );
}
