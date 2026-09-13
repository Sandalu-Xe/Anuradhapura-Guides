import type { Metadata } from "next";
import { CtaStrip } from "../_components/cta-strip";
import { PageHero } from "../_components/page-hero";
import { PlaceCard } from "../_components/place-card";
import { places } from "../_data/site";

export const metadata: Metadata = {
  title: "Sacred Places",
  description:
    "Explore the essential sacred, historic, and natural places around Anuradhapura with a private local guide.",
};

export default function PlacesPage() {
  return (
    <main>
      <PageHero
        eyebrow="The landscape of a kingdom"
        title="Nine places."
        italic="Thousands of stories."
        copy="From sacred ancient stupas and rock temples to the birthplace of Buddhism and wild forest villu lakes."
        image="/places/jetavanaramaya.jpg"
        imageAlt="Jetavanaramaya stupa in Anuradhapura"
      />
      <section className="section places-listing">
        <div className="shell">
          <div className="listing-intro">
            <p>01 — 09</p>
            <p>
              Choose the places that speak to you. We will arrange the best
              sequence around light, heat, rituals, and travel time.
            </p>
          </div>
          <div className="places-grid">
            {places.map((place, index) => (
              <PlaceCard place={place} index={index} key={place.slug} />
            ))}
          </div>
        </div>
      </section>
      <CtaStrip />
    </main>
  );
}
