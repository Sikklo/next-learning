import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Home page</div>
      <Link href="/about">to about</Link>
      <br />
      <Link href="/products">to products</Link>
      <br />
      <Link href="/blog">to blog</Link>
    </>
  );
}

export default page
