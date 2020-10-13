import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Admin/Sidebar/Sidebar";
import TitleBar from "../Sheard/TitleBar/TitleBar";
const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
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
    <section className=" container-fluid">
      <div className="row backgroundAdmin">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <TitleBar name="Review" />
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
              <button className="btn btn-primary" type="submit">
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
