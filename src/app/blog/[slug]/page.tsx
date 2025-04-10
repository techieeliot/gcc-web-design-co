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
import { defaultImageSizes, generateBlurPlaceholder } from '@/lib/image';
import DateDisplay from '@/components/DateDisplay';

// Add error handling for generateStaticParams
export async function generateStaticParams() {
  try {
    const posts = getAllPosts();
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

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: "The blog post you're looking for doesn't exist",
    };
  }

  return {
    title: `${post.title} | SanforDEV Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: any) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

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
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={defaultImageSizes}
            className="object-cover"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL={generateBlurPlaceholder(1200, 630)}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
          <DateDisplay date={post.publishedAt} />
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
          <p className="text-xl line-clamp-3">
            <strong>TLDR;</strong> {post.summary}
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="prose dark:prose-invert max-w-none">
        <Markdown className="grid grid-cols-1 gap-6 [&>break-words] [&>prose] [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:text-lg [&>ul]:list-disc [&>ol]:list-decimal [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>whitespace-break-spaces] [&>code]:bg-slate-200 [&>code]:rounded [&>code]:px-1.5 [&>pre>code]:whitespace-break-spaces [&>pre>code]:break-words [&>code]:py-0.5 [&>pre]:bg-slate-200 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-6 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:ml-4 [&>ol]:ml-4">
          {post.content}
        </Markdown>
        <AuthorSection {...post.author} />
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
}
