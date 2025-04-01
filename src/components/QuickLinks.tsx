'use client'

import { Link } from './ui/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  ChevronRight,
  Home,
  Info,
  Settings,
  Mail,
  Code,
  FileCode,
  LayoutGrid,
} from 'lucide-react'

export default function QuickLinks({
  showHeading = false,
  columnsOnMobile = false,
}) {
  const links = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      description: 'Back to our homepage',
    },
    {
      href: '/about',
      label: 'About',
      icon: Info,
      description: 'Learn more about us',
    },
    {
      href: '/services',
      label: 'Services',
      icon: Settings,
      description: 'What we can do for you',
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
      icon: LayoutGrid,
      description: 'See our past work',
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: FileCode,
      description: 'Latest tech insights',
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: Mail,
      description: 'Get in touch with us',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <div
      className={cn(
        'text-center sm:text-left w-full',
        showHeading ? 'mb-4' : 'mb-0'
      )}
    >
      {showHeading && (
        <motion.h3
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-800 dark:text-powder text-lg font-semibold mb-3"
        >
          Quick Links
        </motion.h3>
      )}

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={cn(
          // Single column layout that's more elegant
          'space-y-1.5',
          // Center on mobile, left-align on larger screens
          'flex flex-col items-center sm:items-start'
        )}
      >
        {links.map(({ href, label, icon: Icon, description }) => (
          <motion.li
            key={href}
            variants={itemVariants}
            whileHover={{ x: 3 }}
            className="w-full"
          >
            <Link
              href={href}
              variant="standaloneLink"
              className={cn(
                'group flex items-center gap-2',
                'py-1 px-2 rounded-md',
                'hover:bg-sky/5 dark:hover:bg-azure/5',
                'transition-colors duration-200',
                'text-slate-700 dark:text-slate-300',
                'hover:text-sky dark:hover:text-azure'
              )}
            >
              <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-sky dark:group-hover:text-azure transition-colors" />

              <span className="font-medium">{label}</span>

              <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-600 group-hover:text-sky dark:group-hover:text-azure opacity-0 group-hover:opacity-100 transition-all ml-auto" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
