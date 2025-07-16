import React from "react";
import { Outlet } from "react-router";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import PageAnimateWrapper from "./PageAnimateWrapper";

const MainSharedLayout = () => {
  return (
    <PageAnimateWrapper>
      <div className="">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </PageAnimateWrapper>
  );
};

export default MainSharedLayout;
