import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Runs before paint so visitors who chose light mode never see a dark flash.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;

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
    <html lang="en" className={cn("dark", inter.variable, mono.variable)} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
