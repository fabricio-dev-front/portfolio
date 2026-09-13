"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { IconRepository } from "@/public/assets/icons";
import { VercelProject } from "@/types/vercelProjects";

interface ProjectCard3DProps {
  project: VercelProject;
  index: number;
}

export function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values para o Tilt 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Posição para o Spotlight Radial
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  // Física de mola ultra-suave
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    springConfig
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalizado de -0.5 a 0.5 para o Tilt
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);

    // Coordenadas absolutas em pixels para o Spotlight
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const loopTags = [...project.tags, ...project.tags];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1200 }}
      className="w-full"
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative w-full rounded-2xl bg-card border border-card-border/80 hover:border-foreground/40 flex flex-col md:flex-row overflow-hidden shadow-2xs hover:shadow-xl transition-colors duration-300"
      >
        {/* Spotlight Radial que persegue o cursor */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) =>
                `radial-gradient(550px circle at ${x}px ${y}px, var(--accent-glow, rgba(255, 255, 255, 0.09)), transparent 60%)`
            ),
          }}
        />

        {/* Lado Esquerdo: Imagem com profundidade */}
        <div className="relative w-full md:w-[48%] lg:w-[50%] min-h-60 sm:min-h-70 md:min-h-80 overflow-hidden bg-card-border/30 border-b md:border-b-0 md:border-r border-card-border/60 shrink-0">
          <Image
            src={project.imageUrl}
            alt={`Preview do projeto ${project.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            priority={index === 0}
          />

          {/* Badge de Live com pulso */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium shadow-xs">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live</span>
          </div>

          {/* Gradiente sutil sobre a imagem */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Lado Direito: Informações e Ações */}
        <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 gap-4 overflow-hidden relative z-10">
          <div className="space-y-2.5">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-muted-text transition-colors">
              {project.name}
            </h3>

            <p className="text-muted-text text-xs sm:text-sm leading-relaxed line-clamp-4">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Tags Marquee que pausar no hover */}
            <div className="relative overflow-hidden w-full mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex gap-1.5 w-max py-0.5"
                animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 16,
                }}
              >
                {loopTags.map((tag, tagIndex) => (
                  <span
                    key={`${tag}-${tagIndex}`}
                    className="px-2.5 py-1 rounded text-[11px] font-mono text-muted-text bg-card-border/30 border border-card-border/60 shrink-0 select-none"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Ações */}
            <div className="flex items-center gap-3 pt-3 border-t border-card-border/50">
              {project.deployUrl ? (
                <Link
                  href={project.deployUrl}
                  target="_blank"
                  className="relative group/btn inline-flex items-center justify-center w-full gap-2 py-2.5 px-5 rounded-md bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all shadow-2xs overflow-hidden"
                >
                  <span className="relative z-10 font-semibold">Acessar site</span>
                  <span className="relative z-10 text-xs transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              ) : null}

              {project.githubUrl && project.githubUrl.trim() !== "" && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  aria-label={`Ver código de ${project.name} no GitHub`}
                  className="p-2.5 inline-flex items-center justify-center rounded-md border border-card-border bg-background text-muted-text hover:text-foreground hover:bg-card-border/30 active:scale-[0.98] transition-all"
                >
                  <IconRepository />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
