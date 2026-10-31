/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/alberta-immigrant-nominee-program/',
        destination: '/visa/alberta-pnp/',
        permanent: true, 
      },
     {
        source: '/pte/',
        destination: '/coaching/pte/',
        permanent: true,
      },
      {
        source: '/ielts/',
        destination: '/coaching/ielts/',
        permanent: true,
      },
      {
        source: '/toefl/',
        destination: '/coaching/toefl/',
        permanent: true,
      },

      // --- PNP & Visa Pages ---
      {
        source: '/alberta-immigrant-nominee-program/',
        destination: '/visa/alberta-pnp/',
        permanent: true,
      },
      {
        source: '/british-columbia-provincial-nomination-program/',
        destination: '/visa/british-columbia-pnp/',
        permanent: true,
      },
      {
        source: '/manitoba-provincial-nominee-program/',
        destination: '/visa/manitoba-pnp/',
        permanent: true,
      },
      {
        source: '/new-brunswick-provincial-nominee-program/',
        destination: '/visa/new-brunswick-pnp/',
        permanent: true,
      },
      {
        source: '/newfoundland-and-labrador-provincial-nominee-program/',
        destination: '/visa/newfoundland-and-labrador-pnp/',
        permanent: true,
      },
      {
        source: '/nova-scotia-provincial-nominee-program/',
        destination: '/visa/nova-scotia-pnp/',
        permanent: true,
      },
      {
        source: '/ontario-immigrant-nominee-program/',
        destination: '/visa/ontario-pnp/',
        permanent: true,
      },
      {
        source: '/prince-edward-island-provincial-nominee-program/',
        destination: '/visa/prince-edward-island-pnp/',
        permanent: true,
      },
      {
        source: '/saskatchewan-immigrant-nominee-program/',
        destination: '/visa/saskatchewan-pnp/',
        permanent: true,
      },
      {
        source: '/yukon-nominee-program/',
        destination: '/visa/yukon-pnp/',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "widerworld.in",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },}

module.exports = nextConfig



