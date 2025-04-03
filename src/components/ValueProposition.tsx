'use client'

import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CheckCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Expert React & Next.js development',
  'Performance optimization focus',
  'Responsive design across all devices',
  'Accessible, SEO-friendly structures',
  'Scalable, maintainable codebases',
  'Modern tooling and best practices',
]

export default function ValueProposition() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(textStyles.h2, 'mb-4')}
        >
          Why Choose SanforDEV Consulting?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-slate-300 mb-8"
        >
          We're dedicated to transforming your digital vision into reality with
          a focus on technical excellence, user experience, and business
          outcomes.
        </motion.p>
      </motion.div>

      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {benefits.map((benefit, index) => (
          <motion.li
            key={benefit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-sky dark:text-azure flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              {benefit}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
      >
        <h3 className={cn(textStyles.h3, 'mb-3')}>Our Approach</h3>

        <p className="text-slate-600 dark:text-slate-300 mb-4">
          We focus on understanding your business goals first, then crafting
          technical solutions that deliver measurable results.
        </p>

        <Link
          href="/services"
          className="text-sky dark:text-azure flex items-center gap-1 font-medium group"
        >
          Learn about our services
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-sky/10 dark:bg-azure/10 p-6 rounded-lg border border-sky/20 dark:border-azure/20"
      >
        <p className="text-slate-700 dark:text-slate-200 italic mb-4">
          "SanforDEV transformed our digital presence by creating a fast,
          responsive, and user-friendly platform that has significantly improved
          our customer engagement."
        </p>

        <div className="flex items-center gap-2 text-sky dark:text-azure">
          <span className="font-semibold">Melissa Brogdan</span>
          <span className="text-slate-400">|</span>
          <span className="text-sm">Co-Owner, Fourth Party</span>
        </div>
      </motion.div>
    </div>
  )
}
