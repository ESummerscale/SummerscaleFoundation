/**
 * CarouselSection
 * Full-width image carousel showcasing past work.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Rounded-lg frame, teal arrow buttons, dot indicators,
 * caption overlay, keyboard navigation, touch/swipe support.
 *
 * Behaviour controlled by config/site.ts:
 *   FEATURES.carouselAutoPlay
 *   FEATURES.carouselAutoPlayInterval
 *   FEATURES.showCarouselDots
 *   FEATURES.showCarouselCaptions
 */

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CAROUSEL_HEADING,
  CAROUSEL_IMAGES,
  CAROUSEL_SUBTEXT,
  FEATURES,
} from "@/config/site";

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = CAROUSEL_IMAGES.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + total) % total);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [isTransitioning, total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (!FEATURES.carouselAutoPlay) return;
    autoPlayRef.current = setInterval(next, FEATURES.carouselAutoPlayInterval);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -40) next();
    else if (delta > 40) prev();
    touchStartX.current = null;
  };

  return (
    <section
      id="work"
      aria-labelledby="carousel-heading"
      style={{
        padding: "clamp(56px, 8vw, 96px) 0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Impact</span>
          <span className="teal-rule" aria-hidden="true" />
          <h2
            id="carousel-heading"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 400,
              color: "#1E3A5F",
              margin: "0 0 0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            {CAROUSEL_HEADING}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "1rem",
              color: "#6B7280",
              margin: 0,
              maxWidth: "520px",
            }}
          >
            {CAROUSEL_SUBTEXT}
          </p>
        </div>

        {/* Carousel track */}
        <div
          className="reveal"
          role="region"
          aria-label="Image carousel"
          aria-roledescription="carousel"
          style={{ position: "relative" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Image frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 32px rgba(30,58,95,0.12)",
              backgroundColor: "#E5E7EB",
            }}
          >
            {CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={img.src}
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${total}: ${img.alt}`}
                aria-hidden={i !== current}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 0.4s ease-in-out",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Caption overlay */}
                {FEATURES.showCarouselCaptions && img.caption && (
                  <div
                    aria-label={`Caption: ${img.caption}`}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "2rem 1.5rem 1.25rem",
                      background:
                        "linear-gradient(to top, rgba(15,30,55,0.72) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.9)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {img.caption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prev arrow */}
          <CarouselArrow direction="prev" onClick={prev} />
          {/* Next arrow */}
          <CarouselArrow direction="next" onClick={next} />
        </div>

        {/* Dot indicators */}
        {FEATURES.showCarouselDots && (
          <div
            role="tablist"
            aria-label="Carousel slides"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "1.25rem",
            }}
          >
            {CAROUSEL_IMAGES.map((img, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}: ${img.alt}`}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  padding: 0,
                  background: i === current ? "#4AA3A2" : "#D1D5DB",
                  transition: "width 0.3s ease, background 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}

        {/* Slide counter */}
        <p
          aria-live="polite"
          aria-atomic="true"
          style={{
            textAlign: "center",
            marginTop: "0.75rem",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.8rem",
            color: "#9CA3AF",
          }}
        >
          {current + 1} / {total}
        </p>
      </div>
    </section>
  );
}

/** Arrow button component */
function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        top: "50%",
        [isPrev ? "left" : "right"]: "12px",
        transform: "translateY(-50%)",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.7)",
        background: hovered ? "#4AA3A2" : "rgba(255,255,255,0.15)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s",
        zIndex: 2,
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {isPrev ? (
          <path
            d="M11 14L6 9L11 4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M7 4L12 9L7 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
