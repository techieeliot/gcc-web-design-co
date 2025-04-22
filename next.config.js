const { domainUrls, domainHostnames } = require('./src/config/domains');

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

  // DO NOT ADD rewrites or headers since they don't work with static export
  output: 'export',

  // Keep static generation config
  generateBuildId: async () => {
    return `build-${new Date().toISOString()}`;
  },

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'sanfordev.netlify.app',
      },
      {
        protocol: 'https',
        hostname: '*.netlify.app',
      },
      { protocol: 'http', hostname: 'localhost' },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'cdn.sanity.io',
      'images.unsplash.com',
      'res.cloudinary.com',
      ...domainHostnames,
    ],
  },

  trailingSlash: true,

  // Allow Sanity Studio to work with static export
  transpilePackages: ['@sanity/ui', '@sanity/icons', 'sanity'],

  productionBrowserSourceMaps: true,
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

if (process.env.NODE_ENV === 'development') {
  require('events').EventEmitter.defaultMaxListeners = 20;
}

module.exports = config;
