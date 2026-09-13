import type { Metadata } from "next";
import Image from "next/image";
import { CtaStrip } from "../_components/cta-strip";
import { greenVillageHomestay } from "../_data/site";
import { StayHeroInteractive } from "./stay-hero-interactive";

export const metadata: Metadata = {
  title: "Where to Stay | Green Village Homestay Anuradhapura",
  description:
    "Stay with your guide Gunarathna at Green Village Homestay in Thalawa, Anuradhapura. Private AC guest room, tranquil garden veranda, authentic Sri Lankan home-cooked meals, and 4.97★ Airbnb hospitality.",
};

const whyStayReasons = [
  {
    number: "01",
    title: "Stay With Your Licensed Guide",
    copy: "Begin your ancient city tour effortlessly from the homestay. Gunarathna plans your departure times around morning light and quiet moments.",
    icon: "🧭",
  },
  {
    number: "02",
    title: "Authentic Home-Cooked Meals",
    copy: "Taste real Sri Lankan cuisine prepared in the family kitchen with fresh local vegetables, spices, and tea on the breezy garden veranda.",
    icon: "🍲",
  },
  {
    number: "03",
    title: "Quiet Country Rest Away from Noise",
    copy: "Located in Thalawa (just 15–20 minutes from sacred sites), wake to birdsong, coconut palms, and peaceful village breezes instead of city traffic.",
    icon: "🌴",
  },
];

const roomFeatures = [
  {
    title: "Up to 4 Guests",
    detail: "1 King bed + 1 Double bed in a private spacious room",
    icon: "🛏️",
  },
  {
    title: "Air Conditioning",
    detail: "Modern AC and quiet ceiling fan for cool rest",
    icon: "❄️",
  },
  {
    title: "Private Ensuite Bath",
    detail: "Private bathroom with hot water, shower, and towels",
    icon: "🚿",
  },
  {
    title: "Garden & Veranda",
    detail: "Shaded outdoor seating surrounded by lush palms",
    icon: "🌿",
  },
  {
    title: "Home-Cooked Dinners",
    detail: "Authentic Sri Lankan breakfast & dinner options",
    icon: "🍛",
  },
  {
    title: "Free Private Parking",
    detail: "Convenient parking for cars, vans, or tuk-tuks",
    icon: "🚗",
  },
];

const guestReviews = [
  {
    quote:
      "Staying with Gunarathna and his family was the highlight of our trip to Sri Lanka. The food was the best we had, the room was clean and air-conditioned, and his tour of Anuradhapura was unforgettable.",
    author: "Emma & David",
    country: "United Kingdom",
    rating: "★★★★★",
  },
  {
    quote:
      "Gunarathna is an incredible host and English teacher. He explained the history and Buddhist culture with such care. The homestay is peaceful, surrounded by green trees, and feels like home.",
    author: "Marc & Sophie",
    country: "France",
    rating: "★★★★★",
  },
  {
    quote:
      "A genuine cultural experience. Delicious home cooking, private bathroom, very comfortable beds, and genuine warmth. Highly recommended to anyone visiting Anuradhapura!",
    author: "Lukas K.",
    country: "Germany",
    rating: "★★★★★",
  },
];

