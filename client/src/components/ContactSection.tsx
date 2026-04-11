/**
 * ContactSection
 * Simple, direct contact section with email link.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Deep-blue background panel, large typographic email treatment,
 * teal hover underline animation.
 */

import { CONTACT_EMAIL, CONTACT_HEADING, CONTACT_SUBTEXT } from "@/config/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        padding: "clamp(56px, 8vw, 96px) 0",
        backgroundColor: "#1E3A5F",
      }}
    >
      <div className="container">
        <div
          className="reveal"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Section label */}
          <span
            className="section-label"
            style={{ color: "rgba(74,163,162,0.9)" }}
          >
            Reach out
          </span>

          {/* Teal rule */}
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: "40px",
              height: "2px",
              background: "#4AA3A2",
              margin: "0 auto 1.25rem",
            }}
          />

          {/* Heading */}
          <h2
            id="contact-heading"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 400,
              color: "#FFFFFF",
              margin: "0 0 1rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {CONTACT_HEADING}
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              margin: "0 0 2.5rem",
            }}
          >
            {CONTACT_SUBTEXT}
          </p>

          {/* Email link */}
          <EmailLink email={CONTACT_EMAIL} />
        </div>
      </div>
    </section>
  );
}

function EmailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label={`Send an email to ${email}`}
      style={{
        display: "inline-block",
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
        fontWeight: 400,
        color: "#4AA3A2",
        textDecoration: "none",
        letterSpacing: "-0.01em",
        position: "relative",
        paddingBottom: "4px",
      }}
      className="email-link"
    >
      {email}
      <style>{`
        .email-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #4AA3A2;
          transition: width 0.3s ease;
        }
        .email-link:hover::after,
        .email-link:focus::after {
          width: 100%;
        }
        .email-link:focus {
          outline: 2px solid #4AA3A2;
          outline-offset: 4px;
          border-radius: 2px;
        }
      `}</style>
    </a>
  );
}
