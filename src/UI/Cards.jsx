
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function ProductGrid({ products = [], title = "Products",  }) {
  return (
    <div className="py-10 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl text-center text-[tomato] font-extrabold mb-10 tracking-wide">
        {title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white  rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {product.title}
            </h2>
            <p className="text-[tomato] font-bold text-lg mb-1">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 mb-4 capitalize">
              {product.category}
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <Link to={`/product/${product.id}`}>
                <Button text="View Product"  className="w-full bg-[tomato] hover:bg-orange-600  text-white py-2 rounded transition"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
