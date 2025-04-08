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

const DynamicIcon = memo(({ name, ...props }: IconProps) => {
  const IconComponent = dynamic<LucideProps>(
    async () => {
      const mod = await import('lucide-react');
      return mod[name as keyof typeof mod] as ComponentType<LucideProps>;
    },
    {
      loading: () => (
        <LoadingFallback
          height={`h-[${props.size || 24}px]`}
          className={cn('flex-shrink-0', props.className)}
        />
      ),
      ssr: false,
    }
  );

  return (
    <IconComponent
      size={props.size || 24}
      strokeWidth={props.strokeWidth || 2}
      className={cn('flex-shrink-0', props.className)}
    />
  );
});

DynamicIcon.displayName = 'DynamicIcon';

export function Icon(props: IconProps) {
  return (
    <Suspense
      fallback={
        <LoadingFallback
          height={`h-[${props.size || 24}px]`}
          className={cn('flex-shrink-0', props.className)}
        />
      }
    >
      <DynamicIcon {...props} />
    </Suspense>
  );
}
