'use client';

import { cn } from '@/lib/utils';
import { Link } from '@ui/link';
import { policyItems } from '@/data';
import { Icon } from '@ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyContent() {
  return (
    <>
      {/* Policy Content */}
      <Card className="max-w-4xl mx-auto bg-white dark:bg-slate-900 overflow-hidden mb-16">
        {/* Introduction Section */}
        <CardHeader className="p-8 border-b border-slate-200 dark:border-slate-800">
          <CardTitle>
            <h2 className={cn('text-2xl md:text-3xl font-bold', 'mb-4')}>
              Introduction
            </h2>
          </CardTitle>
          <p className={cn('text-base leading-relaxed', 'mb-3')}>
            This Privacy Policy applies to all data collected via our website{' '}
            <Link href="/" variant="inlineLink">
              sanfordev.com
            </Link>
            , along with any services or events associated with SANFORDEV
            Consulting.
          </p>
          <p className={cn('text-base leading-relaxed')}>
            By using our website, you agree to the collection and processing of
            your information as described here. Our goal is to protect your
            privacy with the same care we nurture our long-standing client
            relationships.
          </p>
        </CardHeader>

        {/* Policy Items */}
        {policyItems.map((item, index) => (
          <CardContent
            key={item.id}
            className={cn(
              'p-8 border-b border-slate-200 dark:border-slate-800',
              'transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50',
              index === policyItems.length - 1 ? 'border-b-0' : ''
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-sky-100 dark:bg-indigo/10">
                <Icon
                  name={item.icon}
                  className="w-5 h-5 text-sky dark:text-indigo"
                />
              </div>
              <CardTitle>
                <h2
                  className={cn('text-2xl md:text-3xl font-bold')}
                  id={item.id}
                >
                  {item.title}
                </h2>
              </CardTitle>
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
          </CardContent>
        ))}
      </Card>

      {/* Contact Section */}
      <Card className="max-w-2xl mx-auto text-center p-8 bg-white dark:bg-slate-900">
        <CardHeader>
          <div className="mb-4 inline-flex items-center justify-center">
            <div className="p-2 rounded-md bg-sky-100 dark:bg-indigo/10">
              <Icon
                name="Phone"
                className="w-5 h-5 text-sky dark:text-indigo"
              />
            </div>
          </div>
          <CardTitle>
            <h2 className={cn('text-2xl md:text-3xl font-bold', 'mb-4')}>
              Contact Us
            </h2>
          </CardTitle>
          <p className={cn('text-base leading-relaxed', 'mb-6')}>
            If you have any questions about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <div className="space-y-1">
            <p className="text-slate-800 dark:text-frost font-medium">
              SANFORDEV Consulting LLC
            </p>
            <p className="text-slate-600 dark:text-frost/80">
              110 Lake Forest Ln, Clinton, MS 39056
            </p>
            <p className="text-slate-600 dark:text-frost/80">
              <Link href="mailto:hey@sanfor.dev" variant="inlineLink">
                hey@sanfor.dev
              </Link>
            </p>
            <p className="text-slate-600 dark:text-frost/80">
              <Link href="tel:+16623126815" variant="inlineLink">
                +1 (662) 312-6815
              </Link>
            </p>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
