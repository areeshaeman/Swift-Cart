// import React from "react";

// function Sidebar() {
//   return (
//     <div className="fixed  left-0 w-64 h-full bg-gray-800 text-white p-4">
//         <h1  className="text-3xl  font-bold "  >Dashboard</h1>
//       <nav className="space-y-4 p-3">
//         <a href="/dashboard/products" className="block hover:text-blue-400">📦 Products</a>
//         <a href="/dashboard/users" className="block hover:text-blue-400">👥 Users</a>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;

// components/Sidebar.jsx
// import { Home, BarChart2, Mail, Settings } from 'lucide-react';
// import { Link } from 'react-router-dom';

// import {  Table, User,  } from "lucide-react";
// const Sidebar = () => (
    
//     <aside className="w-64 bg-[#061025ce] p-4 space-y-6">
//       <h1 className="text-2xl font-bold text-white mb-6">VISION UI</h1>
//       <nav className="space-y-4">
//        <a href="/dashboard/products" className="block hover:text-blue-400">  <Table />Products</a>
//        <a href="/dashboard/users" className="block hover:text-blue-400"> <User />  Users</a>
        
//       </nav>
//     </aside>

// );
// export default Sidebar;


import { Home, Table, CreditCard, User } from "lucide-react";
import { Link } from "react-router-dom";
import { FaUsersGear } from "react-icons/fa6";

const links = [
  { name: "Dashboard", icon: <Home />, to: "/dashboard" },
  { name: "Tables", icon: <Table />, to: "/dashboard/ChartCard" },
  { name: "Users", icon: <FaUsersGear />, to: "/dashboard/users" }, 
  { name:"products" , to:"/dashboard/products"     , icon: <CreditCard />,    } 

];

export default function Sidebar() {
  return (
    <aside className="w-64  h-screen    bg-[#061025ce] p-4 space-y-6">
      <h1 className="text-2xl font-bold text-white mb-6">VISION UI</h1>
      <nav className="space-y-4">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="flex items-center gap-3 text-gray-300 hover:text-white"
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
