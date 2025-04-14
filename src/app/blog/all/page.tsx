import { getAllPosts } from '../utils';
import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { Link } from '@ui/link';
import { client } from '@/sanity/client';
import { SanityDocument } from 'next-sanity';
import DateDisplay from '@/components/DateDisplay';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPost() {
  const allPosts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  return (
    <PageWrapper>
      <header>
        <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pic12.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-indigo/30 dark:from-sky/50 dark:to-indigo/40 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-blue-900 drop-shadow-lg">
              Blog Library
            </h1>
          </div>
        </div>
      </header>
      <section className="flex flex-col gap-8">
        <p className="text-lg">
          Explore our collection of blog posts, tutorials, and articles.
        </p>
        <ul className="flex flex-col gap-8">
          {allPosts.map((post: SanityDocument) => (
            <li key={post.id}>
              <div>
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug.current}`}
                  className="h-fit w-full lg:h-full lg:w-fit whitespace-break-spaces break-words"
                  variant="inlineLink"
                >
                  <h2>{post.title}</h2>
                </Link>
                {/* 
                <DateDisplay date={post._createdAt} />
               */}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}
