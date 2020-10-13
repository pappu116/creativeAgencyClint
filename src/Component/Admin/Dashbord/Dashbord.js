import React from "react";
import TitleBar from "../../Sheard/TitleBar/TitleBar";
import Order from "../Order/Order";
import ServiceList from "../ServiceList/ServiceList";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="backgroundAdmin">
      <div className="container-fluid">
        <div className="row">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Admin;
