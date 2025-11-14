import React, { useState } from "react";
import Header from "./components/Header";
import FilterCard from "./components/FilterCard";
import ProductCard from "./components/ProductCard";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 124,
    qty: 0,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 256,
    qty: 0,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 129.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 89,
    qty: 0,
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 49.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 178,
    qty: 0,
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 79.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 203,
    qty: 0,
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 159.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 95,
    qty: 0,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 59.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 167,
    qty: 0,
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 34.99,
    category: "fitness",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 142,
    qty: 0,
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 24.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 78,
    qty: 0,
  },
  {
    id: 10,
    name: "Gaming Keyboard",
    price: 69.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 198,
    qty: 0,
  },
  {
    id: 11,
    name: "Leather Wallet",
    price: 39.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231693?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 110,
    qty: 0,
  },
  {
    id: 12,
    name: "Electric Kettle",
    price: 49.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1606813902779-cb2cc8f4b45d?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 132,
    qty: 0,
  },
  {
    id: 13,
    name: "Air Purifier",
    price: 199.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1598300053650-7a6b79b0ddee?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 154,
    qty: 0,
  },
  {
    id: 14,
    name: "Fitness Tracker",
    price: 99.99,
    category: "fitness",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 201,
    qty: 0,
  },
  {
    id: 15,
    name: "Office Chair",
    price: 249.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1616627456101-66e87f2c3b63?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 312,
    qty: 0,
  },
  {
    id: 16,
    name: "Casual T-Shirt",
    price: 29.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 74,
    qty: 0,
  },
  {
    id: 17,
    name: "Wireless Charger",
    price: 39.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 142,
    qty: 0,
  },
  {
    id: 18,
    name: "Travel Mug",
    price: 24.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1600172454284-93484f5e3f38?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 91,
    qty: 0,
  },
  {
    id: 19,
    name: "Smartphone Tripod",
    price: 44.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1589820296156-2454bb8b3f13?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 126,
    qty: 0,
  },
  {
    id: 20,
    name: "Portable Power Bank",
    price: 49.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1616486701660-9bdbcc1f40d5?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 173,
    qty: 0,
  },
  {
    id: 21,
    name: "Desk Lamp",
    price: 34.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1582719478141-2f5699d52f55?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 102,
    qty: 0,
  },
  {
    id: 22,
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900b9?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 231,
    qty: 0,
  },
  {
    id: 23,
    name: "Sports Water Bottle",
    price: 19.99,
    category: "fitness",
    image:
      "https://images.unsplash.com/photo-1600180758890-6ddc749b0c9b?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 187,
    qty: 0,
  },
];

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState('')

  const categories = [
    "all",
    "electronics",
    "fashion",
    "accesories",
    "home",
    "fitness",
  ];

  // const products = [
  //   { id: 1, name: 'Wireless Headphones', price: 89.99, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', rating: 4.5, reviews: 124 },
  //   { id: 2, name: 'Smart Watch', price: 299.99, category: 'electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', rating: 4.8, reviews: 256 },
  //   { id: 3, name: 'Running Shoes', price: 129.99, category: 'fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', rating: 4.3, reviews: 89 },
  //   { id: 4, name: 'Laptop Backpack', price: 49.99, category: 'accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', rating: 4.6, reviews: 178 },
  //   { id: 5, name: 'Coffee Maker', price: 79.99, category: 'home', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop', rating: 4.4, reviews: 203 },
  //   { id: 6, name: 'Sunglasses', price: 159.99, category: 'fashion', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', rating: 4.7, reviews: 95 },
  //   { id: 7, name: 'Bluetooth Speaker', price: 59.99, category: 'electronics', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', rating: 4.2, reviews: 167 },
  //   { id: 8, name: 'Yoga Mat', price: 34.99, category: 'fitness', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop', rating: 4.5, reviews: 142 },
  // ];

  const handleCategoriesChange = (e) => {
    setSelectedCategories(e.target.value);

    const filterPrd = products.filter((p) => p.category === e.target.value);
    // console.log(filterPrd)

    if (e.target.value === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(filterPrd);
    }
  };

  const addItemToWishlist = (item) => {
    if (wishlist.includes(item)) {
      setWishlist(wishlist.filter((i) => i !== item));
    } else {
      setWishlist((prev) => [...prev, item]);
    }
  };

  const addItemToCart = (prd) => {
    const isPrdAlready = cart.find((c) => c.id === prd.id);

    if (isPrdAlready) {
      const newItems = cart.map((c) =>
        c.id === prd.id ? { ...c, qty: c.qty + 1 } : c
      );
      setCart(newItems);
    } else {
      setCart((prev) => [...prev, { ...prd, qty: 1 }]);
    }

    setMessage(`${prd.name} added to cart!`)
  };

  const removeItem = (id) => {
    const leftItems = cart.filter((i) => i.id !== id);
    setCart(leftItems);
  };

  const updateQty = (id, qty) => {
    if (qty === 0) {
      removeItem(id);
    } else {
      const updatedItems = cart.map((i) =>
        i.id === id ? { ...i, qty: qty } : i
      );
      setCart(updatedItems);
    }
  };

  const handleCartClick = () => setIsCartOpen(true);

  const onClose = () => setIsCartOpen(false);

  const onToastClose = () => {
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        wishlist={wishlist}
        cart={cart}
        handleCartClick={handleCartClick}
      />

      <main className="px-5 mt-4">
        <FilterCard
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoriesChange={handleCategoriesChange}
        />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {filteredProducts.map((prd) => (
            <ProductCard
              key={prd.id}
              prd={prd}
              wishlist={wishlist}
              addItemToWishlist={addItemToWishlist}
              addItemToCart={addItemToCart}
            />
          ))}
        </div>
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={onClose}
        cart={cart}
        removeItem={removeItem}
        updateQty={updateQty}
      />

      {
        message && (
          <Toast
          message={message}
          onClose={onToastClose}
          />
        )
      }
    </div>
  );
};

export default App;
