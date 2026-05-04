import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-container-low text-foreground border-t border-border" id="site-footer">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="relative size-12 overflow-hidden rounded-sm">
              <Image
                src="/images/magno-skin-care-clinic-logo.png"
                alt="Magno Skin Care Clinic Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary">
                Magno Skin Care Clinic
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Your trusted partner in achieving healthy, radiant skin.
                Comprehensive and personalized dermatological care in Pasig
                City.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="label-caps text-on-primary-fixed-variant">
              Quick Links
            </span>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <span className="label-caps text-on-primary-fixed-variant">
              Visit Us
            </span>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex gap-2 items-start text-on-surface-variant">
                <MapPinIcon className="size-4 mt-0.5 shrink-0" />
                <span>
                  167 Ramon Jabson St., Barangay Malinao, Pasig City
                </span>
              </li>
              <li className="flex gap-2 items-center text-on-surface-variant">
                <ClockIcon className="size-4 shrink-0" />
                <span>
                  Mon–Sat: 10:00 AM – 5:00 PM
                </span>
              </li>
              <li className="flex gap-2 items-center text-on-surface-variant">
                <PhoneIcon className="size-4 shrink-0" />
                <span>0977 031 5017</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <p>
            © {new Date().getFullYear()} Magno Skin Care Clinic. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/MagnoSkinCareClinic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://magnoskincareclinic.com/messenger"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Messenger
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
