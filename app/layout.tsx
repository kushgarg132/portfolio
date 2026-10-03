import type { Metadata } from "next";
import { Archivo, Bodoni_Moda, Martian_Mono } from "next/font/google";
import "./globals.css";

// Didone engraving face for legends and figures, as on security-printed notes
const display = Bodoni_Moda({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

// workhorse grotesque; the width axis gives the extended caps of note legends
const sans = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

// serial numbers and microprint
const mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Kush Garg · Backend + AI Systems Engineer",
  description:
    "Backend + AI systems engineer. Building SWIFT ISO 20022 payment infrastructure at StoneX Group, and shipping multi-agent AI and distributed systems.",
  keywords: [
    "Kush Garg",
    "Backend Engineer",
    "SWIFT ISO 20022",
    "Distributed Systems",
    "AI Systems",
    "Java",
    "Spring Boot",
    "StoneX",
    "Portfolio",
  ],
  authors: [{ name: "Kush Garg", url: "https://github.com/kushgarg132" }],
  openGraph: {
    title: "Kush Garg · Backend + AI Systems Engineer",
    description: "Payment infrastructure at StoneX. SWIFT · Microservices · Multi-agent AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
