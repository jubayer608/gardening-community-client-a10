import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <nav className="bg-green-100 shadow px-6 py-4 flex justify-between items-center font-sans relative">
      <div className="text-2xl font-bold text-green-700">
        <Link to="/">🌿 BaganBondhu</Link>
      </div>
      <div className="hidden md:flex space-x-6 text-green-800 items-center">
        {navLinks}
      </div>
      <div className="md:hidden">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-green-50 border-t p-4 flex flex-col space-y-4 md:hidden z-50">
          {navLinks}
        </div>
      )}
      <div className="relative ml-4">
        {!user ? (
          <Link
            to="/auth/login"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </Link>
        ) : (
           <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user.displayName || user.name}
            src={user.photoURL} />
            
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
          
        <button className="btn bg-green-600"  onClick={handleLogOut}>Logout</button>
      </ul>
    </div>
            )}
          </div>
        
      
    </nav>
  );
};

export default Navbar;
