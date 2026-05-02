# Customisation Guide

This guide shows you how to make common changes to your Summerscale Foundation website without touching any code.

**All changes are made in one file:** `client/src/config/site.ts`

---

## 1. Update Text Content

### Change the Tagline

```typescript
// Before
export const SITE_TAGLINE = "Helping children thrive across the South-East";

// After
export const SITE_TAGLINE = "Your new tagline here";
```

### Update the Mission Statement

```typescript
export const MISSION_BODY = `
  Your new mission statement goes here.
  You can include multiple paragraphs.
`;
```

### Change Contact Information

```typescript
export const CONTACT_EMAIL = "newemail@example.org";
export const CONTACT_HEADING = "Get in Touch";
export const CONTACT_SUBTEXT = "Your custom contact message here";
```

### Update Footer Text

```typescript
export const FOOTER_REGISTERED_TEXT = "Registered charity number 1208789";
```

---

## 2. Update Carousel Images

### Add a New Image

```typescript
export const CAROUSEL_IMAGES = [
  // ... existing images
  {
    src: "https://your-cdn.com/new-image.jpg",
    alt: "Description for screen readers",
    caption: "Image Caption",
  },
];
```

### Replace an Existing Image

```typescript
export const CAROUSEL_IMAGES = [
  {
    src: "https://your-cdn.com/new-image.jpg",  // ← Change this URL
    alt: "Updated description",
    caption: "Updated Caption",
  },
  // ... rest of images
];
```

### Remove an Image

Simply delete the entire object from the array:

```typescript
export const CAROUSEL_IMAGES = [
  // Remove the image you don't want
  {
    src: "https://your-cdn.com/image-to-keep.jpg",
    alt: "Keep this one",
    caption: "This stays",
  },
];
```

---

## 3. Customise Colours

### Change the Primary Colour (Deep Blue)

```typescript
export const COLORS = {
  primary: "#2D5A8C",  // ← Change this hex code
  accent: "#4AA3A2",
  // ... rest of colours
};
```

### Change the Accent Colour (Teal)

```typescript
export const COLORS = {
  primary: "#1E3A5F",
  accent: "#5CB3B0",   // ← Change this hex code
  // ... rest of colours
};
```

### Change the Background Colour

```typescript
export const COLORS = {
  primary: "#1E3A5F",
  accent: "#4AA3A2",
  background: "#FAFBFC",  // ← Change this hex code
  // ... rest of colours
};
```

**Tip:** Use a colour picker tool like [colorpicker.com](https://www.colorpicker.com) to find hex codes.

---

## 4. Toggle Features On/Off

### Enable Carousel Auto-Play

```typescript
export const FEATURES = {
  stickyHeader: true,
  carouselAutoPlay: true,  // ← Change to true
  carouselAutoPlayInterval: 5000,  // Milliseconds between slides
  carouselAutoPlayInterval: 5000,
  scrollAnimations: true,
  showCarouselDots: true,
  showCarouselCaptions: true,
};
```

### Disable Scroll Animations

```typescript
export const FEATURES = {
  stickyHeader: true,
  carouselAutoPlay: false,
  carouselAutoPlayInterval: 5000,
  scrollAnimations: false,  // ← Change to false
  showCarouselDots: true,
  showCarouselCaptions: true,
};
```

### Hide Carousel Captions

```typescript
export const FEATURES = {
  stickyHeader: true,
  carouselAutoPlay: false,
  carouselAutoPlayInterval: 5000,
  scrollAnimations: true,
  showCarouselDots: true,
  showCarouselCaptions: false,  // ← Change to false
};
```

### Disable Sticky Header

```typescript
export const FEATURES = {
  stickyHeader: false,  // ← Change to false
  carouselAutoPlay: false,
  carouselAutoPlayInterval: 5000,
  scrollAnimations: true,
  showCarouselDots: true,
  showCarouselCaptions: true,
};
```

---

## 5. Update Logo

The logo is hosted on a CDN. To change it:

1. Upload your new logo to a CDN (e.g., Cloudinary, Imgur, or your own server)
2. Copy the image URL
3. Update the config:

```typescript
export const LOGO_URL = "https://your-cdn.com/your-logo.png";
```

---

## 6. Change Typography

### Use Different Fonts

```typescript
export const TYPOGRAPHY = {
  headingFont: "'Georgia', serif",  // ← Change heading font
  bodyFont: "'Helvetica', sans-serif",  // ← Change body font
  headingWeight: 400,
  bodyWeight: 400,
  lineHeightBody: 1.7,
};
```

**Note:** If using Google Fonts, you'll also need to add the font import to `client/index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap"
  rel="stylesheet"
/>
```

---

## 7. Update Charity Information

### Change Charity Name

```typescript
export const SITE_TITLE = "Your Charity Name";
```

### Update Charity Number

```typescript
export const FOOTER_REGISTERED_TEXT = "Registered charity number 1234567";
```

---

## 8. Update Contact Email

```typescript
export const CONTACT_EMAIL = "contact@yourcharityname.org";
```

---

## 9. Update Layout Spacing

### Increase Section Padding

```typescript
export const LAYOUT = {
  maxContentWidth: "1100px",
  sectionPaddingDesktop: "120px",  // ← Increase from 96px
  sectionPaddingMobile: "72px",    // ← Increase from 56px
};
```

---

## Testing Your Changes

After editing `client/src/config/site.ts`:

1. **In development:** Changes appear instantly (hot reload)
2. **In production:** Push to GitHub and wait 1–2 minutes for deployment

```bash
# Local development
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

---

## Common Mistakes to Avoid

❌ **Don't:**
- Leave strings empty (`""`) — use placeholder text instead
- Mix single and double quotes in the same line
- Forget commas between array items
- Delete the closing semicolon

✅ **Do:**
- Use consistent formatting
- Test changes locally before pushing
- Keep backup copies of your config
- Use descriptive alt text for images

---

## Need Help?

- **Deployment issues?** See `GITHUB_PAGES_SETUP.md`
- **TypeScript errors?** Check the syntax in `client/src/config/site.ts`
- **Colours don't match?** Use a hex colour picker to verify codes
- **Images not showing?** Verify the CDN URL is correct and accessible

---

**Happy customising! 🎨**
