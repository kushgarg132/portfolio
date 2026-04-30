"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer II",
    company: "StoneX Group",
    location: "Pune, IN",
    period: "Aug 2024 – Present",
    current: true,
    bullets: [
      "Designed end-to-end Funding as a Service (FAAS) pipeline: TMSJson from Treasury Management Systems → ISO 20022 (pacs.008, pacs.009, pain.001) → SWIFT network → ACK/NACK",
      "Built SWIFT message processing layer (MT900, MT910, MT942, CAMT.053, CAMT.054) bridging legacy MT and modern MX standards",
      "Co-drove XPAY to production (Feb 2025): internal payment platform processing requests from client-facing CONNECT app and direct broker/ops initiations — enabling $600M in savings",
      "Proposed AI cost-reduction architecture: GraphDB + VectorDB + MCP with CI/CD to reduce LLM token consumption",
      "Led team to 2nd place, StoneX India Hackathon (Nov 2025): AI ops investigation tool with case summarization, multilingual chatbot, and interactive dashboard",
    ],
    tags: ["Spring Boot", "Java", "SWIFT ISO 20022", "Microservices", "Azure DevOps"],
  },
  {
    role: "Software Engineering Intern",
    company: "StoneX Group",
    location: "Pune, IN",
    period: "Jan 2024 – Jul 2024",
    current: false,
    bullets: [
      "Core contributor to XPAY — Spring Boot APIs, transaction logic, compliance hooks, and audit trails",
      "Delivered CI/CD pipelines on Azure DevOps in coordination with DevOps and InfoSec teams",
    ],
    tags: ["Spring Boot", "Java", "CI/CD", "Azure DevOps"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[#007A87] tracking-widest uppercase">03.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block" style={{ left: "7px" }} />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="sm:pl-10 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute hidden sm:flex left-0 w-4 h-4 rounded-full border-2 items-center justify-center top-1.5 ${
                    exp.current
                      ? "bg-[#007A87] border-[#007A87]"
                      : "bg-background border-border"
                  }`}
                  style={{ left: 0 }}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#007A87]/10 text-[#007A87] border border-[#007A87]/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#007A87] font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 justify-end mt-1">
                        <MapPin size={13} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-[#007A87] mt-1 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#007A87]/8 text-[#007A87] border border-[#007A87]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
