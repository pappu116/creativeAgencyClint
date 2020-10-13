import React, { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import "./Service.css";

const Service = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h1>
            Provide awesome <span style={{ color: "#79B058" }}>services</span>{" "}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {item.map((blog) => (
            <ServiceDetails blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
