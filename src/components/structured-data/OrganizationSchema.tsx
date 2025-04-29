import { domains } from '@/config/domains';
import Script from 'next/script';

export default function OrganizationSchema() {
  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': `${domains.primary}/#organization`,
          name: 'SANFORDEV Consulting',
          alternateName: 'SANFORDEV',
          legalName: 'SANFORDEV Consulting LLC',
          url: domains.primary,
          logo: {
            '@type': 'ImageObject',
            url: `${domains.primary}/logos/sanfordev_logo_dark.webp`,
            width: '512',
            height: '512',
            caption: 'SANFORDEV Consulting LLC logo',
          },
          description:
            'Expert React ecosystem development services for startups and enterprises.',
          foundingDate: '2018-11-01',
          founders: [
            {
              '@type': 'Person',
              name: 'Eliot Sanford',
              url: 'https://www.techieeliot.com',
            },
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '110 Lake Forest Ln',
            addressLocality: 'Clinton',
            addressRegion: 'MS',
            postalCode: '39056',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+16623126815',
            email: 'hey@sanfor.dev',
            contactType: 'customer service',
            availableLanguage: ['English'],
          },
          sameAs: [
            'https://www.linkedin.com/company/sanfordev',
            'https://github.com/sanfordev',
            'https://x.com/sanfordev32857',
            'https://www.techieeliot.com',
            domains.alternate,
          ],
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 32.3441709,
              longitude: -90.3446502,
            },
            geoRadius: '50000',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'React Development',
                  description: 'Custom React application development',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Next.js Development',
                  description: 'Server-side rendered React applications',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Technical Consulting',
                  description: 'Web development consulting and training',
                },
              },
            ],
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
          priceRange: '$$',
        }),
      }}
    />
  );
}
