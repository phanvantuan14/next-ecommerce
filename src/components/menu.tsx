"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        width={28}
        height={28}
        alt="mennu"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 text-xl z-20">
          <Link className="hover:text-lama" href="/">
            Home
          </Link>
          <Link className="hover:text-lama" href="/shop">
            Shop
          </Link>
          <Link className="hover:text-lama" href="/cart">
            Cart(1)
          </Link>
          <Link className="hover:text-lama" href="/deals">
            Deals
          </Link>
          <Link className="hover:text-lama" href="/contact">
            About
          </Link>
          <Link className="hover:text-lama" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-lama" href="/logout">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
