/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors avoid a vinext RSC prefetch runtime failure. */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaStrip } from "../../_components/cta-strip";
import { getPlace, places } from "../../_data/site";

type PlacePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return places.map((place) => ({ slug: place.slug })); }

export async function generateMetadata({ params }: PlacePageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) return {};
  return { title: place.name, description: place.intro, openGraph: { title: `${place.name} | Anuradhapura Guidance`, description: place.intro, images: [{ url: place.image }] }, twitter: { title: `${place.name} | Anuradhapura Guidance`, description: place.intro, images: [place.image] } };
}

export default async function PlaceDetailPage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) notFound();
  const currentIndex = places.findIndex((item) => item.slug === slug);
  const nextPlace = places[(currentIndex + 1) % places.length];
  return (
    <main>
      <section className="detail-hero"><Image src={place.image} alt={`${place.name} in Anuradhapura`} fill sizes="100vw" priority /><div className="detail-hero-shade" /><div className="shell detail-hero-content"><a href="/places" className="back-link">← All places</a><div><p className="eyebrow eyebrow-light"><span />{place.tag} · {place.era}</p><h1>{place.name}</h1></div><p>{place.intro}</p></div></section>
      <section className="section place-story"><div className="shell story-grid"><div className="story-index"><span>{String(currentIndex + 1).padStart(2, "0")}</span><small>of {String(places.length).padStart(2, "0")}</small></div><div className="story-main"><p className="story-lead">{place.detail}</p><blockquote><span>What stays with you</span>{place.highlight}</blockquote></div><aside className="visit-card"><p className="eyebrow"><span />Plan the visit</p><dl><div><dt>Recommended time</dt><dd>{place.time}</dd></div><div><dt>Historic period</dt><dd>{place.era}</dd></div></dl><ul>{place.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul><a className="button button-dark" href={`/contact?place=${place.slug}`}>Include this place <span>↗</span></a></aside></div></section>
      <section className="next-place"><div className="shell"><span>Continue exploring</span><a href={`/places/${nextPlace.slug}`}>{nextPlace.name}<span>→</span></a></div></section><CtaStrip />
    </main>
  );
}
