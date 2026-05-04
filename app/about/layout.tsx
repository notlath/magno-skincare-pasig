import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Magno Skin Care Clinic in Barangay Malinao, Pasig City. Formerly EBM Dermamedic, we provide comprehensive and personalized dermatological care for skin, hair, and nail needs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Magno Skin Care Clinic",
    description:
      "Your trusted partner in achieving healthy, radiant skin. Comprehensive dermatological care in Pasig City.",
    url: "https://magnoskincareclinic.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
