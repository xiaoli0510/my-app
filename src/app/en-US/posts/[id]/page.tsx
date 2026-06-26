import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next'
import type { Product, WithContext } from 'schema-dts';

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2"}];
}

 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).id
   const resolvedParent = await parent;

   const previousImages = (await parent).openGraph?.images || [];//获取父级的分享卡片的图片
  // fetch post information
  const post = {title:'测试',description:'测试description'}
  return {
    title: resolvedParent.title?.absolute + post.title,
    description: post.description,
     openGraph: {
      images: ['/icon1.jpg', ...previousImages],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let randomImg = '';
  if (id === '1') {
    const res = await fetch('https://www.loliapi.com/acg/pc?type=json');
    console.log('res',res);
    const data = await res.json();
    randomImg = data.url;
    console.log('url',randomImg);
  } else {
    randomImg = 'hahahahah';
  }

  const product = {
    name:'苹果桃子',
    image:'',
    description:"红的绿的",
  };

  const jsonLd: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
     name: product.name,
    image: product.image,
    description: product.description,
};

  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: product.name,
  //   image: product.image,
  //   description: product.description,
  // };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div>{product.name}</div>
      <h1>
        Post:
        <br />
        {id == '1' ? <Image src='/i/pc/img615.webp' alt="random img" /> : <div>randomImg{randomImg}</div>}
      </h1>
    </div>
  );
}
