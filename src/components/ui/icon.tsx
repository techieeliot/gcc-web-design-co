'use client';

import { memo, useEffect, useState, ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Shimmer } from './shimmer';

export type IconName = keyof typeof import('lucide-react');

export interface IconProps extends LucideProps {
  name: IconName;
  className?: string;
  size?: number | string;
}

export const Icon = memo(
  ({ name, className, size = 24, ...props }: IconProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    const IconComponent = dynamic<LucideProps>(
      async () => {
        const mod = await import('lucide-react');
        return mod[name as keyof typeof mod] as ComponentType<LucideProps>;
      },
      {
        loading: () => <IconShimmer size={size} className={className} />,
        ssr: false,
      }
    );

    if (!isClient) {
      return <IconShimmer size={size} className={className} />;
    }

    return <IconComponent className={className} size={size} {...props} />;
  }
);

const IconShimmer = ({
  size,
  className,
}: Pick<IconProps, 'size' | 'className'>) => (
  <span
    className={cn(
      'inline-flex',
      `w-${typeof size === 'number' ? size / 4 : size}`,
      className
    )}
  >
    <Shimmer rounded="full" />
  </span>
);

Icon.displayName = 'Icon';
