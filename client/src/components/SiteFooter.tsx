/**
 * SiteFooter
 * Minimal footer with copyright and optional registered charity text.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Near-black background, muted text, teal logo mark.
 */

import { FOOTER_COPYRIGHT, FOOTER_REGISTERED_TEXT, SITE_TITLE } from "@/config/site";

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
        <FooterLogo />

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

function FooterLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="6" fill="rgba(255,255,255,0.06)" />
      <path
        d="M26 13.5C24.5 12 22.5 11 20 11C16 11 13 13.5 13 17C13 20.5 15.5 22 19 23L21 23.5C23.5 24 25 25 25 27C25 29.5 23 31 20 31C17.5 31 15.5 30 14 28.5"
        stroke="#4AA3A2"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
