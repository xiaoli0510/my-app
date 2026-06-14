import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false,
  cacheComponents: true,
  sassOptions: {
    additionalData: `$primary-color: red;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eo-img.521799.xyz',
        port: '',
        pathname: '/i/pc/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
     imageSizes: [32, 48, 64, 96, 128, 256, 384],
      // 设置最小尺寸阈值（小于此值不优化）
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
