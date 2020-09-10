import React from "react";
import "./index.css";

const FooterMenuItem = ({ href, alt }) => {
  return (
    <div className="Footer-Menu-Item">
      <a className="Footer-Menu-Link" href={href}>
        {alt ? alt : "contoh"}
      </a>
    </div>
  );
};

export default FooterMenuLink;
