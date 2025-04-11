import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ElementType } from 'react';

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
        primary: cn(
          'bg-indigo/90 text-white dark:text-slate-300',
          'shadow-sm',
          'hover:bg-sky/5 hover:text-indigo',
          'dark:hover:bg-indigo/10 dark:hover:text-indigo',
          'active:text-navy dark:active:text-frost',
          'transition-all'
        ),
        secondary: cn(
          'bg-navy text-white dark:bg-indigo dark:text-white',
          'shadow-sm',
          'hover:bg-navy/90 dark:hover:bg-indigo/90',
          'active:bg-navy/80 dark:active:bg-indigo/80',
          'transition-all'
        ),
        cta: cn(
          'bg-sky text-white dark:bg-indigo dark:text-white',
          'shadow-sm',
          'hover:bg-sky/90 dark:hover:bg-indigo/90',
          'active:bg-sky/80 dark:active:bg-indigo/80',
          'transition-all'
        ),
        outline: cn(
          'bg-transparent text-indigo dark:text-indigo',
          'border-2 border-indigo dark:border-indigo',
          'shadow-sm',
          'hover:bg-sky/10 hover:text-navy hover:border-navy',
          'dark:hover:bg-indigo/10 dark:hover:text-navy dark:hover:border-navy',
          'active:bg-sky/20 dark:active:bg-indigo/20',
          'transition-all'
        ),
        standaloneLink: cn(
          'text-sky font-medium underline',
          'hover:text-navy hover:no-underline',
          'active:text-indigo',
          'dark:text-sky dark:hover:text-frost dark:hover:no-underline',
          'dark:active:text-frost/80',
          'transition-all'
        ),
        inlineLink: cn(
          '[&]:inline [&]:p-0 [&]:m-0',
          'font-inherit text-inherit underline',
          'text-sky hover:text-navy hover:no-underline',
          'active:text-indigo',
          'dark:text-sky dark:hover:text-frost dark:hover:no-underline',
          'dark:active:text-frost/80',
          'transition-all'
        ),
        nav: cn(
          'rounded-md font-medium',
          'text-slate-600 dark:text-slate-300',
          'hover:bg-sky/5 hover:text-sky',
          'dark:hover:bg-indigo/10 dark:hover:text-indigo',
          'active:text-navy dark:active:text-frost',
          'data-[active=true]:bg-indigo/90 data-[active=true]:text-white',
          'dark:data-[active=true]:bg-sky/90 dark:data-[active=true]:text-white',
          'transition-all'
        ),
      },
      size: {
        sm: cn('h-9 px-4 py-2', 'text-sm'),
        md: cn('h-12 px-6 py-3', 'text-base'),
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
      variant: 'primary',
      size: 'md',
    },
    compoundVariants: [
      {
        variant: 'inlineLink',
        className: '[&]:p-0 [&]:h-auto [&]:m-0', // Force override any size-based padding
      },
      {
        variant: ['primary', 'outline', 'secondary'],
        className: 'hover:scale-[1.02] active:scale-[0.98] transition-all', // Add subtle scaling to buttons
      },
    ],
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Component: ElementType = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
