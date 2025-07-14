import React, { useEffect, useState } from "react";
import Cee from "../../assets/Cee.jsx";
import Sidebar from "./Sidebar.jsx";
import Hamburger from "../../assets/Icons/Hamburger.jsx";
import Theme from "../ui/ThemeSwitch.jsx";
import { Link } from "react-router-dom";
import Download from "../ui/Download.jsx";
import Navbar from "./Navbar.jsx";
import ceewhite from "../../assets/CeeLogos/BlueWhite.png";
import ceedark from "../../assets/CeeLogos/BlueBlack.png";
import { useAppContext } from "../../hooks/context.jsx";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bgImage, setBgImage] = useState(ceewhite);
  const { theme } = useAppContext();

  useEffect(() => {
    setBgImage(theme === "dark" ? ceewhite : ceedark);
  }, [theme]);

  return (
    <div className="dark:bg-dark-background/30 bg-background/50 hidden md:flex justify-between items-center p-4 pr-5 sticky mx-auto top-4 transition-all duration-500 shadow-lg w-4/5 border inset-0.5 border-complementary backdrop-blur-[2px] rounded-2xl font-bold dark:shadow-slate-800 min-w-[720px]">
      {/* <div className="gap-4 items-center "> */}
      <div className="flex items-center gap-2">
        <img src={bgImage} alt="CeeJay" className="relative w-16 rounded-2xl" />
        <Theme />
      </div>
      <Navbar />
      <Download />
      {/* </div> */}

      <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Header;
