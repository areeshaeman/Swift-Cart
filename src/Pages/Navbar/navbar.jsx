import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import { isLoggedIn, getUserId } from '../API/auth';
import ProductSearch from '../Productspage/components/ProductSearch';
import Button from '../../UI/Button';
const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const username = getUserId();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[tomato] tracking-wide    "> 🛍️SwiftCart</div>
        {/* Navigation */}
        <nav className="flex gap-6 text-gray-700 font-medium text-lg">
          <Link to="/productspage" className="hover:text-[tomato] transition">Product</Link>
          <Link to="/Woman" className="hover:text-[tomato] transition">Women</Link>
          <Link to="/Men" className="hover:text-[tomato] transition">Men</Link>
          <Link to="/Jewelery" className="hover:text-[tomato] transition">Jewelery</Link>
        </nav>
        {/* searchbar */}
        <ProductSearch/>
       {/*  cart*/}
        <div className="flex items-center gap-4">
          <span className="text-gray-700 text-sm font-medium">Hi, <b>{username}</b></span>
          <Link
            to="/cart"
            className="text-[tomato] text-2xl hover:text-red-600 transition"
            title="Cart"
          >
            <FaOpencart />
          </Link>
          {loggedIn ? (
            <>
              <Button  text={ "Logout"}   onClick={handleLogout}  className="text-[tomato] text-sm font-semibold border border-[tomato] px-3 py-1 rounded-full hover:bg-[tomato] hover:text-white transition"   />
            </>
          ) : (
            <Link
              to="/login"
              className="text-[tomato] text-sm font-semibold border border-[tomato] px-4 py-1 rounded-full hover:bg-[tomato] hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
