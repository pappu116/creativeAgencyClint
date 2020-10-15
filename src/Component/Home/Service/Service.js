import React, { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import "./Service.css";

const Service = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://pacific-bastion-98056.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center mt-5  pt-5">
          <h1>
            Provide awesome <span style={{ color: "#79B058" }}>services</span>
          </h1>
        </div>
        <div className="row  mb-5 mt-5">
          {item.map((blog, index) => (
            <ServiceDetails key={index + 1} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
