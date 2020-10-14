import React, { useContext } from "react";
import { AdminContext } from "../../../App";
import Order from "../Order/Order";
import ServiceList from "../ServiceList/ServiceList";

const Admin = () => {
  const [isAdmin] = useContext(AdminContext);
  return (
    <div className="backgroundAdmin">
      <div className="container-fluid">
        <div className="row">{isAdmin ? <ServiceList /> : <Order />}</div>
      </div>
    </div>
  );
};

export default Admin;
