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
                src="/images/magno-skin-care-clinic-hero-pasig.jpg"
                alt="Interior of Magno Skin Care Clinic showing the modern treatment room with marble countertop and dermascope"
                fill
                sizes="(max-width: 1024px) 100vw, 544px"
                className="object-cover grayscale-[0.2] brightness-105"
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

        {/* Lead Dermatologist */}
        <section className="section-padding bg-background" id="lead-dermatologist">
          <div className="container-max flex flex-col gap-10">
            <div className="text-center max-w-2xl mx-auto" data-animate>
              <span className="label-caps text-on-primary-fixed-variant">
                Expert Care
              </span>
              <h2 className="mt-3 text-primary">Meet Our Lead Dermatologist</h2>
              <p className="mt-4 text-on-surface-variant">
                At Magno Skin Care Clinic, we are dedicated to providing the highest
                standard of medical and aesthetic dermatology. Our practice is led by
                Dr. Elsa Magno, who brings decades of specialized expertise to every patient.
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="border-outline-variant overflow-hidden max-w-sm" data-animate>
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/dr-elsa-magno.webp"
                    alt="Dr. Elsa Crisostomo Bautista-Magno, MD"
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover grayscale-[0.2] brightness-105"
                  />
                </div>
                <CardContent className="pt-6 text-center">
                  <CardTitle className="text-lg">Dr. Elsa Crisostomo Bautista-Magno</CardTitle>
                  <p className="text-sm font-medium text-primary mt-1">
                    Lead Dermatologist & MD
                  </p>
                  <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                    With over 38 years of experience, Dr. Magno specializes in the treatment of
                    hair, skin, and nail infections. Practicing since 1988, she serves as the
                    primary practitioner at Magno Skin Care Clinic.
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
