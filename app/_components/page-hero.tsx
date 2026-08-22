import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italic: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, italic, copy, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill sizes="100vw" priority />
      <div className="page-hero-shade" />
      <div className="shell page-hero-content">
        <p className="eyebrow eyebrow-light"><span />{eyebrow}</p>
        <h1>{title}<br /><em>{italic}</em></h1>
        <p>{copy}</p>
      </div>
      <div className="page-hero-index" aria-hidden="true">Anuradhapura · 08.3114° N</div>
    </section>
  );
}
