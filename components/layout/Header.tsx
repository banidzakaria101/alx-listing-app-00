import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img className="h-8 w-auto" src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <nav className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Rooms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Mansions
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Countryside
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-1 mr-4"
            />
            <Link href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>
            <Link href="#" className="ml-4 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
