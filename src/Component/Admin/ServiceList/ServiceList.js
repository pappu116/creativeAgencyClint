import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import TitleBar from "../../Sheard/TitleBar/TitleBar";
import Sidebar from "../Sidebar/Sidebar";
import AdminTabel from "./AdminTabel/AdminTabel";
import ServiceListDetails from "./ServiceListDetails/ServiceListDetails";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      "https://pacific-bastion-98056.herokuapp.com/userSelf?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() => {
    fetch("https://pacific-bastion-98056.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <div className="backgroundAdmin container-fluid   ">
      <div className="row blogs">
        <div className="col-md-2 bg-color">
          <Sidebar />
        </div>
        <div className="col-md-10 ">
          <TitleBar name="Service List" />
          {isAdmin ? (
            <AdminTabel />
          ) : (
            <div className="card-deck   mt-5">
              {item.map((item) => (
                <ServiceListDetails item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
