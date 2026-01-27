import { memo, useState } from "react";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/logo.png";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Nuvix Logo"
              className="h-8 sm:h-10 w-auto"
            />

            {/* TEXT — visible on mobile & desktop */}
            <div className="leading-tight">
              <h1 className="text-white font-bold text-base sm:text-xl">
                NUVIX
              </h1>
              <p className="text-white/80 text-[10px] sm:text-xs">
                SOLUTIONS & IT SERVICES
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-6 xl:gap-8 text-sm">
              {navLinks.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                  <span
                    className="
                      absolute left-0 -bottom-1
                      h-[2px] w-0 bg-yellow-500
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              className="hidden sm:flex items-center justify-center text-gray-300 hover:text-white transition"
              aria-label="Search"
            >
              <div className="border border-white/30 p-2 rounded-full hover:border-white transition">
                <FiSearch size={18} />
              </div>
            </button>

            <button
              className="hidden sm:flex items-center justify-center text-gray-300 hover:text-white transition"
              aria-label="User"
            >
              <div className="border border-white/30 p-2 rounded-full hover:border-white transition">
                <FiUser size={18} />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 border-t border-white/10 px-4 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-white font-medium text-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="pt-4 mt-2 border-t border-white/10">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition">
                GET IN TOUCH
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
