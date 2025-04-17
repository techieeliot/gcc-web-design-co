import { ContactSidebar } from './components/ContactSidebar';
import ContactForm from './components/ContactForm';
import { Icon } from '@ui/icon';
import PageWrapper from '@/components/PageWrapper';

export const revalidate = 3600; // Revalidate every hour

// Metadata for the contact page
export const metadata = {
  title: 'Contact Us | SANFORDEV',
  description:
    'Get in touch with us for expert React, Next.js, and TypeScript development services.',
  alternates: {
    canonical: '/contact',
  },
  keywords: [
    'Contact SANFORDEV Consulting',
    'React development services inquiry',
    'Next.js consulting contact',
    'TypeScript development questions',
  ],
  openGraph: {
    title: 'Contact Us | SANFORDEV',
    description:
      'Get in touch with us for expert React, Next.js, and TypeScript development services.',
    url: 'https://sanfordev.com/contact',
    images: [
      {
        url: '/images/contact-social.webp',
        width: 1200,
        height: 630,
        alt: 'Contact SANFORDEV Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | SANFORDEV Consulting',
    description:
      'Get in touch with us for expert React, Next.js, and TypeScript development services.',
    images: ['/images/contact-social.webp'],
  },
};

export default function ContactPage() {
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
          <div className="rounded-full bg-slate-200 p-4 border border-indigo dark:border-frost shadow-lg">
            <Icon
              name="Mail"
              className="text-indigo dark:text-frost"
              size={24}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>

          <p className="text-xl max-w-2xl mx-auto">
            Ready to transform your digital presence? We genuinely care about
            your vision and are here to listen, advise, and partner with you on
            your next project. Whether you're bursting with a creative idea or
            have a practical question, our team is ready to support you every
            step of the way. And if you're wondering, yes—we still find time to
            laugh about that ever-growing coffee collection ☕.
          </p>
        </div>
      </div>

      {/* Form section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <ContactSidebar />
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  );
}
