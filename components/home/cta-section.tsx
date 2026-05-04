import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneIcon, MessageSquareIcon } from "lucide-react";

export function CtaSection() {
  return (
    <section
      className="section-padding bg-primary text-primary-foreground"
      id="cta-section"
    >
      <div className="container-max text-center flex flex-col items-center gap-6">
        <h2 data-animate className="text-primary-foreground">
          Ready to Start Your Skin Care Journey?
        </h2>
        <p
          data-animate
          className="text-primary-foreground/80 max-w-xl leading-relaxed"
        >
          We are always happy to assist you with inquiries or appointment
          bookings. Reach out to us through any of the following channels.
        </p>
        <div
          data-animate
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              id="cta-contact"
            >
              <MessageSquareIcon data-icon="inline-start" />
              Contact Us
            </Button>
          </Link>
          <a href="tel:09770315017">
            <Button
              variant="ghost"
              size="lg"
              className="border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              id="cta-call"
            >
              <PhoneIcon data-icon="inline-start" />
              0977 031 5017
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
