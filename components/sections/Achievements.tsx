"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Trophy, Globe, Code } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={24} />,
    title: "2nd Place — StoneX India Hackathon",
    subtitle: "Team Leader",
    date: "Nov 2025",
    description:
      "Led a team to 2nd place building an AI ops investigation tool featuring case summarization, multilingual chatbot, and an interactive analytics dashboard.",
    color: "#f59e0b",
    gradient: "from-amber-500/10 to-orange-500/5",
  },
  {
    icon: <Globe size={24} />,
    title: "Google Kickstart 2021 — Round B",
    subtitle: "Global Rank 1596",
    date: "2021",
    description:
      "Achieved Global Rank 1596 in Google Kickstart Round B 2021, competing against thousands of engineers worldwide.",
    color: "#4285f4",
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
  {
    icon: <Code size={24} />,
    title: "ICPC Asia Kanpur Regionals",
    subtitle: "Team Volatile Voids",
    date: "2021–2022",
    description:
      "Competed in the ICPC Asia Kanpur Regional Contest as part of Team Volatile Voids, one of the most prestigious competitive programming competitions.",
    color: "#007A87",
    gradient: "from-teal-500/10 to-cyan-500/5",
  },
];

export default function Achievements() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[#007A87] tracking-widest uppercase">05.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Achievements</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </motion.div>

        <div className="space-y-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl border border-border bg-gradient-to-br ${item.gradient} bg-card overflow-hidden card-hover p-6`}
            >
              {/* Left accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex gap-5 items-start">
                {/* Icon */}
                <div
                  className="flex-shrink-0 p-3 rounded-xl mt-0.5"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-lg leading-tight">{item.title}</h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: item.color }}>
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
