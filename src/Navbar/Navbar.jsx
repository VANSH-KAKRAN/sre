import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/srelogo.png";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Navbar() {

  return (
    <div>
      <nav id="navigation" className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            SHREE RAM ENTERPRISES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >

                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/walltiles">
                  WALL TILES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/floartiles">
                  FLOAR TILES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  ABOUT US
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  CONTACT US
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
