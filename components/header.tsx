"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="container-max flex items-center justify-between py-4">
        {/* Logo / clinic name */}
        <Link
          href="/"
          className="flex items-center gap-3 group/logo"
          id="header-logo"
        >
          <div className="relative size-10 shrink-0 overflow-hidden rounded-sm">
            <Image
              src="/images/magno-skin-care-clinic-logo.png"
              alt="Magno Skin Care Clinic Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-heading text-lg font-semibold tracking-tight text-primary group-hover/logo:text-primary/80 transition-colors">
              Magno Skin Care
            </span>
            <span className="label-caps text-on-primary-fixed-variant/80 transition-opacity group-hover/logo:opacity-100">
              Dermatology Clinic · Pasig City
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-1" id="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:inline-flex">
            <Button size="sm" id="header-cta">Book a Visit</Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background" id="mobile-nav">
          <ul className="container-max flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="sm">Book a Visit</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
