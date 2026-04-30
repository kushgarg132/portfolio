import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kush Garg · Backend Engineer",
  description:
    "Backend Engineer specializing in SWIFT ISO 20022, Distributed Systems, and AI/LLM Systems. Building payment infrastructure at StoneX Group.",
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
    title: "Kush Garg · Backend Engineer",
    description: "Building payment infrastructure at StoneX. SWIFT · Microservices · Multi-agent AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", inter.variable)} suppressHydrationWarning>
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
