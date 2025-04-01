import { Poppins } from 'next/font/google'
import './globals.css'
import Header from 'components/Header.client'
import Footer from 'components/Footer'
import { Suspense, type ReactNode } from 'react'
import { cn } from 'lib/utils'
import { ThemeProvider } from 'providers/theme-provider'
import { PageWrapper } from '@/components/PageWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'devSouth Consulting',
  description: 'React ecosystem web development',
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
