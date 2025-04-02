import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { textStyles } from '@/lib/text-styles'

// Components for MDX
import { Callout } from '@/components/mdx/callout'
import { CodeBlock } from '@/components/mdx/code-block'
import { Metadata } from 'next'
import { Link } from '@/components/ui/link'

// MDX components mapping
// Interface for the components object used by MDXRemote
interface MDXComponents {
  [key: string]: React.ComponentType<any>
}

// Component-specific prop interfaces
interface MDXHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

interface MDXParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
}

interface MDXLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

interface MDXListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  children?: React.ReactNode
}

interface MDXListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
}

interface MDXBlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children?: React.ReactNode
}

const components: MDXComponents = {
  Callout,
  pre: CodeBlock,
  h1: (props: MDXHeadingProps) => (
    <h1 className={cn(textStyles.h1, 'mb-6 mt-12')} {...props} />
  ),
  h2: (props: MDXHeadingProps) => (
    <h2 className={cn(textStyles.h2, 'mb-4 mt-10')} {...props} />
  ),
  h3: (props: MDXHeadingProps) => (
    <h3 className={cn(textStyles.h3, 'mb-3 mt-8')} {...props} />
  ),
  h4: (props: MDXHeadingProps) => (
    <h4 className={cn(textStyles.h4, 'mb-2 mt-6')} {...props} />
  ),
  p: (props: MDXParagraphProps) => (
    <p className={cn(textStyles.body, 'mb-4')} {...props} />
  ),
  a: (props: MDXLinkProps) => (
    <a
      className="text-sky hover:text-sky/80 dark:text-azure dark:hover:text-azure/80 underline underline-offset-2"
      {...props}
    />
  ),
  ul: (props: MDXListProps) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: MDXListProps) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: MDXListItemProps) => (
    <li className={textStyles.body} {...props} />
  ),
  blockquote: (props: MDXBlockquoteProps) => (
    <blockquote
      className="border-l-4 border-sky dark:border-azure pl-4 italic my-6"
      {...props}
    />
  ),
}

// TODO: metadata should come from CMS
const blogPosts = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js: A Practical Guide',
    description:
      'Learn how to set up and structure a Next.js project from scratch, with best practices for file organization, routing, and performance.',
    date: 'March 28, 2025',
    author: 'Eliot Sanford',
    authorImage: '/authors/eliot.webp',
    category: 'Development',
    readTime: '8 min read',
    image: '/blog/nextjs-guide.webp',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  'tailwind-best-practices': {
    title: 'Tailwind CSS Best Practices for Enterprise Projects',
    description:
      'Discover how to effectively scale Tailwind CSS in large projects while maintaining code quality, performance, and team collaboration.',
    date: 'March 15, 2025',
    author: 'Eliot Sanford',
    authorImage: '/authors/eliot.webp',
    category: 'Design',
    readTime: '6 min read',
    image: '/blog/tailwind-best-practices.webp',
    tags: ['Tailwind CSS', 'CSS', 'Design Systems'],
  },
  'framer-motion-animations': {
    title: 'Creating Fluid Animations with Framer Motion',
    description:
      'Explore the power of Framer Motion for creating smooth, physics-based animations in React applications with minimal code.',
    date: 'February 22, 2025',
    author: 'Eliot Sanford',
    authorImage: '/authors/eliot.webp',
    category: 'Design',
    readTime: '5 min read',
    image: '/blog/framer-motion.webp',
    tags: ['Framer Motion', 'Animation', 'React'],
  },
  'deploying-nextjs-netlify': {
    title: 'Deploying Your Next.js App to Netlify: A Step-by-Step Guide',
    description:
      'Learn how to efficiently deploy your Next.js applications on Netlify with proper environment configuration and performance optimization.',
    date: 'February 10, 2025',
    author: 'Eliot Sanford',
    authorImage: '/authors/eliot.webp',
    category: 'DevOps',
    readTime: '7 min read',
    image: '/blog/netlify-ship.webp',
    tags: ['Next.js', 'Netlify', 'Deployment'],
  },
}

export async function generateStaticParams() {
  // TODO: this should come from CMS or database
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

async function getPostBySlug(slug: string) {
  // TODO: fetch this from CMS or database
  const postData = blogPosts[slug as keyof typeof blogPosts]

  if (!postData) {
    return null
  }

  // Read the MDX file
  const mdxDir = path.join(process.cwd(), 'src/content/blog')
  let fileContent = ''
  try {
    fileContent = fs.readFileSync(path.join(mdxDir, `${slug}.mdx`), 'utf8')
  } catch (error) {
    console.error(`Error reading MDX file for ${slug}:`, error)
    return null
  }

  return {
    ...postData,
    content: fileContent,
  }
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    authors: [
      {
        name: post.author,
        url: 'https://www.techieeliot.com',
      },
    ],
    category: post.category,
    keywords: [
      ...post.tags,
      'software development',
      'react',
      'web development',
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://devsouth.us/blog/${params.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPostRoute({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="ml-16 mb-8">
          <Link
            href="/blog"
            variant="outline"
            className="inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure rounded-full">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className={cn(textStyles.h1, 'mb-6')}>{post.title}</h1>

          <p
            className={cn(
              textStyles.body,
              'text-xl mb-8 text-slate-600 dark:text-powder/80'
            )}
          >
            {post.description}
          </p>

          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                {post.author}
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <div className="ml-auto">
              <button className="inline-flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-w-16 aspect-h-9 w-full relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </article>
        </div>
      </div>
    </div>
  )
}
