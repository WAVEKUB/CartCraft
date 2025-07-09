"use client";

import Image from "next/image";

const CartModel = () => {

  const cartItem = true;

  return (
    <div className="absolute w-max p-4 rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] bg-white top-12 right-0 flex flex-col gap-6 border z-50 min-w-[320px] max-w-[400px]">
      {!cartItem ? (
        <div className="text-center py-8 text-gray-500">Cart is Empty</div>
      ) : (
        <>
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        {/*LIST*/}
        <div className="flex flex-col gap-8">
          {/*Item*/}
          <div className="flex gap-4">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd1PJttN-CB9q6n6MdJHf3ppbi0FSBD873w&s/images/cart.pnghttps://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
              />
            <div className="flex flex-col justify-between w-full">
              {/*TOP*/}
              <div className="">
                {/*TITLE*/}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$77</div>
                </div>
                {/*DESC*/}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/*BOTTOM*/}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty.2</span>
                <span className="text-blue-500 cursor-pointer hover:text-blue-700">Remove</span>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="flex gap-4">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd1PJttN-CB9q6n6MdJHf3ppbi0FSBD873w&s/images/cart.pnghttps://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
              />
            <div className="flex flex-col justify-between w-full">
              {/*TOP*/}
              <div className="">
                {/*TITLE*/}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$77</div>
                </div>
                {/*DESC*/}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/*BOTTOM*/}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty.2</span>
                <span className="text-blue-500 cursor-pointer hover:text-blue-700">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/*BOTTOM*/}
        <div className="">
          <div className="flex items-center justify-between font-semibold">
            <span className="">Subtotal</span>
            <span className="">$77</span>
          </div>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="flex justify-between text-sm gap-2">
            <button className="ring-gray-300 rounded-md py-3 px-4 ring-1 hover:bg-gray-50 transition-colors">View Cart</button>
            <button className="rounded-md py-3 px-4 bg-blue-900 text-white hover:bg-blue-800 transition-colors">Checkout</button>
          </div>
        </div>
      </>
      )}
    </div>
  );
};
export default CartModel;
