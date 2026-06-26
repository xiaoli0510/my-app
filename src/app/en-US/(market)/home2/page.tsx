import { Suspense } from "react";

async function RandomImage() {
  const randomImg = await fetch("https://www.loliapi.com/acg/pc?type=json");
  const data = await randomImg.json();
  return <img width={100} height={100} src={data.url} alt="random img" />
}

export default function MarketHome() {
  return (
    <div>
      home2
      <br />
      <Suspense fallback={<div>loading</div>}>
       <RandomImage/>
      </Suspense>
    </div>
  );
}
