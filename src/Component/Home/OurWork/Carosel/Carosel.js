import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carosel.css";
import Image1 from "../../../../images/carousel-1.png";
import Image2 from "../../../../images/carousel-2.png";
import Image3 from "../../../../images/carousel-3.png";
const Carosel = () => {
  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={30} nav>
        <div class="item">
          <img src={Image1} alt="" />
        </div>
        <div class="item">
          <img src={Image2} alt="" />
        </div>
        <div class="item">
          <img
            style={{ height: "250px" }}
            className="image-fluid"
            src={Image3}
            alt=""
          />
        </div>
        <div class="item">
          <img src={Image2} alt="" />
        </div>
        <div class="item">
          <img
            style={{ height: "250px" }}
            className="image-fluid"
            src={Image3}
            alt=""
          />
        </div>
        <div class="item">
          <img src={Image2} alt="" />
        </div>
        <div class="item">
          <img
            style={{ height: "250px" }}
            className="image-fluid"
            src={Image3}
            alt=""
          />
        </div>
        <div class="item">
          <img src={Image1} alt="" />
        </div>
        <div class="item">
          <img
            style={{ height: "250px" }}
            className="image-fluid"
            src={Image3}
            alt=""
          />
        </div>
        <div class="item">
          <img src={Image1} alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carosel;
