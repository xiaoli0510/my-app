import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug

  const {title} = await searchParams;
 
  // fetch post information
  const post = {title:"齐天大圣",description:'金坤棒'}
 
  return {
    title: post.title,
    description: post.description,
  }
}

export default function HomePage({ params, searchParams }: Props) {
  const len = 3;
  return (
    <div>
      <div>home</div>
       <p>DB_HOST:{process.env.DB_HOST}</p>
       <p>DB_USER:{process.env.DB_USER}</p>
       <p>DB_PASSWORD:{process.env.DB_PASSWORD}</p>
      {Array.from({ length: len }).map((_, index) => (
        <Image
        key={index}
          src={`https://eo-img.521799.xyz/i/pc/img${index + 1}.webp`}
          width={100}
          height={100}
          alt="1"
          preload={index <= 1}
        />
      ))}
    </div>
  );
}
