"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

export default function ContactPage() {
  const containerRef = useScrollReveal();

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

            {/* Messenger Direct Contact */}
            <div data-animate className="flex flex-col h-full">
              <Card className="border-outline-variant flex-1 flex flex-col justify-center items-center text-center p-8 bg-surface-container-low overflow-hidden relative border-2 border-primary/10">
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-petal-pink/30 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                
                <div className="z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center size-20 rounded-full bg-primary/10 mb-6 shadow-sm">
                    <MessageSquareIcon className="size-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-4 font-heading text-primary tracking-tight">Direct Message</CardTitle>
                  <p className="text-on-surface-variant leading-relaxed mb-8 max-w-sm">
                    We primarily handle inquiries, bookings, and consultations through our Facebook Messenger. It's fast, convenient, and allows us to serve you better.
                  </p>
                  <a
                    href="https://magnoskincareclinic.com/messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="h-14 px-8 text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-1" id="contact-messenger-cta">
                      <MessageSquareIcon className="mr-2 size-5" />
                      Chat on Messenger
                    </Button>
                  </a>
                  
                  <div className="mt-10 flex flex-col items-center gap-3 w-full">
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Or Call Us Directly</div>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-foreground">
                      <a href="tel:09770315017" className="flex items-center gap-2 hover:text-primary transition-colors bg-background px-4 py-2 rounded-full shadow-sm border border-border/50">
                        <PhoneIcon className="size-4 text-primary" />
                        <span>0977 031 5017</span>
                      </a>
                      <a href="tel:09982941766" className="flex items-center gap-2 hover:text-primary transition-colors bg-background px-4 py-2 rounded-full shadow-sm border border-border/50">
                        <PhoneIcon className="size-4 text-primary" />
                        <span>0998 294 1766</span>
                      </a>
                    </div>
                  </div>
                </div>
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
