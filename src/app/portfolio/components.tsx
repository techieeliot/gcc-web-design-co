'use client';

import { Icon, IconName } from '@ui/icon';
import { cn } from '@/lib/utils';
import { Suspense, useRef } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardMediaContent,
} from '@/components/ui/card';
import { Shimmer } from '@/components/ui/shimmer';
import Image from '@/components/image';
import { generateBlurPlaceholder } from '@/lib/image';
import { Link } from '@/components/ui/link';

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icons: IconName[];
  features: Array<{
    icon: IconName; // Update this type
    title: string;
    description: string;
  }>;
  stats: Array<{
    icon: IconName; // Update this type
    value: string;
    label: string;
  }>;
  index?: number;
}

export const CaseStudyCard = ({
  id,
  title,
  description,
  image,
  imageAlt,
  icons,
  stats,
  index = 0,
}: CaseStudyCardProps) => {
  const ref = useRef(null);

  return (
    <Link
      href={`/portfolio/${id}`}
      aria-label={`Click on this image to find out more about ${title}`}
      title={`Click on this image to find out more about ${title}`}
      noButtonWrapper
    >
      <Card
        ref={ref}
        background="mode"
        className={cn('group relative flex flex-col', 'overflow-hidden')}
      >
        <CardMediaContent className="h-48 sm:h-52 overflow-hidden">
          {/* Image Section */}
          <CardMedia
            src={image}
            alt={imageAlt}
            className="transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
          {/* Icon Overlay */}
          <div
            className={cn(
              'absolute inset-0',
              'bg-gradient-to-t from-black/60 via-black/30 to-transparent',
              'flex items-center justify-center gap-4',
              'transition-opacity duration-300',
              'group-hover:opacity-90'
            )}
          >
            {icons.map((icon, idx) => (
              <Icon
                key={idx}
                name={icon}
                className="text-white/90"
                strokeWidth={1.5}
                size={32}
              />
            ))}
          </div>
        </CardMediaContent>

        {/* Content Section */}
        <CardHeader className="flex flex-col space-y-2">
          <h2
            className={cn(
              'text-xl font-bold mb-2',
              'group-hover:text-sky dark:group-hover:text-indigo',
              'transition-colors duration-300'
            )}
          >
            {title}
          </h2>
          <p className={cn('text-base leading-relaxed', 'line-clamp-2')}>
            {description}
          </p>
        </CardHeader>

        {/* Quick Features Preview */}
        <CardContent className="mt-auto space-y-4">
          {/* Stats Grid */}
          <div
            className={cn(
              'grid grid-cols-3 gap-2',
              'pt-4 border-t border-slate-200 dark:border-slate-700'
            )}
          >
            {stats.slice(0, 3).map(({ icon, value, label }, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <Icon
                    name={icon}
                    className="w-4 h-4 mb-1 text-sky dark:text-indigo"
                    strokeWidth={1.5}
                  />
                  <span className="text-lg font-semibold text-primary dark:text-white">
                    {value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export const PortfolioHero = () => (
  <div className="flex flex-col gap-4 order-1 lg:order-2">
    <Suspense fallback={<Shimmer width={400} height={300} />}>
      <Image
        src="/images/pic14.webp"
        alt="SANFORDEV Portfolio"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 400px"
        placeholder="blur"
        blurDataURL={generateBlurPlaceholder(400, 300)}
      />
    </Suspense>
  </div>
);
