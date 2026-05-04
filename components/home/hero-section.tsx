"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current, {
        y: 48,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          subtextRef.current,
          {
            y: 32,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden lg:min-h-[calc(100vh-72px)] flex items-center justify-center py-24 lg:py-0"
      id="hero-section"
    >
      {/* Background Image with Filter and Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clinic-hero.png"
          alt="Modern treatment room at Magno Skin Care Clinic"
          fill
          priority
          className="object-cover"
        />
        {/* Sophisticated glassmorphism overlay: Color filter + subtle blur */}
        <div className="absolute inset-0 bg-surface-container-low/75 backdrop-blur-[6px]" />
      </div>

      <div className="container-max relative z-10 w-full text-center flex flex-col items-center">
        {/* Text content centered */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto items-center">
          <span className="label-caps text-on-primary-fixed-variant tracking-[0.2em]">
            Dermatology Clinic · Pasig City
          </span>
          <h1 ref={headingRef} className="text-primary text-4xl md:text-5xl lg:text-7xl font-heading leading-[1.1] tracking-tight">
            Healthy Skin Is the <br className="hidden md:block" /> Foundation of Confidence
          </h1>
          <p
            ref={subtextRef}
            className="text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-2xl font-medium"
          >
            Comprehensive and personalized dermatological care for all your
            skin, hair, and nail needs. Safe, evidence-based, and
            results-driven.
          </p>
          
          <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href="/services">
              <Button size="lg" className="h-14 px-10 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" id="hero-cta-services">
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-14 px-10 text-base bg-background/40 backdrop-blur-md border-primary/20 hover:bg-background/60 transition-all" id="hero-cta-contact">
                Book a Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
