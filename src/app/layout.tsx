import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

import { domains } from '@/config/domains';
import { cn } from '@/lib/utils';
import { ErrorHandler } from '@/components/error-handler';
import { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          montserrat.variable,
          'min-h-screen bg-white dark:bg-slate-900',
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
    'SANFORDEV Consulting',
    'React Ecosystem Specialists',
    'Eliot Sanford',
    'SanfordDEV',
    'Sanford',
    'Eliot',
    'React',
    'JavaScript',
    'Frontend Development',
    'Frontend Development Services',
    'React development',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Frontend Engineering',
    'Mississippi',
    'Jackson',
    'USA',
    'Web Applications',
    'Performance Optimization',
    'Responsive Design',
    'User Experience',
    'UI/UX Design',
    'Software Development',
    'Web Design',
    'Consulting',
    'Digital Transformation',
    'Startups',
    'Enterprises',
    'E-commerce',
    'Content Management Systems',
    'Progressive Web Apps',
    'API Integration',
    'Cloud Services',
    'DevOps',
    'Agile Development',
    'Version Control',
    'Git',
    'Continuous Integration',
    'Continuous Deployment',
    'Testing and Quality Assurance',
    'Cross-Browser Compatibility',
    'Performance Monitoring',
    'Web Accessibility',
    'Search Engine Optimization',
    'SEO',
    'Web Security',
    'Data Visualization',
    'Web Performance',
    'Web Standards',
    'Web Technologies',
    'Web Frameworks',
    'Web Libraries',
    'Web Components',
    'Web APIs',
    'Web Services',
    'Web Architecture',
    'Web Protocols',
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
