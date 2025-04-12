import { MetadataRoute } from 'next';
import { caseStudies } from '@/data';
import { domains } from '@/config/domains';
import path from 'path';
import fs from 'fs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use environment variable for base URL to handle different environments
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ??
    domains.primary) as string;

  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const fileNames = await fs.promises.readdir(postsDirectory);

    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));

    const blogPosts = posts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const portfolioItems = caseStudies.map((study) => ({
      url: `${baseUrl}/portfolio/${study.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    // Core pages with ISO string dates
    const routes = [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
    ];

    return [...routes, ...blogPosts, ...portfolioItems];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return at least the core routes on error
    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
    ];
  }
}
