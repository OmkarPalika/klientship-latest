import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  output: 'standalone',
  images: {
    // Remove remotePatterns if not using external images
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "klientship.online",
    //     port: "",
    //     pathname: "/social-bubble/**",
    //   },
    // ],
    minimumCacheTTL: 60,
    deviceSizes: [320, 420, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    // Ensure unoptimized is false for Next.js <Image /> optimization
    unoptimized: false,
  },
  headers: async () => {
    return [
      // Set CORP: same-site for static assets (images, fonts, etc.)
      {
        source: '/:path*.(webp|png|jpg|jpeg|svg|gif|ico|bmp|tiff|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
        ],
      },
      // Optionally, set for all root-level static files
      {
        source: '/:file*',
        headers: [
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
        ],
      },
      // Default headers for all other routes
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; style-src-elem 'self' 'unsafe-inline';"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          }
        ]
      }
    ];
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
    ],
    esmExternals: true,
    // Remove modern/legacyBrowsers (not supported in Next.js 15)
  },
};

export default nextConfig;