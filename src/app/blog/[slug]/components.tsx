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
} from '@/components/ui/card';
import { defaultImageSizes, generateBlurPlaceholder } from '@/lib/image';
import DateDisplay from '@/components/DateDisplay';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { ShareButton } from '@/components/share-button';

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

export const AuthorSection = ({ name, image, social }: Author) => {
  if (!name) return null;

  return (
    <section className="flex gap-8" translate="no">
      <div className="flex flex-wrap items-center gap-4">
        <Image
          src={image}
          alt={`${name}'s Avatar`}
          width={80}
          height={80}
          className="rounded-full"
          loading="lazy"
          priority={false}
          placeholder="blur"
          blurDataURL={image}
        />
        <div className="leading-8">
          <span
            className={cn(
              'font-title leading-[80%] tracking-widest',
              'flex items-end',
              'text-base sm:text-lg lg:text-xl',
              'font-bold'
            )}
          >
            {name}
          </span>
          <div className="flex items-center gap-1">
            {social?.twitter && (
              <span className="bg-muted rounded-full">
                <Link
                  href={`https://twitter.com/${social.twitter}`}
                  aria-label={`${name} on X`}
                  rel="me"
                  className="hover:border-b hover:border-current shadow-none"
                  variant="icon"
                  size="icon"
                >
                  <Icon name="Twitter" />
                </Link>
              </span>
            )}
            {social?.github && (
              <span className="bg-muted rounded-full">
                <Link
                  href={`https://github.com/${social.github}`}
                  aria-label={`${name} on GitHub`}
                  rel="me"
                  className="hover:border-b hover:border-current shadow-none"
                  variant="icon"
                  size="icon"
                >
                  <Icon name="Github" />
                </Link>
              </span>
            )}
            {social?.linkedin && (
              <span className="bg-muted rounded-full">
                <Link
                  href={`https://linkedin.com/in/${social.linkedin}`}
                  aria-label={`${name} on LinkedIn`}
                  rel="me"
                  className="hover:border-b hover:border-current shadow-none"
                  variant="icon"
                  size="icon"
                >
                  <Icon name="Linkedin" />
                </Link>
              </span>
            )}
            {social?.website && (
              <span className="bg-muted rounded-full">
                <Link
                  href={social.website}
                  aria-label={`${name}'s homepage`}
                  rel="me"
                  className="hover:border-b hover:border-current shadow-none"
                  variant="icon"
                  size="icon"
                >
                  <Icon name="Globe" />
                </Link>
              </span>
            )}
          </div>
        </div>
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
  slug,
}: Post) => (
  <header id="top" className="flex flex-col items-center gap-2 sm:gap-4">
    <div className="relative aspect-square sm:aspect-[16/9] w-full rounded-xl h-fit overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes={defaultImageSizes}
        className="object-cover rounded-xl"
        priority
        quality={90}
        placeholder="blur"
        blurDataURL={generateBlurPlaceholder(1200, 630)}
      />
    </div>
    <h1 className="text-2xl md:text-5xl font-bold mb-4">{title}</h1>
    <div className="flex flex-col gap-6 text-slate-600 dark:text-slate-400">
      <div className="flex items-baseline md:gap-4">
        <DateDisplay date={publishedAt} />
        <ShareButton
          title={title}
          url={`https://sanfordev.com/blog/${slug}`}
          description={summary}
          className="ml-auto md:ml-0"
        />
      </div>
      <AuthorSection {...author} />
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
