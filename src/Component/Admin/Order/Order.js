import React, { useContext } from "react";
import { ServicesContext, UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [item] = useContext(ServicesContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const orderData = { ...data, ...item };
    fetch("https://pacific-bastion-98056.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Order was successfully");
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
          <div
            style={{
              background: "#fff",
              padding: "10px 20px ",
              marginLeft: "-15px",
            }}
            className="d-flex  justify-content-between "
          >
            <h2>Order</h2>
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
              <button className="btn btn-brand" type="submit">
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
