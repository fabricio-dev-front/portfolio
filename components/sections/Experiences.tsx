"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { IconChevronDown } from "@/public/assets/icons";
import {
  experiences,
  calculateDuration,
  calculateTotalExperience,
} from "@/lib/experiences";
import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  expanded: boolean;
  onToggle: () => void;
  index: number;
}

function ExperienceCard({
  experience,
  expanded,
  onToggle,
  index,
}: ExperienceCardProps) {
  const initial = experience.company.charAt(0).toUpperCase();
  const duration = calculateDuration(experience.startDate, experience.endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex gap-4 sm:gap-6"
    >
      {/* Nó da Timeline */}
      <div className="flex flex-col items-center shrink-0 relative z-10">
        <div className="size-10 sm:size-11 rounded-xl bg-card border border-card-border group-hover:border-foreground/50 flex items-center justify-center text-foreground text-sm font-mono font-bold shadow-xs shrink-0 transition-all duration-300 group-hover:shadow-[0_0_14px_var(--accent-glow,rgba(255,255,255,0.15))]">
          {initial}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="rounded-2xl bg-card border border-card-border shadow-xs p-5 sm:p-6 flex-1 mb-7 transition-all duration-300 group-hover:border-foreground/30 hover:shadow-md">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h3 className="text-foreground text-lg sm:text-xl font-bold tracking-tight group-hover:text-muted-text transition-colors">
              {experience.company}
            </h3>
            <p className="text-xs font-mono text-muted-text mt-0.5">
              {experience.function}
            </p>
          </div>

          {/* Período com Duração Calculada */}
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono bg-background border border-card-border px-3 py-1 rounded-full shrink-0 shadow-2xs">
            <span className="text-muted-text">{experience.period}</span>
            {duration && (
              <>
                <span className="text-card-border">•</span>
                <span className="text-foreground font-semibold">
                  {duration}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Descrição expansível com transição suave */}
        <motion.div
          animate={{ height: expanded ? "auto" : 72 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden mt-3"
        >
          <p className="text-muted-text text-xs sm:text-sm leading-relaxed whitespace-pre-line">
            {experience.description}
          </p>
        </motion.div>

        <button
          onClick={onToggle}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:opacity-80 cursor-pointer transition-opacity"
        >
          <span>{expanded ? "Ver menos" : "Ver mais detalhes"}</span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <IconChevronDown />
          </motion.div>
        </button>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-card-border/60">
          {experience.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-muted-text bg-card-border/30 border border-card-border/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const totalExperience = calculateTotalExperience(experiences);

  return (
    <div>
      <div className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-text font-medium">
              Trajetória Profissional
            </p>
            <span className="text-[11px] truncate font-mono px-2 py-0.5 rounded-full border border-card-border bg-card text-foreground font-medium">
              {totalExperience}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Experiência Técnica
          </h2>
        </div>
        <p className="text-xs text-muted-text max-w-sm sm:text-right leading-relaxed">
          Histórico de entregas com metodologias ágeis, arquiteturas escaláveis
          e alto padrão de engenharia.
        </p>
      </div>

      <div ref={containerRef} className="relative">
        {/* Linha estática de base da timeline */}
        <div
          aria-hidden="true"
          className="absolute left-5 sm:left-[21px] top-6 bottom-10 w-[2px] bg-card-border/60 pointer-events-none -translate-x-1/2"
        />

        {/* Trilha Laser Neon reativa ao Scroll */}
        <motion.div
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute left-5 sm:left-[21px] top-6 bottom-10 w-[2px] bg-linear-to-b from-emerald-400 via-cyan-400 to-indigo-500 origin-top pointer-events-none -translate-x-1/2 shadow-[0_0_10px_rgba(52,211,153,0.8)] z-1"
        />

        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            expanded={expandedIndex === index}
            onToggle={() => toggleExpand(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
