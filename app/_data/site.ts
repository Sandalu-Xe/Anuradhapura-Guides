export type Place = {
  slug: string;
  name: string;
  image: string;
  tag: string;
  time: string;
  era: string;
  intro: string;
  detail: string;
  highlight: string;
  tips: string[];
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/places", label: "Places" },
  { href: "/stay", label: "Stay" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact Us" },
];

export const greenVillageHomestay = {
  name: "Green Village Anuradhapura",
  tagline: "A peaceful family homestay & local gateway to the ancient capital",
  host: "Gunarathna (Local teacher & highest-reviewed Airbnb guide)",
  rating: "4.97",
  reviewsCount: "20+ years experience",
  websiteUrl: "https://green-village-six.vercel.app/",
  stayUrl: "https://green-village-six.vercel.app/stay",
  airbnbUrl: "https://www.airbnb.com/rooms/13886001",
  location: "Thalawa, near Anuradhapura, Sri Lanka",
  description:
    "Rest in a private, air-conditioned guest room with your own bathroom, peaceful garden, and veranda. Join the family kitchen for authentic Sri Lankan home-cooked meals, and experience the sacred city with Gunarathna's personal guidance.",
  amenities: [
    "Up to 4 guests (2 beds)",
    "Private ensuite bathroom",
    "Air conditioning",
    "Serene garden & veranda",
    "Home-cooked traditional meals",
    "Free private parking",
  ],
};

export const places: Place[] = [
  {
    slug: "ruwanweliseya",
    name: "Ruwanweliseya Stupa",
    image: "/places/ruwanweliseya.jpg",
    tag: "Sacred Landmark · 2nd Century BCE",
    time: "45–60 min",
    era: "2nd century BCE (King Dutugemunu)",
    intro:
      "One of the most sacred stupas in Sri Lanka, built by King Dutugemunu in the 2nd century BCE. It's a massive white dagoba (stupa) with an elephant wall around its base, believed to enshrine relics of the Buddha.",
    detail:
      "Built by King Dutugemunu, Ruwanweliseya enshrines the largest collection of Buddha relics on the island. Surrounded by an iconic outer wall sculpted with 344 life-sized elephants standing shoulder to shoulder, it remains the spiritual center of ancient Anuradhapura.",
    highlight:
      "Walking the paved terrace barefoot as the great white dome rises above the elephant wall.",
    tips: [
      "Visit near sunrise or evening",
      "Circumambulate clockwise around the terrace",
      "Wear white or modest temple attire",
    ],
  },
  {
    slug: "jaya-sri-maha-bodhi",
    name: "Jaya Sri Maha Bodhi",
    image: "/places/sri-maha-bodhi.jpg",
    tag: "Sacred Bodhi Tree · Planted 288 BCE",
    time: "45 min",
    era: "Planted 288 BCE (Sanghamitta Theri)",
    intro:
      "A sacred fig tree grown from a cutting of the original Bodhi tree in Bodh Gaya, India, under which the Buddha attained enlightenment. Planted in 288 BCE, it's considered the oldest documented tree in the world with a known planting date.",
    detail:
      "Brought to Sri Lanka by Sanghamitta Theri, this revered tree has been guarded and tended unbroken for over 2,300 years. Enclosed on high tiered platforms with gilded railings, it forms a deeply moving atmosphere of flower offerings, chanting, and incense.",
    highlight:
      "The gentle morning puja and the rustle of sacred leaves beneath golden railings.",
    tips: [
      "Arrive early for the morning puja",
      "Remove headwear and footwear",
      "Keep voices low near worshippers",
    ],
  },
  {
    slug: "jetavanaramaya",
    name: "Jetavanaramaya Stupa",
    image: "/places/jetavanaramaya.jpg",
    tag: "Ancient Engineering · 3rd Century CE",
    time: "45–60 min",
    era: "3rd century CE (King Mahasena)",
    intro:
      "Once one of the tallest structures in the ancient world, this massive brick stupa was built by King Mahasena in the 3rd century CE. It's one of the largest brick structures on Earth.",
    detail:
      "Containing over 90 million baked clay bricks, Jetavanaramaya was once the third tallest monument in the ancient world after the Pyramids of Giza. It anchored a vast monastic university housing thousands of monks, with extensive ruins and an on-site museum.",
    highlight:
      "Standing at the base and taking in the immense engineering feat of 90+ million ancient bricks.",
    tips: [
      "Visit the on-site archaeological museum",
      "Bring a hat or umbrella for open grounds",
      "Examine the ancient brick masonry up close",
    ],
  },
  {
    slug: "isurumuniya",
    name: "Isurumuniya Rock Temple",
    image: "/places/isurumuniya.jpg",
    tag: "Rock Temple & Carvings · 3rd Century BCE",
    time: "45–60 min",
    era: "3rd century BCE (King Devanampiya Tissa)",
    intro:
      "A rock temple carved into granite, famous for its stone carvings, especially the 'Isurumuniya Lovers' carving. It was built during the reign of King Devanampiya Tissa in the 3rd century BCE, near a small pond and rock formations.",
    detail:
      "Built on granite cliffs beside Tissa Wewa reservoir, Isurumuniya houses iconic 5th-century Gupta-style stone carvings including the celebrated 'Isurumuniya Lovers' (Prince Saliya and Asokamala), elephant reliefs splashing by the lotus pond, and the Royal Family relief.",
    highlight:
      "The famous 'Isurumuniya Lovers' carving and the breezy view from the top of the rock over Tissa Wewa.",
    tips: [
      "Climb the gentle steps to the upper rock terrace",
      "Visit the small sculpture gallery museum",
      "Pair with views of Tissa Wewa reservoir",
    ],
  },
  {
    slug: "abhayagiri-vihara",
    name: "Abhayagiri Vihara",
    image: "/places/abhayagiri.jpg",
    tag: "Monastic Complex · 1st Century BCE",
    time: "60 min",
    era: "1st century BCE (King Valagamba)",
    intro:
      "A vast monastic complex and stupa, once the center of a major Buddhist sect. It includes ruins of monasteries, bathing ponds (like the famous twin ponds, Kuttam Pokuna), and a moonstone carving considered one of the finest in the country.",
    detail:
      "Abhayagiri was an international monastic university that once housed 5,000 monks from across Asia. Its sprawling park contains the colossal Abhayagiri Stupa, the exquisitely carved Sandakada Pahana (moonstone), the Samadhi Buddha, and the engineered stone bathing pools of Kuttam Pokuna.",
    highlight:
      "The intricate moonstone carving and the serene reflection of trees in the twin ponds of Kuttam Pokuna.",
    tips: [
      "See the masterpiece moonstone at the Queen's Palace",
      "Visit the Kuttam Pokuna twin ponds",
      "Explore the adjacent Samadhi Buddha statue",
    ],
  },
  {
    slug: "thuparamaya",
    name: "Thuparamaya Stupa",
    image: "/places/thuparamaya.jpg",
    tag: "First Stupa in Sri Lanka · 3rd Century BCE",
    time: "30–45 min",
    era: "3rd century BCE (King Devanampiya Tissa)",
    intro:
      "Believed to be the first stupa built in Sri Lanka, enshrining the collarbone relic of the Buddha, dating back to the 3rd century BCE.",
    detail:
      "Constructed soon after the arrival of Mahinda Thera, Thuparamaya is the oldest historical stupa on the island. It is framed by graceful concentric circles of slender, carved granite pillars that once supported a wooden dome known as a Vatadage.",
    highlight:
      "The concentric rings of slender stone pillars encircling the white bell-shaped stupa.",
    tips: [
      "Observe the curved stone pillar tops designed for ancient roof rafters",
      "Walk quietly along the circular stone terrace",
      "Quiet and peaceful throughout the afternoon",
    ],
  },
  {
    slug: "lankarama",
    name: "Lankarama Stupa",
    image: "/places/lankarama.jpg",
    tag: "Ancient Vatadage · 1st Century BCE",
    time: "30–40 min",
    era: "1st century BCE (King Valagamba)",
    intro:
      "A smaller stupa with rows of stone pillars surrounding it, believed to have once supported a roof structure (vatadage).",
    detail:
      "Built by King Valagamba in a secluded setting near Abhayagiri, Lankarama features a raised circular courtyard with elegant concentric stone pillars that held a protective circular roof structure over the stupa in ancient times.",
    highlight:
      "The circular symmetry of ancient carved stone monoliths standing on an elevated granite platform.",
    tips: [
      "Take time to view the stone steps and guard stones",
      "A peaceful spot away from large tour crowds",
      "Excellent morning photography light",
    ],
  },
  {
    slug: "mihintale",
    name: "Mihintale Sacred Hill",
    image: "/places/mihintale.jpg",
    tag: "Birthplace of Buddhism · 247 BCE",
    time: "2–3 hrs",
    era: "3rd century BCE (Monk Mahinda & King Devanampiya Tissa)",
    intro:
      "Considered the birthplace of Buddhism in Sri Lanka — this is where, in 247 BCE, the monk Mahinda (son of Indian emperor Ashoka) is said to have met King Devanampiya Tissa and introduced Buddhism to the island. It's a sacred hilltop complex reached by a long flight of ancient stone steps.",
    detail:
      "Features Ambasthala Dagoba (the small stupa marking where Mahinda and the King met), Mahaseya Dagoba (the largest stupa on the hill enshrining a hair relic of the Buddha), Aradhana Gala ('Meditation Rock' with sweeping sunset views), and Kaludiya Pokuna (a tranquil ancient rock-carved pond and monastery ruins at the base of the hill).",
    highlight:
      "Sunset from Aradhana Gala ('Meditation Rock') looking over the northern plains, and the tranquility of Kaludiya Pokuna.",
    tips: [
      "Climb Aradhana Gala for panoramic views",
      "Visit Ambasthala Dagoba & Mahaseya Dagoba",
      "Explore tranquil Kaludiya Pokuna at the base",
      "Carry water for the stone steps",
    ],
  },
  {
    slug: "wilpattu",
    name: "Wilpattu National Park",
    image: "/places/wilpattu.jpg",
    tag: "Wild North-West · Natural Villus",
    time: "8:30 AM to 2:30 PM (6 hrs)",
    era: "Natural Wilderness",
    intro:
      "Sri Lanka's largest national park, famous for its unique 'villus' — natural sand-rimmed lakes scattered through the dry-zone forest. It's one of the best places in the country to spot leopards in the wild, along with sloth bears, elephants, and abundant birdlife.",
    detail:
      "Wilpattu adds a wild counterpoint to the sacred city. A private 4x4 safari jeep follows forest tracks between natural villu lakes, with an experienced safari driver reading the landscape to track leopards, sloth bears, elephants, and endemic birds.",
    highlight:
      "The anticipation of approaching a natural sand-rimmed villu lake and spotting wildlife in their undisturbed habitat.",
    tips: [
      "Half-day tour scheduled from 8:30 AM to 2:30 PM",
      "Private 4x4 Safari Jeep available for $180",
      "Park entrance per person: $30",
    ],
  },
];

export const reviews = [
  {
    quote:
      "The history never felt like a lecture. Every stop became a story, and we always had time to slow down and take it in.",
    name: "Elena & Mark",
    place: "United Kingdom",
    journey: "Ancient Places Anuradhapura",
  },
  {
    quote:
      "From the dress-code tips to finding the quietest time at the Bodhi tree, the local insight changed our entire experience.",
    name: "Sophie L.",
    place: "France",
    journey: "Ancient Places Anuradhapura",
  },
  {
    quote:
      "Mihintale and Wilpattu safari with our guide was the highlight of our Sri Lanka journey. Beautifully paced.",
    name: "Noah & Mia",
    place: "Australia",
    journey: "Wilpattu Tourism Safari",
  },
  {
    quote:
      "We travelled with our parents and the day was adapted around them with care. We saw everything without feeling hurried.",
    name: "Priya S.",
    place: "Singapore",
    journey: "Ancient Place Mihintale",
  },
];

export function getPlace(slug: string) {
  return places.find((place) => place.slug === slug);
}
