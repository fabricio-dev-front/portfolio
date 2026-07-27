import { DownloadResume } from "./DownloadResume";
import { CardPerfil } from "./CardPerfil";
import { CardTecnologias } from "./CardTecnologias";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Profile() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <AnimatedSection delay={0}>
        <CardPerfil />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <CardTecnologias />
      </AnimatedSection>
      <AnimatedSection delay={0.18}>
        <div className="px-1">
          <DownloadResume />
        </div>
      </AnimatedSection>
    </div>
  );
}
