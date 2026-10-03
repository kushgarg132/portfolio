import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Rosette from "@/components/Rosette";
import { Band, Microprint } from "@/components/Print";
import { RESUME, dest, socials } from "@/lib/site";

// Each figure carries the line it comes from, so nothing on the note is a bare claim.
const denominations = [
  { figure: "$600M", label: "savings enabled by XPAY", source: "StoneX · in production since Feb 2025", hot: true },
  { figure: "7+", label: "SWIFT message types handled", source: "MT900 · MT910 · MT942 · CAMT.053 · CAMT.054" },
  { figure: "3", label: "side projects live today", source: "NeoTrade · Betrix · RoutineOS" },
];

const icons: Record<string, React.ReactNode> = {
  GitHub: <Github size={18} />,
  LinkedIn: <Linkedin size={18} />,
  Email: <Mail size={18} />,
};

export default function Hero() {
  return (
    <section aria-label="Introduction" className="relative px-3 sm:px-6 lg:px-10 pt-[4.25rem] sm:pt-20 pb-10 lg:min-h-dvh flex flex-col">
      {/* the note */}
      <div
        data-hero-note
        className="relative flex-1 flex flex-col max-w-7xl w-full mx-auto border border-ink/70 outline outline-1 outline-offset-4 outline-ink/30 rounded-[3px] bg-paper underprint overflow-hidden"
      >
        <Band />
        <Microprint className="px-4 py-1 border-b border-ink/15" />

        <div className="relative flex-1 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center gap-5 lg:gap-4 px-5 sm:px-10 lg:px-14 py-5 sm:py-8 lg:py-6">
          {/* portrait on its rosette */}
          <div className="relative mx-auto w-[min(50vw,210px)] sm:w-[300px] lg:w-[min(30vw,400px)] aspect-square">
            <Rosette id="hero-plate" draw className="absolute inset-[-14%] w-[128%] h-[128%]" />
            <div data-hero-portrait className="absolute inset-y-[4%] inset-x-[14%]">
              <Image
                src="/kush-engraved.png"
                alt="Engraved portrait of Kush Garg"
                fill
                priority
                sizes="(min-width: 1024px) 300px, 60vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* legend */}
          <div className="text-center lg:text-left">
            <h1 data-hero-item className="font-display text-[clamp(3.25rem,9vw,6rem)] leading-[0.9] tracking-[-0.02em]">
              Kush Garg
            </h1>
            <p data-hero-item className="legend text-[0.8rem] sm:text-sm text-ink-soft mt-3 sm:mt-4">
              Backend + AI Systems Engineer
            </p>
            <p data-hero-item className="mt-4 sm:mt-5 text-base sm:text-xl leading-snug max-w-[34ch] mx-auto lg:mx-0">
              I build SWIFT ISO 20022 payment infrastructure at StoneX Group, and multi-agent AI and
              distributed systems that are live today.
            </p>

            {/* phones: the actions come before the figures so they land in the first viewport */}
            <div data-hero-item className="lg:hidden mt-5 flex justify-center gap-3">
              <a href={RESUME} download className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper rounded-[2px] font-medium">
                <Download size={16} aria-hidden="true" />
                Download résumé
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 border border-ink rounded-[2px] font-medium">
                Contact
              </a>
            </div>

            <dl className="mt-8 grid sm:grid-cols-3 border-y border-ink/25 divide-y sm:divide-y-0 sm:divide-x divide-ink/25 text-left">
              {denominations.map((d) => (
                <div data-hero-item key={d.figure} className="grid grid-cols-[7.75rem_1fr] sm:block gap-x-4 items-baseline py-4 sm:px-5 sm:first:pl-0">
                  <dt className="sr-only">{d.label}</dt>
                  <dd className="contents sm:block">
                    <span className={`block font-display tabular text-[2.2rem] sm:text-5xl leading-none ${d.hot ? "text-serial" : ""}`}>
                      {/* Bodoni's hairline "+" vanishes at this size; set it in the sans */}
                      {d.figure.replace("+", "")}
                      {d.figure.endsWith("+") && <span className="font-sans font-light text-[0.6em] align-[0.35em]">+</span>}
                    </span>
                    <span>
                      <span className="block sm:mt-2 text-sm leading-tight">{d.label}</span>
                      <span className="block mt-1.5 font-mono text-[0.62rem] leading-snug text-ink-faint">{d.source}</span>
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* serial band: identity number, the actions, where to find me */}
        <div className="border-t border-ink/25 px-5 sm:px-10 lg:px-14 py-5 flex flex-wrap items-center gap-x-6 gap-y-4 justify-center lg:justify-between">
          <p data-hero-item className="font-mono text-serial tabular text-sm tracking-[0.2em]">
            <span aria-hidden="true">KG 2024 0600</span>
            <span className="ml-4 tracking-normal text-ink-soft font-sans text-sm">Open to remote &amp; relocation · Pune, IN</span>
          </p>
          <div data-hero-item className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={RESUME}
              download
              className="hidden lg:inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper rounded-[2px] font-medium hover:bg-serial transition-colors"
            >
              <Download size={16} aria-hidden="true" />
              Download résumé
            </a>
            <a href="#contact" className="hidden lg:inline-flex items-center px-5 py-3 border border-ink rounded-[2px] font-medium hover:bg-ink hover:text-paper transition-colors">
              Contact
            </a>
            <span className="flex">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={dest(s.href)}
                  className="p-3 text-ink-soft hover:text-serial transition-colors"
                >
                  {icons[s.label]}
                </a>
              ))}
            </span>
          </div>
        </div>
        <Band className="rotate-180" />
      </div>

      <a href="#about" aria-label="Scroll to about" className="hidden sm:flex mx-auto mt-4 p-2 text-ink-faint hover:text-serial transition-colors">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
