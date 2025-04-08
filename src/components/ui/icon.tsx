import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import type { LucideProps } from 'lucide-react';
import { LoadingFallback } from './loading-fallback';
import { Suspense, memo, ComponentType } from 'react';

export type IconName = keyof typeof import('lucide-react');

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

const DynamicIcon = memo(
  ({
    name,
    size = 24,
    strokeWidth = 2,
    className = '',
    ...props
  }: IconProps) => {
    const IconComponent = dynamic<LucideProps>(
      async () => {
        const mod = await import('lucide-react');
        return mod[name as keyof typeof mod] as ComponentType<LucideProps>;
      },
      {
        loading: () => (
          <LoadingFallback
            height={size}
            className={cn('flex-shrink-0', className)}
          />
        ),
        ssr: false,
      }
    );

    return (
      <IconComponent
        size={size}
        strokeWidth={strokeWidth}
        className={cn('flex-shrink-0', className)}
        {...props}
      />
    );
  }
);

DynamicIcon.displayName = 'DynamicIcon';

export function Icon(props: IconProps) {
  return (
    <Suspense
      fallback={
        <LoadingFallback height={props.size} className={props.className} />
      }
    >
      <DynamicIcon {...props} />
    </Suspense>
  );
}
