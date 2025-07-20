import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Hamburger from "../../assets/Icons/Hamburger.jsx";
import Theme from "../ui/ThemeSwitch.jsx";
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
    <div className="dark:bg-dark-background/30 bg-background/50 hidden mlg:flex justify-between items-center p-4 pr-5 fixed mx-auto top-4 transition-all duration-500 shadow-lg w-9/10 border inset-0.5 border-complementary backdrop-blur-[2px] rounded-2xl font-bold dark:shadow-slate-800 min-w-[720px] h-fit z-50">
      <div className="flex items-center gap-2">
        <img src={bgImage} alt="CeeJay" className="relative w-16 rounded-2xl" />
        <Theme />
      </div>
      <Navbar />
      <Download />
      <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Header;
