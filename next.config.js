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
    const domainRewrites = domains.alternateHostnames.map((hostname) => ({
      source: "/:path*",
      has: [{ type: "host", key: "host", value: hostname }],
      destination: `https://${domains.primaryHostname}/:path*`,
    }));

    return {
      beforeFiles: domainRewrites,
    };
  },

  // This ensures Next.js processes MDX files in the content directory
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  output: "standalone",
  experimental: {
    serverActions: true,
  },

  // Add specific Netlify configuration
  target: "serverless",
};

module.exports = bundleAnalyzer(config);
