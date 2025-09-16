import React from "react";
import {  BrowserRouter as Router, Routes, Route, useLocation,} from "react-router-dom";

import Navbar from "./Pages/Navbar/navbar";
import Home from "./Pages/Home/home";
import Productspage from "./Pages/Productspage/productspage";
import Jewelery from "./Pages/Jewelery/Jewelery";
import Login from "./Pages/Login/login";
import Woman from "./Pages/Woman/Woman" ;
import Men from "./Pages/Men/men";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserList from "./Pages/Dashboard/components/users";
import DashboardProduct from "./Pages/Dashboard/components/dashboardProduct";
import ProductDetail from "./Pages/Productspage/components/ProductDetail";
import ChartCard from "./Pages/Dashboard/components/ChartCard";
import Cart from "./Pages/Cart/cart";


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productspage" element={<Productspage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Woman" element={<Woman />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path="/login" element={<Login />} />
        <Route   path="/cart"  element={< Cart/>}  />
       {/* nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UserList />} />
          <Route  path="products"  element={ < DashboardProduct/> }  />
          <Route     path="ChartCard"  element={ <ChartCard/> }       />

        </Route>
      </Routes>
      
    </>
  );
}

export default App;
