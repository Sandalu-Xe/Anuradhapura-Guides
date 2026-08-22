/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors avoid a vinext RSC prefetch runtime failure. */
import Image from "next/image";
import { CtaStrip } from "./_components/cta-strip";

const pageDirectory = [
  {
    href: "/places",
    number: "01",
    title: "Places",
    copy: "Meet the sacred city one place at a time, from Ruwanweliseya to Mihintale and Wilpattu.",
    image: "/places/ruwanweliseya.jpg",
    imageAlt: "Ruwanweliseya stupa in Anuradhapura",
  },
  {
    href: "/stay",
    number: "02",
    title: "Stay",
    copy: "Choose a comfortable base for early heritage visits, slow evenings, or a wild northern escape.",
    image: "/places/isurumuniya.jpg",
    imageAlt: "Isurumuniya rock temple landscape",
  },
  {
    href: "/packages",
    number: "03",
    title: "Packages",
    copy: "Browse private tours by destination, duration, and travel style, then shape one around you.",
    image: "/places/mihintale.jpg",
    imageAlt: "View from Mihintale over the northern landscape",
  },
  {
    href: "/contact",
    number: "04",
    title: "Contact Us",
    copy: "Share your dates and interests. We will reply with a thoughtful route and a clear quote.",
    image: "/places/samadhi-buddha.jpg",
    imageAlt: "Samadhi Buddha statue in Anuradhapura",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <Image src="/places/ruwanweliseya.jpg" alt="Ruwanweliseya stupa at Anuradhapura" fill sizes="100vw" priority />
        <div className="home-hero-shade" />
        <div className="shell home-hero-content">
          <div className="home-hero-grid">
            <div className="hero-main-copy">
              <p className="eyebrow eyebrow-light"><span />Official guided tour · Anuradhapura Sacred City</p>
              <h1>See the whole<br /><em>Ancient City.</em></h1>
              <p className="hero-copy">Walk through Anuradhapura with an official local guide and discover the history, Buddhism, culture, and living traditions behind Sri Lanka&apos;s most sacred ancient capital.</p>
              <div className="hero-actions">
                <a className="button button-gold" href="/contact?journey=ancient-city-complete">Book the guided tour <span>↗</span></a>
                <a className="button button-outline" href="/places">See all sacred places</a>
              </div>
            </div>

            <aside className="hero-tour-card" aria-label="Places included in the Ancient City tour">
              <div className="hero-tour-card-heading">
                <span>01 · Complete private tour</span>
                <strong>Included in your day</strong>
              </div>
              <ul>
                <li><span>01</span>Jaya Sri Maha Bodhi</li>
                <li><span>02</span>Ruwanweliseya &amp; ancient stupas</li>
                <li><span>03</span>Jetavanaramaya &amp; museum</li>
                <li><span>04</span>Isurumuniya Temple</li>
                <li><span>05</span>Royal Pleasure Gardens</li>
                <li><span>06</span>Vessagiriya monastery</li>
              </ul>
              <p>Also includes the ancient Alms Hall, with stories of history, Buddhism, culture, and traditional life.</p>
            </aside>
          </div>
        </div>
        <div className="shell home-hero-foot">
          <div><strong>Complete</strong><span>Sacred city route</span></div>
          <div><strong>Official</strong><span>Local tour guide</span></div>
          <div><strong>Private</strong><span>At your own pace</span></div>
          <div className="hero-coordinate">08.3114° N · 80.4037° E</div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell intro-layout">
          <div>
            <p className="eyebrow"><span />A local perspective</p>
            <h2>See more than monuments.<br /><em>Understand a civilisation.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">Anuradhapura was Sri Lanka&apos;s political and religious capital for around 1,300 years. Its reservoirs, monasteries, and living sacred places still shape life today.</p>
            <p>We connect archaeology with human stories—kings and artisans, monks and pilgrims, water engineering and daily rituals—while making every visit comfortable for international travellers.</p>
            <aside className="guide-note">
              <span>How we guide</span>
              <p>“We begin by listening—what you are curious about, how you like to travel, and how much time you want to simply stand and take it all in.”</p>
              <strong>Your local Anuradhapura team</strong>
            </aside>
          </div>
        </div>
      </section>

      <section className="section page-directory" aria-labelledby="page-directory-title">
        <div className="shell">
          <div className="page-directory-heading">
            <div>
              <p className="eyebrow eyebrow-light"><span />Explore the website</p>
              <h2 id="page-directory-title">One clear page<br /><em>for every part of your journey.</em></h2>
            </div>
            <p>Choose where you want to begin. Each area now has its own dedicated page with focused information and actions.</p>
          </div>
          <div className="page-directory-grid">
            {pageDirectory.map((item) => (
              <a className="page-directory-card" href={item.href} key={item.href}>
                <div className="page-directory-image">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" />
                </div>
                <div className="page-directory-copy">
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  <strong aria-hidden="true">↗</strong>
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
