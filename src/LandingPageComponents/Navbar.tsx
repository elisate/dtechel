import { User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import dt_removed from '../assets/dt_removed.png';
import { Link } from 'react-router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const container = "px-2 sm:px-2 md:px-8 lg:px-12 xl:px-[3rem]";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-lg">
      <div className={`${container} py-4`}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={dt_removed}
              alt="Dtechel Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold tracking-wider group-hover:text-gray-300 transition-colors">
              Dtechel
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "project", "blog", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="relative group py-2 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-sm font-medium">User</span>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-5 py-2 bg-white text-black rounded-lg font-medium transition hover:bg-gray-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="px-6 py-2 bg-white text-black rounded-lg font-medium transition hover:bg-gray-200"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-900 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-3 border-t border-gray-800 pt-6">
            {["home", "about", "services", "project", "blog", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-gray-900 transition font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            {/* Mobile Auth */}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-3 px-4 py-3 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-black" />
                    </div>
                    <span className="font-medium">User Profile</span>
                  </div>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full py-3 bg-white text-black rounded-lg font-medium transition hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full py-3 bg-white text-black rounded-lg font-medium transition hover:bg-gray-200"
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
