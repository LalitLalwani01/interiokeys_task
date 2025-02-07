import { useState } from "react";
import navIcon from "../../assets/images/navIcon.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[40px] bg-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src={navIcon} height="18px" width="118px" />
        </div>

        {/* Hamburger Menu (Small Screens) */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Items (Large Screens) */}
        <div className="hidden lg:flex flex-grow items-center mx-4">
          {/* Location Dropdown + Search */}
          <div className="flex flex-grow items-center gap-2">
            {/* Location Dropdown */}
            <select
              className="border-none bg-white rounded-l-md px-3 py-2 focus:outline-none"
              name="location"
            >
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
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
                />
              </svg>
            </div>

          </div>
        </div>

        {/* Buttons (Large Screens) */}
        <div className="hidden lg:flex gap-4">
          <button className="text-sm text-gray-800 hover:text-gray-600">Inspiration</button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Brands</button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Professionals</button>
          <button className="px-4 py-2 bg-[#C53D3D] text-white rounded-md hover:bg-red-600">
            Book Consultation
          </button>
          <button className="text-sm text-gray-800 hover:text-gray-600">
            <select className="border-none rouded-md w-[98px] height-[36px] px-3 py-2">
              <option value="Rohit">Rohan</option>
            </select>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 py-3 bg-white shadow-md">
          {/* Location Dropdown + Search */}
          <div className="flex flex-col gap-2 mb-4">
            {/* Location Dropdown */}
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              name="location"
            >
              <option value="jaipur">Jaipur</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by location, professional, or project"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left">Inspiration</button>
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left">Brands</button>
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left">Professionals</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full">
              Book Consultation
            </button>
            <button className="text-sm text-gray-800 hover:text-gray-600 text-left">Rohit</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
