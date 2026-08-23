"use client";

import { FormEvent, useState } from "react";

export default function BookingForm({ initialInterest = "" }: { initialInterest?: string }) {
  const [sent, setSent] = useState(false);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="booking-success" role="status" aria-live="polite">
        <span className="success-icon">✓</span>
        <p className="kicker">Request received</p>
        <h3>Your Anuradhapura story starts here.</h3>
        <p>
          Thank you for reaching out. This preview is ready to connect to your preferred email or
          WhatsApp so every real enquiry reaches you instantly.
        </p>
        <button type="button" onClick={() => setSent(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <div className="booking-form-wrapper">
      <div className="booking-form-header">
        <span className="booking-form-eyebrow">Private Tour Enquiry</span>
        <h2 className="booking-form-title">Plan Your <em>Private Journey</em></h2>
        <p className="booking-form-subtitle">
          No payment required. Tell us about your ideal visit and we&apos;ll craft a personalised itinerary just for you.
        </p>
      </div>

      <form className="booking-form" onSubmit={submitBooking} noValidate>
        <div className="booking-fields-grid">
          <div className="field full">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" placeholder="How should we address you?" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="field">
            <label htmlFor="country">Country of Origin</label>
            <input id="country" name="country" placeholder="Where are you travelling from?" required />
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
            <select id="interest" name="interest" defaultValue={initialInterest}>
              <option value="">Help me choose</option>
              <option value="sacred-city-essentials">Sacred City Essentials</option>
              <option value="ancient-city-unhurried">Ancient City Unhurried</option>
              <option value="heritage-wild-north">Heritage &amp; Wild North</option>
              <option value="ruwanweliseya">Ruwanweliseya</option>
              <option value="jaya-sri-maha-bodhi">Jaya Sri Maha Bodhi</option>
              <option value="jetavanaramaya">Jetavanaramaya</option>
              <option value="isurumuniya">Isurumuniya</option>
              <option value="samadhi-buddha">Samadhi Buddha</option>
              <option value="mihintale">Mihintale</option>
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
            <span className="assurance-icon" aria-hidden="true">🔒</span>
            <p>No payment needed. We&apos;ll shape the itinerary with you first.</p>
          </div>
          <button className="button button-gold booking-submit-btn" type="submit">
            Request Availability <span className="btn-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
}
