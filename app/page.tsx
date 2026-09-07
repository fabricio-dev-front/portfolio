import {
  HeroSection,
  PageSection,
  VercelProjects,
  Experiences,
  Contact,
  Footer,
} from "@/components";

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

      <Footer />
    </div>
  );
}
