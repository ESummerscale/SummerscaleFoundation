# The Summerscale Foundation — Website

A modern, elegant single-page website for The Summerscale Foundation charity, built with React, Vite, TypeScript, and Tailwind CSS.

**Live Demo:** [View on GitHub Pages](#) (after first deployment)

## Features

- **Single-page scrolling design** — Hero, Mission, Image Carousel, Contact, Footer
- **Fully configurable** — Edit `client/src/config/site.ts` to update all content, colours, and settings
- **Image carousel** — Auto-play optional, keyboard navigation, touch/swipe support, dot indicators
- **Responsive design** — Mobile-first, works beautifully on all devices
- **Accessibility** — WCAG AA compliant, semantic HTML, keyboard navigation
- **Scroll animations** — Subtle fade-in effects on scroll (configurable)
- **Sticky header** — Minimal navigation that appears after scrolling past hero
- **Modern typography** — DM Serif Display headings + DM Sans body text
- **Warm colour palette** — Deep blue, soft white, muted teal accents

## Quick Start

### Prerequisites

- Node.js 22+ and pnpm 10+

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Configuration

All website content and styling is centralised in a single config file:

**File:** `client/src/config/site.ts`

### Customisable Settings

```typescript
// Brand & Identity
SITE_TITLE                    // Charity name
SITE_TAGLINE                  // Tagline (hero section)
SITE_DESCRIPTION              // Meta description

// Contact
CONTACT_EMAIL                 // Email link
CONTACT_HEADING               // "Get in Touch" heading
CONTACT_SUBTEXT               // Contact section description

// Mission
MISSION_HEADING               // "Our Mission" heading
MISSION_BODY                  // Mission statement text

// Carousel
CAROUSEL_HEADING              // "Our Work" heading
CAROUSEL_SUBTEXT              // Carousel description
CAROUSEL_IMAGES               // Array of image URLs + captions

// Footer
FOOTER_COPYRIGHT              // Copyright text
FOOTER_REGISTERED_TEXT        // Charity registration info

// Colours
COLORS                        // Primary, accent, text, divider colours

// Typography
TYPOGRAPHY                    // Font families, weights, line heights

// Features
FEATURES                      // Toggle sticky header, auto-play, animations, etc.
```

### Example: Update the Tagline

Edit `client/src/config/site.ts`:

```typescript
export const SITE_TAGLINE = "Your new tagline here";
```

Save and the site updates instantly in dev mode.

### Example: Add a New Carousel Image

```typescript
export const CAROUSEL_IMAGES = [
  // ... existing images
  {
    src: "https://your-cdn.com/image.jpg",
    alt: "Description for accessibility",
    caption: "Image Caption",
  },
];
```

### Example: Change Colours

```typescript
export const COLORS = {
  primary: "#1E3A5F",       // Deep Blue
  accent: "#4AA3A2",        // Muted Teal
  background: "#F9FAFB",    // Soft White
  // ... etc
};
```

## File Structure

```
summerscale/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow for GitHub Pages
├── client/
│   ├── public/                  # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MissionSection.tsx
│   │   │   ├── CarouselSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── StickyHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   ├── config/
│   │   │   └── site.ts          # ← EDIT THIS FILE TO CUSTOMIZE
│   │   ├── hooks/
│   │   │   └── useScrollReveal.ts
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css            # Global styles & design tokens
│   └── index.html
├── package.json
├── GITHUB_PAGES_SETUP.md        # Detailed deployment guide
└── README_GITHUB.md             # This file
```

## Deployment

### GitHub Pages (Recommended for Charities)

GitHub Pages provides **free hosting** for public repositories. The included GitHub Actions workflow automates the build and deployment process.

**Setup Instructions:**

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Select **GitHub Actions** as the source
4. The workflow will automatically deploy on every push to `main`
5. Your site will be live at: `https://USERNAME.github.io/REPO_NAME/`

**Full guide:** See `GITHUB_PAGES_SETUP.md`

### Custom Domain

To use a custom domain (e.g., `summerscalefoundation.org`):

1. Configure DNS to point to GitHub Pages
2. Add your domain in **Settings** → **Pages** → **Custom domain**
3. GitHub will automatically provision an SSL certificate

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Making Updates

After deployment, any changes pushed to `main` will automatically rebuild and redeploy:

```bash
# Edit files (e.g., client/src/config/site.ts)
# ...

# Commit and push
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

The GitHub Actions workflow will run automatically, and your changes will be live within 1–2 minutes.

## Development

### Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool (fast HMR)
- **TypeScript 5.6** — Type safety
- **Tailwind CSS 4** — Utility-first styling
- **shadcn/ui** — Pre-built accessible components
- **Wouter** — Lightweight client-side routing
- **Framer Motion** — Smooth animations

### Code Style

- ESLint + Prettier configured
- TypeScript strict mode enabled
- Accessible HTML semantics throughout

### Building

```bash
# Development build (with source maps)
pnpm run build

# Production build (optimised)
pnpm run build

# Check TypeScript
pnpm run check

# Format code
pnpm run format
```

## Performance

- **Lighthouse target:** 90+ score
- **Lazy-loaded carousel images** — faster initial load
- **Optimised fonts** — Google Fonts with preconnect
- **CSS-in-JS minimised** — Tailwind utility classes only
- **No external dependencies** — Minimal bundle size

## Accessibility

- WCAG AA compliant
- Semantic HTML (`<section>`, `<nav>`, `<footer>`)
- Keyboard navigation for carousel (arrow keys)
- Image alt text on all photos
- Sufficient colour contrast ratios
- Focus indicators on interactive elements

## License

This project is open source and available under the MIT License.

## Support

For questions or issues:

1. Check `GITHUB_PAGES_SETUP.md` for deployment help
2. Review `client/src/config/site.ts` for customisation
3. Open an issue on GitHub for bugs or feature requests

---

**Built with ❤️ for The Summerscale Foundation**
