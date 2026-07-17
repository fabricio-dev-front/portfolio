import Image from "next/image";

const tecnologias = [
  {
    id: 0,
    tech: "HTML",
  },
  {
    id: 1,
    tech: "CSS",
  },
  {
    id: 2,
    tech: "Tailwind",
  },
  {
    id: 3,
    tech: "JavaScript",
  },
  {
    id: 4,
    tech: "React",
  },
  {
    id: 5,
    tech: "TypeScript",
  },
  {
    id: 6,
    tech: "Next.js",
  },
  {
    id: 7,
    tech: "Git",
  },
  {
    id: 8,
    tech: "GitHub",
  },
];

function CardPerfil() {
  return (
    <div className="flex flex-col items-center rounded-[20px] shadow-lg justify-center bg-[#302F3D] h-73 w-full">
      <Image
        src="/assets/img/profile.jpeg"
        width={300}
        height={300}
        alt="img profile"
        className="size-32 object-cover rounded-full border border-[#00FF00]"
      />

      <div className="flex flex-col gap-1 items-center text-mer mt-7.5">
        <span className="font-bold text-[23px] text-[#837E9F]">
          Fabricio Pereira
        </span>
        <span className="font-light text-sm text-[#837E9F]">
          Front-End Software Engineer
        </span>
      </div>
    </div>
  );
}

function CardTecnologias() {
  return (
    <div className="flex flex-col items-center rounded-[20px] gap-4 shadow-lg justify-center bg-[#302F3D] h-52 w-full">
      <div className="text-[20px] font-bold text-[#837E9F] items-start w-full pl-5">
        Tecnologias
      </div>
      <div className="grid grid-cols-3 gap-3.75 px-5">
        {tecnologias.map(({ tech, id }) => (
          <div
            key={id}
            className="bg-[#CB92B1] text-black uppercase py-1.5 w-21.5 text-center text-[11px] font-bold rounded-[30px]"
          >
            {tech}
          </div>
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
