"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Github, ExternalLink } from "lucide-react";

const projects: Array<{
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  badges: string[];
  github: string;
  live?: string;
  accentColor: string;
  featured?: boolean;
}> = [
  {
    title: "NeoTrade AI",
    subtitle: "Multi-Agent Stock Analysis Platform",
    description:
      "5-agent LangGraph system (Master, Analyst, Quant, Risk, Chat) with async FastAPI backend, Redis caching, TA-Lib indicators, and Google Gemini LLM for intelligent market analysis.",
    stack: ["Python", "FastAPI", "LangGraph", "Redis", "MongoDB", "Gemini Pro"],
    badges: ["AI", "Multi-Agent", "LLM"],
    github: "https://github.com/kushgarg132/AI_Stock_Investor",
    accentColor: "#7c3aed",
  },
  {
    title: "Betrix",
    subtitle: "AI-Powered Multiplayer Poker Platform",
    description:
      "Full-stack Texas Hold'em platform with Gemini AI bot opponents, GraphQL subscriptions + WebSocket for real-time game state sync, hand evaluation engine, atomic wallet transactions, game replay analysis, and Swagger/OpenAPI docs.",
    stack: ["Java 21", "Spring Boot 3.4", "GraphQL", "Gemini AI", "React", "Apollo Client"],
    badges: ["Live", "AI", "Real-time", "Java"],
    github: "https://github.com/kushgarg132/Betrix",
    live: "https://betrix-b3c24.web.app",
    accentColor: "#007A87",
    featured: true,
  },
  {
    title: "Chess Platform",
    subtitle: "Distributed Microservices Platform",
    description:
      "7 Spring Boot microservices with Spring Cloud Gateway, Stockfish AI integration for game analysis, ELO rating system backed by Redis leaderboard, and Next.js 14 frontend.",
    stack: ["Spring Cloud Gateway", "PostgreSQL", "Redis", "Next.js 14"],
    badges: ["Microservices", "Distributed"],
    github: "https://github.com/kushgarg132/Chess",
    accentColor: "#0e7490",
  },
];

export default function Projects() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[#007A87] tracking-widest uppercase">04.</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden card-hover flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${project.accentColor}15`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}25`,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-[#007A87] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: project.accentColor }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-background border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#007A87] transition-colors duration-200 cursor-pointer"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={15} />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.live ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#007A87] transition-colors duration-200 cursor-pointer ml-auto"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={15} />
                    <span>{project.live ? "Live Demo" : "View"}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/kushgarg132"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground hover:border-[#007A87] hover:text-[#007A87] transition-all duration-200 text-sm font-medium"
          >
            <Github size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
