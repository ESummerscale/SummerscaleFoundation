/**
 * Home — single-page scrolling layout for The Summerscale Foundation.
 *
 * Design: Humanist Modernism — warm editorial clarity.
 * Sections (top → bottom):
 *   1. HeroSection
 *   2. MissionSection
 *   3. CarouselSection
 *   4. ContactSection
 *   5. SiteFooter
 *
 * Scroll-reveal animations are initialised via useScrollReveal().
 */

import CarouselSection from "@/components/CarouselSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import SiteFooter from "@/components/SiteFooter";
import StickyHeader from "@/components/StickyHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <CarouselSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
