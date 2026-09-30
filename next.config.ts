import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained build for Docker (.next/standalone has its own minimal server).
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    qualities: [80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.vars-development.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()'
          }
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Link', value: '<https://www.taskeyapp.com/llms-full.txt>; rel="alternate"; type="text/plain"' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Link', value: '<https://www.taskeyapp.com/llms.txt>; rel="alternate"; type="text/plain"' },
        ],
      },
      {
        source: '/humans.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      {
        source: '/ai.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
  // Fängt versehentliche Aufrufe der alten CDN-Pfade auf der Website-Domain ab und
  // leitet sie auf die neuen /legal/*-Dokumente um. Die eigentliche 301 für
  // cdn.vars-development.com muss zusätzlich auf CDN-Seite (Cloudflare) gesetzt werden.
  async redirects() {
    // 301-Redirects für entfernte SEO-Landingpages.
    // Feature-nahe Landings → /features, Branchen/Vergleiche/Ratgeber → Root.
    // Locale-Prefixe (en|fr) getrennt behandelt, damit englische/französische URLs
    // in ihrer Sprache bleiben.
    const featurePaths = [
      '/reinigungsapp',
      '/zeiterfassung-gebaeudereinigung',
      '/nfc-zeiterfassung',
      '/einsatzplanung-reinigung',
      '/leistungsnachweis-gebaeudereinigung',
      '/nfc',
      '/ios',
    ];
    const rootPaths = [
      '/software-gebaeudereinigung',
      '/software-kleine-reinigungsfirma',
      '/reinigungssoftware',
      '/reinigersoftware',
      '/oepnv',
    ];

    const featureRedirects = featurePaths.flatMap((path) => [
      { source: path, destination: '/features', permanent: true },
      { source: `/:locale(en|fr)${path}`, destination: '/:locale/features', permanent: true },
    ]);
    const rootRedirects = rootPaths.flatMap((path) => [
      { source: path, destination: '/', permanent: true },
      { source: `/:locale(en|fr)${path}`, destination: '/:locale', permanent: true },
    ]);

    return [
      { source: '/compliance/client/germany/AGB.html',    destination: '/legal/agb-share.html',       permanent: true },
      { source: '/compliance/companies/germany/AGB.html', destination: '/legal/agb-b2b.html',         permanent: true },
      { source: '/compliance/companies/germany/SLA.html', destination: '/legal/sla.html',             permanent: true },
      { source: '/compliance/companies/germany/AVV.html', destination: '/legal/avv.html',             permanent: true },
      { source: '/compliance/employees/germany/AGB.html', destination: '/legal/agb-mitarbeiter.html', permanent: true },

      // Entfernte Branchen-Hub und Detail-Seiten
      { source: '/loesungen', destination: '/', permanent: true },
      { source: '/loesungen/:slug*', destination: '/', permanent: true },
      { source: '/:locale(en|fr)/loesungen', destination: '/:locale', permanent: true },
      { source: '/:locale(en|fr)/loesungen/:slug*', destination: '/:locale', permanent: true },

      // Entfernte Vergleichs-Seiten (waren DE-only)
      { source: '/vergleich', destination: '/', permanent: true },
      { source: '/vergleich/:slug*', destination: '/', permanent: true },

      // Feature-nahe SEO-Landings
      ...featureRedirects,

      // Reinigungsarten/Betriebsgrößen/Ratgeber-Landings
      ...rootRedirects,
    ];
  },
};

export default nextConfig;
