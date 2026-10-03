import { SectionHead } from "@/components/Print";

// Set as a statement of account: dated entries, ruled, newest first.
const entries = [
  {
    role: "Software Engineer II",
    company: "StoneX Group",
    location: "Pune, IN",
    from: "Aug 2024",
    to: "Present",
    bullets: [
      "Own end-to-end delivery of the Funding as a Service (FAAS) pipeline: a centralized payment platform serving all StoneX entities with full ACK/NACK lifecycle management.",
      "Built the ISO 20022 message generation layer (pacs.008, pacs.009, pain.001), ingesting TMSJson payloads from Treasury Management Systems and delivering to the SWIFT network.",
      "Engineered SWIFT message processing for 7+ message types across legacy MT (MT900, MT910, MT942) and MX (CAMT.053, CAMT.054) formats.",
      "Co-drove XPAY to production (Feb 2025), processing cross-border payments from the CONNECT app and broker initiations, enabling $600M in operational savings.",
      "Proposed an AI cost-reduction architecture using GraphDB + VectorDB + MCP with CI/CD automation to eliminate redundant LLM token consumption.",
      "Led a team of 5 to 2nd place at the StoneX India Hackathon (Nov 2025) with an AI ops tool: multilingual chatbot and interactive dashboard for operations users.",
    ],
    tags: ["Spring Boot", "Java", "SWIFT ISO 20022", "Microservices", "Azure DevOps"],
  },
  {
    role: "Software Engineering Intern",
    company: "StoneX Group",
    location: "Pune, IN",
    from: "Jan 2024",
    to: "Jul 2024",
    bullets: [
      "Core contributor to XPAY: Spring Boot REST APIs, transaction logic, compliance hooks, and audit trails that became the foundation of its production payment architecture.",
      "Delivered CI/CD pipelines on Azure DevOps in coordination with DevOps and InfoSec teams.",
    ],
    tags: ["Spring Boot", "Java", "CI/CD", "Azure DevOps"],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-5 sm:px-10 lg:px-16 py-24 sm:py-32 bg-paper-deep/60">
      <div className="max-w-6xl mx-auto">
        <SectionHead id="experience" title="Experience" />

        <ol className="border-t-2 border-ink">
          {entries.map((e) => (
            <li data-print key={e.role} className="grid md:grid-cols-[11rem_minmax(0,1fr)] gap-x-10 gap-y-3 py-10 border-b border-ink/25">
              <p className="font-mono tabular text-sm text-ink-soft leading-relaxed">
                {e.from}
                <span aria-hidden="true"> – </span>
                <span className="sr-only"> to </span>
                <span className={e.to === "Present" ? "text-ink font-medium" : ""}>{e.to}</span>
              </p>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl leading-tight">{e.role}</h3>
                <p className="mt-1 legend text-[0.72rem] text-ink-soft">
                  {e.company} · {e.location}
                </p>
                <ul className="mt-6 space-y-3 max-w-[72ch]">
                  {e.bullets.map((b) => (
                    <li key={b} className="grid grid-cols-[1.1rem_1fr] text-[0.98rem] leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="block mt-[0.8em] h-px w-2.5 bg-ink/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[0.7rem] text-ink-faint">{e.tags.join("  ·  ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
