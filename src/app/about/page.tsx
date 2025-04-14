import PageWrapper from '@/components/PageWrapper';
import {
  ClientAboutSection as AboutSection,
  ClientCompanyFacts as CompanyFacts,
  ClientConnectWithUs as ConnectWithUs,
} from './client-components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Unmatched Innovation & Mission',
  description:
    "At SANFORDEV Consulting, we're transforming tech into powerful experiences. Since 2018, we've built applications that spark creativity, drive success, and empower communities.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About SANFORDEV Consulting | Trailblazing Innovation',
    description:
      'Discover how SANFORDEV Consulting turns everyday challenges into extraordinary opportunities with tech designed for performance, accessibility, and impact.',
    url: 'https://sanfordev.com/about',
    images: [
      {
        url: '/images/about-social.webp',
        width: 1200,
        height: 630,
        alt: 'About SANFORDEV Consulting',
      },
    ],
  },
};

export default function AboutRoute() {
  return (
    <PageWrapper>
      <header className="mb-5 lg:mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center lg:text-left">
          About SANFORDEV
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          At SANFORDEV Consulting, we turn everyday challenges into
          extraordinary opportunities with tech designed for performance,
          accessibility, and impact.
        </p>
      </header>
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <AboutSection />
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
          <CompanyFacts />
          <ConnectWithUs />
        </aside>
      </article>
    </PageWrapper>
  );
}
