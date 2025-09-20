import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/MenuBar/Navbar";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Disclaimer from "./components/Pages/Disclaimer";
import Footer from "./components/Footer/Footer";
import Products from "./components/Pages/Products";
import Apps from "./components/Pages/Apps";
import React, { useState, useEffect } from "react";

// Hero images
import food1 from "./components/Images/food1.jpg";
import food2 from "./components/Images/food2.jpg";
import food3 from "./components/Images/food3.jpg";
import food4 from "./components/Images/food4.jpg";

// Landing products images
import AppricotImg from "./components/Images/products/Appricot.jpg";
import AlmondImg from "./components/Images/products/Almond.jpg";
import PineappleImg from "./components/Images/products/Pineapple.jpg";
import BananaImg from "./components/Images/products/Banana.jpg";

// Hero Section Component
function HeroSection() {
  const images = [food1, food2, food3, food4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to Wahid Foods SMC PVT.Ltd
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
          Fresh, delicious, and made with love – taste the difference today.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#00809d] text-white font-semibold rounded-xl shadow-md hover:bg-[#006b82] transition">
          Order Now
        </button>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        ❯
      </button>
    </section>
  );
}

// Landing Products Section
function LandingProducts() {
  const navigate = useNavigate();

  const productsData = [
    {
      id: 1,
      name: "Natural powdered food flavouring - Apricot",
      image: AppricotImg,
      price: "$99",
      flavour: "Delicious",
      details:
        "Our Apricot food flavouring is premium quality, perfect for baking and cooking, adding a delicious fruity taste to any dish.",
    },
    {
      id: 2,
      name: "Almond Flavouring",
      image: AlmondImg,
      price: "$89",
      flavour: "Nutty & Sweet",
      details:
        "Almond flavouring enhances desserts, pastries, and beverages with a rich nutty taste.",
    },
    {
      id: 3,
      name: "Pineapple Flavouring",
      image: PineappleImg,
      price: "$79",
      flavour: "Tropical & Tangy",
      details:
        "Pineapple flavouring adds a refreshing tropical taste to cakes, drinks, and candies.",
    },
    {
      id: 4,
      name: "Banana Flavouring",
      image: BananaImg,
      price: "$69",
      flavour: "Sweet & Creamy",
      details:
        "Banana flavouring gives a natural, sweet banana taste to desserts and beverages.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00809d]">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {productsData.map((product) => (
          <div
            key={product.id}
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
                <button className=" px-3 py-1 font-normal text-xs text-green-600">
                  In Stock
                </button>
                <button className="bg-[#00809d] text-white px-3 py-1 rounded hover:bg-[#006b82] transition font-medium text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-[#00809d] text-white font-semibold rounded-xl shadow-md hover:bg-[#006b82] transition"
        >
          See More
        </button>
      </div>
    </section>
  );
}

// App Component
function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <LandingProducts />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/app" element={<Apps />} />
          <Route path="/help" element={<div>Help & Support Page</div>} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
