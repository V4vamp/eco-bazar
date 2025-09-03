import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { PiEyeThin } from "react-icons/pi";
import { products } from "@/data/products";
import Product from "../Product/products";
import Countdown from "../Timer/Timer";

const HotDeals = () => {
  const slicedProducts = products.slice(1, 7);

  const nextProducts = products.slice(8);
  return (
    <div className="w-full flex flex-col font-poppins px-6 lg:px-[200px] py-[60px] bg-[#F7F7F7]">
      <header className="w-full flex items-center justify-between mb-3">
        <h2 className="text-[#1A1A1A] capitalize font-bold text-[16px] lg:text-[24px]">
          Hot deals
        </h2>
        <Link className="text-[#00B207] text-[8px] lg:text-[12px]" href={""}>
          View all
        </Link>
      </header>
      <div className="w-full lg:h-[540px] flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[40%] h-full border-[#2C742F] border-[1px] shadow-[#20B52652] p-[24px] bg-[#FFFFFF]">
          <div className="w-full h-[540px] lg:h-2/3 relative flex flex-col">
            <Image
              src={"/images/hot-deal.png"}
              alt={"apple fruit"}
              fill
              className="object-contain"
            />
            <div className="w-full h-full absolute flex flex-col justify-between">
              <header className="w-full flex items-center gap-2">
                <span className="bg-[#EA4B48] px-2 rounded-[4px] text-[12px] font-medium">
                  Sale 50%
                </span>
                <span className="bg-[#2388FF] px-2 rounded-[4px] text-[12px] font-medium">
                  Best Sale
                </span>
              </header>
              <div className="w-full flex justify-between items-center">
                <span className="bg-[#F2F2F2] w-[46px] h-[46px] rounded-full flex justify-center items-center">
                  <IoMdHeartEmpty size={20} color="#1A1A1A" />
                </span>
                <button className="w-[65%] flex items-center justify-center py-3 cursor-pointer gap-3 rounded-[43px] bg-[#00B207]">
                  <p>Add to Cart</p>
                  <BsHandbag />
                </button>
                <span className="bg-[#F2F2F2] w-[46px] h-[46px] rounded-full flex justify-center items-center">
                  <PiEyeThin size={20} color="#1A1A1A" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col h-1/3 items-center justify-between mt-3">
            <p className="text-[#2C742F] text-[14px] ">Chinese Apples</p>
            <span className="flex flex-row gap-1 items-center text-[16px] font-medium">
              <h4 className="text-[#1A1A1A]">$40</h4>
              <h4 className="line-through text-[#999999]">$50</h4>
            </span>
            <div className="flex gap-1 items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < 0 ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
                <span className="text-[10px] text-[#808080]">(524 Feedbacks)</span>
            </div>
            <p className="text-[#999999] text-[12px]">Hurry Up offer ends in:</p>
            <Countdown className="text-[14px] text-[#1A1A1A] font-bold" id="font-medium text-[#999999] text-[10px] uppercase"  />
          </div>
        </div>
        <div className="lg:w-[60%] lg:h-full w-full">
          <Product
            className="grid lg:grid-rows-2 lg:grid-cols-3 grid-cols-2 grid-rows-3"
            products={slicedProducts}
          />
        </div>
      </div>
      <Product products={nextProducts} className="w-full grid lg:grid-cols-5 grid-cols-2" />
    </div>
  );
};

export default HotDeals;
