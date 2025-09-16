
import { useEffect, useState } from "react";
import Hero from "./components/mainpage"
import ProductGrid from "../../UI/Cards";
import Footer from "../Home/components/Footer";
import { getProductsByCategory } from "../API/api";

const Woman = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory("jewelery")
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching jewelery products:", error));
  }, []);


  return (
    <>
      <Hero />
      <ProductGrid products={products} title="Jewelery Products" />
      <Footer />
    </>
  );
};

export default Woman;
