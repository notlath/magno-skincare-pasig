import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Magno Skin Care Clinic in Barangay Malinao, Pasig City. Book an appointment or inquire about our dermatological services. Open Monday to Saturday, 10:00 AM – 5:00 PM.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Magno Skin Care Clinic",
    description:
      "Book an appointment or inquire about our services. Located at 167 Ramon Jabson St., Barangay Malinao, Pasig City.",
    url: "https://magnoskincareclinic.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
