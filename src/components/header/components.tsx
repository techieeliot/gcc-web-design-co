'use client';
import React, { Suspense, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '../ui/link';
import { NavLink } from '../ui/nav-link';
import { Shimmer } from '../ui/shimmer';
import { usePathname } from 'next/navigation';
import { Icon } from '../ui/icon';
import { Button } from '../ui/button';
import { CldImage } from 'next-cloudinary';
import { defaultImageSizes } from '@/lib/image';
import LogoTypography from '../logo-typography';

function LogoSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Shimmer width={40} height={40} rounded="full" />
      <Shimmer width={120} height={24} rounded="md" />
    </div>
  );
}

function NavSkeleton() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {[...Array(5)].map((_, i) => (
        <Shimmer
          key={i}
          width={80}
          height={32}
          rounded="md"
          className="animate-pulse"
        />
      ))}
    </div>
  );
}

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const links: { href: string; label: string }[] = [
  { href: '/', label: 'Welcome' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function ClientHeader() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <LogoSkeleton />
            <NavSkeleton />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function MainNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Remove any logic that changes the background on scroll
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          'fixed top-0 left-0 right-0',
          'z-[100]',
          'bg-background dark:bg-background', // Changed to solid background
          'border-b border-border',
          'shadow-sm',
          isOpen && 'opacity-0 pointer-events-none'
        )}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 shadow-sm">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className={cn(
                'flex justify-between items-center h-14 sm:h-16 md:h-20',
                // Improve text contrast when scrolled
                isScrolled && 'text-primary dark:text-white'
              )}
            >
              {/* Logo Section with Shimmer fallback */}
              <div>
                <Link
                  href="/"
                  noButtonWrapper={true} // Use this to bypass the Button wrapper
                  className={cn(
                    'no-underline flex items-center gap-2 sm:gap-3',
                    'rounded-md px-3 py-3',
                    'hover:bg-indigo/10 transition-all duration-300',
                    'relative overflow-visible'
                  )}
                >
                  {/* Logo container with proper spacing and visibility */}
                  <div className="relative flex items-center justify-center overflow-visible">
                    {/* Outer animated ring */}
                    <div
                      className={cn(
                        'absolute rounded-full border-2 border-sky/20 dark:border-indigo/20',
                        '-left-1 -top-1'
                      )}
                    />

                    {/* Logo circle */}
                    <div
                      className={cn(
                        'rounded-full bg-slate flex items-center justify-center',
                        'relative z-10',
                        'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14'
                      )}
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-sky/20 dark:border-indigo/20" />
                      {/* Pulsing background */}
                      <div className="absolute inset-0 rounded-full bg-sky-100 dark:bg-indigo/10" />

                      {/* Add Shimmer while image loads */}
                      <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-navy p-2 rounded-full">
                        <Suspense fallback={<Shimmer height="full" />}>
                          <CldImage
                            src="emblem"
                            alt="SANFORDEV Logo"
                            fill
                            sizes={defaultImageSizes}
                            loading="eager"
                            priority
                            className="object-cover"
                          />
                        </Suspense>
                      </div>
                    </div>
                  </div>

                  {/* Brand text */}
                  <div
                    className={cn(
                      'whitespace-nowrap relative z-10',
                      'flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:items-baseline',
                      isScrolled
                        ? 'text-primary'
                        : 'text-slate-700 dark:text-frost'
                    )}
                    aria-label="SANFORDEV CONSULTING"
                  >
                    <LogoTypography size="sm" variant="split" />
                  </div>
                </Link>
              </div>

              {/* Desktop Nav - Enhanced with animations */}
              <nav className="hidden md:flex h-full items-center space-x-4">
                <ul className="flex items-center gap-1 md:gap-1 lg:gap-2 xl:gap-4">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <NavLink href={href} label={label} />
                    </li>
                  ))}
                </ul>
                <div className="ml-2 lg:ml-4">{/* <ThemeToggle /> */}</div>
              </nav>

              {/* Mobile Menu Button - Enhanced interaction */}
              <div className="md:hidden flex items-center gap-2 min-w-12">
                {/* <ThemeToggle /> */}
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    'p-2 rounded-full',
                    isScrolled
                      ? 'text-primary bg-transparent hover:text-sky dark:text-white dark:hover:text-indigo'
                      : 'text-slate-700 hover:text-sky dark:text-frost dark:hover:text-indigo',
                    'hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isOpen}
                  variant="icon"
                >
                  {isOpen ? (
                    <Icon name="X" className="w-6 h-6" />
                  ) : (
                    <Icon name="Menu" className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const pathname = usePathname();

  // Close on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setIsOpen]);

  // Close on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-50 dark:bg-slate-900 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div
            className={cn(
              'fixed top-0 right-0 h-full w-[280px] z-50',
              'bg-slate-50 dark:bg-slate-900', // Solid backgrounds here as well
              'border-l border-slate-200 dark:border-slate-800',
              'shadow-xl'
            )}
          >
            <div className="flex flex-col h-full">
              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <NavLink {...link} onClick={() => setIsOpen(false)} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
