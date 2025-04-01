'use client'

import Image from 'next/image'
import {
  Code2,
  Rocket,
  Globe,
  SearchCode,
  PenTool,
  LayoutGrid,
  MonitorSmartphone,
  Gauge,
  ArrowUpRight,
  ServerCog,
  BookOpen,
  Laptop,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { componentStyles } from '@/lib/component-styles'
import { textStyles } from '@/lib/text-styles'
import { motion } from 'framer-motion'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const featureItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
}

const iconContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const iconAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 12,
    },
  },
}

export const ServicesMainContent = () => {
  const services = [
    {
      title: 'Next.js Application Development',
      description:
        'Modern web applications built with the latest Next.js features including:',
      features: [
        'Server-side rendering for optimal performance',
        'Static site generation for blazing fast pages',
        'API routes for backend functionality',
        'Image optimization and responsive design',
        'Advanced routing with dynamic segments',
      ],
      icons: [Globe, ServerCog, Gauge],
    },
    {
      title: 'React Component Architecture',
      description: 'Professional React development emphasizing:',
      features: [
        'Reusable UI components with Tailwind CSS',
        'Custom hooks for shared logic',
        'State management best practices',
        'Responsive layouts using CSS Grid/Flexbox',
        'Accessibility-first development',
      ],
      icons: [LayoutGrid, PenTool, MonitorSmartphone],
    },
  ]

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="lg:col-span-8 space-y-8"
    >
      <motion.div
        variants={imageVariant}
        className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg"
      >
        <Image
          src="/images/pic02.webp"
          alt="Modern development workspace"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-sky/40 to-azure/30 dark:from-sky/50 dark:to-azure/40 flex items-center justify-center gap-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Code2
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Rocket
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <SearchCode
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {services.map((service, index) => (
        <motion.div
          key={index}
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
              >
                <Icon
                  className="w-6 h-6 text-sky dark:text-azure"
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
                className="flex items-start gap-3"
              >
                <ArrowUpRight className="w-5 h-5 text-sky dark:text-azure flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.main>
  )
}

export const ServicesSidebar = () => {
  const implementations = [
    {
      title: 'Technical Features',
      icon: Laptop,
      items: [
        'Server Components',
        'Client Components',
        'Dynamic Routing',
        'Image Optimization',
        'API Integration',
      ],
    },
    {
      title: 'Documentation',
      icon: BookOpen,
      items: [
        'Component Library',
        'API Documentation',
        'Style Guide',
        'Best Practices',
        'Performance Tips',
      ],
    },
  ]

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
            >
              <section.icon className="w-5 h-5 text-sky dark:text-azure" />
            </motion.div>
            <h3 className={textStyles.h3}>{section.title}</h3>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {section.items.map((item, itemIndex) => (
              <motion.li
                key={itemIndex}
                variants={featureItem}
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
