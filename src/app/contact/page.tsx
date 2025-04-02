'use client'

import { Suspense } from 'react'
import { Mail } from 'lucide-react'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Contact Us | Get a Free Consultation',
//   description:
//     'Ready to transform your digital presence? Contact SanforDev Consulting for React and Next.js development services. Get in touch for a free consultation.',
//   alternates: {
//     canonical: '/contact',
//   },
//   openGraph: {
//     title: 'Contact SanforDev Consulting | Get a Free Consultation',
//     description:
//       'Ready to transform your digital presence? Contact us for React and Next.js development services.',
//     url: 'https://devsouth.us/contact',
//     images: [
//       {
//         url: '/images/contact-social.webp',
//         width: 1200,
//         height: 630,
//         alt: 'Contact SanforDev Consulting',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Contact SanforDev Consulting | Get a Free Consultation',
//     description: 'Ready to transform your digital presence? Contact us today.',
//     images: ['/images/contact-social.webp'],
//   },
// }

// Use dynamic import with ssr: false to force client-only rendering of form components
const ContactSidebar = dynamic(() => import('./components/sidebar'), {
  ssr: false,
})
const ContactForm = dynamic(() => import('./components/form'), { ssr: false })

export default function ContactRoute() {
  return (
    <div className="min-h-screen pt-8 lg:pt-16 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section - this can stay as server-rendered */}
        <div className="text-center mb-12 lg:mb-20 relative">
          {/* Decorative gradient circles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute right-1/2 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-azure/20 via-transparent to-transparent blur-3xl" />
            <div className="absolute left-1/2 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky/20 via-transparent to-transparent blur-3xl" />
          </div>

          {/* Hero content with icon */}
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-slate p-4 shadow-lg">
              <Mail className="w-8 h-8 text-powder" />
            </div>

            <h1 className={cn(textStyles.h1, 'mb-4')}>Contact Us</h1>

            <p className="text-xl text-slate-600 dark:text-powder/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? We're here to help you
              build something amazing.
            </p>
          </div>
        </div>

        {/* Form section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <Suspense
            fallback={
              <div className="lg:col-span-4 h-20 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg"></div>
            }
          >
            <ContactSidebar />
          </Suspense>
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="h-60 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg"></div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
