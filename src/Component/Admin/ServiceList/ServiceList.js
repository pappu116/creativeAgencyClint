import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AdminContext, UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import AdminTabel from "./AdminTabel/AdminTabel";
import ServiceListDetails from "./ServiceListDetails/ServiceListDetails";

const ServiceList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin] = useContext(AdminContext);

  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      "https://pacific-bastion-98056.herokuapp.com/userSelf?email=" +
        loggedInUser.email
    )
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
          <div
            style={{
              background: "#fff",
              padding: "10px 20px ",
              marginLeft: "-15px",
            }}
            className="d-flex  justify-content-between "
          >
            <h2>Service List</h2>
            <div className="d-flex">
              <img
                src={loggedInUser.photo}
                style={{ height: "40px", borderRadius: "50px" }}
                alt=""
              />
              <h4 className="ml-2">{loggedInUser.name}</h4>
            </div>
          </div>
          {/* {isAdmin ? ( */}

          <AdminTabel />
          {/* // ) : (
          //   <div className="card-deck   mt-5">
          //     {item.map((item) => (
          //       <ServiceListDetails item={item} />
          //     ))} */}
          {/* </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
