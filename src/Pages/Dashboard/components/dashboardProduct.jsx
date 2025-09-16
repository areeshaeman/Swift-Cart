import React, { useEffect, useState } from "react";
import { AiFillProduct} from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";

import {
  getProducts,
  addProduct,
  deleteProduct as apiDeleteProduct,
} from "../../API/api";
import axios from "axios";

const DashboardProduct = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (product = null) => {
    if (product) {
      setFormData(product);
      setEditing(true);
      setCurrentId(product.id);
    } else {
      setFormData({ title: "", price: "", description: "", image: "" });
      setEditing(false);
      setCurrentId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditing(false);
    setFormData({ title: "", price: "", description: "", image: "" });
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await axios.put(
          `https://fakestoreapi.com/products/${currentId}`,
          formData
        );
        alert("Product updated (not permanently)");
      } else {
        await addProduct(formData);
        alert("Product added (not saved permanently)");
      }
      closeModal();
      fetchProducts();
    } catch (err) {
      console.error("Submit Error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiDeleteProduct(id);
      alert("Product deleted (not permanently)");
      fetchProducts();
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white  flex "><AiFillProduct   className="  m-2"  />  Product Dashboard</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded   flex shadow"
        >
          <MdLibraryAdd className="m-1 "  /> Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto rounded-lg shadow border border-gray-600">
        <table className="min-w-full bg-[#0f2a4d] text-white">
          <thead>
            <tr className="bg-[#1a3355] text-sm text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t border-gray-700 hover:bg-[#1e3a5c]"
              >
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-12 w-12 object-contain rounded"
                  />
                </td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3 space-x-2  flex">
                  <button
                    onClick={() => openModal(p)}
                    className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {editing ? "✏️ Update Product" : "➕ Add Product"}
            </h2>
            <form className="space-y-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={closeModal}
                  type="button"
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                >
                  {editing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardProduct;
