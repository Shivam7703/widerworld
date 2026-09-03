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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "widerworld.in",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },}

module.exports = nextConfig



// old =  https://www.widerworld.in/pte/,   https://www.widerworld.in/ielts/,      https://www.widerworld.in/toefl/,   https://www.widerworld.in/british-columbia-provincial-nomination-program/,  https://www.widerworld.in/manitoba-provincial-nominee-program/,   https://www.widerworld.in/new-brunswick-provincial-nominee-program/,    https://www.widerworld.in/newfoundland-and-labrador-provincial-nominee-program/,      https://www.widerworld.in/nova-scotia-provincial-nominee-program/,     https://www.widerworld.in/ontario-immigrant-nominee-program/,     https://www.widerworld.in/prince-edward-island-provincial-nominee-program/,     https://www.widerworld.in/saskatchewan-immigrant-nominee-program/,       https://www.widerworld.in/yukon-nominee-program/,   https://www.widerworld.in/crs-score/       


// new =     { id: 1, label: "AAIP", href: "/visa/Alberta PNP" },
        // { id: 2, label: "BC PNP", href: "/visa/British Columbia PNP" },
        // { id: 3, label: "MPNP", href: "/visa/Manitoba PNP" },
        // { id: 4, label: "NBPNP", href: "/visa/New Brunswick PNP" },
        // { id: 5, label: "NLPNP", href: "/visa/Newfoundland and Labrador PNP" },
        // { id: 6, label: "NWTNP", href: "/visa/Northwest Territories Nominee Program (NWTNP)" },
        // { id: 7, label: "NSNP", href: "/visa/Nova Scotia PNP" },
        // { id: 8, label: "AIP", href: "/visa/Atlantic Immigration Program (AIP)" },
        // { id: 9, label: "OINP", href: "/visa/Ontario PNP" },
        // { id: 10, label: "PEI PNP", href: "/visa/Prince Edward Island PNP" },
        // { id: 11, label: "SINP", href: "/visa/Saskatchewan PNP" },
        // { id: 12, label: "YNP", href: "/visa/Yukon PNP" },
        //   { id: 1, label: "IELTS", href: "/coaching/ielts" },
        // { id: 2, label: "PTE", href: "/coaching/pte" },
        // { id: 3, label: "TOEFL", href: "/coaching/toefl" },
        // { id: 4, label: "CELPIP", href: "/coaching/celpip" },
        // { id: 5, label: "OET", href: "/coaching/oet" },