'use client';

import { cn } from '@/lib/utils';

type Size = 'auto' | 'full' | 'fit' | number;

interface ShimmerProps {
  className?: string;
  width?: Size;
  height?: Size;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  duration?: number;
}

export function Shimmer({
  className,
  width = 'full',
  height = 'full',
  rounded = 'none',
}: ShimmerProps) {
  const roundedMap = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <span
      className={cn(
        'inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200',
        'dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
        'shimmer-optimized animate-pulse bg-[length:200%_100%]',
        `h-${height} w-${width}`,
        roundedMap[rounded],
        className
      )}
    />
  );
}

// Add a loading state wrapper component
export function ShimmerWrapper({
  children,
  isLoading,
  className,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}) {
  if (isLoading) {
    return <Shimmer className={className} />;
  }
  return <>{children}</>;
}
