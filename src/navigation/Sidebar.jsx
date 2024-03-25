import React, { useEffect } from "react";
import { navLinks } from "../data";
import MainNav from "../reuseables/MainNav";
import Close from "../assets/Icons/Close";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Theme from "../reuseables/Theme";

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
    // console.log(main)
    return () => {
      main.removeEventListener("click", bodyClickHandler);
    };
  }, [sidebarOpen, currentLocation.pathname]);

  return (
    <div
      className={
        `left-[0] bg-white dark:bg-pri w-52 h-screen transition-all duration-500 p-8 fixed top-[0] ${sidebarOpen && "translate-x-[0]"} translate-x-[-100%]`
      }
    >
      <Close sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <nav>
        <ul className="navlinks gap-4">
          <li className="list-none mb-5 text-center">
            <Link
              to="/"
              className="text-xl font-semibold border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-com mb-4"
            >
              Home
            </Link>
            <Link
              to="about"
              className="text-xl font-semibold border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-com mb-4"
            >
              About
            </Link>
            <Link
              to="projects"
              className="text-xl font-semibold border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-com mb-4"
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="text-xl font-semibold border-2 border-sec p-1 rounded-3xl block hover:scale-110 transition-all text-com mb-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Theme />
      <div className="bg-pri text-lg rounded-lg border-2">Download CV</div>
    </div>
  );
};

// .navlink {
//   font-size: 1.25rem;
//   font-weight: 500;
//   border: 2px solid var(--secondary);
//   padding: 0.25rem;
//   border-radius: 20px;
//   color: var(--complementary);
//   transition: all 0.2s ease-in-out;
//   display: block;
// }

export default Sidebar;
