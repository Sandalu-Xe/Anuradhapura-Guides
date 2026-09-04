import Image from "next/image";
import { CtaStrip } from "./_components/cta-strip";
import { reviews } from "./_data/site";

const sacredPlacesList = [
  {
    number: "01",
    name: "Ruwanweli Seya",
    subhead: "The Great White Dome of King Dutugemunu · 2nd Century BCE",
    image: "/places/ruwanweliseya.jpg",
    alt: "Ruwanweliseya stupa dome in Anuradhapura",
    story: "One of the most sacred stupas in Sri Lanka, built by King Dutugemunu in the 2nd century BCE. It is a massive white dagoba (stupa) with an elephant wall around its base, believed to enshrine relics of the Buddha.",
    localNote: "Walking barefoot clockwise on the sun-warmed stone terrace while pilgrims chant in unison is an unforgettable memory.",
  },
  {
    number: "02",
    name: "Isurumuniya Rock Temple",
    subhead: "Granite Cliff Sanctuary & Famous Lovers Relief · 3rd Century BCE",
    image: "/places/isurumuniya.jpg",
    alt: "Isurumuniya rock temple and pond in Anuradhapura",
    story: "A rock temple carved into granite, famous for its stone carvings, especially the 'Isurumuniya Lovers' carving. It was built during the reign of King Devanampiya Tissa in the 3rd century BCE, near a small pond and rock formations.",
    localNote: "Climb the gentle rock steps to the upper terrace for a panoramic view across the water and coconut palms.",
  },
  {
    number: "03",
    name: "Jetavanaramaya Stupa",
    subhead: "Ancient Engineering Marvel & Massive Brick Stupa · 3rd Century CE",
    image: "/places/jetavanaramaya.jpg",
    alt: "Jetavanaramaya brick stupa in Anuradhapura",
    story: "Once one of the tallest structures in the ancient world, this massive brick stupa was built by King Mahasena in the 3rd century CE. It is one of the largest brick structures on Earth.",
    localNote: "I will explain how ancient engineers designed foundations capable of bearing this colossal brick weight on sandy soil.",
  },
  {
    number: "04",
    name: "Jaya Sri Maha Bodhi",
    subhead: "The World's Oldest Documented Tree · Planted 288 BCE",
    image: "/places/sri-maha-bodhi.jpg",
    alt: "Sacred Jaya Sri Maha Bodhi tree in Anuradhapura",
    story: "A sacred fig tree grown from a cutting of the original Bodhi tree in Bodh Gaya, India, under which the Buddha attained enlightenment. Planted in 288 BCE, it is considered the oldest documented tree in the world with a known planting date.",
    localNote: "We arrive during the gentle morning puja, when the air is cool and fragrant with jasmine flower offerings.",
  },
  {
    number: "05",
    name: "Abhayagiri Vihara",
    subhead: "Vast Monastic Complex, Twin Ponds & Moonstone · 1st Century BCE",
    image: "/places/abhayagiri.jpg",
    alt: "Abhayagiri Vihara stupa and monastic ruins in Anuradhapura",
    story: "A vast monastic complex and stupa, once the center of a major Buddhist sect. It includes ruins of monasteries, bathing ponds (like the famous twin ponds, Kuttam Pokuna), and a moonstone carving considered one of the finest in the country.",
    localNote: "Discover the extraordinary engineering of the Kuttam Pokuna filter system and the supreme artistry of the Queen's Palace moonstone.",
  },
  {
    number: "06",
    name: "Thuparamaya Stupa",
    subhead: "First Stupa Built in Sri Lanka · 3rd Century BCE",
    image: "/places/thuparamaya.jpg",
    alt: "Thuparamaya stupa with concentric stone pillars in Anuradhapura",
    story: "Believed to be the first stupa built in Sri Lanka, enshrining the collarbone relic of the Buddha, dating back to the 3rd century BCE.",
    localNote: "Notice the graceful concentric circles of slender stone pillars that once supported an ancient wooden domed vatadage roof.",
  },
  {
    number: "07",
    name: "Lankarama Stupa",
    subhead: "Ancient Vatadage with Concentric Stone Pillars · 1st Century BCE",
    image: "/places/lankarama.jpg",
    alt: "Lankarama stupa on circular stone terrace in Anuradhapura",
    story: "A smaller stupa with rows of stone pillars surrounding it, believed to have once supported a roof structure (vatadage).",
    localNote: "A remarkably peaceful sanctuary away from heavy tourist crowds, showcasing ancient circular architectural harmony.",
  },
];

