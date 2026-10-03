import { SectionHead } from "@/components/Print";

// A dense schedule, like the denomination tables on the back of a note.
const groups = [
  { title: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++"] },
  { title: "Frameworks", skills: ["Spring Boot", "Spring Security", "Spring WebSocket", "Spring Cloud Gateway", "FastAPI", "Node.js", "React", "Next.js"] },
  { title: "Data", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
  { title: "AI / ML", skills: ["LangGraph", "LangChain", "Gemini Pro", "TA-Lib", "scikit-learn"] },
  { title: "Infrastructure", skills: ["Docker", "Kafka", "Azure DevOps", "GitHub Actions", "CI/CD", "Agile", "Scrum"] },
  { title: "SWIFT", skills: ["ISO 20022", "pacs.008", "pacs.009", "pain.001", "CAMT.053", "CAMT.054", "MT900 / 910 / 942"] },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-5 sm:px-10 lg:px-16 py-24 sm:py-32 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        <div className="[&_h2]:text-paper [&_.microprint]:text-paper/50">
          <SectionHead id="skills" title="Skills" />
        </div>

        <dl className="grid md:grid-cols-2 gap-x-16 border-t-2 border-paper/80">
          {groups.map((g) => (
            <div data-print key={g.title} className="grid grid-cols-[9.75rem_1fr] gap-4 py-5 border-b border-paper/20">
              <dt className="legend text-[0.68rem] text-paper/70 pt-1">{g.title}</dt>
              <dd className="text-[0.98rem] leading-relaxed">{g.skills.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
