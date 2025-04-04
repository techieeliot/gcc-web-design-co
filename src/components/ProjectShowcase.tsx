"use client";

import { motion } from "@/lib/animations";
import { componentStyles } from "@/lib/styles";
import { ExternalLink } from "@/lib/icons";
import { textStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectShowcase() {
  return (
    <motion.div
      className={cn(componentStyles.card, "p-6 rounded-xl")}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-4">
        <h3 className={cn(textStyles.h3, "mb-2")}>Our Crafted Stories</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Discover projects where care meets code—a fusion of React expertise
          and a down-to-earth approach.
        </p>
      </div>

      <div className="space-y-6">
        <ProjectCard
          title="Fourth Party"
          description="An innovative platform designed to simplify mediation with clarity and purpose."
          image="/images/pic03.webp"
          tags={["React", "Modern UI", "CRM"]}
          link="/portfolio/fourth-party"
        />

        <ProjectCard
          title="Room in the Inn Memphis"
          description="A complete redesign crafted to uplift community impact through empathy and user-first design."
          image="/images/pic02.webp"
          tags={["CMS", "JavaScript"]}
          link="/portfolio/room-in-the-inn-memphis"
        />
      </div>
    </motion.div>
  );
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800"
    >
      <div className="relative h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky/30 to-azure/20 dark:from-sky/40 dark:to-azure/30" />
      </div>

      <div className="p-4">
        <h4 className={cn(textStyles.h4, "mb-1")}>{title}</h4>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={link}
          className="text-sky dark:text-azure flex items-center gap-1 text-sm font-medium"
        >
          See More
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
};
