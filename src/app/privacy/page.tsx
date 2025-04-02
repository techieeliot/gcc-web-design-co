'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Bell,
  Users,
  Cookie,
  Phone,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { textStyles } from '@/lib/text-styles'
import { Link } from '@/components/ui/link'

export default function PrivacyPolicyRoute() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const policyItems = [
    {
      id: 'information',
      title: 'Information We Collect',
      icon: Eye,
      content: `We collect information you provide directly to us when you fill out contact forms, subscribe to newsletters, or communicate with us. This information may include:
        
        • Name, email address, and phone number
        • Company name and job title
        • Project requirements and business needs
        • IP address and device information
        • Any other information you choose to provide`,
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: FileText,
      content: `We use the information we collect to:
        
        • Provide, maintain, and improve our services
        • Process and complete transactions
        • Send you technical notices and support messages
        • Respond to your comments, questions, and requests
        • Communicate with you about products, services, and events
        • Monitor and analyze trends, usage, and activities
        • Personalize and improve your experience`,
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: Users,
      content: `We may share your information with:
        
        • Service providers who perform services on our behalf
        • Professional advisors such as lawyers, accountants, and insurers
        • Regulatory authorities, government agencies, and law enforcement
        
        We do not sell your personal information to third parties.`,
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Lock,
      content: `We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. These measures include:
        
        • Encryption of data in transit using SSL
        • Regular security assessments
        • Access controls and authentication procedures
        • Server-side data protection mechanisms`,
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: Cookie,
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
        
        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`,
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: Shield,
      content: `Depending on your location, you may have certain rights regarding your personal information, including:
        
        • Access to your personal information
        • Correction of inaccurate information
        • Deletion of your information
        • Restriction of processing
        • Data portability
        • Objection to processing
        
        To exercise any of these rights, please contact us using the information provided below.`,
    },
    {
      id: 'updates',
      title: 'Updates to this Policy',
      icon: Bell,
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
        
        We will let you know via email and/or a prominent notice on our website, prior to the change becoming effective.`,
    },
  ]

  return (
    <div className="min-h-screen pt-20 lg:pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20 relative"
        >
          {/* Decorative gradient circles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute right-1/2 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-azure/20 via-transparent to-transparent blur-3xl" />
            <div className="absolute left-1/2 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky/20 via-transparent to-transparent blur-3xl" />
          </div>

          {/* Hero content with icon */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="rounded-full bg-slate p-4 shadow-lg"
            >
              <Shield className="w-8 h-8 text-powder" />
            </motion.div>

            <h1 className={cn(textStyles.h1, 'mb-4')}>Privacy Policy</h1>

            <p className="text-xl text-slate-600 dark:text-powder/80 max-w-2xl mx-auto">
              At devSouth, we take your privacy seriously. This policy explains
              how we collect, use, and protect your personal information.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-slate-500 dark:text-slate-400 mt-2"
            >
              Last Updated: April 1, 2025
            </motion.div>
          </div>
        </motion.div>

        {/* Policy Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden mb-16"
        >
          {/* Introduction Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 border-b border-slate-200 dark:border-slate-800"
          >
            <h2 className={cn(textStyles.h3, 'mb-4')}>Introduction</h2>
            <p className={cn(textStyles.body, 'mb-3')}>
              This Privacy Policy applies to all information collected through
              our website{' '}
              <Link href="/" variant="inlineLink">
                devsouth.us
              </Link>
              , and any related services, sales, marketing, or events.
            </p>
            <p className={cn(textStyles.body)}>
              By accessing our website and using our services, you consent to
              the collection, processing, and storage of your information as
              described in this Privacy Policy. Please read this policy
              carefully to understand our practices regarding your personal
              information.
            </p>
          </motion.div>

          {/* Policy Items */}
          {policyItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={cn(
                'p-8 border-b border-slate-200 dark:border-slate-800',
                'transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50',
                index === policyItems.length - 1 ? 'border-b-0' : ''
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-sky/10 dark:bg-azure/10">
                  <item.icon className="w-5 h-5 text-sky dark:text-azure" />
                </div>
                <h2 className={cn(textStyles.h3)} id={item.id}>
                  {item.title}
                </h2>
              </div>
              <div className="pl-10">
                {item.content.split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={cn(textStyles.body, 'mb-3 whitespace-pre-line')}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="max-w-2xl mx-auto text-center p-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg"
        >
          <div className="mb-4 inline-flex items-center justify-center">
            <div className="p-2 rounded-md bg-sky/10 dark:bg-azure/10">
              <Phone className="w-5 h-5 text-sky dark:text-azure" />
            </div>
          </div>
          <h2 className={cn(textStyles.h3, 'mb-4')}>Contact Us</h2>
          <p className={cn(textStyles.body, 'mb-6')}>
            If you have any questions about this Privacy Policy, your personal
            information, or how to exercise your rights, please contact us at:
          </p>
          <div className="space-y-1">
            <p className="text-slate-800 dark:text-powder font-medium">
              Sanford Dev Consulting LLC
            </p>
            <p className="text-slate-600 dark:text-powder/80">
              110 Lake Forest Ln, Clinton, MS 39056
            </p>
            <p className="text-slate-600 dark:text-powder/80">
              <Link href="mailto:devsouth.us@gmail.com" variant="inlineLink">
                devsouth.us@gmail.com
              </Link>
            </p>
            <p className="text-slate-600 dark:text-powder/80">
              <Link href="tel:+16623126815" variant="inlineLink">
                +1 (662) 312-6815
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
