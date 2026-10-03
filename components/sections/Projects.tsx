import { ArrowUpRight, Github } from "lucide-react";
import Rosette from "@/components/Rosette";
import { SectionHead } from "@/components/Print";
import { dest } from "@/lib/site";

// Each project is issued as its own specimen note, in its own tint.
const projects: Array<{
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  status: string;
  github?: string;
  live?: string;
  tint: string;
}> = [
  {
    title: "NeoTrade",
    subtitle: "Rules-first trading cockpit for Indian markets",
    description:
      "Strategy engine for Indian equities and F&O that emits fully-sized trades with stops, targets, and composite scores. AI conviction is capped at 30% in the type system; includes risk-aware sizing, an approval inbox, backtesting with Indian transaction costs, and Zerodha Kite broker integration.",
    stack: ["Python", "FastAPI", "LangGraph", "MongoDB", "Redis", "React 19"],
    status: "Live · Fintech · AI",
    github: "https://github.com/kushgarg132/NeoTrade",
    live: "https://neotrade-trading.vercel.app",
    tint: "#6b4f9a",
  },
  {
    title: "Betrix",
    subtitle: "AI-powered multiplayer poker platform",
    description:
      "Full-stack Texas Hold'em with Gemini AI bot opponents, GraphQL subscriptions over WebSocket for real-time game state, a hand evaluation engine with side-pot handling, JWT + guest auth, and game event replay.",
    stack: ["Java 21", "Spring Boot 3.5", "GraphQL", "Gemini AI", "React", "Apollo Client"],
    status: "Live · AI · Real-time",
    github: "https://github.com/kushgarg132/Betrix",
    live: "https://betrix-b3c24.web.app",
    tint: "#1d6a73",
  },
  {
    title: "RoutineOS",
    subtitle: "Personal discipline and routine tracker",
    description:
      "Daily timetable tracker with deterministic discipline scores, streaks, heatmaps, achievements, and reports, plus meal and workout tracking. Timezone-aware scheduled sweeps, precomputed rollups, FCM push notifications, and push-to-deploy CI/CD to a self-hosted VM.",
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Flyway", "React", "TypeScript"],
    status: "Live · Full-stack",
    live: "https://frontend-seven-pied-17.vercel.app",
    tint: "#3a7552",
  },
  {
    title: "Chess Platform",
    subtitle: "Distributed microservices platform",
    description:
      "Seven Spring Boot microservices behind Spring Cloud Gateway with JWT auth: a WebSocket game service, ELO-bracketed matchmaking on a Redis queue, a rating service, and a pooled Stockfish engine service for AI play and analysis. Next.js frontend.",
    stack: ["Java 21", "Spring Cloud Gateway", "PostgreSQL", "Redis", "WebSocket", "Next.js"],
    status: "Open source · Microservices",
    github: "https://github.com/kushgarg132/Chess",
    tint: "#8a4f26",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="px-3 sm:px-10 lg:px-16 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="px-2 sm:px-0">
          <SectionHead id="projects" title="Projects" note="Built and run outside of work. Three are live; each has a demo or source you can open." />
        </div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((p, i) => (
            <article
              data-print
              key={p.title}
              aria-labelledby={`p-${i}`}
              style={{ "--tint": p.tint } as React.CSSProperties}
              className="relative overflow-hidden rounded-[3px] border border-[var(--tint)] outline outline-1 outline-offset-[3px] outline-[color-mix(in_oklab,var(--tint)_35%,transparent)] bg-[color-mix(in_oklab,var(--paper)_88%,var(--tint))]"
            >
              {/* plate rosette, cropped by the note edge */}
              <Rosette
                id={`plate-${i}`}
                className="spin-rosette hidden md:block absolute -left-28 -bottom-44 w-72 h-72 opacity-70 pointer-events-none"
                layers={[
                  { R: 180, r: 6, d: 16, color: "var(--tint)", copies: 8, width: 0.35 },
                  { R: 150, r: 5, d: 10, color: "var(--tint)", copies: 5, width: 0.3 },
                ]}
              />

              <div className="relative grid md:grid-cols-[minmax(0,1fr)_18rem] gap-x-10 gap-y-6 p-6 sm:p-9">
                {/* bottom padding keeps the plate rosette (bottom-left, md+) clear of the copy */}
                <div className="md:pb-24">
                  <h3 id={`p-${i}`} className="font-display text-4xl sm:text-5xl leading-none tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-lg">{p.subtitle}</p>
                  <p className="mt-5 max-w-[68ch] leading-relaxed text-ink-soft">{p.description}</p>
                </div>

                <div className="flex flex-col justify-between gap-6 md:border-l md:border-[color-mix(in_oklab,var(--tint)_40%,transparent)] md:pl-8">
                  <div>
                  <p className="font-mono text-[0.68rem] tracking-[0.14em] mb-3 text-[color-mix(in_oklab,var(--tint)_70%,black)]">{p.status.toUpperCase()}</p>
                  <ul className="flex flex-wrap md:flex-col gap-x-3 gap-y-1.5 font-mono text-[0.72rem] text-ink-soft" aria-label="Stack">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  </div>
                  <div className="flex flex-col gap-1">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 py-1.5 font-medium">
                        <ArrowUpRight size={16} className="mt-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        <span>
                          <span className="ink-link">Open live demo</span>
                          <span className="block font-mono text-[0.62rem] text-ink-faint [overflow-wrap:anywhere]">{dest(p.live)}</span>
                        </span>
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 py-1.5 font-medium">
                        <Github size={16} className="mt-1 shrink-0" aria-hidden="true" />
                        <span>
                          <span className="ink-link">Read the source</span>
                          <span className="block font-mono text-[0.62rem] text-ink-faint [overflow-wrap:anywhere]">{dest(p.github)}</span>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p data-print className="mt-10 px-2 sm:px-0">
          <a href="https://github.com/kushgarg132" target="_blank" rel="noopener noreferrer" className="ink-link font-medium">
            Everything else on GitHub
          </a>
          <span className="ml-2 font-mono text-[0.62rem] text-ink-faint">github.com/kushgarg132</span>
        </p>
      </div>
    </section>
  );
}
