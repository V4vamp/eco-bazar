"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/navbar";
import { GoHome } from "react-icons/go";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useCart } from "@/contexts/CartContext";
import { SlClose } from "react-icons/sl";

const Page = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const { cart, cartTotal, removeFromCart, increaseCount, decreaseCount } =
    useCart();

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };

  const handleCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCouponCode("");
  };
  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <main className="w-full flex flex-col items-center mt-[238px] lg:mt-46 gap-7 pb-10 font-poppins bg-[#FFF]">
        <header className="w-full h-[75px] flex items-center relative px-6 lg:px-[200px]">
          <Image
            src={"/images/crop.png"}
            alt="Crop Image"
            fill
            className="object-cover object-center transform scale-x-[-1]"
          />
          <div className="w-full relative flex items-center gap-2">
            <Link href={"/"}>
              <GoHome size={16} color="#808080" />
            </Link>
            <MdOutlineKeyboardArrowRight size={16} color="#808080" />
            <span className="text-[#00B207] text-[12px]">Shopping Cart</span>
          </div>
        </header>
        <div className="w-full flex flex-col items-center gap-6 px-6 lg:px-[200px]">
          <h4 className="font-semibold text-[24px] text-[#1A1A1A]">
            My Shopping Cart
          </h4>
          {cart.length > 0 ? (
            <div className="w-full flex flex-col lg:flex-row justify-between items-start">
              <div className="w-full lg:w-[65%] flex flex-col gap-4">
                <div className="w-full border-[#E5E5E5] border-[1px] rounded-[8px]">
                  <header className="w-full border-b-[1px] border-[#E5E5E5] uppercase text-[12px] text-[#808080] font-medium py-2 px-3 flex justify-between">
                    <span className="w-[25%] lg:w-[40%]">Product</span>
                    <span className="w-[20%] lg:w-[15%] flex justify-center">
                      Price
                    </span>
                    <span className="w-[30%] lg:w-[15%] flex justify-center">
                      Quantity
                    </span>
                    <span className="w-[15%] flex justify-center">
                      Subtotal
                    </span>
                    <span></span>
                  </header>
                  <div className="w-full flex flex-col">
                    {cart.map((item, index) => (
                      <div className="w-full" key={item.id}>
                        <div className="w-full p-4 flex justify-between items-center">
                          <span className="w-[25%] lg:w-[40%] flex items-center gap-1">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                            <h5 className="text-[10px] lg:text-[12px] text-[#1A1A1A]">
                              {item.name}
                            </h5>
                          </span>
                          <h5 className="w-[20%] lg:w-[15%] flex justify-center text-[#1A1A1A] text-[12px]">
                            ${item.price}
                          </h5>
                          <div className="w-[30%] lg:w-[15%] rounded-[170px] border-[#E5E5E5] border-[1px] p-1 flex justify-between">
                            <span
                              className="w-[24px] h-[24px] cursor-pointer rounded-full bg-[#F2F2F2] text-[#1A1A1A] flex justify-center items-center"
                              onClick={() => decreaseCount(item.id)}
                            >
                              -
                            </span>
                            <span className="text-[#1A1A1A] text-[12px] flex justify-center items-center">
                              {item.quantity}
                            </span>
                            <span
                              className="w-[24px] h-[24px] cursor-pointer rounded-full bg-[#F2F2F2] text-[#1A1A1A] flex justify-center items-center"
                              onClick={() => increaseCount(item.id)}
                            >
                              +
                            </span>
                          </div>
                          <h5 className="w-[15%] flex justify-center text-[#1A1A1A] text-[12px]">
                            ${item.price * item.quantity}
                          </h5>
                          <span
                            className="cursor-pointer"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <SlClose size={16} color="#CCCCCC" />
                          </span>
                        </div>

                        {cart.length > 1 && index < cart.length - 1 && (
                          <hr className="border-gray-300" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex items-center justify-between border-t-[1px] border-[#E5E5E5] p-3 text-[#1A1A1A] text-[12px] font-medium">
                    <Link
                      className="bg-[#F2F2F2] py-1 px-3 rounded-[43px]"
                      href={"/"}
                    >
                      Return to Shop
                    </Link>
                    <Link
                      className="bg-[#F2F2F2] py-1 px-3 rounded-[43px]"
                      href={"/"}
                    >
                      Update Cart
                    </Link>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center rounded-[8px] border[#E5E5E5] border-[1px] p-3">
                  <h1 className="text-[#1A1A1A] text-[12px] lg:text-[16px] font-medium">
                    Coupon Code
                  </h1>
                  <form
                    onSubmit={handleCouponSubmit}
                    className="w-[70%] h-[36px] flex justify-between rounded-[46px] border-[#E5E5E5] border-[1px]"
                  >
                    <input
                      type="text"
                      placeholder="Enter code"
                      name="couponCode"
                      value={couponCode}
                      onChange={handleCouponChange}
                      className="w-[60%] outline-0 px-3 placeholder:text-[#999999] placeholder:font-medium text-[#1A1A1A] text-[12px]"
                    />
                    <button
                      className="bg-[#333333] rounded-[46px] px-2 text-[8px] lg:text-[12px] font-semibold cursor-pointer"
                      type="submit"
                    >
                      Apply Coupon
                    </button>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-[33%] mt-5 lg:mt-0 flex flex-col gap-4 border-[#E5E5E5] border-[1px] p-3 rounded-[8px]">
                <h3 className="text-[#1A1A1A] text-[16px] font-medium">
                  Cart Total
                </h3>
                <span className="w-full flex items-center justify-between text-[#1A1A1A] pb-2 border-b-[1px] border-[#E5E5E5]">
                  <p className="text-[#4D4D4D] text-[10px]">Subtotal:</p>
                  <p className="text-[12px] font-medium">${cartTotal}</p>
                </span>
                <span className="w-full flex items-center justify-between text-[#1A1A1A] pb-2 border-b-[1px] border-[#E5E5E5]">
                  <p className="text-[#4D4D4D] text-[10px]">Shipping:</p>
                  <p className="text-[12px] font-medium">Free</p>
                </span>
                <span className="w-full flex items-center justify-between text-[#1A1A1A]">
                  <p className="text-[#4D4D4D] text-[14px]">Total:</p>
                  <p className="font-semibold text-[14px]">${cartTotal}</p>
                </span>
                <Link
                  href={"/checkout"}
                  className="bg-[#00B207] rounded-[43px] flex justify-center py-2 font-semibold"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          ) : (
            <div className="w-full border-[#E5E5E5] border-[1px] rounded-[8px]">
              <div className="flex flex-col items-center justify-center py-16">
                <h2 className="text-[20px] font-semibold text-[#1A1A1A] mb-4">
                  Your cart is empty
                </h2>
                <Link
                  href="/"
                  className="bg-[#00B207] text-white px-6 py-2 rounded-[43px] font-medium"
                >
                  Go to Homepage
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
