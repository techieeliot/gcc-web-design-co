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
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

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
    <section className="flex gap-8 justify-center" translate="no">
      <div className="flex flex-row md:flex-col flex-wrap items-center justify-center gap-4">
        <Image
          src={image}
          alt={`${name}'s Avatar`}
          width={100}
          height={100}
          className="rounded-full w-48 sm:w-unset"
          loading="lazy"
          priority={false}
          placeholder="blur"
          blurDataURL={image}
        />
        <div className="leading-8 flex flex-col align-center flex-wrap justify-center gap-2 w-full">
          <span
            className={cn(
              'font-title leading-[80%] tracking-widest',
              'flex items-center justify-center',
              'text-lg text-center lg:text-xl',
              'font-bold'
            )}
          >
            {name}
          </span>
          <div
            className={cn(
              'grid gap-2 sm:bg-red-900 [&>span]:flex [&>span]:items-center [&>span]:justify-center',
              '[&>span]:bg-muted [&>span]:rounded-full'
            )}
          >
            {social?.twitter && (
              <span className="">
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
}: Post) => (
  <header id="top">
    <div className="relative aspect-[16/9] overflow-hidden">
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
    <div className="flex flex-col gap-4 pt-6">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <DateDisplay date={publishedAt} />
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
