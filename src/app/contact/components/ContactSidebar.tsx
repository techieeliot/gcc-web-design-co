'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Icon } from '@ui/icon';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="p-3 bg-sky-100 dark:bg-indigo/10 rounded-lg">{icon}</div>
    </div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="text-slate-600 dark:text-slate-300">{content}</div>
    </div>
  </div>
);

export function ContactSidebar() {
  return (
    <aside
      className={cn(
        'lg:col-span-4 h-fit',
        'space-y-6 lg:sticky lg:top-24 self-start',
        'bg-white dark:bg-slate-800',
        'p-6 lg:p-8 rounded-xl shadow-sm'
      )}
    >
      <div className="space-y-6">
        <ContactInfo
          icon={
            <Icon name="Mail" className="w-6 h-6 text-sky dark:text-indigo" />
          }
          title="Email"
          content={
            <Link
              href="mailto:hey@sanfor.dev"
              aria-label="Click here to open a new email to hey@sanfor.dev"
            >
              hey@sanfor.dev
            </Link>
          }
        />
        <ContactInfo
          icon={
            <Icon name="Phone" className="w-6 h-6 text-sky dark:text-indigo" />
          }
          title="Phone"
          content={
            <Link
              href="tel:+16623126815"
              aria-label="If you're on a mobile device, click here to call our number: 662-312-6815"
            >
              (662) 312-6815
            </Link>
          }
        />
        <ContactInfo
          icon={
            <Icon name="MapPin" className="w-6 h-6 text-sky dark:text-indigo" />
          }
          title="Location"
          content="Clinton, Mississippi, USA"
        />
      </div>
    </aside>
  );
}
