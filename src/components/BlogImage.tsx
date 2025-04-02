'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface BlogImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  width?: number
  height?: number
}

export default function BlogImage({
  src,
  alt,
  fill,
  className,
  priority,
  ...props
}: BlogImageProps) {
  // Default to a known working image
  const DEFAULT_IMAGE = '/images/pic12.webp'

  // Use state to track the image source
  const [imgSrc, setImgSrc] = useState(DEFAULT_IMAGE)

  // Set the actual source after component mounts
  useEffect(() => {
    // This helps with SSR issues
    setImgSrc(src)
  }, [src])

  return (
    <Image
      src={imgSrc}
      alt={alt || 'Blog image'}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setImgSrc(DEFAULT_IMAGE)}
      {...props}
    />
  )
}
