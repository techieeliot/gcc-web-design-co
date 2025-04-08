'use client';

import { cn } from '@/lib/utils';

interface ShimmerProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  duration?: number;
}

export function Shimmer({
  className,
  width,
  height,
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
      style={{
        width,
        height,
      }}
      className={cn(
        'inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200',
        'dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
        'animate-shimmer bg-[length:200%_100%]',
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
