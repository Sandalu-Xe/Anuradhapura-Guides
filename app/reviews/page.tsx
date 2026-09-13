import type { Metadata } from "next";
import { CtaStrip } from "../_components/cta-strip";
import { PageHero } from "../_components/page-hero";
import { reviews } from "../_data/site";

export const metadata: Metadata = {
  title: "Traveller Stories",
  description:
    "Stories from travellers who explored Anuradhapura, Mihintale, and Wilpattu with a private local guide.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Traveller stories"
        title="The part of Sri Lanka"
        italic="they kept talking about."
        copy="The best feedback is not about how much we fitted in. It is about the moments people had time to understand."
        image="/places/samadhi-buddha.jpg"
        imageAlt="Samadhi Buddha sculpture in Anuradhapura"
      />
      <section className="section reviews-page">
        <div className="shell">
          <div className="reviews-summary">
            <div>
              <strong>4.9</strong>
              <span>★★★★★</span>
              <small>Review section preview</small>
            </div>
            <p>
              Kind words from curious travellers, families, and couples who
              wanted to see the cultural north with more context and less rush.
            </p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <figure key={review.name}>
                <span className="review-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.place}</span>
                  <small>{review.journey}</small>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="preview-disclaimer">
            Sample review copy for design preview. Replace with verified Google
            or Tripadvisor reviews before launch.
          </p>
        </div>
      </section>
      <CtaStrip />
    </main>
  );
}
