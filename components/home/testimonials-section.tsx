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
    text: "Super thankful kay Dr. Magno! After years of struggling with stubborn acne, she finally helped me achieve clear skin. Sobrang personalized ng treatment plan na binigay niya and the results are amazing.",
    rating: 5,
  },
  {
    name: "Jose R.",
    service: "Chemical Peeling",
    text: "The chemical peeling treatment made such a noticeable difference. Ang laki ng na-brighten ng face ko and it looks much more even-toned. Dr. Magno is very professional and made me feel comfortable throughout the procedure.",
    rating: 5,
  },
  {
    name: "Ana L.",
    service: "RF Skin Tightening",
    text: "I was so impressed by the RF treatment results. The fine lines around my eyes have significantly reduced. Highly recommend Dr. Magno to anyone looking for safe and effective anti-aging treatments dito sa Pasig.",
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
