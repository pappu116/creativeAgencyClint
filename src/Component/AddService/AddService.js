import React, { useContext, useState } from "react";
import Sidebar from "../Admin/Sidebar/Sidebar";
import icon from "../../images/logos/cloud-upload-outline 1.png";
import "./AddService.css";
import { AdminContext, UserContext } from "../../App";
const AddService = () => {
  const [isAdmin] = useContext(AdminContext);
  const [loggedInUser] = useContext(UserContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handelBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handelfileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handelSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("description", info.description);

    fetch("https://pacific-bastion-98056.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Service Added successfully");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" container-fluid backgroundAdmin ">
      <div className="backgroundAdmin row ">
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
            <h2>Add Service</h2>
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
            <form onSubmit={handelSubmit}>
              <div className="d-flex displayStyle ">
                <div className="col-md-5 ">
                  <div className="form-group">
                    <label for="title">Title</label>
                    <input
                      onBlur={handelBlur}
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter Title"
                    />
                  </div>
                  <div className="form-group">
                    <label for="description">Description</label>
                    <textarea
                      onBlur={handelBlur}
                      className="controltext"
                      name="description"
                      cols="30"
                      rows="10"
                      placeholder="Enter Designation"
                    ></textarea>
                  </div>
                </div>
                <div className=" offset-md-1">
                  <label for="file">Icon</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        onChange={handelfileChange}
                        className="custom-file-input"
                        id="inputGroupFile02"
                      />
                      <label
                        className="custom-file-label"
                        for="inputGroupFile02"
                      >
                        <img style={{ height: "30px" }} src={icon} alt="" />
                        Upload Image
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="d-flex justify-content-end">
                <button type="submit" className="btn btn-brand mr-5 ">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddService;
