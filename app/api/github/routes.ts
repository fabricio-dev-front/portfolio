import { NextResponse } from "next/server";
import { getGithubRepositories } from "@/lib/github";

export async function GET() {
  const repositories = await getGithubRepositories();

  return NextResponse.json(repositories);
}
