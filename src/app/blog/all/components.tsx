'use client';
import Image from '@/components/image';
import { Post } from '../types';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardMediaContent,
} from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import DateDisplay from '@/components/DateDisplay';
import { AuthorSection } from '../[slug]/components';
import { Pill } from '@/components/Pill';

export const BlogLibraryHero = () => {
  return (
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-sky/15 dark:from-sky/50 dark:to-indigo/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-blue-900 drop-shadow-lg">
            Blog Library
          </h1>
        </div>
      </div>
    </header>
  );
};

export const BlogLibraryCard = ({
  slug,
  image,
  title,
  publishedAt,
  author,
  summary,
  tags,
}: Post) => {
  return (
    <Card>
      <CardMediaContent className="h-48 rounded-tl-xl rounded-tr-xl overflow-hidden">
        <Link href={`/blog/${slug}`} noButtonWrapper>
          <CardMedia src={image} alt={title} />
        </Link>
      </CardMediaContent>
      <CardHeader className="flex flex-col gap-6">
        <Link
          key={slug}
          href={`/blog/${slug}`}
          className="h-fit w-full lg:h-full lg:w-fit whitespace-break-spaces break-words"
          variant="inlineLink"
          aria-label={`Read ${title}`}
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl">{title}</h2>
        </Link>
        <DateDisplay date={publishedAt} />
        <AuthorSection {...author} />
      </CardHeader>
      <CardContent className="flex flex-col gap-6 pb-6">
        <p>{summary}</p>
        <p className="flex flex-wrap gap-4">
          {tags!.map((tag, index) => (
            <Pill key={index}>{tag}</Pill>
          ))}
        </p>
      </CardContent>
    </Card>
  );
};
