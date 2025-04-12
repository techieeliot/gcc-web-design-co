import { domains } from '@/config/domains';

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'SANFORDEV Consulting',
          alternateName: 'SANFORDEV',
          url: domains.primary,
          logo: `${domains.primary}/images/logo.png`,
          description:
            'Expert React ecosystem development services for startups and enterprises.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '110 Lake Forest Ln',
            addressLocality: 'Clinton',
            addressRegion: 'MS',
            postalCode: '39056',
            addressCountry: 'US',
          },
          telephone: '+16623126815',
          email: 'hey@sanfor.dev',
          sameAs: [
            'https://www.linkedin.com/in/techieeliot',
            'https://github.com/techieeliot',
            'https://www.techieeliot.com',
            domains.alternate, // Add legacy domain as sameAs
          ],
          openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
          priceRange: '$$',
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 32.3441709,
              longitude: -90.3446502,
            },
            geoRadius: '50000',
          },
        }),
      }}
    />
  );
}
