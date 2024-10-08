import { Metadata } from "next";

export const metadata:Metadata = {
  // title: 'Hello pages', // <---title 也可以使用object來讓他更彈性
  title:{
    absolute:"",
    default:"text nextJS title", // 這邊設定default 讓每一個網頁上如果沒有特別設定title是什麼的話 就讓它顯示這個
    template:"%s | template title",// %s代表會被取代的字符 如果其他頁面上有 像是Blog一樣自己去定義title是什麼的話 他就會取代這個%s
                                  // 所以最後title會顯示 Blog | template title 
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            color: "white",
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>header</p>
        </header>
        <section
          style={{
            height:"100dvh",
          }}
        >
          {children}
        </section>
        <footer
          style={{
            color: "ghostwhite",
            backgroundColor: "purple",
            padding: "1rem",
          }}
        >
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
