"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook to apply a GSAP + ScrollTrigger reveal animation
 * to all children of the container ref that have [data-animate] attribute.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll("[data-animate]");
      elements.forEach((el, i) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
