import { getAllPosts } from '../utils';
import PageWrapper from '@/components/PageWrapper';
import { Suspense } from 'react';
import { Shimmer } from '@ui/shimmer';

import { BlogLibraryCard, BlogLibraryHero } from './components';

export const metadata = {
  title: 'Blog Library | SANFORDEV',
  description:
    'Explore our blog library for insights on React, Next.js, and TypeScript development.',
  alternates: {
    canonical: '/blog/all',
  },
  keywords: [
    'Blog library on React, Next.js, and TypeScript development',
    'SANFORDEV Consulting articles and tutorials',
    'Website development insights and best practices',
    'JavaScript and TypeScript programming blog',
  ],
  openGraph: {
    title: 'Blog Library | SANFORDEV',
    description:
      'Explore our blog library for insights on React, Next.js, and TypeScript development.',
    url: 'https://sanfordev.com/blog/all',
    images: [
      {
        url: '/images/blog-social.webp',
        width: 1200,
        height: 630,
        alt: 'SANFORDEV Blog Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Library | SANFORDEV Consulting',
    description:
      'Explore our blog library for insights on React, Next.js, and TypeScript development.',
    images: ['/images/blog-social.webp'],
  },
};

export default function BlogPost() {
  const allPosts = getAllPosts();

  return (
    <PageWrapper>
      <BlogLibraryHero />
      <section className="flex flex-col gap-8">
        <p className="text-lg">
          Explore our collection of blog posts, tutorials, and articles.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <Suspense fallback={<Shimmer width="full" height={100} />}>
            {allPosts.map((post) => (
              <li key={post.slug}>
                <BlogLibraryCard {...post} />
              </li>
            ))}
          </Suspense>
        </ul>
      </section>
    </PageWrapper>
  );
}
