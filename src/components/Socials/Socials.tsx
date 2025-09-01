"use client";

import { companies } from "@/data/companies";
import React, { useState } from "react";
import Image from "next/image";
import { socials } from "@/data/socials";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="w-full flex flex-col px-6 lg:px-[200px] pb-10 font-poppins gap-8">
      <div className="w-full flex items-center justify-between">
        {companies.map((company, index) => (
          <div
            key={company.id}
            className={`w-1/6 flex items-center justify-center ${
              index !== companies.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <div className="w-full h-[12px] lg:h-[32px] relative">
              <Image src={company.image} alt={company.name} fill />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <h2 className="font-semibold text-[16px] lg:text-[24px] text-[#1A1A1A]">
          Follow us on Instgram
        </h2>
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-4">
          {socials.map((social, index) => (
            <div
              key={social.id}
              className="h-[150px] relative rounded-[10px] overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={social.img}
                alt={social.name}
                fill
                className="object-cover"
              />
              <Link
                href={social.link}
                className={`absolute inset-0 flex justify-center items-center bg-[#2B572ECC] 
          transition-opacity duration-300 ease-in-out
          ${isHovered === index ? "opacity-100" : "opacity-0"}`}
              >
                <FaInstagram size={24} color="#FFF" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
