"use client";

import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Band } from "@/components/Print";
import { EMAIL, dest, socials } from "@/lib/site";

type FormState = "idle" | "loading" | "success" | "error";

const icons: Record<string, React.ReactNode> = {
  GitHub: <Github size={16} aria-hidden="true" />,
  LinkedIn: <Linkedin size={16} aria-hidden="true" />,
  Email: <Mail size={16} aria-hidden="true" />,
};

const field =
  "w-full bg-transparent border-0 border-b border-ink/50 px-0 py-2.5 text-ink text-base placeholder:text-ink-faint focus:outline-none focus:border-serial focus:ring-0 transition-colors";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("https://formspree.io/f/xnjwqdyn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 sm:px-10 lg:px-16 py-24 sm:py-32 bg-paper-deep/60">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 lg:gap-20 items-start">
        <div data-print className="px-2 sm:px-0">
          <h2 id="contact-title" className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-[48ch]">
            Open to remote roles and relocation in backend engineering, distributed systems, and fintech
            infrastructure. A role, a project, or just a hello: my inbox is open.
          </p>
          <a href={`mailto:${EMAIL}`} className="mt-8 inline-block font-display text-2xl sm:text-3xl ink-link break-all">
            {EMAIL}
          </a>
          <ul className="mt-8 space-y-1">
            {socials.slice(0, 2).map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 py-2">
                  {icons[s.label]}
                  <span className="ink-link font-medium">{s.label}</span>
                  <span className="font-mono text-[0.62rem] text-ink-faint">{dest(s.href)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* the slip */}
        <div data-print className="relative bg-paper border border-ink/70 rounded-[3px] shadow-[0_18px_40px_-24px_rgb(20_38_64/0.45)]">
          <div className="perforated h-2 -mt-1" aria-hidden="true" />
          <Band />
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-7" aria-describedby="slip-note">
            <div className="flex items-baseline justify-between gap-4">
              <p className="legend text-[0.7rem]">Message to Kush Garg</p>
              <p className="font-mono text-serial text-xs tabular" aria-hidden="true">
                Nº 0001
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-7">
              <div>
                <label htmlFor="name" className="legend text-[0.66rem] text-ink-soft">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="legend text-[0.66rem] text-ink-soft">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@company.com"
                  className={field}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="legend text-[0.66rem] text-ink-soft">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Hi Kush, I'd like to talk about…"
                className={`${field} resize-none leading-[2.6rem] bg-[linear-gradient(transparent_calc(2.6rem-1px),rgb(20_38_64/0.18)_calc(2.6rem-1px))] bg-[length:100%_2.6rem] border-b-0 py-0`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
              <button
                type="submit"
                disabled={formState === "loading"}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper rounded-[2px] font-medium hover:bg-serial transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {formState === "loading" ? "Sending…" : "Send message"}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <p id="slip-note" role="status" aria-live="polite" className="text-sm">
                {formState === "success" && <span className="text-[#2f6b45] font-medium">Sent. I&apos;ll get back to you soon.</span>}
                {formState === "error" && (
                  <span className="text-serial font-medium">
                    That didn&apos;t go through. Email me at {EMAIL} instead.
                  </span>
                )}
                {(formState === "idle" || formState === "loading") && (
                  <span className="text-ink-faint">Goes straight to my inbox.</span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
