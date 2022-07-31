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
  async rewrites() {
    return {
      afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
    };
  },
};

module.exports = nextConfig;
