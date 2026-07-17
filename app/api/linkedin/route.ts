import { NextResponse } from "next/server";
import { getLinkedinPosts } from "@/lib/linkedin";

export async function GET() {
  try {
    const posts = await getLinkedinPosts();

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erro ao buscar posts do LinkedIn.",
      },
      {
        status: 500,
      },
    );
  }
}
