import React from "react";
import Slick from "../../../images/logos/slack.png";
import Goole from "../../../images/logos/google.png";
import Uber from "../../../images/logos/uber.png";
import Netflix from "../../../images/logos/netflix.png";
import Airbnb from "../../../images/logos/airbnb.png";
import "./Partner.css";
const OurPartner = () => {
  return (
    <section className="container">
      <div className="">
        <div className="row  text-center ">
          <div className="col-md-4   col-lg-2 col-sm-6  ">
            <div className="partner m-4">
              <img src={Slick} alt="" />
            </div>
          </div>
          <div className="col-md-4   col-lg-2 col-sm-6  ">
            <div className="partner m-4">
              <img src={Goole} alt="" />
            </div>
          </div>
          <div className="col-md-4  col-lg-2 col-sm-6 ">
            <div className="partner m-4">
              <img src={Uber} alt="" />
            </div>
          </div>
          <div className="col-md-4  col-lg-2 col-sm-6 ">
            <div className="partner m-4">
              <img src={Netflix} alt="" />
            </div>
          </div>
          <div className="col-md-4  col-lg-2 col-sm-6 ">
            <div className="partner m-4">
              <img src={Airbnb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
