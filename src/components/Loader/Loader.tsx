import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-[#FFF] flex justify-center items-center">
      <div className="relative w-[100px] h-[100px] flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Main Logo"
          width={36}
          height={36}
          className="z-20 object-contain"
        />
        <div className="loader absolute" />
      </div>
    </div>
  );
};

export default Loader;
