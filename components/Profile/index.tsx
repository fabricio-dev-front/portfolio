import Image from "next/image";

const tecnologias = [
  {
    id: 0,
    tech: "HTML",
    color: "bg-[#E44D26] text-white",
  },
  {
    id: 1,
    tech: "CSS",
    color: "bg-[#264DE4] text-white",
  },
  {
    id: 2,
    tech: "Tailwind",
    color: "bg-[#10B981] text-white",
  },
  {
    id: 3,
    tech: "JavaScript",
    color: "bg-[#F7DF1E] text-black",
  },
  {
    id: 4,
    tech: "React",
    color: "bg-[#61DAFB] text-black",
  },
  {
    id: 5,
    tech: "TypeScript",
    color: "bg-[#007ACC] text-white",
  },
  {
    id: 6,
    tech: "Next.js",
    color: "bg-[#000000] text-white",
  },
  {
    id: 7,
    tech: "Git",
    color: "bg-[#F05032] text-white",
  },
  {
    id: 8,
    tech: "GitHub",
    color: "bg-[#24292F] text-white",
  },
];

function CardPerfil() {
  return (
    <div className="flex flex-col items-center rounded-lg bg-card border border-card-border p-6 shadow-sm w-full">
      <Image
        src="/assets/img/profile.jpeg"
        width={300}
        height={300}
        alt="img profile"
        className="size-36 object-cover rounded-full border border-card-border bg-background"
      />

      <div className="flex flex-col gap-1 items-start mt-4">
        <span className="font-semibold text-2xl text-foreground">
          Fabricio Pereira
        </span>
        <span className="text-sm text-muted-text">fabricio-dev-front</span>
        <p className="font-normal text-sm text-foreground mt-3 leading-relaxed">
          Front-End Software Engineer
        </p>
      </div>
    </div>
  );
}

function CardTecnologias() {
  return (
    <div className="flex flex-col items-start rounded-lg bg-card border border-card-border p-6 shadow-sm w-full">
      <div className="text-sm font-semibold text-foreground mb-4">
        Tecnologias
      </div>
      <div className="grid grid-cols-3 w-full gap-3 text-center">
        {tecnologias.map(({ tech, id, color }) => (
          <span
            key={id}
            className={`${color} text-[12px] truncate font-medium px-2 py-1 rounded-full border border-card-border/30`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Profile() {
  return (
    <div className="flex flex-col gap-7.5 w-full">
      <CardPerfil />
      <CardTecnologias />
    </div>
  );
}
