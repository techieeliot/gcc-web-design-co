import { getAllPosts } from '../utils';
import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { Link } from '@ui/link';
import { Suspense } from 'react';
import { Shimmer } from '@ui/shimmer';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardMediaContent,
} from 'components/ui/card';
import NextLink from 'next/link';
import DateDisplay from '@/components/DateDisplay';
import { AuthorSection } from '../[slug]/components';
import { Pill } from '@/components/Pill';

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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-sky/15 dark:from-sky/50 dark:to-indigo/40 flex flex-col items-center justify-center text-center px-6">
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <Suspense fallback={<Shimmer width="full" height={100} />}>
            {allPosts.map((post) => (
              <li key={post.slug}>
                <Card>
                  <CardMediaContent className="h-48 rounded-tl-xl rounded-tr-xl overflow-hidden">
                    <NextLink href={`/blog/${post.slug}`}>
                      <CardMedia src={post.image} alt={post.title} />
                    </NextLink>
                  </CardMediaContent>
                  <CardHeader className="flex flex-col gap-6">
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="h-fit w-full lg:h-full lg:w-fit whitespace-break-spaces break-words"
                      variant="inlineLink"
                      aria-label={`Read ${post.title}`}
                    >
                      <h2 className="text-lg sm:text-xl lg:text-2xl">
                        {post.title}
                      </h2>
                    </Link>
                    <DateDisplay date={post.publishedAt} />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6 pb-6">
                    <Card variant="callout">
                      <CardHeader>
                        <p>{post.summary}</p>
                      </CardHeader>
                    </Card>

                    <AuthorSection {...post.author} />
                    <p className="flex flex-wrap gap-4">
                      {post.tags!.map((tag, index) => (
                        <Pill key={index}>{tag}</Pill>
                      ))}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </Suspense>
        </ul>
      </section>
    </PageWrapper>
  );
}
