import { cn } from '@/lib/utils';
import LogoEmblem from '../logo-emblem';
import LogoTypography from '../logo-typography';

interface BrandLogoProps {
  variant?: 'horizontal' | 'vertical' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function BrandLogo({
  variant = 'horizontal',
  size = 'md',
  className,
}: BrandLogoProps) {
  const sizeConfig = {
    sm: { logo: 'sm' as const, text: 'sm' as const },
    md: { logo: 'md' as const, text: 'lg' as const },
    lg: { logo: 'lg' as const, text: 'xl' as const },
  };

  return (
    <div
      className={cn(
        'flex items-center',
        variant === 'vertical' && 'flex-col gap-4',
        variant === 'horizontal' && 'flex-row gap-3',
        className
      )}
    >
      <LogoEmblem
        size={sizeConfig[size].logo}
        variant={variant === 'minimal' ? 'minimal' : 'default'}
      />
      {variant !== 'minimal' && (
        <LogoTypography
          size={sizeConfig[size].text}
          variant={variant === 'horizontal' ? 'split' : 'full'}
          className={cn(
            variant === 'vertical' && 'text-center',
            'whitespace-nowrap'
          )}
          aria-label="SANFORDEV CONSULTING"
        />
      )}
    </div>
  );
}
