"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/navbar";
import { GoHome } from "react-icons/go";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useParams } from "next/navigation";
import { categories } from "@/data/products";
import Image from "next/image";
import Countdown from "@/components/Timer/Timer";
import { products } from "@/data/products";
import Product from "@/components/Product/products";
import paginate from "@/utils/paginate";

const Page = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(4);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = products.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(products.length / rowsPerPage);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginated = paginate(pageNumbers);
  console.log(paginated);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  const category = params.category as string;

  const item = categories.find((cat) => cat.domain === category);

  if (!item) {
    return <h1>Category not found</h1>;
  }
  return (
    <div className="w-full flex flex-col bg-[#FFFFFF] overflow-hidden font-poppins">
      <NavBar />
      <main className="w-full flex flex-col mt-[250px] lg:mt-52 gap-7 pb-10">
        <header className="w-full flex items-center px-6 lg:px-[200px]">
          <Link href="/">
            <GoHome size={16} color="#666666" />
          </Link>
          <MdOutlineKeyboardArrowRight size={16} color="#666666" />
          <Link href="" className="text-[#666666] text-[14px]">Categories</Link>
          <MdOutlineKeyboardArrowRight size={16} color="#666666" />
          <h4 className="text-[#20B526] text-[14px]">{item.category}</h4>
        </header>
        <div className="w-full px-6 lg:px-[200px]">
          <div className="w-full h-[150px] lg:h-[250px] rounded-[10px] overflow-hidden relative">
            <Image
              src={"/images/crop.png"}
              alt="Crop Image"
              fill
              className="object-cover object-bottom transform scale-x-[-1]"
            />
            <div className="absolute w-full h-full px-2 lg:px-8 flex flex-col justify-center items-start gap-1 lg:gap-2">
              <p className="uppercase text-[8px] lg:text-[12px]">Best deals</p>
              <div className="w-full flex gap-8 items-center">
                <h2 className="font-bold text-[16px] lg:text-[32px] text-[#FFFFFF]">
                  Sale of the Month
                </h2>
                <span className="w-[32px] h-[32px] lg:w-[55px] lg:h-[55px] bg-[#FF8A00] flex flex-col justify-center items-center rounded-full font-bold text-[12px] lg:text-[16px]">
                  56%
                  <p className="uppercase p-0 m-0 font-normal text-[8px] lg:text-[10px]">
                    off
                  </p>
                </span>
              </div>
              <Countdown
                className="text-[#00B207] font-medium text-[12px] lg:text-[16px]"
                id="text-[#808080] uppercase text-[8px] lg:text-[10px]"
              />
              <button className="bg-[#00B207] rounded-[43] text-[12px] py-1 px-3 font-medium cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center px-6 lg:px-[200px]">
          <div className="flex flex-col lg:flex-row items-center gap-3 sm:w-full mb-5">
            <span className="p-1 rounded-[4px] border-[1px] border-[#E5E5E5] text-[#4D4D4D] text-[12px] flex items-center gap-2 sm:w-full">
              Select Category:
              <select className="lg:w-[75px] outline-none" name="" id="">
                <option value=""></option>
                {categories.map((it, idx) => (
                  <option key={idx} value="">
                    {it.category}
                  </option>
                ))}
              </select>
            </span>
            <span className="p-1 rounded-[4px] border-[1px] border-[#E5E5E5] text-[#4D4D4D] text-[12px] flex items-center gap-2 sm:w-full">
              Select Price:
              <select className="lg:w-[75px] outline-none" name="" id="">
                <option value=""></option>
              </select>
            </span>
            <span className="p-1 rounded-[4px] border-[1px] border-[#E5E5E5] text-[#4D4D4D] text-[12px] flex items-center gap-2 sm:w-full">
              Select Rating:
              <select className="lg:w-[75px] outline-none" name="" id="">
                {[0,1,2,3,4,5].map((it, idx) => (
                  <option key={idx} value="">
                    {it}
                  </option>
                ))}
              </select>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="p-1 rounded-[4px] border-[1px] border-[#E5E5E5] text-[#4D4D4D] text-[12px] flex items-center gap-2">
              Sort by:
              <select className="w-[75px] outline-none" name="" id="">
                <option value="">Latest</option>
              </select>
            </span>
            <span className="p-1 rounded-[4px] border-[1px] border-[#E5E5E5] text-[#4D4D4D] text-[12px] flex items-center gap-2">
              Show:
              <select onChange={handleRowsPerPageChange} value={rowsPerPage} className="w-[75px] outline-none" name="" id="">
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
              </select>
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between border-t-[1px] border-b-[1px] border-[#E5E5E5] py-1 px-6 lg:px-[200px]">
          <div>
            <h4>Active Filters:</h4>
          </div>
          <span>0 Results found.</span>
        </div>
        <div className="w-full px-6 lg:px-[200px]">
          <Product
            products={currentRows}
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4"
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
            <span onClick={handlePrevPage} className="bg-[#FFF] cursor-pointer border-[#E5E5E5] border-[1px] hover:bg-[#F2F2F2] rounded-full w-[32px] h-[32px] flex justify-center items-center">
                <MdOutlineKeyboardArrowLeft size={16} color={"#1A1A1A"} />
            </span>
            <div className="flex justify-center items-center">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`cursor-pointer flex justify-center items-center w-[32px] h-[32px] rounded-full text-[12px] ${
                  page === currentPage ? "bg-[#00B207] text-[#FFF]" : "text-[#666666]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
            <span onClick={handleNextPage} className="bg-[#FFF] cursor-pointer border-[#E5E5E5] border-[1px] hover:bg-[#F2F2F2] rounded-full w-[32px] h-[32px] flex justify-center items-center">
                <MdOutlineKeyboardArrowRight size={16} color={"#1A1A1A"}/>
            </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
