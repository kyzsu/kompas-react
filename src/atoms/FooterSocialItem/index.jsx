import React from "react";
import "./index.css";

const SocialItem = ({ href, icon, alt }) => {
  return (
    <div className="Social-Item">
      <a className="Social-Link" href="https://instagram.com/kompascom">
        <img className="Icon" src={icon} alt={alt ? alt : "sosmed"} />
      </a>
    </div>
  );
};

export default SocialItem;
