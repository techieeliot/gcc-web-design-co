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
      <Markdown
        className="grid grid-cols-1 gap-6 [&>break-words] [&>prose] [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:text-lg [&>ul]:list-disc [&>ol]:list-decimal [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>whitespace-break-spaces] [&>code]:bg-slate-200 [&>code]:rounded [&>code]:px-1.5 [&>pre>code]:whitespace-break-spaces [&>pre>code]:break-words [&>code]:py-0.5 [&>pre]:bg-slate-200 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-6 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:ml-4 [&>ol]:ml-4"
        options={markdownOptions}
      >
        {post.content}
      </Markdown>
    </article>
  );
}

// Custom markdown options with specific styling
export const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: ({ children, ...props }: any) => (
        <h1 className="text-3xl font-bold mb-6 mt-8" {...props}>
          {children}
        </h1>
      ),
    },
    h2: {
      component: ({ children, ...props }: any) => (
        <h2 className="text-2xl font-semibold mb-4 mt-6" {...props}>
          {children}
        </h2>
      ),
    },
    h3: {
      component: ({ children, ...props }: any) => (
        <h3 className="text-xl font-semibold mb-3 mt-4" {...props}>
          {children}
        </h3>
      ),
    },
    p: {
      component: ({ children, ...props }: any) => (
        <p
          className="mb-4 text-lg leading-relaxed text-slate-800 dark:text-slate-200"
          {...props}
        >
          {children}
        </p>
      ),
    },
    a: {
      component: ({ children, ...props }: any) => (
        <Link
          variant="inlineLink"
          className="text-sky hover:text-sky/80 dark:text-azure dark:hover:text-azure/80"
          {...props}
        >
          {children}
        </Link>
      ),
    },
    blockquote: {
      component: ({ children, ...props }: any) => (
        <blockquote
          className="border-l-4 border-sky dark:border-azure pl-4 italic my-6 text-slate-700 dark:text-slate-300"
          {...props}
        >
          {children}
        </blockquote>
      ),
    },
    code: {
      component: ({ children, className, ...props }: any) => (
        <code
          className={cn(
            "bg-slate-200 dark:bg-slate-800 rounded px-1.5 py-0.5 text-sm font-mono",
            className,
          )}
          {...props}
        >
          {children}
        </code>
      ),
    },
    pre: {
      component: ({ children, ...props }: any) => (
        <pre
          className="bg-slate-200 dark:bg-slate-800 rounded-lg p-4 my-6 overflow-x-auto"
          {...props}
        >
          {children}
        </pre>
      ),
    },
    ul: {
      component: ({ children, ...props }: any) => (
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props}>
          {children}
        </ul>
      ),
    },
    ol: {
      component: ({ children, ...props }: any) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props}>
          {children}
        </ol>
      ),
    },
    img: {
      component: ({ alt, src, ...props }: any) => (
        <div className="my-6">
          <Image
            src={src}
            alt={alt || ""}
            width={800}
            height={400}
            className="rounded-lg"
            {...props}
          />
        </div>
      ),
    },
  },
};
