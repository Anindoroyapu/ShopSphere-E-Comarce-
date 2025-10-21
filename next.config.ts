// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google avatars
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // fallback avatar
      },
      {
        protocol: "http",
        hostname: "127.0.0.1", // local storage
      },
      {
        protocol: "http",
        hostname: "localhost", // local storage (alternative)
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash images
      },
    ],
  },
};

export default nextConfig;



