import type { NextConfig } from "next";

const canonicalHost = "danielflockhart.com";
const redirectHosts = ["www.danielflockhart.com", "danielflockhart.co.uk", "www.danielflockhart.co.uk"];

const contentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'none';
  form-action 'self';
  img-src 'self' data: blob: https:;
  font-src 'self' data:;
  style-src 'self' 'unsafe-inline';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://firebaseinstallations.googleapis.com https://firestore.googleapis.com https://*.googleapis.com;
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return redirectHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${canonicalHost}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
