import { Add, AddShoppingCart, StorageOutlined } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logos/logo.png";
import SmsIcon from "@material-ui/icons/Sms";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./Sidebar.css";
import { UserContext } from "../../../App";
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <section style={{ height: "100vh" }}>
      <img className="mt-5 mb-5" style={{ height: "40px" }} src={Logo} alt="" />
      <ul className="sidebar">
        <li>
          <Link to="/order">
            <AddShoppingCart /> Order
          </Link>
        </li>
        <li>
          <Link to="/servicelist">
            <StorageOutlined /> Service list
          </Link>
        </li>
        <li>
          <Link to="/review">
            <SmsIcon /> Review
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li>
              <Link to="/addservice">
                <Add /> Add service
              </Link>
            </li>
            <li>
              <Link to="/makeadmin">
                <PersonAddIcon /> Make Admin
              </Link>
            </li>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Sidebar;