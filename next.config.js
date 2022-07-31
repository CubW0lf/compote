/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["api.compote.me"],
  },
  publicRuntimeConfig: {
    url: process.env.DIRECTUS_URL,
  },
};

module.exports = nextConfig;
