'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { companySocialLinks, quickLinks } from '@/data';

import { Icon, IconName } from '../ui/icon';

export function QuickLinks({ showHeading = false }) {
  return (
    <div className={cn('w-full', showHeading ? 'mb-6' : 'mb-0')}>
      {showHeading && (
        <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-6 text-center md:text-left">
          Quick Links
        </h3>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {quickLinks.map(({ href, label, icon }) => (
          <li key={href} className="w-full">
            <Link
              href={href}
              variant="standaloneLink"
              className={cn(
                'group flex items-center gap-3',
                'py-2 px-3 rounded-md',
                'hover:bg-sky/5 dark:hover:bg-azure/5',
                'transition-colors duration-200',
                'text-slate-600 dark:text-slate-300',
                'hover:text-sky dark:hover:text-azure',
                'text-base',
                'w-full'
              )}
            >
              <Icon
                name={icon}
                className="w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-sky dark:group-hover:text-azure transition-colors"
              />
              <span className="font-medium">{label}</span>
              <Icon
                name="ChevronRight"
                className="w-3.5 h-3.5 flex-shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-sky dark:group-hover:text-azure opacity-0 group-hover:opacity-100 transition-all ml-auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ContactItemProps {
  icon: IconName;
  href: string;
  children: React.ReactNode;
  variant?: 'nav' | 'default';
  showExternalIcon?: boolean;
}

function ContactItem({
  icon,
  href,
  children,
  variant = 'nav',
  showExternalIcon = true,
}: ContactItemProps) {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 md:gap-4 lg:gap-5 max-w-[300px] mx-auto sm:mx-0">
      <div className="p-2 rounded-full bg-sky/10 dark:bg-azure/10 shrink-0">
        <Icon name={icon} className="w-5 h-5 text-sky dark:text-azure" />
      </div>
      <Link
        href={href}
        variant={variant}
        className={cn(
          'text-slate-600 dark:text-powder/80',
          'hover:text-sky dark:hover:text-azure',
          'group flex items-center gap-1'
        )}
      >
        {children}
        {showExternalIcon && (
          <span className="inline-flex">
            <Icon name="ExternalLink" className="w-3 h-3" />
          </span>
        )}
      </Link>
    </div>
  );
}

// Update Contact component

export function Contact() {
  return (
    <section className="widget contact text-center md:text-left">
      <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-6">
        Contact Us
      </h3>
      <div className="space-y-5">
        <ContactItem icon="Mail" href="mailto:devsouth.us@gmail.com">
          devsouth.us@gmail.com
        </ContactItem>
        <ContactItem icon="Phone" href="tel:+16623126815">
          +1 (662) 312-6815
        </ContactItem>
        <ContactItem
          icon="MapPin"
          href="https://www.google.com/maps/place/110+Lake+Forest+Ln,+Clinton,+MS+39056"
          showExternalIcon={false}
        >
          <address className="text-slate-600 dark:text-powder/80 not-italic">
            110 Lake Forest Ln
            <br />
            Clinton, MS 39056
          </address>
        </ContactItem>
      </div>
    </section>
  );
}

// Update CompanyInfo component

export function CompanyInfo() {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-6">
        About SanforDEV
      </h3>
      <p className="text-slate-600 dark:text-powder/80 mb-5">
        We build modern web applications with a focus on React, Next.js, and the
        broader JavaScript ecosystem. Our mission is to make the web more
        accessible, performant, and delightful.
      </p>
      <SocialLinks />
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 mt-5">
      {companySocialLinks.map(({ href, icon, label, color }) => (
        <div key={href}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center',
              'w-10 h-10 rounded-full',
              'transition-all duration-300',
              color,
              'dark:text-powder/90'
            )}
            aria-label={label}
          >
            <Icon name={icon} className="w-5 h-5" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export function Copyright({ currentYear }: { currentYear: number }) {
  return (
    <div
      className={cn(
        'border-t border-slate-200 dark:border-slate-800',
        'mt-12 pt-8 pb-8'
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-powder/80 flex items-center">
          &copy; {currentYear} SanforDEV Consulting. All rights reserved.
        </p>
        <MadeWithLove />
      </div>
    </div>
  );
}

function MadeWithLove() {
  return (
    <div className="text-sm text-slate-500 dark:text-powder/70 flex items-center gap-1">
      Made with
      <span className="inline-flex items-center mx-1">
        <Icon name="Heart" className="w-4 h-4 text-red-500 fill-current" />
      </span>
      in Mississippi
    </div>
  );
}
