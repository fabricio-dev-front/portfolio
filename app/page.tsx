import { HeroSection } from "@/components/HeroSection";
import { PageSection } from "@/components/PageSection";
import { VercelProjects } from "@/components/VercelProjects";
import { Experiences } from "@/components/Experiences";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="pt-14">
      <HeroSection />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="h-px bg-card-border/50" />
      </div>

      <PageSection id="projetos">
        <VercelProjects />
      </PageSection>

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="h-px bg-card-border/50" />
      </div>

      <PageSection id="experiencias">
        <Experiences />
      </PageSection>

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="h-px bg-card-border/50" />
      </div>

      <PageSection id="contato">
        <Contact />
      </PageSection>

      <footer className="border-t border-card-border py-6">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-text">
          <span>© 2025 Fabricio Pereira — All rights reserved</span>
          <span className="animated-gradient-text font-semibold">
            fabricio.dev
          </span>
        </div>
      </footer>
    </div>
  );
}
