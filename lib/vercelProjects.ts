import { VercelProject } from "@/types/vercelProjects";

export const vercelProjects: VercelProject[] = [
  {
    id: "proof-of-payment",
    name: "Proof of Payment",
    description:
      "Criação de um painel web para geração de comprovantes de uma rede de abastecimento de água, substituindo o processo manual realizado em planilhas Excel. O projeto otimizou o fluxo operacional, reduziu erros e proporcionou maior agilidade na emissão dos documentos.",
    deployUrl: "https://proof-of-payment-one.vercel.app/",
    githubUrl: "https://github.com/fabricio-dev-front/proof-of-payment",
    imageUrl: "/assets/img/projects/proof.png",
    tags: ["React", "TypeScript", "CSS", "Git", "GitHub", "Vercel"],
  },
  {
    id: "whitelabel-pizzaria",
    name: "Whitelabel Pizzaria",
    description:
      "Desenvolvimento de uma plataforma white-label para pizzarias, composta por um site de pedidos integrado a um painel administrativo e um painel da cozinha. A arquitetura permite reutilizar a mesma base de código para diferentes estabelecimentos, personalizando identidade visual e configurações de cada cliente, além de centralizar o gerenciamento de pedidos em tempo real.",
    deployUrl: "https://whitelabel-estrutura.vercel.app/",
    githubUrl: "https://github.com/fabricio-dev-front/whitelabel-estrutura",
    imageUrl: "/assets/img/projects/whitelabel.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"],
  },
];
