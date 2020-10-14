import React from "react";
import { useForm } from "react-hook-form";
import "./FooterContactForm.css";
const FooterContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section style={{ backgroundColor: "#FBD062" }}>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-5 mt-5">
            <h2>
              Let us handle your <br /> project, professionally{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              perferendis.
            </p>
          </div>
          <div className="col-md-6 offset-md-1 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="email"
                className="control"
                defaultValue="Your email address"
                ref={register}
              />
              <br />
              <input
                name="name"
                className="control"
                ref={register({ required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.name && <span>This field is required</span>}
              <br />
              <textarea
                className="controltext"
                name="description"
                id=""
                ref={register}
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <button className="btn btn-brand" type="submit">
                send
              </button>
            </form>
          </div>
        </div>
        <div className="text-center  p-5">
          copyright pograming Hero {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default FooterContactForm;
