export interface VercelProject {
  id: string;
  name: string;
  description: string;
  deployUrl: string;
  githubUrl?: string;
  imageUrl: string;
  tags: string[];
}
