import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

import { domains } from '@/config/domains';
import { cn } from '@/lib/utils';
import { ErrorHandler } from '@/components/error-handler';
import { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from 'next/head';
import OrganizationSchema from '@/components/structured-data/OrganizationSchema';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['Roboto', 'Fira Sans', '-apple-system', 'sans-serif'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['Poppins', 'Roboto', 'Fira Sans', '-apple-system', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <OrganizationSchema />
      </Head>
      <body
        className={cn(
          poppins.variable,
          montserrat.variable,
          'min-w-full min-h-screen bg-white dark:bg-slate-900',
          'text-primary dark:text-slate-50 font-sans antialiased'
        )}
        suppressHydrationWarning
        data-remove-attribute="cz-shortcut-listen"
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-center" richColors />
        <ErrorHandler />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'SANFORDEV Consulting | Modern Web Development Services',
    template: '%s | SANFORDEV Consulting',
  },
  description:
    'Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.',
  keywords: [
    'SANFORDEV CONSULTING LLC',
    'SANFORDEV',
    'Eliot Sanford',
    'Sanford, Eliot',
    'hey@sanfor.dev',
    'Custom Computer Programming Services',
    'Custom Software Development',
    'Web Development Services',
    'Web Development Company',
    'Web Development Consultancy',
    'Tecnical Consulting',
    'Software Development Business',
    'Computer Software Consulting and Training',
    'Computer programming, software, and systems training, online',
    'React.js Ecosystem Specialists',
    'Computer Systems Design Services',
    'Web Applications Development',
    'Website Performance Optimization',
    'Responsive Web Design Services',
    'Mississippi-based',
    'Mississippi BID 1485905',
    'Web Design Consulting',
    'Enterprise-Level Web Development Services',
    'Startup Web Development Services',
    'E-commerce Web Development Services',
    'Content Management Systems Consulting',
    'Progressive Web Application Development Services',
    'Single Page Application Development Services',
    'User Interface Design Services',
    'User Experience Design Services',
    'API Development Services',
    'Continuous Integration and Continuous Deployment Services',
    'Testing and Quality Assurance Services',
    'Cross-Browser Compatibility',
    'Performance Monitoring',
    'Web Accessibility Training',
    'Search Engine Optimization (SEO) Managment',
    'Data Visualization Feature Development',
    'Web Performance Optimization Consulting',
    'Web Technologies Guide',
    'Web Frameworks Expert',
    'Web Architecture Planning and Design Patterns Expertise',
  ],
  authors: [{ name: 'Eliot Sanford', url: 'https://www.techieeliot.com' }],
  creator: 'Eliot Sanford',
  publisher: 'SANFORDEV Consulting LLC',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(
    domains.primary ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://sanfordev.com'
  ),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': domains.all.map((domain) => ({ url: domain })),
    },
  },
  openGraph: {
    title: 'SANFORDEV Consulting | Modern Web Development Services',
    description:
      'Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.',
    url: domains.primary,
    siteName: 'SANFORDEV Consulting',
    images: [
      {
        url: `${domains.primary}/images/social-card.webp`,
        width: 1200,
        height: 630,
        alt: 'SANFORDEV Consulting - React Ecosystem Specialists',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SANFORDEV Consulting | Modern Web Development Services',
    description:
      'Expert React ecosystem development services for startups and enterprises.',
    creator: '@techieEliot',
    images: ['/images/social-card.webp'], // Use same image as OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
    ],
  },
};
