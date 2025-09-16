const BASE_URL = 'https://fakestoreapi.com';

// ---------- Products ----------
export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}
// get product
export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}
// add product
export async function addProduct(product) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return res.json();
}
// upadate product
export async function updateProduct(id, product) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return res.json();
}
// delete product
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
// ----- product catagory --------
export async function getProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data.filter(item => item.category === category);
}
// ---------- Users ----------
export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}
// get user
export async function getUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
}
// add user
export async function addUser(user) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
}
// update user
export async function updateUser(id, user) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
}
// delete user
export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
// -------------cart
export const deleteCartItem = async (userId, itemId) => {
  try {
    const res = await fetch(`https://your-api.com/api/cart/${userId}/item/${itemId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Delete failed");

    const data = await res.json();
    return data; // Expected to return { success: true }
  } catch (error) {
    console.error("API Delete Error:", error);
    return { success: false };
  }
};