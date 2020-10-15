import React, { useEffect, useState } from "react";
import "./Tabel.css";
const AdminTabel = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://pacific-bastion-98056.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const hanelChange = (id, index) => {
    const status = document.getElementById(`inputGroupSelect${index}`).value;
    console.log(status);
    const product = { id, status };
    fetch(`https://pacific-bastion-98056.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const styleDone = {
    color: "#009444",
    padding: "5px 20px",
  };
  const stylePending = {
    color: "#FF4F4F",
    padding: "5px 20px",
  };
  return (
    <div className=" backgroundAdmin row">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.title}</td>
              <td>{item.description} </td>
              <td>
                <select
                  style={item.status === "Done" ? styleDone : stylePending}
                  className="custom-select"
                  onChange={() => hanelChange(item._id, index)}
                  id={"inputGroupSelect" + index}
                >
                  <option selected>{item.status}</option>
                  <option name="status" value="Done">
                    Done
                  </option>
                  <option name="status" value="On Going">
                    On Going
                  </option>
                  <option name="status" value="Cancel">
                    Cancel
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTabel;
