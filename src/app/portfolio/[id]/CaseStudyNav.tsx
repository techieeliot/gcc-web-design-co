'use client'

import { caseStudies } from '@/data/case-studies'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { textStyles } from '@/lib/text-styles'

export function CaseStudyNav({ currentId }: { currentId: string }) {
  const currentIndex = caseStudies.findIndex((study) => study.id === currentId)
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const nextCase =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/portfolio"
        className={cn(
          'flex items-center mb-4 sm:mb-0 gap-2',
          'text-slate-600 dark:text-slate-300 hover:text-sky dark:hover:text-azure',
          'transition-colors'
        )}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Case Studies</span>
      </Link>

      <div className="flex gap-4">
        {prevCase && (
          <Link
            href={`/portfolio/${prevCase.id}`}
            className={cn(
              'flex items-center gap-2 text-sm',
              'text-slate-600 dark:text-slate-300 hover:text-sky dark:hover:text-azure',
              'transition-colors'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">Previous:</span>
            <span className="truncate max-w-[100px] md:max-w-[200px]">
              {prevCase.title}
            </span>
          </Link>
        )}

        {nextCase && (
          <Link
            href={`/portfolio/${nextCase.id}`}
            className={cn(
              'flex items-center gap-2 text-sm',
              'text-slate-600 dark:text-slate-300 hover:text-sky dark:hover:text-azure',
              'transition-colors'
            )}
          >
            <span className="truncate max-w-[100px] md:max-w-[200px]">
              {nextCase.title}
            </span>
            <span className="hidden md:inline">:Next</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
