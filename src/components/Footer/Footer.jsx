import React from "react";
import { FaHome } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#b8e0ef] text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col h-full">
          <div className="cursor-pointer flex gap-3 items-center mb-4">
            <FaHome className="text-2xl" />
            <div>
              <a href="#" className="text-2xl font-bold leading-tight">
                Wahid Foods <br /> SMC PVT.Ltd
              </a>
            </div>
          </div>
          <p className="font-normal text-base flex-grow">
            Your premier destination for quality products and an exceptional
            shopping experience.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-4 flex-grow">
            <li>
              <a href="/Products" className="hover:text-[#00809d]">
                All Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#00809d]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#00809d]">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00809d]">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-4 flex-grow">
            <li>
              <a href="#" className="hover:text-[#00809d]">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00809d]">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00809d]">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00809d]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <div className="flex flex-col space-y-4 flex-grow">
            <p className="font-normal text-sm">
              Subscribe to get special offers and updates.
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 px-4 rounded-md w-full"
            />
            <button className="bg-[#00809d] text-white p-2 px-4 w-full rounded-md transition-transform duration-300 hover:scale-105 hover:bg-[#006f85]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div>
        <hr className="border-t border-[#5c7077] my-4" />
      </div>

      {/* Bottom text */}
      <div className="text-center mt-10 text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Wahid Foods SMC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
