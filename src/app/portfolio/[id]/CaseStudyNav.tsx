"use client";

import { Link } from "@/components/ui/link";
import { caseStudies } from "@/data";
import { motion } from "@/lib/animations";
import { ArrowLeft, ArrowRight } from "@/lib/icons";

export function CaseStudyNav({ currentId }: { currentId: string }) {
  const currentIndex = caseStudies.findIndex((study) => study.id === currentId);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/portfolio"
        variant="outline"
        size="sm"
        className="mb-4 sm:mb-0"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Case Studies</span>
      </Link>

      <div className="flex gap-3">
        {prevCase && (
          <Link
            href={`/portfolio/${prevCase.id}`}
            variant="secondary"
            size="sm"
            title={`Previous: ${prevCase.title}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">
              {prevCase.title.length > 15
                ? `${prevCase.title.substring(0, 15)}...`
                : prevCase.title}
            </span>
          </Link>
        )}

        {nextCase && (
          <Link
            href={`/portfolio/${nextCase.id}`}
            variant="secondary"
            size="sm"
            title={`Next: ${nextCase.title}`}
          >
            <span className="hidden md:inline">
              {nextCase.title.length > 15
                ? `${nextCase.title.substring(0, 15)}...`
                : nextCase.title}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
