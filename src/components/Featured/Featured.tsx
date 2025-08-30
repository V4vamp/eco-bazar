import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Product from "../Product/products";
import { products } from "@/data/products";

const Featured = () => {
  const sliced = products.slice(0, 5);
  return (
    <div className="w-full px-[200px] flex flex-col gap-6 pb-[40px] font-poppins">
      <div className="w-full h-[250px] relative rounded-[10px] overflow-hidden">
        <Image
          src={"/images/crop.png"}
          alt="green crops"
          fill
          className="object-cover object-bottom"
        />
        <div className="w-full flex justify-end py-10 px-5 z-10 absolute">
          <div className="w-1/3 flex flex-col items-start gap-2">
            <p className="uppercase text-[#FFFFFF] text-[12px]">Summer Sale</p>
            <h4 className="uppercase font-semibold text-[#FF8A00] text-[36px] flex gap-1 items-center">
              37%
              <span className="text-[#FFF]">Off</span>
            </h4>
            <p className="text-[10px] text-[#FFFFFF] font-normal w-[80%]">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <button className="bg-[#00B207] rounded-[43px] flex justify-center items-center gap-1 hover:gap-3 transition-all py-2 px-3 w-[40%] cursor-pointer font-semibold text-[#FFF] text-[12px]">
              Show Now
              <IoIosArrowRoundForward size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <header className="w-full flex items-center justify-between">
          <h2 className="text-[#1A1A1A] text-[24px] font-semibold">
            Featured Products
          </h2>
          <Link
            href={""}
            className="flex items-center gap-2 text-[#00B207] text-[14px] font-medium"
          >
            View all <IoIosArrowRoundForward size={16} />
          </Link>
        </header>
        <Product products={sliced} className="grid grid-cols-5" />
      </div>
    </div>
  );
};

export default Featured;
