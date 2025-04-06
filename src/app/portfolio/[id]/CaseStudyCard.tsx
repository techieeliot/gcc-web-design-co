"use client";

import {
  fadeInOutVariants,
  motion,
  useAnimation,
  useInView,
} from "@/lib/animations";
import { lucideIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  iconNames: string[];
  index?: number;
}

export const CaseStudyCard = ({
  id,
  title,
  description,
  image,
  imageAlt,
  iconNames,
  index = 0,
}: CaseStudyCardProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    // Initial pause to let page load
    const initialDelay = 0.3 + index * 0.15;

    // Animate when in view, with a smooth delay
    if (isInView) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, initialDelay * 1000);

      return () => clearTimeout(timer);
    }

    // Fallback animation
    const fallbackTimer = setTimeout(
      () => {
        controls.start("visible");
      },
      1200 + index * 150,
    );

    return () => clearTimeout(fallbackTimer);
  }, [isInView, controls, index]);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={fadeInOutVariants}
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group relative overflow-hidden rounded-xl will-change-transform"
    >
      <Link href={`/portfolio/${id}`} className="block h-full">
        <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3} // Prioritize loading first 3 images
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4">
            {iconNames.map((iconName, idx) => {
              const Icon = lucideIcons[
                iconName as keyof typeof lucideIcons
              ] as React.ComponentType<LucideProps>;
              return Icon ? (
                <Icon
                  key={idx}
                  className="w-8 h-8 text-white"
                  strokeWidth={1.5}
                />
              ) : null;
            })}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-sky dark:group-hover:text-azure transition-colors duration-300">
            {title}
          </h2>
          <p className="text-base leading-relaxed line-clamp-2 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
