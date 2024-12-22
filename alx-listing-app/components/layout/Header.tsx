import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold">MyAccommodation</span>
      </div>

      {/* Search Bar */}
      <div className="flex-grow md:mx-8 my-4 md:my-0">
        <input
          type="text"
          placeholder="Search for accommodations..."
          className="w-full md:w-96 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Authentication Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
          Sign In
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="w-full mt-4 md:mt-0 md:w-auto">
        <ul className="flex space-x-4 justify-center text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-600 cursor-pointer">Mansions</li>
          <li className="hover:text-blue-600 cursor-pointer">Countryside</li>
          <li className="hover:text-blue-600 cursor-pointer">Beachfront</li>
          <li className="hover:text-blue-600 cursor-pointer">Urban</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
