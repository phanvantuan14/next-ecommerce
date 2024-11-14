import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./searchBar";
import NavIcons from "./navIcons";

function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobile screens */}
      <div className="h-full md:hidden flex items-center justify-between">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">P-TUAN</div>
        </Link>
        <Menu />
      </div>
      {/* bigger screens */}
      <div className="h-full hidden md:flex items-center justify-between gap-8">
        {/* left */}
        <div className="w-1/3">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src="/logo.png" width={24} height={24} alt="logo" />
            <div className="text-2xl tracking-wide">P-TUAN</div>
          </Link>
        </div>
        {/* right */}
        <div className="w-2/3 flex items-center gap-8 justify-between">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