export default function StayPage() {
  return (
    <main className="stay-page-container">
      {/* 1. Crystal Clear Split Hero with Interactive Gallery & Animations */}
      <StayHeroInteractive />

      {/* 2. Why Stay With Us (Clear Explanation) */}
      <section className="section stay-why-section">
        <div className="shell">
          <div className="stay-section-header">
            <p className="eyebrow">
              <span />
              The Complete Experience
            </p>
            <h2>
              Why stay at Green Village
              <br />
              <em>during your Anuradhapura trip?</em>
            </h2>
            <p className="stay-section-subtitle">
              Instead of an impersonal commercial hotel, Green Village connects
              your sacred city tours with genuine family warmth and village
              serenity.
            </p>
          </div>

          <div className="stay-why-grid">
            {whyStayReasons.map((item) => (
              <div className="stay-why-card" key={item.number}>
                <div className="stay-why-top">
                  <span className="stay-why-icon">{item.icon}</span>
                  <span className="stay-why-num">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Host Story & Kindness */}
      <section className="section stay-host-section">
        <div className="shell stay-host-grid">
          <div className="stay-host-media">
            <div className="stay-host-image-frame">
              <Image
                src="/green-village/family-guest-welcome.webp"
                alt="Gunarathna welcoming travellers to Green Village"
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
              />
            </div>
            <div className="stay-host-stats-chip">
              <strong>20+ Years</strong>
              <span>Hospitality &amp; Guiding</span>
            </div>
          </div>

          <div className="stay-host-content">
            <p className="eyebrow">
              <span />
              Meet Your Host &amp; Guide
            </p>
            <h2>
              “I guide because every traveller
              <br />
              <em>deserves to feel this place.”</em>
            </h2>

            <p className="stay-host-lead-p">
              <strong>Gunarathna</strong> is a local English teacher, community
              volunteer, and Airbnb&apos;s highest-reviewed tour guide in
              Anuradhapura.
            </p>

            <p className="stay-host-text">
              For over two decades, he has welcomed travellers from around the
              world into his home. With fluent English, deep Buddhist knowledge,
              and natural warmth, Gunarathna ensures your time in the cultural
              triangle feels personal, relaxed, and deeply meaningful.
            </p>

            <div className="stay-host-buttons">
              <a
                className="button button-gold"
                href={greenVillageHomestay.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More on Green Village Website
              </a>
              <a
                className="button button-dark"
                href={greenVillageHomestay.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read 100+ Reviews on Airbnb
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Room Amenities Grid */}
      <section className="section stay-room-section">
        <div className="shell">
          <div className="stay-section-header">
            <p className="eyebrow">
              <span />
              Guesthouse Amenities
            </p>
            <h2>
              Private, comfortable
              <br />
              <em>and thoughtfully equipped.</em>
            </h2>
            <p className="stay-section-subtitle">
              Your private guesthouse accommodation provides everything you need
              to recharge after exploring ancient stone ruins in the tropical
              sun.
            </p>
          </div>

          <div className="stay-room-grid">
            {roomFeatures.map((amenity) => (
              <div className="stay-room-card" key={amenity.title}>
                <span className="stay-room-icon">{amenity.icon}</span>
                <h3>{amenity.title}</h3>
                <p>{amenity.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Photo Gallery Showcase */}
      <section className="section stay-gallery-section">
        <div className="shell">
          <div className="stay-gallery-top">
            <div>
              <p className="eyebrow">
                <span />
                Photo Gallery
              </p>
              <h2>
                Moments at <em>Green Village</em>
              </h2>
            </div>
            <a
              className="button button-subtle-stay"
              href={greenVillageHomestay.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Photos on Green Village
            </a>
          </div>

          <div className="stay-photo-mosaic">
            <div className="stay-photo-card stay-photo-card-large">
              <Image
                src="/green-village/homestay-garden.avif"
                alt="Green Village guesthouse and garden"
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
              />
              <span className="stay-photo-caption">
                Guesthouse &amp; Tropical Garden
              </span>
            </div>
            <div className="stay-photo-card">
              <Image
                src="/green-village/homestay-veranda.avif"
                alt="Garden veranda with seating"
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
              />
              <span className="stay-photo-caption">Quiet Veranda</span>
            </div>
            <div className="stay-photo-card">
              <Image
                src="/green-village/family-guests-table.avif"
                alt="Dining with guests"
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
              />
              <span className="stay-photo-caption">Home-Cooked Dinners</span>
            </div>
            <div className="stay-photo-card">
              <Image
                src="/green-village/river-nature.avif"
                alt="Lush green nature and river near homestay"
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
              />
              <span className="stay-photo-caption">Village Nature</span>
            </div>
            <div className="stay-photo-card">
              <Image
                src="/green-village/gunarathna-guide.avif"
                alt="Gunarathna guiding travellers at Anuradhapura stupa"
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
              />
              <span className="stay-photo-caption">Private Guided Tours</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guest Feedback */}
      <section className="section stay-reviews-section">
        <div className="shell">
          <div className="stay-section-header">
            <p className="eyebrow">
              <span />
              Airbnb Guest Feedback
            </p>
            <h2>
              Loved by travellers from
              <br />
              <em>around the world.</em>
            </h2>
          </div>

          <div className="stay-reviews-grid">
            {guestReviews.map((review) => (
              <div className="stay-review-card" key={review.author}>
                <span className="stay-review-stars">{review.rating}</span>
                <blockquote className="stay-review-quote">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="stay-review-author">
                  <strong>{review.author}</strong>
                  <span>{review.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Direct Reservation CTA */}
      <section className="stay-direct-banner">
        <div className="shell stay-direct-banner-grid">
          <div className="stay-banner-copy">
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              <span style={{ background: "var(--gold)" }} />
              Reserve Your Stay
            </p>
            <h2>
              Ready to visit
              <br />
              <em>Green Village Homestay?</em>
            </h2>
            <p>
              Check availability directly on Airbnb or visit the dedicated Green
              Village website to plan your dates, meals, and private
              Anuradhapura tour with Gunarathna.
            </p>
          </div>

          <div className="stay-banner-actions-card">
            <a
              className="button button-gold stay-banner-btn"
              href={greenVillageHomestay.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Green Village Website
            </a>

            <a
              className="button button-dark stay-banner-btn"
              href={greenVillageHomestay.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on Airbnb (4.97 ★)
            </a>

            <a
              className="stay-banner-link"
              href={greenVillageHomestay.stayUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Room Amenities &amp; Guide at green-village-six.vercel.app
              →
            </a>
          </div>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
