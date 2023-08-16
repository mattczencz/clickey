/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'nuphy.com',
      },
      {
        hostname: 'www.melgeek.com',
      },
      {
        hostname: 'www.thekapco.com',
      },
    ]
  }
};

module.exports = nextConfig;
