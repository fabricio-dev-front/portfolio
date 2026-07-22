import { ContainerMain } from "@/components/ContainerMain";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 md:p-10 bg-background lg:h-screen lg:overflow-hidden items-center lg:items-start w-full">
      <aside className="w-full lg:w-90 lg:h-full lg:overflow-y-auto shrink-0 no-scrollbar">
        <Profile />
      </aside>
      <main className="w-full flex-1 lg:h-full lg:overflow-y-auto no-scrollbar">
        <ContainerMain />
      </main>
    </div>
  );
}
