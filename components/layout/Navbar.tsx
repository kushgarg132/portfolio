"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RESUME } from "@/lib/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        setActive(ids.find((id) => visible.has(id)) ?? "");
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled || open ? "bg-paper/95 backdrop-blur-sm border-ink/20" : "bg-transparent border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl leading-none py-2" aria-label="Kush Garg, back to top">
          K<span className="text-serial">·</span>G
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-3 py-2 text-sm transition-colors underline-offset-[0.5em] decoration-1 ${isActive ? "text-ink underline" : "text-ink-soft hover:text-ink"}`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={RESUME}
            download
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium border border-ink rounded-[2px] hover:bg-ink hover:text-paper transition-colors"
          >
            Résumé
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden p-3 -mr-2 text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden px-4 pb-5 border-t border-ink/15">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 border-b border-ink/10 font-display text-2xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={RESUME} download className="mt-4 flex justify-center px-4 py-3 bg-ink text-paper rounded-[2px] font-medium">
            Download résumé
          </a>
        </div>
      )}
    </header>
  );
}
