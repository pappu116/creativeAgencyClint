import React from "react";
import NavBar from "../../Sheard/NavBar/NavBar";
import MainHeader from "../MainHeader/MainHeader";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container ">
        <NavBar />
        <MainHeader />
      </div>
    </div>
  );
};

export default Header;
