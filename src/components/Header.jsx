import { useState } from "react";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from '../../public/logo.png'

const navLinks = [
  { label: "WHY NUVIX", href: "#why-nuvix" },
  { label: "OUR SOLUTION", href: "#solution" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 relative ">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo - Optimized for mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <img
              src={logo}
              alt="Nuvix Logo"
              className="w-15"
            />
            <div className="leading-tight">
              <h1 className="text-white font-semibold text-[20px] ">
                NUVIX
              </h1>
              <p className="text-white text-[13px]">
                SOLUTIONS & IT SERVICES
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8 text-sm text-gray-300">
              {navLinks.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </a>

                  {/* Animated underline */}
                  <span className="
                    absolute left-0 -bottom-1
                    h-[2px] w-0 bg-yellow-500
                    transition-all duration-300
                    group-hover:w-full
                  " />
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-gray-300">
            <button className="hover:text-white transition hidden sm:block">
              <div className="border border-white/30 p-1.5 sm:p-2 rounded-full hover:border-white transition"><FiSearch size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
            </button>
            <button className="hover:text-white transition hidden sm:block">
              <div className="border border-white/30 p-1.5 sm:p-2 rounded-full hover:border-white transition"><FiUser size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
            </button>

            {/* Hamburger (mobile only) - Professional styling */}
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition active:scale-95"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Professional with smooth animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <section className="flex justify-end">
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 w-[50%]">
          <ul className="flex flex-col gap-4 px-4 py-5 text-gray-300">
            {navLinks.map((item, index) => (
              <li 
                key={item.label} 
                className="relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <a
                  href={item.href}
                  className="block py-2 text-base font-medium hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>

                {/* underline for mobile */}
                <span className="
                  absolute left-0 bottom-0
                  h-[2px] w-0 bg-yellow-500
                  transition-all duration-300
                  group-hover:w-full
                " />
              </li>
            ))}

            {/* Mobile Icons */}
            <div className="flex gap-4 pt-2 border-t border-white/10 mt-2">
              <button className="border border-white/30 p-2.5 rounded-full hover:border-white hover:text-white transition">
                <FiSearch size={18} />
              </button>
              <button className="border border-white/30 p-2.5 rounded-full hover:border-white hover:text-white transition">
                <FiUser size={18} />
              </button>
            </div>
          </ul>
        </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
