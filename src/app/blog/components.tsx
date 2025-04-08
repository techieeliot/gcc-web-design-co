import { Link } from '@/components/ui/link';
import Image from 'next/image';
import { Post } from './[slug]/utils';

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
            className="flex flex-col md:flex-row gap-6 group"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="relative aspect-[16/9] w-full md:w-1/3 rounded-xl overflow-hidden h-fit"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                quality={75}
                placeholder="blur"
                blurDataURL={post.blurDataUrl}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition"
                loading="lazy"
              />
            </Link>
            <div>
              <header className="mb-2">
                <time className="text-sm text-slate-500 dark:text-slate-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
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

export const FeaturedPost = ({ featuredPost }: { featuredPost: Post }) => {
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
            <Link href={`/blog/${featuredPost.slug}`} variant="inlineLink">
              <h3 className="text-xl font-semibold whitespace-break-spaces">
                {featuredPost.title}
              </h3>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {featuredPost.summary}
            </p>
          </header>
          <Link href={`/blog/${featuredPost.slug}`} variant="outline">
            Continue Reading
            <span className="sr-only">{featuredPost.title}</span>
          </Link>
        </article>
      )}
    </section>
  );
};
