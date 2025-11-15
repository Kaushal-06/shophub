import { X } from "lucide-react";
import { useEffect, useState } from "react";

const ProductModal = ({ isOpen, onClose, prd }) => {
    const [currImg, setCurrImg] = useState("");

  // Reset image when product changes
  useEffect(() => {
    setCurrImg(prd?.image?.[0] || "");
  }, [prd]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      {/* Modal box */}
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:max-w-5xl p-6 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-2 right-2">
          <X className="w-3 h-3 text-gray-700" />
        </button>

        {/* main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="flex flex-col-reverse sm:flex-row items-center gap-2 h-full">
            <div className="h-full flex flex-row items-center justify-center sm:flex-col gap-3 py-3">
              {prd.image?.map((i, index) => (
                <div
                  key={index}
                  className={` ${currImg === i ? 'border border-gray-800 shadow-2xl' : ''}  rounded w-16 sm:w-28 h-16 sm:h-28`}
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
