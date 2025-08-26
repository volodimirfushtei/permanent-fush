// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    turbopack: {
        root: __dirname, // завжди корінь цього проєкту
    },
};

module.exports = nextConfig;
