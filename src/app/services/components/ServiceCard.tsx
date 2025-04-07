"use client";

import { cn } from "@/lib/utils";
import {
  serviceCardVariants,
  iconContainer,
  serviceCardIconAnimation,
  fadeIn,
  staggeredContainerTransition,
  listItemTransition,
  motion,
} from "@/lib/animations";
import { Service } from "@/data/types";
import { Icon } from "@/components/ui/icon";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      variants={serviceCardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl",
        "p-6 sm:p-8",
        "shadow-sm hover:shadow-md transition-shadow",
      )}
    >
      {/* Icons section */}
      <motion.div
        variants={iconContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-4 mb-6"
      >
        {service.icons.map((icon, iconIndex) => (
          <motion.div
            key={iconIndex}
            variants={serviceCardIconAnimation}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            role="img"
            aria-label={`${service.title} icon ${iconIndex + 1}`}
          >
            <Icon
              name={icon}
              className="w-12 h-12 text-midnight dark:text-sky transition-colors group-hover:text-azure dark:group-hover:text-azure"
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-3">
        {service.title}
      </motion.h2>

      <motion.p
        variants={fadeIn}
        className="text-base text-slate-600 dark:text-slate-300 mb-6"
      >
        {service.description}
      </motion.p>

      {/* Features list */}
      <motion.ul
        variants={staggeredContainerTransition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-3"
      >
        {service.features.map((feature, featureIndex) => (
          <motion.li
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
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
