import React from "react";
const style = {
  backgroundColor: "#FFFFFF",
  padding: "10px 40px",

  marginLeft: "-15px",
};
const TitleBar = (props) => {
  return (
    <div>
      <h2 style={style}>{props.name}</h2>
    </div>
  );
};

export default TitleBar;
