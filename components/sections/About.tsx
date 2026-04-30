"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "$600M", label: "Impact (XPAY)" },
  { value: "7+", label: "SWIFT Message Types" },
  { value: "3", label: "Live Projects" },
];

export default function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[#007A87] tracking-widest uppercase">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Software Engineer II at{" "}
              <span className="text-[#007A87] font-medium">StoneX Group</span>, where I build
              mission-critical payment infrastructure connecting global financial systems. My work
              spans the full lifecycle of SWIFT messaging — from transforming Treasury Management
              System payloads into ISO 20022 standards to processing real-time acknowledgements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I co-drove{" "}
              <span className="text-[#007A87] font-medium">XPAY</span> to production in February
              2025 — an internal payment platform that now enables{" "}
              <span className="text-foreground font-semibold">$600M in savings</span>, processing
              requests from client-facing apps and direct broker initiations across the globe.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Outside of fintech infrastructure, I build{" "}
              <span className="text-[#007A87] font-medium">multi-agent AI systems</span> — LangGraph
              pipelines with Gemini LLMs, real-time distributed platforms, and microservices
              architectures. I believe elegant engineering lives at the intersection of correctness,
              performance, and craft.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Java", "Spring Boot", "SWIFT ISO 20022", "LangGraph", "Python", "Microservices"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-[#007A87]/10 text-[#007A87] border border-[#007A87]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="rounded-2xl border border-border bg-card p-8 card-hover">
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-background border border-border/60"
                  >
                    <div className="text-3xl font-bold text-[#007A87] mb-1">{value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-[#007A87]" />
                  Software Engineer II · StoneX Group
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-[#007A87]" />
                  B.E. Computer Engineering · Pune Institute
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-[#007A87]" />
                  Pune, India · Open to Remote
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
