"use client";

import Image from "next/image";
import Link from "next/link";
import { vercelProjects } from "@/lib/vercelProjects";
import { IconRepository } from "@/public/assets/icons";
import { motion } from "motion/react";

interface ButtonsCardProps {
  deployUrl: string;
  githubUrl?: string;
}

function ButtonsCard({ deployUrl, githubUrl }: ButtonsCardProps) {
  return (
    <div className="mt-4 flex gap-3">
      <Link
        href={deployUrl}
        target="_blank"
        className="flex-1 text-center py-2.5 bg-btn text-btn-text border border-card-border rounded-lg text-xs font-semibold hover:opacity-90 transition"
      >
        Acessar site
      </Link>
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          aria-label="Ver repositório no GitHub"
          className="px-3 flex items-center justify-center border border-card-border rounded-lg hover:bg-card-border/20 transition"
        >
          <IconRepository />
        </Link>
      )}
    </div>
  );
}

export function VercelProjects() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {vercelProjects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group rounded-xl overflow-hidden bg-card border border-card-border flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-md hover:border-link/30 hover:-translate-y-1 hover:cursor-pointer"
        >
          <div className="relative h-44 w-full overflow-hidden bg-card-border/50">
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-emerald-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
              <span className="size-1.5 rounded-full bg-white status-dot" />
              Live
            </div>

            <Image
              src={project.imageUrl}
              alt={`Preview do projeto ${project.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority={project.id === "fintech-dashboard"}
            />
          </div>

          <div className="p-4 flex flex-col justify-between flex-1 gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground group-hover:text-link transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-muted-text text-[13px] leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-(--accent-subtle) text-xs text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ButtonsCard
                deployUrl={project.deployUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
