import Image from "next/image";
import { DownloadResume } from "@/components/ui/DownloadResume";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IconGithub, IconLinkedin } from "@/public/assets/icons";

export function HeroSection() {
  return (
    <section
      id="sobre"
      className="w-full scroll-mt-14 min-h-[calc(100vh-3.5rem)] flex items-center py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
            <AnimatedSection
              delay={0.05}
              className="w-full max-w-90 sm:max-w-105"
            >
              <div className="relative rounded-3xl p-2 bg-card border border-card-border shadow-xl">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src="/assets/img/profile-senior.jpg"
                    alt="Foto profissional de Fabricio Pereira"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-[center_18%] transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-medium tracking-tight">
                        Disponível para projetos
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-300">
                      Remoto / Global
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-5 text-center lg:text-left order-2 lg:order-1">
            <AnimatedSection delay={0.08}>
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-card-border bg-card text-muted-text">
                  <span className="size-1.5 rounded-full bg-foreground" />
                  Software Engineer & AI
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.05]">
                  Fabricio Pereira
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-muted-text mt-2.5 tracking-tight">
                  Engenharia de Software & Inteligência Artificial
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Desenvolvimento de sistemas robustos, interfaces de alta
                performance e integração de soluções inteligentes para a web.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-foreground text-background font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-sm"
                >
                  Entrar em contato
                </a>
                <div className="w-full sm:w-auto">
                  <DownloadResume />
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 pt-5 border-t border-card-border/60">
                <a
                  href="https://github.com/fabricio-dev-front"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Fabricio Pereira"
                  className="flex items-center gap-2 text-xs text-muted-text hover:text-foreground transition-colors"
                >
                  <IconGithub width={16} height={16} />
                  <span>GitHub</span>
                </a>
                <span className="text-card-border">•</span>
                <a
                  href="https://www.linkedin.com/in/fabricio-dev-front/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Fabricio Pereira"
                  className="flex items-center gap-2 text-xs text-muted-text hover:text-foreground transition-colors"
                >
                  <IconLinkedin width={16} height={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
