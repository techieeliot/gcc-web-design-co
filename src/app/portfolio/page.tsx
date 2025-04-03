import { Metadata } from 'next'
import { caseStudies } from '@/data/case-studies'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { CaseStudyCard } from './[id]/CaseStudyCard'

export const metadata: Metadata = {
  title: 'Our Work | Case Studies & Development Projects',
  description:
    "Explore our case studies showcasing successful React and Next.js projects. See how we've helped startups and enterprises transform their digital presence.",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Case Studies & Development Projects | SanforDEV Consulting',
    description:
      'Explore our portfolio of successful React and Next.js projects for startups and enterprises.',
    url: 'https://devsouth.us/portfolio',
    images: [
      {
        url: '/images/portfolio-social.webp',
        width: 1200,
        height: 630,
        alt: 'SanforDEV Consulting Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Development Projects | SanforDEV Consulting',
    description:
      'Explore our portfolio of successful React and Next.js projects.',
    images: ['/images/portfolio-social.webp'],
  },
}

export default function PortfolioRoute() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Page Header */}
        <header className="mb-12 lg:mb-16">
          <h1 className={cn(textStyles.h1, 'mb-4 text-center lg:text-left')}>
            Our Work
          </h1>
          <p
            className={cn(
              'text-lg lg:text-xl',
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
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} {...study} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
