import React from "react";

/// 這裡如果沒有加上兩次[[]]的話 只有[...slug] 的話 因為我們沒有在docs設定page所以這種時候在localhost:3000/docs 是顯示不出網頁的
/// 兩層的[[]]就可以了

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    /// 如果有slug slug就是網址最後面的東西 向這裡的最一開始叫做localhost:3000/docs 而在這個docs後面的我們目前都把它當成是slug
    /// 所以這一段的意思就是 如果我們有slug 然後slug的長度是2 例如 localhost:3000/docs/01/02 這樣子 我們就顯示下方的h1
    return (
      <h1>
        View in docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    /// 那這邊就是如果是 localhost:3000/docs/01 就顯示下面這段
    return <h1>View in docs for feature {params.slug[0]}</h1>;
  }
  /// 如果超過3 或是 沒有slug就這段 因為我們在slug後方加上了問號 所以這個是可選的
  return <div>Docs home page</div>;
};

export default Docs;
