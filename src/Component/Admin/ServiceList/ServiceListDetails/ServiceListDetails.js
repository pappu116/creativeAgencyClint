import React from "react";

const ServiceListDetails = (props) => {
  const { title, description, status } = props.item;
  const styleDone = {
    background: "#C6FFE0",
    color: "009444",
    padding: "5px 20px",
  };
  const stylePending = {
    background: "#FFE3E3",
    color: "red",
    padding: "5px 20px",
  };
  return (
    <div className="col-md-5">
      <div className="card ">
        <div className="card-header d-flex justify-content-between ">
          <img
            className="mx-3"
            src={`data:imge/png;base64,${props.item.image.img}`}
            alt=""
            width="60"
          />
          <button
            type="button"
            style={status === "Done" ? styleDone : stylePending}
            class="btn "
          >
            {status}
          </button>
        </div>
        <div className="card-body">
          <h5 className="text-left">{title}</h5>
          <p className="card-text text-secondary text-left mt-4">
            {description}
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ServiceListDetails;
