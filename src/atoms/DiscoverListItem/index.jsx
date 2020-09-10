import React from "react";
import "./index.css";
const DiscoverListItem = ({ key, href, text }) => {
  return (
    <li key={key}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default DiscoverListItem;
