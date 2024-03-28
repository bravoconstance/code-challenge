/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  webpack(config, { isServer }) {
    config.module.rules.push(
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.resolve.fallback = { fs: false, net: false, tls: false };

    return config;
  },
};

export default nextConfig;
