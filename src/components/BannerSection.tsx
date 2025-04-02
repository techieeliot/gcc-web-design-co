'use client'

import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { Code, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function BannerSection() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure rounded-full mb-4"
          >
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span className="text-sm font-semibold">
                React & Next.js Specialists
              </span>
            </div>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={cn(textStyles.h1, 'max-w-lg mb-6 leading-tight')}
          >
            Expert Web Development for Digital Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-lg mb-8"
          >
            We build high-performance web applications with modern technologies
            to help businesses succeed in the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="bg-sky hover:bg-sky/90 text-white dark:bg-azure dark:hover:bg-azure/90 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 to-slate/10 dark:from-white/20 dark:to-sky/20" />
            <Image
              src="blueberry-atom.svg"
              alt="Web development illustration"
              fill
              className="object-contain object-center transition-transform duration-500 ease-in-out hover:scale-60 scale-50" // scale down the image to 75% of its original size
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
