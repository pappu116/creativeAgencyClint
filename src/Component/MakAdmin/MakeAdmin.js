import React, { useContext } from "react";
import Sidebar from "../Admin/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { AdminContext, UserContext } from "../../App";
const MakeAdmin = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin] = useContext(AdminContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://pacific-bastion-98056.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container-fluid backgroundAdmin">
      <div className="row">
        <div className="col-md-2 bg-color">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div
            style={{
              background: "#fff",
              padding: "10px 20px ",
              marginLeft: "-15px",
            }}
            className="d-flex  justify-content-between "
          >
            <h2>Make Admin</h2>
            <div className="d-flex">
              <img
                src={loggedInUser.photo}
                style={{ height: "40px", borderRadius: "50px" }}
                alt=""
              />
              <h4 className="ml-2">{loggedInUser.name}</h4>
            </div>
          </div>
          {isAdmin && (
            <div className="col-md-5 mt-5 pt-5">
              <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  name="email"
                  defaultValue="Enter Email"
                  type="email"
                  className="form-control"
                  ref={register}
                />
                <br />

                <input
                  style={{ background: "#009444", color: "#fff" }}
                  className="btn ml-2"
                  type="submit"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
