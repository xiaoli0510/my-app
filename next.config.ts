import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // cacheComponents: true,
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
      {
        protocol: 'https',
        hostname: 'eo-img.loliapi.cn',
        port: '',
        pathname: '/i/pc/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    // 设置最小尺寸阈值（小于此值不优化）
    minimumCacheTTL: 60,
    loader: 'custom',
    loaderFile: './img-loader.ts',
    // unoptimized: true
  },
  // output: 'export',
  distDir: 'dist',
  trailingSlash: true, //添加尾部斜杠，生成 /about/index.html 而不是 /about.html
  async rewrites() {
    return [
      {
        // 匹配所有以 /api/mdx/ 开头的请求
        source: '/api/mdx/:path*',
        // 将请求转发到目标服务器
        destination: 'https://nextjs-docs-henna-six.vercel.app/:path*',
      },
    ];
  },
};

export default withMDX(nextConfig);
