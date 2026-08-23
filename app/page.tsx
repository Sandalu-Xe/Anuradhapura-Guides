import Image from "next/image";
import { CtaStrip } from "./_components/cta-strip";
import { reviews } from "./_data/site";

const sacredPlacesList = [
  {
    number: "01",
    name: "Jaya Sri Maha Bodhi",
    subhead: "The World's Oldest Documented Tree · Planted 288 BCE",
    image: "/places/sri-maha-bodhi.jpg",
    alt: "Sacred Jaya Sri Maha Bodhi tree in Anuradhapura",
    story: "A sacred sapling brought from the original Enlightenment tree in Bodh Gaya by Sanghamitta Theri. It has been tended with unbroken reverence for over 2,300 years.",
    localNote: "We arrive during the gentle morning puja, when the air is cool and fragrant with jasmine flower offerings.",
  },
  {
    number: "02",
    name: "Ruwanweli Seya & Sacred Stupas",
    subhead: "The Great White Dome of King Dutugemunu · 140 BCE",
    image: "/places/ruwanweliseya.jpg",
    alt: "Ruwanweliseya stupa dome in Anuradhapura",
    story: "Enshrining the largest collection of Buddha relics in Sri Lanka, surrounded by a wall of 344 sculpted elephants. We also explore Thuparamaya, the island's first stupa, and Mirisawetiya.",
    localNote: "Walking barefoot clockwise on the sun-warmed stone terrace while pilgrims chant in unison is an unforgettable memory.",
  },
  {
    number: "03",
    name: "Jetavanaramaya & Museum",
    subhead: "Ancient Engineering Marvel & Monastic Relics · 3rd Century CE",
    image: "/places/jetavanaramaya.jpg",
    alt: "Jetavanaramaya brick stupa and museum",
    story: "Once the third tallest structure in the ancient world, containing over 90 million baked clay bricks. The on-site museum reveals ancient Roman coins, intaglios, and monastery treasures.",
    localNote: "I will explain how ancient engineers designed foundations capable of bearing this colossal brick weight on sandy soil.",
  },
  {
    number: "04",
    name: "Isurumuniya Rock Temple",
    subhead: "Granite Cliff Sanctuary & Famous Lovers Relief · 3rd Century BCE",
    image: "/places/isurumuniya.jpg",
    alt: "Isurumuniya rock temple and pond in Anuradhapura",
    story: "Perched on a granite cliff beside Tissa Wewa reservoir, famous for exquisite 5th-century stone carvings including the celebrated 'Isurumuniya Lovers' and royal court reliefs.",
    localNote: "Climb the gentle rock steps to the upper terrace for a panoramic view across the water and coconut palms.",
  },
  {
    number: "05",
    name: "Royal Pleasure Gardens & Alms Hall",
    subhead: "Ranmasu Uyana Water Pavilions & Mahapali Rice Canoe",
    image: "/places/royal-gardens.jpg",
    alt: "Ranmasu Uyana Royal Pleasure Gardens ancient baths",
    story: "Walk through the kings' recreational park featuring sophisticated gravity-fed stone swimming pools, water conduits, and the famous stargate petroglyph, alongside the vast monolithic monk feeding hall.",
    localNote: "You will discover how water was channeled from Tissa Wewa reservoir straight into the royal stone baths.",
  },
  {
    number: "06",
    name: "Vessagiriya Forest Monastery",
    subhead: "Secluded Rock Hermitages & Pre-Christian Inscriptions",
    image: "/places/vessagiriya.jpg",
    alt: "Vessagiriya ancient forest rock monastery",
    story: "A tranquil sanctuary among massive natural boulders where 500 arhat monks lived in quiet meditation. Features ancient drip-ledge caves with early Brahmi rock inscriptions.",
    localNote: "A quiet, contemplative stop far from typical tourist crowds, where the natural forest breeze meets ancient history.",
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
    title: "Stay",
    copy: "Handpicked hotels and heritage villas ideal for dawn visits and peaceful evenings.",
    image: "/places/isurumuniya.jpg",
    imageAlt: "Isurumuniya rock temple landscape",
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

        <div className="shell home-hero-content">
          <div className="hero-story-col">
            <p className="eyebrow eyebrow-light">
              <span />Private tours with an official local guide
            </p>

            <h1>
              Discover ancient<br />
              <em>Anuradhapura.</em>
            </h1>

            <p className="hero-human-lead">
              Walk through Sri Lanka&apos;s sacred first capital at an unhurried pace. I&apos;ll bring 2,500 years of history, Buddhism, culture, and living traditions clearly to life.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href="/contact?journey=ancient-city-complete">
                Plan your private tour <span>↗</span>
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
            <h2>One thoughtful day.<br /><em>Six remarkable places.</em></h2>
          </div>
          <div className="tour-overview-intro">
            <p>A complete private route through Anuradhapura&apos;s sacred monuments, royal landscapes, museum, and peaceful monastery ruins.</p>
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

      {/* 4. Detailed 6 Sacred Places Itinerary */}
      <section id="sacred-itinerary" className="section sacred-itinerary-section">
        <div className="shell">
          <div className="itinerary-header">
            <div>
              <p className="eyebrow eyebrow-light"><span />The Complete Guided Route</p>
              <h2>The 6 Sacred Places<br /><em>Included in Your Day</em></h2>
            </div>
            <p className="itinerary-intro-copy">
              Every stop on this tour has been chosen to give you a complete, balanced understanding of Anuradhapura—from active pilgrimage hubs to peaceful forest hermitages and royal gardens.
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
            <a className="button button-gold" href="/contact?journey=ancient-city-complete">
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
