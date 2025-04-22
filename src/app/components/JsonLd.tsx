export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SANFORDEV',
          url: 'https://sanfordev.com',
          description:
            'Modern web development services specializing in React, Next.js, and TypeScript',
          sameAs: [
            'https://twitter.com/sanfordev',
            'https://github.com/sanfordev',
            'https://linkedin.com/company/sanfordev',
          ],
          provider: {
            '@type': 'Organization',
            name: 'SANFORDEV Consulting LLC',
            legalName: 'SANFORDEV Consulting LLC',
            url: 'https://sanfordev.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '110 Lake Forest Ln',
              addressLocality: 'Clinton',
              addressRegion: 'MS',
              postalCode: '39056',
              addressCountry: 'US',
            },
          },
        }),
      }}
    />
  );
}
