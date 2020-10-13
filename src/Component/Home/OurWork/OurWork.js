import React from "react";
import Carosel from "./Carosel/Carosel";

const OurWork = () => {
  return (
    <section className="mt-5 pb-5" style={{ backgroundColor: "#111430" }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="p-5" style={{ color: "#fff" }}>
            Here are some of <span style={{ color: "#79B058" }}>our works</span>{" "}
          </h2>
        </div>
        <Carosel />
      </div>
    </section>
  );
};

export default OurWork;
