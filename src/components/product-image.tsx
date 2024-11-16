"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 0,
    url: "https://images.pexels.com/photos/4814636/pexels-photo-4814636.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1,
    url: "https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3828241/pexels-photo-3828241.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2752088/pexels-photo-2752088.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function ProductImage() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          fill
          alt=""
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image, i) => (
          <div key={image.id} className="w-1/4 h-32 relative gap-4 mt-8">
            <Image
              src={image.url}
              fill
              alt=""
              sizes="30vw"
              className="object-cover rounded-md cursor-pointer"
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
