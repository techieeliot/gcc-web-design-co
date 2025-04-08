'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { containerVariants, itemVariants } from '@/lib/animations';
import { policyItems } from '@/data';
import { Icon } from '@/components/ui/icon';
import { MotionDiv } from '@/components/ui/motion-components';

export default function PrivacyContent() {
  return (
    <>
      {/* Policy Content */}
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden mb-16"
      >
        {/* Introduction Section */}
        <MotionDiv
          variants={itemVariants}
          className="p-8 border-b border-slate-200 dark:border-slate-800"
        >
          <h2 className={cn('text-2xl md:text-3xl font-bold', 'mb-4')}>
            Introduction
          </h2>
          <p className={cn('text-base leading-relaxed', 'mb-3')}>
            This Privacy Policy applies to all data collected via our website{' '}
            <Link href="/" variant="inlineLink">
              devsouth.us
            </Link>
            , along with any services or events associated with SanforDEV
            Consulting.
          </p>
          <p className={cn('text-base leading-relaxed')}>
            By using our website, you agree to the collection and processing of
            your information as described here. Our goal is to protect your
            privacy with the same care we nurture our long-standing client
            relationships.
          </p>
        </MotionDiv>

        {/* Policy Items */}
        {policyItems.map((item, index) => (
          <MotionDiv
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
                <Icon
                  name={item.icon}
                  className="w-5 h-5 text-sky dark:text-azure"
                />
              </div>
              <h2 className={cn('text-2xl md:text-3xl font-bold')} id={item.id}>
                {item.title}
              </h2>
            </div>
            <div className="pl-10">
              {item.content.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className={cn(
                    'text-base leading-relaxed',
                    'mb-3 whitespace-pre-line'
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>

      {/* Contact Section */}
      <MotionDiv
        initial={{ opacity: 0, transform: 'translateY(30px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="max-w-2xl mx-auto text-center p-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg"
      >
        <div className="mb-4 inline-flex items-center justify-center">
          <div className="p-2 rounded-md bg-sky/10 dark:bg-azure/10">
            <Icon name="Phone" className="w-5 h-5 text-sky dark:text-azure" />
          </div>
        </div>
        <h2 className={cn('text-2xl md:text-3xl font-bold', 'mb-4')}>
          Contact Us
        </h2>
        <p className={cn('text-base leading-relaxed', 'mb-6')}>
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
      </MotionDiv>
    </>
  );
}
