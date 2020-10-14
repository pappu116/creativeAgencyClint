import React, { useState } from "react";
import Sidebar from "../Admin/Sidebar/Sidebar";
import TitleBar from "../Sheard/TitleBar/TitleBar";
const AddService = () => {
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
          <TitleBar name="Add Service" />
          <form onSubmit={handelSubmit}>
            <div
              style={{ backgroundColor: "#fff", padding: "20px" }}
              className="d-flex col-md-8"
            >
              <div className="col-md-5 ">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    onBlur={handelBlur}
                    type="text"
                    class="form-control"
                    name="title"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                    onBlur={handelBlur}
                    type="text"
                    class="form-control"
                    name="description"
                  ></textarea>
                </div>
              </div>
              <div class="form-group form-file">
                <label for="file">Icon</label>
                <input
                  onChange={handelfileChange}
                  type="file"
                  class="form-control"
                  name="file"
                />
              </div>
            </div>
            <br />
            <button type="submit" class="btn btn-primary ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
