import type { NextConfig } from 'next'

const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'devsouth.us', 'sanfor.dev'],
  },
  // Add domain handling
  async rewrites() {
    return {
      beforeFiles: [
        // Handle both domains
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'devsouth.us',
            },
          ],
          destination: 'https://sanfor.dev/:path*', // Redirect to primary domain
        },
      ],
    }
  },
}

export default config
