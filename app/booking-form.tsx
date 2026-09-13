"use client";

import { FormEvent, useState } from "react";

export default function BookingForm({
  initialInterest = "",
}: {
  initialInterest?: string;
}) {
  const [sent, setSent] = useState(false);
  const [emailDraft, setEmailDraft] = useState("");

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = Array.from(new FormData(event.currentTarget).entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    setEmailDraft(
      `mailto:hello@anuradhapuraguidance.com?subject=Private%20tour%20enquiry&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  }

  const draftNotice = sent ? (
    <div className="booking-success" role="status" aria-live="polite">
      <span className="success-icon">✓</span>
      <p className="kicker">Enquiry prepared — not sent yet</p>
      <h3>Send your enquiry by email.</h3>
      <p>
        Open your email app to review and send your enquiry. Your details remain
        in the form below.
      </p>
      <a className="button button-dark" href={emailDraft}>
        Open email draft
      </a>
      <button type="button" onClick={() => setSent(false)}>
        Edit enquiry
      </button>
    </div>
  ) : null;

  return (
    <div className="booking-form-wrapper">
      {draftNotice}
      <div className="booking-form-header">
        <span className="booking-form-eyebrow">Private Tour Enquiry</span>
        <h2 className="booking-form-title">
          Plan Your <em>Private Journey</em>
        </h2>
        <p className="booking-form-subtitle">
          No payment required. Tell us about your ideal visit and we&apos;ll
          craft a personalised itinerary just for you.
        </p>
      </div>

      <form
        className="booking-form"
        onSubmit={submitBooking}
        onChange={() => setSent(false)}
      >
        <div className="booking-fields-grid">
          <div className="field full">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="How should we address you?"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="country">Country of Origin</label>
            <input
              id="country"
              name="country"
              autoComplete="country-name"
              placeholder="Where are you travelling from?"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="date">Preferred Date</label>
            <input id="date" name="date" type="date" required />
          </div>

          <div className="field">
            <label htmlFor="travellers">Number of Travellers</label>
            <select id="travellers" name="travellers" defaultValue="2">
              <option value="1">1 traveller</option>
              <option value="2">2 travellers</option>
              <option value="3-4">3–4 travellers</option>
              <option value="5+">5+ travellers</option>
            </select>
          </div>

          <div className="field full">
            <label htmlFor="interest">Journey Interest</label>
            <select
              id="interest"
              name="interest"
              defaultValue={initialInterest}
            >
              <option value="">Help me choose</option>
              <option value="ancient-anuradhapura">
                Ancient Places Anuradhapura ($13/person · 8:30 AM–2:30 PM)
              </option>
              <option value="ancient-mihintale">
                Ancient Place Mihintale ($13/person · 8:30 AM–2:30 PM)
              </option>
              <option value="wilpattu-tourism">
                Wilpattu Tourism Safari ($30/person + $180 Jeep · 8:30 AM–2:30
                PM)
              </option>
              <option value="custom">Custom Private Route</option>
              <option value="ruwanweliseya">Ruwanweliseya Stupa</option>
              <option value="isurumuniya">Isurumuniya Rock Temple</option>
              <option value="jetavanaramaya">Jetavanaramaya Stupa</option>
              <option value="jaya-sri-maha-bodhi">Jaya Sri Maha Bodhi</option>
              <option value="abhayagiri-vihara">Abhayagiri Vihara</option>
              <option value="thuparamaya">Thuparamaya Stupa</option>
              <option value="lankarama">Lankarama Stupa</option>
              <option value="mihintale">Mihintale Sacred Hill</option>
              <option value="wilpattu">Wilpattu National Park</option>
            </select>
          </div>

          <div className="field full">
            <label htmlFor="journey">What would make this trip special?</label>
            <textarea
              id="journey"
              name="journey"
              rows={4}
              placeholder="Tell us about your interests, pace, dietary needs, or places on your wish list…"
            />
          </div>
        </div>

        <div className="booking-form-footer">
          <div className="booking-form-assurance">
            <span className="assurance-icon" aria-hidden="true">
              🔒
            </span>
            <p>
              No payment needed. We&apos;ll shape the itinerary with you first.
            </p>
          </div>
          <button
            className="button button-gold booking-submit-btn"
            type="submit"
          >
            Prepare email enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
