import { GithubRepository } from "@/types/github";

const USERNAME = process.env.USERNAME_GITHUB;

export async function getGithubRepositories() {
  if (!USERNAME) {
    console.warn("A variável de ambiente USERNAME_GITHUB não está definida.");
    return [];
  }

  try {
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
      console.error(
        `Erro ao buscar repositórios do GitHub: ${response.status} ${response.statusText}`,
      );
      return [];
    }

    const repositories: GithubRepository[] = await response.json();

    return repositories
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      );
  } catch (error) {
    console.error("Erro inesperado ao buscar repositórios do GitHub:", error);
    return [];
  }
}
