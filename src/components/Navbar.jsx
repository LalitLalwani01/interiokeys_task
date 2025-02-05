import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">interiokeys</div>

        {/* Dropdown + Search */}
        <div className="flex flex-grow items-center mx-4">
          {/* Location Dropdown */}
          <select
            className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none"
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
            className="flex-grow border border-l-0 border-gray-300 rounded-r-md px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="text-sm text-gray-800 hover:text-gray-600">Inspiration</button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Brands</button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Professionals</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Book Consultation
          </button>
          <button className="text-sm text-gray-800 hover:text-gray-600">Rohit</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
