'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Use dynamic imports to solve loading issues
const BannerSection = dynamic(
  () => import('@/components/BannerSection').then((mod) => mod.default),
  { ssr: true }
)
const FeaturesSection = dynamic(
  () => import('@/components/FeaturesSection').then((mod) => mod.default),
  { ssr: true }
)
const ProjectShowcase = dynamic(
  () => import('@/components/ProjectShowcase').then((mod) => mod.default),
  { ssr: true }
)
const ValueProposition = dynamic(
  () => import('@/components/ValueProposition').then((mod) => mod.default),
  { ssr: true }
)

export default function HomeRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Hero section - full width, no container constraints */}
      <section className="relative">
        <BannerSection />

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-sky/10 dark:bg-azure/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-sky/10 dark:bg-azure/10 rounded-full blur-3xl" />
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Features section with enhanced spacing */}
        <motion.section
          className="py-16 lg:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <FeaturesSection />
        </motion.section>

        {/* Showcase and value proposition with improved grid */}
        <motion.section
          className="py-12 lg:py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Project showcase - appears first on mobile, second on desktop */}
            <motion.div
              className="lg:col-span-5 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-8">
                <ProjectShowcase />
              </div>
            </motion.div>

            {/* Value proposition - appears second on mobile, first on desktop */}
            <motion.div
              className="lg:col-span-7 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <ValueProposition />
            </motion.div>
          </div>
        </motion.section>

        {/* CTA section */}
        <motion.section
          className="py-16 lg:py-24 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={cn(
              'bg-gradient-to-r from-sky/90 to-azure/90 dark:from-sky/80 dark:to-azure/80',
              'rounded-2xl p-8 lg:p-12 text-white',
              'shadow-lg',
              'relative overflow-hidden'
            )}
          >
            {/* Decorative background element */}
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-white/10 rounded-full" />
            <div className="absolute -left-32 -top-32 w-64 h-64 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to transform your digital presence?
              </h2>
              <p className="text-lg lg:text-xl mb-8 max-w-2xl">
                Whether you're looking to launch a new product or enhance an
                existing one, we have the expertise to help you succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-sky hover:bg-slate-100 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
