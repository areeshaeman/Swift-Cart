
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Manclothing from "./components/Menclothing";
import Footer from "../Home/components/Footer";
import ProductGrid from "../../UI/Cards";
import { getProductsByCategory } from "../API/api";

const Woman = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory("men's clothing")
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching Man products:", error));
  }, []);

  return (
    <>
    <Manclothing />
    <ProductGrid products={products} title={ "Man wear"}/>
    <Footer />
    </>
  );
};

export default Woman;
