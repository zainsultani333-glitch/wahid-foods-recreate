import React from "react";
import { Link } from "react-router-dom";

function MenuOptions({ mobile = false }) {
  const menuItems = [
    { name: "Products", path: "/products" },
    { name: "App", path: "/app" },
    { name: "Help & Support", path: "/help" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const baseClasses = mobile
    ? "flex flex-col space-y-2 text-gray-700 font-medium"
    : "hidden md:flex space-x-4 text-gray-700 font-medium";

  const itemClasses = mobile
    ? "px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-md"
    : "hover:text-blue-600 hover:bg-yellow-400 px-4 py-2 rounded-lg";

  return (
    <ul className={baseClasses}>
      {menuItems.map((item, index) => (
        <li key={index} className={itemClasses}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuOptions;
