import React from 'react'
import Link from "next/link"
const page = () => {
  const productId = 100;
  return (
    <>
      <div>
        <Link href="/products/1" replace>product1</Link> 
        {/* 這裡如果加上replace 當你一到products/1 按上一頁 會直接回到主畫面 */}
      </div>
      <div>product2</div>
      <div>product3</div>
      <div>
        <Link href={`/products/${productId}`}>product{productId}</Link>
      </div>
      <Link href="/">Home page</Link>
    </>
  );
}

export default page
