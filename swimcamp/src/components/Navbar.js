import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand lg navbar-light bg-dark "
        style={{ width: "100%", fontSize: "1.2rem" }}
      >
        <img id="logo" src={logo} alt="logo goes here" />

        <ul className="navbar-nav mx-auto justify-content-center">
          <li id="navMenuItem" className="nav-item px-3">
            <Link to="/home" className="nav-link text-white">
              HOME
            </Link>
          </li>
          <li id="navMenuItem" className="nav-item px-3">
            <Link to="/blog" className="nav-link text-white">
              BLOG
            </Link>
          </li>
          <li id="navMenuItem" className="nav-item px-3">
            <Link to="/ourteam" className="nav-link text-white">
              OUR TEAM
            </Link>
          </li>
          <li id="navMenuItem" className="nav-item px-3">
            <Link to="/contact" className="nav-link text-white">
              CONTACT
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mx-auto justify-content-right">
          <li id="navMenuItem" className="nav-item px-3">
            <Link to="/profile" className="nav-link text-white">
              Leonard Posa
            </Link>
          </li>
          <li id="navMenuItem" className="nav-item px-3">
            <Link to="/" className="nav-link text-white">
              LOGIN/REGISTER
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
