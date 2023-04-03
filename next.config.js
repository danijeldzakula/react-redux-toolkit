/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "images2.imgbox.com"],
  },
};

module.exports = nextConfig;
