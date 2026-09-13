import type { Metadata } from "next";
import { CtaStrip } from "../_components/cta-strip";
import { PackageExplorer } from "./package-explorer";

export const metadata: Metadata = {
  title: "Tour Packages & Guided Experiences",
  description:
    "Explore private guided tour packages for Ancient Anuradhapura, Mihintale, and Wilpattu National Park.",
};

export default function PackagesPage() {
  return (
    <main className="package-app-page">
      <section className="package-app-hero">
        <div className="shell package-app-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">
              <span />
              Build your northern journey
            </p>
            <h1>
              Find a package
              <br />
              <em>for every place.</em>
            </h1>
            <p>
              Browse focused ancient city tours, sacred hill pilgrimages, and
              Wilpattu wildlife safaris. Every tour is private and guided by an
              official local expert.
            </p>
          </div>
          <div
            className="package-app-stats"
            aria-label="Package explorer summary"
          >
            <div>
              <strong>3</strong>
              <span>Curated packages</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Destinations</span>
            </div>
            <div>
              <strong>Private</strong>
              <span>Flexible planning</span>
            </div>
          </div>
        </div>
      </section>

      <PackageExplorer />
      <CtaStrip />
    </main>
  );
}
