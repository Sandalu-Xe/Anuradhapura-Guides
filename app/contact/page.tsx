import type { Metadata } from "next";
import BookingForm from "../booking-form";

export const metadata: Metadata = { title: "Plan Your Journey", description: "Tell us your dates and interests to plan a private Anuradhapura heritage journey." };
type ContactPageProps = { searchParams: Promise<{ journey?: string; place?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const query = await searchParams;
  const initialInterest = query.journey ?? query.place ?? "";
  return <main className="contact-page"><section className="contact-intro"><div className="shell"><p className="eyebrow eyebrow-light"><span />Start planning</p><h1>Your dates.<br />Your interests.<br /><em>Your journey.</em></h1><p>Tell us the essentials. We&apos;ll reply with a clear plan, the right pace, and a transparent quote.</p><div className="contact-promises"><span>Private and flexible</span><span>No payment to enquire</span><span>Reply within 24 hours</span></div></div></section><section className="contact-form-section"><div className="shell contact-grid"><div><p className="eyebrow"><span />A simple first step</p><h2>What would make<br /><em>this trip special?</em></h2><p>You do not need a finished itinerary. Share what you know now and we will help with the rest.</p><dl><div><dt>Email</dt><dd><a href="mailto:hello@anuradhapuraguidance.com">hello@anuradhapuraguidance.com</a></dd></div><div><dt>Based in</dt><dd>Anuradhapura, Sri Lanka</dd></div><div><dt>Guiding language</dt><dd>English</dd></div></dl></div><BookingForm initialInterest={initialInterest} /></div></section></main>;
}
