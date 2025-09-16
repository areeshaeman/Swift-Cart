// const cards = [
//   { label: "Today's Money", value: "$53,000", change: "+55%" },
//   { label: "Today's Users", value: "2,300", change: "+5%" },
//   { label: "New Clients", value: "3,052", change: "-14%" },
//   { label: "Total Sales", value: "$173,000", change: "+8%" },
// ];

// export default function TopCards() {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//       {cards.map((card, idx) => (
//         <div key={idx} className="bg-[#1d3557] p-4 rounded-xl shadow-md">
//           <p className="text-sm text-gray-400">{card.label}</p>
//           <div className="flex justify-between items-center mt-1">
//             <h2 className="text-xl font-bold">{card.value}</h2>
//             <span className="text-sm text-green-400">{card.change}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { Bell, Menu } from "lucide-react";
import { TbLayoutDashboard } from "react-icons/tb";
export default function Topbar() {
  return (
    <div className="flex items-center justify-between  px-6 py-3 shadow-md  ">
      <div className="flex items-center space-x-4">
        <button className="md:hidden">
          <Menu className="text-white w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-white flex " >  <TbLayoutDashboard className="m-1" /> Dashboard</h1>
      </div>

      <div className="hidden md:flex items-center bg-[#1a3355] rounded-md px-3 py-1 w-72">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white placeholder-gray-300 w-full"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="text-white w-5 h-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="User"
          className="w-9 h-9 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  );
}
