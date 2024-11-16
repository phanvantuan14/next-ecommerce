import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex items-center gap-8">
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>{" "}
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>{" "}
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>{" "}
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>{" "}
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>{" "}
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>{" "}
        <Link
          href="/list?cat=test"
          className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 gap-5"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt="category"
              className="absolute object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <h4 className="text-sm">Category name</h4>
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
