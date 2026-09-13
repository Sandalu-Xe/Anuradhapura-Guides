import Image from "next/image";
import type { Place } from "../_data/site";

export function PlaceCard({ place, index }: { place: Place; index: number }) {
  return (
    <article className="place-card">
      <a
        className="place-image"
        href={`/places/${place.slug}`}
        aria-label={`Explore ${place.name}`}
      >
        <Image
          src={place.image}
          alt={`${place.name} in the Anuradhapura region`}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="place-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </a>
      <div className="place-card-body">
        <div className="place-meta">
          <span>{place.tag}</span>
          <span>{place.time}</span>
        </div>
        <h3>
          <a href={`/places/${place.slug}`}>{place.name}</a>
        </h3>
        <p>{place.intro}</p>
        <a className="arrow-link" href={`/places/${place.slug}`}>
          Discover this place
        </a>
      </div>
    </article>
  );
}
