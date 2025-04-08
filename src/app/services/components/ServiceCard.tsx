'use client';

import { cn } from '@/lib/utils';

import { Service } from '@/data/types';
import { Icon } from '@/components/ui/icon';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl',
        'p-6 sm:p-8',
        'shadow-sm hover:shadow-md transition-shadow'
      )}
    >
      {/* Icons section */}
      <div className="flex gap-4 mb-6">
        {service.icons.map((icon, iconIndex) => (
          <div
            key={iconIndex}
            className="relative group cursor-pointer"
            role="img"
            aria-label={`${service.title} icon ${iconIndex + 1}`}
          >
            <Icon
              name={icon}
              className="w-12 h-12 text-midnight dark:text-sky transition-colors group-hover:text-azure dark:group-hover:text-azure"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-3">{service.title}</h2>

      <p className="text-base text-slate-600 dark:text-slate-300 mb-6">
        {service.description}
      </p>

      {/* Features list */}
      <ul className="space-y-3">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start gap-3 group">
            <Icon
              name="ArrowUpRight"
              className="w-5 h-5 text-sky dark:text-azure flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1"
            />
            <span className="text-small text-slate-600 dark:text-slate-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
