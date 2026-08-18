"use client";

import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="booking-success" role="status" aria-live="polite">
        <span>✓</span>
        <p className="kicker">Request noted</p>
        <h3>Your Anuradhapura story starts here.</h3>
        <p>
          Thank you. This preview is ready to connect to your preferred email or
          WhatsApp number so every real enquiry reaches you instantly.
        </p>
        <button type="button" onClick={() => setSent(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submitBooking}>
      <div className="field full">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" placeholder="How should we address you?" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="field">
        <label htmlFor="country">Country</label>
        <input id="country" name="country" placeholder="Where are you travelling from?" required />
      </div>
      <div className="field">
        <label htmlFor="date">Preferred date</label>
        <input id="date" name="date" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="travellers">Travellers</label>
        <select id="travellers" name="travellers" defaultValue="2">
          <option value="1">1 traveller</option>
          <option value="2">2 travellers</option>
          <option value="3-4">3–4 travellers</option>
          <option value="5+">5+ travellers</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="journey">What would make this trip special?</label>
        <textarea id="journey" name="journey" rows={4} placeholder="Tell us about your interests, pace, dietary needs, or places on your wish list…" />
      </div>
      <div className="form-foot full">
        <p>No payment needed. We&apos;ll shape the itinerary with you first.</p>
        <button className="button button-gold" type="submit">Request availability <span>↗</span></button>
      </div>
    </form>
  );
}
