import React from "react";
import FooterSocial from "../../atoms/FooterSocial/index";
import FooterMenu from "../../atoms/FooterMenu/index";
import FooterCopy from "../../atoms/FooterCopy/index";
import "./index.css";

const FooterContentRight = () => {
  return (
    <div className="col-bs10-7">
      <div className="text-right">
        <FooterSocial />
        <FooterMenu />
        <FooterCopy />
      </div>
    </div>
  );
};
export default FooterContentRight;
