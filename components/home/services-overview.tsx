import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  StethoscopeIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "lucide-react";

const serviceCategories = [
  {
    icon: StethoscopeIcon,
    title: "Medical Dermatology",
    description:
      "Expert diagnosis and treatment for a wide range of skin, hair, and nail conditions.",
    highlights: [
      "Acne Management",
      "Fungal Infections",
      "Eczema & Psoriasis",
      "Melasma Treatment",
      "Electrocautery",
    ],
  },
  {
    icon: SparklesIcon,
    title: "Aesthetic & Cosmetic Services",
    description:
      "Advanced treatments designed to exfoliate, contour, and restore your skin's natural glow.",
    highlights: [
      "Facial Care",
      "Diamond Peeling",
      "Chemical Peeling",
      "IPL Hair Reduction",
      "RF Skin Tightening",
    ],
  },
] as const;

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background" id="services-overview">
      <div className="container-max flex flex-col gap-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto" data-animate>
          <span className="label-caps text-on-primary-fixed-variant">
            Our Services
          </span>
          <h2 className="mt-3 text-primary">
            Comprehensive Skin Care Solutions
          </h2>
          <p className="mt-4 text-on-surface-variant">
            From medical treatments for stubborn skin conditions to advanced
            aesthetic procedures, we deliver safe and results-driven care.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <Card
              key={category.title}
              className="border-outline-variant"
              data-animate
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-10 rounded-md bg-petal-pink/50">
                    <category.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {category.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full px-3 py-1 text-xs font-medium bg-petal-pink text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center" data-animate>
          <Link href="/services">
            <Button variant="outline" id="services-view-all">
              View All Services
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
