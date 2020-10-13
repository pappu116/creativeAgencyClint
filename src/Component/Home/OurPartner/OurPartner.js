import React from "react";
import Slick from "../../../images/logos/slack.png";
import Goole from "../../../images/logos/google.png";
import Uber from "../../../images/logos/uber.png";
import Netflix from "../../../images/logos/netflix.png";
import Airbnb from "../../../images/logos/airbnb.png";
import "./Partner.css";
const OurPartner = () => {
  return (
    <section>
      <div className="col-md-10 offset-md-1 row  d-flex justify-content-center p-4">
        <div className="col-md-2 partner">
          <img src={Slick} alt="" />
        </div>
        <div className="col-md-2 partner">
          <img src={Goole} alt="" />
        </div>
        <div className="col-md-2 partner">
          <img src={Uber} alt="" />
        </div>
        <div className="col-md-2 partner">
          <img src={Netflix} alt="" />
        </div>
        <div className="col-md-2 partner">
          <img src={Airbnb} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
