import React from "react";
import FooterLeftContent from "../../molecules/FooterLeftContent/index";
import FooterRightContent from "../../molecules/FooterRightContent/index";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row footer__bottom container">
        <FooterLeftContent />
        <FooterRightContent />
      </div>
    </div>
  );
};
export default Footer;
