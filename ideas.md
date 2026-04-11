# Design Brainstorm — The Summerscale Foundation

<response>
<idea>
**Design Movement:** Humanist Modernism — warm editorial clarity
**Core Principles:**
1. Generous whitespace as a signal of calm authority
2. Typographic hierarchy driven by weight contrast, not size alone
3. Warm neutrals offset by a single deep-blue anchor colour
4. Photography as the primary emotional carrier

**Color Philosophy:** The palette anchors on Deep Blue (#1E3A5F) for trust, softened by a warm off-white background (#F9FAFB) and a muted teal accent (#4AA3A2). The aim is institutional confidence without coldness.

**Layout Paradigm:** Asymmetric editorial columns. The hero uses a left-weighted text block with a subtle geometric rule. Sections alternate between full-bleed and constrained-width text columns to create rhythm.

**Signature Elements:**
- Thin horizontal rule in teal used as a section divider motif
- Large, lightly tracked uppercase section labels in muted grey above each heading

**Interaction Philosophy:** Restrained. Scroll-triggered fade-ins only. No hover gimmicks — interactions should feel like turning a page.

**Animation:** `opacity 0→1` + `translateY 24px→0` on scroll entry, 600ms ease-out, staggered per element.

**Typography System:** DM Serif Display (headings, 600) + DM Sans (body, 400/500). Heading size scale: 48/36/24px. Body: 17px, line-height 1.7.
</idea>
<text>Humanist Modernism — warm editorial clarity with asymmetric columns, DM Serif Display headings, teal accents, and restrained scroll animations.</text>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** Quiet Luxury — understated institutional gravitas
**Core Principles:**
1. Monochromatic near-white canvas with deep navy as the sole contrast
2. Typography does all the heavy lifting — no decorative flourishes
3. Ample vertical breathing room between every element
4. Images presented as framed artefacts, not background fills

**Color Philosophy:** Near-white (#F9FAFB) background, deep navy (#1E3A5F) for all primary text and UI, teal (#4AA3A2) used only for interactive elements and the email link. The restraint signals seriousness.

**Layout Paradigm:** Strict centred column (max 680px for text, 1100px for images). No sidebars. Sections separated by generous vertical space rather than dividers.

**Signature Elements:**
- Carousel images displayed with a subtle drop shadow and 4px rounded corners
- Email address displayed in a large, spaced-out typographic treatment

**Interaction Philosophy:** Zero decoration. Every interaction is functional. Carousel arrows are minimal outlined circles.

**Animation:** Minimal — only the carousel slide transition (300ms ease-in-out). No scroll animations.

**Typography System:** Playfair Display (headings, 700) + Source Sans 3 (body, 400). Heading: 42px. Body: 16px, line-height 1.65.
</idea>
<text>Quiet Luxury — strict centred column, Playfair Display headings, near-white canvas, no scroll animations, images as framed artefacts.</text>
<probability>0.06</probability>
</response>

<response>
<idea>
**Design Movement:** Warm Civic — approachable community institution
**Core Principles:**
1. Friendly but structured — rounded corners, soft shadows, clear hierarchy
2. Teal accent used boldly for CTAs and section accents
3. Photography fills the carousel edge-to-edge within a rounded frame
4. Sticky minimal header reinforces brand presence on scroll

**Color Philosophy:** Soft white background with teal (#4AA3A2) as a warm, energetic accent. Deep blue (#1E3A5F) anchors headings. Light grey (#E5E7EB) used for card backgrounds and dividers. The palette feels welcoming without being childish.

**Layout Paradigm:** Centred column with a sticky top bar carrying the logo. Hero is full-viewport-height with a large centred wordmark. Sections use card-like containers with subtle shadows.

**Signature Elements:**
- Teal left-border accent on the mission text block
- Carousel with rounded-xl corners and soft shadow

**Interaction Philosophy:** Friendly micro-interactions: teal underline grows on email hover; carousel arrows fill with teal on hover.

**Animation:** Scroll-triggered fade + slide-up (400ms), staggered children. Carousel: 350ms ease-in-out slide.

**Typography System:** Nunito (headings, 700) + Nunito (body, 400). Heading: 44px. Body: 16px, line-height 1.7.
</idea>
<text>Warm Civic — sticky header, teal accent, rounded carousel, Nunito typeface, friendly micro-interactions, scroll-triggered fade-ups.</text>
<probability>0.09</probability>
</response>

---

## Selected Approach

**Humanist Modernism** (Response 1) — warm editorial clarity.

Rationale: The asymmetric editorial layout and DM Serif Display / DM Sans pairing gives the site a trustworthy, publication-quality feel appropriate for a charity. The teal accent and warm off-white background avoid the generic "blue charity website" cliché while still communicating stability.
