"use client";

import { vercelProjects } from "@/lib/vercelProjects";
import { ProjectCard3D } from "@/components/ui/ProjectCard3D";

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
        {vercelProjects.map((project, index) => (
          <ProjectCard3D key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
