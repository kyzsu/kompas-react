import React from "react";
import DiscoverMenuListItem from "../../atoms/DiscoverMenuListItem/index";
import "./index.css";

const DiscoverMenu = ({ id, DiscoverMenuList }) => {
  return (
    <div className="col-bs12-3" key={id}>
      <ul className="discover__menu">
        {DiscoverMenuList.map((items) => (
          <DiscoverMenuListItem
            key={items.id}
            href={items.href}
            text={items.text}
          />
        ))}
      </ul>
    </div>
  );
};
export default DiscoverMenu;
