/**
 * ============================================================
 *  SUMMERSCALE FOUNDATION — SITE CONFIGURATION
 * ============================================================
 *
 *  All user-facing content, colour tokens, typography settings,
 *  and feature flags live here.  Edit this file to customise
 *  the website without touching any component code.
 *
 *  Design philosophy: Humanist Modernism — warm editorial clarity.
 *  DM Serif Display (headings) + DM Sans (body).
 *  Palette: Deep Blue / Soft White / Muted Teal / Light Grey.
 * ============================================================
 */

// ─── BRAND & IDENTITY ────────────────────────────────────────
export const SITE_TITLE = "The Summerscale Foundation";
export const SITE_TAGLINE = "Helping children thrive across the South-East";
export const SITE_DESCRIPTION =
  "Supporting communities through sustainable initiatives, education, and direct aid.";

// ─── CONTACT ─────────────────────────────────────────────────
export const CONTACT_EMAIL = "contact@summerscale.co.uk";
export const CONTACT_HEADING = "Get in Touch";
export const CONTACT_SUBTEXT =
  "Are you a charitable organisation seeking a capital grant to further your work? Reach out and let us help you to help others.";

// ─── MISSION ─────────────────────────────────────────────────
export const MISSION_HEADING = "Our Mission";
export const MISSION_BODY =
  "The Summerscale Foundation is dedicated to supporting communities through sustainable initiatives, education, and direct aid. Our goal is to create lasting, positive change by empowering individuals and families in need.";

// ─── CAROUSEL / PAST WORK ────────────────────────────────────
export const CAROUSEL_HEADING = "Our Work";
export const CAROUSEL_SUBTEXT =
  "A glimpse of the programmes and partnerships that are making a real difference.";

export const CAROUSEL_IMAGES = [
  {
    src: "https://i.ibb.co/7xM4CJFm/carousel-image-1.jpg",
    alt: "Founder Zak Summerscale standing alongside several school students, in front of an adaptive minibus with the Summerscale Foundation logo. Two students are holding a white cane and one student is using a wheelchair.",
    caption: "Donated an adaptive minibus to Angering School (partnering with Variety Golf Society)",
  },
  {
    src: "https://i.ibb.co/FkvkQ60R/readforgoodhome.jpg",
    alt: "Image of a smiling child reading a book",
    caption: "Donated £27,000 to ReadForGood to provide books to sick children in hospital.",
  },
];

// ─── FOOTER ──────────────────────────────────────────────────
export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} The Summerscale Foundation. All rights reserved`;
export const FOOTER_REGISTERED_TEXT = "Registered charity number 1208789"; // set to "" to hidee

// ─── COLOUR PALETTE ──────────────────────────────────────────
//  These values are mirrored in index.css as CSS custom properties.
//  Edit both places if you change a colour.
export const COLORS = {
  primary: "#1E3A5F",       // Deep Blue — trust, stability
  accent: "#4AA3A2",        // Muted Teal — warmth, action
  background: "#F9FAFB",    // Soft White
  surface: "#FFFFFF",       // Card / section surface
  divider: "#E5E7EB",       // Light Grey
  textPrimary: "#111827",   // Near-black body text
  textSecondary: "#6B7280", // Muted secondary text
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────────
export const TYPOGRAPHY = {
  headingFont: "'DM Serif Display', Georgia, serif",
  bodyFont: "'DM Sans', system-ui, sans-serif",
  headingWeight: 400,   // DM Serif Display looks best at regular weight
  bodyWeight: 400,
  lineHeightBody: 1.7,
} as const;

// ─── FEATURE FLAGS ───────────────────────────────────────────
export const FEATURES = {
  stickyHeader: true,          // Show a minimal sticky header with logo on scroll
  carouselAutoPlay: false,     // Auto-advance carousel (default OFF per spec)
  carouselAutoPlayInterval: 5000, // ms between auto-advances (if enabled)
  scrollAnimations: true,      // Fade-in on scroll
  showCarouselDots: true,      // Dot indicators below carousel
  showCarouselCaptions: true,  // Caption overlay on carousel images
} as const;

// ─── LAYOUT ──────────────────────────────────────────────────
export const LAYOUT = {
  maxContentWidth: "1100px",
  sectionPaddingDesktop: "96px",
  sectionPaddingMobile: "56px",
} as const;

// ─── LOGO ────────────────────────────────────────────────────
export const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663543813440/mhM4wK3KKAa6F2vqxiSRWY/pasted_file_vGMlBV_image_1c9e9085.png";
