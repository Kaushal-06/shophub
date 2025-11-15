import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FilterCard from "./components/FilterCard";
import ProductCard from "./components/ProductCard";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";
import ProductCardSkeleton from "./components/ProductCardSkeleton";

// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 89.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviews: 124,
//     qty: 0,
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     price: 299.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
//     rating: 4.8,
//     reviews: 256,
//     qty: 0,
//   },
//   {
//     id: 3,
//     name: "Running Shoes",
//     price: 129.99,
//     category: "fashion",
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
//     rating: 4.3,
//     reviews: 89,
//     qty: 0,
//   },
//   {
//     id: 4,
//     name: "Laptop Backpack",
//     price: 49.99,
//     category: "accessories",
//     image:
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
//     rating: 4.6,
//     reviews: 178,
//     qty: 0,
//   },
//   {
//     id: 5,
//     name: "Coffee Maker",
//     price: 79.99,
//     category: "home",
//     image:
//       "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
//     rating: 4.4,
//     reviews: 203,
//     qty: 0,
//   },
//   {
//     id: 6,
//     name: "Sunglasses",
//     price: 159.99,
//     category: "fashion",
//     image:
//       "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
//     rating: 4.7,
//     reviews: 95,
//     qty: 0,
//   },
//   {
//     id: 7,
//     name: "Bluetooth Speaker",
//     price: 59.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
//     rating: 4.2,
//     reviews: 167,
//     qty: 0,
//   },
//   {
//     id: 8,
//     name: "Yoga Mat",
//     price: 34.99,
//     category: "fitness",
//     image:
//       "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviews: 142,
//     qty: 0,
//   },
//   {
//     id: 9,
//     name: "Wireless Mouse",
//     price: 24.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
//     rating: 4.4,
//     reviews: 78,
//     qty: 0,
//   },
//   {
//     id: 10,
//     name: "Gaming Keyboard",
//     price: 69.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&h=400&fit=crop",
//     rating: 4.6,
//     reviews: 198,
//     qty: 0,
//   },
//   {
//     id: 11,
//     name: "Leather Wallet",
//     price: 39.99,
//     category: "fashion",
//     image:
//       "https://images.unsplash.com/photo-1585386959984-a41552231693?w=400&h=400&fit=crop",
//     rating: 4.7,
//     reviews: 110,
//     qty: 0,
//   },
//   {
//     id: 12,
//     name: "Electric Kettle",
//     price: 49.99,
//     category: "home",
//     image:
//       "https://images.unsplash.com/photo-1606813902779-cb2cc8f4b45d?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviews: 132,
//     qty: 0,
//   },
//   {
//     id: 13,
//     name: "Air Purifier",
//     price: 199.99,
//     category: "home",
//     image:
//       "https://images.unsplash.com/photo-1598300053650-7a6b79b0ddee?w=400&h=400&fit=crop",
//     rating: 4.6,
//     reviews: 154,
//     qty: 0,
//   },
//   {
//     id: 14,
//     name: "Fitness Tracker",
//     price: 99.99,
//     category: "fitness",
//     image:
//       "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=400&fit=crop",
//     rating: 4.4,
//     reviews: 201,
//     qty: 0,
//   },
//   {
//     id: 15,
//     name: "Office Chair",
//     price: 249.99,
//     category: "home",
//     image:
//       "https://images.unsplash.com/photo-1616627456101-66e87f2c3b63?w=400&h=400&fit=crop",
//     rating: 4.8,
//     reviews: 312,
//     qty: 0,
//   },
//   {
//     id: 16,
//     name: "Casual T-Shirt",
//     price: 29.99,
//     category: "fashion",
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
//     rating: 4.2,
//     reviews: 74,
//     qty: 0,
//   },
//   {
//     id: 17,
//     name: "Wireless Charger",
//     price: 39.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviews: 142,
//     qty: 0,
//   },
//   {
//     id: 18,
//     name: "Travel Mug",
//     price: 24.99,
//     category: "accessories",
//     image:
//       "https://images.unsplash.com/photo-1600172454284-93484f5e3f38?w=400&h=400&fit=crop",
//     rating: 4.3,
//     reviews: 91,
//     qty: 0,
//   },
//   {
//     id: 19,
//     name: "Smartphone Tripod",
//     price: 44.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1589820296156-2454bb8b3f13?w=400&h=400&fit=crop",
//     rating: 4.6,
//     reviews: 126,
//     qty: 0,
//   },
//   {
//     id: 20,
//     name: "Portable Power Bank",
//     price: 49.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1616486701660-9bdbcc1f40d5?w=400&h=400&fit=crop",
//     rating: 4.7,
//     reviews: 173,
//     qty: 0,
//   },
//   {
//     id: 21,
//     name: "Desk Lamp",
//     price: 34.99,
//     category: "home",
//     image:
//       "https://images.unsplash.com/photo-1582719478141-2f5699d52f55?w=400&h=400&fit=crop",
//     rating: 4.4,
//     reviews: 102,
//     qty: 0,
//   },
//   {
//     id: 22,
//     name: "Noise Cancelling Earbuds",
//     price: 149.99,
//     category: "electronics",
//     image:
//       "https://images.unsplash.com/photo-1580894732444-8ecded7900b9?w=400&h=400&fit=crop",
//     rating: 4.8,
//     reviews: 231,
//     qty: 0,
//   },
//   {
//     id: 23,
//     name: "Sports Water Bottle",
//     price: 19.99,
//     category: "fitness",
//     image:
//       "https://images.unsplash.com/photo-1600180758890-6ddc749b0c9b?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviews: 187,
//     qty: 0,
//   },
// ];

