import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Hamburger from "./Hamburger.jsx";
import Theme from "../ui/ThemeSwitch.jsx";
import Download from "../ui/Download.jsx";
import Navbar from "./Navbar.jsx";
import Logo from "./Logo.jsx";

const Header = () => {
  return (
    <div className="dark:bg-dark-background/30 bg-background/50 hidden mlg:flex justify-between items-center p-4 pr-5 fixed mx-auto top-4 transition-all duration-500 shadow-lg w-9/10 border inset-0.5 border-complementary backdrop-blur-[2px] rounded-2xl font-bold dark:shadow-slate-800 min-w-[720px] h-fit z-50">
      <div className="flex items-center gap-2">
        <Logo />
        <Theme />
      </div>
      <div className="flex items-center">
        <Navbar />
        <Download />
      </div>
    </div>
  );
};

export default Header;
