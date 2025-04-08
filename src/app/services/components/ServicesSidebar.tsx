'use client';

import { cn } from '@/lib/utils';
import {
  staggeredContainerTransition,
  listItemTransition,
} from '@/lib/animations';
import { implementations } from '@/data';
import { Icon } from '@/components/ui/icon';
import {
  MotionAside,
  MotionDiv,
  MotionUl,
  MotionLi,
} from '@/components/ui/motion-components';

export const ServicesSidebar = () => {
  return (
    <MotionAside
      initial={{ opacity: 0, transform: 'translateX(30px)' }}
      animate={{ opacity: 1, transform: 'translateX(0px)' }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start"
    >
      {implementations.map((section, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          whileHover={{ transform: 'translateY(-5px)' }}
          className={cn(
            'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl',
            'p-6 sm:p-8',
            'shadow-sm hover:shadow-md transition-all'
          )}
        >
          <MotionDiv className="flex items-center gap-3 mb-4">
            <MotionDiv>
              <Icon
                name={section.icon}
                className="w-10 h-10 text-midnight dark:text-sky"
              />
            </MotionDiv>
            <h3 className="text-2xl font-bold">{section.title}</h3>
          </MotionDiv>

          <MotionUl
            variants={staggeredContainerTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {section.items.map((item, itemIndex) => (
              <MotionLi
                key={itemIndex}
                variants={listItemTransition}
                whileHover={{ x: '3px' }}
                className="flex items-center gap-2 text-small text-slate-600 dark:text-slate-300"
              >
                <Icon
                  name="ArrowUpRight"
                  className="w-4 h-4 text-sky dark:text-azure"
                />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {item}
                </span>
              </MotionLi>
            ))}
          </MotionUl>
        </MotionDiv>
      ))}
    </MotionAside>
  );
};
