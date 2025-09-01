import React from "react";
import Image from "next/image";
import Countdown from "../Timer/Timer";
import { IoIosArrowRoundForward } from "react-icons/io";

const Deals = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 gap-4 font-poppins px-6 lg:px-[200px]">
      <div className="h-[530px] flex flex-col gap-2 relative overflow-hidden rounded-[8px]">
        <Image
          src={"/images/deal-1.png"}
          alt="deals"
          fill
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute w-full h-full py-[32px] flex flex-col items-center gap-4 z-10">
          <h4 className="uppercase font-medium text-[14px] text-[#FFFFFF]">
            Best Deals
          </h4>
          <h2 className="font-bold text-[26px]">Sale of the Month</h2>
          <Countdown className="text-[16px] font-medium" id="text-[12px] uppercase" />
          <button className="cursor-pointer justify-center w-[100px] h-[34px] text-[#00B207] font-semibold text-[10px] flex flex-row items-center gap-1 bg-[#FFF] rounded-[40px]">
            Shop Now <IoIosArrowRoundForward size={16} />{" "}
          </button>
        </div>
      </div>

      <div className="h-[530] flex flex-col gap-2 relative overflow-hidden rounded-[8px]">
        <Image
          src={"/images/deal-2.png"}
          alt="deals"
          fill
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute w-full h-full py-[32px] flex flex-col items-center gap-4 z-10">
          <h4 className="uppercase font-medium text-[14px] text-[#FFFFFF]">
            85% fat free
          </h4>
          <h2 className="font-bold text-[26px]">Low-Fat Meat</h2>
          <h3 className="font-light text-[16px]">
            Started at <span className="text-[#FF8A00] font-medium">NGN3,700</span>
          </h3>
          <button className="cursor-pointer justify-center w-[100px] h-[34px] text-[#00B207] font-semibold text-[10px] flex flex-row items-center gap-1 bg-[#FFF] rounded-[40px]">
            Shop Now <IoIosArrowRoundForward size={16} />{" "}
          </button>
        </div>
      </div>
      <div className="h-[530] flex flex-col gap-2 relative rounded-[8px]">
        <Image src={"/images/deal-3.png"} alt="deals" fill />
        <div className="absolute w-full h-full py-[32px] flex flex-col items-center gap-4 z-10 text-[#1A1A1A]">
          <h4 className="uppercase font-medium text-[14px]">
            summer sale
          </h4>
          <h2 className="font-bold text-[26px]">100% Fresh Fruit</h2>
          <h3 className="font-light text-[16px]">
            Up to <span className="text-[#FCC900] font-medium bg-[#1A1A1A] rounded-[5px] px-1">64% OFF</span>
          </h3>
          <button className="cursor-pointer justify-center w-[100px] h-[34px] text-[#00B207] font-semibold text-[10px] flex flex-row items-center gap-1 bg-[#FFF] rounded-[40px]">
            Shop Now <IoIosArrowRoundForward size={16} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
