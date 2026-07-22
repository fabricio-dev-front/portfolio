"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IconChevronDown } from "@/public/assets/icons";
import { experiences } from "@/lib/experiences";
import { Experience } from "@/types/experience";

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
        animate={{ height }}
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
