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
      className="relative overflow-hidden bg-surface-container-low"
      id="hero-section"
    >
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center section-padding">
        {/* Text content */}
        <div className="flex flex-col gap-6">
          <span className="label-caps text-on-primary-fixed-variant">
            Dermatology Clinic · Pasig City
          </span>
          <h1 ref={headingRef} className="text-primary">
            Healthy Skin Is the Foundation of Confidence
          </h1>
          <p
            ref={subtextRef}
            className="text-lg leading-relaxed text-on-surface-variant max-w-lg"
          >
            Comprehensive and personalized dermatological care for all your
            skin, hair, and nail needs. Safe, evidence-based, and
            results-driven.
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-3 pt-2">
            <Link href="/services">
              <Button size="lg" id="hero-cta-services">
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" id="hero-cta-contact">
                Book a Visit
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/images/clinic-hero.png"
            alt="Modern treatment room at Magno Skin Care Clinic with a dermascope on a marble countertop and a cream leather treatment chair"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-surface-container-low/80 via-transparent to-transparent lg:w-1/2" />
    </section>
  );
}
