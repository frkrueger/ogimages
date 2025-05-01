/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable image optimization since we're using static export
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig 