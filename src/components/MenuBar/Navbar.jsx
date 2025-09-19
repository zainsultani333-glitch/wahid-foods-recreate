import React, { useState } from "react";
import MenuOptions from "./MenuOptions";
import IconsSection from "./IconsSection";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <MenuOptions />
        </div>

        {/* Right Section: Icons + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <IconsSection />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-lg p-4">
          <MenuOptions mobile={true} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
