import React, { useState } from 'react';
import { Menu, X, Search, Phone, ShoppingCart, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Top Bar */}
      <div className="bg-marton-dark text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> Call Center: 02-123-4567</span>
            <span>Line: @martonthailand</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-marton-orange transition">Distributor Login</a>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-marton-orange">
              <Globe className="w-3 h-3" />
              <span>EN | TH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-black text-3xl italic tracking-tighter text-marton-red">
              MARTON
              <span className="block text-[10px] not-italic font-normal text-marton-gray tracking-widest -mt-1">
                PREMIUM QUALITY
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-marton-dark uppercase text-sm tracking-wide">
            <a href="#" className="hover:text-marton-red transition">Home</a>
            <a href="#products" className="hover:text-marton-red transition">Products</a>
            <a href="#" className="hover:text-marton-red transition">Promotions</a>
            <a href="#" className="hover:text-marton-red transition">Services</a>
            <a href="#" className="hover:text-marton-red transition">About Us</a>
            <a href="#" className="hover:text-marton-red transition">Contact</a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-marton-gray cursor-pointer hover:text-marton-red" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-marton-gray cursor-pointer hover:text-marton-red" />
              <span className="absolute -top-2 -right-2 bg-marton-red text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-marton-dark focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-4 space-y-4 font-medium text-marton-dark">
            <a href="#" className="block hover:text-marton-red">Home</a>
            <a href="#products" className="block hover:text-marton-red">Products</a>
            <a href="#" className="block hover:text-marton-red">Promotions</a>
            <a href="#" className="block hover:text-marton-red">Services</a>
            <a href="#" className="block hover:text-marton-red">About Us</a>
            <a href="#" className="block hover:text-marton-red">Contact</a>
            <div className="border-t pt-4 flex items-center space-x-4 text-sm text-gray-500">
               <span>EN / TH</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
