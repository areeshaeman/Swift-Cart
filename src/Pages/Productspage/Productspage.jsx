
import { useEffect, useState } from "react";
import Main from "./components/main";
import Footer from "../Home/components/Footer";
import ProductGrid from "../../UI/Cards";
import {
  getProducts,
} from "../API/api";
const Productspage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };
  return (
    <>
    <Main/>
    <ProductGrid products={products} title="All Products"     />
    <Footer />
    </>
  );
};

export default Productspage;

