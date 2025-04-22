import { Link } from '@ui/link';
import { Author, Post } from '../types';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardMediaContent,
  CardTitle,
} from 'components/ui/card';
import { generateBlurPlaceholder } from '@/lib/image';

interface RelatedPostsProps {
  currentSlug: string;
  posts: Post[];
}

export function RelatedPosts({ currentSlug, posts }: RelatedPostsProps) {
  const relatedPosts = posts.filter((p) => p.slug !== currentSlug).slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <aside className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 border-t-2">
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
