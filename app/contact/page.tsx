"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MessageSquareIcon,
  SendIcon,
} from "lucide-react";
import { type FormEvent, useState } from "react";

export default function ContactPage() {
  const containerRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // mailto fallback (no backend)
    const subject = encodeURIComponent(
      `Inquiry from ${name} — Magno Skin Care Clinic`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:contact@magnoskincareclinic.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main ref={containerRef} id="contact-page">
        {/* Page header */}
        <section className="section-padding bg-surface-container-low">
          <div className="container-max text-center max-w-3xl mx-auto">
            <span className="label-caps text-on-primary-fixed-variant">
              Contact Us
            </span>
            <h1 className="mt-3 text-primary">Get in Touch</h1>
            <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
              We are always happy to assist you with inquiries or appointment
              bookings. Reach out to us through any of the following channels.
            </p>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="section-padding bg-background" id="contact-form-section">
          <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info cards */}
            <div className="flex flex-col gap-6">
              <Card className="border-outline-variant" data-animate>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-md bg-petal-pink/50">
                      <MapPinIcon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    167 Ramon Jabson St., Barangay Malinao, Pasig City
                  </p>
                </CardContent>
              </Card>

              <Card className="border-outline-variant" data-animate>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-md bg-petal-pink/50">
                      <ClockIcon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">Clinic Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday – Saturday</span>
                      <span className="font-medium text-foreground">
                        10:00 AM – 5:00 PM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-foreground">
                        Closed
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-outline-variant" data-animate>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-md bg-petal-pink/50">
                      <PhoneIcon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">
                      Contact Numbers
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Globe</span>
                      <a
                        href="tel:09770315017"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        0977 031 5017
                      </a>
                    </li>
                    <li className="flex justify-between">
                      <span>Smart</span>
                      <a
                        href="tel:09982941766"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        0998 294 1766
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-outline-variant" data-animate>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-md bg-petal-pink/50">
                      <MessageSquareIcon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">Social Media</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 text-sm">
                    <li>
                      <a
                        href="https://magnoskincareclinic.com/messenger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Message us on Facebook Messenger
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/MagnoSkinCareClinic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Magno Skin Care Clinic Facebook Page
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <div data-animate>
              <Card className="border-outline-variant">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <p className="text-lg font-medium text-primary">
                        Thank you for reaching out!
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Your email client should open shortly. If it
                        doesn&apos;t, please contact us directly at our phone
                        numbers.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                      id="contact-form"
                    >
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-name"
                          className="label-caps text-on-primary-fixed-variant"
                        >
                          Full Name
                        </label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-email"
                          className="label-caps text-on-primary-fixed-variant"
                        >
                          Email Address
                        </label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-phone"
                          className="label-caps text-on-primary-fixed-variant"
                        >
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="0917 123 4567"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-message"
                          className="label-caps text-on-primary-fixed-variant"
                        >
                          Message
                        </label>
                        <Textarea
                          id="contact-message"
                          name="message"
                          placeholder="Tell us about your skin concern or inquiry..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" className="mt-2" id="contact-submit">
                        <SendIcon data-icon="inline-start" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="container-max">
          <Separator />
        </div>

        {/* Map section */}
        <section className="section-padding bg-background" id="map-section">
          <div className="container-max flex flex-col gap-8">
            <div className="text-center" data-animate>
              <span className="label-caps text-on-primary-fixed-variant">
                Find Us
              </span>
              <h2 className="mt-3 text-primary">Visit Our Clinic</h2>
            </div>

            <div
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-outline-variant"
              data-animate
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.692142720029!2d121.0764954!3d14.559589400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c87e378a84d5%3A0xf36f7f547a61daff!2sMagno%20Skin%20Care%20Clinic%20-%20Pasig%20(Formerly%20EBM%20Dermamedic)!5e0!3m2!1sen!2sph!4v1777859677691!5m2!1sen!2sph"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Magno Skin Care Clinic location on Google Maps"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
