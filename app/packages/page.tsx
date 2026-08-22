import type { Metadata } from "next";
import { CtaStrip } from "../_components/cta-strip";
import { PackageExplorer } from "./package-explorer";

export const metadata: Metadata = {
  title: "Tour Package Explorer",
  description:
    "Browse private tour packages for Anuradhapura, Ruwanweliseya, Mihintale, Isurumuniya, and Wilpattu National Park.",
};

export default function PackagesPage() {
  return (
    <main className="package-app-page">
      <section className="package-app-hero">
        <div className="shell package-app-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light"><span />Build your northern journey</p>
            <h1>Find a package<br /><em>for every place.</em></h1>
            <p>Browse focused visits, full heritage days, wildlife safaris, and combined journeys. Every package is private and can be adjusted to your group.</p>
          </div>
          <div className="package-app-stats" aria-label="Package explorer summary">
            <div><strong>10</strong><span>Starting packages</span></div>
            <div><strong>5</strong><span>Destinations</span></div>
            <div><strong>Private</strong><span>Flexible planning</span></div>
          </div>
        </div>
      </section>

      <PackageExplorer />
      <CtaStrip />
    </main>
  );
}
