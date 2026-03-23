import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
      "spin-slow": "spin 6s linear infinite",
    },
      backgroundImage: {
  
      },
      colors: {
   color1:"#CB0000",
   color2:"#004094",
   color3:"#1A2F4A",
   color4:"#ffce5b",
   color5:"#2B3944"
      },
    },
  },
  plugins: [],
};

export default config;
