import { cn } from '@/lib/utils';
import { CldImage } from 'next-cloudinary';
import { brand } from '@/config/brand';
import { defaultImageSizes } from '@/lib/image';

type LogoSize = keyof typeof brand.images.sizes;

interface LogoProps {
  size?: LogoSize;
  variant?: 'default' | 'minimal';
  className?: string;
}

export default function LogoEmblem({
  size = 'md',
  variant = 'default',
  className,
}: LogoProps) {
  const dimensions = brand.images.sizes[size];

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        variant === 'default' && 'rounded-full bg-navy p-4',
        'transition-all duration-300',
        className
      )}
    >
      <CldImage
        src={brand.images.logo}
        alt={`${brand.name.full} Logo`}
        width={dimensions.width}
        height={dimensions.height}
        sizes={defaultImageSizes}
        loading="eager"
        priority
        className="object-contain"
      />
    </div>
  );
}
