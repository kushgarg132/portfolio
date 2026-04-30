"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-bold text-xl tracking-tight"
        >
          <span className="text-[#007A87]">KG</span>
          <span className="text-foreground">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-[#007A87] transition-colors duration-200 rounded-md hover:bg-[#007A87]/8 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-muted-foreground hover:text-[#007A87] hover:bg-[#007A87]/10 transition-all duration-200 cursor-pointer"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/KushGarg_Resume.pdf"
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[#007A87] text-[#007A87] hover:bg-[#007A87] hover:text-white transition-all duration-200"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-[#007A87] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-3 py-3 text-sm font-medium text-muted-foreground hover:text-[#007A87] transition-colors cursor-pointer border-b border-border/50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/KushGarg_Resume.pdf"
            download
            className="mt-3 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[#007A87] text-[#007A87] hover:bg-[#007A87] hover:text-white transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
