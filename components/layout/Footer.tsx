"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg">
            <span className="text-[#007A87]">KG</span>
            <span className="text-foreground">.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with Next.js 14 · Tailwind CSS · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={18} />, href: "https://github.com/kushgarg132", label: "GitHub" },
            { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/kushgarg132", label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "mailto:gargkush2003@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-muted-foreground hover:text-[#007A87] hover:bg-[#007A87]/10 transition-all duration-200 cursor-pointer"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center sm:text-right">
          © {new Date().getFullYear()} Kush Garg. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
