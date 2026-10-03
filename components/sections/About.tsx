import { SectionHead } from "@/components/Print";

const particulars = [
  ["Role", "Software Engineer II, StoneX Group"],
  ["Since", "Jan 2024 (intern), Aug 2024 (full time)"],
  ["Education", "B.Tech CS (AI & ML), Symbiosis Institute of Technology, Pune"],
  ["Based in", "Pune, India · open to remote & relocation"],
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 sm:px-10 lg:px-16 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHead id="about" title="About" />

        <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 lg:gap-20">
          <div data-print className="space-y-6 text-lg leading-relaxed max-w-[65ch]">
            <p className="font-display text-2xl sm:text-3xl leading-snug">
              I write the software that moves money between banks, and build AI systems on my own
              time.
            </p>
            <p className="text-ink-soft">
              At StoneX I build mission-critical payment infrastructure: transforming Treasury Management
              System payloads into ISO 20022 messages, delivering them to the SWIFT network, and processing
              the acknowledgements that come back.
            </p>
            <p className="text-ink-soft">
              I co-drove <strong className="text-ink font-semibold">XPAY</strong> to production in February
              2025, an internal payment platform that now enables{" "}
              <strong className="text-serial font-semibold">$600M in savings</strong>, handling requests from
              client-facing apps and direct broker initiations across the globe.
            </p>
            <p className="text-ink-soft">
              Outside of payments I build multi-agent AI systems with LangGraph, real-time distributed
              platforms, and microservices. Correctness first, then performance, then craft.
            </p>
          </div>

          <dl data-print className="self-start border-t-2 border-ink">
            {particulars.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 py-4 border-b border-ink/20">
                <dt className="legend text-[0.68rem] text-ink-faint pt-0.5">{k}</dt>
                <dd className="text-[0.95rem] leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
