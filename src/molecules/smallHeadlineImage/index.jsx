import React from "react";
import Text from "../../atoms/text/index";
import "./index.css";

const smallHeadline = ({ smallHeadTitle, image }) => {
  return (
    <div className="smallHeadline container">
      <img
        src={
          image
            ? image
            : "https://asset.kompas.com/crops/D0MCmlFN3AHCL9VCUpCV6SldJ9w=/0x64:1280x917/185x124/data/photo/2020/09/10/5f595661e1f3b.jpeg"
        }
        alt={image}
      />

      <div className={"smallHeadTitle"}>
        <Text text={smallHeadTitle} />
      </div>
    </div>
  );
};

export default smallHeadline;
