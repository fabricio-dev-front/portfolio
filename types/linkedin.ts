export interface LinkedInPost {
  id: string;
  content: string;
  linkedinUrl: string;

  postImages: {
    url: string;
    width: number;
    height: number;
  }[];

  postedAt: {
    date: string;
    relative: string;
  };

  engagement: {
    likes: number;
    comments: number;
    reposts: number;
    totalReactions: number;
  };
}

export interface PortfolioPost {
  id: string;
  description: string;
  image?: string;
  likes: number;
  comments: number;
  url: string;
  publishedAt: string;
}
