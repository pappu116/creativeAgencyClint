import React from "react";
import NavBar from "../../Sheard/NavBar/NavBar";
import MainHeader from "../MainHeader/MainHeader";
const bgStyle = {
  backgroundColor: "#FBD062",
  height: " 684.53px",
};

const Header = () => {
  return (
    <div style={bgStyle}>
      <div className="container">
        <NavBar />
        <MainHeader />
      </div>
    </div>
  );
};

export default Header;
