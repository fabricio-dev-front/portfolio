import { Suspense } from "react";
import { MyProjects } from "./MyProjects";
import LinkedinPosts from "./PostsLinkedin";
import LinkedinPostsSkeleton from "./PostsLinkedin/skeleton";

export function ContainerMain() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      <MyProjects />

      <div className="rounded-[30px] bg-[#302F3D] shadow-lg flex items-center p-7.5 justify-between">
        <span className="font-bold text-[#837E9F] text-[20px]">
          Postes Recentes
        </span>
      </div>
      <Suspense fallback={<LinkedinPostsSkeleton />}>
        <LinkedinPosts />
      </Suspense>
    </div>
  );
}
