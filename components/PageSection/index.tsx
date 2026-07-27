import { ReactNode } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface PageSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function PageSection({ id, children, className = "" }: PageSectionProps) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-14 min-h-[calc(100vh-3.5rem)] flex flex-col justify-center ${className}`}
    >
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16">
          {children}
        </div>
      </AnimatedSection>
    </section>
  );
}
