const path = require('path');
const { domains } = require('./src/config/domains');

/** @type {import('next').NextConfig} */
let config = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  // Remove rewrites since they don't work with static export
  // Remove headers since they don't work with static export

  // Keep static generation config
  generateBuildId: async () => {
    return `build-${new Date().toISOString()}`;
  },

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  output: 'export',

  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
    swcMinify: true,
  },

  staticPageGenerationTimeout: 120,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

// Bundle analyzer (keep this part)
if (process.env.ANALYZE === 'true') {
  try {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
      openAnalyzer: false,
    });
    config = withBundleAnalyzer(config);
    console.log('Bundle analyzer enabled');
  } catch (error) {
    console.warn(
      'Warning: @next/bundle-analyzer not found. Skipping bundle analysis.'
    );
  }
}

module.exports = config;
