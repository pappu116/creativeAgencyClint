import React from "react";

const ServiceListDetails = (props) => {
  const { title, description, status } = props.item;
  return (
    <div className="col-md-5">
      <div className="card ">
        <div className="card-header d-flex ">
          <img
            className="mx-3"
            src={`data:imge/png;base64,${props.item.image.img}`}
            alt=""
            width="60"
          />
          <button className="btn btn-primary">{status}</button>
        </div>
        <div className="card-body">
          <h5 className="text-left">{title}</h5>
          <p className="card-text text-secondary text-left mt-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceListDetails;
