"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheckIcon,
  HeartIcon,
  TargetIcon,
  ArrowRightIcon,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Evidence-Based Care",
    description:
      "Every treatment we recommend is grounded in medical science and proven dermatological practices.",
  },
  {
    icon: HeartIcon,
    title: "Patient-Centered Approach",
    description:
      "We provide personalized care tailored to your unique skin type, concerns, and goals.",
  },
  {
    icon: TargetIcon,
    title: "Results-Driven",
    description:
      "Our focus is on delivering visible, lasting results that help you look and feel your absolute best.",
  },
] as const;

export default function AboutPage() {
  const containerRef = useScrollReveal();

  return (
    <>
      <Header />
      <main ref={containerRef} id="about-page">
        {/* Page header */}
        <section className="section-padding bg-surface-container-low">
          <div className="container-max text-center max-w-3xl mx-auto">
            <span className="label-caps text-on-primary-fixed-variant">
              About Us
            </span>
            <h1 className="mt-3 text-primary">
              Your Trusted Partner in Skin Health
            </h1>
            <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
              Magno Skin Care Clinic has been serving the Pasig City community
              with comprehensive and personalized dermatological care.
            </p>
          </div>
        </section>

        {/* Clinic story */}
        <section className="section-padding bg-background" id="clinic-story">
          <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden" data-animate>
              <Image
                src="/images/clinic-hero.png"
                alt="Interior of Magno Skin Care Clinic showing the modern treatment room with marble countertop and dermascope"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <article className="flex flex-col gap-6" data-animate>
              <h2 className="text-primary">Our Story</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Welcome to Magno Skin Care Clinic, your trusted partner in
                achieving healthy, radiant skin. Conveniently located in
                Barangay Malinao, Pasig City, we provide comprehensive and
                personalized dermatological care for all your skin, hair, and
                nail needs.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Whether you are seeking effective medical treatments for
                stubborn skin conditions or advanced aesthetic procedures to
                rejuvenate your appearance, our clinic is dedicated to delivering
                safe, evidence-based, and results-driven care.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                At Magno Skin Care Clinic, we believe that healthy skin is the
                foundation of confidence, and we are here to help you look and
                feel your absolute best.
              </p>
            </article>
          </div>
        </section>

        <div className="container-max">
          <Separator />
        </div>

        {/* Values */}
        <section className="section-padding bg-background" id="our-values">
          <div className="container-max flex flex-col gap-10">
            <div className="text-center max-w-2xl mx-auto" data-animate>
              <span className="label-caps text-on-primary-fixed-variant">
                Our Values
              </span>
              <h2 className="mt-3 text-primary">What Guides Our Practice</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-outline-variant text-center"
                  data-animate
                >
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center size-12 rounded-full bg-petal-pink/50">
                      <value.icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="mt-3">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="container-max">
          <Separator />
        </div>

        {/* Team — content needed */}
        <section className="section-padding bg-background" id="our-team">
          <div className="container-max flex flex-col gap-10">
            <div className="text-center max-w-2xl mx-auto" data-animate>
              <span className="label-caps text-on-primary-fixed-variant">
                Our Team
              </span>
              <h2 className="mt-3 text-primary">Meet the Experts</h2>
              <p className="mt-4 text-on-surface-variant">
                {/* [TODO: content] — Team member names, credentials, and photos
                    are not available in BUSINESS-INFO.md. Please provide
                    dermatologist names, qualifications, and headshot photos. */}
                Our team of qualified dermatology professionals is dedicated to
                providing the highest standard of skin care. Each member brings
                specialized expertise and a genuine commitment to patient
                well-being.
              </p>
            </div>

            {/* [TODO: content] — Replace with actual team member cards once
                names, credentials, and photos are provided. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-petal-pink text-center" data-animate>
                <CardContent className="pt-6">
                  <div className="mx-auto size-24 rounded-full bg-surface-container-high mb-4" />
                  <p className="text-sm font-medium text-foreground">
                    {/* [TODO: content] — Dermatologist name */}
                    Lead Dermatologist
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {/* [TODO: content] — Credentials */}
                    Board-Certified Dermatologist
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="section-padding bg-surface-container-low"
          id="about-cta"
        >
          <div
            className="container-max text-center flex flex-col items-center gap-6"
            data-animate
          >
            <h2 className="text-primary">
              Start Your Journey to Healthier Skin
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Visit us at Barangay Malinao, Pasig City or reach out to book your
              appointment today.
            </p>
            <Link href="/contact">
              <Button size="lg" id="about-cta-button">
                Book a Visit
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
