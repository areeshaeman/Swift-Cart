// src/API/Utilscart.js
import { getUserId } from "./auth";

export function addToCart(product) {
  const userId = getUserId() || "guest";
  const cartKey = `cart-${userId}`;

  const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const index = existingCart.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    existingCart[index].quantity += 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem(cartKey, JSON.stringify(existingCart));
}
