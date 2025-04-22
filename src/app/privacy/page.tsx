import PageWrapper from '@/components/PageWrapper';
import { Icon } from '@ui/icon';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

export const revalidate = 3600;

const PrivacyContent = dynamic(() => import('./components/PrivacyContent'));

// Metadata configuration
export const metadata = {
  title: 'Privacy Policy | SANFORDEV',
  description:
    'Your privacy is important to us. Read our privacy policy to understand how we handle your data.',
  alternates: {
    canonical: '/privacy',
  },
  keywords: [
    'User privacy policy, rights, compliance, and data protection for the SANFORDEV Consulting website',
  ],
  openGraph: {
    title: 'Privacy Policy | SANFORDEV',
    description:
      'Your privacy is important to us. Read our privacy policy to understand how we handle your data.',
    url: 'https://sanfordev.com/privacy',
    images: [
      {
        url: '/images/social-card.webp',
        width: 1200,
        height: 630,
        alt: 'SANFORDEV Consulting Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | SANFORDEV Consulting',
    description:
      'Your privacy is important to us. Read our privacy policy to understand how we handle your data.',
    images: ['/images/social-card.webp'],
  },
};

export default function PrivacyPolicyRoute() {
  return (
    <PageWrapper>
      {/* Hero Section - server rendered */}
      <div className="text-center mb-12 lg:mb-20 relative">
        {/* Decorative gradient circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-1/2 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-indigo/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute left-1/2 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky/20 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Hero content with icon */}
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-full border border-indigo dark:bg-indigo dark:border-frost p-4 shadow-lg">
            <Icon
              name="Shield"
              className="text-indigo dark:text-frost"
              size={24}
            />
          </div>

          <h1
            className={cn(
              'text-4xl md:text-5xl font-bold tracking-tight',
              'mb-4'
            )}
          >
            Privacy Policy
          </h1>

          <p className="text-xl text-slate-600 dark:text-frost/80 max-w-2xl mx-auto">
            At SANFORDEV Consulting, we take your privacy seriously. Our
            approach is rooted in genuine care and thoughtful
            cultivation—ensuring every aspect of your data is protected with the
            same attention you'd give to a cherished garden.
          </p>

          <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Last Updated: April 22, 2025
          </div>
        </div>
      </div>

      <PrivacyContent />
    </PageWrapper>
  );
}
