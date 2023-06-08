/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**redditmedia.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: '**redd.it',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
