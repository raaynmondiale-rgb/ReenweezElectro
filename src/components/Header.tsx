import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { categories } from '../data/mockData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  
  const allPages = [
    { name: 'Contact', path: '/contact' },
    { name: 'Aide & FAQ', path: '/faq' },
    { name: 'Mon Panier', path: '/cart' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* Pages Menu Button - moved to left */}
            <div className="relative">
              <button
                onClick={() => setIsPagesMenuOpen(!isPagesMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 bg-black text-white hover:bg-gray-800 font-medium transition-colors rounded-lg"
              >
                <Menu className="w-4 h-4" />
                <span className="hidden sm:inline">Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPagesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Pages Dropdown */}
              {isPagesMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-xl shadow-lg border border-gray-800 py-2 z-50">
                  <Link
                    to="/"
                    onClick={() => setIsPagesMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                  >
                    Accueil
                  </Link>
                  <Link
                    to="/products"
                    onClick={() => setIsPagesMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                  >
                    Nos Produits
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsPagesMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setIsPagesMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                  >
                    Aide & FAQ
                  </Link>
                  <Link
                    to="/cart"
                    onClick={() => setIsPagesMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                  >
                    Mon Panier
                  </Link>
                </div>
              <span className="text-2xl font-bold text-black">ReenweezElectro</span>
            </div>
          </div>

          {/* Navigation Desktop */}
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <Link to="/contact" className="text-black hover:text-gray-600 font-medium transition-colors">
              Contact
            </Link>
            <Link to="/faq" className="text-black hover:text-gray-600 font-medium transition-colors">
              Aide
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-black hover:text-gray-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 text-black hover:text-gray-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/contact"
                className="text-black hover:text-gray-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="text-black hover:text-gray-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Aide
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay for closing dropdown */}
      {isPagesMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsPagesMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;