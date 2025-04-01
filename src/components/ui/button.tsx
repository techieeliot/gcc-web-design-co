import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/utils'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-lg text-base font-semibold',
    'transition-all duration-200 ease-in-out',
    'disabled:pointer-events-none disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    'shrink-0 [&_svg]:shrink-0',
    'outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-sky text-white dark:bg-azure dark:text-white',
          'shadow-sm',
          'hover:bg-sky/90 dark:hover:bg-azure/90',
          'active:bg-sky/80 active:scale-[0.98] dark:active:bg-azure/80',
          'transition-all'
        ),
        outline: cn(
          'bg-transparent border-2',
          'border-sky text-sky dark:border-azure dark:text-azure',
          'shadow-sm',
          'hover:bg-sky/10 dark:hover:bg-azure/10',
          'active:bg-sky/20 active:scale-[0.98] dark:active:bg-azure/20',
          'transition-all'
        ),
        secondary: cn(
          'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white',
          'shadow-sm',
          'hover:bg-slate-300 dark:hover:bg-slate-600',
          'active:bg-slate-400 active:scale-[0.98] dark:active:bg-slate-500',
          'transition-all'
        ),
        standaloneLink: cn(
          // Light mode
          'text-sky font-medium',
          'hover:text-blueberry hover:underline',
          'active:text-azure active:scale-[0.98]',
          // Dark mode - brighter colors for better visibility
          'dark:text-azure',
          'dark:hover:text-powder dark:hover:underline',
          'dark:active:text-powder/80',
          'transition-all' // Changed from transition-colors
        ),
        inlineLink: cn(
          '[&]:inline [&]:p-0 [&]:m-0', // Force override any inherited padding
          'font-inherit text-inherit',
          'text-sky hover:text-blueberry',
          'dark:text-azure dark:hover:text-powder',
          'hover:underline active:text-azure active:scale-[0.98]',
          'transition-all' // Changed from transition-colors
        ),
        nav: cn(
          'rounded-md transition-all font-medium', // Changed from transition-colors
          // Light mode - more subtle base state
          'text-slate-600',
          'hover:text-sky hover:bg-sky/5',
          'active:text-blueberry active:scale-[0.98]',
          'data-[active=true]:bg-azure/90',
          'data-[active=true]:text-white',
          // Dark mode - subtle base with bright active states
          'dark:text-slate-300',
          'dark:hover:text-azure dark:hover:bg-azure/10',
          'dark:active:text-powder dark:active:scale-[0.98]',
          'dark:data-[active=true]:bg-sky/90',
          'dark:data-[active=true]:text-white'
        ),
      },
      size: {
        default: cn('h-12 px-6 py-3', 'text-base'),
        sm: cn('h-9 px-4 py-2', 'text-sm'),
        lg: cn('h-14 px-8 py-4', 'text-lg'),
        xl: cn('h-16 px-10 py-5', 'text-xl'),
        icon: cn(
          'h-12 w-12 p-3',
          'hover:scale-105 active:scale-95',
          'transition-all'
        ),
        nav: cn(
          'px-3 py-2.5', // Increased padding for better clickability
          'text-sm',
          'md:px-3 md:py-2.5 md:text-sm',
          'lg:px-3.5 lg:py-2.5 lg:text-base',
          'xl:px-4 xl:py-2.5'
        ),
        none: '', // Add a size variant that adds no spacing
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
    // Add compoundVariants to handle special cases
    compoundVariants: [
      {
        variant: 'inlineLink',
        className: '[&]:p-0 [&]:h-auto [&]:m-0', // Force override any size-based padding
      },
      {
        variant: ['default', 'outline', 'secondary'],
        className: 'hover:scale-[1.02] active:scale-[0.98] transition-all', // Add subtle scaling to buttons
      },
    ],
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
