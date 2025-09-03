"use client";

import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { TbPhoneCall } from "react-icons/tb";
import { products } from "@/data/products";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCart } from "@/contexts/CartContext";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { cartCount, cartTotal } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Search results:", filteredProducts);
  };
  return (
    <nav className="w-full bg-[#FFFFFF] flex flex-col fixed z-40">
      <div className="w-full flex flex-row items-center px-2 lg:px-[200px] justify-between py-[12px] shadow-[0px_1px_0px_0px_#E5E5E5]">
        <div className="flex flex-row gap-1 items-center">
          <IoLocationOutline color="#666666" size={15} />
          <p className="text-[8px] lg:text-[12px] text-[#666666] font-poppins">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div
          className="flex flex-row gap-4 items-center text-[8px] lg:text-[12px] text-[#666666]"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="flex flex-col lg:flex-row gap-2 border-r-1 border-r-[#E5E5E5] pr-4">
            <select>
              <option value="">ENG</option>
              <option value="">ESP</option>
              <option value="">FRN</option>
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
      <div className="w-full flex flex-col lg:flex-row items-center px-6 lg:px-[200px] gap-2 lg:justify-between py-[24px]">
        <Link
          href={"/"}
          className="hidden lg:flex flex-row items-center gap-2 "
        >
          <Image src={"/images/Logo.png"} alt="logo" width={32} height={32} />
          <h1 className="text-[24px] text-[#000000] font-500 font-poppins">
            EcoBazar
          </h1>
        </Link>
        <div className="w-full lg:w-auto flex flex-row items-center gap-2 border-[#E5E5E5] border-[1px] rounded-[6px] h-[32px] pl-[16px] font-poppins">
          <CiSearch size={15} color="#1A1A1A" />
          <input
            onChange={handleSearchInput}
            name="searchTerm"
            value={searchTerm}
            className=" placeholder:text-[#808080] placeholder:text-[12px] outline-0 text-[#333] text-[16px] w-2/3 lg:w-auto"
            type="text"
            placeholder="Search"
          />
          <button
            onClick={handleSearch}
            className="bg-[#00B207] text-[#FFFFFF] font-600 text-[14px] h-[32px] px-[16px] rounded-[0px_6px_6px_0px] cursor-pointer"
          >
            Search
          </button>
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
            <h4 className="text-[#1A1A1A] text-[14px] font-500">${cartTotal.toFixed(2)}</h4>
          </span>
        </div>
      </div>
      <div className="w-full bg-[#333333] hidden lg:flex flex-row items-center justify-between px-[200] py-[16px]">
        <div className="hidden lg:flex flex-row items-center gap-[32px] font-poppins text-gray-500 text-[14px]">
          <Link
            className="hover:text-[#FFFFFF] flex items-center gap-2"
            href={"/"}
          >
            Home <VscChevronDown />
          </Link>
          <Link
            className="hover:text-[#FFFFFF] flex items-center gap-2"
            href={"/Shop"}
          >
            Shop <VscChevronDown />
          </Link>
          <Link
            className="hover:text-[#FFFFFF] flex items-center gap-2"
            href={""}
          >
            Pages <VscChevronDown />
          </Link>
          <Link
            className="hover:text-[#FFFFFF] flex items-center gap-2"
            href={""}
          >
            Blog <VscChevronDown />
          </Link>
          <Link className="hover:text-[#FFFFFF]" href={""}>
            About Us
          </Link>
          <Link className="hover:text-[#FFFFFF]" href={""}>
            Contact Us
          </Link>
        </div>
        
        <div className="hidden lg:flex flex-row gap-[8px] font-poppins font-500 text-[14px] items-center text-[#FFFFFF]">
          <TbPhoneCall size={24} />
          <Link href={"(219) 555-0114"}>(219) 555-0114</Link>
        </div>
      </div>
      <div className="w-full bg-[#333] flex items-center justify-between px-4 py-3 lg:hidden">
        <Link
          href={"/"}
          className="lg:hidden flex flex-row items-center gap-2 "
        >
          <Image src={"/images/Logo.png"} alt="logo" width={24} height={24} />
          <h1 className="text-[20px] text-[#FFF] font-medium font-poppins">
            EcoBazar
          </h1>
        </Link>
        <span onClick={handleMenuOpen}>
          <GiHamburgerMenu />
        </span>
      </div>
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-300 flex h-[screen] text-[12px]`}
          onClick={handleMenuOpen}
        >
          <div
            className={`bg-white w-3/4 max-w-xs h-full shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              className="text-[#333] font-poppins flex items-center gap-2"
              href="/"
              onClick={handleMenuOpen}
            >
              Home <VscChevronDown />
            </Link>
            <Link
              className="text-[#333] font-poppins flex items-center gap-2"
              href="/Shop"
              onClick={handleMenuOpen}
            >
              Shop <VscChevronDown />
            </Link>
            <Link
              className="text-[#333] font-poppins flex items-center gap-2"
              href=""
              onClick={handleMenuOpen}
            >
              Pages <VscChevronDown />
            </Link>
            <Link
              className="text-[#333] font-poppins flex items-center gap-2"
              href=""
              onClick={handleMenuOpen}
            >
              Blog <VscChevronDown />
            </Link>
            <Link
              className="text-[#333] font-poppins"
              href=""
              onClick={handleMenuOpen}
            >
              About Us
            </Link>
            <Link
              className="text-[#333] font-poppins"
              href=""
              onClick={handleMenuOpen}
            >
              Contact Us
            </Link>
            <div className="flex flex-row gap-2 items-center mt-4 text-[#333]">
              <TbPhoneCall size={20} />
              <Link href={"(219) 555-0114"}>(219) 555-0114</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
