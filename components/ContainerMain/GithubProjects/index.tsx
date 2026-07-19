import Link from "next/link";
import { getGithubRepositories } from "@/lib/github";
import { IconFavorites, IconRepository } from "@/public/assets/icons";

const languageColors: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  HTML: "bg-[#e34c26]",
  CSS: "bg-[#563d7c]",
  Vue: "bg-[#41b883]",
  Python: "bg-[#3572A5]",
};

function getLanguageColor(lang: string | null) {
  if (!lang) return "bg-[#858585]";
  return languageColors[lang] || "bg-[#858585]";
}

export async function GithubProjects() {
  const repositories = await getGithubRepositories();

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {repositories
        .filter((repo) => repo.topics.includes("portfolio"))
        .map((repository) => (
          <article
            key={repository.id}
            className="rounded-lg min-w-full bg-card border border-card-border p-5 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2">
                <IconRepository />
                <h2 className="text-base font-semibold text-link hover:underline truncate">
                  <Link href={repository.html_url} target="_blank">
                    {repository.name}
                  </Link>
                </h2>
              </div>

              <p className="mt-2.5 text-muted-text text-[13px] leading-relaxed line-clamp-2">
                {repository.description}
              </p>
            </div>

            <div>
              <div className="mt-5 flex gap-4 text-xs text-muted-text">
                {repository.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`size-3 rounded-full ${getLanguageColor(
                        repository.language,
                      )}`}
                    />
                    {repository.language}
                  </span>
                )}

                <span className="flex items-center gap-1">
                  <IconFavorites />
                  {repository.stargazers_count}
                </span>
              </div>

              <Link
                href={repository.html_url}
                target="_blank"
                className="mt-4 inline-flex justify-center items-center w-full py-1.5 rounded-md bg-btn text-btn-text hover:opacity-90 border border-card-border transition text-xs font-semibold"
              >
                Ver projeto
              </Link>
            </div>
          </article>
        ))}
    </div>
  );
}
