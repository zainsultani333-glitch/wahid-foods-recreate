import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa6";

function IconsSection() {
  return (
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <FaShoppingCart className="text-gray-700 text-xl" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <FaUser className="text-gray-700 text-xl" />
      </button>
    </div>
  );
}

export default IconsSection;