const guideHighlights = [
  {
    title: "Living Buddhist Heritage",
    copy: "Understand temple etiquette, the spiritual meaning of stupa circumambulation, and why thousands of local pilgrims still come in white every single day.",
  },
  {
    title: "Kings, Queens & Chronicles",
    copy: "Discover 1,300 years of royal chronicles (Mahavamsa), ancient engineering marvels, foreign trade connections, and battlefield legends.",
  },
  {
    title: "Art, Architecture & Symbolism",
    copy: "Learn how to read moonstones (Sandakada Pahana), guard stones (Muragala), ancient water conduits, and intricate stone carvings.",
  },
  {
    title: "Thoughtfully Paced for You",
    copy: "Private, comfortable travel scheduled around morning and evening light to avoid the midday heat on sacred barefoot stone terraces.",
  },
];

const pageDirectory = [
  {
    href: "/places",
    number: "01",
    title: "Places",
    copy: "Explore detailed historical guides for Ruwanweliseya, Sri Maha Bodhi, Mihintale, and Wilpattu.",
    image: "/places/ruwanweliseya.jpg",
    imageAlt: "Ruwanweliseya stupa in Anuradhapura",
  },
  {
    href: "/stay",
    number: "02",
    title: "Stay & Green Village",
    copy: "Discover Green Village—our peaceful family homestay—alongside handpicked boutique bases.",
    image: "/green-village/homestay-garden.avif",
    imageAlt: "Green Village homestay garden in Anuradhapura",
  },
  {
    href: "/packages",
    number: "03",
    title: "Packages",
    copy: "Carefully designed private tour itineraries by duration, travel pace, and personal interest.",
    image: "/places/mihintale.jpg",
    imageAlt: "View from Mihintale over the northern landscape",
  },
  {
    href: "/contact",
    number: "04",
    title: "Contact Us",
    copy: "Send your travel dates and questions. I will reply directly with personalized advice and clear quotes.",
    image: "/places/samadhi-buddha.jpg",
    imageAlt: "Samadhi Buddha statue in Anuradhapura",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* 1. Clear, focused introduction */}
      <section className="home-hero">
        <Image src="/places/ruwanweliseya.jpg" alt="Ruwanweliseya stupa at Anuradhapura" fill sizes="100vw" priority />
        <div className="home-hero-shade" />

        <div className="shell home-hero-content hero-centered">
          <div className="hero-story-col">
            <p className="eyebrow eyebrow-light hero-eyebrow-center">
              <span className="eyebrow-line" />Official Local Guide · Private Tours<span className="eyebrow-line" />
            </p>

            <h1 className="hero-h1-center">
              Discover <span className="hero-word-ancient">ancient</span><br />
              <em>Anuradhapura.</em>
            </h1>

            <p className="hero-human-lead hero-lead-center">
              Walk through Sri Lanka&apos;s sacred first capital at an unhurried pace.<br className="hero-br" />
              I&apos;ll bring 2,500 years of history, Buddhism, culture, and living traditions clearly to life.
            </p>

            <div className="hero-actions hero-actions-center">
              <a className="button button-gold" href="/contact?journey=ancient-anuradhapura">
                Plan your private tour <span>↗</span>
              </a>
              <a className="hero-text-link" href="#tour-overview">
                See what is included <span>↓</span>
              </a>
            </div>

            <div className="hero-trust-line hero-trust-center" aria-label="Tour highlights">
              <span>Official local guide</span>
              <span>Private pace</span>
              <span>English speaking</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span /> Scroll to explore
        </div>
      </section>

      {/* 2. A scannable overview before the longer story */}
      <section id="tour-overview" className="tour-overview-section">
        <div className="shell tour-overview-heading">
          <div>
            <p className="eyebrow"><span />Your Ancient City tour</p>
            <h2>One thoughtful day.<br /><em>Seven remarkable places.</em></h2>
          </div>
          <div className="tour-overview-intro">
            <p>A complete private route through Anuradhapura&apos;s sacred monuments, royal monasteries, rock temples, and ancient stupas.</p>
            <a href="#sacred-itinerary">Explore every stop <span>↓</span></a>
          </div>
        </div>

        <ol className="shell tour-overview-list">
          {sacredPlacesList.map((place) => (
            <li key={place.number}>
              <a href={`#place-${place.number}`}>
                <span>{place.number}</span>
                <strong>{place.name}</strong>
                <small>{place.subhead.split("·")[0]}</small>
                <b aria-hidden="true">↘</b>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. Guide's Personal Welcome & Philosophy */}
      <section className="section guide-welcome-section">
        <div className="shell welcome-grid">
          <div>
            <p className="eyebrow"><span />A Personal Word From Your Guide</p>
            <h2>“I will share with you the living soul of our ancient capital.”</h2>
          </div>
          <div className="welcome-narrative">
            <p className="welcome-lead">
              When you stand before the towering white dome of Ruwanweliseya or listen to the prayer flags whispering beneath the sacred Bodhi tree, you are witnessing an unbroken tradition that has sustained our people for over twenty-three centuries.
            </p>
            <p>
              As an official licensed guide born and raised in this heritage landscape, my goal is to connect the archaeology with human stories: the devotion of kings and queens, the genius of ancient hydraulic masters, the philosophy of Theravada Buddhism, and the everyday customs that make Sri Lanka so warm and welcoming.
            </p>
          </div>
        </div>

        <div className="shell guide-highlights-grid">
          {guideHighlights.map((item, idx) => (
            <div className="guide-highlight-card" key={idx}>
              <span className="highlight-index">0{idx + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Detailed 7 Sacred Places Itinerary */}
      <section id="sacred-itinerary" className="section sacred-itinerary-section">
        <div className="shell">
          <div className="itinerary-header">
            <div>
              <p className="eyebrow eyebrow-light"><span />The Complete Guided Route</p>
              <h2>The 7 Sacred Places<br /><em>Included in Your Day</em></h2>
            </div>
            <p className="itinerary-intro-copy">
              Every stop on this tour has been chosen to give you a complete, balanced understanding of Anuradhapura—including Ruwanweli Seya, Isurumuniya, Jetavanaramaya, Jaya Sri Maha Bodhi, Abhayagiri Vihara, Thuparamaya, and Lankarama.
            </p>
          </div>

          <div className="editorial-places-grid">
            {sacredPlacesList.map((place) => (
              <article id={`place-${place.number}`} className="editorial-place-card" key={place.number}>
                <div className="place-image-frame">
                  <Image src={place.image} alt={place.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
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
              <p>Private full-day or half-day tours shaped comfortably around your dates, pace, and interests.</p>
            </div>
            <a className="button button-gold" href="/contact?journey=ancient-anuradhapura">
              Inquire about your tour dates <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Genuine Guest Experiences */}
      <section className="section reviews-section">
        <div className="shell">
          <div className="section-head-simple">
            <p className="eyebrow"><span />Traveller Stories</p>
            <h2>What travellers say about<br /><em>our private journeys.</em></h2>
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
      <section className="section page-directory" aria-labelledby="page-directory-title">
        <div className="shell">
          <div className="page-directory-heading">
            <div>
              <p className="eyebrow eyebrow-light"><span />Explore More</p>
              <h2 id="page-directory-title">Plan every part<br /><em>of your visit.</em></h2>
            </div>
            <p>From sacred monuments to recommended boutique stays and northern wilderness journeys.</p>
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
