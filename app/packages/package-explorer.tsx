"use client";

import Image from "next/image";
import { useState } from "react";

type Destination = "all" | "anuradhapura" | "ruwanweliseya" | "mihintale" | "isurumuniya" | "wilpattu";

type ExplorerPackage = {
  slug: string;
  destination: Exclude<Destination, "all">;
  destinationLabel: string;
  name: string;
  summary: string;
  duration: string;
  price: string;
  image: string;
  featured?: boolean;
  includes: string[];
};

const destinations: { value: Destination; label: string; note: string }[] = [
  { value: "all", label: "All packages", note: "10 experiences" },
  { value: "anuradhapura", label: "Anuradhapura", note: "3 experiences" },
  { value: "ruwanweliseya", label: "Ruwanweliseya", note: "2 experiences" },
  { value: "mihintale", label: "Mihintale", note: "2 experiences" },
  { value: "isurumuniya", label: "Isurumuniya", note: "1 experience" },
  { value: "wilpattu", label: "Wilpattu", note: "2 experiences" },
];

const explorerPackages: ExplorerPackage[] = [
  {
    slug: "sacred-city-essentials",
    destination: "anuradhapura",
    destinationLabel: "Anuradhapura",
    name: "Sacred City Essentials",
    summary: "A focused introduction to the ancient capital for travellers with limited time.",
    duration: "Half day",
    price: "US$45",
    image: "/places/jetavanaramaya.jpg",
    includes: ["3–4 signature sacred sites", "Private English-speaking guide", "Hotel pick-up", "Temple etiquette briefing"],
  },
  {
    slug: "ancient-city-unhurried",
    destination: "anuradhapura",
    destinationLabel: "Anuradhapura",
    name: "Ancient City Unhurried",
    summary: "A complete heritage day paced around the heat, rituals, and best evening light.",
    duration: "Full day",
    price: "US$85",
    image: "/places/sri-maha-bodhi.jpg",
    featured: true,
    includes: ["Five major heritage sites", "Flexible private transport", "Local lunch recommendations", "Sunset planning"],
  },
  {
    slug: "anuradhapura-family-day",
    destination: "anuradhapura",
    destinationLabel: "Anuradhapura",
    name: "Family Heritage Day",
    summary: "A relaxed route with shorter stops, shade breaks, and stories for every age.",
    duration: "6 hours",
    price: "US$75",
    image: "/places/samadhi-buddha.jpg",
    includes: ["Family-friendly storytelling", "Comfortable private pace", "Water and rest stops", "Flexible site selection"],
  },
  {
    slug: "ruwanweliseya-evening",
    destination: "ruwanweliseya",
    destinationLabel: "Ruwanweliseya",
    name: "Ruwanweliseya Evening Rituals",
    summary: "Experience the great white stupa as pilgrims gather and oil lamps begin to glow.",
    duration: "2.5 hours",
    price: "US$32",
    image: "/places/ruwanweliseya.jpg",
    includes: ["Private guided stupa walk", "History and symbolism", "Ritual etiquette guidance", "Golden-hour timing"],
  },
  {
    slug: "ruwanweliseya-bodhi-trail",
    destination: "ruwanweliseya",
    destinationLabel: "Ruwanweliseya",
    name: "Stupa & Sacred Bodhi Trail",
    summary: "Connect two of Sri Lanka's most revered living pilgrimage places in one thoughtful walk.",
    duration: "4 hours",
    price: "US$48",
    image: "/places/sri-maha-bodhi.jpg",
    includes: ["Ruwanweliseya guided circuit", "Jaya Sri Maha Bodhi visit", "Living heritage stories", "Hotel transfer"],
  },
  {
    slug: "mihintale-sunset-climb",
    destination: "mihintale",
    destinationLabel: "Mihintale",
    name: "Mihintale Sunset Climb",
    summary: "Climb the sacred hill slowly, following ancient steps toward a panoramic sunset.",
    duration: "3 hours",
    price: "US$38",
    image: "/places/mihintale.jpg",
    featured: true,
    includes: ["Private hill sanctuary guide", "Ancient hospital and caves", "Summit viewpoint", "Return transfer"],
  },
  {
    slug: "mihintale-heritage-morning",
    destination: "mihintale",
    destinationLabel: "Mihintale",
    name: "Mihintale Heritage Morning",
    summary: "An early, cooler exploration of the hill sanctuary, monastic ruins, and viewpoints.",
    duration: "Half day",
    price: "US$42",
    image: "/places/mihintale.jpg",
    includes: ["Early hotel departure", "Complete lower and upper sites", "Water and rest breaks", "Private guiding"],
  },
  {
    slug: "isurumuniya-art-lake",
    destination: "isurumuniya",
    destinationLabel: "Isurumuniya",
    name: "Rock Art & Lakeside Stories",
    summary: "Discover ancient sculpture, the rock temple, and the calm landscape beside Tissa Wewa.",
    duration: "3 hours",
    price: "US$35",
    image: "/places/isurumuniya.jpg",
    includes: ["Temple and museum visit", "Sculpture interpretation", "Rock viewpoint", "Lakeside sunset option"],
  },
  {
    slug: "wilpattu-dawn-safari",
    destination: "wilpattu",
    destinationLabel: "Wilpattu",
    name: "Wilpattu Dawn Safari",
    summary: "Enter the forest at first light for the best wildlife activity and a cooler drive.",
    duration: "Half day",
    price: "US$95",
    image: "/places/wilpattu.jpg",
    includes: ["Private safari jeep", "Experienced wildlife driver", "Anuradhapura transfer", "Breakfast box and water"],
  },
  {
    slug: "heritage-wild-north",
    destination: "wilpattu",
    destinationLabel: "Wilpattu + Anuradhapura",
    name: "Heritage & Wild North",
    summary: "Pair a full sacred-city journey with Wilpattu's quiet forest over two memorable days.",
    duration: "Two days",
    price: "US$190",
    image: "/places/wilpattu.jpg",
    featured: true,
    includes: ["Full heritage day", "Private Wilpattu safari", "Sunrise or sunset planning", "Stay recommendations"],
  },
];

