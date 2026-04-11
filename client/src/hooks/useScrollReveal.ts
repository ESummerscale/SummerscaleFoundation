/**
 * useScrollReveal
 * Attaches an IntersectionObserver to elements with class "reveal" or "reveal-stagger"
 * and adds the "visible" class when they enter the viewport.
 *
 * Design: Humanist Modernism — fade + translateY entrance animations.
 * Controlled by FEATURES.scrollAnimations in config/site.ts.
 */

import { useEffect } from "react";
import { FEATURES } from "@/config/site";

export function useScrollReveal() {
  useEffect(() => {
    if (!FEATURES.scrollAnimations) return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
