import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Sidebar from "../Admin/Sidebar/Sidebar";
const Review = () => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://pacific-bastion-98056.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Thank You Your Order has been successfully");
        console.log(result);
      });
  };

  return (
    <section className=" container-fluid">
      <div className="row backgroundAdmin">
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
            <h2>Review</h2>
            <div className="d-flex">
              <img
                src={loggedInUser.photo}
                style={{ height: "40px", borderRadius: "50px" }}
                alt=""
              />
              <h4 className="ml-2">{loggedInUser.name}</h4>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                className="control"
                defaultValue="Your name "
                ref={register}
              />
              <br />
              <input
                name="title"
                placeholder="Company name"
                className="control"
                ref={register({ required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.name && <span>This field is required</span>}
              <br />
              <textarea
                className="controltext"
                name="about"
                placeholder="description"
                id=""
                ref={register}
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <button className="btn btn-brand" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
