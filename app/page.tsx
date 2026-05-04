"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { AboutSnippet } from "@/components/home/about-snippet";
import { CtaSection } from "@/components/home/cta-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const containerRef = useScrollReveal();

  return (
    <>
      <Header />
      <main ref={containerRef} id="home-page">
        <HeroSection />
        <ServicesOverview />
        <AboutSnippet />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
