import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../../../UI/Cards";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const limitedProducts = response.data.slice(0, 6);
        setProducts(limitedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      <ProductGrid products={products} title="Featured Products" />
    </>
  );
};
export default ProductList;
