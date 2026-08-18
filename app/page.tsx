import BookingForm from "./booking-form";

const places = [
  {
    name: "Ruwanweliseya Stupa",
    image: "/places/ruwanweliseya.jpg",
    tag: "Sacred landmark",
    time: "45–60 min",
    intro: "A luminous white dome at the spiritual heart of the ancient city, built by King Dutugemunu in the 2nd century BCE.",
    detail: "Visit near sunrise or at dusk, when pilgrims circle the stupa with flowers and the great elephant wall catches the softer light.",
  },
  {
    name: "Jaya Sri Maha Bodhi",
    image: "/places/sri-maha-bodhi.jpg",
    tag: "Living heritage",
    time: "45 min",
    intro: "A sacred fig grown from a cutting of the Bodhi tree at Bodh Gaya and cared for here for more than two millennia.",
    detail: "Your guide explains the rituals, symbolism, and etiquette so you can experience this living pilgrimage site respectfully.",
  },
  {
    name: "Jetavanaramaya",
    image: "/places/jetavanaramaya.jpg",
    tag: "Ancient engineering",
    time: "45–60 min",
    intro: "A monumental 3rd-century brick stupa whose scale reveals the ambition and engineering knowledge of ancient Anuradhapura.",
    detail: "Walk the wide monastery grounds to understand how a vast scholarly community once lived around this extraordinary monument.",
  },
  {
    name: "Isurumuniya Rock Temple",
    image: "/places/isurumuniya.jpg",
    tag: "Art & architecture",
    time: "60 min",
    intro: "A compact rock temple beside Tissa Wewa, known for its carved elephants, tranquil pond, and celebrated Lovers sculpture.",
    detail: "Climb the granite outcrop for a breezy view, then look closely at sculptures that make ancient courtly life feel wonderfully human.",
  },
  {
    name: "Samadhi Buddha",
    image: "/places/samadhi-buddha.jpg",
    tag: "Quiet encounter",
    time: "30–40 min",
    intro: "A serene stone Buddha seated in deep meditation, admired for the balance and calm of early Sri Lankan sculpture.",
    detail: "The forested setting rewards a quiet pause. Morning visits are especially peaceful and allow time to notice the subtle expression.",
  },
  {
    name: "Mihintale",
    image: "/places/mihintale.jpg",
    tag: "Sunset pilgrimage",
    time: "2–3 hrs",
    intro: "The hill sanctuary where Sri Lankan tradition marks the meeting that introduced Buddhism to the island in the 3rd century BCE.",
    detail: "Climb stone steps past stupas, caves, and viewpoints. We pace the ascent and aim for golden hour over the northern plains.",
  },
  {
    name: "Wilpattu National Park",
    image: "/places/wilpattu.jpg",
    tag: "Wild north-west",
    time: "Half or full day",
    intro: "Sri Lanka's largest national park: a quiet mosaic of forest and natural lakes where leopards, sloth bears, deer, and birds roam.",
    detail: "Pair the sacred city with an early safari in a private jeep. Wildlife is never guaranteed—the sense of discovery is the luxury.",
  },
];

