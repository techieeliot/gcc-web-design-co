import { Link } from '@ui/link';
import Image from 'next/image';
import { ValueProposition } from '../components';
import { generateBlurPlaceholder } from '@/lib/image';
import Markdown from 'markdown-to-jsx';
import DateDisplay from '@/components/DateDisplay';
import { getAllPosts } from './utils';
import { Post } from './types';

export const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="dark:text-white">Recent Posts</span>
      </h2>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col gap-6 lg:gap-3 group lg:items-center lg:justify-between xl:flex-col"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="relative aspect-[16/9] rounded-xl overflow-hidden h-fit w-full lg:h-full lg:w-fit"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                quality={75}
                placeholder="blur"
                blurDataURL={
                  post.blurDataUrl || generateBlurPlaceholder(800, 450)
                }
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
            <div>
              <header className="mb-2">
                <DateDisplay date={post.publishedAt} />
                <h3 className="text-xl font-semibold mt-1">
                  <Link
                    variant="inlineLink"
                    href={`/blog/${post.slug}`}
                    className="whitespace-break-spaces"
                  >
                    {post.title}
                  </Link>
                </h3>
              </header>
              <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
                {post.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export const FeaturedPost = () => {
  const featuredPost = getAllPosts().find((post) => post.featured);
  return (
    <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="dark:text-white">Featured Post</span>
      </h2>

      {featuredPost && (
        <article className="flex flex-col gap-4 group">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="relative aspect-[16/9] w-full rounded-xl overflow-hidden h-fit"
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
          <header className="mb-4">
            <DateDisplay date={featuredPost.publishedAt} />
            <Link href={`/blog/${featuredPost.slug}`} variant="inlineLink">
              <h3 className="text-xl font-semibold whitespace-break-spaces">
                {featuredPost.title}
              </h3>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {featuredPost.summary}
            </p>
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
            className="line-clamp-5 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg"
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

          <Link href={`/blog/${featuredPost.slug}`} variant="outline">
            Continue Reading
            <span className="sr-only">{featuredPost.title}</span>
          </Link>
        </article>
      )}
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
      <Link href="/blog/all" variant="outline">
        Explore More Articles
      </Link>
      <Link href="/services" variant="outline">
        Discover Our Services
      </Link>
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-azure/30 dark:from-sky/50 dark:to-azure/40 flex flex-col items-center justify-center text-center px-6">
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
