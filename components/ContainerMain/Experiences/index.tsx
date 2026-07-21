"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IconChevronDown } from "@/public/assets/icons";
import { Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    id: "1",
    company: "AltoTech",
    period: "Jan 2023 - Jun 2025",
    description:
      "Iniciei minha carreira como Desenvolvedor Front-end, desenvolvendo interfaces responsivas com HTML, CSS e JavaScript. Colaborei na implementação e manutenção de funcionalidades, participei de workshops técnicos e trabalhei em conjunto com a equipe no desenvolvimento de interfaces focadas em usabilidade e boas práticas de desenvolvimento.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    id: "2",
    company: "Triad Markets",
    period: "Ago 2024 - Presente",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações web utilizando React, Next.js, TypeScript e Tailwind CSS. Participei de projetos Web3, incluindo o desenvolvimento de interfaces para um marketplace de NFTs integrado ao ecossistema Solana, soluções whitelabel e rebranding de plataformas internacionais. Também contribuí para melhorias de performance, experiência do usuário, correção de bugs, code reviews e colaboração em equipes ágeis.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
];

interface ExperienceCardProps {
  experience: Experience;
  expanded: boolean;
  onToggle: () => void;
}

function ExperienceCard({
  experience,
  expanded,
  onToggle,
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

  return (
    <div className="rounded-lg bg-card border border-card-border shadow-sm py-4 px-5">
      <div className="flex items-center justify-between">
        <p className="text-card-foreground text-[18px] font-medium">
          {experience.company}
        </p>

        <p className="text-muted-foreground text-sm">{experience.period}</p>
      </div>

      <motion.div
        animate={{
          height,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="overflow-hidden mt-3"
      >
        <p ref={contentRef} className="text-card-foreground text-sm leading-6">
          {experience.description}
        </p>
      </motion.div>

      <button
        onClick={onToggle}
        className="mt-2 flex text-link items-center gap-1 text-sm text-primary font-medium hover:underline hover:cursor-pointer"
      >
        {expanded ? "Ver menos" : "Ver mais"}

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <IconChevronDown />
        </motion.div>
      </button>

      <div className="flex flex-wrap gap-2 mt-4">
        {experience.technologies?.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded bg-background text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experiences() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <div className="rounded-lg bg-card border border-card-border shadow-sm py-4 px-6">
        <span className="font-semibold text-foreground">Experiências</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 items-start">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            expanded={expandedId === experience.id}
            onToggle={() => toggleExpanded(experience.id)}
          />
        ))}
      </div>
    </>
  );
}
