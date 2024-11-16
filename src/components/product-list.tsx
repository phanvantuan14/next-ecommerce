import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 items-center justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4753095/pexels-photo-4753095.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-md">Product name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-400">
          Mô tả công việc: Tìm kiếm, mở mới khách hàng có nhu cầu sử dụng
          internet, truyền hình FPT, Camera FPT
        </div>
        <button className="w-max font-semibold rounded-full ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4753095/pexels-photo-4753095.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-md">Product name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-400">
          Mô tả công việc: Tìm kiếm, mở mới khách hàng có nhu cầu sử dụng
          internet, truyền hình FPT, Camera FPT
        </div>
        <button className="w-max font-semibold rounded-full ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>{" "}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4753095/pexels-photo-4753095.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-md">Product name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-400">
          Mô tả công việc: Tìm kiếm, mở mới khách hàng có nhu cầu sử dụng
          internet, truyền hình FPT, Camera FPT
        </div>
        <button className="w-max font-semibold rounded-full ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>{" "}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4753095/pexels-photo-4753095.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt="product"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-md">Product name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-400">
          Mô tả công việc: Tìm kiếm, mở mới khách hàng có nhu cầu sử dụng
          internet, truyền hình FPT, Camera FPT
        </div>
        <button className="w-max font-semibold rounded-full ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}

export default ProductList;
