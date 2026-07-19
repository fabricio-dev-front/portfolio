export default function LinkedinPostsSkeleton() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="overflow-hidden flex flex-col sm:flex-row sm:items-center rounded-lg bg-card/50 border border-card-border/50 animate-pulse shadow-xs h-auto sm:h-[160px] w-full"
        >
          {/* Skeleton para a imagem */}
          <div className="aspect-video w-full sm:w-[300px] h-40 sm:h-full bg-zinc-200 dark:bg-zinc-800/80 shrink-0" />

          {/* Skeleton para o conteúdo */}
          <div className="space-y-4 p-5 flex-1 w-full">
            <div className="space-y-2">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800/60 rounded w-11/12" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800/60 rounded w-full" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800/60 rounded w-3/4" />
            </div>

            <div className="flex gap-6">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800/60 rounded w-10" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800/60 rounded w-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
