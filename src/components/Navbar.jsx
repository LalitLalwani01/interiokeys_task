import { useState } from "react";
import navIcon from "../../assets/images/navIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src={navIcon} alt="Logo" className="h-6 w-auto" />
        </div>

        {/* Hamburger Menu (Small Screens) */}
        <button
          className="lg:hidden ml-auto text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navbar Items (Large Screens) */}
        <div className="hidden lg:flex flex-grow items-center mx-4">
          <div className="flex flex-grow items-center gap-2">
            {/* Location Dropdown */}
            <select className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none">
              <option value="jaipur">Jaipur</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>

            {/* Search Input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by location, professional, or project"
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-6l4 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Buttons (Large Screens) */}
        <div className="hidden lg:flex gap-4 items-center">
          <button className="text-sm text-gray-800 hover:text-gray-600">Inspiration</button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Brands</button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Professionals</button>
          <button className="px-4 py-2 bg-[#C53D3D] text-white rounded-md hover:bg-red-600">Book Consultation</button>
          <select className="border-none rounded-md px-3 py-2 text-sm text-gray-800">
            <option value="Rohit">Rohan</option>
          </select>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 py-3 bg-white shadow-md transition-all duration-300">
          <div className="flex flex-col gap-2 mb-4">
            {/* Location Dropdown */}
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none">
              <option value="jaipur">Jaipur</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>

            {/* Search Input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex flex-col gap-2">
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left w-full">Inspiration</button>
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left w-full">Brands</button>
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left w-full">Professionals</button>
            <button className="px-4 py-2 bg-[#C53D3D] text-white rounded-md hover:bg-red-600 w-full">Book Consultation</button>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full">
              <option value="Rohit">Rohan</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
