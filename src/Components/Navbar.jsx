import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleChange = () => {
    setIsDark(!isDark);
  };

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
      <NavLink to="/" className="hover:underline">Home</NavLink>
      <NavLink to="/gardeners" className="hover:underline">Explore Gardeners</NavLink>
      <NavLink to="/browse-tips" className="hover:underline">Browse Tips</NavLink>
      <NavLink to="/share-tip" className="hover:underline">Share a Garden Tip</NavLink>
      <NavLink to="/my-tips" className="hover:underline">My Tips</NavLink>
    </>
  );

  return (
    <nav className="bg-green-100 dark:bg-gray-900 text-green-800 dark:text-white shadow px-4 py-3 font-sans relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
  
        <Link to="/" className="text-2xl font-bold text-green-700 dark:text-green-300">
          🌿 BaganBondhu
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks}
        </div>

        <div className="flex items-center space-x-4">
        
          <label className="cursor-pointer flex items-center">
            <input
              type="checkbox"
              className="hidden"
              onChange={handleChange}
              checked={isDark}
            />
            {isDark ? (
              <FaMoon className="h-5 w-5 text-yellow-400" />
            ) : (
              <IoMdSunny className="h-6 w-6 text-orange-500" />
            )}
          </label>
          {!user ? (
            <Link
              to="/auth/login"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt={user.displayName || user.name}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 hidden group-hover:block">
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-700 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-start pl-4 pr-4 pb-4 bg-green-50 dark:bg-gray-800 shadow rounded-md">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
