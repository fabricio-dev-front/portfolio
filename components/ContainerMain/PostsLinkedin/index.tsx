"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PortfolioPost } from "@/types/linkedin";
import LinkedinPostsSkeleton from "./skeleton";
import { IconComments, IconLike } from "@/public/assets/icons";

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
      <div className="rounded-lg bg-card border border-card-border p-6 text-center text-muted-text w-full">
        Nenhum post do LinkedIn disponível no momento.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-6 w-full">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden flex flex-col sm:flex-row sm:items-center rounded-lg transition-all shadow-xs bg-card border border-card-border hover:opacity-95 h-auto sm:h-40 w-full"
        >
          {post.image && (
            <Image
              src={post.image}
              width={300}
              height={160}
              alt={post.description}
              className="aspect-video w-full sm:w-75 h-40 sm:h-full object-cover shrink-0"
            />
          )}

          <div className="space-y-4 p-5 flex-1 w-full">
            <p className="line-clamp-3 text-foreground text-sm leading-relaxed">
              {post.description}
            </p>

            <div className="flex gap-4 text-xs items-center text-muted-text">
              <span className="flex items-center gap-1">
                <IconLike />
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <IconComments />
                {post.comments}
              </span>

              <div className="ml-auto text-sm font-semibold text-link hover:underline truncate">
                Ler Mais
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
