import React from "react";
import "./index.css";

const VIKTitle = ({ href }) => {
  return (
    <div className="VIK-Title">
      <a href={href}>
        <img
          src="https://asset.kompas.com/data/2017/wp/images/logo-vik.png"
          alt="vik"
        />
      </a>
    </div>
  );
};

export default VIKTitle;
