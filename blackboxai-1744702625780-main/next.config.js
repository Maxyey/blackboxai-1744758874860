/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blackboxai-174470262578',
  assetPrefix: '/blackboxai-174470262578/',
  trailingSlash: true,
  // Disable server-side features since GitHub Pages is static
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
