import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function AboutSnippet() {
  return (
    <section
      className="section-padding bg-surface-container-low"
      id="about-snippet"
    >
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden" data-animate>
          <Image
            src="/images/dermatology-medical-treatment-pasig.jpg"
            alt="Dermatologist performing a skin examination with a dermatoscope at Magno Skin Care Clinic"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6" data-animate>
          <span className="label-caps text-on-primary-fixed-variant">About Us</span>
          <h2 className="text-primary">
            Your Trusted Partner in Skin Health
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            At Magno Skin Care Clinic, we believe that healthy skin is the
            foundation of confidence. Whether you are seeking effective medical
            treatments for stubborn skin conditions or advanced aesthetic
            procedures to rejuvenate your appearance, our clinic is dedicated to
            delivering safe, evidence-based, and results-driven care.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Conveniently located in Barangay Malinao, Pasig City, we provide
            comprehensive and personalized dermatological care for all your skin,
            hair, and nail needs.
          </p>
          <div className="pt-2">
            <Link href="/about">
              <Button variant="outline" id="about-snippet-cta">
                Learn More About Us
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
