/**
 * SiteFooter
 * Minimal footer with copyright and optional registered charity text.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Near-black background, muted text, teal logo mark.
 */

import { FOOTER_COPYRIGHT, FOOTER_REGISTERED_TEXT, LOGO_URL, SITE_TITLE } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        backgroundColor: "#0F1E37",
        padding: "2.5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          textAlign: "center",
        }}
      >
        {/* Logo mark */}
        <img
          src={LOGO_URL}
          alt="The Summerscale Foundation logo"
          style={{
            height: "36px",
            width: "auto",
          }}
        />

        {/* Charity name */}
        <p
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          {SITE_TITLE}
        </p>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
          }}
        >
          {FOOTER_COPYRIGHT}
          {FOOTER_REGISTERED_TEXT && (
            <> &nbsp;·&nbsp; {FOOTER_REGISTERED_TEXT}</>
          )}
        </p>
      </div>
    </footer>
  );
}


