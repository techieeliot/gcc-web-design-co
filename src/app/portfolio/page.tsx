import { Metadata } from 'next';
import { caseStudies } from '@/data';
import { cn } from '@/lib/utils';
import { CaseStudyCard, PortfolioHero } from './components';
import PageWrapper from '@/components/PageWrapper';

import { ValueProposition } from '../components';

// Metadata configuration
export const metadata: Metadata = {
  title: 'Our Work | SANFORDEV',
  description:
    "Explore our case studies showcasing successful React and Next.js projects. See how we've helped startups and enterprises transform their digital presence.",
  alternates: {
    canonical: '/portfolio',
  },
  keywords: [
    'React project case studies and development solutions and projects',
    'Mississippi-based technology and software development',
    'Websites for startups, businesses, and enterprises',
    'Web applications and software solutions for business growth',
    'Mississippi custom computer programming web development services',
    'SANFORDEV is a Next.js, TypeScript, and React.js ecosystem technical software engineering, responsive web design, and general technology systems consulting business in Clinton, MS near Jackson, Mississippi',
    'JavaScipt remote online computer training and education',
    'Emergency website and general technical support for businesses in the U.S.',
  ],
  openGraph: {
    title: 'Case Studies & Development Projects | SANFORDEV',
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
          <PortfolioHero />
        </div>
      </header>

      {/* Case Studies Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} index={index} {...study} />
        ))}
      </section>
      <section className="w-full px-0 md:px-8 lg:px-32 lg:py-8">
        <ValueProposition />
      </section>
    </PageWrapper>
  );
}
