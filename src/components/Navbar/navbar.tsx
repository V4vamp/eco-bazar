"use client";

import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { TbPhoneCall } from "react-icons/tb";
import { products } from "@/data/products";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const cart = JSON.parse(stored);
      // 🔹 If you want total number of unique items:
      setCartCount(cart.length);

      // 🔹 If you want total quantity of all items:
      // setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0));
    }
  }, []);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Search results:", filteredProducts);
  };
  return (
    <nav className="w-full bg-[#FFFFFF] flex flex-col fixed z-40">
      <div className="w-full flex flex-row items-center px-[200px] justify-between py-[12px] shadow-[0px_1px_0px_0px_#E5E5E5]">
        <div className="flex flex-row gap-1 items-center">
          <IoLocationOutline color="#666666" size={15} />
          <p className="text-[12px] text-[#666666] font-poppins">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div
          className="flex flex-row gap-4 items-center text-[12px] text-[#666666]"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="flex flex-row gap-2 border-r-1 border-r-[#E5E5E5] pr-4">
            <select>
              <option value="">Eng</option>
              <option value="">Esn</option>
              <option value="">Frn</option>
            </select>
            <select name="" id="">
              <option value="">NGN</option>
              <option value="">USD</option>
            </select>
          </div>
          <div>
            <Link href={"/signin"}>Sign In</Link>/{" "}
            <Link href={"/signup"}>Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center px-[200px] justify-between py-[24px]">
        <Link href={"/"} className="flex flex-row items-center gap-2">
          <Image src={"/images/Logo.png"} alt="logo" width={32} height={32} />
          <h1 className="text-[24px] text-[#000000] font-500 font-poppins">
            EcoBazar
          </h1>
        </Link>
        <div className="flex flex-row items-center gap-2 border-[#E5E5E5] border-[1px] rounded-[6px] h-[32px] pl-[16px] font-poppins">
          <CiSearch size={15} color="#1A1A1A" />
          <input onChange={handleSearchInput} name="searchTerm" value={searchTerm} className=" placeholder:text-[#808080] placeholder:text-[12px] outline-0 text-[#333] text-[16px]" type="text" placeholder="Search" />
          <button onClick={handleSearch} className="bg-[#00B207] text-[#FFFFFF] font-600 text-[14px] h-[32px] px-[16px] rounded-[0px_6px_6px_0px] cursor-pointer">Search</button>
        </div>
        <div className="flex flex-row items-center gap-4">
          <span>
            <IoMdHeartEmpty size={24} color="#1A1A1A" />
          </span>
          <span className="h-[24px] border-[1px] border-[#CCCCCC]"></span>
          <Link className="relative" href={"/cart"}>
            <BsHandbag size={24} color="#1A1A1A" />
            {cartCount > 0 && (
              <span className="absolute w-[18px] h-[18px] bg-[#2C742F] rounded-full flex justify-center border-[#FFFFFF] border-[1px] text-[10px] font-500 -top-1 -right-1.5 ">
                {cartCount}
              </span>
            )}
          </Link>
          <span className="flex flex-col font-poppins gap[7px]">
            <p className="font-400 text-[#4D4D4D] text-[11px]">Shopping Cart</p>
            <h4 className="text-[#1A1A1A] text-[14px] font-500">NGN3,900</h4>
          </span>
        </div>
      </div>
      <div className="w-full bg-[#333333] flex flex-row items-center justify-between px-[200] py-[16px]">
        <div className="flex flex-row items-center gap-[32px] font-poppins text-gray-500 text-[14px]">
          <Link className="hover:text-[#FFFFFF] flex items-center gap-2" href={"/"}>Home <VscChevronDown /></Link>
          <Link className="hover:text-[#FFFFFF] flex items-center gap-2" href={"/Shop"}>Shop <VscChevronDown /></Link>
          <Link className="hover:text-[#FFFFFF] flex items-center gap-2" href={""}>Pages <VscChevronDown /></Link>
          <Link className="hover:text-[#FFFFFF] flex items-center gap-2" href={""}>Blog <VscChevronDown /></Link>
          <Link className="hover:text-[#FFFFFF]" href={""}>About Us</Link>
          <Link className="hover:text-[#FFFFFF]" href={""}>Contact Us</Link>
        </div>
        <div className="flex flex-row gap-[8px] font-poppins font-500 text-[14px] items-center text-[#FFFFFF]">
          <TbPhoneCall size={24} />
          <Link href={"(219) 555-0114"}>
          (219) 555-0114
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
