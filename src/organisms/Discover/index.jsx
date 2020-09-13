import React from "react";
import DiscoverMenu from "../../molecules/DiscoverMenu/index";
import "./index.css";

const Discover = ({ DiscoverLists }) => {
  return (
    <div className="discover">
      <div className="row container">
        <div className="row col-offset-fluid">
          <div className="col-bs10-7">
            <div className="title">
              <div className="title__content">Jelajahi</div>
            </div>
            <div className="row col-offset-fluid">
              {DiscoverLists.map((lists) => (
                <DiscoverMenu id={lists.id} DiscoverMenuList={lists.items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
