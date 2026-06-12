import { Suspense } from "react";

async function ShopContent({ params }: { params: Promise<{ id?: string[] }> }) {
  const { id } = await params;
  return <div>params:{id?.join("/") ?? ""}</div>;
}

export default function Shop({ params }: { params: Promise<{ id?: string[] }> }) {
  return (
    <div>
      <div>shop</div>
      <Suspense>
        <ShopContent params={params} />
      </Suspense>
    </div>
  );
}
