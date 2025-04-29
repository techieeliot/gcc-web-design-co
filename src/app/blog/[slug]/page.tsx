import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../utils';
import { Metadata } from 'next';
import Markdown from 'markdown-to-jsx';
import { Link } from '@ui/link';
import { Icon } from '@ui/icon';
import { BlogHeader, RelatedPosts } from './components';
import { Suspense } from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Shimmer } from '@/components/ui/shimmer';

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
    title: `${post.title} | SANFORDEV Blog`,
    description: post.summary,
    keywords: [
      'SANFORDEV Consulting web development programming blogs, articles, insights, best practices, and tutorials',
      post.title,
      post.tags
        ? post.tags.join(', ')
        : 'React.js, Next.js, TypeScript, JavaScript',
    ],
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image || '/images/blog-social.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://sanfordev.com/blog/${post.slug}`,
      siteName: 'SANFORDEV Blog',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.image || '/images/blog-social.webp'],
      creator: '@sanfordev32857',
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
        <div>
          <Link
            href="/blog"
            variant="standaloneLink"
            aria-label="Go back to the blog main page"
            className="flex items-center sm:items-start justify-center sm:justify-start text-sm"
          >
            <Icon name="ArrowLeft" className="w-4 h-4 mr-0 sm:mr-2" />
            Back to Blog
          </Link>
        </div>
        <article className="prose dark:prose-invert max-w-3xl mx-auto">
          <BlogHeader {...post} />
          {/* Content */}
          <Markdown className="grid grid-cols-1 [&>break-words] [&>prose] [&>h1]:text-3xl [&>h2]:text-xl [&>h3]:text-lg [&>p]:text-base [&>ul]:list-disc [&>ol]:list-decimal [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>whitespace-break-spaces] [&>code]:bg-night [&>code]:rounded [&>code]:px-1.5 [&>pre>code]:whitespace-break-spaces [&>pre>code]:break-words [&>code]:py-0.5 [&>pre]:bg-night [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-6 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:ml-4 [&>ol]:ml-4">
            {post.content}
          </Markdown>
        </article>

        {/* back to the top */}
        <div className="flex justify-center">
          <Link
            href="#top"
            className="text-sm text-slate-500 dark:text-slate-400 hover:underline"
            aria-label="Scroll up to the top of the page"
          >
            Back to Top
          </Link>
        </div>

        <Suspense fallback={<Shimmer width="full" height={100} />}>
          <RelatedPosts currentSlug={post.slug} posts={allPosts} />
        </Suspense>

        {/* TODO: Allow user to leave a comment */}
      </div>
    </PageWrapper>
  );
}
