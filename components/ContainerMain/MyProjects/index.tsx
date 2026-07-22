import { VercelProjects } from "../VercelProjects";

export async function MyProjects() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      <div className="rounded-lg bg-card border border-card-border shadow-sm flex items-center py-4 px-6 justify-between">
        <span className="font-semibold text-foreground text-[16px]">
          Meus Projetos
        </span>
      </div>
      <VercelProjects />
    </div>
  );
}
