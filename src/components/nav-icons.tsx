"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./cart-modal";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  const isLogin = true;

  function handleProfile() {
    if (!isLogin) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  }

  return (
    <div className="flex items-center gap-4 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt="profife"
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute top-12 -left-12 p-4 shadow-custom bg-white text-sm rounded-md z-30">
          <Link href="/profile">Profile</Link>
          <div className="mt-3 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt="notification"
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt="cart"
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          10
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}

export default NavIcons;
