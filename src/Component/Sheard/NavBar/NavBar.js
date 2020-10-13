import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Logo from "../../../images/logos/logo.png";
const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState(UserContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <Link class="navbar-brand" to="#">
        <img src={Logo} style={{ height: "40px" }} alt="" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/ourportfolio">
              OurPortfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="ourteam">
              Our Team
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="contact">
              Contact Us
            </Link>
          </li>
          <li class="nav-item">
            {loggedInUser.email ? (
              <h2>{loggedInUser.name}</h2>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
