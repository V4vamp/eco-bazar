"use client";


import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { PiEyeThin } from "react-icons/pi";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  image: string;
};

type ProductProps = {
  products: Product[];
  className?: string;
}

const Product = ({products, className }: ProductProps) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const {
    addToCart,
    toggleFavorite,
    isInCart,
    isFavorited,
  } = useCart();

  return (
    <div className={className}>
      {products.map((product, index) => {
        const favorited = isFavorited(product.id);
        const inCart = isInCart(product.id);
        return (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={product.id}
            className="relative flex flex-col gap-4 font-poppins border-[#E5E5E5] border-[1px] p-4 bg-white shadow-sm hover:shadow-[#20B52652] hover:border-[#2C742F] transition"
          >
            {product.discount && (
              <span className="absolute font-medium top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                Sale {product.discount}%
              </span>
            )}

            {isHovered === index && (
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`flex justify-center items-center w-[36px] h-[36px] text-[#1A1A1A] ${
                    favorited
                      ? "bg-red-500 text-gray-50"
                      : "bg-[#FFFFFF] border-[#F2F2F2] border-[1px] hover:text-red-500"
                  } rounded-full`}
                >
                  <IoMdHeartEmpty size={20} />
                </button>
                <button className="flex justify-center items-center w-[36px] h-[36px] text-[#1A1A1A] bg-[#FFFFFF] border-[#F2F2F2] border-[1px] rounded-full">
                  <PiEyeThin size={20} />
                </button>
              </div>
            )}

            <div className="w-full h-[140px] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2 items-start">
                <h3 className="text-sm text-[#4D4D4D] text-center font-normal">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 text-sm">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < (product.rating || 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className={`absolute text-[#1A1A1A] bottom-2 right-2 bg-gray-100 ${
                  inCart
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-600 hover:text-white"
                } p-2 rounded-full transition`}
              >
                <BsHandbag size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
