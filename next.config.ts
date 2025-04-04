import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { domainHostnames, domains } from './src/config/domains'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [...domainHostnames, 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimizations - removed swcMinify as it's now enabled by default
  poweredByHeader: false,
  compress: true,

  // Redirect all alternate domains to primary domain
  async rewrites() {
    // Create a rewrite rule for each alternate domain
    const domainRewrites = domains.alternateHostnames.map((hostname) => ({
      source: '/:path*',
      has: [{ type: 'host', key: 'host', value: hostname }],
      destination: `https://${domains.primaryHostname}/:path*`,
    }))

    return {
      beforeFiles: domainRewrites,
    }
  },
}

export default bundleAnalyzer(config)
