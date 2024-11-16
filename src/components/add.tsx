"use client";
import React, { useState } from "react";

function Add() {
  const [quantity, setQuantity] = useState(1);
  const stock = 5;
  function handleQuantity(type: "i" | "d") {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <h4>Choose a size</h4>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
              <button
                className="cursor-pointer text-xl p-2"
                onClick={() => handleQuantity("d")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="cursor-pointer text-xl p-2"
                onClick={() => handleQuantity("i")}
              >
                +
              </button>
            </div>

            <div className="text-sm">
              Only <span className="text-orange-500">4 items</span>left!
              <br /> {"Don't"} miss it.
            </div>
          </div>
        </div>
        <button className="w-max font-semibold rounded-full ring-1 ring-lama text-lama py-3 px-5 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
