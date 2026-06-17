// src/app/mdx-page/MyComponent1.tsx
import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { MDXRemote } from 'next-mdx-remote-client/rsc';

export default async function MyPage1() {
  // 创建 SOCKS5 代理实例
  const agent = new SocksProxyAgent('socks://127.0.0.1:10808');

  try {
    // 使用 axios 发起请求
    const response = await axios.get('https://nextjs-docs-henna-six.vercel.app/xm.mdx', {
      httpAgent: agent,
      httpsAgent: agent,
      timeout: 30000, // 可选：设置超时
    });

    const source = response.data;
    return <MDXRemote source={source} />;
  } catch (error) {
    console.error('Failed to load MDX content:', error);
    return <div>内容加载失败，请稍后重试</div>;
  }
}
