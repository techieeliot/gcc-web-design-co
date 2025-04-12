import { cn } from '@/lib/utils';
import { CldImage, CldImageProps } from 'next-cloudinary';
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
  ...props
}: LogoProps & Omit<CldImageProps, 'src' | 'width' | 'height' | 'alt'>) {
  const dimensions = brand.images.sizes[size];

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        variant === 'default' && 'rounded-full bg-navy p-2',
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
        {...props}
      />
    </div>
  );
}
