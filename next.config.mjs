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
      // The v0 sandbox cannot atomically rename the webpack pack cache file,
      // causing all compiled static assets to 404. Disable the filesystem
      // cache in dev so webpack serves chunks from memory instead.
      config.cache = false
    }
    return config
  },
}

export default nextConfig
