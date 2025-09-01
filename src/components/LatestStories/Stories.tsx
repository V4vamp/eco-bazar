import { latestNews } from "@/data/stories";
import Image from "next/image";
import { PiTag } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { RiChat2Line } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

const Stories = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 lg:px-[200px] pb-[40px] gap-3 font-poppins">
      <h2 className="text-[16px] lg:text-[24px] text-[#1A1A1A] font-semibold">Latest News</h2>
      <div className="w-full grid lg:grid-cols-3 gap-6">
        {latestNews.map((news) => (
          <div
            key={news.id}
            className="flex flex-col shadow-[#00000014] rounded-[8px] overflow-hidden"
          >
            <div className="w-full h-[240px] relative overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute w-full h-full flex items-end p-4">
                <span className="flex flex-col items-center justify-center w-[32px] h-[32px] bg-[#FFF] rounded-[1px]">
                  <p className="text-[#1A1A1A] font-medium text-[12px] m-0 p-0">
                    {news.date.day}
                  </p>
                  <p className="text-[8px] text-[#808080] -mt-1 p-0">
                    {news.date.month}
                  </p>
                </span>
              </div>
            </div>
            <div className="w-full p-4 flex flex-col items-start border-[#E5E5E5] border-[1px] gap-4">
              <div className="w-full flex items-center gap-4">
                <span className="flex items-center gap-2 text-[#4D4D4D] text-[12px]">
                  <PiTag size={16} />
                  {news.category}
                </span>
                <span className="flex items-center gap-2 text-[#4D4D4D] text-[12px]">
                  <FaRegUser size={16} />
                  By {news.author}
                </span>
                <span className="flex items-center gap-2 text-[#4D4D4D] text-[12px]">
                  <RiChat2Line size={16} />
                  {news.comments} comments
                </span>
              </div>
              <p className="hover:text-[#2C742F] text-[#1A1A1A] font-medium text-[12px]">
                {news.title}
              </p>
              <button className="flex items-center gap-2 cursor-pointer text-[#00B207] font-semibold text-[12px]">
                Read More 
                <IoIosArrowRoundForward size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
