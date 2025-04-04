'use client'

import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { textStyles } from '@/lib/text-styles'
import { componentStyles } from '@/lib/component-styles'
import { implementations } from '../data/implementations'
import {
  motion,
  staggeredContainerTransition,
  listItemTransition,
} from '@/lib/animations'

export const ServicesSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 self-start"
    >
      {implementations.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          whileHover={{ y: -5 }}
          className={cn(
            componentStyles.card,
            'p-6 sm:p-8',
            'shadow-sm hover:shadow-md transition-all'
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              tabIndex={-1}
            >
              <section.icon className="w-10 h-10 text-midnight dark:text-sky" />
            </motion.div>
            <h3 className={textStyles.h3}>{section.title}</h3>
          </motion.div>

          <motion.ul
            variants={staggeredContainerTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {section.items.map((item, itemIndex) => (
              <motion.li
                key={itemIndex}
                variants={listItemTransition}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
              >
                <ArrowUpRight className="w-4 h-4 text-sky dark:text-azure" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.aside>
  )
}