const products1 = [
  {
    id: 21,
    title: "Red Lipstick",
    price: 15.99,
    description: "Classic red lipstick for bold and elegant look.",
    category: "cosmetics",
    image: [
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/n-cg2U0-3Z-avon_ultra_perfectly_matte_lipstick_truest_red_4_gm_656815_0_1.jpg",
      "https://cdn.pixabay.com/photo/2016/11/22/22/39/lip-balm-1853527_960_720.jpg",
    ],
    rating: { rate: 4.8, count: 238 },
    qty: 0,
  },
  {
    id: 22,
    title: "Pink Lip Balm",
    price: 7.99,
    description: "Hydrating lip balm with natural pink tint.",
    category: "cosmetics",
    image: [
      "https://th.bing.com/th/id/OPAC.i98H9pOH3fihCg474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1&ucfimg=1",
      "https://cdn.pixabay.com/photo/2016/03/05/22/12/lip-gloss-1238296_960_720.jpg",
    ],
    rating: { rate: 4.5, count: 123 },
    qty: 0,
  },
  {
    id: 23,
    title: "Silver Ring with Gemstone",
    price: 45.5,
    description: "Elegant silver ring with a sparkling gemstone.",
    category: "jewelery",
    image: [
      "https://tse1.explicit.bing.net/th/id/OIP.HfOdKNhkFY0ppFX9igbRmAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://cdn.pixabay.com/photo/2016/06/22/10/57/silver-1475132_960_720.jpg",
    ],
    rating: { rate: 4.7, count: 198 },
    qty: 0,
  },
  {
    id: 24,
    title: "Gold Pendant Necklace",
    price: 120,
    description: "Delicate gold pendant necklace for everyday elegance.",
    category: "jewelery",
    image: [
      "https://th.bing.com/th/id/OIP.LAsHsq3AqTO1h6_1JjfBzwHaHa?w=201&h=201&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      "https://cdn.pixabay.com/photo/2016/03/27/20/50/necklace-1284303_960_720.jpg",
    ],
    rating: { rate: 4.9, count: 176 },
    qty: 0,
  },
  {
    id: 25,
    title: "Diamond Stud Earrings",
    price: 150,
    description: "Classic diamond stud earrings for a timeless look.",
    category: "jewelery",
    image: [
      "https://th.bing.com/th/id/OIP.aIZSC4YgsTua211lDgYYrgHaHa?w=211&h=211&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      "https://cdn.pixabay.com/photo/2017/01/20/00/30/diamond-1996647_960_720.jpg",
    ],
    rating: { rate: 4.8, count: 210 },
    qty: 0,
  },
  {
    id: 26,
    title: "Nude Lipstick",
    price: 13.5,
    description: "Smooth nude lipstick perfect for daily wear.",
    category: "cosmetics",
    image: [
      "https://th.bing.com/th/id/OIP.mIU8g-jUK4VPbc_fz5GEWQHaFj?w=232&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      "https://cdn.pixabay.com/photo/2015/12/08/00/27/lipstick-1082375_960_720.jpg",
    ],
    rating: { rate: 4.6, count: 175 },
    qty: 0,
  },
];

