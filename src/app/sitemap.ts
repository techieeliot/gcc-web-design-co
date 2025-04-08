import { MetadataRoute } from 'next';
import { caseStudies } from '@/data';
import { domains } from '@/config/domains';
import path from 'path';
import fs from 'fs';

// Consider adding email configuration to your domains.ts
export const contact = {
  email: {
    primary: 'hey@sanfor.dev',
    legacy: 'devsouth.us@gmail.com',
  },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = domains.primary;

  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return fileName.replace(/\.md$/, '');
    });

  const blogPosts = posts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Get case studies data
  const portfolioItems = caseStudies.map((study) => ({
    url: `${baseUrl}/portfolio/${study.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return [...routes, ...blogPosts, ...portfolioItems];
}
