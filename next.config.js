/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.compote.vincentcottalorda.me"],
  },
  publicRuntimeConfig: {
    url: process.env.DIRECTUS_URL,
  },
});
