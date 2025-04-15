import { Suspense } from 'react';
import { getAllPosts } from './utils';
import {
  BlogEngagementSection,
  BlogHero,
  FeaturedPost,
  RecentPosts,
} from './components';
import PageWrapper from '@/components/PageWrapper';
import { Shimmer } from '@ui/shimmer';
import { Post } from './types';

export default async function Blog() {
  // Use async/await to properly handle data fetching
  const posts = await getAllPosts();
  const featuredPost = getAllPosts().find((post) => post.featured) as Post;
  const recentPosts = posts
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    })
    .filter((post) => post.slug !== featuredPost?.slug)
    .slice(0, 5);

  return (
    <PageWrapper>
      <Suspense fallback={<Shimmer width="full" height={320} />}>
        <BlogHero />
      </Suspense>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8">
          <Suspense
            fallback={
              <div className="space-y-4">
                <Shimmer width="full" height={200} />
                <Shimmer width="full" height={200} />
              </div>
            }
          >
            <FeaturedPost featuredPost={featuredPost} />
            <BlogEngagementSection />
          </Suspense>
        </div>

        <aside className="lg:col-span-4 space-y-6 lg:top-24 self-start">
          <Suspense fallback={<Shimmer width="full" height={400} />}>
            <RecentPosts posts={recentPosts} />
          </Suspense>
        </aside>
      </section>
    </PageWrapper>
  );
}
