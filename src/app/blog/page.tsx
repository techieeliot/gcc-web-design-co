import Image from 'next/image';
import { getAllPosts } from './[slug]/utils';
import { Link } from '@/components/ui/link';
import { ShowcaseSection } from '../components';
import { generateBlurPlaceholder } from '@/lib/image';

export default function Blog() {
  const posts = getAllPosts();
  const [featuredPost, ...recentPosts] = posts;

  // Generate a default blur placeholder
  const defaultBlurDataURL = generateBlurPlaceholder(800, 450);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 lg:py-10 flex flex-col gap-12">
        <header>
          {/* Hero Image Section */}
          <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/pic09.webp"
              alt="Modern development workspace"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-azure/30 dark:from-sky/50 dark:to-azure/40 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                Our Blog
              </h1>
              <p className="text-sm md:text-lg max-w-2xl mx-auto text-white drop-shadow-lg">
                Insights, tips, and stories from the world of web development
                and technology. Join us as we explore the latest trends and
                innovations in the digital landscape.
              </p>
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content - Recent Posts */}
          <div className="lg:col-span-8">
            <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="dark:text-white">Recent Posts</span>
              </h2>

              <div className="space-y-8">
                {recentPosts.map((post) => (
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
                          {new Date(post.publishedAt).toLocaleDateString(
                            'en-US',
                            {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )}
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
          </div>

          {/* Sidebar - Featured Post */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
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
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      variant="inlineLink"
                    >
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
          </aside>
        </section>
        <ShowcaseSection />
      </div>
    </div>
  );
}
