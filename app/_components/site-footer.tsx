import Image from "next/image";
import { navigation } from "../_data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Image src="/anuradhapura-guidance-logo.png" alt="Anuradhapura Guidance" width={82} height={82} />
          <p>Private, unhurried journeys through Sri Lanka&apos;s first kingdom.</p>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          {navigation.slice(0, 4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <div className="footer-links">
          <span>Start here</span>
          <a href="/contact">Plan your tour</a>
          <a href="/stay">Where to Stay</a>
          <a href="https://green-village-six.vercel.app/" target="_blank" rel="noopener noreferrer">Green Village Homestay ↗</a>
          <a href="mailto:hello@anuradhapuraguidance.com">Email us</a>
          <p>Anuradhapura, Sri Lanka</p>
        </div>
        <div className="footer-callout">
          <span>Travel slowly</span>
          <h2>Let the ancient city unfold.</h2>
          <a href="/contact">Create your journey <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Anuradhapura Guidance</span>
        <span>Private heritage journeys · Sri Lanka</span>
      </div>
    </footer>
  );
}
