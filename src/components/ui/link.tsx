import LinkPrimitive from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import { Button, buttonVariants } from './button'
import type { VariantProps } from 'class-variance-authority'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

const Link = ({
  href,
  children,
  className,
  variant = 'link',
  size,
  ...props
}: LinkProps & VariantProps<typeof buttonVariants>) => {
  // if external link, use target="_blank" and rel="noopener noreferrer"
  const isExternal =
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel')
  if (isExternal) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
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
    <Button asChild variant={variant} size={size} className={className}>
      <LinkPrimitive href={href} {...props}>
        {children}
      </LinkPrimitive>
    </Button>
  )
}

export { Link }
