'use client';

import { cn } from '@/lib/utils';
import {
  serviceCardVariants,
  iconContainer,
  serviceCardIconAnimation,
  fadeIn,
  staggeredContainerTransition,
  listItemTransition,
} from '@/lib/animations';
import { Service } from '@/data/types';
import { Icon } from '@/components/ui/icon';
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionUl,
  MotionLi,
} from '@/components/ui/motion-components';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <MotionDiv
      custom={index}
      variants={serviceCardVariants}
      whileHover={{ transform: 'translateY(-5px)' }} // Fixed scale to translateY
      transition={{
        duration: 0.2,
        willChange: 'transform',
      }}
      className={cn(
        'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl',
        'p-6 sm:p-8',
        'shadow-sm hover:shadow-md transition-shadow'
      )}
    >
      {/* Icons section */}
      <MotionDiv
        variants={iconContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-4 mb-6"
      >
        {service.icons.map((icon, iconIndex) => (
          <MotionDiv
            key={iconIndex}
            variants={serviceCardIconAnimation}
            whileHover={{
              transform: 'scale(1.2) rotate(5deg)',
              transition: { duration: 0.2 },
            }}
            whileTap={{ transform: 'scale(0.95)' }}
            className="relative group cursor-pointer"
            role="img"
            aria-label={`${service.title} icon ${iconIndex + 1}`}
          >
            <Icon
              name={icon}
              className="w-12 h-12 text-midnight dark:text-sky transition-colors group-hover:text-azure dark:group-hover:text-azure"
              strokeWidth={1.5}
            />
          </MotionDiv>
        ))}
      </MotionDiv>

      <MotionH2 variants={fadeIn} className="text-2xl font-bold mb-3">
        {service.title}
      </MotionH2>

      <MotionP
        variants={fadeIn}
        className="text-base text-slate-600 dark:text-slate-300 mb-6"
      >
        {service.description}
      </MotionP>

      {/* Features list */}
      <MotionUl
        variants={staggeredContainerTransition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-3"
      >
        {service.features.map((feature, featureIndex) => (
          <MotionLi
            key={featureIndex}
            variants={listItemTransition}
            className="flex items-start gap-3 group"
          >
            <Icon
              name="ArrowUpRight"
              className="w-5 h-5 text-sky dark:text-azure flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1"
            />
            <span className="text-small text-slate-600 dark:text-slate-300">
              {feature}
            </span>
          </MotionLi>
        ))}
      </MotionUl>
    </MotionDiv>
  );
}
