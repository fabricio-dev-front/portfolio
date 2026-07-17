import { ContainerMain } from "@/components/ContainerMain";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-15 p-4 md:p-10 dark:bg-[#22212C] lg:h-screen lg:overflow-hidden items-center lg:items-start">
      <aside className="w-full lg:w-auto lg:h-full lg:overflow-y-auto shrink-0 no-scrollbar">
        <Profile />
      </aside>
      <main className="w-full flex-1 lg:h-full lg:overflow-y-auto no-scrollbar">
        <ContainerMain />
      </main>
    </div>
  );
}
