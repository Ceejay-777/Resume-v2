import React, { useState } from "react";
import Cee from "../assets/Cee.jsx";
import MainNav from "./MainNav";
import Sidebar from "./Sidebar";
import Hamburger from "../assets/Icons/hamburger";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      {/* <img src={Cee} alt="Ceejay Logo" className="ceejay-logo" /> */}
      <Cee />

      <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Navbar;
