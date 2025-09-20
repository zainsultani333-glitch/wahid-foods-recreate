import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppricotImg from "../Images/products/Appricot.jpg";
import AlmondImg from "../Images/products/Almond.jpg";
import PineappleImg from "../Images/products/Pineapple.jpg";
import BananaImg from "../Images/products/Banana.jpg";
import CocoaImg from "../Images/products/Cocoa.jpg";
import BlackcurrantImg from "../Images/products/Blackcurrant.jpg";
import ChocolateImg from "../Images/products/Chocolate.jpg";
import BergamotImg from "../Images/products/Bergamot.jpg";

const productsData = [
  {
    id: 1,
    name: "Natural powdered food flavouring - Apricot",
    category: "Flavring Powder",
    image: AppricotImg,
    price: "$99",
    flavour: "Delicious",
    details:
      "Our Apricot food flavouring is premium quality, perfect for baking and cooking, adding a delicious fruity taste to any dish.",
  },
  {
    id: 2,
    name: "Beef Burger",
    category: "Flavring Powder",
    image: AlmondImg,
    price: "$5",
    flavour: "Savory & Juicy",
    details:
      "Delicious beef patty served with fresh lettuce, tomato, and our signature sauce inside a soft bun. Perfect for a quick meal!",
  },
  {
    id: 3,
    name: "Veg Pizza",
    category: "Flavring Powder",
    image: PineappleImg,
    price: "$7",
    flavour: "Cheesy & Tangy",
    details:
      "Loaded with fresh vegetables, mozzarella cheese, and tomato sauce, baked to perfection for pizza lovers.",
  },
  {
    id: 4,
    name: "Mango Shake",
    category: "Flavring Powder",
    image: BananaImg,
    price: "$4",
    flavour: "Sweet & Creamy",
    details:
      "Refreshing mango shake made with ripe mangoes and creamy milk, perfect for a hot day or as a dessert drink.",
  },
  {
    id: 5,
    name: "Zinger Burger",
    category: "Flavring Powder",
    image: CocoaImg,
    price: "$6",
    flavour: "Spicy & Crispy",
    details:
      "Crispy chicken fillet with spicy mayo, lettuce, and cheese in a soft bun. Tastes amazing with fries!",
  },
  {
    id: 6,
    name: "Fried Rice",
    category: "Original Himalayan Salt Lamp",
    image: BlackcurrantImg,
    price: "$7",
    flavour: "Savory & Flavorful",
    details:
      "Stir-fried rice with vegetables and spices, a quick and delicious meal for lunch or dinner.",
  },
  {
    id: 7,
    name: "Cold Coffee",
    category: "Mining Stones",
    image: ChocolateImg,
    price: "$3",
    flavour: "Rich & Creamy",
    details:
      "Cold Coffee made with strong coffee, milk, and ice cream for a refreshing caffeine boost.",
  },
  {
    id: 8,
    name: "Chicken Karahi",
    category: "Rose Petals",
    image: BergamotImg,
    price: "$12",
    flavour: "Spicy & Rich",
    details:
      "Authentic Chicken Karahi cooked with fresh spices and herbs. Perfect for family meals or special occasions.",
  },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[#00809d] mb-8">
          All Products
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#00809d] text-white"
                  : "bg-white border border-[#00809d] text-gray-700 hover:text-white hover:bg-[#00809d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          key={selectedCategory}
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-[#00809d] font-semibold mt-1">
                    {product.price}
                  </p>
                  <p className="text-gray-600 mt-1 bg-[#cff4be] p-1 px-3 rounded-full text-sm font-normal">
                    Flavour: {product.flavour}
                  </p>
                  <p className="text-gray-700 mt-2 flex-grow">
                    {product.details.length > 100
                      ? product.details.slice(0, 100) + "..."
                      : product.details}{" "}
                    <span className="text-[#00809d] font-semibold cursor-pointer">
                      See More
                    </span>
                  </p>
                  <div className="mt-4 flex justify-between">
                    <button className="py-1 rounded font-normal text-xs text-green-600">
                      In Stock
                    </button>
                    <button className="bg-[#00809d] text-white px-3 py-1 rounded hover:bg-[#006b82] transition font-medium text-xs">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

export default Products;
