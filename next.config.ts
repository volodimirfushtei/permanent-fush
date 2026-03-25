/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  output: 'export',
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config: { resolve: { alias?: any; }; }) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@types": path.resolve(__dirname, "src/types"),
    };
    return config;
  },
  // Используйте turbopack вместо experimental.turbo
  turbopack: {
    root: path.join(__dirname, "."),
  },
};

// Условное включение Turbopack в разработке
if (process.env.NODE_ENV === 'development') {

}
module.exports = nextConfig;
