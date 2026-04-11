/**
 * MissionSection
 * Centred editorial text block communicating the charity's mission.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Asymmetric left-weighted layout with teal rule and section label.
 * Max-width 660px for comfortable reading measure.
 */

import { MISSION_BODY, MISSION_HEADING } from "@/config/site";

export default function MissionSection() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      style={{
        padding: "clamp(56px, 8vw, 96px) 0",
        backgroundColor: "#F9FAFB",
      }}
    >
      <div className="container">
        <div
          className="reveal"
          style={{
            maxWidth: "660px",
            margin: "0 auto",
          }}
        >
          {/* Section label */}
          <span className="section-label">Who we are</span>

          {/* Teal rule */}
          <span className="teal-rule" aria-hidden="true" />

          {/* Heading */}
          <h2
            id="mission-heading"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 400,
              color: "#1E3A5F",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {MISSION_HEADING}
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 400,
              color: "#374151",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {MISSION_BODY}
          </p>
        </div>
      </div>
    </section>
  );
}
