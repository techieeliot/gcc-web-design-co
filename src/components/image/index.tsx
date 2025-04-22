import Image, { ImageProps } from 'next/image';
import { useState, forwardRef } from 'react';

export interface ImageWithFallbackProps extends Omit<ImageProps, 'alt'> {
  alt: string; // Make alt required
  fallbackSrc?: string;
}

const ImageWithFallback = forwardRef<HTMLImageElement, ImageWithFallbackProps>(
  ({ alt, src, fallbackSrc = '/images/pic05.webp', ...rest }, ref) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <Image
        ref={ref}
        src={imgSrc}
        alt={alt}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
        {...rest}
      />
    );
  }
);

ImageWithFallback.displayName = 'ImageWithFallback';

export default ImageWithFallback;
