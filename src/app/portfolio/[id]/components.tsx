'use client';

import { cn } from '@/lib/utils';
import Image from '@/components/image';
import { ReactNode } from 'react';
import { Icon, IconName } from '@ui/icon';
import { defaultImageSizes, generateBlurPlaceholder } from '@/lib/image';
import { Link } from '@ui/link';
import { caseStudies } from '@/data';
import { Button } from '@/components/ui/button';

interface CaseStudyLayoutProps {
  title: string;
  image: string;
  imageAlt: string;
  icons: IconName[];
  children: ReactNode;
  footerContent?: string;
  url?: string;
}

export function CaseStudyLayout({
  title,
  image,
  imageAlt,
  icons,
  children,
  footerContent,
  url,
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
            sizes={defaultImageSizes}
            priority
            quality={90}
            placeholder="blur"
            blurDataURL={generateBlurPlaceholder(1200, 800)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* Icons Overlay */}
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center gap-4 flex-wrap',
              'transition-opacity duration-300',
              'group-hover:opacity-90'
            )}
          >
            {icons.map((icon, idx) => (
              <Icon key={idx} name={icon} className="text-white/90" size={48} />
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
          {title}
        </h1>
      </header>

      {/* Content Section */}
      <section>{children}</section>

      <footer className="border-b-2 border-slate-400 dark:border-slate-100 pb-8">
        <Link
          href={url!}
          className="flex flex-col justify-center"
          noButtonWrapper
        >
          <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
            <h2 className="text-2xl font-bold mb-4">
              More about {title.split(':')[1]}
            </h2>
            <p>{footerContent}</p>
          </div>
          <Button
            variant="cta"
            size="lg"
            className="w-full md:w-1/2 lg:w-1/3 mx-auto"
          >
            <Icon name="ExternalLink" className="w-4 h-4" />
            <span>{'View Their Site'}</span>
          </Button>
        </Link>
      </footer>
    </article>
  );
}

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
