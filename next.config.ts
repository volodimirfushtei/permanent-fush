/** @type {import('next').NextConfig} */
import path from "path";
import { Configuration } from "webpack";

const nextConfig = {
  output: 'export',
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true, // Ключовий момент для статичного експорту
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config: Configuration) => {
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@types": path.resolve(__dirname, "src/types"),
    };
    return config;
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  // Turbopack не потребує додаткових налаштувань у next.config.ts для роботи.
  // Якщо ви використовуєте Turbopack, ви можете видалити цей розділ.
};

module.exports = nextConfig;
