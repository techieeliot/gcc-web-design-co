import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { generateBlurPlaceholder } from '@/lib/image';
import { clientLogger } from '@/lib/logger';

export type Author = {
  name: string;
  image: string;
};

export interface Post {
  slug: string;
  title: string;
  publishedAt: string;
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

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug);
    })
    .sort((a, b) => {
      if (a && b) {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      }
      return 0;
    });

  return posts
    .filter((post): post is Post => post !== null)
    .map((post) => ({
      ...post,
      blurDataUrl: post.blurDataUrl || generateBlurPlaceholder(800, 450),
    }));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as Omit<Post, 'slug' | 'content'>),
    };
  } catch (error) {
    clientLogger.error(
      `Error reading post ${slug}: ${(error as Error).toString()}`,
      error as Error
    );
    return null;
  }
}
