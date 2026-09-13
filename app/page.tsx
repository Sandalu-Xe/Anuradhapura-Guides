import Image from "next/image";
import { HeroPhoto } from "./_components/hero-photo";
import { GuideHighlights } from "./_components/guide-highlights";
import { CtaStrip } from "./_components/cta-strip";
import { reviews } from "./_data/site";

import {
  sacredPlacesList,
  destinationOverview,
  guideHighlights,
  pageDirectory,
} from "./_data/home";

export default function HomePage() {
  return (
    <main>
      {/* 1. Premium, editorial introduction */}
      <section className="home-hero premium-home-hero">
        <div className="shell home-hero-content premium-hero-grid">
          <div className="hero-story-col">
            <p className="eyebrow premium-hero-eyebrow">
              <span />
              Private tours · Anuradhapura
            </p>

            <h1>
              Ancient stories. <br />
              <em>Beautifully guided.</em>
            </h1>

            <p className="hero-human-lead">
              Explore Sri Lanka&apos;s sacred first capital with an official
              local guide. I&apos;ll bring 2,500 years of history, Buddhism,
              culture, and living traditions to life—at a pace that feels
              entirely your own.
            </p>

            <dl
              className="hero-journey-details"
              aria-label="Your journey at a glance"
            >
              <div>
                <dt>The experience</dt>
                <dd>Sacred city &amp; local stories</dd>
              </div>
              <div>
                <dt>Your pace</dt>
                <dd>Private &amp; unhurried</dd>
              </div>
              <div>
                <dt>Your guide</dt>
                <dd>Local, English-speaking</dd>
              </div>
            </dl>

            <div className="hero-actions">
              <a
                className="button button-gold"
                href="/contact?journey=ancient-anuradhapura"
              >
                Plan your private tour
              </a>
              <a className="hero-text-link" href="#tour-overview">
                See what is included <span>↓</span>
              </a>
            </div>

            <div className="hero-trust-line" aria-label="Tour highlights">
              <span>Official local guide</span>
              <span>Private pace</span>
              <span>English speaking</span>
            </div>
          </div>

          <HeroPhoto />
        </div>
      </section>

      <section
        className="experience-collage"
        aria-label="Anuradhapura journey preview"
      >
        <div className="shell experience-collage-grid">
          <figure className="experience-collage-card collage-sacred">
            <Image
              src="/places/sri-maha-bodhi.jpg"
              alt="Jaya Sri Maha Bodhi sacred tree"
              fill
              sizes="(max-width: 720px) 88vw, 32vw"
            />
            <figcaption>
              <span>01</span>Living heritage
            </figcaption>
          </figure>
          <figure className="experience-collage-card collage-mihintale">
            <Image
              src="/places/mihintale.jpg"
              alt="The ancient mountain of Mihintale"
              fill
              sizes="(max-width: 720px) 88vw, 38vw"
            />
            <figcaption>
              <span>02</span>Sacred horizons
            </figcaption>
          </figure>
          <figure className="experience-collage-card collage-wild">
            <Image
              src="/places/wilpattu.jpg"
              alt="Wild landscape in Wilpattu National Park"
              fill
              sizes="(max-width: 720px) 88vw, 25vw"
            />
            <figcaption>
              <span>03</span>Untamed north
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. Three distinct destination experiences */}
      <section id="tour-overview" className="tour-overview-section">
        <div className="shell tour-overview-heading">
          <div>
            <p className="eyebrow">
              <span />
              Choose your experience
            </p>
            <h2>
              Three remarkable sides
              <br />
              <em>of the ancient north.</em>
            </h2>
          </div>
          <div className="tour-overview-intro">
            <p>
              Begin with Anuradhapura&apos;s sacred city, climb the holy
              mountain of Mihintale, or follow the forest tracks of Wilpattu.
            </p>
            <a href="/packages">View tour packages</a>
          </div>
        </div>

        <div className="shell destination-overview-grid">
          {destinationOverview.map((destination) => (
            <article
              className="destination-overview-card"
              key={destination.number}
            >
              <Image
                src={destination.image}
                alt={destination.alt}
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
              />
              <div className="destination-card-shade" />
              <div className="destination-card-content">
                <div className="destination-card-topline">
                  <span>{destination.number}</span>
                  <small>{destination.eyebrow}</small>
                </div>
                <div className="destination-card-body">
                  <h3>{destination.title}</h3>
                  <p>{destination.copy}</p>
                  <div
                    className="destination-highlights"
                    aria-label={`${destination.title} highlights`}
                  >
                    {destination.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                  <a href={destination.href}>{destination.action}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Guide's Personal Welcome & Philosophy */}
      <section className="section guide-welcome-section">
        <div className="shell welcome-grid">
          <div>
            <p className="eyebrow">
              <span />A Personal Word From Your Guide
            </p>
            <h2>
              “I will share with you the living soul of our ancient capital.”
            </h2>
          </div>
          <div className="welcome-narrative">
            <p className="welcome-lead">
              When you stand before the towering white dome of Ruwanweliseya or
              listen to the prayer flags whispering beneath the sacred Bodhi
              tree, you are witnessing an unbroken tradition that has sustained
              our people for over twenty-three centuries.
            </p>
            <p>
              As an official licensed guide born and raised in this heritage
              landscape, my goal is to connect the archaeology with human
              stories: the devotion of kings and queens, the genius of ancient
              hydraulic masters, the philosophy of Theravada Buddhism, and the
              everyday customs that make Sri Lanka so warm and welcoming.
            </p>
          </div>
        </div>

        <GuideHighlights items={guideHighlights} />
      </section>

      {/* 4. Detailed 7 Sacred Places Itinerary */}
      <section
        id="sacred-itinerary"
        className="section sacred-itinerary-section"
      >
        <div className="shell">
          <div className="itinerary-header">
            <div>
              <p className="eyebrow eyebrow-light">
                <span />
                The Complete Guided Route
              </p>
              <h2>
                The 7 Sacred Places
                <br />
                <em>Included in Your Day</em>
              </h2>
            </div>
            <p className="itinerary-intro-copy">
              Every stop on this tour has been chosen to give you a complete,
              balanced understanding of Anuradhapura—including Ruwanweli Seya,
              Isurumuniya, Jetavanaramaya, Jaya Sri Maha Bodhi, Abhayagiri
              Vihara, Thuparamaya, and Lankarama.
            </p>
          </div>

          <div className="editorial-places-grid">
            {sacredPlacesList.map((place) => (
              <article
                id={`place-${place.number}`}
                className="editorial-place-card"
                key={place.number}
              >
                <div className="place-image-frame">
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="place-badge-num">{place.number}</span>
                </div>
                <div className="place-details">
                  <span className="place-subhead">{place.subhead}</span>
                  <h3>{place.name}</h3>
                  <p className="place-story">{place.story}</p>
                  <div className="place-local-note">
                    <strong>Guide&apos;s Insight:</strong>
                    <span>“{place.localNote}”</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="itinerary-cta-banner">
            <div>
              <h3>Ready to experience the sacred city?</h3>
              <p>
                Private full-day or half-day tours shaped comfortably around
                your dates, pace, and interests.
              </p>
            </div>
            <a
              className="button button-gold"
              href="/contact?journey=ancient-anuradhapura"
            >
              Inquire about your tour dates
            </a>
          </div>
        </div>
      </section>

      {/* 5. Genuine Guest Experiences */}
      <section className="section reviews-section">
        <div className="shell">
          <div className="section-head-simple">
            <p className="eyebrow">
              <span />
              Traveller Stories
            </p>
            <h2>
              What travellers say about
              <br />
              <em>our private journeys.</em>
            </h2>
          </div>

          <div className="reviews-editorial-grid">
            {reviews.map((rev, idx) => (
              <figure className="review-card-item" key={idx}>
                <span className="review-quote-mark">“</span>
                <blockquote>{rev.quote}</blockquote>
                <figcaption>
                  <strong>{rev.name}</strong>
                  <span>{rev.place}</span>
                  <small>{rev.journey}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Website Directory */}
      <section
        className="section page-directory"
        aria-labelledby="page-directory-title"
      >
        <div className="shell">
          <div className="page-directory-heading">
            <div>
              <p className="eyebrow eyebrow-light">
                <span />
                Explore More
              </p>
              <h2 id="page-directory-title">
                Plan every part
                <br />
                <em>of your visit.</em>
              </h2>
            </div>
            <p>
              From sacred monuments to recommended boutique stays and northern
              wilderness journeys.
            </p>
          </div>
          <div className="page-directory-grid">
            {pageDirectory.map((item) => (
              <a
                className="page-directory-card"
                href={item.href}
                key={item.href}
              >
                <div className="page-directory-image">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                  />
                </div>
                <div className="page-directory-copy">
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <strong aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
