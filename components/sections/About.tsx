const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "$600M", label: "Impact (XPAY)" },
  { value: "7+", label: "SWIFT Message Types" },
  { value: "3", label: "Live Projects" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div data-reveal className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-teal-ink tracking-widest uppercase">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div data-reveal className="space-y-5"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Software Engineer at{" "}
              <span className="text-teal-ink font-medium">StoneX Group</span>, where I build
              mission-critical payment infrastructure connecting global financial systems. My work
              spans the full lifecycle of SWIFT messaging — from transforming Treasury Management
              System payloads into ISO 20022 standards to processing real-time acknowledgements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I co-drove{" "}
              <span className="text-teal-ink font-medium">XPAY</span> to production in February
              2025 — an internal payment platform that now enables{" "}
              <span className="text-foreground font-semibold">$600M in savings</span>, processing
              requests from client-facing apps and direct broker initiations across the globe.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Outside of fintech infrastructure, I build{" "}
              <span className="text-teal-ink font-medium">multi-agent AI systems</span> — LangGraph
              agent pipelines, real-time distributed platforms, and microservices
              architectures. I believe elegant engineering lives at the intersection of correctness,
              performance, and craft.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Java", "Spring Boot", "SWIFT ISO 20022", "LangGraph", "Python", "Microservices"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-teal/10 text-teal-ink border border-teal/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div data-reveal
          >
            <div className="rounded-2xl border border-border bg-card p-8 card-hover">
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ value, label }) => (
                  <div data-reveal
                    key={label}
                    className="text-center p-4 rounded-xl bg-background border border-border/60"
                  >
                    <div className="text-3xl font-bold text-teal-ink mb-1">{value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  Software Engineer II · StoneX Group
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  B.Tech CS (AI &amp; ML) · Symbiosis Institute of Technology, Pune
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  Pune, India · Open to Remote &amp; Relocation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
