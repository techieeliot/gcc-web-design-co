'use client';

import { Icon, IconName } from '@ui/icon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRef } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardMediaContent,
} from 'components/ui/card';

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
    <Card
      ref={ref}
      background="mode"
      className={cn('group relative flex flex-col', 'overflow-hidden')}
    >
      <Link
        href={`/portfolio/${id}`}
        className="flex flex-col flex-1"
        aria-label={`Click on this image to find out more about ${title}`}
        title={`Click on this image to find out more about ${title}`}
      >
        {/* Image Section */}
        <CardMediaContent className="h-48 sm:h-52 overflow-hidden">
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
      </Link>
    </Card>
  );
};
