import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaShippingFastSolid, LiaHeadsetSolid } from "react-icons/lia";
import { BsBagCheck, BsBoxSeam } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-6 lg:px-[200px]">
      <div className="w-full flex flex-col gap-4 lg:flex-row justify-between lg:h-[55vh]">
        <div className="w-full lg:w-[69.5%] h-[200px] lg:h-full rounded-[10px] relative overflow-hidden">
          <Image
            src={"/images/hero-image.png"}
            alt="hero"
            fill
            className="w-full h-full object-cover rounded-[10px] object-right lg:object-[top_right] absolute top-0 right-[-10%]"
          />
          <div className="rounded-[10px] bg-[linear-gradient(98.82deg,rgba(0,0,0,0.6)_10.4%,rgba(0,0,0,0)_59.43%)] w-full h-full absolute flex flex-col justify-center px-2 lg:px-8 items-start gap-[16px]">
            <h1 className="font-semibold font-poppins text-[16px] lg:text-[24px] text-[#FFFFFF] w-1/2">
              Fresh & Healthy Organic Food
            </h1>
            <div className="flex flex-col gap-1 border-l-[1px] border-l-[#FFFFFF] w-[60%] pl-2">
              <h4 className="text-[#FFFFFF] font-poppins font-medium text-[12px] flex flex-row items-center gap-2">
                Sale up to{" "}
                <span className="bg-[#FF8A00] rounded-[5px] py-0.5 px-1">
                  30%
                </span>
              </h4>
              <p className="font-poppins font-light text-[8px] lg:text-[10px] text-[#FFF]">
                Free shipping on all your order.
              </p>
            </div>
            <button className="cursor-pointer w-[100px] h-[28px] bg-[#FFFFFF] rounded-[53px] text-[#00B207] font-poppins font-semibold text-[10px] flex flex-row items-center justify-center gap-2">
              Shop Now <IoIosArrowRoundForward size={16} />{" "}
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 lg:w-[29%] lg:flex lg:flex-col lg:h-full justify-between">
          <div className="h-[170px] lg:h-[49%] lg:w-full relative">
            <Image
              src={"/images/hero-veggie.png"}
              alt="veggie"
              fill
              className="w-full h-full object-cover rounded-[10px] object-top-right lg:object-[top] scale-x-[-1]"
            />
            <div className="rounded-[10px] p-4 w-full h-full absolute flex flex-col items-start gap-2 font-poppins">
              <h2 className="uppercase font-semibold text-[#1A1A1A] text-[10px]">
                Summer Sale
              </h2>
              <h3 className="text-[24px] text-[#1A1A1A] font-semibold">
                75% OFF
              </h3>
              <h6 className="capitalize not-odd:font-light text-[8px] text-[#666666]">
                only fruits & Vegetables
              </h6>
              <button className="cursor-pointer w-[80px] h-[24px] text-[#00B207] font-semibold text-[10px] flex flex-row items-center gap-2">
                Shop Now <IoIosArrowRoundForward size={16} />{" "}
              </button>
            </div>
          </div>
          <div className="h-[170px] lg:h-[49%] lg:w-full relative">
            <Image
              src={"/images/hero-leaf.png"}
              alt="veggie"
              fill
              className="w-full h-full object-cover rounded-[10px]"
            />
            <div className="rounded-[10px] p-1 lg:p-4 w-full h-full absolute flex flex-col items-center justify-center gap-2 font-poppins bg-[#002603CC]">
              <p className="uppercase text-[12px] font-medium">Best Deal</p>
              <h2 className="font-semibold text-[16px] lg:text-[24px] text-[#FFF] text-center w-4/5">
                Special Products Deal of the Month
              </h2>
              <button className="cursor-pointer w-[80px] h-[24px] text-[#00B207] font-semibold text-[10px] flex flex-row items-center gap-2">
                Shop Now <IoIosArrowRoundForward size={16} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-8 rounded-[8px] w-full grid grid-cols-2 lg:grid-cols-4 font-poppins bg-[#FFFFFF] shadow-[0px_8px_40px_0px_#00260314]">
        <div className="flex flex-row gap-[12px] items-center">
          <LiaShippingFastSolid size={24} color="#00B207" />
          <span className="flex flex-col gap-2">
            <h4 className="text-[#1A1A1A] text-[10px] lg:text-[12px] font-semibold">Free Shipping</h4>
            <p className="text-[#999999] text-[8px] lg:text-[10px] font-light">Free shipping on all your order</p>
          </span>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          <LiaHeadsetSolid size={24} color="#00B207" />
          <span className="flex flex-col gap-2">
            <h4 className="text-[#1A1A1A] text-[10px] lg:text-[12px] font-semibold">Customer Support 24/7</h4>
            <p className="text-[#999999] text-[8px] lg:text-[10px] font-light">Instant access to support</p>
          </span>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          <BsBagCheck size={24} color="#00B207" />
          <span className="flex flex-col gap-2">
            <h4 className="text-[#1A1A1A] text-[10px] lg:text-[12px] font-semibold">100% Secure Payment</h4>
            <p className="text-[#999999] text-[8px] lg:text-[10px] font-light">We ensure your money is safe</p>
          </span>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          <BsBoxSeam size={24} color="#00B207" />
          <span className="flex flex-col gap-2">
            <h4 className="text-[#1A1A1A] text-[10px] lg:text-[12px] font-semibold">Money Back Guarantee</h4>
            <p className="text-[#999999] text-[8px] lg:text-[10px] font-light">30 days money back guarantee</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
