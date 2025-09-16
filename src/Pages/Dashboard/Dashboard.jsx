// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-100">
//         <Sidebar />
//       </div>
//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <div className="h-16 bg-white shadow px-4 flex items-center">
//           <Topbar />
//         </div>
//         {/* content */}
//         <div className="flex-1 p-4 overflow-y-auto  bg-[#181542]">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Topbar from "../Dashboard/components/Topbar";
// import { Outlet } from "react-router";
// // import UserStats from "./components/UserStats";
// // import OrdersOverview from "./components/OrdersOverview";

// export default function App() {
//   return (
//     <div className="flex  fixed bg-[#0d1b2a] min- h-screen text-white">
//       <Sidebar />
//       <div className="flex-1 p-6 overflow-y-auto space-y-6">
//         <Topbar/>
//         <div className="flex-1 p-4 overflow-y-auto">
//           <Outlet/>
//           {/* <ChartCard /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex bg-[#0a213b] min-h-screen text-white">
      {/* Sidebar - Fixed Full Height */}
      <div className="h-screen  sticky  top-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto  ">
            <Topbar />
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