// const products = [
//   {
//     id: 1,
//     brand: "Blueline",
//     title: "Wedding Ring In 18K Yellow Gold (2.00mm)",
//     price: 32500,
//     description: "Nourishing lip balm to protect and hydrate lips.",
//     category: "jewelery",
//     image: [
//       "/assets/prd-img/ring/1.jpg",
//       "/assets/prd-img/ring/2.jpg",
//       "/assets/prd-img/ring/3.jpg",
//       "/assets/prd-img/ring/4.jpg",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 2,
//     brand: "Blueline",
//     title:
//       "Inside Out Round Hoops, 1/2 Inch Diameter In 14K Yellow Gold (1/4 Ct. tw. - H-I / SI1-SI2)",
//     price: 22450,
//     description: "Nourishing lip balm to protect and hydrate lips.",
//     category: "jewelery",
//     image: [
//       "/assets/prd-img/earring/1.jpg",
//       "/assets/prd-img/earring/2.jpg",
//       "/assets/prd-img/earring/3.jpg",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 3,
//     brand: "Blueline",
//     title: "Lab-Grown Diamond Initial R Pendant Necklace In 14K Yellow Gold",
//     price: 65999,
//     description: "Nourishing lip balm to protect and hydrate lips.",
//     category: "jewelery",
//     image: ["/assets/prd-img/necklace/1.jpg", "/assets/prd-img/necklace/2.jpg"],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 4,
//     brand: "MAC",
//     title: "M·A·Cximal Silky Matte Lipstick",
//     price: 2600,
//     description:
//       "Silky Matte Finish, 12HR Comfortable Wear. Pigment-Rich/Full-Coverage Colour.",
//     category: "cosmetics",
//     image: [
//       "/assets/prd-img/lipstick/mac1.avif",
//       "/assets/prd-img/lipstick/mac2.avif",
//       "/assets/prd-img/lipstick/mac3.webp",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 5,
//     brand: "MAC",
//     title: "Lady Danger,M·A·Cximal Silky Matte Lipstick",
//     price: 2600,
//     description:
//       "Silky Matte Finish, 12HR Comfortable Wear. Pigment-Rich/Full-Coverage Colour.",
//     category: "cosmetics",
//     image: [
//       "/assets/prd-img/lipstick/lady-danger1.avif",
//       "/assets/prd-img/lipstick/lady-danger2.avif",
//       "/assets/prd-img/lipstick/lady-danger3.webp",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 6,
//     brand: "MAC",
//     title: "Russian Red,M·A·Cximal Silky Matte Lipstick",
//     price: 2600,
//     description:
//       "Silky Matte Finish, 12HR Comfortable Wear. Pigment-Rich/Full-Coverage Colour.",
//     category: "cosmetics",
//     image: [
//       "/assets/prd-img/lipstick/russian-red1.avif",
//       "/assets/prd-img/lipstick/russian-red2.avif",
//       "/assets/prd-img/lipstick/russian-red3.webp",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 7,
//     brand: "FROGS",
//     title:
//       "MACGROW - Light Blue Denim Straight Fit Women's Jeans ( Pack of 1 )",
//     price: 443,
//     description:
//       "Silky Matte Finish, 12HR Comfortable Wear. Pigment-Rich/Full-Coverage Colour.",
//     category: "women's clothing",
//     image: [
//       "/assets/prd-img/women-jean/blue1.webp",
//       "/assets/prd-img/women-jean/blue2.webp",
//       "/assets/prd-img/women-jean/blue3.webp",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 8,
//     brand: "Bewkoof",
//     title: "BONDY Women's Straight Fit Mid-Rise Jeans ( Black )",
//     price: 443,
//     description:
//       "Silky Matte Finish, 12HR Comfortable Wear. Pigment-Rich/Full-Coverage Colour.",
//     category: "women's clothing",
//     image: [
//       "/assets/prd-img/women-jean/black1.webp",
//       "/assets/prd-img/women-jean/black2.webp",
//       "/assets/prd-img/women-jean/black3.webp",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 9,
//     brand: "Bewkoof",
//     title: "9x denims Women's Regular Fit Mid-Rise Jeans ( Cream )",
//     price: 670,
//     description:
//       "Silky Matte Finish, 12HR Comfortable Wear. Pigment-Rich/Full-Coverage Colour.",
//     category: "women's clothing",
//     image: [
//       "/assets/prd-img/women-jean/cream1.webp",
//       "/assets/prd-img/women-jean/cream2.webp",
//       "/assets/prd-img/women-jean/cream3.webp",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 10,
//     brand: "Aurelia",
//     title: "Navy Schiffli Short Kurti with Pintucks",
//     price: 883,
//     description: "Navy Schiffli Short Kurti with Pintucks",
//     category: "women's clothing",
//     image: [
//       "/assets/prd-img/women-kurti/blue1.avif",
//       "/assets/prd-img/women-kurti/blue2.avif",
//       "/assets/prd-img/women-kurti/blue3.avif",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 11,
//     brand: "Janasya",
//     title:
//       "Womens Lime Yellow Pure Cotton Ombre Chikankari Embroidered Straight Kurta",
//     price: 1995,
//     description:
//       "Womens Lime Yellow Pure Cotton Ombre Chikankari Embroidered Straight Kurta",
//     category: "women's clothing",
//     image: [
//       "/assets/prd-img/women-kurti/yellow1.avif",
//       "/assets/prd-img/women-kurti/yellow2.avif",
//       "/assets/prd-img/women-kurti/yellow3.avif",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 12,
//     brand: "Brownverse",
//     title: "Pure Cotton Women Off White Embroidered Kashmiri Kurti",
//     price: 1995,
//     description: "Pure Cotton Women Off White Embroidered Kashmiri Kurti.",
//     category: "women's clothing",
//     image: [
//       "/assets/prd-img/women-kurti/cream1.avif",
//       "/assets/prd-img/women-kurti/cream2.avif",
//       "/assets/prd-img/women-kurti/cream3.avif",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 13,
//     brand: "Style Quotient",
//     title: "Men Olive Relaxed Fit Mid Rise Cargos",
//     price: 1395,
//     description: "Men Olive Relaxed Fit Mid Rise Cargos",
//     category: "men's clothing",
//     image: [
//       "/assets/prd-img/men-jeans/green-cargo1.avif",
//       "/assets/prd-img/men-jeans/green-cargo2.avif",
//       "/assets/prd-img/men-jeans/green-cargo3.avif",
//     ],
//     rating: { rate: 4.7, count: 105 },
//     qty: 0,
//   },
//   {
//     id: 14,
//     brand: "Snitch",
//     title: "Blue Denim Loose Casual Jeans",
//     price: 1595,
//     description: "Blue Denim Loose Casual Jeans",
//     category: "men's clothing",
//     image: [
//       "/assets/prd-img/men-jeans/blue1.avif",
//       "/assets/prd-img/men-jeans/blue2.avif",
//       "/assets/prd-img/men-jeans/blue3.avif",
//     ],
//     rating: { rate: 4.1, count: 545 },
//     qty: 0,
//   },
//   {
//     id: 15,
//     brand: "FREAKINS",
//     title: "Men Spruce Black Wide Jeans",
//     price: 1899,
//     description: "Men Spruce Black Wide Jeans",
//     category: "men's clothing",
//     image: [
//       "/assets/prd-img/men-jeans/black1.avif",
//       "/assets/prd-img/men-jeans/black2.avif",
//       "/assets/prd-img/men-jeans/black3.avif",
//     ],
//     rating: { rate: 3.9, count: 95 },
//     qty: 0,
//   },
//   {
//     id: 16,
//     brand: "American Eagle",
//     title: "Men Red Super Soft Graphic Hoodie",
//     price: 1843,
//     description: "Men Red Super Soft Graphic Hoodie",
//     category: "men's clothing",
//     image: [
//       "/assets/prd-img/men-hoodie/red1.avif",
//       "/assets/prd-img/men-hoodie/red2.avif",
//       "/assets/prd-img/men-hoodie/red3.avif",
//     ],
//     rating: { rate: 4, count: 215 },
//     qty: 0,
//   },
//   {
//     id: 17,
//     brand: "POLO RALPH LAUREN",
//     title: "RALPH LAUREN Fleece Hoodie",
//     price: 14843,
//     description: "RALPH LAUREN Fleece Hoodie",
//     category: "men's clothing",
//     image: [
//       "/assets/prd-img/men-hoodie/black1.avif",
//       "/assets/prd-img/men-hoodie/black2.avif",
//       "/assets/prd-img/men-hoodie/black3.avif",
//     ],
//     rating: { rate: 4.3, count: 76 },
//     qty: 0,
//   },
//   {
//     id: 18,
//     brand: "ALLSAINTS",
//     title: "Future Hoodie",
//     price: 31245,
//     description: "Future Hoodie",
//     category: "men's clothing",
//     image: [
//       "/assets/prd-img/men-hoodie/cream1.avif",
//       "/assets/prd-img/men-hoodie/cream2.avif",
//       "/assets/prd-img/men-hoodie/cream3.avif",
//     ],
//     rating: { rate: 4.8, count: 14 },
//     qty: 0,
//   },
// ];


