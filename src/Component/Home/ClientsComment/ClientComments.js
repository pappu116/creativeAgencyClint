import React, { useEffect, useState } from "react";
import CommentsDetails from "./CommentsDetails/CommentsDetails";
const ClientComments = () => {
  const [item, setItem] = useState([]);
  const first3 = item.slice(0, 5);
  useEffect(() => {
    fetch("https://pacific-bastion-98056.herokuapp.com/rivews")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <section className="blogs my-5 pb-5">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Clients <span style={{ color: "#79B058" }}>Feedback</span>{" "}
          </h2>
        </div>
        <div className="card-deck mt-5">
          {first3.map((blog) => (
            <CommentsDetails blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientComments;
