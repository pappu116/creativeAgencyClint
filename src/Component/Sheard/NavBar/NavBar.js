import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Logo from "../../../images/logos/logo.png";
const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="#">
        <img src={Logo} style={{ height: "40px" }} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ourportfolio">
              OurPortfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="ourteam">
              Our Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            {loggedInUser.email ? (
              <h2>{loggedInUser.name}</h2>
            ) : (
              <Link to="/login">
                <button
                  style={{ padding: "5px 20px" }}
                  className="btn btn-brand"
                >
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
