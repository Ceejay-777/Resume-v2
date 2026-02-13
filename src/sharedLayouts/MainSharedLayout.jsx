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
    console.log(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <PageAnimateWrapper>
      <div className="max-w-[1320px] mx-auto relative overflow-x-hidden">
        <Header />
        <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className="hidden md:block absolute inset-y-0 left-0 z-10 border-x border-[var(--color-accent)]/20 bg-[image:repeating-linear-gradient(315deg,var(--color-accent)_0,var(--color-accent)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-10 dark:border-[var(--color-dark-complementary)] dark:bg-[image:repeating-linear-gradient(315deg,var(--color-dark-accent)_0,var(--color-dark-accent)_1px,transparent_0,transparent_50%)] w-8" />
        <div className="hidden md:block absolute inset-y-0 right-0 z-10 border-x border-[var(--color-accent)]/20 bg-[image:repeating-linear-gradient(315deg,var(--color-accent)_0,var(--color-accent)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-10 dark:border-[var(--color-dark-complementary)] dark:bg-[image:repeating-linear-gradient(315deg,var(--color-dark-accent)_0,var(--color-dark-accent)_1px,transparent_0,transparent_50%)] w-8" />
        <div className="relative z-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </PageAnimateWrapper>
  );
};

export default MainSharedLayout;
