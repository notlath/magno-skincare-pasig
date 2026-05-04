import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";

/* [TODO: content] — Replace with real patient testimonials from the clinic.
   These are placeholder structures only. */
const testimonials = [
  {
    name: "Maria S.",
    service: "Acne Management",
    text: "After years of struggling with stubborn acne, the team at Magno Skin Care Clinic finally helped me achieve clear skin. The treatment was personalized and the results were amazing.",
    rating: 5,
  },
  {
    name: "Jose R.",
    service: "Chemical Peeling",
    text: "The chemical peeling treatment made such a noticeable difference. My skin looks brighter and more even-toned. The staff was very professional and made me feel comfortable throughout.",
    rating: 5,
  },
  {
    name: "Ana L.",
    service: "RF Skin Tightening",
    text: "I was impressed by the RF treatment results. The fine lines around my eyes have significantly reduced. Highly recommend this clinic for anyone looking for non-invasive skin rejuvenation.",
    rating: 5,
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background" id="testimonials">
      <div className="container-max flex flex-col gap-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto" data-animate>
          <span className="label-caps text-on-primary-fixed-variant">
            Testimonials
          </span>
          <h2 className="mt-3 text-primary">What Our Patients Say</h2>
          <p className="mt-4 text-on-surface-variant">
            Real experiences from patients who trusted us with their skin care
            journey.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-petal-pink"
              data-animate
            >
              <CardHeader>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="size-4 fill-on-primary-fixed-variant text-on-primary-fixed-variant"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm leading-relaxed text-on-surface-variant italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-4 flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
