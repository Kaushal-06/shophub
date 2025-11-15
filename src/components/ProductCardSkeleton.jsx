const ProductCardSkeleton = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-col w-full animate-pulse">
      <div className="bg-gray-200 w-full h-60"></div>
      <div className="py-2 px-3 flex flex-col gap-2">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="flex items-center justify-between mb-4 mt-2"></div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
        <div className="h-10 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
