"use client";

import Image from "next/image";
import { useState } from "react";

type Destination = "all" | "anuradhapura" | "mihintale" | "wilpattu";

type ExplorerPackage = {
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

const destinations: { value: Destination; label: string; note: string }[] = [
  { value: "all", label: "All packages", note: "3 experiences" },
  { value: "anuradhapura", label: "Anuradhapura", note: "1 experience" },
  { value: "mihintale", label: "Mihintale", note: "1 experience" },
  { value: "wilpattu", label: "Wilpattu", note: "1 experience" },
];

const explorerPackages: ExplorerPackage[] = [
  {
    slug: "ancient-anuradhapura",
    destination: "anuradhapura",
    destinationLabel: "Anuradhapura",
    name: "Ancient Places Anuradhapura",
    summary: "Guided tour covering Ruwanweliseya, Sri Maha Bodhi, Jetavanaramaya, Isurumuniya, Abhayagiri Vihara, Thuparamaya, and Lankarama.",
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
    summary: "Birthplace of Buddhism in Sri Lanka (247 BCE). Guided exploration of Ambasthala, Mahaseya, Aradhana Gala ('Meditation Rock'), and Kaludiya Pokuna.",
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
    summary: "Sri Lanka's largest national park safari exploring unique natural 'villus' sand-rimmed lakes, leopards, sloth bears, elephants, and rich birdlife.",
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
          <p>Browse our official guided packages. Every tour is private and carefully paced for you.</p>
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
              <p>Combine any places into a private custom half-day or full-day journey.</p>
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
                      <ul>
                        {item.includes.map((include) => {
                          const isExclusion = include.includes("NOT included");
                          return (
                            <li key={include} className={isExclusion ? "package-inc-excluded" : "package-inc-included"}>
                              {include}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="explorer-package-foot">
                        <div><small>Starting from</small><strong>{item.price}</strong><span>{item.priceUnit}</span></div>
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
