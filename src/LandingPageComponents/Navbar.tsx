import { User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import dt_removed from '../assets/dt_removed.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg fixed w-full z-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[3rem] xl:pr-[3rem] py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
             <img src={dt_removed}/>
            </div>
            <span className="text-2xl font-bold tracking-wider group-hover:text-gray-300 transition-colors duration-300">
              Dtechel
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative group py-2">
              <span className="font-medium transition-colors">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="relative group py-2">
              <span className="font-medium transition-colors">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pages" className="relative group py-2">
              <span className="font-medium transition-colors">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#blog" className="relative group py-2">
              <span className="font-medium transition-colors">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#blog" className="relative group py-2">
              <span className="font-medium transition-colors">Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative group py-2">
              <span className="font-medium transition-colors">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Auth Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <span className="font-medium text-sm">User</span>
                </div>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium transform hover:scale-105"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors p-2 hover:bg-gray-900 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-3 border-t border-gray-800 pt-6">
            <a href="#home" className="block px-4 py-3 hover:bg-gray-900 rounded-lg transition-all font-medium">
              Home
            </a>
            <a href="#services" className="block px-4 py-3 hover:bg-gray-900 rounded-lg transition-all font-medium">
              About
            </a>
            <a href="#pages" className="block px-4 py-3 hover:bg-gray-900 rounded-lg transition-all font-medium">
              Services
            </a>
            <a href="#blog" className="block px-4 py-3 hover:bg-gray-900 rounded-lg transition-all font-medium">
                Projects
            </a>
            <a href="#blog" className="block px-4 py-3 hover:bg-gray-900 rounded-lg transition-all font-medium">
              Blog
            </a>
            <a href="#contact" className="block px-4 py-3 hover:bg-gray-900 rounded-lg transition-all font-medium">
              Contact
            </a>
            
            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              {isLoggedIn ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 px-4 py-3 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-black" />
                    </div>
                    <span className="font-medium">User Profile</span>
                  </div>
                  <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}