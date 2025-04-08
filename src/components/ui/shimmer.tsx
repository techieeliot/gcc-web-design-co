'use client';

import { cn } from '@/lib/utils';
import { MotionDiv } from './motion-components';

interface ShimmerProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  duration?: number;
}

export function Shimmer({
  className,
  width,
  height,
  rounded = 'none',
  duration = 2,
}: ShimmerProps) {
  const roundedMap = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  return (
    <MotionDiv
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        width,
        height,
      }}
      className={cn(
        'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200',
        'dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
        'bg-[length:200%_100%]',
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
