'use client';

import { useState, useRef, HTMLAttributes } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useOnClickOutside } from './hooks';
import { Icon, IconName } from '../ui/icon';
import { clientLogger } from '@/lib/logger';
import { Button } from '../ui/button';

interface ShareButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  url: string;
  description?: string;
}

export interface ShareOption {
  name: string;
  icon: IconName;
  onClick: () => Promise<void>;
  label: string;
}

export function ShareButton({
  title,
  url,
  description,
  className,
  ...props
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const shareOptions: ShareOption[] = [
    {
      name: 'Copy Link',
      icon: 'Link2',
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(url);
          toast.success('Link copied to clipboard', {
            duration: 3000,
            className: cn('bg-white dark:bg-slate-900', 'shadow-lg'),
          });
        } catch (err) {
          toast.error('Failed to copy link', {
            duration: 3000,
          });
          clientLogger.error('Failed to copy link:', err as Error);
        }
      },
      label: 'Copy link',
    },
    {
      name: 'Email',
      icon: 'Mail',
      onClick: async () => {
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(`Check out this SANFORDEV blog.\n\n${description}\n\nRead more: ${url}`)}`;
        window.location.href = mailtoUrl;
      },
      label: 'Share via email',
    },
    {
      name: 'Twitter',
      icon: 'X',
      onClick: async () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Check out this blog!\n\n${title}\n\n${
            description!?.length > 100
              ? description!.slice(0, 100) + '...'
              : description
          }\n\nRead more: ${url}`
        )}`;
        window.open(twitterUrl, '_blank', 'noopener,noreferrer');
      },
      label: 'Share on Twitter',
    },
  ];

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        variant="standaloneLink"
        size="none"
        aria-label="Share this article"
        className="m-2"
        {...props}
      >
        <Icon name="Share2" className="w-4 h-4" />
        Share
      </Button>

      {isOpen && (
        <div
          className={cn(
            'absolute right-0 rounded-md shadow-lg',
            'bg-white dark:bg-slate-900 border-2',
            'z-[60]',
            // animate with tailwindcss transition so it comes smoothly from the button
            'transition-discrete delay-300 duration-1000 ease-in-out',
            // use transform to move it down
            'transform translate-y-2'
          )}
          role="menu"
        >
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              variant="standaloneLink"
              size="none"
              className="w-full justify-start"
              onClick={async (e) => {
                e.preventDefault();
                await option.onClick();
                setIsOpen(false);
              }}
              role="menuitem"
            >
              <Icon name={option.icon} className="w-4 h-4" />
              <span>{option.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
