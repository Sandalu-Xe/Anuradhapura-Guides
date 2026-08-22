/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors avoid a vinext RSC prefetch runtime failure. */
export default function NotFound() {
  return <main className="not-found"><p className="eyebrow eyebrow-light"><span />404</p><h1>This path has<br /><em>gone quiet.</em></h1><p>Return to the guide and continue exploring Anuradhapura.</p><a className="button button-gold" href="/">Back to home <span>↗</span></a></main>;
}
