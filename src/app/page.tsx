import Image from "next/image";

export default function HomePage() {
  const len = 3;
  return (
    <div>
      <div>home</div>
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
