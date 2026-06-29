import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eo-img.521799.xyz',
        port: '',
        pathname: '/i/pc/**',
      },
    ],
  },
}
 
export default nextConfig