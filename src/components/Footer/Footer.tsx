"use client";

import { payments } from "@/data/payments";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const socialHandles = [
  {
    icon: FaFacebookF,
    handle: "",
    social: "facebook",
  },
  {
    icon: FaInstagram,
    handle: "",
    social: "instagram",
  },
  {
    icon: FaTwitter,
    handle: "",
    social: "twitter",
  },
  {
    icon: FaPinterestP,
    handle: "",
    social: "pinterest",
  },
];
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <footer className="w-full flex flex-col font-poppins">
      <div className="w-full flex flex-col gap-3 lg:flex-row justify-between items-center border-[#E5E5E5] border-[1px] bg-[#F7F7F7] px-6 lg:px-[200px] py-10">
        <div className="flex flex-col">
          <h3 className="font-semibold text-[20px] text-[#1A1A1A]">
            Subcribe our Newsletter
          </h3>
          <p className="text-[10px] text-[#999999] w-full lg:w-3/5">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="w-full flex items-center gap-2">
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md overflow-hidden rounded-[20px] lg:rounded-[43px] border border-gray-200 bg-white"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 text-[10px] lg:text-sm text-gray-700 placeholder-[#808080] focus:outline-none w-2/3"
              required
            />
            <button
              type="submit"
              className="bg-[#6AC13C] rounded-[20px] lg:rounded-[43px] px-6 py-2 text-[10px] lg:text-sm flex justify-center items-center font-medium text-white hover:bg-[#5AA830] transition-colors duration-300 w-1/3"
            >
              Subscribe
            </button>
          </form>
          <div className="flex items-center gap-1">
            {socialHandles.map((handle, index) => (
              <Link
                key={index}
                className="text-[#000] w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#00B207] hover:text-[#FFF]"
                href={`www.${handle.social}.com/${handle.handle}`}
              >
                {<handle.icon size={16} />}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1A1A1A] px-6 lg:px-[200px] py-10 flex flex-col">
        <div className="w-full flex flex-col gap-8 lg:flex-row justify-between">
          <div className="flex flex-col gap-2 w-full lg:w-[25%]">
            <Link href={"/"} className="flex flex-row items-center gap-2">
              <Image
                src={"/images/Logo.png"}
                alt="logo"
                width={32}
                height={32}
              />
              <h1 className="text-[24px] text-[#FFF] font-500 font-poppins">
                EcoBazar
              </h1>
            </Link>
            <p className="text-[#808080] text-[10px] w-full">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <h4 className="flex items-center gap-3 text-[10px] text-[#808080]">
              <span className="font-medium text-[12px] text-[#FFFFFF] border-b-[2px] border-[#20B526] shadow-[#20B526]">
                (219) 555-0114
              </span>
              or
              <span className="font-medium text-[12px] text-[#FFFFFF] border-b-[2px] border-[#20B526] shadow-[#20B526]">
                Proxy@gmail.com
              </span>
            </h4>
          </div>
          <div className="w-full lg:w-[70%] grid grid-cols-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[#FFF] text-[12px]">
                My Account
              </h4>
              {["My Account", "Order History", "Shopping Cart", "WishList"].map(
                (item, index) => (
                  <Link
                    className="text-[10px] text-[#808080] hover:text-[#FFF]"
                    key={index}
                    href={""}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[#FFF] text-[12px]">Helps</h4>
              {["Contact", "FAQs", "Terms & Condition", "Privacy Policy"].map(
                (item, index) => (
                  <Link
                    className="text-[10px] text-[#808080] hover:text-[#FFF]"
                    key={index}
                    href={""}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[#FFF] text-[12px]">Proxy</h4>
              {["About", "Shop", "Product", "Track Order"].map(
                (item, index) => (
                  <Link
                    className="text-[10px] text-[#808080] hover:text-[#FFF]"
                    key={index}
                    href={""}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[#FFF] text-[12px]">
                Categories
              </h4>
              {[
                "Fruits & Vegetables",
                "Fish & Meat",
                "Bread & Bakery",
                "Beauty & Health",
              ].map((item, index) => (
                <Link
                  className="text-[10px] text-[#808080] hover:text-[#FFF]"
                  key={index}
                  href={""}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] bg-[#80808] opacity-5 mt-12 py-4" />
        <div className="w-full flex justify-between items-center">
          <p className="text-[#808080] text-[8px] lg:text-[10px]">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="grid grid-cols-5 gap-2 items-center">
            {payments.map((payment, index) => (
              <Image
                src={payment}
                key={index}
                alt=""
                height={12}
                width={32}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
