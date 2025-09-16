import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../../API/api";
import { MdLibraryAdd } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchAllUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };
  // fetch data
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const openModal = (user = null) => {
    if (user) {
      setFormData({
        email: user.email,
        username: user.username,
        password: user.password,
        firstname: user.name.firstname,
        lastname: user.name.lastname,
      });
      setCurrentId(user.id);
      setEditing(true);
    } else {
      setFormData({
        email: "",
        username: "",
        password: "",
        firstname: "",
        lastname: "",
      });
      setEditing(false);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditing(false);
    setCurrentId(null);
  };

  const handleSubmit = async () => {
    const userPayload = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
    };

    if (editing) {
      await updateUser(currentId, userPayload);
      alert("User updated!");
    } else {
      await addUser(userPayload);
      alert("User added!");
    }

    closeModal();
    fetchAllUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    alert("User deleted!");
    fetchAllUsers();
  };

  return (
    <div className="w-full    ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white  flex  ">
          {" "}
          <FaUsersGear className="m-2" /> Users
        </h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded   flex shadow"
        >
          <MdLibraryAdd className="m-1" /> Add users
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto    rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" bg-[#0f2a4d]  divide-y divide-gray-200    ">
            {users.map((u) => (
              <tr key={u.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">{u.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {u.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {u.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  capitalize">
                  {u.name.firstname} {u.name.lastname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right space-x-2">
                  <button
                    className="px-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                    onClick={() => openModal(u)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md"
                    onClick={() => handleDelete(u.id)}
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
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editing ? " Edit User" : " Add User"}
            </h2>

            <input
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              type="password"
            />
            <input
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                {editing ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
