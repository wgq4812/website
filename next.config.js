const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false, // Refer to: https://github.com/getsentry/sentry-javascript/issues/4103
};

module.exports = withSentryConfig(nextConfig, {
  silent: true,
});
