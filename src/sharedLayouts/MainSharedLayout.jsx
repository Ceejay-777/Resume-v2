import React from "react";
import { Outlet } from "react-router";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import PageAnimateWrapper from "./PageAnimateWrapper";
import { useState } from "react";
import Hamburger from "../components/navigation/Hamburger";
import Sidebar from "../components/navigation/Sidebar";
import { useEffect } from "react";

const MainSharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  
  useEffect(() => {
    console.log(sidebarOpen)
  }, [sidebarOpen])

  return (
    <PageAnimateWrapper>
      <div className="">
        <Header />
        <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </PageAnimateWrapper>
  );
};

export default MainSharedLayout;
