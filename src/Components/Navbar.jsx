import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useTheme } from "../provider/ThemeProvider";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { FaMoon, FaLeaf } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-lg transition ${
            isActive 
              ? 'bg-primary-600 text-white' 
              : 'text-theme-primary hover:bg-theme-tertiary'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/gardeners" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-lg transition ${
            isActive 
              ? 'bg-primary-600 text-white' 
              : 'text-theme-primary hover:bg-theme-tertiary'
          }`
        }
      >
        Explore Gardeners
      </NavLink>
      <NavLink 
        to="/browse-tips" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-lg transition ${
            isActive 
              ? 'bg-primary-600 text-white' 
              : 'text-theme-primary hover:bg-theme-tertiary'
          }`
        }
      >
        Browse Tips
      </NavLink>
      {user && (
        <NavLink 
          to="/share-tip" 
          className={({ isActive }) => 
            `px-3 py-2 rounded-lg transition ${
              isActive 
                ? 'bg-primary-600 text-white' 
                : 'text-theme-primary hover:bg-theme-tertiary'
            }`
          }
        >
          Share a Garden Tip
        </NavLink>
      )}
      {user ? (
        <NavLink 
          to="/my-tips" 
          className={({ isActive }) => 
            `px-3 py-2 rounded-lg transition ${
              isActive 
                ? 'bg-primary-600 text-white' 
                : 'text-theme-primary hover:bg-theme-tertiary'
            }`
          }
        >
          My Tips
        </NavLink>
      ) : (
        <>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-lg transition ${
                isActive 
                  ? 'bg-primary-600 text-white' 
                  : 'text-theme-primary hover:bg-theme-tertiary'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-lg transition ${
                isActive 
                  ? 'bg-primary-600 text-white' 
                  : 'text-theme-primary hover:bg-theme-tertiary'
              }`
            }
          >
            Blog
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="fixed  top-0 left-0 right-0 bg-theme-secondary border-b border-theme shadow-md px-4 md:px-6 py-3 md:py-4 flex justify-between items-center font-sans z-50">
      <Link 
        to="/" 
        className="flex items-center gap-2 hover:opacity-80 transition group"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
          <FaLeaf className="text-lg md:text-xl text-white" />
        </div>
        <span className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition">
          BaganBondhu
        </span>
      </Link>

      <div className="hidden md:flex space-x-4 lg:space-x-6 text-theme-primary items-center">
        {navLinks}
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-theme-tertiary hover:bg-primary-500 hover:text-white transition text-theme-primary"
          aria-label="Toggle theme"
        >
          {isDark ? <IoMdSunny className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-theme-primary p-2"
          >
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop User Menu */}
        <div className="hidden md:block">
          {!user ? (
            <Link
              to="/auth/login"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition font-medium whitespace-nowrap"
            >
              Login
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Avatar Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full"
                aria-label="User menu"
                aria-expanded={dropdownOpen}
              >
                {user.photoURL ? (
                  <div className="w-10 h-10 rounded-full ring-2 ring-primary-500 overflow-hidden bg-theme-tertiary">
                    <img
                      alt={user.displayName || user.name || "User"}
                      src={user.photoURL}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full ring-2 ring-primary-500 bg-primary-600 flex items-center justify-center text-white font-semibold">
                    {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-theme-secondary border border-theme rounded-xl shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* User Info Section */}
                    <div className="px-4 py-4 bg-theme-tertiary border-b border-theme">
                      <div className="flex items-center gap-3">
                        {user.photoURL ? (
                          <div className="w-12 h-12 rounded-full ring-2 ring-primary-500 overflow-hidden bg-theme-tertiary flex-shrink-0">
                            <img
                              alt={user.displayName || user.name || "User"}
                              src={user.photoURL}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full ring-2 ring-primary-500 bg-primary-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                          </div>
                        )}
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-sm font-semibold text-theme-primary truncate">
                            {user.displayName || "User"}
                          </span>
                          <span className="text-xs text-theme-secondary truncate">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Logout Button */}
                    <div className="p-2">
                      <button 
                        className="w-full text-center px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition font-medium text-sm flex items-center justify-center gap-2" 
                        onClick={() => {
                          handleLogOut();
                          setDropdownOpen(false);
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 right-0 bg-theme-secondary border-t border-theme shadow-lg md:hidden z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 flex flex-col space-y-4">
            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-2">
              {navLinks}
            </div>
            
            {/* Mobile User Section */}
            {user ? (
              <div className="pt-4 border-t border-theme">
                <div className="flex items-center gap-3 mb-4 p-3 bg-theme-tertiary rounded-lg">
                  {user.photoURL ? (
                    <div className="w-12 h-12 rounded-full ring-2 ring-primary-500 overflow-hidden bg-theme-tertiary flex-shrink-0">
                      <img
                        alt={user.displayName || user.name || "User"}
                        src={user.photoURL}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full ring-2 ring-primary-500 bg-primary-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-semibold text-theme-primary truncate">
                      {user.displayName || "User"}
                    </span>
                    <span className="text-xs text-theme-secondary truncate">
                      {user.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogOut();
                    setMobileMenu(false);
                  }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg transition font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-theme">
                <Link
                  to="/auth/login"
                  onClick={() => setMobileMenu(false)}
                  className="block w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition font-medium text-center"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
