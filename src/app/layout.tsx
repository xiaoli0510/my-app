// app/layout.tsx
import { setGlobalDispatcher, ProxyAgent, Agent } from 'undici';
import { SocksProxyAgent } from 'socks-proxy-agent';

if (typeof window === 'undefined') {
  try {
    // 创建一个 SOCKS5 代理实例
    const socksAgent = new SocksProxyAgent('socks://127.0.0.1:10808');
    
    // 由于 undici 的 ProxyAgent 不直接支持 SOCKS5，我们需要通过 Agent 的工厂方法
    // 或者直接在每个请求中指定 dispatcher
    // 这里我们使用一个技巧：将 socks-proxy-agent 转换为 undici 可用的格式
    // 但更简单的方法是在实际 fetch 中指定
    
    console.log('SOCKS5 代理配置准备就绪');
  } catch (error) {
    console.error('代理配置失败:', error);
  }
}
import '@/app/globals.css';
import Link from 'next/link';
import localFont from 'next/font/local';
import Script from 'next/script';


// ... 你的其他布局代码

const myFont = localFont({
  src: [
    {
      path: './font/ZhiyongDatongFont.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ZhiyongDatongFont',
});


export default function RootLayout({
  children,
  team,
  analysis,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analysis: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${myFont.variable}`}>
      <body className="min-h-full flex flex-col">
        <div>home1</div>
        {children}
      </body>
    </html>
  );
}
