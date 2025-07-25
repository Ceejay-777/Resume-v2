import { AlignJustify } from "lucide-react";
import { HamburgerIcon } from "lucide-react";

const Hamburger = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className="dark:bg-dark-background/30 bg-background/50 block mlg:hidden justify-between items-center p-4 fixed top-4 left-4 transition-all duration-500 shadow-md w-fit border inset-0.5 border-complementary backdrop-blur-[2px] rounded-lg font-bold dark:shadow-slate-800 h-fit z-50"
      onClick={(event) => {
         event.stopPropagation(); 
        setSidebarOpen(!sidebarOpen);
      }}
    >
      <AlignJustify />
    </div>
  );
};

export default Hamburger;
