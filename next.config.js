/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Disable image optimization
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig 