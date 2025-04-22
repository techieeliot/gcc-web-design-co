export interface AuthorSocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export type Author = {
  name: string;
  image: string;
  social?: AuthorSocialLinks;
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
