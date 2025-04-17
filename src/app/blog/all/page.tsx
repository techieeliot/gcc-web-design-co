import { getAllPosts } from '../utils';
import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { Link } from '@ui/link';
import { Suspense } from 'react';
import { Shimmer } from '@ui/shimmer';

export const metadata = {
  title: 'Blog Library | SANFORDEV Consulting',
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
    title: 'Blog Library | SANFORDEV Consulting',
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
      <header>
        <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pic12.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-indigo/30 dark:from-sky/50 dark:to-indigo/40 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-blue-900 drop-shadow-lg">
              Blog Library
            </h1>
          </div>
        </div>
      </header>
      <section className="flex flex-col gap-8">
        <p className="text-lg">
          Explore our collection of blog posts, tutorials, and articles.
        </p>
        <ul className="flex flex-col gap-8">
          <Suspense fallback={<Shimmer width="full" height={100} />}>
            {allPosts.map((post) => (
              <li key={post.slug}>
                <div>
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="h-fit w-full lg:h-full lg:w-fit whitespace-break-spaces break-words"
                    variant="inlineLink"
                  >
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{post.summary}</p>
                  <p>published: {post.publishedAt}</p>
                  <p>author: {post.author.name}</p>
                </div>
              </li>
            ))}
          </Suspense>
        </ul>
      </section>
    </PageWrapper>
  );
}
