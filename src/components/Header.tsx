import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-bakery-brown" />
            <h1 className="text-2xl font-serif font-bold text-bakery-brown">Sweet Dreams Bakery</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-bakery-brown ${
                isActive('/') ? 'text-bakery-brown border-b-2 border-bakery-brown pb-1' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-bakery-brown ${
                isActive('/about') ? 'text-bakery-brown border-b-2 border-bakery-brown pb-1' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/order" 
              className={`font-medium transition-colors hover:text-bakery-brown ${
                isActive('/order') ? 'text-bakery-brown border-b-2 border-bakery-brown pb-1' : 'text-gray-700'
              }`}
            >
              Place Your Order
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-bakery-brown ${
                  isActive('/') ? 'text-bakery-brown' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors hover:text-bakery-brown ${
                  isActive('/about') ? 'text-bakery-brown' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/order" 
                className={`font-medium transition-colors hover:text-bakery-brown ${
                  isActive('/order') ? 'text-bakery-brown' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Place Your Order
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}