import React from "react";
import "./index.css";
import DiscoverTitle from "../../molecules/DiscoverTitle/index";
import DiscoverMenu from "../../molecules/DiscoverMenu/index";

const Discover = ({
  DisItemLeft,
  DisItemMidLeft,
  DisItemMidRight,
  DisItemRight,
}) => {
  return (
    <div className="Discover">
      <div className="row container">
        <div className="row">
          <div className="col-bs10-7">
            <DiscoverTitle />
            <div className="row">
              <div className="col-bs12-3">
                <DiscoverMenu DiscoverItems={DisItemLeft} />
              </div>
              <div className="col-bs12-3">
                <DiscoverMenu DiscoverItems={DisItemMidLeft} />
              </div>
              <div className="col-bs12-3">
                <DiscoverMenu DiscoverItems={DisItemMidRight} />
              </div>
              <div className="col-bs12-3">
                <DiscoverMenu DiscoverItems={DisItemRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
