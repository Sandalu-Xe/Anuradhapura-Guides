import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italic: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  italic,
  copy,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="page-hero editorial-page-hero">
      <div className="shell page-hero-content editorial-page-hero-grid">
        <div className="editorial-page-hero-copy">
          <p className="eyebrow">
            <span />
            {eyebrow}
          </p>
          <h1>
            {title}
            <br />
            <em>{italic}</em>
          </h1>
          <p>{copy}</p>
        </div>
        <div className="editorial-page-hero-visual">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            priority
          />
          <div className="page-hero-shade" />
          <div className="page-hero-index" aria-hidden="true">
            Anuradhapura · 08.3114° N
          </div>
        </div>
      </div>
    </section>
  );
}
