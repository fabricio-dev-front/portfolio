import Link from "next/link";
import { GithubProjects } from "../GithubProjects";

export async function MyProjects() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      <div className="rounded-[30px] bg-[#302F3D] shadow-lg flex items-center p-7.5 justify-between">
        <span className="font-bold text-[#837E9F] text-[20px]">
          Meus Projetos
        </span>
        <Link
          href="https://github.com/fabricio-dev-front?tab=repositories"
          target="_blank"
          className="text-sm text-[#837E9F]"
        >
          Veja Todos
        </Link>
      </div>
      <GithubProjects />
    </div>
  );
}
