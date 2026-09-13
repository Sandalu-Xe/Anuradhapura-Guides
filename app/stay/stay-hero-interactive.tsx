"use client";

import Image from "next/image";
import { useState } from "react";
import { greenVillageHomestay } from "../_data/site";

import { HERO_SLIDES } from "../_data/stay-gallery";

export function StayHeroInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = HERO_SLIDES[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="stay-editorial-hero">
      <div className="shell stay-hero-grid">
        {/* Left Column: Clear Text & Context */}
        <div className="stay-hero-text-col">
          <p className="eyebrow stay-hero-eyebrow">
            <span />
            Official Homestay · Thalawa
          </p>

          <h1 className="stay-hero-main-title">
            Stay with your guide at <em>Green Village.</em>
          </h1>

          <p className="stay-hero-summary">
            When visiting Anuradhapura, stay directly at our peaceful family
            homestay in <strong>Thalawa</strong>. Hosted by licensed guide and
            English teacher <strong>Gunarathna</strong>, you&apos;ll enjoy
            comfortable air-conditioned rooms, delicious home-cooked meals, and
            unhurried sacred city journeys.
          </p>

          <div className="stay-hero-badges-row">
            <div className="stay-rating-badge">
              <span className="stay-badge-stars">★★★★★</span>
              <strong>4.97 on Airbnb</strong>
              <small>Highest-reviewed local host</small>
            </div>
            <div className="stay-info-pill">
              <span>📍 Thalawa, Sri Lanka</span>
              <small>15–20 mins to Sacred City</small>
            </div>
          </div>

          <div className="stay-hero-actions">
            <a
              className="button button-gold stay-main-cta"
              href={greenVillageHomestay.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Green Village Website
            </a>

            <a
              className="button button-airbnb stay-airbnb-cta"
              href={greenVillageHomestay.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on Airbnb
            </a>

            <a
              className="button button-subtle-stay"
              href={greenVillageHomestay.stayUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Rooms &amp; Rates
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Animated Photo Showcase */}
        <div className="stay-hero-visual-col">
          <div className="stay-hero-main-frame">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.src}
                className={`stay-hero-slide ${index === activeIndex ? "is-active" : ""}`}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="stay-hero-img"
                />
              </div>
            ))}

            {/* Slide Context Pill Overlay */}
            <div className="stay-slide-info-pill">
              <span className="stay-slide-pill-tag">{activeSlide.tag}</span>
              <span className="stay-slide-pill-badge">{activeSlide.badge}</span>
            </div>

            {/* Nav Arrows */}
            <button
              type="button"
              className="stay-nav-arrow stay-nav-prev"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              className="stay-nav-arrow stay-nav-next"
              onClick={handleNext}
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Progress Dots Indicator */}
            <div className="stay-dots-indicator">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`stay-dot-btn ${i === activeIndex ? "is-active" : ""}`}
                  onClick={() => handleSelect(i)}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Interactive Thumbnail Strip */}
          <div className="stay-hero-thumb-row" role="tablist">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                className={`stay-thumb-item ${idx === activeIndex ? "is-active" : ""}`}
                onClick={() => handleSelect(idx)}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  sizes="(max-width: 900px) 25vw, 12vw"
                />
                <span>{slide.label}</span>
                {idx === activeIndex && (
                  <div className="stay-thumb-active-bar" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
