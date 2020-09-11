import React from "react";
import FooterLogo from "../../atoms/FooterLogo/";
import FooterLogoAchieveItem from "../../atoms/FooterLogoAchieveItem";
import "./index.css";

const FooterContentLeft = () => {
  return (
    <div className="col-bs10-3">
      <FooterLogo />
      <FooterLogoAchieveItem />
    </div>
  );
};

export default FooterContentLeft;
