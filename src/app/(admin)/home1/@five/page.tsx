import { Suspense } from "react";

export default async function FivePage() {
  const randomImg = await fetch("https://www.loliapi.com/acg/pc?type=json");
  const data = await randomImg.json();
  return (
    <div>
      <div>five page</div>
      <Suspense fallback={<div>loading</div>}>
        <img width={100} height={100} src={data.url} alt="random img" />
      </Suspense>
    </div>
  );
}
