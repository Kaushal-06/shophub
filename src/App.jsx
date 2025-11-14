import React, { useState } from "react";
import Header from "./components/Header";
import FilterCard from "./components/FilterCard";
import ProductCard from "./components/ProductCard";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";

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

const products = [
   {
      "id":1,
      "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price":109.95,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      "rating":{
         "rate":3.9,
         "count":120
      },
      "qty":0
   },
   {
      "id":2,
      "title":"Mens Casual Premium Slim Fit T-Shirts ",
      "price":22.3,
      "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      "rating":{
         "rate":4.1,
         "count":259
      },
      "qty":0
   },
   {
      "id":3,
      "title":"Mens Cotton Jacket",
      "price":55.99,
      "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      "rating":{
         "rate":4.7,
         "count":500
      },
      "qty":0
   },
   {
      "id":4,
      "title":"Mens Casual Slim Fit",
      "price":15.99,
      "description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      "rating":{
         "rate":2.1,
         "count":430
      },
      "qty":0
   },
   {
      "id":5,
      "title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price":695,
      "description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category":"jewelery",
      "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      "rating":{
         "rate":4.6,
         "count":400
      },
      "qty":0
   },
   {
      "id":6,
      "title":"Solid Gold Petite Micropave ",
      "price":168,
      "description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category":"jewelery",
      "image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
      "rating":{
         "rate":3.9,
         "count":70
      },
      "qty":0
   },
   {
      "id":7,
      "title":"White Gold Plated Princess",
      "price":9.99,
      "description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category":"jewelery",
      "image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
      "rating":{
         "rate":3,
         "count":400
      },
      "qty":0
   },
  //  {
  //     "id":8,
  //     "title":"Pierced Owl Rose Gold Plated Stainless Steel Double",
  //     "price":10.99,
  //     "description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //     "category":"jewelery",
  //     "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  //     "rating":{
  //        "rate":1.9,
  //        "count":100
  //     },
  //     "qty":0
  //  },
   {
      "id":9,
      "title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price":64,
      "description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category":"electronics",
      "image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      "rating":{
         "rate":3.3,
         "count":203
      },
      "qty":0
   },
   {
      "id":10,
      "title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price":109,
      "description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category":"electronics",
      "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
      "rating":{
         "rate":2.9,
         "count":470
      },
      "qty":0
   },
   {
      "id":11,
      "title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price":109,
      "description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category":"electronics",
      "image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
      "rating":{
         "rate":4.8,
         "count":319
      },
      "qty":0
   },
   {
      "id":12,
      "title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price":114,
      "description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category":"electronics",
      "image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
      "rating":{
         "rate":4.8,
         "count":400
      },
      "qty":0
   },
   {
      "id":13,
      "title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price":599,
      "description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category":"electronics",
      "image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
      "rating":{
         "rate":2.9,
         "count":250
      },
      "qty":0
   },
   {
      "id":14,
      "title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price":999.99,
      "description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category":"electronics",
      "image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
      "rating":{
         "rate":2.2,
         "count":140
      },
      "qty":0
   },
   {
      "id":15,
      "title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price":56.99,
      "description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category":"women's clothing",
      "image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
      "rating":{
         "rate":2.6,
         "count":235
      },
      "qty":0
   },
   {
      "id":16,
      "title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price":29.95,
      "description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category":"women's clothing",
      "image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
      "rating":{
         "rate":2.9,
         "count":340
      },
      "qty":0
   },
   {
      "id":17,
      "title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price":39.99,
      "description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category":"women's clothing",
      "image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
      "rating":{
         "rate":3.8,
         "count":679
      },
      "qty":0
   },
   {
      "id":18,
      "title":"MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price":9.85,
      "description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category":"women's clothing",
      "image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
      "rating":{
         "rate":4.7,
         "count":130
      },
      "qty":0
   },
   {
      "id":19,
      "title":"Opna Women's Short Sleeve Moisture",
      "price":7.95,
      "description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category":"women's clothing",
      "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
      "rating":{
         "rate":4.5,
         "count":146
      },
      "qty":0
   },
   {
      "id":20,
      "title":"DANVOUY Womens T Shirt Casual Cotton Short",
      "price":12.99,
      "description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category":"women's clothing",
      "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
      "rating":{
         "rate":3.6,
         "count":145
      },
      "qty":0
   },
  {
    "id":21,
    "title":"Red Lipstick",
    "price":15.99,
    "description":"Classic red lipstick for bold and elegant look.",
    "category":"cosmetics",
    "image":"https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/n-cg2U0-3Z-avon_ultra_perfectly_matte_lipstick_truest_red_4_gm_656815_0_1.jpg",
    "rating":{"rate":4.8,"count":238},
    "qty":0
  },
  {
    "id":22,
    "title":"Pink Lip Balm",
    "price":7.99,
    "description":"Hydrating lip balm with natural pink tint.",
    "category":"cosmetics",
    "image":"https://th.bing.com/th/id/OPAC.i98H9pOH3fihCg474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1&ucfimg=1",
    "rating":{"rate":4.5,"count":123},
    "qty":0
  },
  {
    "id":23,
    "title":"Silver Ring with Gemstone",
    "price":45.5,
    "description":"Elegant silver ring with a sparkling gemstone.",
    "category":"jewelery",
    "image":"https://tse1.explicit.bing.net/th/id/OIP.HfOdKNhkFY0ppFX9igbRmAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    "rating":{"rate":4.7,"count":198},
    "qty":0
  },
  {
    "id":24,
    "title":"Gold Pendant Necklace",
    "price":120.0,
    "description":"Delicate gold pendant necklace for everyday elegance.",
    "category":"jewelery",
    "image":"https://th.bing.com/th/id/OIP.LAsHsq3AqTO1h6_1JjfBzwHaHa?w=201&h=201&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    "rating":{"rate":4.9,"count":176},
    "qty":0
  },
  {
    "id":25,
    "title":"Diamond Stud Earrings",
    "price":150.0,
    "description":"Classic diamond stud earrings for a timeless look.",
    "category":"jewelery",
    "image":"https://th.bing.com/th/id/OIP.aIZSC4YgsTua211lDgYYrgHaHa?w=211&h=211&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    "rating":{"rate":4.8,"count":210},
    "qty":0
  },
  {
    "id":26,
    "title":"Nude Lipstick",
    "price":13.5,
    "description":"Smooth nude lipstick perfect for daily wear.",
    "category":"cosmetics",
    "image":"https://th.bing.com/th/id/OIP.mIU8g-jUK4VPbc_fz5GEWQHaFj?w=232&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    "rating":{"rate":4.6,"count":175},
    "qty":0
  },
  {
    "id":27,
    "title":"Rose Gold Bracelet",
    "price":75.99,
    "description":"Elegant rose gold bracelet with intricate design.",
    "category":"jewelery",
    "image":"data:image/webp;base64,UklGRrIaAABXRUJQVlA4IKYaAAAwXQCdASr3APgAPp1Gn0ulo6KipvrJYLATiWdu4XGmASsArF3vZ+Wjyf4jf7+08ADCb6XdxLz0b6f1a/4vwb8WPsfQAxt9meoj2j/0PNfvX4AXsLzOfoeyv2b/VegF7l/dP2F9Vz7vzS+y/sAfzv+4f8n1l/0/7AeRh92/0H/c/1nwAf0z+0f+b2Yf6D/1f6nzcfSX/r/03wB/zr+1/+T/Ie0z/8va1+0P/l9zf9ef/MS7GAb8nLi9ASmqGMA35OXF6AlNUMYBvycuL0BKamPtmqGLRl2cBnIRxx5Rxymisy5Jhd3FQXeaElcmTxjpSK6BDsjoRUH5etIrHzPSmBXyjYXSzbsBopW+4j0/kQccA+9HgnZtk0m9x2ZMSGeaBF78T4XN2EzVxN9V9Oo0xJHwo4IJZe+0vC8mIuwptVG6lYBUNC47BbMxpfpvvN6NSm6by6UGvwrXA2zSN98zrJIuseHPlQ72Rl3Lwl16uHygwnfVVAJGtfV8D8AFSUvjFKzNRCM+0d+upTw5XU75rG/HEt3BiFotCK9HnoISw/msmCd+3tjNI0LMCcU0pvXDdVSbClzdZlcajzGxpwIkguC7C1DLL7s4UfA7li53RlMRYXrogkHmly711QXJ1Kw0Kxhucao7KIOyMZF9pWJ7HwWUJ8uw7vPtAumGnrhiCMQvj9o8b87zO4sA4pxYspmTz5BVBAf7MGR+O7ZMo0ltSLW1uvx8dKf/R4++hpp1p7yyCUSn8s+N/5YYFkbAizCywxYJLQSYISfGpW70eLngNO27lpiAJSlea6ftkyKDaq9STxluABIh7jsedNe8LoVliAiXWGkjXqeYreWovqZ8Cv7zdnbjC8LCkn7HmOtSeL7j1vm5HT89MaFV6Evc5iJv0VhtsZBiKtIKMpJhtMMZV8ujIM22iczkGJ4xe4QPHCJhMMFirSrtL3M7fOvj6BEj+VdgHHeYBvyemupYzxj8nLi9ASmqGMA35OXF6AlNUMYBvybAAP7+3pgAAAAAGL4eVUp0IwSeVSi+NcnfUjSuDjiIkA2Np7Tk9Ezt/LacGpVP4/MJHk2LNwJNbhXeM13Ddlp6hx+SdDdqrnXnIHF1awVdfLSE976OiLVqykhfqEc9XrgKFoetVfLgev7xv2bezjtigZb7Vp9JknUZZCCezgX6Rn15szDqsbxEquVMO6HccaWkmPhBW2lomsvjXHUmDUCajtHpC2HTL8OuOT38QQ/SMu5+VoFN4ox+ptv0jpUu+vlMe88dIlWLQRL2DM3zafj0++LwxfvEtt2gzcVx8eqFw6X8GbU28s2VP33963r+aDaEMxwbI+g8A/v4XQQSSWBO93k2oMzfaSIOn9ArR5sBQV5sO3wLLOjjAkxCCGi8hkTgb+JlEHzFXAtmVU7cWN70esK5ksQ3JthIr2ElUpY/k7fXSurQXWMJonoe1XrMROj1WV8/+ooX0SjrG24TKlj8O2/flZ209AFaD4bRAfSoWuYOyxPE0t2XHr8ZDbTTjrbpMLZSwucgYnvY4UibDlGIzlUeGQg9Eav95U7Z2YG+H25ZbtIew88XWqu1c+YLP9tQQXqEPUaGkR86RFmSSd9Bvw8+qL2hGG8iC+0xFlecm7OZgerVxKuW9x5rBMOMJNCvbcKHwjn0jt/AVe2YlvzMecJGlXxGklu119q+w4DW3IkIqCo7eUXwYJgvhJkOET4bADubCty+vA1hRf63YfPoYB/61lnOD6ujMppvoH2UkOsA1qJh8AhiZYxAQ22b5+Q1L34oNl8SSrziHlljC8WKh3bB7UFVzzLuetGn8O5jXIJ34MU6KgMPFaV5TVP0pYaqR+uhkn7UI33e9yuMYpNYl8PmLQu3mnEqy4viqDVYPjP8CBl/txwFqdeV0UfbX4qS5aiGfNIz7wSwG+l2R7c7K22Bpsvnl7xOdGWCA1uYDt5ICgjwYg/AOFinN9dVlt/HgQ+8r1UaXmok2EcT2S8TqawxVALGfFBQPIWTGkku2+DknHf0I5u0DGxt/g9qXIOFqjVIsDC8bnbW+lZL+aeD55Bu4br6fiF4gEensJIivuNAudSVmvp1TgYtTWnkvUfCWK4rl7Y408hxJZwCweGeivVGeRWFghB+G9LAsg5ymLsxLOoykyVhnklXqigRQHbkTqVKu7HtMYOTGJtyq0giNhd3lfyHNf03W9Xh2NLSFFIYF0PvWOeOeiskyQ8sYoD61eYyJf+eQ45TcWEfIzi/IUKePuEbq1OnmB+/VnCYE/AwuIKOxOQohHm2RK2I+uryU88sYexct8piO3M12gOhmnYISP2N3YaWzC330wO/TcwkozGEnd5QTHPNIdWIb57N+mI52wBmUAw5g8mcIJy+C2Gtrba361crCsk9WfLW1DRxjsseYFel5peiNUEoHOnncyx2iiGS0IYj+SC7+0UORpUO36wxfRyI8BuXqW2V8ZehswTt87LjgrWJoYb+uKVasWNaCZLy8ADV0TlLFhfSMYzPHm8g2NK+tFyusBH0VjqO2uKuLSNFHsEGfZtqxjSd7clKXfgl/ya64g/KIxkW3d+ywi1hNzqx/dvmilQmLNyutH9aKup/fIN+fFer6CPjQiKrR1a3bEnNsXr0Smv+brABZ66bgJ8+NzZt6Njd7wn8DJUSX+wFivEOVlEzb9HJ41F51Up2P4JRwFIRnzPnuZhQzl7UiJjEddGbyU+rE8jfgy2hTOL/48Y5/tXtN6gCYNf0kLedRyh3DlBKQssNTrfOg76xQFkK2kOMIo1O5fXQ9t0wJT9D5BHk0tQs8L0MvrNLrOC6dQwYNil3yczCCOEgjolNFE8Vg41FNujEqyFsaHbLXO3mx9Nt6lCvDG2U5R37QwbTx/EEMgUPtFTogEp9bMASCnI6avvXnUX67/eDAs5aSYYr4ttueTxzWyFoifu0APUOVu2LrVXlSuEH8eKKBJvBo/oxaDUun0p6E2czOdIzOQW0o5sdEv8OBDkhmeFPCExjyxKO7M6tWjB1YWucqwoezV5x7OPnfcdpHgWW035oMciz0d9fbkkUrRnx9wBgaMnvawcQUHmM+zC1Z00w1ZJxrIwxReIEVk/Fuq96JhJUGM3FnmbO/bCEIQ37/2AeV/CfxvFPGlvCQA9733gFIPYT6dCy3vcFy9hZ91mE8TH7/jL4OSEmRm2XOy4CaUtR5EKhgtxUmyg0KUKKSSz1dLbc2NFnEt5hYS4Zd/dtNVrG98M6W4gXQlQMf6MGY+3v97pNXqilMGEJlMYSy7FzCNCMZVRX/SnZKY1lO6Mr2xqeZ8KRHb4mfk7+mP8O9aZmknejm+gnI2QdWb9ZAJzXIiqSPKYRwApcd5OME44gnE/rzsGg83BgWYZM8CUSDak9lV+XQvb3eUVjEmgb9nowrZN7yj9Q+6ChWpvDYTW/esyvMruTfBuv8WaDtIvH/8nSm/M/QCmFrFUkefPAULt1iwR56peAzJyDKjB4waA0t/mjG0c9un3ePJEzZF0Bd8JkFe4I9P8j2LbYAkcjEj2wNtDv0WDY6GV5uplwmrE6yl+flG1qEFwS0zXCoNWnd3h2BYZlDXDESbnpEj1ahftzUU82fbXRHRi8IsrgvRvVUPHFn2RG3+qQ2aSOkx5QvBe6eGrcf7vYknGim7y54mXd6v6oX90yqmybpaIVCf3e+NbkAaI6ME7TKqUwM93UC3j0wlmifwi7iRNigWGCVtNgrpPUkHE3HDgkrciT/ULcAR+4BAFoMSONyzWrx5mKNkvo0pati+L0OdrdDGlU6UW54aYO8xjpJ1njo9MjEUEyFlBfFaX++NfsMXhKcsstDatOgVf2W/y3cNYx4WhkCas610wPrA7Yl+lkHtnbyh3NKZ3b+tNdX2OAas28NZBAbWGrjsD8aML/H9loSF8hAAAAZ+YYzzU5d0RFOyPBsTRiDxy3hkH5WiCXjwLQh9L5iuXLdoYZ7xSdCmdfqVjvujIUgV7PHOi8Bh59ucVmvDvRHhidqen2IhB0WIDGjpAXCX2zsjAAp3aNbXRCfpUKmzfFbARu8ihKpB6Ay9aPeeK1lgYgYWoFk7bBoSE84EZb/xZoQI3/AilPEh7ZIpzZ0wxBsaPjLODeJGMpSSIBKGISx2TH0lsfLeLR3ofKntOcoD3wQIPcuNy5L+LJxJv/fujZ+s8C3Vk/GxcFyFanX6R7J80x+iKs9bwJB1fYi8sntxy9FMKFnmmiMpjYo1ZAP1fONNPLOlyTTwajNZ7GGjL5WsqozYRk6JavdTNcmWDiFtj932TiQI+BWoayUKmvFvNruLqBs1BZrla8Ywd066g612136PiTbH+eTTZtN3+0KVd6rq3HH6nAxBwubUHCmAk3OMhNvpio7UlhbGrMqC6RoSsXzBeSGg0Mzl65k1AI8exXNxamqp1FGawrxuzXWdAxs7Vl7G0oagUCV7/aKsIMQwbyrfwFjjSFl/Cjxj+l9VY99qFmB20o3Mz7vUto9aCF57Hr08y7IA/OcODWBRvRamlk0HphUDKByVxhpDij4L29fdhSc8DgFXspvjs0CjykHovW8ClkqucfTxD82z44rZG3WjOEoWkpURfNVv9o1l3ElQ1TwKuDH1DUP4HUGjWb90DJgDrqF8pwCJjW7bSnKgnx8BqHDTsdaX6BQTaT/ndu2pLToqazwZZP4tfz+4iv1m+I9Sy+X5R/9vIM8+QPCrnF2YxhBSdAyKdvoW6AnaZGV9TWp3PZqel3wLA86Zu2D0R7idBzczcT7t0xrjGIFAuJQO72EGB3hU1zcgrJ+w/y81zwbYAoVbg+/hncqruN2i1gPQYWyhOTjv1LhyIW2BOL212bwl+jykh8q2g3xbR6/K7orURgktQ6mDg5tS61xcEbn1BL/A/W8VDJXvQJbL6ZDblrvrGpsZiqu7zKdaQ6ZyfPs08bAc00JaTtdIbsEWIlCuzgP9rP2sWXpMk6SM6d8aTIncay/l/v1pTUo8jp2PVOygHbUwW0JtbuQOkaYlsaFGDG1UictcTu+k7oAt+4Eo+odifPCuF/GKFs6TWpy3LYKf26dn/1Ie69J571vCRkt62QLQ+243amhBu24e1jYStjvK+o26XyxyVE8/+4FRpLLhEwxZIf2jlrw3wlc1MT/IlU8kxYJ/sZ7EUzArXPhvYTUESuASov9KN8JysHBBSUgp/8k+8omW6Q0VCLCLtt4AZGKM/xrfGc1ADUwtxkB0rECO+a9V/IpigTGONhvySA5wImSG3BrChTgq9g0qXFGsLngiToape/qIMARXDy0KPjL1aBX8rZIedvinrTFw+lYmmah/R64imjf/Cs2g3via6CGFlXy5WBT+8gChyS3NrgnazjgE1W5ewt/2Rt0fh2BgXwLzaeait1//itpg5QFQn8CxkCDWUQaPb7OsQOTy/iqhm7gqKjHntUQCh9cJ4dnBGDICVmJCCf0Ym/jcGLPr6EqqTNlYifW+Fqr9DiactHErpKLp4PmetNGuOqOzl8AUtSdNeZZHv4cjP2shXZSjBkqZDuqG3XYBeL21glCMJxzsu3DnWbMnRzawMMIccK2J2vujY5kWR7p/24/2S4y9o6fbYwbs2CIETAmv0jZq/oNTeKKt29Fhn6eDbLZ/OzYtCpiyNI45ohXTMEpe4K//7tTJOqY/qM5xt5PR/+90Z8dI3wQ/Gt1XKuG5VnGovM6iNcQfB9HJh1ooJjQnwWIun/bx0jlVQpoq7CnQjZEYVrM2eftIqmRpOcks3lioBK3ocLqM3qkOLu80sNiS7rxPoDUkUz1neft0Z1d7Ktikn8yG4ozXSW0QTHVWz9JjpBhHtXuvIcFjXSLaSCDpN7eOcVGXuugNEl89XRz3Z12eufl5UtEmQe03gAxntrIdya0mTYjxneFrNAueVPFIKZjiWO+qXmo4fLn9BPe0pdqWnWepJYXReNdwIPKa5cw1Ri4FybOPLy9fycDQYzmwVDXGy9F8ZxQ09v14tjo67h1S53LwPxtQWP/fqgzSp+WyGkNAYR3K1bDsH9J1N6qGwobxZ/Y5xPRFjsXeUrnYy5vU0e4k8aTF6C/RAR+VL8ddUjxp0ArXloHQigQlKl3tFnRM7fHs/WnzWtfJIOeKQny6JoL+OHRIsS8Z56MedjDs0lScCTchczIW0wV+NXJwR4MG6Bo27NPlJo3LxJnOZLZIot8WKlF8zSFuEA8B3bunpryNFKrQjhkUIGKVQQUngGokUS0HXpSrOm5yvBarPIKWnw0upzcJRMHbyx2tMzX+8GnNqcnI+BhSzzBnx62KguJEZAio4QhwOPZB/M4FrOThAvaeIOu00S1PaFYmVSalTasynNxcBAnsRFrUkpDoQYP999PDGw32V1/GlQPyMnbAkYnCN6YfLfeDHBsWOCRC2VL0OlkAq39uxUhRh5I6PG1eGjLzU7EAXi3Cqd/o+r12GpUu9iXluhijDAIkCjWMbJqj+9G8b3yNxh4grEJ2QY2NWxjM4k+i+lZ5ZlR6hLFHhWRxUISKBbXFZAHgqNMCVG+cFV1912+gYh/z2YGJwRMnJUzYB/ncFNf8zHruOhU/vuwaSOcrqmHY3ecgLf4+JCSNDCXduWndWm9+pJ3H6uzVo8NI8RJ6PiC6SF/KHZe2AB6+EWS9O0GxamAr+j4LSuOPz69p579KKmVMiXbxRmE4WKNoi8xWt/8YKIfclxlN5uW7Fsyhn1suky4mwpV04YWvq8rUDoOulIA/jTLLhlWy5qOTHpTEv92bnfzncScFA83X197TVVa8L/MjtPXD1h9BSLBXUEtPCkWYW6IYgw77RsprJLgLVZb1c+tN2eeD2xXYBvCI39B8KgEA6kap70c8yRinL/1dxDhDANv4ScGHiKcXtNWMYD0QiGmsjcUU5EvAD2Mu1lPpysbvMbXte8V1t4MMH5Rb4PHlvPuxlZRqsVvglem5UDRd+4QZ6keCmyweAIJs7YQLcdJk2Zy7KjcSKfDbrgBHcuudxU/t4hyie6MeV8Cbuik7W4nsdgCiBvOqCcu3J7tzVOmMLT+axE3sfsVEOALKOUpFPZDZyzvGATysysMy/ROD1wucOL08ysoEvYoIvLrcjKhloPz7iJw0+zYxMfQvBQQllP4myUxz5PTgEDDuFQkppnWwk+yTnt3fLsuAAYBWlQ0SjlpSVkU8wVPLG+dCcJBuRvdwxvOKthnTuBbdkCBanJKopi3lyqHMGiZnMVvAmGhZra8Y1Wkc8SLc8a4eOBju6JWGZdi3lEtfA4/8f+Kf6F2+XYL78qrXao2BRasbLNDOtZqbv5KajHiciVNhdEavcFYWVTFZhWwLWLiedTx2Mf02HFE7IoYtEuPqvPsaeXI45mImzUP4MJySYUo6EVke5BxF7qzOLqPj94x7DdNILNf5OVv8FhYENFG+qQeEru6oVpCUulDLqbc3luPAayUGaR3QZ4fTXp39jJ5r55M8QW2OQMPkBZlP6zMylpBqDFaz9Sg+1AhTg17SnfC33aF89zilVgOBUU8/xBs26+7Wx+ID59zgXOMDIG3bFbcL3f1lvfQXue+yMX88MKxYnvNBvXdRfOTyD0QCx6Z/MtY4iOZekjQHtJz3ORmZG/RXg+mvEcENk7sGUXXguLhYF2gsxdzGpD8BCNZpbGGi92BE82P2D7JJRB9fntwmKTfTPmr8jbKDAD+uEN47vXTh9QcrhC1el6CqG7XhAIqOSOhMghKvz9CncMSH7fT2bswtgUdgi+AXg1IO/eNotvY4RT6YWW8MkYuL2SETQoQgSE6RuPYfgNiQFZy7yHlIuyBE42p8NTFd29C+Urv50UxadfUhYeLQNJk58qcHwcw1tZzVP+GUUXOJVN3xab+YpbR1NUguQIbSWxgQBL+KcdmimSPAbwqmMVcxjzO+y3aMjrA262fVSf2HMdCnx0/7QgjPoYyPEtF8waXcZP80bPIzNRZyxrKOUHn19PZZEpNuPLxd/y8TeHYZYpxPVA+uYl1d9xyWbejxwRwZCnuRpjLwg0ZDHwNA0eUjWcgI7iaCzwXyYbi9yc3l3EIuAVk6Zxr5kqOCg/lTGROgAwD8bJJA88gjivDWYov+hm/qiYNWH9wwApw+OULhPf/GSNRtzmC8mcj9G4F61vb9freyOK/tX4/5kjgjTP+UdPtqnKC1ddbY7TOEcN9SaHs5grKbqMfDAkNO0zada/aCCNKAz5A9zU3h22B7RcJdJm2Ens0rN0xVNP7IELnwTiShMdmxFftKCFb/p/2tdNCn5WKJRouwzyYPXe5XK/5o8AAHERsuoYGPGTOZJEr6J9wr4AAFe2k/kVq9lgxhOBNYHpUYp0IkWBE0694YcOcI5m9IF/oG+SlOpiByWTn0WLkaHkLTRLMZbhmtM/0R7cz9ZJ98DQBqXHLJa5MpoKABpP80eX+GPYAAGWO0FwXfxEhPtpHpyoEMynkLW9peQ/tioRMiYJwrHtDKm+bZEc7JLHpf3VtDLhl1Fc6VgEHbtt9ysxrNWt2s+SVeqoTtqxemFT1NZTvXHSGfwEtkPALvioCCfjV49fC4wPYGV9wACwOFVWhYko8SwpFvpe+r84ZO0InYclJl/wEq12Wj7LI0nlzod0q23Ks5NC42TSN87GKkhvnohv7KMxNbD7ILtnla7wFVkyDFAyOzn62yS/WuXdiDSuf5MAd4wy71pkoalCFCMHZZCtKeWGNF5t9gsORlfF5yN0BbiD9+mRC2Z/2EilWrNi1Oh3XFxxYqnbafwuJmkAghDeyh9RF19i+5yybm60guE5OxdQotGMprdT2wH2eETIyzBCbjQgPHESBBaMSBiB4egLwAxYg/TGSkKHneI7ttGstuU0yfcIvoLWg7qm93M2t0r3hphpSl04egenRZsAyKrATmYVmW6BgiE3vLi+g2sGgJPZ1eR+lmNOeEObtgwU+kUegizTxBtQ+tbpU31az2y5KmDxMReVVBCnpWcp9t3vz0ES4YsFoJojk/fIa0J+cRLV+tmsfI7idwkM7K/0YShnL3Y6fW/geQzzJZzD9wROxYcQeJ4uSCyGeOil6gjbhjB9sEj8bIwXgXu4uUEKTQ8ATA1NumR326CKnjVgQAAAAAAAAAAAAAA=",
    "rating":{"rate":4.7,"count":160},
    "qty":0
  },
  {
    "id":28,
    "title":"Lip Gloss Pink",
    "price":10.0,
    "description":"Shiny pink lip gloss for a soft glowing effect.",
    "category":"cosmetics",
    "image":"https://th.bing.com/th/id/OIP.4a7ek8YcmUJmkxoJhwai2gHaHa?w=210&h=210&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    "rating":{"rate":4.5,"count":184},
    "qty":0
  },
  {
    "id":29,
    "title":"Pearl Necklace",
    "price":130.0,
    "description":"Classic pearl necklace for elegant occasions.",
    "category":"jewelery",
    "image":"data:image/webp;base64,UklGRj4RAABXRUJQVlA4IDIRAACwYQCdASolAQkBPp1KnkylpCMoI/dp8QATiWkHLEKh29KMXfGhXwCXzJzp5gqUbhe0w1iZSrK4oB+UB/w+S39n9Qfy5PYt+43syEDHbdxnsVe/zWQp05nDl/6TEQXByCZU4M4O1heaicUUiHE2G3D+6YGP5ZyYYFZNmA6OJiIqvAVT+OgZZanZCo9SAzgLrWIhmbJhvxCefSYwMFbJVBlUKenOP179SQHC2GIXDJuD0qumbwdBSGfCXdkiFXzQsBNZyqvBslVwjyrcGqN71tNmirj51GeyJ9SwsgabNu7YPKV3mrmN1nldlwXWBWQaHrb8HvCraCgWFUUDbZwzdKxmpCbsLT4+97/Wvb3STWEjrCvFUfyl/3c5nercW0+fWyVkM73+zb0aGBIq5C5WAglOCrLq1BzBL0CkPM4ukwXARcHJtHa/lIoP/Hsa3Vo3Ru+hXO+CXD5GOpQVPV65HWRQpaHVYg92JNvb4eGP+oICy0KDnyneJOq+2ld7PCUjrIIcbRPpA648ow3Ddyli+3yjz2nlX1riXeRwUrH2a5wDRsSuif8r0T5IBHjO9QiXlRd4cx8CorqZ2Hs+aSQzYAy0d/6cvKC1wsf7G5mdn3XYFUKzns/VAHQh/Rhh+AYahRIYyYjuVOe5lVqnz4D+3Vzga+1knEHVkWcwfhp8MRdy6lbLbRpJ9bFO1Aq+zktLiN3JYif6ETJW9czd1PMgoDkmXF8BFdnIi6yCCIQcvRHPmvJM2ZtFTgbmiPiDkJVpUYQXFbhBh3X9uQWSN4BJYHpkw5530rlzFRUmjh9mjp9O6JPnW/0KPweAbIJaU23m3aj7kOfDrbQE5bsfeKatWrpOdblYS8iXVTJyr0q4YfbrsQvMld2wIv0uoEwWqNcFy+PpnbR8Q65rB16vSrD5kUvKkv0yeNmP1Tj1tQae/B/c1i/l1ko0/I4ldYBzs5L5lh/24s8QZrjTaxWVtDL0x8Wx4Aty4xSsjJEuv0hY7lkmIZOkn8R/PuBK04vkwUwV1ID1hOC0p4GAUK/53XGUU5dLsj1fylqgAP70qp+aJWUwhVLfwK2BEroCWLzbSK6M0G6D6jSfXpqCynLyaoUjT391TRAF4qDIzgPoNq8saHQjxHzaZUtLAh2UbDbyOOVTFznM5y3xcwWXJBp+JYiad4BiUbjUjSAqZ1ZgkJBPFzCsFM7QOu13p8miR5aK++BhnxTej3F2LLnvFRpLTeB+TcMd3lHm+ruazcd7RyUtWzP0pAUACVCLfN79x8+3iHc2sgYvQuIOjcxmcUF9nojfEXD1vCTwAT7tDlRjfNA1I8r1FRVWMDIPVxBRQt++SyHfQZZmZ6pqdbOyFcN1jc59EjIYROOcq0/zHmHWcKPW6/oj9F7M3z5uArJwJ63E0pqUBRK6jKKpwRCC/hq07sNdgZ8AJyaHnZOk4G5YzGpRWzG9z7Ukr+zuONEHhoBdLzddbeu9A+VYfy946SCUSfKhyrRaRg9/l41IkMp6fUOJK8SnQ3NnnW6d3YCba03LnnvaBtteJAg0ZsZsedFKJVZHGqRU9VkjtEdEVq8ugOkBVVE4C8UvtQ4tJu9ZfT+KuLe9DNvNRc9O2Y3sjb9HTUQFOEJGXyqzsUnwOYHDv3m76RvAcEFjwXr7bymr/roJKE+lLnBTqux1vdiVz27EBUBb7nocQyoORN2mUG+8u3EddBjxHBgKRvkTAHYzFlMoK/TdX5o+yW8WWPnRuZhjKNYFHiB0tvlnaSNH8Nr+33sfp9ez467k1KP4Ifxh3xpnGJZUGspxJO6CWpxCYkG3+wLUkEN8zdvJqEiseebdo9oWDufbz3kVyNtTaRVB/2fKhkjaU6p/N4BqotES9HtRU6LfUPREUxaCjNZ+2yWvp8w72a9+fPWudU0N194smcW4kzVWcjzxeyW0uV3MzKbfqv1fZmhUO+YWTf95KwJYJSKqUwU+IqLgtkJdyXM73lp7++WSKjHo2mcua5rbsHqpVfjw5eKepqcZcd9qGcQVoq8+wXTOWn6ivT/8Cjkk0gQ3zjf0sWscJinEEVmM+Vpvr8PbKmhrFyYhD4ku8J7Z/yWeXTShOjl1GrsHevaxJ2ypKGzfqvpTyzqWVnBnivWFIJ7pEgBocAMc44ee1/1kK3Wp7tuIKxXFJyMyOHtJajp7+b0OB2ocskpSWSc4DFLV91kJweYGwnVwvoymYQySemgTrO9e59GJSdcWm7/sDdeqM6HD9M0jykO3xHCEMX0fhgRiTg1j2tXnUEPZxv1wtMYlmHqGzIuBmQ9NRokGwrEizoHJxbAqONthdSa2m6q4/vlO7FrlSzPmXDrba99+jlVy00rX7/Fmf1hz3d8TCoGaNnRNneSNDuWGgzlots8rfnxmZ4UFo2aD5iocgUOjlpl/JK2KiUkCZnnCZlw9SSXw1xm96CDQTIBmY/55BLLvt4+qZvaMo8/mIvEK84Gvv8tzGcVniS4WxMLnq/RBdPnlKOrDGJGxCcegVMUYAAb3fODJXLPt3jlF5WhVXLXlM6cMZY/swVbeukemgqkrjAshnP5lif8MTwr0rp8YeRLkJZ5IB6uomJx7dVbgvDWu2bcFmMxt1B48+wOv4LTGcsE1mO+u9eXMeoHqMvpgPGxoJci5EWgVBM40IX7im0Y/UMG6+06IBGei8266JJS0aB/NeDbpZdovDUcFwqbCA45cYOYpMiP58QLDSEYSFXLrxPkDw8yc4sEO7USANikdR/R1YSnkEzUVLHkV8BsEZrZDNT1r+/sUkaM82KkHkVZ6gpZOgMAX2e2AMkpggjbyhmeNOLRXusrk1zV8nwS7XVh2fiAfdiZOED9bSfDOM4IxgPqtl9G1iI9fiyYJcCzHA+yQUadAR9DiZmekZuIf2YPwgOYAP0wXXY9TRcw+wu4TRbb4K7xhPZ8Wp0AbhKpo0Dt9BOkMAUYx8VBIauv1HXNbalxtBeURl/LPs+ynYxGEzUiPr4cxzKqNh/nzJn3FpjLcldH3dR4m8j8YqYkAYzhtklrH+1fdxx7M+NXu3zUmwJ6/N0xOq1STorssY/kllqqJUDNDNLTOFWK/7qTqhloCFCUiPNZvzgxTTsnKG88Xms5dID6THg9dUzVZLeT5yiiEAHV9hvN0EtdlNfADiwKCq2Qi2Ywc2yf0UoQCQHZMp3RE6zNwwJI4CzgUKzlaTeI2Fu420muLnBYvHFCnF+aI38XZxfSSR45iBQJo17ihLU93yPjgT6DKB648Ysu8hT2sRiI8pIB1gdNSj2dHcQy4BB06fpq6ZEUU1w2mBWuRAQZiPx7EU/+TsIGvO1w2lZwCi+NPdKzD+g0FJM30biLj7zn2Il7knCVhnslMdxPaEzJgebBQFLlhuwXGY4Ju1t7wC1pN4LCDFbidXnJO0MNUazZ9zV0XYtJ/FBwaOwh8qX2ETcdcIf147ONzr3fjFNW+BxIbnjcZNV0+2ULqes6YWjDwbUoLEpQ4mWIMZFBc7+nQuokHXkGZnXOVyTTXP/A0YPttTYujYNKyPdX/j5Bzts+c6ZguJcSZ5wU8Woif1SZlV9Ybgw/hlShFUaMOCz5uvkkGWr7xnfuuKvPwRTv/lCMQ4+B10kK3bb9+4RZAk7o3qiIP8mxBsQCI4z1CAxgOCoRPot7MJARc2qqRM8gElmpdM4r6ublwNAv4/E8NbqwpeYQ9n2/CIwvHX8+i9kvdK0cSyDD+YbXM0xR1VQq1vASkaCNnULSRjPm7rmM3o1jVGuHFoTaPGV47Rs6Hc3gcsONk5ZMJuJX4ZMOK0vD1AnW7Bd8r4atgE3zADEkpz/J1EAEt4tp5VQPfleVpghfppxe2vtPoFPNoKP72SR7cvMQL72n/lHRmfSyUQymnxEmuerlhIQDQQcz04Hd9sb7JL5dQF5I2k0W3/3XT2cP1iAAGD+vM/E5kwkpx0xLTHQMA4n3l2rVEaquH1tMvS4ocJQMisryxgeTglVPMDb1+9Fu73Oa+X/7JKT8W+sebrC7+2tSnXom0mJeFJ7wtbo9JUC0CK6MuieBkZUTQOyUmoqHuwO+untgx1TxG48H18yCNEZy1+HZJNLtrQTAnpxAvgpkY40ydCOeTqWg2mrMAGfFE/SLCFhQQAmlnyDWMwMkGyJN/j+EUTYYtELISLwWN9vc+9fZbsAKggRT7js7AFSC2Swki0yFTsy/Ng+PoNwI/4q56AI3uwxihYwUhCPnIiiMYez7oqwKCgB3/EIQm2MWzrVj6u0IHP4xpoGFFNMuyfJvQEHsxawLjggL6x3wOrPDoErn/YWTbF29FtHK3/VrUQAJ8yFdvcouKjtuN/FY4DFQJwxUjsiQcVmwbVmilwwBesPGgGPEFNE4RnBHsIVz7McKPjtfNo8Bw2zgAZIe8df6/X2aBeBx8+tuRI3qFHSsocr+1ZPsjT+7eynJucGCPJXI9J+9eSsn8OL4jWMdzCA/R6DO4gZYxTnpxuu1r1I8+uIIvSZNQAbQxTIKADHEIol6HIOqWPWqdcQRyS4BVqIACveT8rftDCfVYr5l2xzxDpbRc1IDPRuh99gAZVjYBmOzzKXnGnowi0QH5RgfKsaTPQS/k71NGszkOHOBPliEnWL2/IXg/tPx46KaU9QsjTfQ3fjIqoJ1dHU4XgtniLq2zufXWkdgK9LIFmAOIBIjYTqnDZAACbBoHI6VaQ1pDpIkr2A5ouCBXVacp72R4HiCpE4ib56kEpqYvg2W+068sCpXzLoVrYpo0j9Dl7EwWFdxiwO3yWe7VhxV1ewhiLXV2NfbmZzmzLL1sXec/3yWPwW2ROmJG413d2JBhqIM1cywOhXIwAARcMAbYkQAma1A/4Rqy6AIBhMGzVORtY66ARvVSByo1mduf12wJ8lfAgmzQz6FuHdFmDAnLTKz+J8+FHOGmiI13icOA2GTevH8IQvohqbyXwQ7zCqDh1zHxFbTpnFjka/IUjFVfjhiPx607NiFM7pCz3vbx7nY1Fb2+2ahM+6Zcz/WvVKsyFuYfyObvwx1t8k+dxQleFvaB+qXQugKujFqnsEpStsSYRk3Fi3nhS1YUCrxK554k4wZR9xQufgXCInjphWsMTNVSXvT1kGx34ylWal8nfF8ce+R72rbVzHF+UZ39isx7qLBQsByGUtZutef4efGXRO/zqWpcYSzdPX1BXPJHPemvaD8V8MVVAe7/30/IV6TqKhWpcgUg9GLiklkTQpuLt2EgMsvNEQ7lw0tkUpUiK/dC5gvmC2+an7xx5GbId9LPbgygKpdURdNnZ9MzUaMmDbB4rHishsLoSFZiA4TsuCMWb961UsTbFcO/A7TlU77UNS2CcBd+uuooTzJROS6ebYavVoV3yRQsL+GRtIG2Eb4HalV1T1OF87jKv6RHoe0LJSLgP30QYcmtJSCd1zgJZAa8DPPxdZNaysA9R/+PuDrtFgLYQY7i/gDL6uxezbgHos33c3LqZrXgl9HRv5VeJJixFvVdRtn0bR9YW7MhABcDA9HNGfpycUPmyWJ1irHDqcZZ0VA4wNO8L1aSeMfX2D6bAlPwO80HYSkMZ4X91uGGV4St3WY3d5y0kz1/ybJGXUG3yB+OlHFODimbGT06Jb1v+Q6su4WO6JwRnPbJLAU7djX96cpdphqW/5tM8nooYcHmiymsinaQFnRUqHN/cNThBhfgpzXdOTHBN6SJXqRdlEvX+zW5ZZeon5TJ7CETJt9qOfsPANT61GsgabKpBY6vHhymRgVHBLCYlZ0Ip7YqL5hBJLihbl6oCMjrJYOHarh5pfmIyPQgRCfrbqNdKSToTxgrC1SZ5GhagLiTcDf63v9mzSGWy8QK7pEl8JuRyovoyzQw/vI3pYXiaVwxMH2k1uOW0AAA",
    "rating":{"rate":4.9,"count":124},
    "qty":0
  },
  {
    "id":30,
    "title":"Lip Balm Tube",
    "price":5.99,
    "description":"Nourishing lip balm to protect and hydrate lips.",
    "category":"cosmetics",
    "image":"https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/coV3w8wyn7-volamena_lip_hydration_beetroot_tinted_balm_10_ml_525368_0_0.jpg",
    "rating":{"rate":4.7,"count":105},
    "qty":0
  }  
]


const App = () => {
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState('')

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
  "women's clothing"
]


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

    setMessage(`${prd.title} added to cart!`)
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
