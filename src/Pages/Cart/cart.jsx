import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserId, isLoggedIn } from "../API/auth";
import { deleteCartItem } from "../../Pages/API/api"; 
import Title from "../../UI/Title";

const Cart = () => {
  const navigate = useNavigate();
  const userId = getUserId();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!isLoggedIn()) {
      alert("Please login to view your cart!");
      navigate("/login");
    } else {
      const savedCart = JSON.parse(localStorage.getItem(`cart-${userId}`)) || [];
      setCart(savedCart);
    }
  }, [] );

  const handleDelete = async (itemId) => {
    try {
      const response = await deleteCartItem(userId, itemId); 
      if (response.success) {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem(`cart-${userId}`, JSON.stringify(updatedCart));
      } else {
        alert("Failed to delete item from cart.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting item.");
    }
  };

  return (
    <div className="p-6">
       <Title title="Your Cart"/>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border p-4 rounded-md shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

