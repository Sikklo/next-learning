"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import './style.css'
import { useState } from "react";
const navLinks = [
  {
    name:"register",href:"/register",
  },
  {
    name:"login",href:"/login",
  },
  {
    name:"Forgot Password",href:"/forgot-password",
  },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname()
  const [inputV,setInput] = useState("");
  return (
    <>
    <div>
      <input type="text" value={inputV} onChange={(e)=>setInput(e.target.value)} placeholder="輸入資料"/>
    </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href)
        return (
          <Link href={link.href} key={link.name}
          className={isActive ? "font-bold my-4 mx-4" : "text-blue-300 my-4 mx-4"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
