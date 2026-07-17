import { GithubRepository } from "@/types/github";

const USERNAME = process.env.USERNAME_GITHUB;

export async function getGithubRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },

      next: {
        revalidate: 60 * 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios.");
  }

  const repositories: GithubRepository[] = await response.json();

  return repositories
    .filter((repo) => !repo.fork)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
}
