import { Heart, Star } from "lucide-react";
import React from "react";
import ProductImageSlider from "./ProductImageSlider";

const ProductCard = ({ prd, wishlist, addItemToWishlist, addItemToCart }) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl flex flex-col relative w-full transform transition duration-300 hover:scale-105 hover:-translate-y-2">
        <span className="absolute left-2 top-2 rounded-full bg-blue-500 text-white font-semibold text-xs py-1 px-3">
          {prd.category}
        </span>

        <button
          onClick={() => addItemToWishlist(prd.title)}
          className="absolute right-2 top-2 bg-white shadow-2xl rounded-full p-2"
        >
          <Heart
            className={`w-4 h-4  ${
              wishlist.includes(prd.title)
                ? "text-red-500 fill-red-500"
                : "text-gray-600"
            }`}
          />
        </button>

        <ProductImageSlider images={prd.image} />
        {/* <div className="flex items-center justify-center w-full mt-2">
          <img
            src={prd.image[0]}
            alt={prd.title}
            className="w-auto h-1/2 rounded-t-xl"
          />
        </div> */}

        <div className="py-2 px-3 flex flex-col gap-2">
          <h2 className="text-sm sm:text-md md:text-lg font-medium text-[#001325] tracking-tight">
            {prd.brand}
          </h2>
          <p className="text-[#192837] mb-0.5 -mt-1 font-normal text-xs sm:text-sm">
            {prd.title.length > 20
              ? prd.title.substring(0, 30) + "..."
              : prd.title}
          </p>

          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <Star className="w-2 sm:w-4 h-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold">
                {prd.rating.rate}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 ml-2">
              ({prd.rating.count} reviews)
            </p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xs sm:text-sm md:text-xl text-green-600 ">
              ₹{prd.price}
            </h1>

            <button
              onClick={() => addItemToCart(prd)}
              className="rounded-lg bg-gradient-to-r from-blue-400 via-indigo-600 to-purple-600 flex items-center py-1.5 sm:py-2 px-2 sm:px-4 text-white text-xs sm:text-sm font-semobild cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
