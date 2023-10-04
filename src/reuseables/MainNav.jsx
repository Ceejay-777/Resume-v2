import React from "react";
import { navLinks } from "../data";
import { Link } from "react-router-dom";

const MainNav = ({ main }) => {
  return (
    <nav className={main ? "main-nav-main" : "main-nav"}>
      <ul className={main ? "navlinks-main navlinks" : "navlinks"}>
        {navLinks.map((navLink, ID) => {
          return (
            <li className={main ? "navitem-main navitem" : "navitem"} key={ID}>
              {navLink.toLowerCase() === "home" ? (
                <Link
                  to="/"
                  className={main ? "navlink-main navlink" : "navlink"}
                >
                  {navLink}
                </Link>
              ) : (
                <Link
                  to={navLink.toLowerCase()}
                  className={main ? "navlink-main navlink" : "navlink"}
                >
                  {navLink}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
