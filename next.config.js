const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false, // Refer to: https://github.com/getsentry/sentry-javascript/issues/4103
  async headers() {
    return [
      {
        source: "/:path*",
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
            key: 'X-XSS-Protection',
            value: '1; mode=block'
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
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src plausible.otbeaumont.me *.sentry.io 'unsafe-inline' 'self'; connect-src plausible.otbeaumont.me *.sentry.io 'self'; img-src data: 'self'; style-src 'unsafe-inline' 'self'; report-uri https://o1082811.ingest.sentry.io/api/6099903/security/?sentry_key=6462a60adc3f470295743866b58f3787;"
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: "null"
          }
        ]
      },
    ];
  },
};

module.exports = withSentryConfig(nextConfig, {
  silent: true,
});
