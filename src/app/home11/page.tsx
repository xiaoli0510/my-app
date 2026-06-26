'use client'
import Image from 'next/image';
import Img1 from '@/public/img1.png';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function Avatar() {
  return <Image src="/img1.png" width={100} height={100} alt="用户头像" sizes="64px" />;
}

export function Banner() {
  return <Image src="/img1.png" width={1920} height={600} alt="banner" sizes="100vh" />;
}

export function ContentImage() {
  return (
    <Image
      src="/img1.png"
      width={1200}
      height={800}
      alt="banner"
      sizes="(max-width:780px) 100vh,(max-width:1200px) 50vh,1200px"
    />
  );
}

export default function Home() {
  const len = 3;
  const router = useRouter();
  const handleEnterAbout = () => {
          router.push('/about')
  }
  return (
    <div>
      <div>home222</div>
      <button onClick={handleEnterAbout}>router跳转about router</button>
      <Link href="/about" className="block">跳转about link标签</Link>
      <Script src="https://img.acadsoc.com.cn/common/js/utils/aes.js"/>
      {/* <div> sdsadasdjsalkdjasl</div>
      <Avatar/>
      <Banner/>
      <ContentImage/> */}
    </div>
  );
}
