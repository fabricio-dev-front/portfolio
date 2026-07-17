import Link from "next/link";
import { getGithubRepositories } from "@/lib/github";

export async function GithubProjects() {
  const repositories = await getGithubRepositories();

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {repositories
        .filter((repo) => repo.topics.includes("portfolio"))
        .map((repository) => (
          <article
            key={repository.id}
            className="rounded-xl min-w-full bg-[#302F3D] p-5"
          >
            <h2 className="text-xl font-semibold">{repository.name}</h2>

            <p className="mt-2 text-zinc-500">{repository.description}</p>

            <div className="mt-5 flex gap-6 text-sm">
              <span>{repository.language}</span>

              <span>⭐ {repository.stargazers_count}</span>

              <span>🍴 {repository.forks_count}</span>
            </div>

            <Link
              href={repository.html_url}
              target="_blank"
              className="mt-5 inline-flex justify-center w-full py-1.5 rounded-xl bg-[#CB92B1] hover:bg-[#CB92B1]/80"
            >
              Ver projeto →
            </Link>
          </article>
        ))}
    </div>
  );
}
