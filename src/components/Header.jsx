import React from "react";
import { FaSearch, FaGlobe, FaUser } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] flex items-center justify-between px-6 md:px-12 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center">
          <FaGlobe className="text-white text-4xl border rounded-full p-1" />
        </div>
        <h1 className="text-white text-lg md:text-xl font-semibold tracking-wide">
          NUVIX
        </h1>
      </div>

      {/* Nav (hidden on mobile) */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-white font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
          <FaSearch />
        </button>

        <button className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
          <HiArrowUpRight />
        </button>

        <button className="w-9 h-9 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400">
          <FaUser />
        </button>
      </div>
    </header>
  );
};

export default Header;
