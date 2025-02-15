/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "klikcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
