import { HeartPlus, X } from "lucide-react";
import { useEffect, useState } from "react";

const ProductModal = ({ isOpen, onClose, prd, addToCart, addToWishlist }) => {
  const [currImg, setCurrImg] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Reset image when product changes
  useEffect(() => {
    setCurrImg(prd?.image?.[0] || "");
  }, [prd]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      {/* Modal box */}
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:max-w-5xl p-3 sm:p-6 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-2 right-2">
          <X className="w-3 h-3 text-gray-700" />
        </button>

        {/* main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
          <div className="flex flex-col-reverse sm:flex-row items-center gap-2 h-full">
            <div className="h-full flex flex-row items-center justify-center sm:flex-col gap-3 py-3">
              {prd.image?.map((i, index) => (
                <div
                  key={index}
                  className={` ${
                    currImg === i ? "border border-gray-800 shadow-lg" : ""
                  }  rounded w-16 sm:w-28 h-16 sm:h-28`}
                  onClick={() => setCurrImg(i)}
                >
                  <img src={i} alt={i} className="w-full h-full rounded" />
                </div>
              ))}
            </div>

            <div className="flex-1 items-center py-3 h-2/3 sm:h-full w-full">
              <img
                src={currImg}
                alt={currImg}
                className="w-full h-64 sm:h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-3 sm:py-2 sm:px-2 p-1 auto-rows-min">
            <div className="col-span-1 sm:col-span-2 -mt-6 sm:mt-0">
              <h3 className="text-lg text-blue-500 font-medium tracking-wider hidden sm:block">
                Trending
              </h3>
              <h4 className="text-sm sm:text-lg font-semibold">{prd.brand}</h4>
              <p className="text-[10px] sm:text-sm text-gray-500">{prd.title}</p>
            </div>

            <div className="col-span-1 sm:col-span-2 -mt-6 sm:mt-0 flex flex-col">
              <div className="flex gap-2 items-center justify-end sm:justify-start">
                <h2 className="text-sm sm:text-xl font-bold">{prd.discount_price}</h2>
                <span className="text-xs sm:text-lg text-green-600 mt-1">
                  {prd.discount_percent}%
                </span>
                <span className="text-xs sm:text-lg text-green-600 font-semibold mt-1">
                  Off
                </span>
              </div>
              <div className="flex justify-end sm:justify-start">
              <p className="mt-.5 text-gray-400 text-[10px] sm:text-xs">MRP <span className="line-through">{prd.price}</span> Inclusive of all taxes</p>
           </div>
            </div>

            <div className="col-span-2">
              <hr className="text-gray-300" />
            </div>

            {(prd?.sizes?.length > 0 || prd?.colors?.length > 0) && (
              <div className="col-span-2 flex flex-col mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-md md:text-lg font-bold">Select Size & Colour</h3>
                </div>

                <div className="flex justify-between">
                  {/* Sizes */}
                  <div className="flex gap-2 flex-wrap">
                    {prd?.sizes?.map((s, index) => (
                      <button
                        key={index}
                        className={`border ${selectedSize === s ? "border-gray-700 bg-gray-200" : "border-gray-300" }  rounded-full px-1.5 sm:px-3 py-.5 sm:py-1 text-gray-700 cursor-pointer`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* Colors */}
                  <div className="flex gap-2 flex-wrap">
                    {prd?.colors?.map((c, index) => (
                      <button
                        key={index}
                        style={{ backgroundColor: c }}
                        className="w-4 sm:w-6 h-4 sm:h-6 rounded-full border border-gray-400 cursor-pointer"
                         onClick={() => setSelectedColor(c)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="col-span-2 flex justify-between w-full gap-2 mt-2">
               <button 
               onClick={() => addToWishlist(prd)}
               className="border border-gray-300 w-1/2 sm:w-1/3 flex items-center justify-center py-1.5 px-3 gap-2">
                <HeartPlus className="w-4 h-4 sm:w-4 sm:h-4"/>
                <span className="text-xs sm:text-sm font-semibold">Add To Wishlist</span>
               </button>
               <button 
               onClick={() => addToCart(prd)}
               className="border border-gray-300 flex-1 flex items-center justify-center py-1.5 px-3 bg-black ">
                {/* <HeartPlus className="w-4 h-4"/> */}
                <span className="text-xs sm:text-sm font-semibold text-white">Add to Bag</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
