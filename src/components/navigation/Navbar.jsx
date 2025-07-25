import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col mlg:flex-row rounded-3xl mlg:px-4 mlg:py-3 gap-6 justify-between uppercase font-heading text-accent dark:text-dark-accent lg:text-2xl lg:gap-8">
        <Link
          to="/home"
          className=" hover:-translate-y-1 transition-all text-com md:border-0 md:p-0"
        >
          Home
        </Link>
        <Link
          to="projects"
          className=" transition-all text-com md:border-0 md:p-0 hover:-translate-y-1"
        >
          Projects
        </Link>
        <Link
          to="contact"
          className=" transition-all text-com md:border-0 md:p-0 hover:-translate-y-1"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
