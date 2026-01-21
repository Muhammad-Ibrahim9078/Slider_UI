import React from "react";
import { FaSearch, FaSmile } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Header = () => {
  return (
    <header
      className="w-full h-[90px] flex flex-wrap items-center justify-between px-10
      bg-cover bg-center"
    >
      {/* Overlay */}
      <div className=" inset-0 bg-black/50"></div>

      {/* Left Logo */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
          <span className="text-white font-bold text-lg">◎</span>
        </div>
        <h1 className="text-white text-xl font-semibold tracking-wide">
          GLOBE EXPRESS
        </h1>
      </div>

      {/* Center Menu */}
      <nav className="relative z-10">
        <ul className="flex flex-wra gap-10 text-white font-medium">
          <li className=" text-yellow-400">
            Home
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-yellow-400 rounded-full"></span>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">Holidays</li>
          <li className="hover:text-yellow-400 cursor-pointer">Destinations</li>
          <li className="hover:text-yellow-400 cursor-pointer">Flights</li>
          <li className="hover:text-yellow-400 cursor-pointer">Offers</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contacts</li>
        </ul>
      </nav>

      {/* Right Icons */}
      <div className="relative z-10 flex items-center gap-4">
        <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
          <FaSearch />
        </button>

        <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
          <HiArrowUpRight />
        </button>

        <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black">
          <FaSmile />
        </button>
      </div>
    </header>
  );
};

export default Header;
