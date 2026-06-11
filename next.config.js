/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "widerworld.in",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },}

module.exports = nextConfig
