'use client'

import { Mail, MapPin, Clock, Globe, Linkedin, Twitter } from 'lucide-react'
import { cn } from 'lib/utils'
import { textStyles } from 'lib/text-styles'
import { Link } from '@/components/ui/link'
import {
  fadeInAnimation,
  motion,
  sidebarListItemAnimation,
  staggeredContainerTransition,
} from '@/lib/animations'

// Animation variants

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
      variants={fadeInAnimation}
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
          <motion.h3 variants={fadeInAnimation} className={textStyles.h3}>
            Let's Create Meaningful Change
          </motion.h3>

          <motion.p
            variants={fadeInAnimation}
            className={cn(textStyles.body, 'mb-6')}
          >
            Ready to spark breakthrough ideas? Reach out and let's work together
            to turn your vision into reality. We’re here to listen, advise, and
            support you every step of the way. And if our brainstorming ever
            gets too serious, we'll lighten the mood with a coffee pun or two
            ☕.
          </motion.p>

          <motion.div
            variants={staggeredContainerTransition}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Contact Details */}
            <motion.div
              variants={sidebarListItemAnimation}
              className="flex items-start gap-3"
            >
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

            <motion.div
              variants={sidebarListItemAnimation}
              className="flex items-start gap-3"
            >
              <MapPin className="w-5 h-5 text-sky dark:text-azure mt-1" />
              <div>
                <p className={textStyles.label}>Location</p>
                <p className={textStyles.body}>Remote-first company</p>
                <p className={textStyles.body}>Based in Jackson, MS</p>
              </div>
            </motion.div>

            <motion.div
              variants={sidebarListItemAnimation}
              className="flex items-start gap-3"
            >
              <Clock className="w-5 h-5 text-sky dark:text-azure mt-1" />
              <div>
                <p className={textStyles.label}>Business Hours</p>
                <p className={textStyles.body}>Monday - Friday</p>
                <p className={textStyles.body}>9:00 AM - 5:00 PM EST</p>
              </div>
            </motion.div>

            <motion.div
              variants={sidebarListItemAnimation}
              className="flex items-start gap-3"
            >
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
        <motion.h4 variants={fadeInAnimation} className={textStyles.h4}>
          Connect and Collaborate
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
