import { Metadata } from 'next';
import {
  HeroSection,
  FeaturesSection,
  ShowcaseSection,
  CallToActionSection,
  BlogHighlightSection,
} from './components';

export const metadata: Metadata = {
  title: 'React Ecosystem Specialists | SanforDEV Consulting',
  description:
    'Transform your digital presence with high-performance web applications built using React, Next.js, and TypeScript.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SanforDEV Consulting | Modern Web Development Services',
    description:
      'Transform your digital presence with high-performance web applications built using React, Next.js, and TypeScript.',
    url: 'https://devsouth.us',
    images: [
      {
        url: '/images/home-social.webp',
        width: 1200,
        height: 630,
        alt: 'SanforDEV Consulting - React Ecosystem Development Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanforDEV Consulting | Modern Web Development Services',
    description:
      'Transform your digital presence with high-performance web applications.',
    images: ['/images/home-social.webp'],
  },
};

export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BlogHighlightSection />
      <ShowcaseSection />
      <CallToActionSection />
    </div>
  );
}
