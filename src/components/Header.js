import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume">
            <span>Resume</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
