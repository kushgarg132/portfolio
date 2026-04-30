"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("https://formspree.io/f/xnjwqdyn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[#007A87] tracking-widest uppercase">06.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Let&apos;s work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently open to remote opportunities in backend engineering, distributed systems,
                and fintech infrastructure. Whether you have a role, a project, or just want to connect
                — my inbox is open.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "gargkush2003@gmail.com", href: "mailto:gargkush2003@gmail.com" },
                { icon: <MapPin size={18} />, label: "Location", value: "Pune, IN · Remote" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#007A87]/10 text-[#007A87]">{item.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:text-[#007A87] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Github size={20} />, href: "https://github.com/kushgarg132", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/kushgarg132", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:gargkush2003@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-muted-foreground hover:text-[#007A87] hover:border-[#007A87] transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span className="text-[#007A87]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Kush Garg"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#007A87]/40 focus:border-[#007A87] transition-all duration-200 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-[#007A87]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#007A87]/40 focus:border-[#007A87] transition-all duration-200 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message <span className="text-[#007A87]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Hi Kush, I'd love to connect about..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#007A87]/40 focus:border-[#007A87] transition-all duration-200 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#007A87] text-white font-medium hover:bg-[#005F6B] transition-all duration-200 hover:shadow-lg hover:shadow-[#007A87]/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {formState === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {formState === "success" && (
                <p className="text-center text-sm text-green-500 font-medium">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {formState === "error" && (
                <p className="text-center text-sm text-red-500 font-medium">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
