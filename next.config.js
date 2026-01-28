/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['6clubguide.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig

