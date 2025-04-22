'use client';

import { Link } from '@ui/link';
import { Author, Post } from '../types';
import Image from '@/components/image';
import {
  Card,
  CardHeader,
  CardMedia,
  CardMediaContent,
  CardTitle,
} from 'components/ui/card';
import { defaultImageSizes, generateBlurPlaceholder } from '@/lib/image';
import DateDisplay from '@/components/DateDisplay';

interface RelatedPostsProps {
  currentSlug: string;
  posts: Post[];
}

export function RelatedPosts({ currentSlug, posts }: RelatedPostsProps) {
  const relatedPosts = posts.filter((p) => p.slug !== currentSlug).slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <aside className="p-6 border-t-2">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            variant="inlineLink"
            className="group rounded-lg transition-all hover:-translate-y-1 flex flex-wrap gap-3 h-fit"
            aria-label={`Read ${post.title}`}
            title={post.title}
          >
            <Card>
              <CardMediaContent className="aspect-[16/9] w-full overflow-hidden h-fit rounded-tl-xl rounded-tr-xl">
                <CardMedia
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  priority={false}
                  placeholder="blur"
                  blurDataURL={
                    post.blurDataUrl || generateBlurPlaceholder(800, 450)
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </CardMediaContent>
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-semibold group-hover:text-sky transition-colors text-ellipsis whitespace-nowrap overflow-hidden">
                    {post.title}
                  </h3>
                </CardTitle>
                <p className="mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
                  {post.summary}
                </p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export const AuthorSection = (author: Author) => {
  if (!author) return null;
  const { name, image } = author;
  return (
    <section className="flex items-center gap-4">
      <Image
        src={image}
        alt="Author's Avatar"
        width={80}
        height={80}
        className="rounded-full"
        loading="lazy"
        priority={false}
        placeholder="blur"
        blurDataURL={image}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
      />
      <div>
        <h3 className="text-lg font-semibold">Author</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{name}</p>
      </div>
    </section>
  );
};

export const BlogHeader = ({
  image,
  title,
  publishedAt,
  author,
  summary,
}: Post) => (
  <header id="top" className="flex flex-col gap-4">
    <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes={defaultImageSizes}
        className="object-cover"
        priority
        quality={90}
        placeholder="blur"
        blurDataURL={generateBlurPlaceholder(1200, 630)}
      />
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
    <div className="flex flex-col gap-6 text-slate-600 dark:text-slate-400">
      <DateDisplay date={publishedAt} />
      <p className="text-lg ">By {author.name}</p>
      <Card className="border-l-8 border-l-sky">
        <CardHeader>
          <p className="text-xl">
            <strong className="text-2xl">TLDR;</strong> {summary}
          </p>
        </CardHeader>
      </Card>
    </div>
  </header>
);
