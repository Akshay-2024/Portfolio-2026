/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/ak6fzdkq/**",
      },
    ],
  },
};

module.exports = nextConfig;