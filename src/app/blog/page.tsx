import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  // title:"Blog" // 這裡因為我們在主要頁面上的動態title那裏有定義template 所以他會取代%s 所以最後title會顯示 Blog | template title
  title: {
    // 那如果我不想要他顯示 Blog | template title 只想要讓他直接顯示Blog的話 就加入 absolute 他可以只顯示你想要顯示的字
    absolute: "Blog",
    // 這時候title就會只剩下Blog了
  },
};
const page = () => {
  return (
    <>
      <div>blog page</div>
      <a href="/blog/first">to first blog</a>
      <a href="/blog/second">to second blog</a>
    </>
  );
}

export default page