const formatINR = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);

const products = [
  {
    id: 1,
    brand: "Blueline",
    title: "Wedding Ring In 18K Yellow Gold (2.00mm)",
    price: formatINR(32500),
    discount_percent: 5,
    discount_price: formatINR(Math.round(32500 - 32500 * 0.05)),
    description: "Nourishing lip balm to protect and hydrate lips.",
    category: "jewelery",
    colors: ["#FFD700", "#E6BE8A", "#D4AF37"], // gold shades
    image: [
      "/assets/prd-img/ring/1.jpg",
      "/assets/prd-img/ring/2.jpg",
      "/assets/prd-img/ring/3.jpg",
      "/assets/prd-img/ring/4.jpg",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 2,
    brand: "Blueline",
    title: "Inside Out Round Hoops, 1/2 Inch Diameter In 14K Yellow Gold",
    price: formatINR(22450),
    discount_percent: 5,
    discount_price: formatINR(Math.round(22450 - 22450 * 0.05)),
    description: "Nourishing lip balm to protect and hydrate lips.",
    category: "jewelery",
    colors: ["#FFD700", "#F5DEB3"],
    image: [
      "/assets/prd-img/earring/1.jpg",
      "/assets/prd-img/earring/2.jpg",
      "/assets/prd-img/earring/3.jpg",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 3,
    brand: "Blueline",
    title: "Lab-Grown Diamond Initial R Pendant Necklace",
    price: formatINR(65999),
    discount_percent: 5,
    discount_price: formatINR(Math.round(65999 - 65999 * 0.05)),
    description: "Nourishing lip balm to protect and hydrate lips.",
    category: "jewelery",
    colors: ["#FFD700", "#C0C0C0"], // gold, silver
    image: [
      "/assets/prd-img/necklace/1.jpg",
      "/assets/prd-img/necklace/2.jpg",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 4,
    brand: "MAC",
    title: "M·A·Cximal Silky Matte Lipstick",
    price: formatINR(2600),
    discount_percent: 5,
    discount_price: formatINR(Math.round(2600 - 2600 * 0.05)),
    description: "Silky Matte Finish, 12HR Comfortable Wear.",
    category: "cosmetics",
    colors: ["#B22222", "#A52A2A", "#8B0000"], // red family
    image: [
      "/assets/prd-img/lipstick/mac1.avif",
      "/assets/prd-img/lipstick/mac2.avif",
      "/assets/prd-img/lipstick/mac3.webp",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 5,
    brand: "MAC",
    title: "Lady Danger – Silky Matte Lipstick",
    price: formatINR(2600),
    discount_percent: 5,
    discount_price: formatINR(Math.round(2600 - 2600 * 0.05)),
    description: "Silky Matte Finish, 12HR Comfortable Wear.",
    category: "cosmetics",
    colors: ["#FF6347", "#FF4500", "#E34234"], // orange-red shades
    image: [
      "/assets/prd-img/lipstick/lady-danger1.avif",
      "/assets/prd-img/lipstick/lady-danger2.avif",
      "/assets/prd-img/lipstick/lady-danger3.webp",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 6,
    brand: "MAC",
    title: "Russian Red – Silky Matte Lipstick",
    price: formatINR(2600),
    discount_percent: 5,
    discount_price: formatINR(Math.round(2600 - 2600 * 0.05)),
    description: "Silky Matte Finish, 12HR Comfortable Wear.",
    category: "cosmetics",
    colors: ["#8B0000", "#A52A2A", "#B22222"], // deep red
    image: [
      "/assets/prd-img/lipstick/russian-red1.avif",
      "/assets/prd-img/lipstick/russian-red2.avif",
      "/assets/prd-img/lipstick/russian-red3.webp",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 7,
    brand: "FROGS",
    title: "Light Blue Denim Straight Fit Women's Jeans",
    price: formatINR(443),
    discount_percent: 10,
    discount_price: formatINR(Math.round(443 - 443 * 0.1)),
    description: "Straight Fit Women's Jeans",
    category: "women's clothing",
    colors: ["#87CEEB", "#4682B4"], // denim blue
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/women-jean/blue1.webp",
      "/assets/prd-img/women-jean/blue2.webp",
      "/assets/prd-img/women-jean/blue3.webp",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 8,
    brand: "Bewkoof",
    title: "Women's Straight Fit Mid-Rise Jeans (Black)",
    price: formatINR(443),
    discount_percent: 10,
    discount_price: formatINR(Math.round(443 - 443 * 0.1)),
    description: "Mid rise black jeans.",
    category: "women's clothing",
    colors: ["#000000", "#333333"], // black variants
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/women-jean/black1.webp",
      "/assets/prd-img/women-jean/black2.webp",
      "/assets/prd-img/women-jean/black3.webp",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 9,
    brand: "Bewkoof",
    title: "Women's Regular Fit Mid-Rise Jeans (Cream)",
    price: formatINR(670),
    discount_percent: 10,
    discount_price: formatINR(Math.round(670 - 670 * 0.1)),
    description: "Cream mid-rise jeans.",
    category: "women's clothing",
    colors: ["#F5F5DC", "#FFFDD0"], // cream tones
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/women-jean/cream1.webp",
      "/assets/prd-img/women-jean/cream2.webp",
      "/assets/prd-img/women-jean/cream3.webp",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 10,
    brand: "Aurelia",
    title: "Navy Schiffli Short Kurti with Pintucks",
    price: formatINR(883),
    discount_percent: 10,
    discount_price: formatINR(Math.round(883 - 883 * 0.1)),
    description: "Short Kurti with Pintucks.",
    category: "women's clothing",
    colors: ["#000080", "#1E3A8A"], // navy blue
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/women-kurti/blue1.avif",
      "/assets/prd-img/women-kurti/blue2.avif",
      "/assets/prd-img/women-kurti/blue3.avif",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 11,
    brand: "Janasya",
    title: "Lime Yellow Chikankari Embroidered Kurta",
    price: formatINR(1995),
    discount_percent: 10,
    discount_price: formatINR(Math.round(1995 - 1995 * 0.1)),
    description: "Pure cotton embroidered kurta.",
    category: "women's clothing",
    colors: ["#FFF44F", "#EEDC82"], // yellow shades
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/women-kurti/yellow1.avif",
      "/assets/prd-img/women-kurti/yellow2.avif",
      "/assets/prd-img/women-kurti/yellow3.avif",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 12,
    brand: "Brownverse",
    title: "Women Off White Embroidered Kashmiri Kurti",
    price: formatINR(1995),
    discount_percent: 10,
    discount_price: formatINR(Math.round(1995 - 1995 * 0.1)),
    description: "Off white embroidered kurti.",
    category: "women's clothing",
    colors: ["#FAF9F6", "#F5F5F5"], // off-white
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/women-kurti/cream1.avif",
      "/assets/prd-img/women-kurti/cream2.avif",
      "/assets/prd-img/women-kurti/cream3.avif",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 13,
    brand: "Style Quotient",
    title: "Men Olive Relaxed Fit Cargos",
    price: formatINR(1395),
    discount_percent: 10,
    discount_price: formatINR(Math.round(1395 - 1395 * 0.1)),
    description: "Relaxed fit cargos.",
    category: "men's clothing",
    colors: ["#556B2F", "#808000"], // olive shades
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/men-jeans/green-cargo1.avif",
      "/assets/prd-img/men-jeans/green-cargo2.avif",
      "/assets/prd-img/men-jeans/green-cargo3.avif",
    ],
    rating: { rate: 4.7, count: 105 },
    qty: 0,
  },

  {
    id: 14,
    brand: "Snitch",
    title: "Blue Denim Loose Casual Jeans",
    price: formatINR(1595),
    discount_percent: 10,
    discount_price: formatINR(Math.round(1595 - 1595 * 0.1)),
    description: "Loose fit casual jeans.",
    category: "men's clothing",
    colors: ["#3B82F6", "#1E40AF"], // blue shade
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/men-jeans/blue1.avif",
      "/assets/prd-img/men-jeans/blue2.avif",
      "/assets/prd-img/men-jeans/blue3.avif",
    ],
    rating: { rate: 4.1, count: 545 },
    qty: 0,
  },

  {
    id: 15,
    brand: "FREAKINS",
    title: "Men Spruce Black Wide Jeans",
    price: formatINR(1899),
    discount_percent: 10,
    discount_price: formatINR(Math.round(1899 - 1899 * 0.1)),
    description: "Wide black jeans.",
    category: "men's clothing",
    colors: ["#000000", "#2B2B2B"],
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/men-jeans/black1.avif",
      "/assets/prd-img/men-jeans/black2.avif",
      "/assets/prd-img/men-jeans/black3.avif",
    ],
    rating: { rate: 3.9, count: 95 },
    qty: 0,
  },

  {
    id: 16,
    brand: "American Eagle",
    title: "Men Red Super Soft Graphic Hoodie",
    price: formatINR(1843),
    discount_percent: 10,
    discount_price: formatINR(Math.round(1843 - 1843 * 0.1)),
    description: "Red soft hoodie.",
    category: "men's clothing",
    colors: ["#FF0000", "#B22222"],
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/men-hoodie/red1.avif",
      "/assets/prd-img/men-hoodie/red2.avif",
      "/assets/prd-img/men-hoodie/red3.avif",
    ],
    rating: { rate: 4, count: 215 },
    qty: 0,
  },

  {
    id: 17,
    brand: "POLO RALPH LAUREN",
    title: "RALPH LAUREN Fleece Hoodie",
    price: formatINR(14843),
    discount_percent: 10,
    discount_price: formatINR(Math.round(14843 - 14843 * 0.1)),
    description: "Premium fleece hoodie.",
    category: "men's clothing",
    colors: ["#000000", "#1A1A1A"], // black
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/men-hoodie/black1.avif",
      "/assets/prd-img/men-hoodie/black2.avif",
      "/assets/prd-img/men-hoodie/black3.avif",
    ],
    rating: { rate: 4.3, count: 76 },
    qty: 0,
  },

  {
    id: 18,
    brand: "ALLSAINTS",
    title: "Future Hoodie",
    price: formatINR(31245),
    discount_percent: 10,
    discount_price: formatINR(Math.round(31245 - 31245 * 0.1)),
    description: "Premium quality hoodie.",
    category: "men's clothing",
    colors: ["#E5E4E2", "#D3D3D3"], // cream/light grey
    sizes: ["S", "M", "L", "XL"],
    image: [
      "/assets/prd-img/men-hoodie/cream1.avif",
      "/assets/prd-img/men-hoodie/cream2.avif",
      "/assets/prd-img/men-hoodie/cream3.avif",
    ],
    rating: { rate: 4.8, count: 14 },
    qty: 0,
  },
];



const App = () => {
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //  useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault(); // disables right-click menu
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  // const categories = [
  //   "all",
  //   "electronics",
  //   "fashion",
  //   "accesories",
  //   "home",
  //   "fitness",
  // ];

  //  const categories = [
  //   "all",
  //   "electronics",
  //   "beauty",
  //   "clothing",
  //   "footwear",
  //   "mobiles",
  //   "laptops",
  //   "pet supplies",
  //   "baby products",
  //   "groceries",
  //   "kitchen tools",
  //   "perfumes",
  //   "home decor",
  //   "automotive",
  //   "essentials",
  //   "tools",
  //   "furniture",
  //   "appliances",
  //   "fashion",
  //   "accesories",
  //   "home",
  //   "fitness",
  // ];

  const categories = [
    "all",
    "cosmetics",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
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

    setMessage(`${prd.title} added to cart!`);
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
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        wishlist={wishlist}
        cart={cart}
        handleCartClick={handleCartClick}
      />

      <main className="px-2 sm:px-5 mt-4">
        <FilterCard
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoriesChange={handleCategoriesChange}
        />
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-4">
          {loading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            filteredProducts.map((prd) => (
              <ProductCard
                key={prd.id}
                prd={prd}
                wishlist={wishlist}
                addItemToWishlist={addItemToWishlist}
                addItemToCart={addItemToCart}
              />
            ))
          )}
        </div>
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={onClose}
        cart={cart}
        removeItem={removeItem}
        updateQty={updateQty}
      />

      {message && <Toast message={message} onClose={onToastClose} />}
    </div>
  );
};

export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
