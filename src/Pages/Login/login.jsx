// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import { motion } from "framer-motion";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("https://fakestoreapi.com/auth/login", {
//         username,
//         password,
//       });
//       const { token } = res.data;

//       if (token) {
//         localStorage.setItem("token", token);
//         setErrorMsg("");
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       setErrorMsg("Invalid username or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#fef4f2] to-[#fbe7e2] flex items-center justify-center px-4">
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="backdrop-blur-xl bg-white/60 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           Welcome Back 👋
//         </h2>
//         <p className="text-center text-gray-500 mb-8 text-sm">
//           Please sign in to your account to continue
//         </p>

//         {/* Username */}
//         <div className="mb-5">
//           <label className="text-sm font-medium text-gray-700 mb-1 block">
//             Username
//           </label>
//           <input
//             type="text"
//             className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none transition"
//             placeholder="e.g., mor_2314"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-5">
//           <label className="text-sm font-medium text-gray-700 mb-1 block">
//             Password
//           </label>
//           <input
//             type="password"
//             className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none transition"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleLogin()}
//           />
//         </div>

//         {/* Error*/}
//         {errorMsg && (
//           <p className="text-sm text-red-600 mb-4 text-center">{errorMsg}</p>
//         )}

//         {/* Login  */}
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className={`w-full ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-red-500 hover:bg-red-600"
//           } text-white py-3 rounded-xl font-semibold transition-all duration-300`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {/* Footer */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <a href="/register" className="text-red-500 hover:underline">
//             Create one
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;

// src/pages/Login.jsx
// src/Pages/Login/login.jsx
import React, { useState } from "react";
import { loginUser } from "../API/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");   //mor_2314
  const [password, setPassword] = useState("");//83r5^_
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const success = await loginUser(username, password);
      if (success) {
        alert("Login successful!");
        navigate("/");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
