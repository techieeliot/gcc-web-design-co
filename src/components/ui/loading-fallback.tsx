import { cn } from '@/lib/utils';

type ElementSize = number | 'auto' | 'full';

interface LoadingFallbackProps {
  height?: ElementSize;
  width?: ElementSize;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function LoadingFallback({
  height = 4,
  width = 4,
  rounded = 'lg',
  className,
}: LoadingFallbackProps) {
  return (
    <span
      className={cn(
        height ? `h-${height}` : '',
        width ? `w-${width}` : '',
        rounded === 'none' ? '' : `rounded-${rounded}`,
        'inline-block bg-slate-200 dark:bg-slate-700 animate-pulse',
        className
      )}
    />
  );
}
