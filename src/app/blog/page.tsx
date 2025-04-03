import Link from 'next/link'
import Image from 'next/image'
import { FileText, Calendar, Tag, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { textStyles } from '@/lib/text-styles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | React Development Insights & Tutorials',
  description:
    'Stay up to date with the latest React ecosystem insights, tutorials, and best practices. Learn about Next.js, TypeScript, performance optimization, and more.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'React Development Blog | SanforDEV Consulting',
    description:
      'Stay up to date with the latest React ecosystem insights, tutorials, and best practices.',
    url: 'https://devsouth.us/blog',
    images: [
      {
        url: '/images/blog-social.webp',
        width: 1200,
        height: 630,
        alt: 'SanforDEV Consulting Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Development Blog | SanforDEV Consulting',
    description:
      'Stay up to date with the latest React ecosystem insights and tutorials.',
    images: ['/images/blog-social.webp'],
  },
}

// TODO: should come from a database or CMS
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
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
    featured: true,
  },
  {
    slug: 'tailwind-best-practices',
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
    featured: false,
  },
  {
    slug: 'framer-motion-animations',
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
    featured: false,
  },
  {
    slug: 'deploying-nextjs-netlify',
    title: 'Deploying Your Next.js App to Netlify: A Step-by-Step Guide',
    description:
      'Learn how to efficiently deploy your Next.js applications on Netlify with proper environment configuration and performance optimization.',
    date: 'February 10, 2025',
    author: 'Eliot Sanford',
    authorImage: '/authors/eliot.webp',
    category: 'DevOps',
    readTime: '7 min read',
    image: '/blog/netlify-guide.webp',
    tags: ['Next.js', 'Netlify', 'Deployment'],
    featured: false,
  },
]

export default function BlogPostsHubRoute() {
  // Get featured post for the hero section
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen pt-20 lg:pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-20 relative">
          {/* Hero content with icon */}
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-slate p-4 shadow-lg">
              <FileText className="w-8 h-8 text-powder" />
            </div>

            <h1 className={cn(textStyles.h1, 'mb-4')}>Blog & Insights</h1>

            <p className="text-xl text-slate-600 dark:text-powder/80 max-w-2xl mx-auto">
              Thoughts, stories, and ideas from the SanforDEV team on web
              development, design, and technology.
            </p>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure rounded-full">
                <Tag className="w-3 h-3" />
                Featured Article
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
              <div className="lg:col-span-6 overflow-hidden min-h-[300px] lg:min-h-[400px] relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-900/70 text-white rounded-md backdrop-blur-sm">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="group">
                  <h2
                    className={cn(
                      textStyles.h2,
                      'mb-4 group-hover:text-sky dark:group-hover:text-azure transition-colors'
                    )}
                  >
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className={cn(textStyles.body, 'mb-6 line-clamp-3')}>
                  {featuredPost.description}
                </p>
                {/* A cheeky note to put a smile on your face */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  P.S. Our donut fund is always overflowing 🍩.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
                    <Image
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {featuredPost.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {featuredPost.category}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="ml-auto inline-flex items-center gap-1 px-4 py-2 bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure rounded-lg text-sm font-medium hover:bg-sky/20 dark:hover:bg-azure/20 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-900/70 text-white rounded-md backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3
                    className={cn(
                      textStyles.h4,
                      'mb-2 group-hover:text-sky dark:group-hover:text-azure transition-colors line-clamp-2'
                    )}
                  >
                    {post.title}
                  </h3>
                </Link>
                <p className={cn(textStyles.body, 'mb-4 line-clamp-2 text-sm')}>
                  {post.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium text-slate-900 dark:text-white">
                    {post.author}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="ml-auto inline-flex items-center gap-1 text-sky dark:text-azure text-sm group/link"
                  >
                    Read
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
