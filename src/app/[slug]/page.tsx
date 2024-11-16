import Add from "@/components/add";
import CustomizeProducts from "@/components/customize-products";
import ProductImage from "@/components/product-image";
import React from "react";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>
      {/* texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-2xl font-medium">Product Name</h1>
        <p className="text-gray-500 text-sm">
          Lema...honestly i am addicted with your explanation..you job is always
          amazed me..I think only if finish all your project that I ll be a
          confident software engineer...I am software engineering student..if
          you aren't here i have no idea what am gonna do with my life..really
          reallly your job is amazing your explanation is killing too..i have no
          words thank so much
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 line-through">$55</span>
          <span className="font-medium text-xl">$49</span>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h2 className="font-medium mb-4">Title</h2>
          <p>
            I think only if finish all your project that I ll be a confident
            software engineer...I am software engineering student..if you aren't
            here i have no idea what am gonna do with my life..really reallly
            your job is amazing your explanation is killing too..i have no words
            thank so much
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
