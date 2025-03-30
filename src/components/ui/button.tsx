import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from 'lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-blue-700 text-white shadow-xs hover:bg-blue-800 active:bg-blue-600',
        destructive:
          'bg-red-600 text-white shadow-xs hover:bg-red-700 active:bg-red-500 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40',
        outline:
          'border border-blue-700 bg-white text-blue-700 shadow-xs hover:bg-blue-50 hover:text-blue-800 dark:bg-blue-950/30 dark:border-blue-700 dark:hover:bg-blue-900/50',
        secondary: 'bg-blue-100 text-blue-700 shadow-xs hover:bg-blue-200 active:bg-blue-300',
        ghost: 'text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:hover:bg-blue-900/50',
        link: 'text-blue-700 hover:text-blue-800 active:text-blue-600 transition-colors underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-4 py-4 has-[>svg]:px-5 text-md',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-sm',
        lg: 'h-16 rounded-md px-10 has-[>svg]:px-8 text-lg',
        xl: 'h-20 rounded-md px-12 has-[>svg]:px-10 text-xl',
        icon: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
