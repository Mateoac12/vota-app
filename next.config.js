/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:option/:path*',
        destination: process.env.CORS_URL,
      },
    ]
  },
}
