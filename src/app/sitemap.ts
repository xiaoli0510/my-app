import type { MetadataRoute } from 'next'
import {BASE_URL} from '@/app/lib/constants'

export async function generateSitemaps(){
    return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}
 
export default async function sitemap(props: {
  id: Promise<string>
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000
  const end = start + 50000
  let products = [{
    id:22,
    date:'20260623'
  },
{
    id:33,
    date:'20260624'
  },{
    id:44,
    date:'20260624'
  }]

  const sliceLen = 2;//截取的长度
console.log('id',id)
console.log('sliceLen',sliceLen)
  products = products.splice(Number(id),sliceLen)
  console.log('products',products);

  return products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: product.date,
  }))
}