"use client";

import { fadeInAnimation, iconVariants, motion } from "@/lib/animations";
import { ArrowUp } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CaseStudyProps {
  id?: string;
  title: string;
  image: string;
  imageAlt: string;
  icons: React.ReactNode[];
  children: React.ReactNode;
}

export const CaseStudyLayout = ({
  id,
  title,
  image,
  imageAlt,
  icons,
  children,
}: CaseStudyProps) => {
  return (
    <motion.article
      id={id}
      initial="hidden"
      animate="visible"
      variants={fadeInAnimation}
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 prose lg:prose-lg p-4 sm:p-6 lg:p-8 mb-8 lg:mb-16 rounded-xl"
    >
      <motion.div
        className={cn(
          "relative rounded-lg overflow-hidden",
          "h-48 sm:h-56 lg:h-64",
          "mb-6 sm:mb-8 lg:mb-10",
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {Array.isArray(icons)
            ? icons.map((icon, index) => (
                <motion.div key={index} custom={index} variants={iconVariants}>
                  {icon}
                </motion.div>
              ))
            : icons}
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="space-y-6 sm:space-y-8 lg:space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {children}
      </motion.div>

      <div className="fixed right-4 lg:right-8 bottom-4 lg:bottom-8">
        <motion.button
          className={cn(
            "rounded-full p-3 shadow-lg",
            "bg-sky/90 dark:bg-azure/90 text-white",
            "hover:bg-sky dark:hover:bg-azure",
            "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
            "focus:ring-sky dark:focus:ring-azure",
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.article>
  );
};
