"use client";

import { Icon } from "@/components/ui/icon";
import { Link } from "@/components/ui/link";
import { caseStudies } from "@/data";
import { motion } from "@/lib/animations";

export function CaseStudyNav({ currentId }: { currentId: string }) {
  const currentIndex = caseStudies.findIndex((study) => study.id === currentId);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/portfolio"
        variant="outline"
        size="lg"
        className="mb-4 sm:mb-0"
      >
        <Icon name="ArrowLeft" className="w-4 h-4" />
        <span>Back to All Case Studies</span>
      </Link>

      <div className="flex gap-3 flex-wrap">
        {prevCase && (
          <Link
            href={`/portfolio/${prevCase.id}`}
            variant="secondary"
            size="lg"
            title={`Previous: ${prevCase.title}`}
          >
            <Icon name="ArrowLeft" className="w-4 h-4" />
            <span className="hidden md:inline text-sm">
              {`${prevCase.title.split(":")[1].substring(0, 24)}...`}
            </span>
          </Link>
        )}

        {nextCase && (
          <Link
            href={`/portfolio/${nextCase.id}`}
            variant="secondary"
            size="lg"
            className="text-sm"
            title={`Next: ${nextCase.title}`}
          >
            <span className="hidden md:inline text-sm">
              {`${nextCase.title.split(":")[1].substring(0, 24)}...`}
            </span>
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
