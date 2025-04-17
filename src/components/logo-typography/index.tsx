import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { brand } from '@/config/brand';

type WordmarkFontSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';
type WordmarkColor = 'sky' | 'indigo' | 'night' | 'white';
type WordmarkVariant = 'full' | 'short' | 'split';

interface LogoTypographyProps extends HTMLAttributes<HTMLSpanElement> {
  size?: WordmarkFontSize;
  color?: WordmarkColor;
  variant?: WordmarkVariant;
  bold?: boolean;
}

const sizeClasses: Record<WordmarkFontSize, string> = {
  xs: 'text-xs sm:text-sm lg:text-base',
  sm: 'text-sm sm:text-base lg:text-lg',
  md: 'text-base sm:text-lg lg:text-xl',
  lg: 'text-lg sm:text-xl lg:text-2xl',
  xl: 'text-xl sm:text-2xl lg:text-3xl',
  '2xl': 'text-2xl sm:text-3xl lg:text-4xl',
  '3xl': 'text-3xl sm:text-4xl lg:text-5xl',
  '4xl': 'text-4xl sm:text-5xl lg:text-6xl',
};

export default function LogoTypography({
  size = 'xl',
  color = 'night',
  variant = 'full',
  bold = true,
  className,
  ...props
}: LogoTypographyProps) {
  const colorClasses = {
    sky: 'text-sky dark:text-indigo',
    indigo: 'text-indigo dark:text-sky',
    night: 'text-night dark:text-white',
    white: 'text-white dark:text-night',
  };

  const sharedClasses = cn(
    'font-title leading-[80%] tracking-widest',
    'flex items-end',
    sizeClasses[size],
    bold && 'font-bold'
  );

  const renderContent = () => {
    switch (variant) {
      case 'split':
        return (
          <>
            {brand.name.prefix}
            <span className={cn(colorClasses.sky, sharedClasses, className)}>
              <strong>{brand.name.suffix}</strong>
            </span>
          </>
        );
      case 'split':
        return (
          <>
            {brand.name.prefix}
            <span className={cn(colorClasses.sky, sharedClasses, className)}>
              <strong>{brand.name.suffix}</strong>
            </span>
          </>
        );
      case 'short':
        return brand.name.short;
      default:
        return brand.name.full.toUpperCase();
    }
  };

  return (
    <span
      className={cn(sharedClasses, colorClasses[color], className)}
      {...props}
    >
      {renderContent()}
    </span>
  );
}
