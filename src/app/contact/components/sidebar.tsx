'use client'

import { Mail, MapPin, Clock, Globe, Linkedin, Twitter } from 'lucide-react'
import { cn } from 'lib/utils'
import { textStyles } from 'lib/text-styles'
import { motion } from 'framer-motion'
import { Link } from '@/components/ui/link'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -20 },
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

const iconAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

export default function ContactSidebar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="lg:col-span-4 space-y-6"
    >
      {/* Contact Info Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'p-6 rounded-lg shadow-md',
          'bg-white dark:bg-slate-900',
          'border border-slate-200 dark:border-slate-800'
        )}
      >
        <section>
          <motion.h3 variants={fadeIn} className={textStyles.h3}>
            Get In Touch
          </motion.h3>

          <motion.p variants={fadeIn} className={cn(textStyles.body, 'mb-6')}>
            Have a project in mind or questions for us? Reach out today and
            let's discuss how we can help your business grow.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Contact Details */}
            <motion.div variants={listItem} className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-sky dark:text-azure mt-1" />
              <div>
                <p className={textStyles.label}>Email</p>
                <a
                  href="mailto:devsouth.us@gmail.com"
                  className="text-slate-600 dark:text-powder/80 hover:text-sky dark:hover:text-azure transition-colors"
                >
                  devsouth.us@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={listItem} className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky dark:text-azure mt-1" />
              <div>
                <p className={textStyles.label}>Location</p>
                <p className={textStyles.body}>Remote-first company</p>
                <p className={textStyles.body}>Based in Jackson, MS</p>
              </div>
            </motion.div>

            <motion.div variants={listItem} className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-sky dark:text-azure mt-1" />
              <div>
                <p className={textStyles.label}>Business Hours</p>
                <p className={textStyles.body}>Monday - Friday</p>
                <p className={textStyles.body}>9:00 AM - 5:00 PM EST</p>
              </div>
            </motion.div>

            <motion.div variants={listItem} className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-sky dark:text-azure mt-1" />
              <div>
                <p className={textStyles.label}>Service Area</p>
                <p className={textStyles.body}>United States & International</p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>

      {/* Social Links Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'p-6 rounded-lg shadow-md',
          'bg-white dark:bg-slate-900',
          'border border-slate-200 dark:border-slate-800'
        )}
      >
        <motion.h4 variants={fadeIn} className={textStyles.h4}>
          Connect With Us
        </motion.h4>

        <div className="flex gap-4 mt-4">
          <motion.div variants={iconAnimation}>
            <Link
              href="https://www.linkedin.com/company/devsouth-consulting-llc/"
              variant="nav"
              className={cn(
                'p-2 rounded-full inline-flex',
                'hover:bg-sky/10 dark:hover:bg-azure/10',
                'transition-colors'
              )}
            >
              <Linkedin className="w-6 h-6 text-sky dark:text-azure" />
            </Link>
          </motion.div>

          <motion.div variants={iconAnimation}>
            <Link
              href="https://x.com/devSouthDotUs"
              variant="nav"
              className={cn(
                'p-2 rounded-full inline-flex',
                'hover:bg-sky/10 dark:hover:bg-azure/10',
                'transition-colors'
              )}
            >
              <Twitter className="w-6 h-6 text-sky dark:text-azure" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
