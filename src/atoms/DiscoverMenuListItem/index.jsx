import React from "react";

const DiscoverMenuListItem = ({ key, href, text }) => {
  return (
    <li key={key}>
      <a href={href}>{text}</a>
    </li>
  );
};
export default DiscoverMenuListItem;
