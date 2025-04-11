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
        default: cn(
          'bg-navy text-white dark:bg-indigo dark:text-white',
          'shadow-sm',
          'hover:bg-navy/90 dark:hover:bg-indigo/90',
          'active:bg-navy/80 active:scale-[0.98] dark:active:bg-indigo/80',
          'transition-all'
        ),
        cta: cn(
          'bg-sky text-white dark:bg-indigo dark:text-white',
          'shadow-sm',
          'hover:bg-sky/90 dark:hover:bg-indigo/90',
          'active:bg-sky/80 active:scale-[0.98] dark:active:bg-indigo/80',
          'transition-all'
        ),
        outline: cn(
          'bg-transparent border-2',
          'border-navy text-navy',
          'shadow-sm',
          'hover:bg-navy/10 dark:hover:bg-indigo/10',
          'active:bg-navy/20 active:scale-[0.98] dark:active:bg-indigo/20',
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
          'text-sky font-medium underline',
          'hover:text-navy hover:no-underline',
          'active:text-indigo active:scale-[0.98]',
          'dark:hover:text-frost dark:hover:no-underline',
          'dark:active:text-frost/80',
          'transition-all'
        ),
        inlineLink: cn(
          '[&]:inline [&]:p-0 [&]:m-0 underline',
          'font-inherit text-inherit',
          'text-sky hover:text-navy',
          'dark:text-sky dark:hover:text-frost dark:hover:no-underline',
          'hover:no-underline active:text-indigo active:scale-[0.98]',
          'transition-all'
        ),
        nav: cn(
          'rounded-md transition-all font-medium',
          'text-slate-600',
          'hover:text-sky hover:bg-sky/5',
          'active:text-navy active:scale-[0.98]',
          'data-[active=true]:bg-indigo/90',
          'data-[active=true]:text-white',
          'dark:text-slate-300',
          'dark:hover:text-indigo dark:hover:bg-indigo/10',
          'dark:active:text-frost dark:active:scale-[0.98]',
          'dark:data-[active=true]:bg-sky/90',
          'dark:data-[active=true]:text-white'
        ),
        light: cn(
          'bg-white text-indigo font-medium',
          'border border-transparent',
          'shadow-sm',
          'hover:bg-indigo/10 hover:text-ghost/10 hover:border-indigo/10',
          'hover:shadow-md',
          'active:bg-slate-100 active:scale-[0.98] active:shadow-inner',
          'focus-visible:ring-2 focus-visible:ring-sky/30',
          'dark:bg-indigo dark:text-frost',
          'dark:hover:bg-indigo/90 dark:hover:border-indigo/30',
          'dark:hover:text-white',
          'dark:active:bg-slate-600',
          'transition-all duration-200'
        ),
        outlineWhite: cn(
          'bg-transparent border-2',
          'border-white text-white',
          'backdrop-blur-[2px]',
          'hover:bg-white/15 hover:border-white/90',
          'hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
          'active:bg-white/25 active:scale-[0.98]',
          'active:shadow-[0_0_8px_rgba(255,255,255,0.2)]',
          'focus-visible:ring-2 focus-visible:ring-white/50',
          'dark:border-white/90 dark:text-white/90',
          'dark:hover:bg-white/10 dark:hover:border-white',
          'dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
          'dark:active:bg-white/20',
          'transition-all duration-300'
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
    compoundVariants: [
      {
        variant: 'inlineLink',
        className: '[&]:p-0 [&]:h-auto [&]:m-0', // Force override any size-based padding
      },
      {
        variant: ['default', 'outline', 'secondary', 'light', 'outlineWhite'],
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
