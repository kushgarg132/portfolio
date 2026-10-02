"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Backend Engineer",
  "SWIFT ISO 20022 Specialist",
  "Distributed Systems Engineer",
  "AI/LLM Systems Builder",
];

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,122,135,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,135,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-teal opacity-[0.06] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal opacity-[0.04] blur-3xl" />
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function Typewriter() {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = ROLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, reduce]);

  if (reduce) {
    return <span className="text-teal-ink font-semibold">{ROLES[0]} · {ROLES[2]}</span>;
  }

  return (
    <>
      <span className="sr-only">{ROLES.join(", ")}</span>
      <span aria-hidden="true" className="text-teal-ink font-semibold">
        {displayed}
        <span className="animate-blink ml-0.5 text-teal-ink">|</span>
      </span>
    </>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-center animate-fade-in">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-teal opacity-20 blur-2xl scale-110" />

      {/* Rotating dashed ring */}
      <div
        className="absolute inset-[-6px] rounded-full border-2 border-dashed border-teal/40"
        style={{ animation: "spin 20s linear infinite" }}
      />

      {/* Solid teal ring */}
      <div className="absolute inset-[-3px] rounded-full border-2 border-teal/60" />

      {/* Photo container */}
      <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-teal/30 shadow-2xl shadow-teal/20">
        <Image
          src="/kush.jpg"
          alt="Kush Garg"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <GridBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/8 text-teal-ink text-sm font-medium mb-6 lg:hidden">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Open to remote &amp; relocation
            </div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
            >
              Kush{" "}
<span className="text-teal-ink">Garg</span>
            </h1>

            {/* Typewriter */}
            <div className="text-xl sm:text-2xl font-medium h-9 mb-5">
              <Typewriter />
            </div>

            {/* Bio */}
            <p
              className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building payment infrastructure at StoneX.{" "}
              <span className="text-teal-ink">SWIFT</span> ·{" "}
              <span className="text-teal-ink">Microservices</span> ·{" "}
              <span className="text-teal-ink">Multi-agent AI</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl bg-teal text-white font-medium hover:bg-teal-dark transition-all duration-200 hover:shadow-lg hover:shadow-teal/30 cursor-pointer"
              >
                View Projects
              </button>
              <a
                href="/KushGarg_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-teal text-teal-ink font-medium hover:bg-teal hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:border-teal hover:text-teal-ink transition-all duration-200 cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/kushgarg132", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kush-garg-809617208/", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:gargkush2003@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-lg text-muted-foreground hover:text-teal-ink hover:bg-teal/10 transition-all duration-200 cursor-pointer"
                >
                  {icon}
                </a>
              ))}
              <span className="text-sm text-muted-foreground ml-2 hidden sm:inline-flex items-center gap-1">
                <MapPin size={14} aria-hidden="true" />
                Pune, IN
              </span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex flex-col items-center gap-6">
            {/* Desktop badge */}
            <div className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/8 text-teal-ink text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Open to remote &amp; relocation
            </div>

            <ProfilePhoto />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full text-muted-foreground hover:text-teal-ink transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
