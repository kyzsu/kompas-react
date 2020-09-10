import React from "react";
import "./index.css";

const SMButton = ({ icon, name }) => {
  return (
    <button className={`button ${name}`}>
      <img src={icon ? icon : "SM"} />
    </button>
  );
};

export default SMButton;
