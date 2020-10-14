import React from "react";
import Fram from "../../../images/logos/Frame.png";
const MainHeader = () => {
  return (
    <section>
      <div className="container-fluid d-flex mt-5 ">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 ">
            <h1 style={{ fontSize: "3.5rem", fontWeight: " 700" }}>
              Let's Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              facilis ratione nisi nulla doloremque dolorem!
            </p>
            <div className="btn btn-brand">Hire Us</div>
          </div>
          <div className="col-md-7">
            <img src={Fram} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
