'use client';

import { Icon } from '@ui/icon';
import { Link } from '@ui/link';
import { caseStudies } from '@/data';

export function CaseStudyNav({ currentId }: { currentId: string }) {
  const currentIndex = caseStudies.findIndex((study) => study.id === currentId);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4">
      <Link
        href="/portfolio"
        variant="outline"
        size="lg"
        className="mb-4 sm:mb-0"
        aria-label="Click here to go back to all case studies"
      >
        <Icon name="ArrowLeft" className="w-4 h-4" />
        <span>Back to All Case Studies</span>
      </Link>

      <div className="flex gap-3 flex-wrap">
        {prevCase && (
          <Link
            href={`/portfolio/${prevCase.id}`}
            variant="primary"
            size="lg"
            title={`Previous: ${prevCase.title}`}
            aria-label={`Click here to go back to the previous case study ${prevCase.title}`}
          >
            <Icon name="ArrowLeft" className="w-4 h-4" />
            <span className="hidden md:inline text-sm">
              {`${prevCase.title.split(':')[1]?.substring(0, 24) || prevCase.title.substring(0, 24)}...`}
            </span>
          </Link>
        )}

        {nextCase && (
          <Link
            href={`/portfolio/${nextCase.id}`}
            size="lg"
            variant="primary"
            className="text-sm"
            title={`Next: ${nextCase.title}`}
            aria-label={`Click here to go ahead to the next case study ${nextCase.title}`}
          >
            <span className="hidden md:inline text-sm">
              {`${nextCase.title.split(':')[1]?.substring(0, 24) || nextCase.title.substring(0, 24)}...`}
            </span>
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
