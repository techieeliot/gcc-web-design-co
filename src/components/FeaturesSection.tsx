'use client'

import { motion } from '@/lib/animations'
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

const features = [
  {
    title: 'React & Next.js Mastery',
    description:
      'We build high-performing digital solutions with React’s power and Next.js innovation. Our approach is precise and thoughtfully cultivated.',
    icon: CodeXml,
  },
  {
    title: 'Responsive Experiences',
    description:
      'Our designs flow seamlessly across devices—just like nurturing a blueberry crop, our work ensures every touchpoint is naturally engaging.',
    icon: Layers,
  },
  {
    title: 'SEO & Visibility',
    description:
      'We boost your digital presence with smart, sustainable SEO strategies, ensuring your projects grow organically and capture attention.',
    icon: Globe,
  },
  {
    title: 'Intuitive UX/UI',
    description:
      'Merging creative flair with user-first design, we craft experiences that feel as genuine as the first taste of a freshly picked blueberry.',
    icon: PenTool,
  },
  {
    title: 'Performance Optimization',
    description:
      'Through careful refinement and modern techniques, we make sure your site runs smoothly—harvesting peak performance at every stage.',
    icon: Sparkles,
  },
  {
    title: 'Accessible Solutions',
    description:
      'We design for everyone. Our commitment to accessibility ensures your digital product welcomes all users with open arms.',
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
        <h2 className={cn(textStyles.h2, 'mb-4')}>
          Cultivated Digital Solutions
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          We nurture each project with the dedicated care of a blueberry
          orchard—melding React expertise with creativity and a genuine
          commitment to our partners.
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
