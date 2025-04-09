const { domainHostnames, domains } = require('./src/config/domains');

/** @type {import('next').NextConfig} */
let config = {
  eslint: {
    // Only run ESLint on these directories during builds
    dirs: ['src'],
    // Don't fail build on lint errors
    ignoreDuringBuilds: true,
  },

  // Enable React's strict mode for better error handling
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,

  // Optimize image loading
  images: {
    // Remove deprecated domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
      ...domainHostnames.map((hostname) => ({
        protocol: 'https',
        hostname,
        port: '',
        pathname: '**',
      })),
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Required for Netlify
    domains: ['devsouth.us'],
  },

  // Security & performance headers
  poweredByHeader: false,
  compress: true,

  // Generate sitemap and robots.txt
  generateBuildId: async () => {
    return `build-${new Date().toISOString()}`;
  },

  // Domain redirects
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }

    const domainRewrites = domains.alternateHostnames.map((hostname) => ({
      source: '/:path*',
      has: [{ type: 'host', key: 'host', value: hostname }],
      destination: `https://${domains.primaryHostname}/:path*`,
    }));

    return {
      beforeFiles: [
        ...domainRewrites,
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'devsouth.us',
            },
          ],
          destination: 'https://devsouth.us/:path*',
        },
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ],
    };
  },

  // This ensures Next.js processes MDX files in the content directory
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  output: 'standalone',

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendors: {
              name: 'vendors',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 0,
              reuseExistingChunk: true,
            },
          },
        },
        moduleIds: 'deterministic',
      };
    }

    // Add environment check for client-side only code
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
        sharp: false,
      };
    }

    return config;
  },

  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
    swcMinify: true,
  },

  // Increase timeout for font loading
  staticPageGenerationTimeout: 120,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },

  // Improve build performance
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 2,
  },

  // Add server configuration
  serverRuntimeConfig: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
};

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
