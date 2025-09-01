"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/navbar";
import { GoHome } from "react-icons/go";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useParams } from "next/navigation";
import { categories } from "@/data/products";
import Image from "next/image";
import Countdown from "@/components/Timer/Timer";

const Page = () => {
  const params = useParams();
  const category = params.category as string;

  const item = categories.find((cat) => cat.domain === category);

  if (!item) {
    return <h1>Category not found</h1>;
  }
  return (
    <div className="w-full flex flex-col bg-[#FFFFFF] overflow-hidden">
      <NavBar />
      <main className="w-full flex flex-col mt-[250px] lg:mt-52 gap-10 px-6 lg:px-[200px]">
        <header className="w-full flex items-center">
          <Link href="/">
            <GoHome />
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link href="">Category</Link>
          <MdOutlineKeyboardArrowRight />
          <h4>{item.category}</h4>
        </header>
        <div className="w-full h-[250px] rounded-[10px] overflow-hidden relative">
            <Image 
            src={"/images/crop.png"}
            alt="Crop Image"
            fill
            className="object-cover transform scale-x-[-1]"
            />
            <div>
                <p>Best deals</p>
                <h2>Sale of the Month</h2>
                <Countdown className="" />
                <button>
                    Shop Now
                </button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
