import { Experience } from "@/types/experience";

function parseYearMonth(dateStr: string): { year: number; month: number } {
  const parts = dateStr.split("-").map(Number);
  return { year: parts[0], month: parts[1] };
}

export function calculateDuration(startDate: string, endDate?: string): string {
  const start = parseYearMonth(startDate);
  const end = endDate
    ? parseYearMonth(endDate)
    : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };

  const totalMonths =
    (end.year - start.year) * 12 + (end.month - start.month) + 1;

  if (totalMonths <= 0) return "1 mês";

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  }
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`);
  }

  return parts.join(" e ");
}

export function calculateTotalExperience(list: Experience[]): string {
  let totalMonths = 0;

  for (const exp of list) {
    if (exp.startDate) {
      const start = parseYearMonth(exp.startDate);
      const end = exp.endDate
        ? parseYearMonth(exp.endDate)
        : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };

      const months =
        (end.year - start.year) * 12 + (end.month - start.month) + 1;
      if (months > 0) totalMonths += months;
    }
  }

  const years = (totalMonths / 12).toFixed(1);
  return `+${years.replace(".0", "")} anos de experiência`;
}

export const experiences: Experience[] = [
  {
    company: "Nordeste Energia",
    period: "Atual",
    startDate: "2026-08",
    endDate: "Atual",
    description:
      "Atuação no desenvolvimento Full Stack, projetando e evoluindo aplicações modernas com foco em arquitetura, escalabilidade e qualidade de código. Utilizo Inteligência Artificial de forma estruturada ao longo do ciclo de desenvolvimento, desde o planejamento e análise de requisitos até implementação, refatoração, testes e otimização, buscando aumentar a eficiência sem comprometer boas práticas e decisões técnicas.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "SQL",
      "Git",
      "GitHub",
      "Linear",
      "AI-Assisted Development",
      "Prompt Engineering",
      "AI Agents",
      "MCP",
      "Context Engineering",
      "AI-Driven Workflows",
      "Code Generation & Refactoring",
      "AI-Powered Testing",
    ],
  },
  {
    company: "Triad Markets",
    period: "Ago 2024 - Jul 2026",
    startDate: "2024-08",
    endDate: "2026-07",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações web utilizando React, Next.js, TypeScript e Tailwind CSS. Participei de projetos Web3, incluindo o desenvolvimento de interfaces para um marketplace de NFTs integrado ao ecossistema Solana, soluções whitelabel e rebranding de plataformas internacionais. Também contribuí para melhorias de performance, experiência do usuário, correção de bugs, code reviews e colaboração em equipes ágeis.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Jira",
      "Notion",
      "AI-Assisted Development",
      "Prompt Engineering",
      "AI Agents",
    ],
  },
  {
    company: "AltoTech",
    period: "Jan 2023 - Jun 2024",
    startDate: "2023-01",
    endDate: "2024-06",
    description:
      "Iniciei minha carreira como Desenvolvedor Front-end, desenvolvendo interfaces responsivas com HTML, CSS e JavaScript. Colaborei na implementação e manutenção de funcionalidades, participei de workshops técnicos e trabalhei em conjunto com a equipe no desenvolvimento de interfaces focadas em usabilidade e boas práticas de desenvolvimento.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Notion",
      "ChatGPT",
    ],
  },
];
