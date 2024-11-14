"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        width={28}
        height={28}
        alt="mennu"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart(1)</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/logout">Logout</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
