import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const MainSharedLayout = () => {
  return (
    <div className="shared relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainSharedLayout;
