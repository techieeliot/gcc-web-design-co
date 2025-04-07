"use client";

import { cn } from "@/lib/utils";
import { motion } from "@/lib/animations";
import Image from "next/image";
import { ReactNode } from "react";
import { Icon, IconName } from "@/components/ui/icon";

interface CaseStudyLayoutProps {
  title: string;
  image: string;
  imageAlt: string;
  icons: IconName[];
  children: ReactNode;
}

export function CaseStudyLayout({
  title,
  image,
  imageAlt,
  icons,
  children,
}: CaseStudyLayoutProps) {
  return (
    <article className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <header className="relative mb-12">
        <div className="h-[300px] sm:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* Icons Overlay */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-4 flex-wrap",
              "transition-opacity duration-300",
              "group-hover:opacity-90",
            )}
          >
            {icons.map((icon, idx) => (
              <Icon key={idx} name={icon} className="text-white/90" size={48} />
            ))}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6"
        >
          {title}
        </motion.h1>
      </header>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={cn(
          "prose prose-slate dark:prose-invert max-w-none",
          "prose-headings:text-slate-900 dark:prose-headings:text-white",
          "prose-p:text-slate-600 dark:prose-p:text-slate-300",
          "prose-a:text-sky dark:prose-a:text-azure",
          "prose-strong:text-slate-900 dark:prose-strong:text-white",
        )}
      >
        {children}
      </motion.section>
    </article>
  );
}
