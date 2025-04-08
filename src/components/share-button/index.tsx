'use client';

import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useOnClickOutside } from './hooks';
import { Icon, IconName } from '../ui/icon';
import { clientLogger } from '@/lib/logger';

interface ShareButtonProps {
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

export function ShareButton({ title, url, description }: ShareButtonProps) {
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
          clientLogger.error('Failed to copy link:', {
            error: (err as Error).message,
            stack: (err as Error).stack,
          });
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
        )}&body=${encodeURIComponent(`${description}\n\nRead more: ${url}`)}`;
        window.location.href = mailtoUrl;
      },
      label: 'Share via email',
    },
    {
      name: 'Twitter',
      icon: 'X',
      onClick: async () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank', 'noopener,noreferrer');
      },
      label: 'Share on Twitter',
    },
  ];

  return (
    <div className="relative ml-auto" ref={dropdownRef}>
      <button
        className={cn(
          'inline-flex items-center gap-1 px-3 py-2 rounded-md',
          'text-slate-700 dark:text-slate-200',
          'hover:bg-slate-100 dark:hover:bg-slate-800',
          'transition-colors'
        )}
        onClick={(e) => {
          e.preventDefault(); // Prevent native share sheet
          setIsOpen(!isOpen);
        }}
        aria-label="Share this article"
      >
        <Icon name="Share2" className="w-4 h-4" />
        Share
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute right-0 mt-2 w-48 rounded-md shadow-lg',
            'bg-white dark:bg-slate-900', // Changed from bg-slate-50 to bg-white
            'ring-1 ring-black/5 dark:ring-white/10',
            'z-[60]'
          )}
        >
          <div className="py-1" role="menu">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm',
                  'hover:bg-slate-50 dark:hover:bg-slate-800',
                  'text-slate-900 dark:text-slate-100',
                  'flex items-center gap-2',
                  'transition-colors duration-150'
                )}
                onClick={async (e) => {
                  e.preventDefault();
                  await option.onClick();
                  setIsOpen(false);
                }}
                role="menuitem"
              >
                <Icon name={option.icon} className="w-4 h-4" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
