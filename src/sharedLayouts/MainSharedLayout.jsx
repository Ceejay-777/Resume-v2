import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import PageAnimateWrapper from "./PageAnimateWrapper";

const MainSharedLayout = () => {
  return (
    <PageAnimateWrapper>
      <div className="shared relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </PageAnimateWrapper>
  );
};

export default MainSharedLayout;
