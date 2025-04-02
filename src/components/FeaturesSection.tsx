'use client'

import { componentStyles } from '@/lib/component-styles'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import {
  CodeXml,
  Globe,
  PenTool,
  Sparkles,
  UserCheck,
  Layers,
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'React & Next.js Development',
    description:
      'Building high-performance web applications with the latest React features and Next.js capabilities.',
    icon: CodeXml,
  },
  {
    title: 'Responsive Design',
    description:
      'Creating seamless experiences across all devices with modern, fluid layouts and optimized interfaces.',
    icon: Layers,
  },
  {
    title: 'SEO Optimization',
    description:
      'Implementing best practices to improve search visibility and organic traffic to your digital products.',
    icon: Globe,
  },
  {
    title: 'UX/UI Enhancement',
    description:
      'Crafting intuitive user experiences with thoughtful design that prioritizes usability and engagement.',
    icon: PenTool,
  },
  {
    title: 'Performance Optimization',
    description:
      'Boosting site speed and efficiency through code optimization, lazy loading, and modern best practices.',
    icon: Sparkles,
  },
  {
    title: 'Accessibility Implementation',
    description:
      'Ensuring digital products are usable by people of all abilities through WCAG compliance and testing.',
    icon: UserCheck,
  },
]

export default function FeaturesSection() {
  return (
    <div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={cn(textStyles.h2, 'mb-4')}>Our Core Services</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          We specialize in modern web development technologies to create
          exceptional digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              componentStyles.card,
              'p-6',
              'hover:shadow-md transition-shadow'
            )}
          >
            <div className="rounded-full w-12 h-12 bg-sky/10 dark:bg-azure/10 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-sky dark:text-azure" />
            </div>
            <h3 className={cn(textStyles.h3, 'mb-2')}>{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
