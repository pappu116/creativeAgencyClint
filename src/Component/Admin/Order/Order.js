import React, { useContext } from "react";
import { ServicesContext, UserContext } from "../../../App";
import TitleBar from "../../Sheard/TitleBar/TitleBar";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [item] = useContext(ServicesContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const orderData = { ...data, ...item };
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <section className=" container-fluid">
      <div className="row backgroundAdmin">
        <div className="col-md-2 bg-color">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <TitleBar name="Order" />
          <div className="col-md-5 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                className="control"
                defaultValue={loggedInUser.name}
                ref={register}
              />
              <br />

              <input
                name="email"
                type="email"
                className="control"
                defaultValue={loggedInUser.email}
                ref={register}
              />
              <br />

              <input
                name="title"
                className="control"
                defaultValue={item.title}
                ref={register}
              />
              <br />

              <textarea
                className="controltext"
                name="description"
                ref={register}
                defaultValue={item.description}
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <input
                name="price"
                className="control"
                placeholder="Price"
                ref={register}
              />
              <input
                style={{ display: "none" }}
                name="status"
                className="control"
                defaultValue="Pending"
                ref={register}
              />
              <br />
              <button className="btn btn-primary" type="submit">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
