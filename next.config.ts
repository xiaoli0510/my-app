import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false,
  cacheComponents: true,
   sassOptions: {
     additionalData: `$primary-color: red;`,
   }
};

export default nextConfig;
