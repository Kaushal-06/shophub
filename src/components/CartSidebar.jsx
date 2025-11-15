import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import React from "react";

const CartSidebar = ({ isOpen, onClose, cart, updateQty ,removeItem }) => {
  const calculateTotal = () => {
    return cart
      .reduce((sum, item) => sum + item.price * item.qty, 0)
      .toFixed(2);
  };
  return (
    <>
      {/* backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-40 transition-opacity" />
      )}

      {/* sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
           <ShoppingBag className="w-6 h-6 text-indigo-600" />
           <h2 className="text-xl font-semobold bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-transparent bg-clip-text">Shopping Cart</h2>
           <span className="bg-indigo-600 text-white rounded-full px-2 py-1 text-xs font-bold">
            {cart.length}
           </span>
          </div>
          <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 hover:shadow-2xl text-gray-600 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5"/>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-20 h-20 text-gray-300 mb-4"/>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">Add some products to get strated!</p>
                <button
                onClick={onClose}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                Continue Shopping
                </button>
            </div>
          ) : (
            <div className="space-y-4">
             {cart.map((item) => (
                <div 
                key={item.id}
                className="flex gap-3 bg-gray-50 p-3 rounded-lg hover:shadow-md transition"
                >
                    <img 
                    src={item.image[0]} 
                    alt={item.title} 
                    className="w-20 h-20 object-cover rounded" 
                    />

                    <div className="flex-1">
                     <h4 className="font-semibold text-sm line-clamp-2">{item.title}</h4>
                     <p className="text-blue-600 font-bold mt-1">{item.discount_price}</p>

                     <div className="flex items-center justify-between mt-2">
                       <div className="flex items-center gap-2 bg-white rounded-lg border">
                        <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="p-1.5 hover:bg-gray-100 rounded-l-lg transition"
                        >
                         <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold px-2">{item.qty}</span>
                        <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="p-1.5 hover:bg-gray-100 rounded-r-lg transition"
                        >
                            <Plus className="w-3.5 h-3.5"/>
                        </button>
                       </div>

                       <button
                       onClick={() => removeItem(item.id)}
                       className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition"
                       >
                        <Trash2 className="w-4 h-4"/>
                       </button>
                     </div>
                    </div>

                </div>
             ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
            <div className="border-t p-4 space-y-3 bg-gray-50">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div> 

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>

                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total:</span>
                  <span className="text-blue-600">${calculateTotal()}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition">
                    Proceed to Checkout
                </button>

                <button
                onClick={onClose}
                className="w-full border-2 border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Continue Shopping
                </button>
            </div>
        )}


        </div>
      </div>
    </>
  );
};

export default CartSidebar;
