interface HeroSlide {
  src: string;
  alt: string;
  label: string;
  badge: string;
  tag: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/green-village/homestay-garden.avif",
    alt: "Green Village guesthouse front and tropical garden in Thalawa, Anuradhapura",
    label: "Tropical Garden",
    badge: "Quiet Village Setting · 15 mins to Sacred City",
    tag: "Guesthouse & Garden",
  },
  {
    src: "/green-village/family-guest-welcome.webp",
    alt: "Gunarathna welcoming foreign guests at Green Village",
    label: "Warm Family Host",
    badge: "Hosted by Gunarathna · Licensed Guide & English Teacher",
    tag: "Meet Your Guide",
  },
  {
    src: "/green-village/homestay-veranda.avif",
    alt: "Garden veranda seating area with chairs",
    label: "Garden Veranda",
    badge: "Shaded Outdoor Seating & Cool Morning Tea",
    tag: "Relaxation Veranda",
  },
  {
    src: "/green-village/family-guests-table.avif",
    alt: "Guests dining on authentic Sri Lankan home-cooked food",
    label: "Home Cooking",
    badge: "Authentic Family-Prepared Breakfasts & Dinners",
    tag: "Home-Cooked Meals",
  },
];
