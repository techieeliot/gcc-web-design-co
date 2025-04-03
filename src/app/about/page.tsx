import { AboutSection, CompanyFacts, ConnectWithUs } from './components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Our Story, Mission & Experience',
  description:
    "Learn about SanforDEV Consulting's mission to build remarkable applications that empower people through technology. Founded in 2018, we focus on performance, accessibility, and innovation.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About SanforDEV Consulting | Our Story & Mission',
    description:
      'Founded in 2018, SanforDEV Consulting specializes in building remarkable applications that empower people through technology.',
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
