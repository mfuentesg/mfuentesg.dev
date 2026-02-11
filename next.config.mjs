/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Enable experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Configure image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Add cache headers for better performance
  headers: async () => [
    {
      source: '/manifest.json',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=604800, immutable',
        },
        {
          key: 'Content-Type',
          value: 'application/manifest+json',
        },
      ],
    },
    {
      source: '/sw.js',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
        {
          key: 'Service-Worker-Allowed',
          value: '/',
        },
      ],
    },
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/xml',
        },
      ],
    },
    {
      source: '/robots.txt',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/plain',
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=604800',
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
  ],

  // Add rewrites for static files
  rewrites: async () => ({
    beforeFiles: [],
    afterFiles: [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
      },
    ],
  }),
}

export default nextConfig
