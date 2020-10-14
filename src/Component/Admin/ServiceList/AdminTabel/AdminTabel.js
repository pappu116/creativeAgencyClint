import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Tabel.css";

const AdminTabel = () => {
  const [info, setInfo] = useState({});
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://pacific-bastion-98056.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const hanelChange = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    fetch("hhttp://localhost:5000/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  console.log(info);

  return (
    <div className=" backgroundAdmin row">
      <table className="tabel">
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
          {item.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.title}</td>
              <td>{item.description} </td>
              <td>
                <select
                  class="custom-select"
                  onChange={hanelChange}
                  id="inputGroupSelect01"
                >
                  <option name="status" selected>
                    {item.status}
                  </option>
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
