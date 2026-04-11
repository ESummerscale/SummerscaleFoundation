/**
 * StickyHeader
 * Minimal sticky header that appears after the user scrolls past the hero.
 * Controlled by FEATURES.stickyHeader in config/site.ts.
 *
 * Design: Humanist Modernism — white surface, deep-blue wordmark, teal underline on scroll.
 */

import { useEffect, useState } from "react";
import { FEATURES, SITE_TITLE } from "@/config/site";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!FEATURES.stickyHeader) return;

    const onScroll = () => {
      // Show header after scrolling 80% of the viewport height (past hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!FEATURES.stickyHeader) return null;

  return (
    <header
      aria-label="Site header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #E5E7EB",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s ease",
        willChange: "transform",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          height: "56px",
        }}
      >
        {/* Logo mark */}
        <a
          href="#hero"
          aria-label="Back to top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <LogoMark size={28} />
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.05rem",
              color: "#1E3A5F",
              letterSpacing: "-0.01em",
            }}
          >
            {SITE_TITLE}
          </span>
        </a>

        {/* Nav anchor */}
        <nav style={{ marginLeft: "auto" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#4AA3A2",
              textDecoration: "none",
              padding: "6px 14px",
              border: "1.5px solid #4AA3A2",
              borderRadius: "4px",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#4AA3A2";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#4AA3A2";
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

/** Inline SVG logo mark — a simple stylised "S" monogram */
function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="6" fill="#1E3A5F" />
      <path
        d="M26 13.5C24.5 12 22.5 11 20 11C16 11 13 13.5 13 17C13 20.5 15.5 22 19 23L21 23.5C23.5 24 25 25 25 27C25 29.5 23 31 20 31C17.5 31 15.5 30 14 28.5"
        stroke="#4AA3A2"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
