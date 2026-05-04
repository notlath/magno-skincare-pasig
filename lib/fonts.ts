import { Noto_Serif, Manrope } from "next/font/google";

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
