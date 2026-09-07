"use client";

import Image from "next/image";
import Link from "next/link";
import { vercelProjects } from "@/lib/vercelProjects";
import { IconRepository } from "@/public/assets/icons";
import { motion } from "motion/react";

export function VercelProjects() {
  return (
    <div>
      <div className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-text font-medium mb-1.5">
            Portfólio & Casos Reais
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Projetos em Destaque
          </h2>
        </div>
        <p className="text-xs text-muted-text max-w-md sm:text-right leading-relaxed">
          Aplicações web completas em produção, com foco em usabilidade e
          arquitetura escalável.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {vercelProjects.map((project, index) => {
          const loopTags = [...project.tags, ...project.tags];

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full rounded-2xl bg-card border border-card-border/80 hover:border-foreground/30 flex flex-col md:flex-row overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="relative w-full md:w-[48%] lg:w-[50%] min-h-60 sm:min-h-70 md:min-h-80 overflow-hidden bg-card-border/30 border-b md:border-b-0 md:border-r border-card-border/60 shrink-0">
                <Image
                  src={project.imageUrl}
                  alt={`Preview do projeto ${project.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
                />

                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium shadow-xs">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live</span>
                </div>
              </div>

              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 gap-4 overflow-hidden">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-muted-text transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted-text text-xs sm:text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="relative overflow-hidden w-full mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <motion.div
                      className="flex gap-1.5 w-max py-0.5"
                      animate={{ x: ["0%", "-50%"] }}
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

                  <div className="flex items-center gap-3 pt-3 border-t border-card-border/50">
                    <Link
                      href={project.deployUrl}
                      target="_blank"
                      className="inline-flex items-center justify-center w-full gap-2 py-2.5 px-5 rounded-md bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all shadow-2xs"
                    >
                      <span>Acessar site</span>
                      <span className="text-xs">↗</span>
                    </Link>

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
          );
        })}
      </div>
    </div>
  );
}
