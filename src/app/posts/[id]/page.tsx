import Image from 'next/image';

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2"}];
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
  return (
    <div>
      <h1>
        Post:
        <br />
        {id == '1' ? <Image src='/i/pc/img615.webp' alt="random img" /> : <div>randomImg{randomImg}</div>}
      </h1>
    </div>
  );
}
