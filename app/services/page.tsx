"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  StethoscopeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  DropletIcon,
  ScissorsIcon,
  ZapIcon,
  SunIcon,
  HeartPulseIcon,
  EyeIcon,
  SmileIcon,
} from "lucide-react";

const medicalServices = [
  {
    icon: ShieldCheckIcon,
    title: "Acne Management",
    description:
      "Comprehensive acne and pimple treatments, including targeted pimple injections.",
  },
  {
    icon: DropletIcon,
    title: "Fungal Infections",
    description:
      "Effective solutions for buni (ringworm), had-had (jock itch), and alipunga (athlete's foot).",
  },
  {
    icon: HeartPulseIcon,
    title: "Skin Conditions",
    description: "Management of Eczema, Skin Allergies, and Psoriasis.",
  },
  {
    icon: SunIcon,
    title: "Pigmentation & Coloration",
    description: "Treatments for Melasma and improvement of Vitiligo.",
  },
  {
    icon: ScissorsIcon,
    title: "Hair & Nail Care",
    description:
      "Falling hair treatments and medical care for nail infections.",
  },
  {
    icon: ZapIcon,
    title: "Minor Procedures",
    description:
      "Keloid injections and Electrocautery for the safe removal of warts, syringoma, and milia.",
  },
] as const;

const aestheticServices = [
  {
    icon: SmileIcon,
    title: "Facial Care",
    description:
      "Deep-cleansing facial treatments for a refreshed complexion.",
  },
  {
    icon: SparklesIcon,
    title: "Exfoliation & Resurfacing",
    description:
      "Diamond Peeling and Chemical Peeling (available for both Face and Body).",
  },
  {
    icon: EyeIcon,
    title: "Laser Hair Reduction",
    description:
      "IPL (Intense Pulsed Light) treatments for underarms.",
  },
  {
    icon: StethoscopeIcon,
    title: "Skin Tightening & Contouring",
    description:
      "RF (Radio Frequency) therapy to target fine lines, address sagging skin, and improve facial contour.",
  },
] as const;

export default function ServicesPage() {
  const containerRef = useScrollReveal();

  return (
    <>
      <Header />
      <main ref={containerRef} id="services-page">
        {/* Page header */}
        <section className="section-padding bg-surface-container-low">
          <div className="container-max text-center max-w-3xl mx-auto">
            <span className="label-caps text-on-primary-fixed-variant">
              Our Services
            </span>
            <h1 className="mt-3 text-primary">
              Comprehensive Dermatological Care
            </h1>
            <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
              Whether you are seeking effective medical treatments for stubborn
              skin conditions or advanced aesthetic procedures to rejuvenate your
              appearance, our clinic is dedicated to delivering safe,
              evidence-based, and results-driven care.
            </p>
          </div>
        </section>

        {/* Medical Dermatology */}
        <section
          className="section-padding bg-background"
          id="medical-dermatology"
        >
          <div className="container-max flex flex-col gap-10">
            <div className="flex items-center gap-3" data-animate>
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary">
                <StethoscopeIcon className="size-6 text-primary-foreground" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-1">
                  Medical
                </Badge>
                <h2 className="text-primary">Medical Dermatology</h2>
              </div>
            </div>
            <p className="text-on-surface-variant max-w-2xl" data-animate>
              Expert diagnosis and treatment for a wide range of skin, hair, and
              nail conditions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalServices.map((service) => (
                <Card
                  key={service.title}
                  className="border-outline-variant"
                  data-animate
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-9 rounded-md bg-petal-pink/50">
                        <service.icon className="size-4 text-primary" />
                      </div>
                      <CardTitle className="text-base">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="container-max">
          <Separator />
        </div>

        {/* Aesthetic & Cosmetic */}
        <section
          className="section-padding bg-background"
          id="aesthetic-services"
        >
          <div className="container-max flex flex-col gap-10">
            <div className="flex items-center gap-3" data-animate>
              <div className="flex items-center justify-center size-12 rounded-lg bg-tertiary-container">
                <SparklesIcon className="size-6 text-on-tertiary-container" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-1">
                  Aesthetic
                </Badge>
                <h2 className="text-primary">
                  Aesthetic & Cosmetic Services
                </h2>
              </div>
            </div>
            <p className="text-on-surface-variant max-w-2xl" data-animate>
              Advanced treatments designed to exfoliate, contour, and restore
              your skin&apos;s natural glow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aestheticServices.map((service) => (
                <Card
                  key={service.title}
                  className="border-outline-variant"
                  data-animate
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-9 rounded-md bg-petal-pink/50">
                        <service.icon className="size-4 text-primary" />
                      </div>
                      <CardTitle className="text-base">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
