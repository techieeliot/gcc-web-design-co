'use client'

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
import { containerVariants, itemVariants, motion } from '@/lib/animations'

export default function PrivacyContent() {
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
        
• Provide and improve our services
• Process and complete transactions
• Send technical notices and support messages
• Respond to your comments and requests
• Share updates about products, services, and events
• Analyze trends and personalize your experience`,
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: Users,
      content: `We may share your information with:
        
• Service providers who support our operations
• Professional advisors like lawyers, accountants, and insurers
• Regulatory authorities, government agencies, and law enforcement
        
We do not sell your personal information.`,
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Lock,
      content: `We take reasonable measures to protect your information from unauthorized access or mishandling. Our measures include:
        
• Data encryption in transit using SSL
• Regular security assessments
• Strict access controls and authentication
• Server-side data protection mechanisms`,
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: Cookie,
      content: `We use cookies and similar technologies to track activity on our website and retain certain data. Cookies are small pieces of data that may include an anonymous unique identifier.
        
You can instruct your browser to refuse cookies, though some parts of our website might not function properly.`,
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: Shield,
      content: `Depending on your location, you may have rights regarding your personal information, including:
        
• Access, correction, or deletion
• Restricting processing or objecting to certain uses
• Data portability
        
Contact us to exercise any rights you have.`,
    },
    {
      id: 'updates',
      title: 'Updates to this Policy',
      icon: Bell,
      content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page along with a revised "Last Updated" date.
        
We will also provide notice via email and/or a prominent notice on our website before changes take effect.`,
    },
    {
      id: 'legal',
      title: 'Contractual Provisions',
      icon: FileText,
      content: `Our engagements are supported by a comprehensive framework—including a Statement of Work (SOW) and corresponding legal agreements—that outlines scope, deliverables, payment terms, and confidentiality requirements. These provisions ensure mutual accountability and clarity at every stage. Please note that any changes outside the agreed scope may incur additional fees, and all legal matters are governed by the laws of Mississippi. Our standard NDA template is available upon request.`,
    },
  ]

  return (
    <>
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
            This Privacy Policy applies to all data collected via our website{' '}
            <Link href="/" variant="inlineLink">
              devsouth.us
            </Link>
            , along with any services or events associated with SanforDEV
            Consulting.
          </p>
          <p className={cn(textStyles.body)}>
            By using our website, you agree to the collection and processing of
            your information as described here. Our goal is to protect your
            privacy with the same care we nurture our long-standing client
            relationships.
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
          If you have any questions about this Privacy Policy or our practices,
          please contact us at:
        </p>
        <div className="space-y-1">
          <p className="text-slate-800 dark:text-powder font-medium">
            SanforDEV Consulting LLC
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
    </>
  )
}
