export type Author = {
  name: string;
  image: string;
};

export interface Post {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary: string;
  image: string;
  content: string;
  blurDataUrl?: string;
  author: Author;
  featured?: boolean;
  tags?: string[];
  readingTime?: string;
  canonical?: string;
  ogImage?: string;
}
