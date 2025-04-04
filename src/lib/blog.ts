import { sql } from "../../next.config";
import { cache } from "react";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  published_at: Date;
  summary: string;
  image: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

export const getBlogPost = cache(
  async (slug: string): Promise<BlogPost | null> => {
    if (!sql) return null;

    try {
      const [post] = await sql<BlogPost[]>`
      SELECT *
      FROM blog_posts
      WHERE slug = ${slug}
    `;

      return post || null;
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return null;
    }
  },
);

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  if (!sql) return [];

  try {
    return await sql<BlogPost[]>`
        SELECT *
        FROM blog_posts
        ORDER BY published_at DESC
      `;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
});
