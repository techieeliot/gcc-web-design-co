import * as React from 'react';
import Image, { ImageWithFallbackProps } from '@/components/image';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  cn(
    'rounded-xl border border-border shadow backdrop-blur-md',
    'hover:bg-sky-100 dark:hover:bg-indigo/10 transition-colors',
    'hover:shadow-md transition-shadow duration-300'
  ),
  {
    variants: {
      variant: {
        default: '',
        callout: 'border-l-8 border-l-sky',
      },
      background: {
        default: 'bg-card text-card-foreground',
        mode: 'bg-white dark:bg-slate-800/50 text-night dark:text-white',
        off: 'bg-white/50 dark:bg-slate-800/30',
      },
    },
    defaultVariants: {
      variant: 'default',
      background: 'default',
    },
  }
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ variant, background, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant, background, className }))}
    {...props}
  />
));

Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5 p-6 text-night dark:text-white',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-subtitle font-subtitle font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('px-6 pt-0 pb-6', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center px-6 pt-0 pb-6', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center space-x-2 p-6 pt-0', className)}
    {...props}
  />
));

CardActions.displayName = 'CardActions';

const CardMedia = React.forwardRef<HTMLImageElement, ImageWithFallbackProps>(
  ({ className, ...props }, ref) => {
    'use client';
    return (
      <Image
        ref={ref}
        className={cn('object-cover', className)}
        fill
        {...props}
      />
    );
  }
);

CardMedia.displayName = 'CardMedia';

const CardMediaContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('relative', className)} {...props} />
));

CardMediaContent.displayName = 'CardMediaContent';

export {
  Card,
  CardHeader,
  CardFooter,
  CardActions,
  CardTitle,
  CardDescription,
  CardContent,
  CardMedia,
  CardMediaContent,
};
