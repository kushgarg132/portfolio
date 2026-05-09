"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Code2, Database, Brain, Server, Globe, Layers } from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 size={20} />,
    title: "Languages",
    color: "#007A87",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    icon: <Layers size={20} />,
    title: "Frameworks",
    color: "#0891b2",
    skills: ["Spring Boot", "Spring Security", "Spring WebSocket", "Spring Cloud Gateway", "FastAPI", "Node.js", "React", "Next.js 14"],
  },
  {
    icon: <Database size={20} />,
    title: "Databases",
    color: "#0e7490",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  },
  {
    icon: <Brain size={20} />,
    title: "AI / ML",
    color: "#7c3aed",
    skills: ["LangChain", "LangGraph", "Gemini Pro", "TA-Lib", "scikit-learn"],
  },
  {
    icon: <Server size={20} />,
    title: "Infrastructure",
    color: "#047857",
    skills: ["Docker", "Kafka", "Azure DevOps", "GitHub Actions", "CI/CD", "Agile", "Scrum"],
  },
  {
    icon: <Globe size={20} />,
    title: "SWIFT / Domain",
    color: "#b45309",
    skills: ["ISO 20022", "pacs.008", "pacs.009", "pain.001", "CAMT.053", "CAMT.054", "MT900/910/942"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[#007A87] tracking-widest uppercase">02.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 card-hover group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="p-2 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: `${group.color}15`, color: group.color }}
                >
                  {group.icon}
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-background border border-border text-muted-foreground group-hover:border-border/80 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
