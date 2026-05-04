import type { Metadata } from "next";
import { notoSerif, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Magno Skin Care Clinic — Pasig City",
    template: "%s | Magno Skin Care Clinic",
  },
  description:
    "Your trusted partner in achieving healthy, radiant skin. Comprehensive dermatological care for skin, hair, and nail needs in Barangay Malinao, Pasig City.",
  keywords: [
    "Magno Skin Care Clinic",
    "Dermatology Pasig City",
    "Skin Clinic Malinao Pasig",
    "Acne Treatment Pasig",
    "Aesthetic Services Pasig",
    "Dermatologist Pasig",
  ],
  metadataBase: new URL("https://magnoskincareclinic.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/magno-skin-care-clinic-logo.png",
    apple: "/images/magno-skin-care-clinic-logo.png",
  },
  openGraph: {
    title: "Magno Skin Care Clinic — Pasig City",
    description:
      "Comprehensive and personalized dermatological care. Medical dermatology and aesthetic services in Barangay Malinao, Pasig City.",
    url: "https://magnoskincareclinic.com",
    siteName: "Magno Skin Care Clinic",
    images: [
      {
        url: "/images/magno-skin-care-clinic-logo.png",
        width: 1200,
        height: 630,
        alt: "Magno Skin Care Clinic Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
