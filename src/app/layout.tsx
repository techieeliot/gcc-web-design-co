import { Poppins } from "next/font/google";
import "./globals.css";

import { Suspense, type ReactNode } from "react";
import { Metadata } from "next";
import { domains } from "@/config/domains";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageSkeleton } from "@/components/page-skeleton";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Add this for better font loading performance
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(poppins.variable, "font-sans")}
    >
      <body
        className={cn(
          "min-h-screen antialiased",
          "bg-slate-50 dark:bg-slate-900",
          "text-slate-900 dark:text-powder",
          "transition-colors duration-300",
          "font-sans",
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 pt-24 md:pt-28">
              <Suspense fallback={<PageSkeleton />}>{children}</Suspense>
            </div>
            <Footer />
            <Toaster position="top-center" richColors />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "SanforDEV Consulting | Modern Web Development Services",
    template: "%s | SanforDEV Consulting",
  },
  description:
    "Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.",
  keywords: [
    "SanforDEV Consulting",
    "React Ecosystem Specialists",
    "Eliot Sanford",
    "SanfordDEV",
    "Sanford",
    "Eliot",
    "React",
    "JavaScript",
    "Frontend Development",
    "Frontend Development Services",
    "React development",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Frontend Engineering",
    "Mississippi",
    "Jackson",
    "USA",
    "Web Applications",
    "Performance Optimization",
    "Responsive Design",
    "User Experience",
    "UI/UX Design",
    "Software Development",
    "Web Design",
    "Consulting",
    "Digital Transformation",
    "Startups",
    "Enterprises",
    "E-commerce",
    "Content Management Systems",
    "Progressive Web Apps",
    "API Integration",
    "Cloud Services",
    "DevOps",
    "Agile Development",
    "Version Control",
    "Git",
    "Continuous Integration",
    "Continuous Deployment",
    "Testing and Quality Assurance",
    "Cross-Browser Compatibility",
    "Performance Monitoring",
    "Web Accessibility",
    "Search Engine Optimization",
    "SEO",
    "Web Security",
    "Data Visualization",
    "Web Performance",
    "Web Standards",
    "Web Technologies",
    "Web Frameworks",
    "Web Libraries",
    "Web Components",
    "Web APIs",
    "Web Services",
    "Web Architecture",
    "Web Protocols",
  ],
  authors: [{ name: "Eliot Sanford", url: "https://www.techieeliot.com" }],
  creator: "Eliot Sanford",
  publisher: "SanforDEV Consulting LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(domains.primary),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": domains.all.map((domain) => ({ url: domain })),
    },
  },
  openGraph: {
    title: "SanforDEV Consulting | Modern Web Development Services",
    description:
      "Expert React ecosystem development services for startups and enterprises. Performance-focused web applications built with Next.js, TypeScript, and modern tools.",
    url: domains.primary,
    siteName: "SanforDEV Consulting",
    images: [
      {
        url: `${domains.primary}/images/social-card.webp`,
        width: 1200,
        height: 630,
        alt: "SanforDEV Consulting - React Ecosystem Specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SanforDEV Consulting | Modern Web Development Services",
    description:
      "Expert React ecosystem development services for startups and enterprises.",
    creator: "@techieEliot",
    images: ["/images/social-card.webp"], // Use same image as OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your verification code
  },
};
