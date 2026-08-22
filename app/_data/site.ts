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

export type TourPackage = {
  slug: string;
  number: string;
  duration: string;
  name: string;
  summary: string;
  price: string;
  featured?: boolean;
  includes: string[];
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/places", label: "Places" },
  { href: "/stay", label: "Stay" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact Us" },
];

export const places: Place[] = [
  {
    slug: "ruwanweliseya",
    name: "Ruwanweliseya Stupa",
    image: "/places/ruwanweliseya.jpg",
    tag: "Sacred landmark",
    time: "45–60 min",
    era: "2nd century BCE",
    intro:
      "A luminous white dome at the spiritual heart of the ancient city, built by King Dutugemunu.",
    detail:
      "Ruwanweliseya is more than a monument: it remains one of Sri Lanka's most active pilgrimage sites. Your guide connects its symbolism, royal history, elephant wall, and present-day rituals without rushing the experience.",
    highlight: "The stupa glowing above hundreds of evening oil lamps.",
    tips: ["Visit near sunrise or dusk", "Walk clockwise around the stupa", "Allow time to sit quietly after the circuit"],
  },
  {
    slug: "jaya-sri-maha-bodhi",
    name: "Jaya Sri Maha Bodhi",
    image: "/places/sri-maha-bodhi.jpg",
    tag: "Living heritage",
    time: "45 min",
    era: "Planted 288 BCE",
    intro:
      "A sacred fig grown from a cutting of the Bodhi tree at Bodh Gaya and cared for here for more than two millennia.",
    detail:
      "The revered tree sits within a living ritual landscape of flags, flowers, chanting, and family pilgrimage. We explain the etiquette and history before entering so the visit feels meaningful and respectful.",
    highlight: "The sound of prayers moving through the terraces beneath the tree.",
    tips: ["Wear clothing that covers shoulders and knees", "Keep voices low near worshippers", "Morning puja is especially atmospheric"],
  },
  {
    slug: "jetavanaramaya",
    name: "Jetavanaramaya",
    image: "/places/jetavanaramaya.jpg",
    tag: "Ancient engineering",
    time: "45–60 min",
    era: "3rd century CE",
    intro:
      "A monumental brick stupa whose scale reveals the ambition and engineering knowledge of ancient Anuradhapura.",
    detail:
      "Once among the tallest structures in the ancient world, Jetavanaramaya anchored a vast monastic university. The surrounding ruins reveal refectories, image houses, and the daily systems behind an extraordinary scholarly community.",
    highlight: "Seeing the brick dome rise from the broad monastery grounds.",
    tips: ["Bring sun protection", "Walk the wider monastic complex", "Best paired with nearby Samadhi Buddha"],
  },
  {
    slug: "isurumuniya",
    name: "Isurumuniya Rock Temple",
    image: "/places/isurumuniya.jpg",
    tag: "Art & architecture",
    time: "60 min",
    era: "3rd century BCE",
    intro:
      "A compact rock temple beside Tissa Wewa, known for carved elephants, a tranquil pond, and the celebrated Lovers sculpture.",
    detail:
      "Isurumuniya rewards close looking. Its museum and carvings make ancient courtly life feel human, while the granite outcrop offers a breezy view across the water and tree canopy.",
    highlight: "The playful elephant carvings emerging beside the temple pool.",
    tips: ["Climb the rock before the midday heat", "Visit the small sculpture museum", "Combine with a lakeside sunset"],
  },
  {
    slug: "samadhi-buddha",
    name: "Samadhi Buddha",
    image: "/places/samadhi-buddha.jpg",
    tag: "Quiet encounter",
    time: "30–40 min",
    era: "4th century CE",
    intro:
      "A serene stone Buddha seated in deep meditation, admired for the balance and calm of early Sri Lankan sculpture.",
    detail:
      "Set within the former Abhayagiri monastery, the sculpture changes subtly with the direction of light. This is a place for unhurried observation rather than a quick photograph.",
    highlight: "The sculpture's expression becoming softer as you change viewpoint.",
    tips: ["Morning is quietest", "Avoid posing with your back to the image", "Pause before moving to the next site"],
  },
  {
    slug: "mihintale",
    name: "Mihintale",
    image: "/places/mihintale.jpg",
    tag: "Hill pilgrimage",
    time: "2–3 hrs",
    era: "3rd century BCE",
    intro:
      "The hill sanctuary where Sri Lankan tradition marks the meeting that introduced Buddhism to the island.",
    detail:
      "Stone stairways link ancient hospitals, caves, stupas, and high viewpoints. We pace the ascent around your comfort and explain why this landscape became a defining place in Sri Lankan history.",
    highlight: "Golden-hour views across the northern plains from the summit.",
    tips: ["Start late afternoon for softer light", "Carry water", "Wear secure shoes for the summit rock"],
  },
  {
    slug: "wilpattu",
    name: "Wilpattu National Park",
    image: "/places/wilpattu.jpg",
    tag: "Wild north-west",
    time: "Half or full day",
    era: "Natural landscape",
    intro:
      "Sri Lanka's largest national park: a quiet mosaic of forest and natural lakes where leopards, sloth bears, deer, and birds roam.",
    detail:
      "Wilpattu adds a wild counterpoint to the sacred city. A private jeep follows forest tracks between natural villu lakes, with an experienced safari driver reading the landscape for signs of wildlife.",
    highlight: "The anticipation of approaching a forest lake at first light.",
    tips: ["Choose a dawn departure", "Wildlife sightings are never guaranteed", "A full day offers the quietest pace"],
  },
];

export const packages: TourPackage[] = [
  {
    slug: "sacred-city-essentials",
    number: "01",
    duration: "Half day",
    name: "Sacred City Essentials",
    summary: "A focused introduction for travellers with limited time.",
    price: "US$45",
    includes: ["3–4 signature sacred sites", "Private English-speaking guide", "Hotel pick-up in Anuradhapura", "Water and etiquette briefing"],
  },
  {
    slug: "ancient-city-unhurried",
    number: "02",
    duration: "Full day",
    name: "Ancient City Unhurried",
    summary: "The complete heritage day, thoughtfully paced around heat and light.",
    price: "US$85",
    featured: true,
    includes: ["Ruwanweliseya, Bodhi tree and Jetavana", "Isurumuniya and Samadhi Buddha", "Local lunch recommendations", "Mihintale sunset option"],
  },
  {
    slug: "heritage-wild-north",
    number: "03",
    duration: "Two days",
    name: "Heritage & Wild North",
    summary: "Pair the sacred city with Wilpattu's quieter wilderness.",
    price: "US$190",
    includes: ["Full Anuradhapura heritage journey", "Private Wilpattu safari jeep", "Sunrise or sunset planning", "Stay recommendations included"],
  },
];

export const reviews = [
  {
    quote: "The history never felt like a lecture. Every stop became a story, and we always had time to slow down and take it in.",
    name: "Elena & Mark",
    place: "United Kingdom",
    journey: "Ancient City Unhurried",
  },
  {
    quote: "From the dress-code tips to finding the quietest time at the Bodhi tree, the local insight changed our entire experience.",
    name: "Sophie L.",
    place: "France",
    journey: "Sacred City Essentials",
  },
  {
    quote: "Mihintale at sunset and Wilpattu the next morning was the highlight of our Sri Lanka journey. Beautifully paced.",
    name: "Noah & Mia",
    place: "Australia",
    journey: "Heritage & Wild North",
  },
  {
    quote: "We travelled with our parents and the day was adapted around them with care. We saw everything without feeling hurried.",
    name: "Priya S.",
    place: "Singapore",
    journey: "Private custom day",
  },
];

export function getPlace(slug: string) {
  return places.find((place) => place.slug === slug);
}
