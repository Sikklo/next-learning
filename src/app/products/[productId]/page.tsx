
import { Metadata } from 'next'
// 引入一個可以用來產生網頁的title description 等等 這些metadata的東西
type Props = {
  // 創造一個物件用來檢查type是否是我想要的
  params: {
    // 假設目前我的位置在 http://localhost:3000/products/100 這裡的話 這個100就是我的[productId]
    productId: string;
    // 我把它定義為一個string 
  };
};
export const generateMetadata = ({params}:Props):Metadata =>{
  // generateMetadata 這是一個特別的用法 用來產生動態的metadata ({params}:Props) 這邊先確定他是 productId 是 string
  // 再去檢查是否符合metadata的規範
  return {
    title: `Product ${params.productId} page.`,
    // 然後會回傳賦予每一個網頁的title 並且依照我們所希望的方式所命名
  };
}
/// 我在動態路由命名叫做[productId] 這個命名是有意義的 就相當於我已經創造了一個變數


const page = ({params}:Props) => {
  
  return (
    <div>product {params.productId} details</div>
  )
}

export default page
