import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import posaprofil from "../images/posa.png";

function Navbar() {
  return (
    <>
      <nav
        className="navbar width-auto navbar-expand-lg navbar-light bg-dark "
        style={{ width: "100%", fontSize: "1.2rem" }}
      >
        <img id="logo" src={logo} alt="logo goes here" />

        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 justify-content-center navbar-large-screen">
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
        <ul className="navbar-nav mx-auto justify-content-right navbar-large-screen">
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

        <div className="navbar-small-screen">
          <ul className="navbar-nav ">
            <li id="navMenuItem" className="nav-item px-2">
              <Link to="/home" className="nav-link text-white">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li id="navMenuItem" className="nav-item px-2">
              <Link to="/blog" className="nav-link text-white">
                <i className="fab fa-blogger"></i>
              </Link>
            </li>
            <li id="navMenuItem" className="nav-item px-2">
              <Link to="/ourteam" className="nav-link text-white">
                <i className="fas fa-user-friends"></i>
              </Link>
            </li>
            <li id="navMenuItem" className="nav-item px-2">
              <Link to="/contact" className="nav-link text-white">
                <i className="far fa-address-card"></i>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto ">
            <li id="navMenuItem" className="nav-item px-2">
              <Link to="/profile" className="nav-link text-white">
                <img
                  src={posaprofil}
                  alt="posa"
                  style={{ borderRadius: "50px", width: "35px" }}
                />
              </Link>
            </li>
            <li id="navMenuItem" className="nav-item px-2">
              <Link to="/" className="nav-link text-white">
                <i className="fas fa-sign-in-alt"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
