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

  // Optimize image loading
  images: {
    domains: [...domainHostnames, 'localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Enhanced performance settings
  experimental: {
    turbo: {
      resolveAlias: {
        '@': './src',
      },
    },
    optimizeCss: true,
  },

  // External packages config (moved from experimental)
  serverExternalPackages: ['react', 'react-dom'],

  // Security & performance headers
  poweredByHeader: false,
  compress: true,

  // Generate sitemap and robots.txt
  generateBuildId: async () => {
    return `build-${new Date().toISOString()}`
  },

  // Domain redirects
  async rewrites() {
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
