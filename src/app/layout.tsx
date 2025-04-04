import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from 'components/Footer'
import { Suspense, type ReactNode } from 'react'
import { cn } from 'lib/utils'
import { ThemeProvider } from 'providers/theme-provider'
import { Metadata } from 'next'
import { domains } from '@/config/domains'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'SanforDEV Consulting | Modern Web Development Services',
    template: '%s | SanforDEV Consulting',
  },
  description:
    'Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.',
  keywords: [
    'SanforDEV Consulting',
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
  publisher: 'SanforDEV Consulting LLC',
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
    title: 'SanforDEV Consulting | Modern Web Development Services',
    description:
      'Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.',
    url: domains.primary,
    siteName: 'SanforDEV Consulting',
    images: [
      {
        url: `${domains.primary}/images/social-card.webp`,
        width: 1200,
        height: 630,
        alt: 'SanforDEV Consulting - React Ecosystem Specialists',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanforDEV Consulting | Modern Web Development Services',
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
      <head>
        {/* Preconnect to domains you'll load resources from */}
        <link rel="preconnect" href="https://app.netlify.com" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/blueberry-atom.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={cn(
          poppins.variable,
          'antialiased text-foreground font-poppins min-h-screen',
          'bg-gradient-primary dark:bg-gradient-primary-dark'
        )}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 mt-16 md:mt-20">
              {/* Remove container here since each page will have its own container */}
              <main className="w-full py-8">
                <Suspense
                  fallback={
                    <div className="container mx-auto px-4 w-full h-96 bg-gray-200 dark:bg-slate-800 animate-pulse rounded-lg"></div>
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
