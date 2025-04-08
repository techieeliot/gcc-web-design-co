'use client';

import { usePathname } from 'next/navigation';
import { Link } from './link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, label, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isScrolled = useScrollPosition(10);

  return (
    <Link
      variant="nav"
      size="nav"
      href={href}
      data-active={pathname === href}
      onClick={onClick}
      className={cn(
        className,
        'relative transition-colors duration-200',
        isScrolled
          ? 'text-slate-900 hover:text-sky dark:text-white dark:hover:text-azure font-medium'
          : 'text-slate-700 hover:text-sky dark:text-powder dark:hover:text-azure',
        pathname === href && 'text-azure dark:text-sky font-medium'
        // Removed any drop-shadow or opacity changes on scroll
      )}
    >
      <span className="inline-block relative z-10" tabIndex={-1}>
        {label}
      </span>
    </Link>
  );
}

// Add this custom hook in the same file
function useScrollPosition(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold);
      });
    };

    // Debounce scroll events
    let timeoutId: number;
    const debouncedHandleScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
      timeoutId = window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, [threshold]);

  return isScrolled;
}
