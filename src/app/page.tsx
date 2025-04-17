import { Metadata } from 'next';
import { Suspense } from 'react';
import {
  HeroSection,
  FeaturesSection,
  ShowcaseSection,
  CallToActionSection,
  BlogHighlightSection,
} from './components';
import Loading from './loading';
import PageWrapper from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Welcome | SANFORDEV',
  description:
    'Transform your digital presence with high-performance web applications built using React, Next.js, and TypeScript.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SANFORDEV Consulting | Modern Web Development Services',
    description:
      'Transform your digital presence with high-performance web applications built using React, Next.js, and TypeScript.',
    url: 'https://sanfordev.com',
    images: [
      {
        url: '/images/home-social.webp',
        width: 1200,
        height: 630,
        alt: 'SANFORDEV Consulting - React Ecosystem Development Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SANFORDEV | Modern Web Development Services',
    description:
      'Transform your digital presence with high-performance web applications.',
    images: ['/images/home-social.webp'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/favicon.ico',
        sizes: '48x48',
      },
    ],
  },
};

export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  return (
    <PageWrapper>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <FeaturesSection />
        <BlogHighlightSection />
        <ShowcaseSection />
        <CallToActionSection />
      </Suspense>
    </PageWrapper>
  );
}
