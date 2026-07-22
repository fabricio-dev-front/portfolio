import { ThemeToggle } from "@/components/ThemeToggle";
import { VercelProjects } from "../VercelProjects";

export async function MyProjects() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      <div className="flex gap-4">
        <ThemeToggle />
        <div className="rounded-lg bg-card border border-card-border shadow-sm flex items-center py-4 px-6 justify-between flex-1">
          <span className="font-semibold text-foreground text-[16px]">
            Meus Projetos
          </span>
        </div>
      </div>
      <VercelProjects />
    </div>
  );
}
