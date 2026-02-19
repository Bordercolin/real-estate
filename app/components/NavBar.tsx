import Link from "next/link";
import React from "react";
import Image from "next/image";


export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex items-center gap-2">
        <Image src="/menu.svg" alt="logo" width={30} height={30} />
        
      </div>
    </nav>
  );
};
