import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "./utils";
import { Metadata } from "next";
import Image from "next/image";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist",
    };
  }

  return {
    title: `${post.title} | SanforDEV Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: any) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-8 align-center">
      <div className="flex items-center justify-between">
        <Link href="/blog" variant="standaloneLink">
          <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
      {/* Hero Section */}
      <div>
        <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
          <time
            dateTime={post.publishedAt}
            className="text-sm text-slate-500 dark:text-slate-400"
          >
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <p>{post.summary}</p>
        </div>
      </div>

      {/* Content */}
      <Markdown className="grid grid-cols-1 gap-6 [&>break-words] [&>prose] [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:text-lg [&>ul]:list-disc [&>ol]:list-decimal [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>whitespace-break-spaces] [&>code]:bg-slate-200 [&>code]:rounded [&>code]:px-1.5 [&>pre>code]:whitespace-break-spaces [&>pre>code]:break-words [&>code]:py-0.5 [&>pre]:bg-slate-200 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-6 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:ml-4 [&>ol]:ml-4">
        {post.content}
      </Markdown>
    </article>
  );
}
