import { Metadata } from 'next';
import { caseStudies } from '@/data';
import { cn } from '@/lib/utils';
import { CaseStudyCard } from './[id]/CaseStudyCard';
import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { generateBlurPlaceholder } from '@/lib/image';
import { Suspense } from 'react';
import { Shimmer } from '@ui/shimmer';
import { ValueProposition } from '../components';

// Metadata configuration
export const metadata: Metadata = {
  title: 'Our Work | Case Studies & Development Projects',
  description:
    "Explore our case studies showcasing successful React and Next.js projects. See how we've helped startups and enterprises transform their digital presence.",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Case Studies & Development Projects | SANFORDEV Consulting',
    description:
      'Explore our portfolio of successful React and Next.js projects for startups and enterprises.',
    url: 'https://sanfordev.com/portfolio',
    images: [
      {
        url: '/images/portfolio-social.webp',
        width: 1200,
        height: 630,
        alt: 'SANFORDEV Consulting Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Development Projects | SANFORDEV Consulting',
    description:
      'Explore our portfolio of successful React and Next.js projects.',
    images: ['/images/portfolio-social.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function PortfolioRoute() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <header>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center lg:text-left">
          Our Work
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
          {/* Description paragraph */}
          <p
            className={cn(
              'text-lg lg:text-xl',
              'max-w-3xl order-2 lg:order-1',
              'text-center lg:text-left',
              'text-slate-600 dark:text-slate-300'
            )}
          >
            At SANFORDEV Consulting, we blend a city boy's sensibility with deep
            agrarian roots. We cultivate genuine relationships and gather top
            talent and trusted partners to nurture every project from idea to
            reality. Explore our case studies to see how we help businesses
            grow—rooted in authenticity, care, and a forward-thinking approach.
          </p>
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <Suspense fallback={<Shimmer width={400} height={300} />}>
              <Image
                src="/images/pic14.webp"
                alt="SANFORDEV Portfolio"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 400px"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(400, 300)}
              />
            </Suspense>
          </div>
        </div>
      </header>

      {/* Case Studies Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} index={index} {...study} />
        ))}
      </section>
      <section
        // reduce the width of the section to 100% to make it full width
        className="w-full rounded-xl p-6 md:p-8 lg:p-32 shadow-lg"
      >
        <ValueProposition />
      </section>
    </PageWrapper>
  );
}