export function PackageExplorer() {
  const [destination, setDestination] = useState<Destination>("all");
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const visiblePackages = explorerPackages.filter((item) => {
    const matchesDestination = destination === "all" || item.destination === destination;
    const matchesSearch = !normalizedSearch || `${item.name} ${item.destinationLabel} ${item.summary}`.toLowerCase().includes(normalizedSearch);
    return matchesDestination && matchesSearch;
  });

  return (
    <section className="package-explorer" aria-labelledby="package-explorer-title">
      <div className="shell">
        <div className="package-app-heading">
          <div>
            <p className="eyebrow"><span />Package library</p>
            <h2 id="package-explorer-title">Choose a place.<br /><em>Find your experience.</em></h2>
          </div>
          <p>Use the destination list or search by a place name. These are starting packages—every route, duration, and inclusion can be customised.</p>
        </div>

        <div className="package-app-layout">
          <aside className="package-filter-panel" aria-label="Filter packages by destination">
            <span className="filter-panel-title">Destinations</span>
            <div className="destination-filter-list">
              {destinations.map((item) => (
                <button
                  className={destination === item.value ? "is-active" : ""}
                  type="button"
                  onClick={() => setDestination(item.value)}
                  aria-pressed={destination === item.value}
                  key={item.value}
                >
                  <span>{item.label}</span><small>{item.note}</small>
                </button>
              ))}
            </div>
            <div className="filter-help-card">
              <span>Need something different?</span>
              <strong>Build a custom route</strong>
              <p>Combine any places into a private half-day, full-day, or multi-day journey.</p>
              <a href="/contact?journey=custom">Plan a custom package <span>↗</span></a>
            </div>
          </aside>

          <div className="package-results">
            <div className="package-toolbar">
              <label className="package-search">
                <span className="sr-only">Search packages</span>
                <span aria-hidden="true">⌕</span>
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search a place or package" />
              </label>
              <p><strong>{visiblePackages.length}</strong> {visiblePackages.length === 1 ? "package" : "packages"} found</p>
            </div>

            {visiblePackages.length > 0 ? (
              <div className="package-result-grid">
                {visiblePackages.map((item) => (
                  <article className={`explorer-package-card${item.featured ? " explorer-package-featured" : ""}`} key={item.slug}>
                    <div className="explorer-package-image">
                      <Image src={item.image} alt={`${item.destinationLabel} tour package`} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                      <span>{item.destinationLabel}</span>
                      {item.featured ? <strong>Recommended</strong> : null}
                    </div>
                    <div className="explorer-package-body">
                      <div className="explorer-package-meta"><span>{item.duration}</span><span>Private tour</span></div>
                      <h3>{item.name}</h3>
                      <p>{item.summary}</p>
                      <ul>{item.includes.slice(0, 3).map((include) => <li key={include}>{include}</li>)}</ul>
                      <div className="explorer-package-foot">
                        <div><small>Starting from</small><strong>{item.price}</strong><span>per private tour</span></div>
                        <a href={`/contact?journey=${item.slug}`} aria-label={`Enquire about ${item.name}`}>Enquire <span>↗</span></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="package-empty-state">
                <span>0 results</span>
                <h3>No package matches that search.</h3>
                <p>Try another place name or show all packages.</p>
                <button type="button" onClick={() => { setDestination("all"); setSearch(""); }}>Show all packages</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
