'use client'

import { motion } from '@/lib/animations'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <div className="mb-8 flex justify-center text-9xl">🫐</div>

        <h1 className={cn(textStyles.h1, 'mb-6')}>404 - Page Not Found</h1>
        <p className={cn(textStyles.body, 'mb-8')}>
          Whoops! It seems you've wandered off the beaten path and landed in our
          blueberry patch. Don’t fret—sometimes the best adventures are
          unplanned. Let’s get you back home and back on track.
        </p>

        <Link
          href="/"
          className={cn(
            'inline-flex items-center gap-2',
            'px-6 py-3 rounded-lg',
            'bg-sky hover:bg-sky/90 dark:bg-azure dark:hover:bg-azure/90',
            'text-white font-medium',
            'transition-colors'
          )}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
