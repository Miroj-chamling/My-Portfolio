import React from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        &lt; Miroj Chamling /&gt;
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          About
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          Projects
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
