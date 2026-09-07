"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
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
  const [height, setHeight] = useState(72);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (expanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(72);
    }
  }, [expanded]);

  const initial = experience.company.charAt(0).toUpperCase();

  const duration = calculateDuration(experience.startDate, experience.endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-4 sm:gap-6"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="size-10 rounded-xl bg-card border border-card-border flex items-center justify-center text-foreground text-sm font-mono font-bold shadow-xs shrink-0">
          {initial}
        </div>
        <div className="flex-1 w-px bg-card-border/70 my-2" />
      </div>

      <div className="rounded-2xl bg-card border border-card-border shadow-xs p-5 sm:p-6 flex-1 mb-6 transition-all duration-200 hover:border-foreground/30">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h3 className="text-foreground text-lg sm:text-xl font-bold tracking-tight">
              {experience.company}
            </h3>
            <p className="text-xs font-mono text-muted-text mt-0.5">
              Engenharia de Software
            </p>
          </div>

          {/* Período com Duração Calculada Dinamicamente */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono bg-background border border-card-border px-3 py-1 rounded-full shrink-0 shadow-2xs">
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

        <motion.div
          animate={{ height }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden mt-3"
        >
          <p
            ref={contentRef}
            className="text-muted-text text-xs sm:text-sm leading-relaxed"
          >
            {experience.description}
          </p>
        </motion.div>

        <button
          onClick={onToggle}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:opacity-80 cursor-pointer"
        >
          <span>{expanded ? "Ver menos" : "Ver mais detalhes"}</span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <IconChevronDown />
          </motion.div>
        </button>

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
            <span className="text-card-border">•</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-card-border bg-card text-foreground font-medium">
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

      <div className="relative">
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
