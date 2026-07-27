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

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-4"
    >
      <div className="flex flex-col items-center shrink-0">
        <div
          className="size-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm shrink-0"
          style={{
            background:
              "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          }}
        >
          {initial}
        </div>
        <div className="flex-1 w-px bg-card-border mt-2" />
      </div>

      <div className="rounded-xl bg-card border border-card-border shadow-sm py-4 px-5 flex-1 mb-4">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <p className="text-foreground text-[17px] font-semibold">
            {experience.company}
          </p>
          <span className="text-muted-text text-xs bg-background border border-card-border px-2 py-1 rounded-full shrink-0">
            {experience.period}
          </span>
        </div>

        <motion.div
          animate={{ height }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden mt-3"
        >
          <p ref={contentRef} className="text-muted-text text-sm leading-6">
            {experience.description}
          </p>
        </motion.div>

        <button
          onClick={onToggle}
          className="mt-2 flex text-accent items-center gap-1 text-sm font-medium hover:underline hover:cursor-pointer"
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
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
              }}
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          expanded={expandedId === experience.id}
          onToggle={() => toggleExpanded(experience.id)}
          index={index}
        />
      ))}
    </div>
  );
}
