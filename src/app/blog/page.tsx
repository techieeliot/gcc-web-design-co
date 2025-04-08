import { Suspense } from 'react';
import { getAllPosts } from './[slug]/utils';
import {
  BlogEngagementSection,
  BlogHero,
  FeaturedPost,
  RecentPosts,
} from './components';
import { LoadingFallback } from '@/components/ui/loading-fallback';

export default async function Blog() {
  // Use async/await to properly handle data fetching
  const posts = await getAllPosts();
  const [featuredPost, ...recentPosts] = posts;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 lg:py-10 flex flex-col gap-12">
        <Suspense fallback={<LoadingFallback width="full" height={320} />}>
          <BlogHero />
        </Suspense>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="space-y-4">
                  <LoadingFallback width="full" height={200} />
                  <LoadingFallback width="full" height={200} />
                </div>
              }
            >
              <FeaturedPost featuredPost={featuredPost} />
              <BlogEngagementSection />
            </Suspense>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
            <Suspense fallback={<LoadingFallback width="full" height={400} />}>
              <RecentPosts posts={recentPosts} />
            </Suspense>
          </aside>
        </section>
      </div>
    </div>
  );
}
