import React from 'react'
import { notFound } from "next/navigation";
/// 引入notFound的目的是 我可以限制條件 當條件達成的時候 才會顯示notFound
const page = ({params}:{
  params:{
    reviewId:string,
    productId:string
  }
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>product {params.productId} review:{params.reviewId}</div>
  )
}

export default page
