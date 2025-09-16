import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() === "") {
        setFiltered([]);
      } else {
        const result = products.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFiltered(result);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText, products]);

  const handleProductClick = (id) => {
    setFiltered([]);     
    setSearchText("");     
    navigate(`/product/${id}`);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[tomato]"
      />

      {filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 max-h-80 overflow-y-auto z-50">
          {filtered.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-12 h-12 object-contain"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{product.title}</p>
                <p className="text-[tomato] font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductSearch;
