import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-marton-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="font-black text-2xl italic tracking-tighter text-marton-red mb-4">
              MARTON
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Marton Thailand is dedicated to producing high-quality construction machinery that meets international standards. We build trust through durability and performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-marton-orange transition"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-marton-orange transition"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-marton-orange transition"><Youtube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-marton-orange transition">About Us</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Products</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Promotions</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Blog & News</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-marton-orange transition">Concrete Mixers</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Hoists</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Compacting Equipment</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Trowels</a></li>
              <li><a href="#" className="hover:text-marton-orange transition">Spare Parts</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-marton-red flex-shrink-0" />
                <span>123 Construction Road, Bang Bon, Bangkok 10150 Thailand</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-marton-red flex-shrink-0" />
                <span>+66 2 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-marton-red flex-shrink-0" />
                <span>sales@martonthailand.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Marton Thailand. All rights reserved. | Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
