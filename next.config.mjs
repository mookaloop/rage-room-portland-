/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // The v0 sandbox filesystem does not support atomic renames of the
      // webpack pack cache file, causing all static assets to 404.
      // Force memory-only caching so no disk writes are attempted at all.
      config.cache = { type: 'memory' }
    }
    return config
  },
}

export default nextConfig
