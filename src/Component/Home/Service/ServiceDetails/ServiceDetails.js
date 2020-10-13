import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServicesContext } from "../../../../App";

const ServiceDetails = (props) => {
  const [item, setItem] = useContext(ServicesContext);
  const { title, description } = props.blog;
  return (
    <div className="card ">
      <Link to="/dashbord">
        <div onClick={() => setItem(props.blog)}>
          <div className="card-header d-flex  justify-content-center">
            <img
              className="mx-3"
              src={`data:imge/png;base64,${props.blog.image.img}`}
              alt=""
              width="60"
            />
          </div>
          <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text text-secondary mt-4">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceDetails;
