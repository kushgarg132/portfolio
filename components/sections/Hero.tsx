"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
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
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#007A87] opacity-[0.06] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#007A87] opacity-[0.04] blur-3xl" />
    </div>
  );
}

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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
  }, [displayed, deleting, index]);

  return (
    <span className="text-[#007A87] font-semibold">
      {displayed}
      <span className="animate-blink ml-0.5 text-[#007A87]">|</span>
    </span>
  );
}

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative flex-shrink-0 flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#007A87] opacity-20 blur-2xl scale-110" />

      {/* Rotating dashed ring */}
      <div
        className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#007A87]/40"
        style={{ animation: "spin 20s linear infinite" }}
      />

      {/* Solid teal ring */}
      <div className="absolute inset-[-3px] rounded-full border-2 border-[#007A87]/60" />

      {/* Photo container */}
      <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#007A87]/30 shadow-2xl shadow-[#007A87]/20">
        <Image
          src="/kush.jpg"
          alt="Kush Garg"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-[#007A87]/30 text-xs font-medium text-[#007A87] shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#007A87] animate-pulse" />
        Open to Remote
      </motion.div>
    </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#007A87]/30 bg-[#007A87]/8 text-[#007A87] text-sm font-medium mb-6 lg:hidden"
            >
              <span className="w-2 h-2 rounded-full bg-[#007A87] animate-pulse" />
              Available for remote opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
            >
              Kush{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #007A87 0%, #00A3B4 100%)" }}
              >
                Garg
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-2xl font-medium h-9 mb-5"
            >
              <Typewriter />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building payment infrastructure at StoneX.{" "}
              <span className="text-[#007A87]">SWIFT</span> ·{" "}
              <span className="text-[#007A87]">Microservices</span> ·{" "}
              <span className="text-[#007A87]">Multi-agent AI</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl bg-[#007A87] text-white font-medium hover:bg-[#005F6B] transition-all duration-200 hover:shadow-lg hover:shadow-[#007A87]/30 cursor-pointer"
              >
                View Projects
              </button>
              <a
                href="/KushGarg_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#007A87] text-[#007A87] font-medium hover:bg-[#007A87] hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:border-[#007A87] hover:text-[#007A87] transition-all duration-200 cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
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
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-[#007A87] hover:bg-[#007A87]/10 transition-all duration-200 cursor-pointer"
                >
                  {icon}
                </a>
              ))}
              <span className="text-sm text-muted-foreground/50 ml-2 hidden sm:block">
                📍 Pune, IN
              </span>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <div className="flex flex-col items-center gap-6">
            {/* Desktop badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#007A87]/30 bg-[#007A87]/8 text-[#007A87] text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#007A87] animate-pulse" />
              Available for remote opportunities
            </motion.div>

            <ProfilePhoto />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-[#007A87] transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
