"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PortfolioPost } from "@/types/linkedin";
import LinkedinPostsSkeleton from "./skeleton";

export default function LinkedinPosts() {
  const [posts, setPosts] = useState<PortfolioPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("/api/linkedin");
        if (!response.ok) {
          throw new Error("Erro ao carregar posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return <LinkedinPostsSkeleton />;
  }

  if (error || posts.length === 0) {
    return (
      <div className="rounded-xl bg-[#302F3D] p-6 text-center text-gray-400 w-full">
        Nenhum post do LinkedIn disponível no momento.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-8 w-full">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden flex flex-col sm:flex-row sm:items-center rounded-[20px] transition shadow-lg bg-[#302F3D] hover:bg-[#302F3D]/80 h-auto sm:h-[160px] w-full"
        >
          {post.image && (
            <Image
              src={post.image}
              width={300}
              height={160}
              alt={post.description}
              className="aspect-video w-full sm:w-[300px] h-40 sm:h-full object-cover shrink-0"
            />
          )}

          <div className="space-y-4 p-5 flex-1 w-full">
            <p className="line-clamp-3 text-gray-200">{post.description}</p>

            <div className="flex gap-6 text-sm text-gray-400">
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
