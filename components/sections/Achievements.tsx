import Rosette from "@/components/Rosette";
import { SectionHead } from "@/components/Print";

// Honours set as embossed seals: a small rosette stamped with the year.
const honours = [
  {
    title: "2nd place, StoneX India Hackathon",
    role: "Team leader",
    year: "2025",
    description:
      "Led a team to 2nd place building an AI ops investigation tool with case summarization, a multilingual chatbot, and an interactive analytics dashboard.",
  },
  {
    title: "Google Kick Start 2021, Round B",
    role: "Global rank 1596",
    year: "2021",
    description: "Ranked 1596th worldwide in Google Kick Start Round B 2021.",
  },
  {
    title: "ICPC Asia Kanpur Regionals",
    role: "Team Volatile Voids",
    year: "2021–22",
    description: "Competed in the ICPC Asia Kanpur Regional Contest as part of Team Volatile Voids.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="px-5 sm:px-10 lg:px-16 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHead id="achievements" title="Achievements" />

        <ul className="grid md:grid-cols-3 gap-12 md:gap-10">
          {honours.map((h, i) => (
            <li data-print key={h.title}>
              <div className="relative w-32 h-32" aria-hidden="true">
                <Rosette
                  id={`seal-${i}`}
                  className="absolute inset-0 w-full h-full"
                  layers={[
                    { R: 120, r: 5, d: 14, color: "var(--tint-rose)", copies: 6, width: 0.6 },
                    { R: 150, r: 5, d: 6, color: "var(--ink)", copies: 2, width: 0.6 },
                  ]}
                />
                <span className={`absolute inset-0 grid place-items-center font-display tabular ${h.year.length > 4 ? "text-sm" : "text-lg"}`}>{h.year}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight">{h.title}</h3>
              <p className="mt-1 legend text-[0.68rem] text-ink-soft">{h.role}</p>
              <p className="mt-3 text-ink-soft leading-relaxed">{h.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
