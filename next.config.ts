import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";
import postgres from "postgres";
import { domainHostnames, domains } from "./src/config/domains";

// Initialize PostgreSQL with better error handling
const initializeDatabase = () => {
  if (!process.env.POSTGRES_URL) {
    console.warn("Missing POSTGRES_URL environment variable");
    return null;
  }

  try {
    return postgres(process.env.POSTGRES_URL, {
      ssl: process.env.NODE_ENV === "production" ? "allow" : false,
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
      types: {
        date: {
          to: 1184,
          from: [1082, 1083, 1114, 1184],
          serialize: (date: Date) => date.toISOString(),
          parse: (str: string) => new Date(str),
        },
      },
    });
  } catch (error) {
    console.error("Failed to initialize PostgreSQL:", error);
    return null;
  }
};

export const sql = initializeDatabase();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const config: NextConfig = {
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },

  // Image optimization settings
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
  },

  // Enhanced performance and experimental features
  experimental: {
    mdxRs: true, // Enable Rust-based MDX compilation
    viewTransition: true,
    turbo: {
      resolveAlias: {
        "@": "./src",
      },
    },
    optimizeCss: true,
  },

  // Security settings
  poweredByHeader: false,
  compress: true,

  // File extensions to process
  pageExtensions: ["mdx", "ts", "tsx"],

  // Dynamic redirects from PostgreSQL
  async redirects() {
    if (!sql) {
      return [];
    }

    try {
      const redirects = await sql`
        SELECT source, destination, permanent
        FROM redirects;
      `;

      return redirects.map(({ source, destination, permanent }) => ({
        source,
        destination,
        permanent: !!permanent,
      }));
    } catch (error) {
      console.error("Error fetching redirects:", error);
      return [];
    }
  },

  // Add support for both MDX and database content
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog/:slug",
          destination: "/api/blog/:slug",
        },
        ...domains.alternateHostnames.map((hostname) => ({
          source: "/:path*",
          has: [{ type: "host", key: "host", value: hostname }],
          destination: `https://${domains.primaryHostname}/:path*`,
        })),
      ],
    };
  },
};

// Compose configurations
const withMDX = createMDX({});
export default withMDX(bundleAnalyzer(config));
