import type { TourPackage } from "../_data/site";

export function PackageCard({ item }: { item: TourPackage }) {
  return (
    <article className={`package-card${item.featured ? " package-featured" : ""}`}>
      {item.featured && <span className="package-badge">Most loved</span>}
      <div className="package-kicker"><span>{item.number}</span>{item.duration}</div>
      <h3>{item.name}</h3>
      <p>{item.summary}</p>
      <ul>{item.includes.map((include) => <li key={include}>{include}</li>)}</ul>
      <div className="package-footer">
        <div><small>From</small><strong>{item.price}</strong><small>per private tour</small></div>
        <a href={`/contact?journey=${item.slug}`} aria-label={`Ask about ${item.name}`}>↗</a>
      </div>
    </article>
  );
}
