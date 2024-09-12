import React, { useState } from "react";
import Cee from "../assets/Cee.jsx";
import Sidebar from "./Sidebar";
import Hamburger from "../assets/Icons/Hamburger.jsx";
import Theme from "../reuseables/Theme.jsx";
import { Link } from "react-router-dom";
import Download from "../reuseables/Download.jsx";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-pri bg-white flex justify-between items-center pr-5 fixed top-0 w-full transition-all duration-500">
      <Cee />

      <div className="gap-4 items-center hidden md:flex">
        <nav>
          <ul className="flex rounded-3xl px-4 py-3 gap-6">
            <Link
              to="/"
              className="hover:underline transition-all text-com md:border-0 md:p-0"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline transition-all text-com md:border-0 md:p-0"
            >
              About
            </Link>
            <Link
              to="projects"
              className="hover:underline transition-all text-com md:border-0 md:p-0"
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="hover:underline transition-all text-com md:border-0 md:p-0"
            >
              Contact
            </Link>
          </ul>
        </nav>
        <Theme />
        <Download />
      </div>

      <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Navbar;
