'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { textStyles } from '@/lib/text-styles'
import { componentStyles } from '@/lib/component-styles'
import type { Service } from '../types'
import {
  iconContainer,
  iconAnimation,
  staggerContainer,
  featureItem,
  fadeIn,
  cardVariant,
} from '../animations'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        componentStyles.card,
        'p-6 sm:p-8',
        'shadow-sm hover:shadow-md transition-shadow'
      )}
    >
      <motion.div
        variants={iconContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-4 mb-6"
      >
        {service.icons.map((Icon, iconIndex) => (
          <motion.div
            key={iconIndex}
            variants={iconAnimation}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            role="img"
            aria-label={`${service.title} icon ${iconIndex + 1}`}
          >
            <Icon
              className="w-12 h-12 text-midnight dark:text-sky transition-colors group-hover:text-azure dark:group-hover:text-azure"
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.h2 variants={fadeIn} className={cn(textStyles.h2, 'mb-3')}>
        {service.title}
      </motion.h2>

      <motion.p
        variants={fadeIn}
        className={cn(
          textStyles.body,
          'mb-6 text-slate-600 dark:text-slate-300'
        )}
      >
        {service.description}
      </motion.p>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-3"
      >
        {service.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            variants={featureItem}
            className="flex items-start gap-3 group"
          >
            <ArrowUpRight className="w-5 h-5 text-sky dark:text-azure flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
            <span className="text-slate-600 dark:text-slate-300">
              {feature}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
