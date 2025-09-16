import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../API/Utilscart";
import { isLoggedIn } from "../../API/auth";
import Button from "../../../UI/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");

        const text = await res.text();
        if (!text) throw new Error("Empty response");

        const data = JSON.parse(text);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!isLoggedIn()) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    addToCart(product);
    alert("Product added to cart!");
  };

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={150} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Button   onClick={handleAddToCart}   text="Add to Cart"   /> 
    </div>
  );
};

export default ProductDetail;
