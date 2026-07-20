import { Suspense } from "react";
import { MyProjects } from "./MyProjects";
import LinkedinPosts from "./PostsLinkedin";
import LinkedinPostsSkeleton from "./PostsLinkedin/skeleton";
import { GithubCalendarComponent } from "./GithubCalendar";

export function ContainerMain() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      <MyProjects />

      <GithubCalendarComponent />

      <div className="rounded-lg bg-card border border-card-border shadow-sm flex items-center py-4 px-6 justify-between">
        <span className="font-semibold text-foreground text-[16px]">
          Posts Recentes
        </span>
      </div>
      <Suspense fallback={<LinkedinPostsSkeleton />}>
        <LinkedinPosts />
      </Suspense>
    </div>
  );
}
