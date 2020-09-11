import React from "react";
import DiscoverListItem from "../../atoms/DiscoverListItem/index";
import "./index.css";

const DiscoverMenu = ({ DiscoverItems }) => {
  return (
    <ul className="Discover-Menu">
      {DiscoverItems.map((DiscItem) => (
        <DiscoverListItem
          key={DiscItem.id}
          href={DiscItem.href}
          text={DiscItem.text}
        />
      ))}
    </ul>
  );
};

export default DiscoverMenu;
