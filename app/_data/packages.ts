export type Destination = "all" | "anuradhapura" | "mihintale" | "wilpattu";

export type ExplorerPackage = {
  slug: string;
  destination: Exclude<Destination, "all">;
  destinationLabel: string;
  name: string;
  summary: string;
  duration: string;
  price: string;
  priceUnit: string;
  image: string;
  featured?: boolean;
  includes: string[];
};

export const destinations: {
  value: Destination;
  label: string;
  note: string;
}[] = [
  { value: "all", label: "All packages", note: "3 experiences" },
  { value: "anuradhapura", label: "Anuradhapura", note: "1 experience" },
  { value: "mihintale", label: "Mihintale", note: "1 experience" },
  { value: "wilpattu", label: "Wilpattu", note: "1 experience" },
];

export const explorerPackages: ExplorerPackage[] = [
  {
    slug: "ancient-anuradhapura",
    destination: "anuradhapura",
    destinationLabel: "Anuradhapura",
    name: "Ancient Places Anuradhapura",
    summary:
      "Guided tour covering Ruwanweliseya, Sri Maha Bodhi, Jetavanaramaya, Isurumuniya, Abhayagiri Vihara, Thuparamaya, and Lankarama.",
    duration: "8:30 AM to 2:30 PM (6 hrs)",
    price: "$13",
    priceUnit: "per person",
    image: "/places/ruwanweliseya.jpg",
    featured: true,
    includes: [
      "Guided tour included (Tour guide only)",
      "Ruwanweliseya (Massive white stupa with elephant wall)",
      "Isurumuniya (Granite rock temple & 'Lovers' carving)",
      "Jetavanaramaya (Massive brick stupa & museum)",
      "Sri Maha Bodhi (Oldest documented sacred tree, 288 BCE)",
      "Abhayagiri Vihara (Monastic complex & Kuttam Pokuna)",
      "Thuparamaya (First stupa in Sri Lanka, 3rd century BCE)",
      "Lankarama (Stupa with concentric stone pillars)",
      "Entrance tickets NOT included",
      "Transport NOT included",
    ],
  },
  {
    slug: "ancient-mihintale",
    destination: "mihintale",
    destinationLabel: "Mihintale",
    name: "Ancient Place Mihintale",
    summary:
      "Birthplace of Buddhism in Sri Lanka (247 BCE). Guided exploration of Ambasthala, Mahaseya, Aradhana Gala ('Meditation Rock'), and Kaludiya Pokuna.",
    duration: "8:30 AM to 2:30 PM (6 hrs)",
    price: "$13",
    priceUnit: "per person",
    image: "/places/mihintale.jpg",
    includes: [
      "Guided tour included (Tour guide only)",
      "Birthplace of Buddhism hill sanctuary (247 BCE)",
      "Ambasthala Dagoba (Spot where Mahinda met the King)",
      "Mahaseya Dagoba (Highest stupa with Buddha hair relic)",
      "Aradhana Gala ('Meditation Rock' panoramic viewpoint)",
      "Kaludiya Pokuna (Ancient tranquil forest rock-carved pond)",
      "Entrance tickets NOT included",
      "Transport NOT included",
    ],
  },
  {
    slug: "wilpattu-tourism",
    destination: "wilpattu",
    destinationLabel: "Wilpattu",
    name: "Wilpattu Tourism Safari",
    summary:
      "Sri Lanka's largest national park safari exploring unique natural 'villus' sand-rimmed lakes, leopards, sloth bears, elephants, and rich birdlife.",
    duration: "8:30 AM to 2:30 PM (6 hrs)",
    price: "$30",
    priceUnit: "per person (+ $180 Safari Jeep)",
    image: "/places/wilpattu.jpg",
    featured: true,
    includes: [
      "Wilpattu wildlife tour guidance",
      "Private Safari Jeep available ($180)",
      "Unique natural 'villus' sand-rimmed lakes exploration",
      "Wild leopard, sloth bear & elephant tracking",
      "Park entrance per person: $30",
      "8:30 AM to 2:30 PM complete safari schedule",
    ],
  },
];
