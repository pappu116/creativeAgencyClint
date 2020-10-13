import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TitleBar from "../../Sheard/TitleBar/TitleBar";
import Sidebar from "../Sidebar/Sidebar";
import ServiceListDetails from "./ServiceListDetails/ServiceListDetails";

const ServiceList = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="backgroundAdmin container-fluid   ">
      <div className="row blogs">
        <div className="col-md-2 bg-color">
          <Sidebar />
        </div>
        <div className="col-md-10 ">
          <TitleBar name="Service List" />
          <div className="card-deck   mt-5">
            {item.map((item) => (
              <ServiceListDetails item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
