import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive dermatological services including acne management, fungal infection treatment, chemical peeling, IPL hair reduction, RF skin tightening, and more at Magno Skin Care Clinic in Pasig City.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Magno Skin Care Clinic",
    description:
      "Medical dermatology and aesthetic services. Acne management, chemical peeling, IPL, RF skin tightening, and more in Pasig City.",
    url: "https://magnoskincareclinic.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
