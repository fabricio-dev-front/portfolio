import { LinkedInPost, PortfolioPost } from "@/types/linkedin";
import { unstable_cache } from "next/cache";

const APIFY_URL = process.env.APIFY_URL;
const APIFY_TOKEN = process.env.APIFY_TOKEN;

async function fetchLinkedinPostsRaw(): Promise<PortfolioPost[]> {
  const response = await fetch(`${APIFY_URL}?token=${APIFY_TOKEN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      includeQuotePosts: false,
      includeReposts: false,
      maxComments: 0,
      maxPosts: 10,
      maxReactions: 0,
      postNestedComments: false,
      postNestedReactions: false,
      postedLimit: "any",
      scrapeComments: false,
      scrapeReactions: false,
      targetUrls: ["https://www.linkedin.com/in/fabricio-pereira-333b6b24b/"],
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar posts do LinkedIn.");
  }

  const posts: LinkedInPost[] = await response.json();

  return posts.map((post) => ({
    id: post.id,
    description: post.content,
    image: post.postImages?.[0]?.url,
    likes: post.engagement.likes,
    comments: post.engagement.comments,
    url: post.linkedinUrl,
    publishedAt: post.postedAt.date,
  }));
}

export const getLinkedinPosts = unstable_cache(
  async () => fetchLinkedinPostsRaw(),
  ["linkedin-posts-cache"],
  {
    revalidate: 43200,
    tags: ["linkedin"],
  },
);
