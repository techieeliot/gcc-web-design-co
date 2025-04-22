import Image from 'next/image';
import { ValueProposition } from '../components';
import { generateBlurPlaceholder } from '@/lib/image';
import Markdown from 'markdown-to-jsx';
import DateDisplay from '@/components/DateDisplay';
import { Post } from './types';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardMediaContent,
  CardTitle,
} from 'components/ui/card';
import { Link } from '@/components/ui/link';
import NextLink from 'next/link';

export const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="dark:text-white">Recent Posts</span>
      </h2>

      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.slug} className="group">
            <CardMediaContent className="aspect-[16/9] w-full overflow-hidden h-fit rounded-tl-xl rounded-tr-xl">
              <NextLink
                href={`/blog/${post.slug}`}
                aria-label={`Go to ${post.title}`}
              >
                <CardMedia
                  src={post.image}
                  alt={post.title}
                  quality={75}
                  placeholder="blur"
                  blurDataURL={
                    post.blurDataUrl || generateBlurPlaceholder(800, 450)
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </NextLink>
            </CardMediaContent>
            <CardHeader className="mb-2">
              <DateDisplay date={post.publishedAt} />
              <CardTitle>
                <h3 className="text-xl font-semibold mt-1">
                  <Link
                    variant="inlineLink"
                    href={`/blog/${post.slug}`}
                    className="whitespace-break-spaces"
                    aria-label={`Go to ${post.title}`}
                  >
                    {post.title}
                  </Link>
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="line-clamp-3">{post.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/blog/all"
          variant="outline"
          aria-label="Go to our blog library page"
        >
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export const FeaturedPost = ({ featuredPost }: { featuredPost: Post }) => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="dark:text-white">Featured Post</span>
      </h2>

      <article className="flex flex-col gap-4 group">
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="relative aspect-[16/9] w-full rounded-xl overflow-hidden h-fit"
          aria-label={`Go to our featured blog article ${featuredPost.title}`}
        >
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={800}
            height={450}
            quality={75}
            placeholder="blur"
            blurDataURL={featuredPost.blurDataUrl}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition"
            loading="lazy"
          />
        </Link>
        <header className="flex flex-col gap-6">
          <DateDisplay date={featuredPost.publishedAt} />
          <Link
            href={`/blog/${featuredPost.slug}`}
            variant="inlineLink"
            aria-label={`Go to ${featuredPost.title}`}
          >
            <h3 className="text-xl font-semibold whitespace-break-spaces">
              {featuredPost.title}
            </h3>
          </Link>
          <Card variant="callout">
            <CardHeader>
              <p>{featuredPost.summary}</p>
            </CardHeader>
          </Card>
        </header>
        <Markdown
          // place gaps between block elements
          options={{
            overrides: {
              h2: {
                component: ({ children }) => (
                  <h2 className="text-xl font-semibold mb-4">{children}</h2>
                ),
              },
              h3: {
                component: ({ children }) => (
                  <h3 className="text-lg font-semibold mb-4">{children}</h3>
                ),
              },
              p: {
                component: ({ children }) => (
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {children}
                  </p>
                ),
              },
            },
          }}
          className="line-clamp-5 "
        >
          {
            // skip the title that's already displayed in the header
            featuredPost.content
              .split('\n')
              .slice(1)
              .join('\n')
              .replace(/^\s*#\s+/, '')
              .replace(featuredPost.title, '')
          }
        </Markdown>
        <div>
          <Link
            href={`/blog/${featuredPost.slug}`}
            variant="cta"
            aria-label={`Like this reading excerpt? Go to the article ontinue reading ${featuredPost.title}`}
          >
            Continue Reading
            <span className="sr-only">{featuredPost.title}</span>
          </Link>
        </div>
      </article>
    </section>
  );
};

export const BlogEngagementSection = () => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-xl p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Enjoying Our Insights?</h2>
      <p className="text-lg">
        Our blog delves into the latest in web development, cutting-edge design
        strategies, and all things tech. We strive to offer you deep insights,
        practical tips, and real-life stories from the digital world. If you
        find value in our content, imagine what we could achieve by
        collaborating on your next project.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/blog/all"
          variant="primary"
          aria-label="Click here to explore more articles"
        >
          Explore More Articles
        </Link>
        <Link
          href="/services"
          variant="outline"
          aria-label="Click here to go to our services page to discover what we do"
        >
          Discover Our Services
        </Link>
      </div>
      <div className="mt-8">
        <ValueProposition />
      </div>
    </section>
  );
};

const defaultBlurDataURL = generateBlurPlaceholder(800, 450);

export const BlogHero = ({}) => {
  return (
    <header>
      <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/pic11.webp"
          alt="Modern development workspace"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
          priority
          quality={90}
          className="object-cover"
          placeholder="blur"
          blurDataURL={defaultBlurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-indigo/30 dark:from-sky/50 dark:to-indigo/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            Our Blog
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto text-white drop-shadow-lg">
            Insights, tips, and stories from the world of web development and
            technology. Join us as we explore the latest trends and innovations
            in the digital landscape.
          </p>
        </div>
      </div>
    </header>
  );
};
