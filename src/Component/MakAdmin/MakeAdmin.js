import React from "react";
import Sidebar from "../Admin/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import TitleBar from "../Sheard/TitleBar/TitleBar";
const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/admin", {
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <TitleBar name="Make Admin" />
          <div className="col-md-5 mt-5 pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                name="email"
                defaultValue="Enter Email"
                type="email"
                className="form-control"
                ref={register}
              />
              <br />

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
