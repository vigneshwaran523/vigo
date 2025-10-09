
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaArrowLeft } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-blue-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10 w-auto px-4" />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li
            onClick={() => scrollToSection("footer")}
            className="hover:text-blue-600 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("why")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setIsMenuVisible(true)}
          src={assets.menu}
          className="w-6 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-4 flex flex-col">
            {/* Close button */}
            <div
              onClick={() => setIsMenuVisible(false)}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              <FaAngleLeft/>
              
              
              
             
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              <li
                onClick={() => {
                  setIsMenuVisible(false);
                  scrollToSection("hero");
                }}
                className="cursor-pointer hover:text-blue-600"
              >
                Home
              </li>
              <li
                onClick={() => {
                  setIsMenuVisible(false);
                  scrollToSection("footer");
                }}
                className="cursor-pointer hover:text-blue-600"
              >
                About
              </li>
              <li
                onClick={() => {
                  setIsMenuVisible(false);
                  scrollToSection("why");
                }}
                className="cursor-pointer hover:text-blue-600"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
