import { AboutSection, CompanyFacts, ConnectWithUs } from './components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Unmatched Innovation & Mission',
  description:
    "At SanforDEV Consulting, we're transforming tech into powerful experiences. Since 2018, we've built applications that spark creativity, drive success, and empower communities.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About SanforDEV Consulting | Trailblazing Innovation',
    description:
      'Discover how SanforDEV Consulting turns everyday challenges into extraordinary opportunities with tech designed for performance, accessibility, and impact.',
    url: 'https://devsouth.us/about',
    images: [
      {
        url: '/images/about-social.webp',
        width: 1200,
        height: 630,
        alt: 'About SanforDEV Consulting',
      },
    ],
  },
}

export const revalidate = 3600 // Revalidate every hour

export default function AboutRoute() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <AboutSection />
        </div>

        <div className="lg:col-span-4">
          <div className="space-y-8">
            <CompanyFacts />
            <ConnectWithUs />
          </div>
        </div>
      </div>
    </div>
  )
}
