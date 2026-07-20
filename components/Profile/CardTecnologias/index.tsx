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

export function CardTecnologias() {
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
