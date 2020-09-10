import React from "react";
import "./index.css";

const HeadTitle = ({ text, type }) => {
  return <h3 className={`text ${type}`}>{text}</h3>;
};

export default HeadTitle;
