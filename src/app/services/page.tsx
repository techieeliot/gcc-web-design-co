import { Metadata } from 'next'
import { ServicesMainContent, ServicesSidebar } from './components'

export const metadata: Metadata = {
  title: 'Our Services | React & Next.js Development',
  description:
    'Specialized React ecosystem services including front-end development, performance optimization, UI/UX implementation, and technical consulting for startups and enterprises.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'React & Next.js Development Services | SanforDEV Consulting',
    description:
      'From front-end development to performance optimization, we offer specialized React ecosystem services for modern web applications.',
    url: 'https://devsouth.us/services',
    images: [
      {
        url: '/images/services-social.webp',
        width: 1200,
        height: 630,
        alt: 'React & Next.js Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React & Next.js Development Services | SanforDEV Consulting',
    description:
      'Specialized React ecosystem services for modern web applications.',
    images: ['/images/services-social.webp'],
  },
}

export default function ServicesRoute() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <header className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            We specialize in modern web development focusing on React ecosystem
            technologies.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <ServicesMainContent />
          <ServicesSidebar />
        </div>
      </div>
    </div>
  )
}
