import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../utils';
import { Metadata } from 'next';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { Link } from '@ui/link';
import { Icon } from '@ui/icon';
import { AuthorSection, RelatedPosts } from './components';
import { Suspense } from 'react';
import PageWrapper from '@/components/PageWrapper';
import { defaultImageSizes } from '@/lib/image';
import DateDisplay from '@/components/DateDisplay';
import { PortableText } from '@portabletext/react';
import { type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const ALL_POSTS_QUERY = `*[_type == "post"] { "slug": slug.current }`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

// Add error handling for generateStaticParams

export async function generateStaticParams() {
  try {
    // Fetch all posts from Sanity
    const posts = await client.fetch<Array<{ slug: string }>>(ALL_POSTS_QUERY);

    // Map the slugs to the format Next.js expects
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Add ISR for dynamic updates
export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: params.slug },
    options
  );

  if (!post) {
    return {
      title: 'Post Not Found',
      description: "The blog post you're looking for doesn't exist",
    };
  }

  return {
    title: `${post.title} | SANFORDEV Blog`,
    description: post.summary,
    // ...rest of your metadata
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await client.fetch<SanityDocument>(
      POST_QUERY,
      { slug: params.slug },
      options
    );

    if (!post) {
      notFound();
    }

    console.log('Post:', post);

    const postImageUrl = post.mainImage
      ? urlFor(post.mainImage.asset._ref)?.width(550).height(310).url()
      : null;
    const allPosts = getAllPosts();

    return (
      <PageWrapper>
        <div>
          <Link href="/blog" variant="standaloneLink">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        {/* Hero Section */}
        <header id="top" className="flex flex-col gap-4">
          <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
            {postImageUrl && (
              <Image
                src={postImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                sizes={defaultImageSizes}
                className="object-cover aspect-video rounded-xl"
                priority
                quality={90}
              />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.tile}</h1>
          <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
            {/*<DateDisplay date={post.publishedAt} />
             */}
            {/*
            <p className="text-lg ">
            {post.author.image && (
              <Image
              src={post.author.image}
              alt={post.author.name}
              width={24}
              height={24}
              className="inline-block rounded-full mr-2"
              loading="lazy"
              quality={75}
              />
              )}
              {post.author.name}
              </p>
              */}

            {/* 
            <p className="text-xl line-clamp-3">
              <strong>TLDR;</strong> {post.summary}
            </p>
            */}
          </div>
        </header>

        {/* Content */}
        <article className="prose dark:prose-invert max-w-none">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
          {/* <AuthorSection {...post.author} /> */}
        </article>

        {/* back to the top */}
        <div className="flex justify-center">
          <Link
            href="#top"
            className="text-sm text-slate-500 dark:text-slate-400 hover:underline"
          >
            Back to Top
          </Link>
        </div>
        <Suspense fallback={<div className="h-12" />}>
          <RelatedPosts currentSlug={post.slug} posts={allPosts} />
        </Suspense>
      </PageWrapper>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    notFound();
  }
}
