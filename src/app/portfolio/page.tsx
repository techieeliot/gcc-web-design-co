import { caseStudies } from '@/data/case-studies'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { CaseStudyCard } from './[id]/CaseStudyCard'

export default function PortfolioRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Page Header */}
        <header className="mb-12 lg:mb-16">
          <h1 className={cn(textStyles.h1, 'mb-4 text-center lg:text-left')}>
            Our Work
          </h1>
          <p
            className={cn(
              'text-lg lg:text-xl', // Use Tailwind classes directly instead of textStyles['body-large']
              'max-w-3xl mx-auto lg:mx-0',
              'text-center lg:text-left',
              'text-slate-600 dark:text-slate-300'
            )}
          >
            Explore our case studies to see how we've helped businesses
            transform their digital presence.
          </p>
        </header>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </div>
  )
}
