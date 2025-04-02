import { Poppins } from 'next/font/google'
import './globals.css'
import Header from 'components/Header.client'
import Footer from 'components/Footer'
import { Suspense, type ReactNode } from 'react'
import { cn } from 'lib/utils'
import { ThemeProvider } from 'providers/theme-provider'
import { PageWrapper } from '@/components/PageWrapper'
import { Metadata } from 'next'
import { domains } from '@/config/domains'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'SanforDev Consulting | React Ecosystem Specialists',
    template: '%s | SanforDev Consulting',
  },
  description:
    'Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.',
  keywords: [
    'React development',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Frontend Engineering',
    'Mississippi',
  ],
  authors: [{ name: 'Eliot Sanford', url: 'https://www.techieeliot.com' }],
  creator: 'Eliot Sanford',
  publisher: 'SanforDev Consulting LLC',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(domains.primary),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': domains.all.map((domain) => ({ url: domain })),
    },
  },
  openGraph: {
    title: 'SanforDev Consulting | React Ecosystem Specialists',
    description:
      'Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.',
    url: domains.primary,
    siteName: 'SanforDev Consulting',
    images: [
      {
        url: `${domains.primary}/images/social-card.jpg`,
        width: 1200,
        height: 630,
        alt: 'SanforDev Consulting - React Ecosystem Specialists',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanforDev Consulting | React Ecosystem Specialists',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          'antialiased text-foreground font-poppins min-h-screen',
          'bg-gradient-primary dark:bg-gradient-primary-dark' // Move gradient here
        )}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 mt-16 md:mt-20">
              <main className="container mx-auto px-4 py-8">
                <Suspense
                  fallback={
                    <div className="w-full h-96 bg-gray-200 dark:bg-slate-800 animate-pulse rounded-lg"></div>
                  }
                >
                  {children}
                </Suspense>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
