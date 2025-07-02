import React, { useEffect } from "react";
import Close from "../assets/Icons/Close";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Theme from "../reuseables/Theme";
import Download from "../reuseables/Download";

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const currentLocation = useLocation();

  const bodyClickHandler = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const main = document.querySelector(".main");
    main.addEventListener("click", bodyClickHandler);
    return () => {
      main.removeEventListener("click", bodyClickHandler);
    };
  }, [sidebarOpen, currentLocation.pathname]);

  useEffect(() => {
    setSidebarOpen(false)
  }, [currentLocation.pathname])

  return (
    <div
      className={`left-[0] bg-white dark:bg-pri w-52 h-screen transition-all duration-500 p-8 fixed top-[0] ${
        sidebarOpen && "translate-x-[0]"
      } -translate-x-full`}
    >
      <Close sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <nav>
        <ul className="list-none mb-5 text-center">
          <li>
            <Link
              to="/"
              className="border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-black mb-4 dark:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-black mb-4 dark:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-black mb-4 dark:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-black mb-4 dark:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Theme />
      <br />
      <Download />
    </div>
  );
};

export default Sidebar;
