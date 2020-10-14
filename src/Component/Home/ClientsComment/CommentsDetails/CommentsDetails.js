import React from "react";

const CommentsDetails = (props) => {
  const { name, title, about, img } = props.blog;
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 ">
      <div className="card shadow-sm">
        <div className="card-header  d-flex  align-items-center">
          <img className="mx-3" src={img} alt="" width="60" />
          <div>
            <h5>{name}</h5>
            <h6>{title}</h6>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text text-secondary text-left mt-2">{about}</p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CommentsDetails;
