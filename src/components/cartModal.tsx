import Image from "next/image";
import React from "react";

function CartModal() {
  const cartItem = true;
  return (
    <div className="absolute top-12 right-0 p-5 rounded-md shadow-custom bg-white flex flex-col w-max">
      <h2 className="text-xl pb-4 font-bold">Shopping Cart</h2>
      <div>
        {!cartItem ? (
          <div className="text-gray-400">Is empty</div>
        ) : (
          <>
            <div className="flex flex-col gap-7">
              {/* item */}
              <div className="w-full flex justify-start gap-4">
                <Image
                  src="https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width={72}
                  height={96}
                  className="rounded-sm w-max cursor-pointer"
                  alt="cartItem"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">$50</div>
                    </div>
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500 cursor-pointer">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* button */}
            <div className="flex flex-col pt-1">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$51</span>
              </div>
              <span className="pt-0 pb-4 text-gray-500 text-sm">
                Shpping and taxes calculated at checkout.
              </span>
              <div className="flex items-center justify-between text-sm">
                <button className="py-3 px-4 ring-1 ring-gray-300 rounded-md">
                  View cart
                </button>
                <button className="py-3 px-4 ring-1 ring-gray-300 rounded-md bg-black text-white">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
