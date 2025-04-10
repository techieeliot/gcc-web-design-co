'use client';

import { cn } from '@/lib/utils';

import { implementations } from '@/data';
import { Icon } from '@ui/icon';

export const ServicesSidebar = () => {
  return (
    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
      {implementations.map((section, index) => (
        <div
          key={index}
          className={cn(
            'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl',
            'p-6 sm:p-8',
            'shadow-sm hover:shadow-md transition-all'
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <div>
              <Icon
                name={section.icon}
                className="w-10 h-10 text-midnight dark:text-sky"
              />
            </div>
            <h3 className="text-2xl font-bold">{section.title}</h3>
          </div>

          <ul className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center gap-2 text-small text-slate-600 dark:text-slate-300"
              >
                <Icon
                  name="ArrowUpRight"
                  className="w-4 h-4 text-sky dark:text-azure"
                />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};
