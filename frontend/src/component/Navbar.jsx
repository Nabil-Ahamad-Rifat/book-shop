import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";
import { Avatar } from "flowbite-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Custom state for dropdown
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout().then(() => {
        setIsDropdownOpen(false);
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-50 ${isSticky ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "py-2" : "py-4"}`}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex text-blue-700 items-center gap-2">
            <FaBlog className="inline-block" /> Books
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-gray-700 hover:text-blue-700 font-medium uppercase transition-colors"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* User / Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Auth UI for Desktop & Large Screens */}
            <div className="hidden lg:flex items-center relative">
              {user ? (
                <>
                  <button onClick={toggleDropdown} className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full">
                    <Avatar alt="User settings" img={user.photoURL || ""} rounded bordered color="gray" />
                  </button>

                  {/* Custom Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50 animate-fade-in-down">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-bold text-gray-900 truncate">{user.displayName || "User"}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <Link
                        to="/admin/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/shop"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
                      <div className="border-t border-gray-100 mt-1"></div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 font-semibold"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <button className="bg-blue-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                    Login
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-gray-700 focus:outline-none">
              {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBarsStaggered className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`space-y-4 px-4 mt-4 py-7 bg-blue-700 md:hidden transition-all duration-300 ease-in-out absolute left-0 right-0 top-16 ${isMenuOpen ? "block" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="block text-base text-white hover:text-gray-200 font-medium uppercase border-b border-blue-600 pb-2 last:border-0"
            >
              {link}
            </Link>
          ))}

          {/* Mobile Auth Options */}
          <div className="pt-4 border-t border-blue-600 text-white">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar img={user.photoURL || ""} rounded size="xs" />
                  <span className="text-sm font-medium">{user.displayName || user.email}</span>
                </div>
                <button onClick={handleLogout} className="w-full text-left font-bold text-red-200 hover:text-white">Sign Out</button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block font-bold">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