const reviews = [
  {
    quote: "The history never felt like a lecture. Every stop became a story, and we always had time to slow down and take it in.",
    name: "Elena & Mark",
    place: "United Kingdom",
  },
  {
    quote: "From the dress-code tips to finding the quietest time at the Bodhi tree, the local insight changed our entire experience.",
    name: "Sophie L.",
    place: "France",
  },
  {
    quote: "Mihintale at sunset and Wilpattu the next morning was the highlight of our Sri Lanka journey. Beautifully paced.",
    name: "Noah & Mia",
    place: "Australia",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Anuradhapura Guide home">
            <span className="brand-mark">AG</span>
            <span>Anuradhapura <em>Guide</em></span>
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#places">Guiding places</a>
            <a href="#packages">Packages</a>
            <a href="#stay">Stay</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta desktop-cta" href="#booking">Plan my tour</a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div>
              <a href="#places">Guiding places</a>
              <a href="#packages">Packages</a>
              <a href="#stay">Stay</a>
              <a href="#reviews">Reviews</a>
              <a href="#booking">Booking</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>

        <div className="hero-content shell">
          <div className="eyebrow"><span /> Private journeys through Sri Lanka&apos;s first kingdom</div>
          <h1>Walk into a story<br />2,000 years in the making.</h1>
          <p>
            Discover sacred Anuradhapura with a knowledgeable local guide—thoughtful,
            unhurried, and designed for curious travellers from around the world.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#booking">Create my journey <span>↗</span></a>
            <a className="button button-ghost" href="#places">Explore the sacred city</a>
          </div>
        </div>

        <div className="hero-foot shell">
          <div><strong>UNESCO</strong><span>World Heritage City</span></div>
          <div><strong>7+</strong><span>Signature places</span></div>
          <div><strong>Private</strong><span>English-speaking guide</span></div>
          <div className="scroll-cue">Scroll to discover <span>↓</span></div>
        </div>
      </section>

      <section className="intro section shell">
        <div className="section-label"><span>01</span> Your local perspective</div>
        <div className="intro-grid">
          <h2>See more than monuments.<br /><em>Understand a civilisation.</em></h2>
          <div>
            <p className="lead">Anuradhapura was Sri Lanka&apos;s political and religious capital for around 1,300 years. Its palaces, reservoirs, monasteries, and living sacred places still shape life today.</p>
            <p>We connect the archaeology with the human story—kings and artisans, monks and pilgrims, water engineering and daily rituals—while making every visit comfortable for international travellers.</p>
            <div className="mini-features">
              <span>English storytelling</span>
              <span>Flexible private pace</span>
              <span>Temple etiquette help</span>
              <span>Hotel pick-up available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="places-section section" id="places">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="section-label light"><span>02</span> Guiding places</div>
              <h2>Sacred, ancient,<br /><em>and beautifully alive.</em></h2>
            </div>
            <p>Seven essential encounters, shaped into one coherent journey. Choose your favourites or let us arrange the right sequence for the light, heat, and energy of the day.</p>
          </div>
          <div className="places-grid">
            {places.map((place, index) => (
              <article className={`place-card ${index === 0 || index === 5 ? "place-wide" : ""}`} key={place.name}>
                <img src={place.image} alt={`${place.name} in the Anuradhapura region`} />
                <div className="place-shade" />
                <div className="place-top"><span>{String(index + 1).padStart(2, "0")}</span><span>{place.tag}</span></div>
                <div className="place-content">
                  <div className="place-meta">Recommended time · {place.time}</div>
                  <h3>{place.name}</h3>
                  <p>{place.intro}</p>
                  <details>
                    <summary>Guide&apos;s note <span>+</span></summary>
                    <p>{place.detail}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ritual-section">
        <div className="shell ritual-grid">
          <div className="ritual-copy">
            <div className="section-label"><span>03</span> Visit with respect</div>
            <h2>A sacred city first.<br /><em>A destination second.</em></h2>
            <p>These are active places of worship. A little local guidance lets you feel welcome and move with confidence.</p>
            <ul>
              <li><span>01</span><div><strong>Dress thoughtfully</strong><p>Cover shoulders and knees; bring easy-to-remove shoes and socks for hot stone.</p></div></li>
              <li><span>02</span><div><strong>Follow the local rhythm</strong><p>Walk clockwise around stupas and avoid turning your back to a Buddha image for photos.</p></div></li>
              <li><span>03</span><div><strong>Travel for the weather</strong><p>Begin early, pause through the hottest hours, and return when the evening light softens.</p></div></li>
            </ul>
          </div>
          <div className="ritual-image">
            <img src="/places/sri-maha-bodhi.jpg" alt="Entrance to the sacred Jaya Sri Maha Bodhi" />
            <div className="image-note"><span>Local note</span><p>White is customary but not required. Modest, light-coloured clothing is always a considerate choice.</p></div>
          </div>
        </div>
      </section>

      <section className="packages section shell" id="packages">
        <div className="section-head dark-head">
          <div>
            <div className="section-label"><span>04</span> Private packages</div>
            <h2>Choose your pace.<br /><em>We shape the details.</em></h2>
          </div>
          <p>All itineraries are private and can be adjusted around your arrival, interests, mobility, and onward journey.</p>
        </div>
        <div className="package-grid">
          <article className="package-card">
            <div className="package-number">01 / Half day</div>
            <h3>Sacred City<br />Essentials</h3>
            <p>A focused introduction for travellers with limited time.</p>
            <ul><li>3–4 signature sacred sites</li><li>Private English-speaking guide</li><li>Hotel pick-up in Anuradhapura</li><li>Water & temple etiquette briefing</li></ul>
            <div className="package-price"><span>From</span><strong>US$45</strong><span>per tour</span></div>
            <a href="#booking">Ask about this journey <span>↗</span></a>
          </article>
          <article className="package-card featured">
            <div className="most-loved">Most loved</div>
            <div className="package-number">02 / Full day</div>
            <h3>Ancient City<br />Unhurried</h3>
            <p>The complete heritage day, paced around the heat and light.</p>
            <ul><li>Ruwanweliseya, Bodhi tree & Jetavana</li><li>Isurumuniya and Samadhi Buddha</li><li>Local lunch recommendations</li><li>Mihintale sunset option</li></ul>
            <div className="package-price"><span>From</span><strong>US$85</strong><span>per tour</span></div>
            <a href="#booking">Ask about this journey <span>↗</span></a>
          </article>
          <article className="package-card">
            <div className="package-number">03 / Two days</div>
            <h3>Heritage &<br />Wild North</h3>
            <p>Pair the sacred city with Wilpattu&apos;s quieter wilderness.</p>
            <ul><li>Full Anuradhapura heritage journey</li><li>Private Wilpattu safari jeep</li><li>Sunrise or sunset planning</li><li>Stay recommendations included</li></ul>
            <div className="package-price"><span>From</span><strong>US$190</strong><span>per tour</span></div>
            <a href="#booking">Ask about this journey <span>↗</span></a>
          </article>
        </div>
        <p className="price-note">Indicative planning prices only; final quote depends on group size, transport, entry tickets, and safari availability.</p>
      </section>

      <section className="stay-section" id="stay">
        <div className="shell stay-grid">
          <div className="stay-visual">
            <img src="/places/mihintale.jpg" alt="View across the green landscape at Mihintale" />
            <div className="stay-badge"><strong>Stay</strong><span>closer to the story</span></div>
          </div>
          <div className="stay-copy">
            <div className="section-label light"><span>05</span> Where to stay</div>
            <h2>Sleep well.<br /><em>Start early.</em></h2>
            <p>We help international travellers choose the right base—not the hotel with the loudest listing, but the stay that fits the journey.</p>
            <div className="stay-list">
              <div><span>01</span><div><h3>Heritage comfort</h3><p>Full-service hotels close to the sacred city, ideal for a smooth first visit.</p></div></div>
              <div><span>02</span><div><h3>Boutique calm</h3><p>Small, design-led stays with thoughtful hosts and a quieter atmosphere.</p></div></div>
              <div><span>03</span><div><h3>Wild-edge retreat</h3><p>Nature lodges toward Wilpattu for dawn safaris and star-filled evenings.</p></div></div>
            </div>
            <a className="text-link" href="#booking">Ask for a stay recommendation <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="shell">
          <div className="reviews-title">
            <div className="section-label"><span>06</span> Traveller stories</div>
            <h2>The part of Sri Lanka<br /><em>they kept talking about.</em></h2>
            <div className="rating"><strong>4.9</strong><span>★★★★★</span><small>Review section preview</small></div>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <figure key={review.name}>
                <span className="quote-mark">“</span>
                <blockquote>{review.quote}</blockquote>
                <figcaption><strong>{review.name}</strong><span>{review.place}</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="preview-note">Sample review copy for layout preview. Replace with verified Google or Tripadvisor reviews before launch.</p>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="shell booking-grid">
          <div className="booking-copy">
            <div className="section-label light"><span>07</span> Start planning</div>
            <h2>Your dates.<br />Your interests.<br /><em>Your journey.</em></h2>
            <p>Tell us the essentials. We&apos;ll reply with a clear plan, the right pace, and a transparent quote.</p>
            <div className="booking-promises">
              <span>✓ No booking fee</span>
              <span>✓ Flexible itinerary</span>
              <span>✓ Clear USD quote</span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-top">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">AG</span>
              <span>Anuradhapura <em>Guide</em></span>
            </a>
            <p>Private heritage journeys for curious travellers in Sri Lanka&apos;s ancient north.</p>
          </div>
          <div className="footer-links"><span>Explore</span><a href="#places">Guiding places</a><a href="#packages">Packages</a><a href="#stay">Stay</a><a href="#reviews">Reviews</a></div>
          <div className="footer-links"><span>Contact</span><a href="#booking">Booking enquiry</a><a href="mailto:hello@your-domain.com">hello@your-domain.com</a><p>Anuradhapura, Sri Lanka</p></div>
          <div className="footer-cta"><span>Ready when you are</span><h3>Let&apos;s make your ancient city visit count.</h3><a className="button button-gold" href="#booking">Plan my tour <span>↗</span></a></div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Anuradhapura Guide</span>
          <span>Made for international travellers</span>
          <details><summary>Photography credits</summary><p>Wikimedia Commons, Sri Lanka Museum Directory, Travel Map Sri Lanka, Mountain Kingdoms, and Travel Rebels.</p></details>
        </div>
      </footer>
    </main>
  );
}
