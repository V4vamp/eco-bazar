"use client";

import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { products } from "@/data/products";
import Product from "../Product/products";

const Popular = () => {
  const slicdedProducts = products.slice(0, 10)

  return (
    <div className="w-full flex flex-col gap-4 font-poppins px-[200px]">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-[#1A1A1A] text-[24px] font-bold">
          Popular Products
        </h1>
        <Link
          className="text-[12px] text-[#00B207] font-medium flex flex-row items-center gap-2"
          href={"/products"}
        >
          View All <IoIosArrowRoundForward size={16} />
        </Link>
      </header>
      <Product className="grid grid-rows-2 grid-cols-5" products={slicdedProducts} />
    </div>
  );
};

export default Popular;
