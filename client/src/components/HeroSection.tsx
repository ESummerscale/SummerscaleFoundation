/**
 * HeroSection
 * Full-viewport hero with centred logo, charity name, and tagline.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Deep-blue background with subtle radial gradient, white text,
 * teal accent rule, DM Serif Display heading.
 */

import { LOGO_URL, SITE_TAGLINE, SITE_TITLE } from "@/config/site";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, #24487a 0%, #1E3A5F 55%, #152d4a 100%)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "640px",
        }}
      >
        {/* Logo mark */}
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <img
            src={LOGO_URL}
            alt="The Summerscale Foundation logo"
            style={{
              maxWidth: "280px",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Charity name */}
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            margin: "0 0 1.25rem",
          }}
        >
          {SITE_TITLE}
        </h1>

        {/* Teal rule */}
        <div
          aria-hidden="true"
          style={{
            width: "48px",
            height: "2px",
            background: "#4AA3A2",
            margin: "0 auto 1.25rem",
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.01em",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {SITE_TAGLINE}
        </p>

        {/* Scroll cue */}
        <div
          style={{
            marginTop: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.5,
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.5" />
            <rect x="7" y="5" width="2" height="5" rx="1" fill="white">
              <animate attributeName="y" values="5;12;5" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </div>
    </section>
  );
}


