import Image from 'next/image';
import { getAllPosts } from './[slug]/utils';
import { Link } from '@/components/ui/link';
import { ValueProposition } from '../components';
import { generateBlurPlaceholder } from '@/lib/image';
import { Suspense } from 'react';
import { FeaturedPost, RecentPosts } from './components';
import { LoadingFallback } from '@/components/ui/loading-fallback';

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
              placeholder="blur"
              blurDataURL={defaultBlurDataURL}
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
          <div className="lg:col-span-8">
            <Suspense fallback={<LoadingFallback width="full" height="full" />}>
              <RecentPosts posts={recentPosts} />
              <section className="bg-white dark:bg-slate-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Enjoying Our Insights?</h2>
                <p className="mt-2 text-lg">
                  Our blog delves into the latest in web development,
                  cutting-edge design strategies, and all things tech. We strive
                  to offer you deep insights, practical tips, and real-life
                  stories from the digital world. If you find value in our
                  content, imagine what we could achieve by collaborating on
                  your next project.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 font-medium underline hover:text-blueberry active:text-azure active:scale-[0.98] dark:hover:text-powder dark:hover:no-underline dark:active:text-powder/80 transition-all h-12 px-6 py-3 text-base text-sky dark:text-azure hover:underline"
                >
                  Discover Our Services
                </Link>
                <div className="mt-8">
                  <ValueProposition />
                </div>
              </section>
            </Suspense>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
            <Suspense fallback={<LoadingFallback width="full" height="full" />}>
              <FeaturedPost featuredPost={featuredPost} />
            </Suspense>
          </aside>
        </section>
      </div>
    </div>
  );
}
