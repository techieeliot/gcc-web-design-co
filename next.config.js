const withBundleAnalyzer = require("@next/bundle-analyzer");
const { domainHostnames, domains } = require("./src/config/domains");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const config = {
  eslint: {
    // Only run ESLint on these directories during builds
    dirs: ["src"],
    // Don't fail build on lint errors
    ignoreDuringBuilds: true,
  },

  // Optimize image loading
  images: {
    domains: [...domainHostnames, "localhost"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "production",
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
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    const domainRewrites = domains.alternateHostnames.map((hostname) => ({
      source: "/:path*",
      has: [{ type: "host", key: "host", value: hostname }],
      destination: `https://${domains.primaryHostname}/:path*`,
    }));

    return {
      beforeFiles: [
        ...domainRewrites,
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "devsouth.us",
            },
          ],
          destination: "https://devsouth.us/:path*",
        },
      ],
    };
  },

  // This ensures Next.js processes MDX files in the content directory
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  output: "standalone",

  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = bundleAnalyzer(config);
