import { Heart, ShoppingBasket, ShoppingCart } from "lucide-react";
import React from "react";

const Header = ({wishlist, cart, handleCartClick}) => {
  return (
    <nav className="relative bg-white shadow-lg  after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px">
      <div className="w-full py-5 px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ShopHub
          </h1>
          <div className="flex gap-6">
            <div className="relative">
              <Heart className="w-6 h-6 text-gray-600" />
              { wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{wishlist.length}</span>}
              
            </div>
             
             <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" onClick={handleCartClick} />
                {cart.length > 0 &&  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full  w-5 h-5 flex items-center justify-center">{cart.length}</span>}
               
             </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
