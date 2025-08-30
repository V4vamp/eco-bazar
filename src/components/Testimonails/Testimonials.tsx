import { testimonials } from "@/data/testimonials";
import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { StarRating } from "../StarRating/Star";

const Testimonials = () => {
  return (
    <div className="w-full bg-[#F2F2F2] flex flex-col gap-4 px-[200px] py-[60px] font-poppins">
      <header className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-[24px] text-[#1A1A1A]">
          Client Testimonials
        </h2>
        <div className="flex items-center gap-3">
          <span className="w-[24px] h-[24px] rounded-full bg-[#FFFFFF] flex justify-center items-center text-[#1A1A1A] hover:text-[#FFF] hover:bg-[#00B207] cursor-pointer">
            <IoIosArrowRoundBack size={16} />
          </span>
          <span className="w-[24px] h-[24px] rounded-full bg-[#FFFFFF] flex justify-center items-center text-[#1A1A1A] hover:text-[#FFF] hover:bg-[#00B207] cursor-pointer">
            <IoIosArrowRoundForward size={16} />
          </span>
        </div>
      </header>
      <div className="w-full grid grid-cols-3 gap-6 ">
        {testimonials.map((test) => (
          <div
            key={test.id}
            className="flex flex-col gap-4 shadow-[#00000003] bg-[#FFF] rounded-[8px] p-4"
          >
            <span className="text-[#00B207] opacity-[30%]">
              <BiSolidQuoteAltRight size={32} />
            </span>

            <p className="text-[#4D4D4D] text-[12px]">{test.review}</p>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[32px] h-[32px] relative rounded-full overflow-hidden">
                  <Image
                    src={test.image}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <h4 className="text-[#1A1A1A] text-[12px] font-semibold">
                    {test.name}
                  </h4>
                  <p className="text-[8px] text-[#999999]">{test.role}</p>
                </span>
              </div>
              <StarRating value={test.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
