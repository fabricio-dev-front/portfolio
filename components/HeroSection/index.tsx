import Image from "next/image";
import { DownloadResume } from "@/components/DownloadResume";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  IconHTML,
  IconCSS,
  IconTailwind,
  IconJavaScript,
  IconReact,
  IconTypeScript,
  IconNextjs,
  IconGit,
  IconGithub,
  IconLinkedin,
  IconLocalizacao,
} from "@/public/assets/icons";

const techStack = [
  {
    name: "HTML",
    color: "#E44D26",
    border: "rgba(228,77,38,0.25)",
    bg: "rgba(228,77,38,0.08)",
    icon: <IconHTML width={14} height={14} />,
  },
  {
    name: "CSS",
    color: "#264DE4",
    border: "rgba(38,77,228,0.25)",
    bg: "rgba(38,77,228,0.08)",
    icon: <IconCSS width={14} height={14} />,
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    border: "rgba(6,182,212,0.25)",
    bg: "rgba(6,182,212,0.08)",
    icon: <IconTailwind width={14} height={14} />,
  },
  {
    name: "JavaScript",
    color: "#b58900",
    border: "rgba(247,223,30,0.3)",
    bg: "rgba(247,223,30,0.08)",
    icon: <IconJavaScript width={14} height={14} />,
  },
  {
    name: "React",
    color: "#0e9cc0",
    border: "rgba(97,218,251,0.3)",
    bg: "rgba(97,218,251,0.08)",
    icon: <IconReact width={14} height={14} />,
  },
  {
    name: "TypeScript",
    color: "#007ACC",
    border: "rgba(0,122,204,0.25)",
    bg: "rgba(0,122,204,0.08)",
    icon: <IconTypeScript width={14} height={14} />,
  },
  {
    name: "Next.js",
    color: "var(--foreground)",
    border: "var(--card-border)",
    bg: "var(--background)",
    icon: <IconNextjs width={14} height={14} />,
  },
  {
    name: "Git",
    color: "#F05032",
    border: "rgba(240,80,50,0.25)",
    bg: "rgba(240,80,50,0.08)",
    icon: <IconGit width={14} height={14} />,
  },
];

export function HeroSection() {
  return (
    <section
      id="sobre"
      className="w-full scroll-mt-14 min-h-[calc(100vh-3.5rem)] flex items-center"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-center">
          <AnimatedSection
            delay={0}
            className="shrink-0 flex flex-col items-center gap-6"
          >
            <div
              className="p-0.75 rounded-full float-animation"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              }}
            >
              <div className="p-0.75 rounded-full bg-background">
                <Image
                  src="/assets/img/profile.jpeg"
                  width={400}
                  height={400}
                  alt="Foto de perfil de Fabricio Pereira"
                  priority
                  className="size-44 md:size-56 lg:size-60 object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/fabricio-dev-front"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-xs text-muted-text hover:text-foreground px-3.5 py-2 rounded-lg border border-card-border hover:bg-background transition-all duration-200"
              >
                <IconGithub width={15} height={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fabricio-dev-front/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-xs text-muted-text hover:text-[#0A66C2] px-3.5 py-2 rounded-lg border border-card-border hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all duration-200"
              >
                <IconLinkedin width={15} height={15} />
                LinkedIn
              </a>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-5 text-center lg:text-left flex-1">
            <AnimatedSection delay={0.08}>
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                  <span className="size-1.5 rounded-full bg-emerald-500 status-dot" />
                  Disponível para projetos
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.13}>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight gradient-text">
                  Fabricio Pereira
                </h1>
                <p className="text-lg md:text-xl text-muted-text mt-2 font-medium">
                  Front-End Software Engineer
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base max-w-lg mx-auto lg:mx-0">
                Especializado em React, Next.js e TypeScript. Crio interfaces
                modernas, acessíveis e com foco em performance — de aplicações
                Web3 a plataformas white-label.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.21}>
              <p className="text-sm text-muted-text flex items-center gap-1.5 justify-center lg:justify-start">
                <IconLocalizacao />
                Riacho de Santana, RN — Brasil
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default"
                    style={{
                      color: tech.color,
                      borderColor: tech.border,
                      backgroundColor: tech.bg,
                    }}
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                <DownloadResume />
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-card-border text-sm font-semibold text-foreground hover:bg-card hover:border-(--accent)/40 transition-all duration-200"
                >
                  Entre em contato
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
