'use client';

import { Icon } from '@/components/ui/icon';
import { format } from 'date-fns';

export default function DateDisplay({ date }: { date: string }) {
  return (
    <span className="flex items-center">
      <Icon name="Calendar" className="w-4 h-4 mr-2" />
      <time>{format(new Date(date), 'MMMM dd, yyyy')}</time>
    </span>
  );
}
