import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { categories } from "@/data/products";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-4 font-poppins px-6 lg:px-[200px]">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-[#1A1A1A] text-[16px] lg:text-[24px] font-bold">Popular Categories</h1>
        <Link className="text-[10px] lg:text-[12px] text-[#00B207] font-medium flex flex-row items-center gap-2" href={"/categories"}>
          View All <IoIosArrowRoundForward size={16} />
        </Link>
      </header>
      <div className="grid grid-rows-4 grid-cols-3 lg:grid-rows-2 lg:grid-cols-6 gap-6">
        {categories.map((item, idx) => (
          <Link
            href={`/categories/${item.domain}`}
            key={idx}
            className="bg-white rounded-[5px] border-[#E5E5E5] border-[1px] shadow p-6 flex flex-col items-center justify-center font-poppins text-gray-700 hover:border-[#2C742F] hover:text-[#2C742F] transition"
          >
            <Image 
            src={item.imgUrl}
            alt={item.category}
            width={180}
            height={120}
            />
            <span className="text-[10px] text-center font-medium">
              {item.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
