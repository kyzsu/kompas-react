import React from "react";
import "./index.css";

const HeadlineThumbLink = ({ href, alt }) => {
  return (
    <a
      className="Headline-Thumb-Link"
      href={
        href
          ? href
          : "https://nasional.kompas.com/read/2020/09/10/11130541/jenazah-jakob-oetama-diserahkan-ke-negara-untuk-dimakamkan-secara-militer"
      }
    >
      <h2 className="Headline-Thumb-Title">
        {alt
          ? alt
          : "Jenazah Jakob Oetama Diserahkan ke Negara untuk Dimakamkan Secara Militer"}
      </h2>
    </a>
  );
};

export default HeadlineThumbLink;
