import React, { useEffect } from "react";
// import Close from "../../assets/Icons/Close";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Theme from "../ui/ThemeSwitch";
import Download from "../ui/Download";
import { X } from "lucide-react";
import { XCircle } from "lucide-react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const currentLocation = useLocation();

  const bodyClickHandler = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const main = document.body;
    main.addEventListener("click", bodyClickHandler);
    return () => {
      main.removeEventListener("click", bodyClickHandler);
    };
  }, [sidebarOpen, currentLocation.pathname]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [currentLocation.pathname]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-0 bg-background dark:bg-dark-background w-3/5 h-screen transition-all duration-500 p-8 top-0 z-60 flex flex-col gap-12 ${
        sidebarOpen && "translate-x-[0]"
      } -translate-x-full`}
    >
      <XCircle
        onClick={(event) => {
          event.stopPropagation();
          setSidebarOpen(false);
        }}
        size={48}
        strokeWidth={1}
      />
      <Logo />
      <Navbar />
      <Theme />
      <Download />
    </div>
  );
};

export default Sidebar;
