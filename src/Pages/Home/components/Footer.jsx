import React from "react";
import Para from "../../../UI/Para";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-tomato">SwiftCart</h3>
          <Para  title=" Elevating your shopping experience with speed, quality, and care." />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-tomato">Home</a></li>
            <li><a href="#" className="hover:text-tomato">Shop</a></li>
            <li><a href="#" className="hover:text-tomato">About</a></li>
            <li><a href="#" className="hover:text-tomato">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Help Center</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-tomato">FAQs</a></li>
            <li><a href="#" className="hover:text-tomato">Shipping</a></li>
            <li><a href="#" className="hover:text-tomato">Returns</a></li>
            <li><a href="#" className="hover:text-tomato">Track Order</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <p className="text-sm text-gray-300">📧 support@swiftcart.com</p>
          <p className="text-sm text-gray-300 mt-2"> +92 123 4567890</p>
          <p className="text-sm text-gray-300 mt-2"> Lahore, Pakistan</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} SwiftCart. Built with ❤️ in Pakistan.
      </div>
    </footer>
  );
};

export default Footer;
