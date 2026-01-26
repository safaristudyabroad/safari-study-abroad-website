"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Universities", href: "/universities" },
    { label: "Admission Process", href: "/admission" },
    { label: "Visa Process", href: "/visa" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="bg-white top-0 w-full border-b border-gray-600 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed h-20 to min-h-[110px] to accommodate the h-24 logo + padding */}
        <div className="flex justify-between items-center min-h-[110px] py-2">
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center py-2">
            <Link href="/">
              <img
                className="h-24 w-auto object-contain"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* 2. Desktop Menu Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-black hover:text-red-600 font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 3. Desktop Icons & Button */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-4 text-black">
              <a
                href="https://www.tiktok.com/@safaristudyabroad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://www.instagram.com/safaristudyabroad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
            </div>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#417E64] transition-all duration-300 shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-white space-y-1 shadow-xl border-t border-gray-100">
          {navItems.map((item, idx) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left py-4 text-black font-semibold hover:text-red-600 transition-colors"
              >
                {item.label}
              </Link>
              {idx !== navItems.length - 1 && (
                <div className="border-b border-gray-100 w-full" />
              )}
            </div>
          ))}

          <div className="pt-6 flex flex-col space-y-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-green-600 text-white py-3 rounded-lg font-bold"
            >
              Apply Now
            </Link>
            <div className="flex justify-center space-x-8 py-2 text-black">
              <a
                href="https://www.tiktok.com/@safaristudyabroad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.instagram.com/safaristudyabroad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
