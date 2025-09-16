import { useEffect, useState } from "react";
import Womanclothing from "./components/womanclothing"; 
import Footer from "../Home/components/Footer"
import { getProductsByCategory } from "../API/api";
import ProductGrid from "../../UI/Cards";

const Woman = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProductsByCategory("women's clothing")
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching Man products:", error));
  }, []);

  return (
    <>
    <Womanclothing />
    <ProductGrid products={products} title={" Woman wear"}/>
    <Footer />
    </>
  );
};

export default Woman;
