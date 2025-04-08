import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface LoadingFallbackProps {
  height?: string;
  className?: string;
}

export function LoadingFallback({
  height = 'h-6',
  className,
}: LoadingFallbackProps) {
  return (
    <span
      className={cn(
        height,
        'inline-block bg-slate-200 dark:bg-slate-700 animate-pulse rounded',
        className
      )}
    />
  );
}
