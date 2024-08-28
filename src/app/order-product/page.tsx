"use client";
import React from "react";
import { useRouter } from "next/navigation";
//可以使用useRouter這個hook 我的理解是跟Link的功能一樣 但是他可以放在按鈕之內 成為一個功能 而不單單只是一個Link標籤
const OrderProduct = () => {
  const router = useRouter();
  // 創造router來使用HOOK

  const handleClick = () => {
    // 創造一個功能 用來處理按鈕
    console.log("place order");
    router.push("/about");
    // 按下去之後 可以用.push 這個意思就是 點下去之後 我就會到/about這個頁面 基本上就和Link的href一樣
    // router.replace("/about");
    // 基本上和push是一樣的 一樣會到/about

    // router.back();
    // 如果是直接.back()就代表回上一頁
    // router.forward();
    // 如果是直接.forward()就代表到下一頁
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProduct;
