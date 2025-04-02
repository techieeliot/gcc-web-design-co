import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'React Ecosystem Specialists | SanforDev Consulting',
  description:
    'Transform your digital presence with high-performance web applications built using React, Next.js, and TypeScript.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SanforDev Consulting | React Ecosystem Specialists',
    description:
      'Transform your digital presence with high-performance web applications built using React, Next.js, and TypeScript.',
    url: 'https://devsouth.us',
    images: [
      {
        url: '/images/home-social.webp',
        width: 1200,
        height: 630,
        alt: 'SanforDev Consulting - React Ecosystem Development Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanforDev Consulting | React Ecosystem Specialists',
    description:
      'Transform your digital presence with high-performance web applications.',
    images: ['/images/home-social.webp'],
  },
}

import ClientHomeContent from '@/components/ClientHomeContent'

export default function HomeRoute() {
  return <ClientHomeContent />
}
