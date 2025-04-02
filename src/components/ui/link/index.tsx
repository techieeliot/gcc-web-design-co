import LinkPrimitive from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../button'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  'data-active'?: boolean
  noButtonWrapper?: boolean // Add this property to bypass Button wrapper
}

const Link = ({
  href,
  children,
  className,
  variant = 'standaloneLink',
  size,
  noButtonWrapper = false, // Default to false
  ...props
}: LinkProps & VariantProps<typeof buttonVariants>) => {
  // Set size to 'none' if variant is inlineLink and no size is specified
  const linkSize = variant === 'inlineLink' ? 'none' : size

  // if external link, use target="_blank" and rel="noopener noreferrer"
  const isExternal =
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel')

  // Use noButtonWrapper to bypass the Button wrapper for special cases like the logo
  if (noButtonWrapper) {
    return (
      <LinkPrimitive
        href={href}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </LinkPrimitive>
    )
  }

  if (isExternal) {
    return (
      <Button asChild variant={variant} size={linkSize} className={className}>
        <LinkPrimitive
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </LinkPrimitive>
      </Button>
    )
  }

  return (
    <Button asChild variant={variant} size={linkSize} className={className}>
      <LinkPrimitive href={href} {...props}>
        {children}
      </LinkPrimitive>
    </Button>
  )
}

export { Link }
